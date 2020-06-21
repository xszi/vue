// 手写一个发布订阅模式
function Dep() {
    this.subs = []
}
Dep.prototype.addSub = function(watcher) {
    this.subs.push(watcher)
}
Dep.prototype.notify = function() {
    this.subs.forEach(sub => sub.update())
}

function Watcher(fn) {
    this.fn = fn
}
Watcher.prototype.update = function(fn){
    this.fn()
}

// var watcher1 = new Watcher(() => { console.log(1)})
// var watcher2 = new Watcher(() => { console.log(2)})
// var dep = new Dep()
// dep.addSub(watcher1)
// dep.addSub(watcher2)
// dep.notify()

console.log(1)
setTimeout(() => {
    console.log(2)
}, 0)
setTimeout(() => {
    console.log(3)
}, 500)
setTimeout(() => {
    console.log(4)
}, 1)
setTimeout(() => {
    console.log(5)
}, 2)
setTimeout(() => {
    console.log(6)
}, 3)
setTimeout(() => {
    console.log(7)
}, 4)
setTimeout(() => {
    console.log(8)
}, 5)
setTimeout(() => {
    console.log(9)
}, 0)
console.log(10)
