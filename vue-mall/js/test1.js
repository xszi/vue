
// 计算字符串中出现最多次字母，及次数s
function audit(str) {
	let targetObj = {}
	let arr = str.split('')
	for(let item in arr){
		if(targetObj[arr[item]]){
			targetObj[arr[item]]++
		}else{
			targetObj[arr[item]] = 1
		}
	}
	let numMax=0, target=''
	for(let key in targetObj){
		if(targetObj[key]>numMax){
			numMax = targetObj[key]
			target = key
		}
	}
	return {numMax, target}
}

let str = '11111aaaabbc'
console.log(audit(str))

// 利用reduce去重，注意要赋初值
function noRepeat(arr) {
	let arrTarget = []
	arr.reduce((cur, next) => {
		if(arrTarget.indexOf(next) == '-1'){
			arrTarget.push(next)
		}
		return next
	}, '')
	return arrTarget
}

// var arr = [5, 1, 33, 2, 4, 4, 8, 1]
// console.log(noRepeat(arr))

//计算当年还剩多少时间的倒数计时程序，要求网页上实时动态显示“××年还剩××天××时××分××秒
function count() {
	var date = new Date() // 获取当前时间
	var year = date.getFullYear() // 获取当前年份
	var endTimeThisYear = new Date(year, 11, 30, 23, 59, 59) // 获取年底最后时间
	var timer = (endTimeThisYear - date) / 1000 // 获取剩余时间的总秒数
	// 把总秒数换成几天几小时几分钟几秒钟
	var days = Math.floor(timer / (24*60*60))
	var hours = Math.floor(timer % (24*60*60) / (60*60))
	var minutes = Math.floor(timer % (24*60*60) % (60*60) / 60)
	var seconds = Math.floor(timer % (24*60*60) % (60*60) % 60)
	var str = year + "年还剩" + days + "天" + hours + "时" + minutes + "分" + seconds + "秒";
	console.log(str);
}

// setInterval(count, 1000)

function deepCopy(obj) {
	if(!obj) return obj
	//判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
	var objCopy = Array.isArray(obj) ? [] : {};
	//进行深拷贝的不能为空，并且是对象或者是数组
	if (obj && typeof obj === "object") {
		for (key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (obj[key] && typeof obj[key] === "object") {
					objCopy[key] = deepCopy(obj[key]);
				} else {
					objCopy[key] = obj[key];
				}
			}
		}
	}
	return objCopy;
}
function deepCopy1(source) {
    if(!source) return source // 兼容null，undefined
    let target = source.constructor === Array ? [] : {}
    for (let key in source) {
        if(source.hasOwnProperty(key)) { // 是自有非继承属性
            if(source[key] && typeof(source[key]) === 'object') { //是对象需要递归,typeof [] 也等于object
                target[key] = source[key].constructor === Array ? [] : {}
                target[key] = deepCopy(source[key])
            } else {  //非对象直接赋值
                target[key] = source[key]
            }
        }
    }
    return target
}
var obj = {
	'aa': 1,
	'bb': {
		'cc': 'haha'
	}
}
let arr = [1, [4,6], 9, [8,4,5]]
// console.log(deepCopy1(arr))
// console.log(deepCopy1(obj))