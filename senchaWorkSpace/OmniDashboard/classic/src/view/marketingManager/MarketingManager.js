Ext.define("OmniDashboard.view.marketingManager.MarketingManager",{
    extend: "OmniDashboard.view.shared.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.marketingManager',
    xtype:'marketingManager',
    layout:'fit',
    dockedItems: [
        {
            xtype: 'omniNav',
            dock: 'top',
        }
    ],
    items:[
        {
            xtype: 'omniPanel'
        }
    ]
    });