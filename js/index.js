$(function () {

    let env;
    $.getJSON("env.json", function (data) {
        env = data;
    })
        .always(function () {
            main();
        });


    function main() {
        //code here ...

        //var m = require("./a.js");

        var math = require("../modules/a.js").math;

        console.log(math.findSum(1, 2)); //3
        console.log(math.findSub(1, 2)); //-1   

        console.log(env.NY_API_KEY);
    }



});
