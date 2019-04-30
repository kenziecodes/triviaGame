$(document).ready(function(){

var correctAnswerObject = {
    sky:'blue',
    sound:'moo'
}



$('#submit').on('click', handleSubmitForm);
$(document).on('click','#reset', function(){
    window.location.reload();
});
  

function handleSubmitForm(){
    clearInterval(someTimer);
    /* Here we simply check for the checked value in every question */
    var questionOneAnswer = isAnswerCorrect('sky');
    var questionTwoAnswer = isAnswerCorrect('sound');

    var answersArray = [questionOneAnswer, questionTwoAnswer]

    var trueAnswers = 0;
    var falseAnswers = 0;

    for(var i = 0; i < answersArray.length; i++){
        if(answersArray[i] === true){
            trueAnswers++;
        }
        else {
            falseAnswers++;
        }
    }

    $('body').empty();
    $('body').append("<div id='someId'>You got " + trueAnswers + " answers right </div><div id='someId'> You got " + falseAnswers +" answers wrong</div><div><button  id='reset'> Play Again</button></div>");
    

    }

// this is checking if the correct answer is checked
function isAnswerCorrect(name) {
    if(correctAnswerObject[name] === $('input[name=' + name + ']:checked').attr('value')){
       return true;
    }
    else {
        return false;
    }
};


var starterNum = 60;

var someTimer = setInterval(function(){
    starterNum--;
    $('#timer').text(starterNum)
    if(starterNum === 0){
        handleSubmitForm();
    }
},1000);




});


