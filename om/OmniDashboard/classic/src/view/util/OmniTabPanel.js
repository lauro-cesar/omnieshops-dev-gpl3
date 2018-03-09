Ext.define("OmniDashboard.view.util.OmniTabPanel",{
    extend: "Ext.tab.Panel",
    alias:'widget.omniTabPanel',
    xtype:'omniTabPanel',
    mixins: [
        'Ext.mixin.Responsive'
    ],
    responsiveConfig:{
        wide:{
            tabPosition:'left',
            tabRotation:0
        },
        tall:{
        },
    },

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
    }
});