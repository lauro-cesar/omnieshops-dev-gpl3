Ext.define("OmniDashboard.view.aboutUs.OmniEshops",{
    extend: "OmniDashboard.view.util.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.omniEshops',
    xtype:'omniEshops',
    layout:'fit',
    title: 'Economia Colaborativa',
    iconCls:'x-fa fa-th',
    tooltip: 'Economia colaborativa',
    items:[
        {
            xtype:'omniPanel',
            html:'Lista de desenvolvedores'
        }
    ]
    });