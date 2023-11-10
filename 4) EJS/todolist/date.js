//module.exports ="cool"

module.exports.getDate= getDate;

function getDate(){
    const today = new Date();
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
      };
    const dayInfo = today.toLocaleDateString("en-US", options); //Javascript date format

    return dayInfo;
}

module.exports.getDay= function(){
    const today = new Date();
    const options = {
        weekday: "long",
      };
    const dayInfo = today.toLocaleDateString("en-US", options); //Javascript date format

    return dayInfo;
}