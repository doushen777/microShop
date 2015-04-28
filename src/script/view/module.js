define(['view/homeView',
        'view/cartView',
        'view/orderView',
        'view/mineView',
        'view/appView',
        'view/loginView',
        'view/settingView',
        'view/aboutView',
        'view/feedbackView',
        'view/timelineView',
        'view/itemView',
        'view/postView',
        'view/contactView',
        'view/commentView',
        'view/messageView',
        'view/languageView'],function(homeView,cartView,orderView,mineView,appView,loginView,settingView,aboutView,feedbackView,timelineView,itemView,postView,contactView,commentView,messageView,languageView) {

    var module = {

        module: function(name){

            var view;

            switch (name){
                case 'homeView':
                    view = homeView;
                    break;
                case 'cartView':
                    view = cartView;
                    break;
                case 'orderView':
                    view = orderView;
                    break;
                case 'mineView':
                    view = mineView;
                    break;
                case 'appView':
                    view = appView;
                    break;
                case 'loginView':
                    view = loginView;
                    break;
                case 'settingView':
                    view = settingView;
                    break;
                case 'aboutView':
                    view = aboutView;
                    break;
                case 'feedbackView':
                    view = feedbackView;
                    break;
                case 'timelineView':
                    view = timelineView;
                    break;
                case 'itemView':
                    view = itemView;
                    break;
                case 'postView':
                    view = postView;
                    break;
                case 'contactView':
                    view = contactView;
                    break;
                case 'commentView':
                    view = commentView;
                    break;
                case 'messageView':
                    view = messageView;
                    break;
                case 'languageView':
                    view = languageView;
                    break;
            }

            return view;
        }

    };

    return module;
});