Ext.define("OmniDashboard.view.userSupport.ComunitySupport",{
    extend: "OmniDashboard.view.util.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.comunitySupport',
    xtype:'comunitySupport',
    layout:'fit',
    title: 'Suporte comunitário',
    iconCls:'x-fa fa-life-ring',
    tooltip: 'Suporte Comunitário',
    items:[
        {
            xtype:'omniPanel',
            html:'Suporte comunitário ao cliente '
        }
    ]
    });