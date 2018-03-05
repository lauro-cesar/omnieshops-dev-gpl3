Ext.define('OmniDashboard.view.omni.OmniMain', {
    extend: "OmniDashboard.view.util.OmniPanel",
    xtype: 'omniMain',
    controller: 'omniController',
    viewModel: 'omniViewModel',
    fullscreen:true,
    items:[
        {
            xtype:'omniNav'
        },
        {
            xtype:'omniDashboard'
        }
    ]
});