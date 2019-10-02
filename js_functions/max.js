
function maxarg(){
    var arr = [];
    for(var i = 0; i < arguments.length; i++){
        arr[i] = Number(arguments[i]);
    }

    return getMaxOfArray(arr);
}

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  ///


 ((arg) => {
    var arr = [];
    for(var i = 0; i < arg.length; i++){
        arr[i] = Number(arg[i]);
    }
    return Math.max.apply(null, arg);
})(arg)