class envModule {
    constructor() {
        this.start = function (callback) {
            $.getJSON('env.json')
                .always(function (data) {
                    callback(data);
                });
        };
    }
}

module.exports = envModule;