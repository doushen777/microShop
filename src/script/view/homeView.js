define(['utils/appFunc','utils/tplManager','GS','i18n!nls/lang'],function(appFunc,TM,GS,i18n){
	var homeView = {
		init: function(params){
            appFunc.bindEvents(params.bindings);
        },
        renderHome: function(data){
        	//alert(JSON.stringify(data));
            var renderData = {
            	swiper:data.swiper,
            	shopName:data.shopName,
            	shopItems:data.shopItems
                // avatarUrl: user.avatarUrl,
                // nickName: user.nickName,
                // points: user.points,
                // i18nNickName: i18n.setting.nickname,
                // i18nPoints: i18n.setting.points,
                // feedBack: i18n.setting.feed_back,
                // checkUpdate: i18n.setting.check_update,
                // about: i18n.setting.about,
                // language: i18n.global.language,
                // loginOut: i18n.setting.login_out
            };
            var output = TM.renderTplById('homeTemplate', renderData);
            $$('#homeView .page[data-page="homeView"]').html(output);
            var mySwiper = App.swiper('.swiper-container', {
			  pagination:'.swiper-container .swiper-pagination',
			  autoplay: 3000,
			  spaceBetween: 50
			});

            // var bindings = [{
            //     element: '.logout-button',
            //     event: 'click',
            //     handler: settingView.logOut
            // },{
            //     element: '#settingView .update-button',
            //     event: 'click',
            //     handler: settingView.checkVersion
            // }];

            // appFunc.bindEvents(bindings);

            App.hideIndicator();
        }
	};
	return homeView;
});