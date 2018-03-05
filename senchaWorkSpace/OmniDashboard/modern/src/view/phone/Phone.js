Ext.define('OmniDashboard.view.phone.Phone', {
    extend: "Ext.Panel",
    xtype: 'phone',
    region:'center',
    alias:'widget.phone',
    controller: 'phoneController',
    viewModel: 'omniViewModel',
    xtype:'panel',
    title:'Phone Title',
    html:'Phone Body'
});
