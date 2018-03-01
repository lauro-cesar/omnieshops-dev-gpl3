Ext.define("OmniDashboard.view.inventoryManager.InventoryManager",{
    extend: "OmniDashboard.view.util.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.inventoryManager',
    xtype:'inventoryManager',
    layout:'fit',
    items:[
        {
            xtype:'omniTabPanel',
            items:[
                {
                    xtype:'omniPanel',
                        title: 'Produtos',
                        iconCls:'x-fa fa-th',
                        tooltip: 'Crie e gerencie seus sites e lojas'

                },
                {
                    xtype:'omniPanel',
                        title: 'Anúncios',
                        iconCls:'x-fa fa-barcode',
                        tooltip: 'Grupo de trabalho'

                },                
                {
                    xtype:'omniPanel',

                        title: 'Cupoms',
                        iconCls:'x-fa fa-barcode',
                        tooltip: 'Grupo de trabalho'

                }
            ]
        }
    ]
    });