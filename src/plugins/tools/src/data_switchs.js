function switch_month(mc){
    switch(mc){
        case 0: mc = 'January'
            break;
        case 1: mc = 'February'
            break;
        case 2: mc = 'March'
            break;
        case 3: mc = 'April'
            break;
        case 4: mc = 'May'
            break;
        case 5: mc = 'June'
            break;
        case 6: mc = 'July'
            break;
        case 7: mc = 'August'
            break;
        case 8: mc = 'September'
            break;
        case 9: mc = 'October'
            break;
        case 10: mc = 'November'
            break;
        case 11: mc = 'Decemper'
            break;
        default: mc = 'Error: Invalid date form'
    }
    return mc
}
function switch_day(da){
    switch(da){
        case 1: da = 'Monday'
            break;
        case 2: da = 'Tuesday'
            break;
        case 3: da = 'Wednesday'
            break;
        case 4: da = 'Thursday'
            break;
        case 5: da = 'Friday'
            break;
        case 6: da = 'Starday'
            break;
        case 7: da = 'Sunday'
            break;
        default: return "Error: Invalid date form"
    }
    return da
}
function repair_number(x){
    if(x < 10) {
        x = '0'+x 
        return x
    } else {
        return x
    }
}
module.exports.rn = repair_number
module.exports.sm = switch_month
module.exports.sd = switch_day