Ext.define('OmniMerchant.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'OmniMerchant.view.main.MainController',
        'OmniMerchant.view.main.MainModel'
    ],
    layout:'card',
    controller: 'main',
    viewModel: 'main',
    items: [
        {
            xtype:'omni_account_manager'
        }
    ]
});
