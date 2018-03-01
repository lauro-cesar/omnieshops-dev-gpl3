Ext.define('OmniDashboard.view.omni.OmniMain', {
    extend: "OmniDashboard.view.util.OmniPanel",
    xtype: 'omniMain',
    controller: 'omniController',
    viewModel: 'omniViewModel',
    requires:[
        'OmniDashboard.view.omni.Dashboard'
    ],
    layout:'vbox',
    items:[
        {
            xtype: 'omniNav',
            docked : 'bottom',
        },
        {
            xtype: 'omniDashboard',
            flex:1
        }
    ]
});