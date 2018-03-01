
Ext.define("OmniDashboard.view.userSupport.UserSupport",{
    extend: "OmniDashboard.view.shared.OmniPanel",
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
            xtype:'omniTapPanel',
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