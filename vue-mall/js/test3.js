// let a = 1
// if(true) {
    // a = 2
    // console.log(a)
//     let a = 3
// }
// console.log(a)



// var a = []
// a.concat[1, 2, 3] // concat不会影响数组的变化
// a.push(4)
// console.log(a)

// var a = [1, 2, 3]
// var b = a.slice(2, 3) // slice不会影响数组的变化，七十点的的index不算
// console.log(b)

// filter的用法，不会影响原数组
// var arr = [1, 2, 3, 4]
// var arr1 = arr.filter((a) => {
//     return a>3
// })
// console.log(arr)
// console.log(arr1)

// reduce的用法，不会影响元数组
// var arr = [1, 2, 3, 4]
// var arr1 = arr.reduce((pre, next) => {
//     return pre + next
// })
// console.log(arr)
// console.log(arr1)

// map的用法，不糊影响原来的数组
// var arr = [1, 2, 3, 4]
// var arr1 = arr.map((item) => {
//     return item * 2
// })
// console.log(arr)
// console.log(arr1)

// var arr = [1, 2, 3, 4]
// var arr1 = arr.forEach((item, index) => {
//     arr[index] =  item * 2
// })
// console.log(arr)
// console.log(arr1) // forEach会改变原来的数组，返回的为undefined

// for(var i=0; i<5; i++){
//     (function (i) {
//         setTimeout(() => {
//             console.log(i)
//         }, 500)
//     })(i)
// }

// var str = 'abcdefg'
// var str2 = str.slice(0,str.length-1)
// console.log(str2, str.length)

// var array1=Array(3);
//     array1[0]=2;
// var result=array1.map(element => "1");
//    console.log(result);

// var str = '2'
// var b = str => '1'
// console.log(b()) // 所以str => 1是一个返回'1'的函数

// for(var i={j:0};i.j <5;i.j++){
//     (function(i){
//     setTimeout(function(){console.log(i.j)},0);
//     })(JSON.parse(JSON.stringify(i)));
//  }

var execFunc = function(){
    console.log("executed");
};
// setTimeout(execFunc,0);
console.log("changed");
execFunc = function(){
    console.log("another executed");
}
setTimeout(execFunc,0);
