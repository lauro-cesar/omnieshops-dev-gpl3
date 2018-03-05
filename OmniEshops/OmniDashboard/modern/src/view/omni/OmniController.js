Ext.define('OmniDashboard.view.omni.OmniController', {
    extend: 'OmniDashboard.view.util.OmniController',
    alias: 'controller.omniController',

    
    onOpenApp:function(xtype){
        me= this;
        if(me.omniDashBoard()){
            var app = me.omniDashBoard().down(xtype);
            if(app){
                
                me.omniDashBoard().setActiveItem(xtype);
                
            } else {
                console.log("App not found");
            }
        }
    }
});
