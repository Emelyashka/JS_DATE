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
function task3()
{
    let a = new Date(prompt("Введите дату: год-месяц-число"));
    function getWeekDayNext(a) {
        a.setDate(a.getDate()+1);
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        return days[a.getDay()];
        }
    function getWeekDayCurr(a) {
        a.setDate(a.getDate()-1);
        console.log(a)
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        return days[a.getDay()];
        }  
    function getWeekDayPrev(a) {
        a.setDate(a.getDate()-1);
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        return days[a.getDay()];
        }    
    let week = [
        {
          next: `${getWeekDayNext(a)}`,
          curr:  `${getWeekDayCurr(a)}`,
          prev: `${getWeekDayPrev(a)}`,
        }];
    console.log (week);
}
