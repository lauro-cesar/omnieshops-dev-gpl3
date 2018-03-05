Ext.define('OmniDashboard.model.TabletSetting', {
    extend: 'OmniDashboard.model.OmniModel',
    alias: 'model.tabletSetting',
    proxy: {
        type: 'localstorage',
        id:'omni-tablet-setting-storage',
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
    ]
});