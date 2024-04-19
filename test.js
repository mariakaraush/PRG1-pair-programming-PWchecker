function scramble(testString){
    let begStr = testString.substring(0, 2);
    console.log("1st: " + begStr)
    let endStr = testString.substring(testString.length - 2, testString.length)
    let midStr = testString.substring(2, testString.length - 2)
    console.log("2st: " + midStr)
    console.log("3st: " + endStr)
    
    return endStr + midStr + begStr
}

console.log(scramble("teach"))