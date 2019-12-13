import UrlBuilder from './UrlBuilder';
import Transformer from './Transformer';
import { NY_API_TOP_STORIES_SECTIONS } from '../settings'

export default class Instanews {

    constructor(env) {
        this.urlBuilder = new UrlBuilder(env.NY_API_KEY);
    }

    run() {
        this.configSelect(NY_API_TOP_STORIES_SECTIONS);
    }

    configSelect(sections) {
        sections.forEach(function (section) {
            $('.dropdown select')
                .append(`<option value="${section.toLowerCase()}">${section}</option>`);
        });

        $('.dropdown select').on('change', (event) => {
            if (event.target.value !== '') {
                let url = this.urlBuilder.buildTopStories(event.target.value);
                this.clean();
                this.processTopStories(url);
            }
        });
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

    clean() {
        $('.container').empty();
    }
}