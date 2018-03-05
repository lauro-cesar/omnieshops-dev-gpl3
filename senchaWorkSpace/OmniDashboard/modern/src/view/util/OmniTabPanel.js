Ext.define("OmniDashboard.view.util.OmniTabPanel",{
    extend: "Ext.tab.Panel",
    alias:'widget.omniTabPanel',
    xtype:'omniTabPanel',
    tabBarPosition: 'bottom',
    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    }
});