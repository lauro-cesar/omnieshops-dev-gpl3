Ext.define("OmniDashboard.view.bigPicture.BigPicture",{
    extend: "OmniDashboard.view.shared.OmniPanel",
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
            html:'Not Implemented'
        }
    ]
    });