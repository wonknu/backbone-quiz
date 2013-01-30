// The View for a Question
App.Views.Question = Backbone.View.extend({
    
    tagName: 'p',
    
    className: 'question',
    
    template: _.template( $('#tpl-question').html() ),
    
    initialize: function(){
        
    },
    
    render: function() {
        this.$el.html( this.template(this.model.toJSON()) );
        return this;
    }
    
});
