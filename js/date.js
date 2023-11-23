function getDayOfWeek(data)
{
    let days=["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    return days[data.getDay()];
}
function countDaysForNewYear(data)
{
    let NewYear=new Date(data.getFullYear()+1,0,1);
    return Math.floor((NewYear-data)/(1000*60*60*24));
}
function getObjectMyDays()
{
    let next,prev;
    let data=new Date();
    let today=data.getDay();
    if (today==6) next=0;
    else next=today+1;
    if (today==0) prev=6;
    else prev=today-1;
    return {
        next:next,
        curr:today,
        prev:prev,
    }
}
function task4()
{
    let milli = prompt("Введите миллисекунды");
    function getMin(milli){
        let minutes = Math.floor(milli / 60000);
        return minutes;
      };
      function getSec(milli){
        let sec = Math.floor(milli / 1000);
        return sec;
      };  
      function getHours(milli){
        let hours = Math.round(milli / (1000*60*60));
        return hours;
      };  
      function getDay(milli){
        let days = Math.round(milli/ (1000*60*60*24));
        return days;
      };        
    result = [
        {
            d: `${getDay(milli)}`,
            h: `${getHours(milli)}`,
            m:  `${getMin(milli)}`,
            s: `${getSec(milli)}`,        
        }];
    console.log (result);
    alert (`${milli} миллисекунд - это ${getDay(milli)} дней`);
    alert (`${milli} миллисекунд - это ${getHours(milli)} часов`);
    alert (`${milli} миллисекунд - это ${getMin(milli)} минут`);
    alert (`${milli} миллисекунд - это ${getSec(milli)} секунд`);
}
function task5()
{
    let today = new Date();
    let hbdate = new Date(prompt("Введите дату рождения (год-месяц-число)"));
    let diff = new Date(today.getTime() - hbdate.getTime());
    alert(`Ваш возраст - ${diff.getUTCFullYear() - 1970} лет, ${diff.getUTCMonth()} мес и ${diff.getUTCDate() - 2} дн`);
}
function task6()
{
for (let friday of arrayOfFridaythe13thsIn(2023))
console.log(friday.toLocaleString(undefined, { day: "numeric", month: "long" }))
function arrayOfFridaythe13thsIn(year) {
    let array = [];
    for (let month = 0; month < 12; month++) {
        let d = new Date(year, month, 13);
        if (d.getDay() == 5) {
            array.push(d);
        }
    }
   alert (array);
}
}
function task7()
{
    let timeNow = new Date();
    let hours = timeNow.getHours();
    let hello;
    if (hours >= 0 && hours <= 11.00)
        hello = 'Доброе утро!';
    else if (hours >= 11.01 && hours <= 17)
        hello = 'Добрый день!';
    else if (hours >= 17.01 && hours <= 24)
        hello = 'Добрый вечер!';
    alert (hello);
}