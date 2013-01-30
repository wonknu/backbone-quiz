// A List of Answer
App.Collections.Answer = Backbone.Collection.extend({
    
    model: App.Models.Answer,
    
    initialize: function (opt)
    {
        this.id = opt.id;
        this.on('change', function (){
            console.log('change model');
        }, this);
    },
    
    url: function ()
    {
        return './assets/api/quiz/' + this.id;
    },
    
    parse: function (response)
    {
        this.response = response;
        return response.quiz;
    }
    
});
