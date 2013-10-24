Ext.define('MyApp.model.User', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'email', type: 'auto' },
            { name: 'name', type: 'auto' }

        ]
    }
});
