
process.stdout.write("\rtype some stuff & hit enter...");
process.stdout.write("\n\r.\r");

let me = setInterval(() => {
  process.stdout.write("\r \r");
  setTimeout(()=>{
    process.stdout.write("\r.\r")
  }, 250);
}, 500);

setTimeout(function() {
  clearInterval(me);
  let readline = require('readline');
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  rl.on('line', function(line){ // \x1b[37m ${string} \x1b[0m  -- 30-37
    console.log(stringToColors(line))
    clearNewStringParts();
    return;
  })
}, 1500);

var roll = 0;

let func = () => {
  if(roll == 7){
    roll = 0;
  }else{
    roll++;
  }
  return roll;
}

let returnCode = (string) => {
  if(string === undefined){
    return `\x1b[3${func()}m`
  }else{
    return `\x1b[3${func()}m${string}`
  }
}
var newStringParts = [];
let stringToColors = (string) => {

  for(let i = 0; i < string.length; i++){
    const yes = string[i];
    const thing = returnCode(yes);
    newStringParts.push(thing);
  }
  let tie = newStringParts.join("")
  return tie;
}

let clearNewStringParts = () => {
  newStringParts = [];
}
