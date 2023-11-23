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