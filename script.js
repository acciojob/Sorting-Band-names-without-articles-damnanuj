//your code here

let arr = ["Tajmahal", "The Virupaksha Temple", "an Victoria Memorial"];

/*
    {
        Tajmahal: Tajmahal,
        The Virupaksha Temple: Virupaksha Temple,
         an Victoria Memorial: Victoria Memorial
    }
*/

let arr2 = []; // [Tajmahal, Virupaksha Temple, Victoria Memorial ]
let mp = {};

for (let i = 0; i < arr.length; i++) {
  let words = arr[i].split(" ");
  i;
  let finalString = "";
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i].toLowerCase(); // amthe
    if (currentWord !== "an" && currentWord !== "a" && currentWord !== "the") {
      finalString += words[i] + " ";
    }
  }
  let articleLessString = finalString.trim();
  mp[articleLessString] = arr[i];
  arr2.push(articleLessString);
}
console.log(mp);


arr2.sort(); // bubble sort

// ['Tajmahal', 'Victoria Memorial', 'Virupaksha Temple']
console.log(arr2);
for (let i = 0; i < arr2.length; i++) {
  arr2[i] = mp[arr2[i]]; // "An Victoria Memorial"
}
console.log(arr2);