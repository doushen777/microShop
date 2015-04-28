define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var homeCtrl = {

    	init: function(){
            appFunc.showToolbar();
            homeCtrl.renderHome();
            var bindings = [{
                element:'#homeView',
                event: 'show',
                handler: homeCtrl.renderHome
            }];

            VM.module('homeView').init({
                bindings:bindings
            });
        },

        renderHome: function(){
            if($$('#homeView .page-content')[0])
                return;
            xhr.simpleCall({
                func:'home'
            },function(response) {
                //App.alert(JSON.stringify(response.data.swiper));
                if (response.err_code === 0) {
                    //App.alert(JSON.stringify(response.data));
                    var homeData = response.data;

                    VM.module('homeView').renderHome(homeData);
                }
            });
        }

    };

    return homeCtrl;
});