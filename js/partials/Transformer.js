import Story from "./Story";

export default class Transformer {

    constructor(results) {
        this.results = results;
    }

    transform() {
        let stories = [];

        this.results.forEach(function (item) {
            let story = new Story(item.abstract, item.url);
            
            let multimedia = item.multimedia;
            if (multimedia && multimedia.length > 0) {
                story.setImageUrl(multimedia[multimedia.length - 1].url)
            }

            stories.push(story);
        });

        console.log(stories);

        return stories;
    }

}