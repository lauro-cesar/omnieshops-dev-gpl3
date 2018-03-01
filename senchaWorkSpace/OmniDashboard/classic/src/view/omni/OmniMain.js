Ext.define('OmniDashboard.view.omni.OmniMain', {
    extend: "Ext.container.Viewport",
    xtype: 'omniMain',
    controller: 'omniController',
    viewModel: 'omniViewModel',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'OmniDashboard.view.omni.Dashboard'
    ],
    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },
    layout:'border',
    items: [{
        xtype:'omniDashboard',
        region:'center'
    }]
});
