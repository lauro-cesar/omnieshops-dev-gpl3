Ext.define("OmniDashboard.view.wizardManager.SitesManager",{
    extend: "OmniDashboard.view.shared.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    requires:[
        'OmniDashboard.view.wizardManager.SitesDataView'
    ],
    alias:'widget.sitesManager',
    xtype:'sitesManager',
    title: 'Sites',
    iconCls:'x-fa fa-th',
    tooltip: 'Crie e gerencie seus sites e lojas',
    items:[
        {
            xtype:'omniPanel',
            layout:'fit',
            dockedItems: [
                {
                    xtype: 'omniToolbar',
                    dock: 'top',
                    ui:'footer',
                    defaults:{
                        xtype:'omniToolButton'
                    },
                    items:[
                        {
                            text:'Novo Site',
                            iconCls:'x-fa fa-plus',
                            bind:{
                                text: '{i18n.OmniEshops.view.wizardManager.SiteManager.omniToolbar.omniToolButton.newsite}'
                            }
                            
                        },
                        '->',
                        {
                            text:'Sincronizar',
                            iconCls:'x-fa fa-exchange',
                            hidden:true,
                            handler:function(button){
                                button.fireEvent("loadRemoteSites",1);
                            },
                            bind:{
                                visible:'{isConnected}',
                                text: '{i18n.OmniEshops.view.wizardManager.SiteManager.omniToolbar.omniToolButton.syncSites}'
                            }
                        }
                    ]
                }
            ],
            items:[
                {
                    xtype:'siteDataView'
                }
            ]
        }
    ]
    });