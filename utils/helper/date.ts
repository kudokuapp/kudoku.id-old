export const getFullDate = (shortDate: Date) => {
    const fullday = new Date(shortDate);
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const date = fullday.getDate();
    const month = monthNames[fullday.getMonth()];
    const year = fullday.getFullYear();

    return `${date} ${month} ${year}`;
};

export const getCurrentYear = () => {
    const today = new Date();

    return `${today.getFullYear()}`;
};
