Ext.define('OmniDashboard.model.OmniSetting', {
    extend: 'OmniDashboard.model.OmniModel',
    alias: 'model.omniSetting',
    proxy: {
        type: 'localstorage',
        id:'omni-setting-2.2-storage',
        reader: {
            type: 'json',
            rootProperty: 'itens',
            messageProperty: 'msg'
        },
        writer: {
            type: 'json',
            rootProperty: 'itens'
        }
    },
    fields: [
        { name: 'tabPosition', type: 'string',defaultValue:'left' },
        { name: 'tabRotation', type: 'int', defaultValue:0 },
        { name: 'toolBarSize', type:'int',defaultValue:'1'},
        { name: 'navBarSize', type:'int',defaultValue:'1'}
    ],
    hasOne:'TabletSetting',
    hasOne:'DesktopSetting'
});