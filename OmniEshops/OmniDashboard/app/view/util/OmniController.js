Ext.define('OmniDashboard.view.util.OmniController', {
    extend: 'Ext.app.ViewController',
    dashboardReference:'omni-dashboard-panel',
    routes : {
        'app/:appID'            : 'onOpenApp',
        'inventory/:itemID'     : 'onOpenProduct',
        'order/:orderID'        : 'onOpenOrder',
        'site/:siteID'          : 'onOpenSite'
    },
    config: {
        listen: {
            component: {
                '*': {
                    redirectTO:'onRedirectTO'
                }
            }
        }
    },
    runNextTask:function(taskList){
        var me=this;
        if(taskList.length > 0) {
            var newTask = taskList.shift();
            if(newTask){
                me.getView().fireEvent(newTask,taskList);
            }
        }
    },
    omniDashBoard:function(){
        return this.lookupReference(this.dashboardReference);
    },
    onRedirectTO:function(appid){
      this.redirectTo(appid,'force','replace');
    }

});
