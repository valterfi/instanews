export default class Story {

    constructor(abstract, url, imageUrl) {
        this.abstract = abstract;
        this.url = url;
        this.imageUrl = imageUrl;
    }

    setImageUrl(imageUrl) {
        this.imageUrl = imageUrl;
    }

    createElement() {
        let element = $('<a></a>')
            .css('background', this.createBackgroundValue())
            .attr('href', this.url);

        let div = $('<div></div>')
            .addClass('box')
            .appendTo(element);

        $('<p></p>')
            .text(this.abstract)
            .appendTo(div);

        div.appendTo(element);

        return element;
    }

    createBackgroundValue() {
        let value = 'black';
        if (this.imageUrl) {
            value = `url("${this.imageUrl}")`;
        }
        return `${value} center center/cover no-repeat`;
    }

}