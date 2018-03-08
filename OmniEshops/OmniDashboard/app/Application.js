Ext.define('OmniDashboard.Application', {
    extend: 'Ext.app.Application',
    name: 'OmniDashboard',
    quickTips: false,
    defaultToken:'app/systemSettings',
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    launch:function(){
        Ext.fly('appLoadingIndicator').hide();
    },
    models:[
        'OmniSession','OmniTask','OmniSetting','OmniSite','DesktopSetting','TabletSetting'
    ],
    onAppUpdate: function () {
    //    console.log("Tem update");
        window.location.reload();
    }
});
