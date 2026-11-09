

let age = 'number123!';

if(age < 18){
    console.log('Вам доступ запрещён');
}else if (age <= 60){
    console.log('Добро пожаловать.');
}else if(age > 60){
    console.log('Вы слишком взрослый для этого сайта');
}else {
    console.log('Введите число');
}