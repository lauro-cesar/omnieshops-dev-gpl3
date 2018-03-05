Ext.define('OmniDashboard.view.tablet.Tablet', {
    extend: "Ext.Panel",
    xtype: 'tablet',
    region:'center',
    alias:'widget.tablet',
    controller: 'tabletController',
    viewModel: 'omniViewModel',
    title:'Tablet',
    html:'Tablet'
});