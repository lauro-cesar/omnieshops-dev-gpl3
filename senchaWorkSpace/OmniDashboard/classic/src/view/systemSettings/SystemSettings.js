Ext.define("OmniDashboard.view.systemSettings.SystemSettings",{
    extend: "OmniDashboard.view.shared.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.systemSettings',
    xtype:'systemSettings',
    layout:'fit',
    items:[
        {
            xtype:'omniTapPanel',
            items:[
                {
                    xtype:'userAccount'
                }
            ]
        }
    ]
    });