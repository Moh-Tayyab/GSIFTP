/*function names(str : string) : {name1 : string , name2 : string , name3 : string } {

    let name1 = "TAYYAB";
 //name1 = name1.toLowerCase()

 let name2 = "usama";
 //name2 = name2.toUpperCase()

 let name3  = "qasim";
 //name3 = titleCase(name3);
    name1 = name1.toLowerCase()
    name2 = name2.toUpperCase()
    //name3 = titleCase(name3)

    return {name1 , name2 , name3}
    

}

let result = names("func")

console.log(result.name1);
console.log(result.name2);
console.log(result.name3);
*/
var firstName = 'muhammad';
var lastName = 'TAYYAB';
var fullName = firstName + " " + lastName;
var case1 = fullName.toLowerCase();
console.log(case1);
var case2 = fullName.toUpperCase();
console.log(case2);
function titleCase1(fullName) {
    var words = fullName.toLowerCase().split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    var result = words.join(" ");
    console.log(result);
    return result;
}
titleCase1(fullName);
console.log(titleCase1);
