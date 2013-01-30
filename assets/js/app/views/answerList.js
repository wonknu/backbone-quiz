// View for all Answers
App.Views.Answers = Backbone.View.extend({
    
    tagName: 'ul',
    
    initialize: function() {
        //this.collection.on('change', this.addOne, this);  // listeners/anouncers for the collection on add..
        
        this.collection.on('change', function (){
            console.log('change model');
        }, this);
    },
    
    render: function() {
        _.each(this.collection.models, this.addOne, this);
        return this;
    },
    
    addOne: function(answer) {
        var answerView = new App.Views.Answer({ model: answer });
        this.$el.append(answerView.render().el);
    }
    
});
