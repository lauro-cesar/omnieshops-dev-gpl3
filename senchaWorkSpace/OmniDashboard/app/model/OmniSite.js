Ext.define('OmniDashboard.model.OmniSite', {
    extend: 'OmniDashboard.model.OmniSiteModel',
    alias: 'model.omniSite',
    proxy: {
        type: 'localstorage',
        id:'omni-sites-storage',
        reader: {
            type: 'json',
            rootProperty: 'itens',
            messageProperty: 'msg'
        },
        writer: {
            type: 'json',
            rootProperty: 'itens'
        }
    }
});