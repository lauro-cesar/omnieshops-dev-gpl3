Ext.define('OmniDashboard.view.omni.OmniViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.omniViewModel',
    data:{
        "omniVersion":"Versao: 1.0.0",
        "i18n":{
            "OmniEshops":{
                "view":{
                    "wizardManager":{
                        "SiteManager":{
                            "omniToolbar":{
                                "omniToolButton":{
                                    "newsite":"Criar novo Site",
                                    "syncSites":"Sincronizar com OmniEshops"
                                }
                            }
                        }
                    },
                    "omni":{
                        "util":{
                            "TextRequiredValidator":{
                                "emptyMessage":"Campo requerido"
                                }
                            }
                        }
                    }
                }
            }
    },
    formulas: {
        // scaleArray:function(get){
        //     return ['small','medium','large'];
        // },
        // toolBarScale:function(get){
        //     return get('scaleArray')[get('userSettings.toolBarSize')];
        // },
        // navBarScale:function(get){
        //     return get('scaleArray')[get('userSettings.navBarSize')];
        // },
        userSettings:{
            bind: {
                bindTo:'{omniSettings}',
                deep:true
            },
            get: function(store) {
                if(store.count() < 1 ) {
                    var settings = Ext.create('model.omniSetting');
                    settings.save();
                    store.add(settings);
                    store.sync()
                    // console.log(settings)
                    return settings;
                } else {
                    var record = store.first();
                    // console.log(record);
                    return record;
                }
            }
        },
        sessionSettings:{
            bind: {
                bindTo:'{omniSession}',
                deep:true
            },
            get: function(store) {
                return store.first();
            }
        }
    },
    stores:{
        // omniSync: {
        //     id:'omniSitesSync',
        //     clearOnPageLoad:false,
        //     autoSync:false,
        //     model:'OmniDashboard.model.OmniSiteSync',
        //     autoLoad:false,
        //     session:false
        // },        
        omniSites: {
            id:'omniSites',
            autoSync:true,
            model:'OmniDashboard.model.OmniSite',
            autoLoad:true,
            remoteFilter:true,
            session:true
        },
        omniSettings: {
            id:'omniSettings',
            autoSync:true,
            model:'OmniDashboard.model.OmniSetting',
            autoLoad: true,
            session:true
        },
        omniSession: {
            id:'omniSession',
            model:'OmniDashboard.model.OmniSession',
            autoLoad: true,
            session:true
        },
        omniTaskQueue: {
            id:'omniTaskQueue',
            model:'OmniDashboard.model.OmniTask',
            autoLoad:true,
            session:true
        }
    }
});