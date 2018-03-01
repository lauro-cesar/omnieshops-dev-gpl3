Ext.define("OmniDashboard.view.wizardManager.WizardManager",{
    extend: "OmniDashboard.view.shared.OmniPanel",
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
            xtype:'omniTapPanel',
            items:[
                {
                    xtype:'sitesManager'
                }
            ]
        }
    ]
    });