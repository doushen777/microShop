define(['utils/appFunc','utils/xhr','view/module','GS','i18n!nls/lang'],function(appFunc,xhr,VM,GS,i18n){

    var loginCtrl = {

        init: function(){

            var bindings = [{
                element: '.login-submit',
                event: 'click',
                handler: loginCtrl.loginSubmit
            }];

            VM.module('loginView').init({
                bindings:bindings
            });
        },

        loginSubmit: function(){
            var loginName = $$('input.login-name').val();
            var password = $$('input.password').val();
            if(loginName === '' || password === ''){
                App.alert(i18n.login.err_empty_input);
            }else if(!appFunc.isEmail(loginName)){
                App.alert(i18n.login.err_illegal_email);
            }else{
                App.showPreloader(i18n.login.login);

                xhr.simpleCall({
                    func:'user_login',
                    data:{
                        loginname:loginName,
                        password:password
                    }
                },function(response){
                    setTimeout(function(){
                        if(response.err_code === 0){

                            var login = response.data;
                            GS.setCurrentUser(login.sid,login.user);
                            mainView.router.loadPage('index.html');
                            App.hidePreloader();
                        }else{
                            App.hidePreloader();
                            App.alert(response.err_msg);
                        }
                    },500);

                });
            }
        }

    };

    return loginCtrl;
});