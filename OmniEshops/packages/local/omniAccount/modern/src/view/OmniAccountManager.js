Ext.define('OmniEshops.modern.view.OmniAccountManager', {
    extend: 'Ext.Panel',
    xtype: 'omni_account_manager',
    alias:'widget.omni_account_manager',
    requires: [
        'OmniEshops.util.OmniAccountController',
        'OmniEshops.util.OmniAccountViewModel'
    ],
    controller:'omni_account_controller',
    viewModel: 'omni_account_view_model',
    bind:{
        title: 'Criado por: {developerGPG2_ID} - Modern'
    },
    html: 'Minha Conta Modern'
});