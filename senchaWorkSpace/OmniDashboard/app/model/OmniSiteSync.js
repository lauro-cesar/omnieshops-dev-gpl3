Ext.define('OmniDashboard.model.OmniSiteSync', {
    extend: 'OmniDashboard.model.shared.OmniSiteModel',
    alias: 'model.omniSiteSync',
    proxy: {
        type: 'jsonp',
        callbackKey: 'omniCallBack',
        url:'https://accounts.omnieshops.com/datastore/api/shopmanager/eshops/read/',
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
})