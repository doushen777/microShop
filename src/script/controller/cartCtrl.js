define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var cartCtrl = {

    	init: function(){
            appFunc.showToolbar();
            var bindings = [{
                element:'#cartView',
                event: 'show',
                handler: cartCtrl.renderCart
            }];

            VM.module('cartView').init({
                bindings:bindings
            });
        },

        renderCart: function(){
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

    return cartCtrl;
});