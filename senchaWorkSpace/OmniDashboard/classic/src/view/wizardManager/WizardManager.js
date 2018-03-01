Ext.define("OmniDashboard.view.wizardManager.WizardManager",{
    extend: "OmniDashboard.view.util.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.wizardManager',
    xtype:'wizardManager',
    requires: [
        'OmniDashboard.view.wizardManager.SitesManager'
    ],
    items:[
        {
            xtype:'omniTabPanel',
            items:[
                {
                    xtype:'sitesManager'
                }
            ]
        }
    ]
    });