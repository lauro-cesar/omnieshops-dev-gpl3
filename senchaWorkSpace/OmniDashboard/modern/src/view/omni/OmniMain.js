Ext.define('OmniDashboard.view.omni.OmniMain', {
    extend: "OmniDashboard.view.shared.OmniPanel",
    xtype: 'omniMain',
    controller: 'omniController',
    viewModel: 'omniViewModel',
    layout:'fit',
    items:[
        {
            xtype: 'omniPanel',
            title:'Teste de Painel',
            html:'Teste de Painel.'
        }
    ]
});

