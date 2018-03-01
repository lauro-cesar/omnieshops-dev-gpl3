Ext.define("OmniDashboard.view.aboutUs.ContactUs",{
    extend: "OmniDashboard.view.util.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.contactUs',
    xtype:'contactUs',
    layout:'fit',
    title: 'Fale Conosco',
    iconCls:'x-fa fa-envelope-square',
    tooltip: 'Entre em contato',
    items:[
        {
            xtype:'omniPanel',
            html:'Contact form...'
        }
    ]
    });