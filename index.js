let tg = window.Telegram.WebApp;

tg.MainButton.textColor = '#FFFFFF'
tg.MainButton.color = '#2cab37'

let checkLoan = document.getElementById('check_loan');
let sendCheckLoanData = document.getElementById('send_data');
let anyQuestion = document.getElementById('any_question');
let sendQuestion = document.getElementById('send_question');
tg.expand()

anyQuestion.addEventListener('click', () => {
    document.getElementById('main').style.display = 'none';
    document.getElementById('chatgpt_form').style.display = 'block';
});
sendQuestion.addEventListener('click', () => {
    document.getElementById('main').style.display = 'block';
    document.getElementById('chatgpt_form').style.display = 'none';
});

checkLoan.addEventListener('click', () => {
    document.getElementById('main').style.display = 'none';
    document.getElementById('form').style.display = 'block';
});
sendCheckLoanData.addEventListener('click', () => {
    setTimeout(function () {
        document.getElementById('main').style.display = 'block';
        document.getElementById('form').style.display = 'none';
        tg,MainButton.setText('Исполнительных производств нет, вы не являетесь ответчиком в городских и мировых судах')
        tg.MainButton.show()
    }, 1000);
    // document.getElementById('main').style.display = 'block';
    // document.getElementById('form').style.display = 'none';
});