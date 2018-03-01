Ext.define("OmniDashboard.view.systemSettings.SystemSettings",{
    extend: "OmniDashboard.view.util.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.systemSettings',
    xtype:'systemSettings',
    layout:'fit',
    items:[
        {
            xtype:'omniTabPanel',
            items:[
                {
                    xtype:'userAccount'
                }
            ]
        }
    ]
    });