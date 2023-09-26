let question = {
    title: 'How many teams are in the NFL?',
    alternatives: ['23', '32', '31', '30'],
    correctAnswer: 2
};

function showQuestion (q) {
    titleDiv = document.getElementById('title');

    titleDiv.textContent = q.title;

    let alts = document.querySelectorAll('.alternative');

    alts.forEach(function(element, index){
        element.textContent = q.alternatives[index];
    });
    console.log
}

showQuestion(question);
