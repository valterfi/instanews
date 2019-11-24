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

        console.log(env.NY_API_KEY);
    }

});
