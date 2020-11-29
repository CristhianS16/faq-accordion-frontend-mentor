const question = document.querySelectorAll('.question');

document.addEventListener('DOMContentLoaded', () => {
    question.forEach( questionElem => questionElem.addEventListener('click', e => {
        let idAnswer = e.target.classList[1];
        let divAnswer = document.querySelector(`#${idAnswer}`);
        if(e.target.classList.contains('clicked')){
            divAnswer.style.display = 'none';
            e.target.classList.remove('clicked');
        } else {
            divAnswer.style.display = 'block';
            e.target.classList.add('clicked');
        };
    }))
});