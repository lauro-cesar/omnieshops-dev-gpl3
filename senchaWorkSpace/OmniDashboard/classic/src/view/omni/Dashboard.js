Ext.define("OmniDashboard.view.omni.Dashboard",{
    extend: "OmniDashboard.view.shared.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    requires:[
        'OmniDashboard.view.shared.OmniDataView',
        'OmniDashboard.view.shared.OmniPanel',
        'OmniDashboard.view.shared.OmniToolbar',
        'OmniDashboard.view.shared.OmniNav',
        'OmniDashboard.view.shared.OmniTray',
        'OmniDashboard.view.bigPicture.BigPicture',  
        'OmniDashboard.view.customerCare.CustomerCare',
        'OmniDashboard.view.orderManager.OrderManager',
        'OmniDashboard.view.inventoryManager.InventoryManager',
        'OmniDashboard.view.wizardManager.WizardManager',
        'OmniDashboard.view.systemSettings.SystemSettings',
        'OmniDashboard.view.systemSettings.UserAccount',
        'OmniDashboard.view.userSupport.UserSupport',
        'OmniDashboard.view.aboutUs.AboutUs'
    ],
    alias:'widget.omniDashboard',
    xtype:'omniDashboard',
    reference:'omni-dashboard-panel',
    layout:'card',
    defaults:{
        html:null,
        border:false,
        frame:false
    },
    dockedItems: [
        {
            xtype: 'omniNav',
            dock: 'left'
        },
        {
            xtype: 'omniTray',
            dock: 'bottom'
        }
    ],
    items:[
        {
            xtype: 'bigPicture'
        },{
            xtype: 'customerCare'
        },{
            xtype: 'orderManager'
        },{
            xtype: 'inventoryManager'
        },{
            xtype:'wizardManager'
        },{
            xtype:'systemSettings'
        },{
            xtype:'userSupport'
        },{
            xtype:'aboutUs'
        }
    ]
    });