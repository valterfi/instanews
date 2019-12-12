import UrlBuilder from "./UrlBuilder";
import Transformer from "./Transformer";

export default class Instanews {

    constructor(env) {
        this.urlBuilder = new UrlBuilder(env.NY_API_KEY);
    }

    run() {

        let section = 'home';
        let url = this.urlBuilder.buildTopStories(section);

        this.processTopStories(url); //temporary

        this.configSelectionChange();

    }

    configSelectionChange() {

    }

    processTopStories(url) {
        $.getJSON(url)
            .always(function (data) {
                let transformer = new Transformer(data.results);
                let stories = transformer.transform();

                stories.forEach(function (story) {
                    let element = story.createElement();
                    element.appendTo('.container');
                });
            });
    }
}