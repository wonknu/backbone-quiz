// The router
App.Router = Backbone.Router.extend({
    
    initialize: function (opt)
    {
        this.entryPoint = opt.entryPoint;
        this.nextPoint = opt.nextPoint;
    },
    
    routes: {
        '' : 'index',
        'quiz/:id': 'quiz'
    },

    index: function ()
    {
        this.entryPoint(0);
    },

    quiz: function (id)
    {
        this.nextPoint(id);
    }
    
});
    