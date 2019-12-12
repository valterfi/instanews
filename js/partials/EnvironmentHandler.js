export default class EnvironmentHandler {
    constructor() {

    }

    start(callback) {
        $.getJSON('env.json')
            .always(function (data) {
                callback(data);
            });
    }
}