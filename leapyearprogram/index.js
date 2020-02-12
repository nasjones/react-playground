

function leapYear(year) {
    if (year < 1582) {
        throw new Error("Year is too low!");
    }
    if (year % 4 == 0 && year % 100 != 0 && year % 400 != 0) {
        return true;
    }
    return false;
}

export default leapYear;