Ext.define("OmniDashboard.view.bigPicture.BigPicture",{
    extend: "OmniDashboard.view.util.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.bigPicture',
    xtype:'bigPicture',
    layout:'fit',
    items:[
        {
            xtype: 'omniPanel',
            title:'Bem vindo ap sistema OmniEshops',
            iconCls:'x-fa fa-home',
            bind:{
                html:'Version: {omniVersion}'
            },
            html:'Not Implemented'
        }
    ]
    });