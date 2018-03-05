Ext.define("OmniDashboard.view.util.OmniToolbar",{
    extend: "Ext.Toolbar",
    xtype:'omniToolbar',
    alias:'widget.omniToolbar',
    fullscreen:true,
    mixins: [
        'Ext.mixin.Responsive'
    ],
    docked:'right',
    defaults:{
        scale:'large'
    },
    layout:{
        type: 'vbox',
        pack:'start'
    },
    responsiveConfig:{
        wide:{
            layout:{
                type: 'vbox',
                vertical: true,
                pack:'start'
            },
            docked:'right',
        },
        tall:{
            layout:{
                type: 'hbox',
                vertical: false,
                pack: 'start'
            },
            docked:'top',
        },
    }

});