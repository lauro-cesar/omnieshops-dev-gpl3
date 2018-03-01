Ext.define('OmniDashboard.model.shared.OmniModel', {
    extend: 'Ext.data.Model',
    requires: [
        'OmniDashboard.view.shared.TextRequiredValidator',
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