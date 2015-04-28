define(['utils/appFunc','utils/tplManager'],function(appFunc,TM){

    var contactView = {

        init: function(params){
            appFunc.bindEvents(params.bindings);
        },

        beforeLoadContacts: function(){
            if($$('.contacts-list .list-group .contact-item').length > 0) {
                return false;
            }else {
                App.showIndicator();
                return true;
            }
        },

        render: function(params){
            App.initSearchbar('.contact-page');

            setTimeout(function(){
                var renderData = {
                    contacts:params.contacts
                };
                var output = TM.renderTplById('contactListTemplate',renderData);
                $$('#contatcView .contacts-list ul').html(output);

                App.hideIndicator();

            },500);

        },

        filterResult: function(e){
            $$('.contacts-list .list-group-title').each(function(){
                if($$(this).next('.contact-item').css('display') === 'none'){
                    $$(this).hide();
                }
            });
        }

    };

    return contactView;
});