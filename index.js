function isOdd(n){
    if(!isNumber(n)){
        return "Expected number"
    }
    if(n%2!==0 && (typeof(n)==Number)){
        return "Number is odd"
    }else{
        return "Number is not odd"
    }
}

module.exports={
    isOdd
}
