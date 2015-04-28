define(['controller/appCtrl',
        'controller/loginCtrl',
        'controller/homeCtrl',
        'controller/cartCtrl',
        'controller/orderCtrl',
        'controller/mineCtrl',
        'controller/settingCtrl',
        'controller/aboutCtrl',
        'controller/feedbackCtrl',
        'controller/timelineCtrl',
        'controller/itemCtrl',
        'controller/postCtrl',
        'controller/contactCtrl',
        'controller/commentCtrl',
        'controller/messageCtrl',
        'controller/languageCtrl'],function(appCtrl,loginCtrl,homeCtrl,cartCtrl,orderCtrl,mineCtrl,settingCtrl,aboutCtrl,feedbackCtrl,timelineCtrl,itemCtrl,postCtrl,contactCtrl,commentCtrl,messageCtrl,languageCtrl) {

    var module = {
        module: function(name){

            var controller;

            switch (name){
                case 'appCtrl':
                    controller = appCtrl;
                    break;
                case 'loginCtrl':
                    controller = loginCtrl;
                    break;
                case 'homeCtrl':
                    controller = homeCtrl;
                    break;
                case 'cartCtrl':
                    controller = cartCtrl;
                    break;
                case 'orderCtrl':
                    controller = orderCtrl;
                    break;
                case 'mineCtrl':
                    controller = mineCtrl;
                    break;
                case 'settingCtrl':
                    controller = settingCtrl;
                    break;
                case 'aboutCtrl':
                    controller = aboutCtrl;
                    break;
                case 'feedbackCtrl':
                    controller = feedbackCtrl;
                    break;
                case 'timelineCtrl':
                    controller = timelineCtrl;
                    break;
                case 'itemCtrl':
                    controller = itemCtrl;
                    break;
                case 'postCtrl':
                    controller = postCtrl;
                    break;
                case 'contactCtrl':
                    controller = contactCtrl;
                    break;
                case 'commentCtrl':
                    controller = commentCtrl;
                    break;
                case 'messageCtrl':
                    controller = messageCtrl;
                    break;
                case 'languageCtrl':
                    controller = languageCtrl;
                    break;
            }

            return controller;
        }
    };

    return module;

});