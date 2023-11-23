function getDayOfWeek(data)
{
    let days=["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    return days[data.getDay()];
}