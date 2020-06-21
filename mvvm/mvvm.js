// 创建一个Mvvm构造函数
// 这里用es6方法将options赋一个初始值，防止没传，等同于options || {}
function Mvvm(options = {}) {   
    // vm.$options Vue上是将所有属性挂载到上面
    // 所以我们也同样实现,将所有属性挂载到了$options
    this.$options = options;
    // this._data 这里也和Vue一样
    let data = this._data = this.$options.data;
    
    // 数据劫持, 添加get，set属性，使之成为响应式对象
    observe(data);
    // 数据代理
    for (let key in data) {
        Object.defineProperty(this, key, {
            configurable: true,
            get() {
                return this._data[key];     // 如this.a = {b: 1}
            },
            set(newVal) {
                this._data[key] = newVal;
            }
        });
    }
    console.log(this, 'this')
    // 数据编译
    new Compile(options.el, this)
}

// 发布订阅模式  订阅和发布 如[fn1, fn2, fn3]
function Dep() {
    // 一个数组(存放函数的事件池)
    this.subs = [];
}

Dep.prototype = {
    addSub(sub) {   
        this.subs.push(sub);    
    },
    notify() {
        // 绑定的方法，都有一个update方法
        this.subs.forEach(sub => sub.update());
    }
};


// 创建一个Observe构造函数
// 写数据劫持的主要逻辑
function Observe(data) {
    let dep = new Dep();
    // 所谓数据劫持就是给对象增加get,set
    // 先遍历一遍对象再说
    for (let key in data) {     // 把data属性通过defineProperty的方式定义属性
        let val = data[key];
        observe(val);   // 递归继续向下找，实现深度的数据劫持
        Object.defineProperty(data, key, {
            configurable: true,
            get() {
                Dep.target && dep.addSub(Dep.target);   // 将watcher添加到订阅事件中 [watcher]
                return val;
            },
            set(newVal) {   // 更改值的时候
                if (val === newVal) {   // 设置的值和以前值一样就不理它
                    return;
                }
                val = newVal;   // 如果以后再获取值(get)的时候，将刚才设置的值再返回去
                observe(newVal);    // 当设置为新值后，也需要把新值再去定义成属性
                dep.notify();   // 让所有watcher的update方法执行即可
            }
        });
    }
}

// 外面再写一个函数
// 不用每次调用都写个new
// 也方便递归调用
function observe(data) {
    // 如果不是对象的话就直接return掉
    // 防止递归溢出
    if (!data || typeof data !== 'object') return;
    return new Observe(data);
}

// 重写Watcher构造函数
function Watcher(vm, exp, fn) {
    this.fn = fn;
    this.vm = vm;
    this.exp = exp;
    // 添加一个事件
    // 这里我们先定义一个属性
    Dep.target = this;
    let arr = exp.split('.');
    let val = vm;
    arr.forEach(key => {    // 取值
        val = val[key];     // 获取到this.a.b，默认就会调用get方法
    });
    Dep.target = null;
}

Watcher.prototype.update = function() {
    // notify的时候值已经更改了
    // 再通过vm, exp来获取新的值
    let arr = this.exp.split('.');
    let val = this.vm;
    arr.forEach(key => {    
        val = val[key];   // 通过get获取到新的值
    });
    this.fn(val);   // 将每次拿到的新值去替换{{}}的内容即可
};

// 创建Compile构造函数
function Compile(el, vm) {
    // 将el挂载到实例上方便调用
    vm.$el = document.querySelector(el);
    // 在el范围里将内容都拿到，当然不能一个一个的拿
    // 可以选择移到内存中去然后放入文档碎片中，节省开销
    let fragment = document.createDocumentFragment();
    
    while (child = vm.$el.firstChild) {
        fragment.appendChild(child);    // 此时将el中的内容放入内存中
    }
    // 对el里面的内容进行替换
    function replace(frag) {
        Array.from(frag.childNodes).forEach(node => {
            let txt = node.textContent;
            let reg = /\{\{(.*?)\}\}/g;   // 正则匹配{{}}
            debugger
            // 双向绑定 V-->M
            if (node.nodeType === 3 && reg.test(txt)) { // 文本节点
                function replaceTxt() {
                    node.textContent = txt.replace(reg, (matched, placeholder) => {   
                        console.log("V-->M", placeholder);   // 匹配到的分组 如：song, album.name, singer...
                        new Watcher(vm, placeholder, replaceTxt);   // 监听变化，进行匹配替换内容
                        
                        return placeholder.split('.').reduce((val, key) => {
                            return val[key]; 
                        }, vm);
                    });
                };
                // 
                replaceTxt();
            }

            // 双向绑定 V-->M
            if (node.nodeType === 1) {  // 元素节点, 2为属性节点
                console.log(node,'----')
                let nodeAttr = node.attributes; // 获取dom上的所有属性,是个类数组
                Array.from(nodeAttr).forEach(attr => {
                    let name = attr.name;   // v-model  type
                    let exp = attr.value;   // c        text
                    if (name.includes('v-')){
                        node.value = vm[exp];   // this.c 为 2
                    }
                    // 监听变化
                    new Watcher(vm, exp, function(newVal) {
                        node.value = newVal;   // 当watcher触发时会自动将内容放进输入框中
                    });
                    console.log("11111")
                    node.addEventListener('input', e => {
                        console.log("222222")
                        let newVal = e.target.value;
                        // 相当于给this.c赋了一个新值
                        // 而值的改变会调用set，set中又会调用notify，notify中调用watcher的update方法实现了更新
                        vm[exp] = newVal;   
                    });
                });
            }
            // 如果还有子节点，继续递归replace
            if (node.childNodes && node.childNodes.length) {
                replace(node);
            }
        });
    }
    
    replace(fragment);  // 替换内容
    
    vm.$el.appendChild(fragment);   // 再将文档碎片放入el中
}




