Ext.define('OmniDashboard.view.tablet.TabletController', {
    extend: 'OmniDashboard.view.util.OmniController',
    alias: 'controller.tabletController',
    onOpenApp:function(xtype){
        me= this;
        
        if(me.omniDashBoard()){
            var app = me.omniDashBoard().down(xtype);
            if(app){

                me.omniDashBoard().getLayout().setActiveItem(app);
            } else {
                console.log("App not found");
            }
        }
    }
});