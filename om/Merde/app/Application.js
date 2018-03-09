Ext.define('OmniMerchant.Application', {
    extend: 'Ext.app.Application',
    name: 'OmniMerchant',
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});