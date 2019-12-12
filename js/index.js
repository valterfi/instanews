import EnvironmentHandler from './partials/EnvironmentHandler';
import Instanews from './partials/Instanews'

$(function () {

    const environmentHandler = new EnvironmentHandler();
    environmentHandler.start(main);

    function main(env) {
        const instanews = new Instanews(env);
        instanews.run();
    }

});
