import UrlBuilder from './UrlBuilder';
import Transformer from './Transformer';
import { NY_API_TOP_STORIES_SECTIONS } from '../settings'

export default class Instanews {

    constructor(env) {
        this.urlBuilder = new UrlBuilder(env.NY_API_KEY);
    }

    run() {
        $('.loading').hide();
        this.configSelect(NY_API_TOP_STORIES_SECTIONS);
    }

    configSelect(sections) {
        sections.forEach(function (section) {
            $('.dropdown select')
                .append(`<option value="${section.toLowerCase()}">${section}</option>`);
        });

        $('.dropdown select').selectmenu({
            width: 150
        });

        $('.dropdown select').selectmenu({
            change: (event) => {
                this.clean();
                if (event.target.value !== '') {
                    let url = this.urlBuilder.buildTopStories(event.target.value);
                    this.processTopStories(url);
                } else {
                    $('img').removeClass('ny-logo').addClass('ny-logo-start');
                    $('.choose-section-after-search').removeClass('choose-section-after-search').addClass('choose-section');
                }
            }
        });

    }

    processTopStories(url) {
        $('.loading').show();
        $.getJSON(url, function () {
            $('.loading').css('display', 'initial');
        })
            .always(function (data) {
                if (data.status === 'OK') {
                    $('img').removeClass('ny-logo-start').addClass('ny-logo');
                    $('.choose-section').removeClass('choose-section').addClass('choose-section-after-search');
                    let transformer = new Transformer(data.results.slice(0, 12));
                    let stories = transformer.transform();

                    stories.forEach(function (story) {
                        let element = story.createElement();
                        element.appendTo('.container');
                    });
                }
                $('.loading').hide();
            });
    }

    clean() {
        $('.container').empty();
    }
}