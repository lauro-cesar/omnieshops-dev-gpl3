Ext.define('OmniEshops.kernel.OmniKernelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.omni_kernel_controller',
    init:function(){
        Ext.fly('appLoadingIndicator').hide()
    }
});