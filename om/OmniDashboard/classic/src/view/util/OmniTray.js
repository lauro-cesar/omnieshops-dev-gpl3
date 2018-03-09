Ext.define("OmniDashboard.view.util.OmniTray",{
    extend: "OmniDashboard.view.util.OmniToolbar",
    overflowHandler:'scroller',
    xtype:'omniTray',
    alias:'widget.omniTray',
    pack:'start',
    ui:'footer',
    border:false,
    defaults:{
        scale:'medium'
    },
    items:[
        {
            xtype: 'tbfill'
        },
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-question-circle',
            tooltip:"Suporte ao usuário",
            handler:function(button){
                button.fireEvent('redirectTO','#app/userSupport');
            }
        },
        '-',
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-info',
            tooltip:'About Us',
            handler:function(button) {
                button.fireEvent('redirectTO','#app/aboutUs');
            }
        }
    ]
});