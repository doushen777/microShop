define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var mineCtrl = {

    	init: function(){
            appFunc.showToolbar();
            var bindings = [{
                element:'#mineView',
                event: 'show',
                handler: mineCtrl.renderMine
            }];

            VM.module('mineView').init({
                bindings:bindings
            });
        },

        renderMine: function(){
            if($$('#mineView .page-content')[0])
                return;
            App.showIndicator();
            xhr.simpleCall({
                func:'user_login'
            },function(response) {
                if (response.err_code === 0) {
                    var user = response.data.user;

                    VM.module('mineView').renderMine(user);
                }
            });
        }

    };

    return mineCtrl;
});