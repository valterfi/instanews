let envModule = require('./modules/env.js');

$(function () {

    envModule = new envModule();
    envModule.start(main);

    function main(env) {

        let option = "home";
        let url = `https://api.nytimes.com/svc/topstories/v2/${option}.json?api-key=${env.NY_API_KEY}`;
        let boxes = [];

        $.getJSON(url)
            .always(function (data) {
                let array = data.results;


                for (let index = 0; index < array.length; index++) {
                    //     $('<div class="box"> ' + array[index].item_type + '  </div>').appendTo('.container');
                    let link = $('<a></a>')
                        .attr("href", "http://www.globo.com");

                    let div = $('<div></div>')
                        .addClass("box")
                        .css("background", "url(\"https://static01.nyt.com/images/2019/12/09/nyregion/09dc-impeach-promo/merlin_165695310_79c00bce-e754-4d54-a3e5-17577d30914f-superJumbo.jpg\") center center/cover no-repeat")
                        .appendTo(link);

                    let p = $("<p></p>")
                        .text("At the House Judiciary Committee hearing, Democrats stuck to repeating the facts of their case as Republicans denounced impeachment as a misguided partisan process.")
                        .appendTo(div);

                    div.appendTo(link);

                    link.appendTo('.container');
                }

                console.log(data.results);
            });

        //console.log("teste: " + env.NY_API_KEY);
    }

});
