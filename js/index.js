const menu__contact = document.querySelector('.menu__contact');
const menu__ul = document.querySelector('.menu__ul');
menu__contact.addEventListener('click', function() {
    menu__ul.classList.toggle('block__class');
})

const freshForm = document.querySelector('.fresh__form'),
    freshInp1 = document.querySelector('.fresh__inp'),
    freshInp2 = document.querySelector('.mail__inp'),
    freshSpan1 = document.querySelector('.fresh__inp__span1'),
    freshSpan2 = document.querySelector('.fresh__inp__span2'),
    freshCheck = document.querySelector('.fresh__check')

freshForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (freshInp1.value === '') {
        freshInp1.classList.add('red__error');
        freshSpan1.textContent = 'Пожалуйста введите имя!!!'
    } else {
        freshInp1.classList.add('green__error');
        freshSpan1.textContent = ''
    }
    if (freshInp2.value === '') {
        freshInp2.classList.add('red__error');
        freshSpan2.textContent = 'Пожалуйста введите электронную почту!!!'
    } else {
        freshInp2.classList.add('green__error');
        freshSpan2.textContent = ''
    }
})

// erorr-2

const followerForm = document.querySelector('.follower__form'),
    input1 = document.querySelector('.input1'),
    input2 = document.querySelector('.input2'),
    inputSpan = document.querySelector('.inp__span1'),
    inputSpan2 = document.querySelector('.inp__span2');

followerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input1.value === '') {
        input1.classList.add('red__error');
        inputSpan.textContent = 'Пожалуйста введите имя!!!'
    } else {
        input1.classList.add('green__error');
        inputSpan.textContent = ''
    }
    if (input2.value === '') {
        input2.classList.add('red__error');
        inputSpan2.textContent = 'Пожалуйста введите электронную почту!!!'
    } else {
        input2.classList.add('green__error')
        inputSpan2.textContent = ''
    }
})