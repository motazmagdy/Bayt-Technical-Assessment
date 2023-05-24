var arr1=[2,5,6,7,8,9]
var arr2=[21,1,2,9]
var arr3=[2,1,24,8,2,9]

function isValueLessthanTen(element){
    return element < 10
}

function all(arrayTest , callBackFn){
    for(var i = 0 ; i < arrayTest.length ; i++){
        if(!callBackFn(arrayTest[i])){
            return false
        }
    }
    return true
}

var check1 = all(arr1,isValueLessthanTen)
var check2 = all(arr2,isValueLessthanTen)
var check3 = all(arr3,isValueLessthanTen)
console.log(check1);
console.log(check2);
console.log(check3);