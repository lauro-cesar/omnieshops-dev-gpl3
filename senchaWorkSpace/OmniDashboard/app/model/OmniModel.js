Ext.define('OmniDashboard.model.OmniModel', {
    extend: 'Ext.data.Model',
    requires: [
        'OmniDashboard.view.util.TextRequiredValidator',
        'Ext.data.Field'
    ],
    fields: [
        { name: 'id'},
        { name: 'loaded', type:'bool', defaultValue:false}
    ],
    schema: {
        namespace: 'OmniDashboard.model'
    }
});