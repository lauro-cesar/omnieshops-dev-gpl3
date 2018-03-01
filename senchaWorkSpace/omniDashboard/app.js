Ext.application({
    name: 'OmniDashboard',
    extend: 'OmniDashboard.Application',
    mainView: 'OmniDashboard.view.omni.OmniMain',
    requires:[
        'OmniDashboard.view.omni.OmniMain'
    ]
});