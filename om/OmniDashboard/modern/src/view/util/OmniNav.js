Ext.define("OmniDashboard.view.util.OmniNav",{
    extend: "OmniDashboard.view.util.OmniToolbar",
    xtype:'omniNav',
    alias:'widget.omniNav',
    items:[
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-home',
            tooltip:"Welcome",
            handler:function(button){
                button.fireEvent('redirectTO','#app/bigPicture');
            }
        },
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-shopping-cart',
            tooltip:"Order manager",
            handler:function(button){
                button.fireEvent('redirectTO','#app/orderManager');
            }
        },
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-inbox',
            tooltip:"Customer Care",
            handler:function(button){
                button.fireEvent('redirectTO','#app/customerCare');
            }
        },
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-archive',
            tooltip:"Inventory Manager",
            handler:function(button){
                button.fireEvent('redirectTO','#app/inventoryManager');
            }
        },
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-magic',
            tooltip:"OmniEshop app wizard",
            handler:function(button){
                button.fireEvent('redirectTO','#app/wizardManager');
            }
        },
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-cogs',
            tooltip:"Account settings",        
            handler:function(button) {
                button.fireEvent('redirectTO','#app/systemSettings');
            }
        },
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-question-circle',
            tooltip:"Suporte ao usuário",
            handler:function(button){
                button.fireEvent('redirectTO','#app/userSupport');
            }
        },
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-info-circle',
            tooltip:'About Us',
            handler:function(button) {
                button.fireEvent('redirectTO','#app/aboutUs');
            }
        }
    ]
});