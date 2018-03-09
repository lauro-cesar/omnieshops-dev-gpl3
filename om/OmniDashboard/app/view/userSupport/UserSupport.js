
Ext.define("OmniDashboard.view.userSupport.UserSupport",{
    extend: "OmniDashboard.view.util.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.userSupport',
    xtype:'userSupport',
    requires:[
        'OmniDashboard.view.userSupport.ComunitySupport',
        'OmniDashboard.view.userSupport.PaidSupport'
    ],
    layout:'fit',
    items:[
        {
            xtype:'omniTabPanel',
            items:[
                {
                    xtype:'paidSupport'
                },
                {
                    xtype:'comunitySupport'
                }
            ]
        }
    ]
    });