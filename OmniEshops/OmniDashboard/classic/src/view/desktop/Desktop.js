Ext.define('OmniDashboard.view.desktop.Desktop', {
    extend: "Ext.container.Viewport",
    xtype: 'desktop',
    alias:'widget.desktop',
    controller: 'desktopController',
    viewModel: 'omniViewModel',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox'
    ],
    layout:'border',
    items: [{
        xtype:'omniDashboard',
        region:'center'
    }]
});
