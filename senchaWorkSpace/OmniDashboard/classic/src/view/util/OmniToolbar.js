Ext.define("OmniDashboard.view.util.OmniToolbar",{
    extend: "Ext.toolbar.Toolbar",
    overflowHandler:'scroller',
    xtype:'omniToolbar',
    alias:'widget.omniToolbar',
    pack:'start',
    border:false,
    defaults:{
        scale:'small'
    },
});