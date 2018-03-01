Ext.define("OmniDashboard.view.omni.Dashboard",{
    extend: "OmniDashboard.view.util.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    requires:[
        'OmniDashboard.view.systemSettings.systemSettings',
        'OmniDashboard.view.inventoryManager.InventoryManager',
        'OmniDashboard.view.util.OmniTabPanel',
        'OmniDashboard.view.util.OmniNav'
    ],
    alias:'widget.omniDashboard',
    xtype:'omniDashboard',
    reference:'omni-dashboard-panel',
    layout:'card',
    // defaults:{
    //     html:null,
    //     border:false,
    //     frame:false
    // },
    items:[
        {
            xtype:'systemSettings'
        },{
            xtype:'inventoryManager'
        }
    ]
    });