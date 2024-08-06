module.exports.Period = function (oldDate, period) {
  let newDate = new Date(Number(oldDate))
        let now = Date.now()
        switch(period){
            case "singletime": //do nothing, one time payment
                break;
            case "daily": //add 24 hrs until next due date is past current time
                while (Date.parse(newDate) < now) {
                    newDate.setDate(newDate.getDate() + 1)
                }
                break;
            case "weekly": //add 7 days until next due date is past current time
                while (Date.parse(newDate) < now) {
                    newDate.setDate(newDate.getDate() + 7)
                }
                break;
            case "monthly": //add 1 month until next due date is past current time
                while (Date.parse(newDate) < now) {
                    newDate.setMonth(newDate.getMonth() + 1)
                }
                break;
            default:
                break;
        }
        return Number(Date.parse(newDate))
}