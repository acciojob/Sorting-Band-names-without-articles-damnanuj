
let arr = ["Tajmahal", "The Virupaksha Temple", "Victoria Memorial"];

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

arr2.sort(); // bubble sort

for (let i = 0; i < arr2.length; i++) {
  arr2[i] = mp[arr2[i]]; // "An Victoria Memorial"
}
console.log(arr2);

const ulElement = document.getElementById('band');

arr2.forEach((bandName) => {
  const liElement = document.createElement('li');
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
});











