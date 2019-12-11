export default class EnvironmentHandler {
    constructor() {
        this.start = function (callback) {
            $.getJSON('env.json')
                .always(function (data) {
                    callback(data);
                });
        };
    }
}