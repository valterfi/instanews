let envModule = require('./modules/env.js');

$(function () {

    envModule = new envModule();
    envModule.start(main);

    function main(env) {
        console.log("teste: " + env.NY_API_KEY);
    }

});
