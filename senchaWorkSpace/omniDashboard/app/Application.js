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
    models:[
        'OmniSession','OmniTask','OmniSetting','OmniSite','OmniSiteSync'
    ],
    requires:[
        'OmniDashboard.view.omni.OmniMain'
    ],
    onAppUpdate: function () {

        Ext.Msg.confirm('Atualização disponível', 'Existe uma atualização, gostaria de baixar agora?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
