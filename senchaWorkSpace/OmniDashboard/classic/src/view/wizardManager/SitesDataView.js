Ext.define("OmniDashboard.view.wizardManager.SitesDataView",{
    extend: "OmniDashboard.view.util.OmniDataView",
    initComponent: function (arguments) {
        this.callParent(arguments);
    },
    alias: 'widget.siteDataView',
    xtype: 'siteDataView',
    bind: '{omniSites}',
    cls: 'sites-list',
    autoScroll: true,
    itemSelector: '.sites-list',
    tpl: new Ext.XTemplate(
        '<tpl for=".">',
        '<span class="sites-list" style="float:left;;margin:5px;position:relative">',
        '<a href="#site/{shopID}"><img src={shopLogo} width=256></a>',
        '</span',
        '</tpl>'
    )
});