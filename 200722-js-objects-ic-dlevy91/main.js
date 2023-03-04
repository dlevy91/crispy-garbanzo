//sanity check
console.log('SANITY CHECK');
//----------------------------------------------------------------------
//Create objects and populate information
let bandMember1 = {
    name: "Flea",
    instrument: "bass guitar",
}
let bandMember2 = {
    name: "Anthony Kiedis",
    instrument: "lead vocals",
}
let bandMember3 = {
    name: "John Frusciante",
    instrument: "guitar",
}
let bandMember4 = {
    name: "Chad Smith",
    instrument: "drums",
}
// console.log(bandMember1)
//----------------------------------------------------------------------
//Create function allowing you to print band member name and instrument type
function printBand(bandMember) {
    //print to console using this string template
    console.log(`Band member: ${bandMember.name}\nBand member instrument: ${bandMember.instrument}`);
}
//----------------------------------------------------------------------
//Add number to print any band member
printBand(bandMember4);
//----------------------------------------------------------------------
//Add band members to array
let bandMembers = [bandMember1, bandMember2, bandMember3, bandMember4];
//----------------------------------------------------------------------
console.log(`Band Member Breakdown`);
//Created for loop to run the information and print to console using carriage carrier
for (i = 0; i < bandMembers.length; i++){
    if(i < bandMembers.length){
        console.log(`Name : ${bandMembers[i].name}\nInstrument : ${bandMembers[i].instrument}`);
    }
}

console.log(`Number of members: ${bandMembers.length}`);
//----------------------------------------------------------------------
