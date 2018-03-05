Ext.define('OmniDashboard.Application', {
    extend: 'Ext.app.Application',
    name: 'OmniDashboard',
    quickTips: false,
    
    defaultToken:'app/systemSettings',
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch:function(){
        console.log(Ext.platformTags);
    
        if(Ext.platformTags.desktop){
            var desktopDashboard = Ext.create('widget.desktop');
            desktopDashboard.show();
        }


        if(Ext.platformTags.tablet){
            var omniApp = Ext.create('widget.tablet',{
                border:false,
                viewport: {
                layout: 'border',
                fullscreen:true,
                preventZooming: true
            }});
            Ext.Viewport.add(omniApp);
        }

        if(Ext.platformTags.cordova){

            console.log("Carregar a versao Cordova");
        
        }

        if(Ext.platformTags.phone){

            
            // iPhone-5s, 11.2
            // iPhone-6, 11.2
            // iPhone-6-Plus, 11.2
            // iPhone-6s, 11.2
            // iPhone-6s-Plus, 11.2
            // iPhone-7, 11.2
            // iPhone-7-Plus, 11.2
            // iPhone-8, 11.2
            // iPhone-8-Plus, 11.2
            // iPhone-SE, 11.2
            // iPhone-X, 11.2
            // iPad-Air, 11.2
            // iPad-Air-2, 11.2
            // iPad--5th-generation-, 11.2
            // iPad-Pro--9-7-inch-, 11.2
            // iPad-Pro, 11.2
            // iPad-Pro--12-9-inch---2nd-generation-, 11.2
            // iPad-Pro--10-5-inch-, 11.2
        
            
            

            var phoneDashboard = Ext.create('widget.phone');
            
            Ext.Viewport.add(phoneDashboard);
            
            console.log("Carregar a versao Phone");
            // var omniApp = Ext.create('widget.phone');
            // omniApp.show();
        }


    },
    models:[
        'OmniSession','OmniTask','OmniSetting','OmniSite','OmniSiteSync'
    ],
    onAppUpdate: function () {
        console.log("Update App");
        // window.location.reload();
    }
});
