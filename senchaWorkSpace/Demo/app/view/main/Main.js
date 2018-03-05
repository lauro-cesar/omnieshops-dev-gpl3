Ext.define('Demo.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.MessageBox',
        'Demo.view.main.MainController',
        'Demo.view.main.MainModel',
        'Demo.view.main.List'
    ],
    controller: 'main',
    viewModel: 'main',
    fullscreen:true,
    items: [
        {
            xtype:'menu',
            layout:{
                type:'vbox',
                
            }
        },
        {
            xtype:'panel',
            bind: {
                html: '{loremIpsum}'
            },
            layout:'card',
            items:[
                {
                    xtype:'panel',
                    html:'panel 1'
                },
                {
                    xtype:'panel',
                    html:'panel 2'
                }
            ]

        }
    ]
});
