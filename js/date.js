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