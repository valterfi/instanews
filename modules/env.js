//a.js
var sum = function(x, y){
    return x + y;
}

var sub = function(x, y){
    return x - y;
}

var math = {
    findSum: function(a, b){
        return sum(a,b);
    },

    findSub: function(a, b){
        return sub(a, b);
    }
}

//All the variable we want to expose outside needs to be property of "exports" object.
exports.math = math;