Ext.define('OmniEshops.view.OmniAccountManager', {
    extend: 'Ext.Panel',
    xtype: 'omni_account_manager',
    alias:'widget.omni_account_manager',
    bind:{
        title: 'Criado por: {developerGPG2_ID}'
    },
    html: 'Minha Conta Classic - Criado por: {developerGPG2_ID} - Classic'
});