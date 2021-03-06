
const YatBeldexLookup = require('./index');
let yatBeldexLookup = new YatBeldexLookup({ debugMode: true });
console.log(yatBeldexLookup);
console.log(yatBeldexLookup.getBasePath());
console.log("Valid yat?");
setTimeout(() => {

    //yatBeldexLookup.testEmojisAgainstUnicodePropertyEscape(); 

    // Expect true
    console.log(yatBeldexLookup.isValidYatHandle("πππ"))
    
    // Expect true
    console.log(yatBeldexLookup.isValidYatHandle("πΆ"))
    console.log(yatBeldexLookup.isValidYatHandle("πΆπΆ"))

    // Expect a false
    console.log(yatBeldexLookup.isValidYatHandle("aπππ"))
    
    // expect true
    // yatBeldexLookup.isValidYatCharacter("π«").then((response) => {
    //     console.log(response);
    // });
    // // // expect false
    // yatBeldexLookup.isValidYatCharacter("π").then((response) => {
    //     console.log(response);
    // })
    // // // expect false
    // yatBeldexLookup.isValidYatCharacter("π").then((response) => {
    //     console.log(response);
    // })
    // // // expect false
    // yatBeldexLookup.isValidYatCharacter("π").then((response) => {
    //     console.log(response);
    // })
    // // // expect false
    // yatBeldexLookup.isValidYatCharacter("π").then((response) => {
    //     console.log(response);
    // })
    // // yatBeldexLookup.isValidYatHandle("π«π«π«").then((response) => {
    // //     console.log("Is this handle valid?");
    // //     console.log(response);
    // // })
    yatBeldexLookup.lookupBeldexAddresses("πππ").then((response) => {
        console.log(`Result of beldex address lookup`);
        console.log(response);
    })

}, 1000);