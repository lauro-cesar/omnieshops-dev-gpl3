Ext.define('OmniMerchant.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.MessageBox',
        'OmniMerchant.view.main.MainController',
        'OmniMerchant.view.main.MainModel'
    ],
    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            items: [{
                xtype: 'omni_account_manager'
            }]
        },{
            title: 'Users',
            iconCls: 'x-fa fa-user',
            html:'Users'
        },{
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            html:'Grupos'
        }
    ]
});
