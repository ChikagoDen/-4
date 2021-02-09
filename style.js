
const str = `One: 'Hi Mary.' Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
One: 'Not too bad. The weather is great isn't it?'
Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure.' Bye.'`


// 1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. 
// Придумать шаблон, который заменяет одинарные кавычки на двойные.
// const regexp =/\'/g;
// console.log(str.replace(regexp,'\"'));
console.log(str.replace(/\'/g,'\"'));

// 2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.
console.log(str.replace( /\B\'|\'\n/g,'\"'));
//\'\n/g-для строчки - Two: 'I'm going to meet a friend of mine at the department store'

// 3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить.
//  При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
//  a. Имя содержит только буквы.
// b. Телефон имеет вид.+7(000)000-0000
// c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
// d. Текст произвольный.
// e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке.
function validate_form ( )
{
	valid = true;
    document.getElementById("phone",'name').style.border="solid 1px black"; 
    document.getElementById('name').style.border="solid 1px black";
    document.getElementById('email').style.border="solid 1px black";
        if((/\p{L}/gu).test(document.anceta.name.value)==false||/\d|\s|\p{P}|\p{M}|\p{S}/gu.test(document.anceta.name.value)==true){
            document.getElementById('name').style.border="solid 1px red";
            alert ( "Пожалуйста при заполнении поля 'Ваше имя' используйте только буквы." );
            valid = false;
        }
        if((/^\+\d\(\d{3}\)\d{3}\-\d{4}$/).test(document.anceta.phone.value)==false){
            document.getElementById('phone').style.border="solid 1px red";
            alert ( "Пожалуйста при заполнении поля 'Телефон' используйте шаблон +7(000)000-0000" );
            valid = false;
        }
        if( (/\w{1,}[a-z\.\-]\w{1,}\@mail.ru$/gi).test(document.anceta.email.value)==false){
            document.getElementById('email').style.border="solid 1px red";
            alert ( "Пожалуйста при заполнении поля 'email' используйте шаблон mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru." );
            valid = false;
        }
        return valid;
}
