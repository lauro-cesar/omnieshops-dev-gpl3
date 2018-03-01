Ext.define("OmniDashboard.view.aboutUs.Developer",{
    extend: "OmniDashboard.view.shared.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.developer',
    xtype:'developer',
    layout:'fit',
    title: 'Desenvolvedores',
    iconCls:'x-fa fa-users',
    tooltip: 'Desenvolvedores do projeto',
    items:[
        {
            xtype:'omniPanel',
            html:'Lista de desenvolvedores'
        }
    ]
    });