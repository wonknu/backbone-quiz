$(function() {
    var answerCollection,
        answersView;
    function startQuiz (id)
    {
        answerCollection = new App.Collections.Answer({ id : id });
        
        answerCollection.fetch()
        .then(function ()
        {
            var question = new App.Models.Answer(answerCollection.response.question);
            var questionView = new App.Views.Question({ model : question });
            
            answersView = new App.Views.Answers({ collection: answerCollection });
            
            $("form").prepend(answersView.render().el);
            $("form").prepend(questionView.render().el);
        });
        
        setButton(id);
    }
    
    function nextQuiz (id)
    {
        setButton(id);
        answerCollection.fetch()
        .then(function ()
        {
            //console.log(answerCollection);
            console.log(answersView);
        });
    }
    
    function setButton (id)
    {
        $('.submit-quiz').bind('click', function (e)
        {
            e.preventDefault();
            route.navigate("#quiz/" + (answerCollection.id += 1), {trigger: true, replace: true});
            $(this).unbind('click');
        });
    }
    
    var route = new App.Router({
        entryPoint : startQuiz,
        nextPoint : nextQuiz
    });
    
    Backbone.history.start();
});

