// The View for a Answer
App.Views.Answer = Backbone.View.extend({
    
    tagName: 'li',
    
    className: 'answer',
    
    template: _.template( $('#tpl-answer').html() ),
    
    initialize: function ()
    {
        this.on('change', function (){
            console.log('change model');
        }, this);
        
    },
    
    render: function ()
    {
        this.$el.html( this.template(this.model.toJSON()) );
        return this;
    }
    
});
