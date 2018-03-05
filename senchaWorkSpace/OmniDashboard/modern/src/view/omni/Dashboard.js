Ext.define("OmniDashboard.view.omni.Dashboard",{
    extend: "OmniDashboard.view.util.OmniPanel",
    alias:'widget.omniDashboard',
    xtype:'omniDashboard',
    reference:'omni-dashboard-panel',
    layout:'card',
    items:[       
        {
            xtype: 'bigPicture',
        },{
            xtype: 'customerCare'
        },{
            xtype: 'orderManager'
        },{
            xtype: 'inventoryManager'
        },{
            xtype:'systemSettings'
        },{
            xtype:'userSupport'
        },{
            xtype:'aboutUs'
        }
    ]
    });