Ext.define("OmniDashboard.view.util.OmniTabPanel",{
    extend: "Ext.tab.Panel",
    alias:'widget.omniTabPanel',
    xtype:'omniTabPanel',
    defaults:{
        textAlign:'left',
        icon:null,
        tabConfig: {
            width:200,
            margin:'2 0 2 15'   
        }
    },
    tabBar:{
        padding:'10 0 0 0'
    },
    bind:{
        tabPosition:'{userSettings.tabPosition}',
        tabRotation:'{userSettings.tabRotation}'
    }
});