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