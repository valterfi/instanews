import { NY_API_TOP_STORIES_URL } from '../settings'

export default class UrlBuilder {

    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    buildTopStories(section) {
        return `${NY_API_TOP_STORIES_URL}${section}.json?api-key=${this.apiKey}`;
    }

}