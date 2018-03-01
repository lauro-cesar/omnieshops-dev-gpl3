Ext.define("OmniDashboard.view.customerCare.CustomerCare",{
    extend: "OmniDashboard.view.util.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.customerCare',
    xtype:'customerCare',
    layout:'fit',
    items:[
        {
            xtype:'omniTabPanel',
            items:[
                {
                    xtype:'omniPanel',

                    title: 'Mensageiro',
                    iconCls:'x-fa fa-th',
                    tooltip: 'Crie e gerencie seus sites e lojas'

                },
                {
                    xtype:'omniPanel',
                    title: 'Tickets',
                    iconCls:'x-fa fa-tasks',
                    tooltip: 'Pedidos de Suporte'

                },
                {
                    xtype:'omniPanel',
                    title: 'Clientes',
                    iconCls:'x-fa fa-users',
                    tooltip: 'Gerenciador de arquivos'

                }
            ]
        }]
    });