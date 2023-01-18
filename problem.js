// 1. Given an array of strings, return only the strings that have exactly 4 characters.
// var words = ['book', 'note', 'car', 'style']

// for (var i = 0; i < words.length; i++){
//     if (words[i].length === 4){
//         console.log(words[i])
//     }
// }
// 2. Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.
// var words2 = ['booK', 'Note', 'car', 'sTyle']

// for (var i = 0; i < words2.length; i++)
// console.log(words2[i].toLowerCase())

// 3. Given an array of strings, return only the words that begin with the letter "t".
// var words3 = ['book', 'note', 'tar', 'tyle']

// for (var i = 0; i < words3.length; i++){
//     if (words3[i].startsWith ("t")){
//         console.log(words3[i])
//     }
// }


// 4. Start with an array of strings. Print only the words that include the letter combination "ing".
// var words4 = ['book', 'noting', 'tar', 'tyling']

// for (var i = 0; i < words4.length; i++){
// if (words4[i].includes ('ing')){
//     console.log(words4[i])
//     }
// }
// 5. Start with an array of travdestination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "el destinations. Print every travel The next place I want to visit is New York City!"

// var travel = ['Mashad', 'New York', 'Los Angles','Esfahan']
// var order = travel.sort()
// for (var i = 0;i < order.length;i++){
// console.log("The next place I would like to visit is "+ order[i])
// }

// 6. Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. For example, if you were given "Turing is the best", return "Turing Is The Best" instead!
var sentence = "i was going to the movies"

string = sentence.split(' ')
for (var i = 0; i < string.length;i++){
    string[i]= string[i].charAt().toUpperCase() + string[i].slice(1)}
    console.log(string.join(" "))