Ext.define("OmniDashboard.view.wizardManager.SitesDataView",{
    extend: "OmniDashboard.view.util.OmniPanel",
    initComponent: function (arguments) {
        this.callParent(arguments);
    },
    alias: 'widget.siteDataView',
    xtype: 'siteDataView',
    html:'Lista de lojas...'
});