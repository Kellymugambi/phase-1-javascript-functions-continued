// code your solution here
function saturdayFun(defaultActivity = "roller-skate") {
    return `This Saturday, I want to ${defaultActivity}!`
}

function mondayWork (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective (special = "||") {
    return function (adjective = "a dedicated programmer"){
        return `You are ${special}${adjective}${special}!`
    }
}