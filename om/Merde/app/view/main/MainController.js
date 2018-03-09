Ext.define('OmniMerchant.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    routes: {
        ':type': {
            before: 'loadPackage',
            action: 'showView'
        }
    },
    loadPackage: function (type, action) {
        var view = this.getView(),
            pkg = this.getPackageForType(type);

        if (!pkg || Ext.Package.isLoaded(pkg)) {
            action.resume();
        }
        else {
            view.setMasked({
                message: 'Loading Package...'
            });
            Ext.Package.load(pkg).then(function () {
                view.setMasked(null);
                action.resume();
            });
        }
    },
});
