define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var orderCtrl = {

    	init: function(){
            appFunc.showToolbar();
            var bindings = [{
                element:'#orderView',
                event: 'show',
                handler: orderCtrl.renderCart
            }];

            VM.module('orderView').init({
                bindings:bindings
            });
        },

        renderOrder: function(){
            // if($$('#cartView .page-content')[0])
            //     return;
            // App.showIndicator();
            // xhr.simpleCall({
            //     func:'user_login'
            // },function(response) {
            //     if (response.err_code === 0) {
            //         var user = response.data.user;

            //         VM.module('cartView').renderCart(user);
            //     }
            // });
        }

    };

    return orderCtrl;
});