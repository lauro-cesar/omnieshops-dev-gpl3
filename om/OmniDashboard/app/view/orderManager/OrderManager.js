Ext.define("OmniDashboard.view.orderManager.OrderManager",{
    extend: "OmniDashboard.view.util.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.orderManager',
    xtype:'orderManager',
    layout:'fit',
    items:[
        {
            xtype:'omniTabPanel',
            items:[
                {
                    xtype:'omniPanel',
                    title: 'Pedidos em Andamento',
                    iconCls:'x-fa fa-th',
                    tooltip: 'Crie e gerencie seus sites e lojas'
                },
                {
                    xtype:'omniPanel',
                    title: 'Rastreador de entrega',
                    iconCls:'x-fa fa-truck',
                    tooltip: 'Sua conta no OmniEshops'

                },
                {
                    xtype:'omniPanel',
                    title: 'Clientes',
                    iconCls:'x-fa fa-users',
                    tooltip: 'Gerenciador de arquivos'

                },
                {
                    xtype:'omniPanel',
                    title: 'Pedidos concluidos',
                    iconCls:'x-fa fa-database',
                    tooltip: 'Crie e gerencie seus sites e lojas'

                }



            ]
        }
    ]
    });