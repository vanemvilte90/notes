const useCreateDate = () => {
    const dateObj = new Date();
    let month = dateObj.getMonth();
    let monthName;
    switch(month) {
        case 0: monthName = "ene";
        break;
        case 1: monthName = "feb";
        break;
        case 2: monthName = "mar";
        break;
        case 3: monthName = "abr";
        break;
        case 4: monthName = "may";
        break;
        case 5: monthName = "jun";
        break;
        case 6: monthName = "jul";
        break;
        case 7: monthName = "ago";
        break;
        case 8: monthName = "sep";
        break;
        case 9: monthName = "oct";
        break;
        case 10: monthName = "nov";
        break;
        case 11: monthName = "dic";
        break;
    }

    
    const date = `${dateObj.getDate()} ${monthName} ${dateObj.getFullYear()}`
    return date;
}

export default useCreateDate;