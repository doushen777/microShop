define(['utils/appFunc','utils/tplManager','GS','i18n!nls/lang'],function(appFunc,TM,GS,i18n){

    /* global $CONFIG */

    var mineView = {

        init: function(params){
            appFunc.bindEvents(params.bindings);
        },

        renderMine: function(user){
            var renderData = {
                avatarUrl: user.avatarUrl,
                nickName: user.nickName,
                points: user.points,
                i18nNickName: i18n.setting.nickname,
                i18nPoints: i18n.setting.points,
                feedBack: i18n.setting.feed_back,
                checkUpdate: i18n.setting.check_update,
                about: i18n.setting.about,
                language: i18n.global.language,
                loginOut: i18n.setting.login_out
            };

            var output = TM.renderTplById('mineTemplate', renderData);
            $$('#mineView .page[data-page="mineView"]').html(output);

            var bindings = [{
                element: '.logout-button',
                event: 'click',
                handler: mineView.logOut
            },{
                element: '#mineView .update-button',
                event: 'click',
                handler: mineView.checkVersion
            }];

            appFunc.bindEvents(bindings);

            App.hideIndicator();
        },

        logOut: function(){
            App.confirm(i18n.setting.confirm_logout,function(){
                GS.removeCurrentUser();

                mainView.router.loadPage('page/login.html');
                App.showTab('#ourView');
            });
        },

        checkVersion: function(){
            var version = $CONFIG.version;
            var releaseTime = $CONFIG.release_time;
            App.alert(i18n.setting.current_version + version + '<br/>[ ' + releaseTime + ' ]');
        }

    };

    return mineView;
});