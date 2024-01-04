const countries = [
  "Pakistan",
  "India",
  "Tajikistan",
  "Russia",
  "Kazakhstan",
  "Greece",
  "Turkmenistan",
  "Turkey",
  "Kyrgyzstan",
  "Ukraine",
  "Uzbekistan",
];

const sentence = "In the end, we only regret the chances we didn't take.";

const books = [
  "To Kill a Mockingbird",
  "1984",
  "The Great Gatsby",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "The Lord of the Rings",
  "Animal Farm",
  "Brave New World",
  "The Grapes of Wrath",
  "The Hobbit",
  "One Hundred Years of Solitude",
  "The Catcher in the Rye",
  "Catch-22",
  "The Brothers Karamazov",
  "Moby Dick",
  "The Odyssey",
  "Frankenstein",
  "Alice's Adventures in Wonderland",
  "The Picture of Dorian Gray",
  "War and Peace",
];

// 1. Countries array-ində sonu 'stan' ilə bitən ölkələrdən array yaratmaq
const endWithStanCountries = countries
  .filter((c) => c.endsWith("stan"))
  .map((c) => c);
console.log(endWithStanCountries);

// 2. Sentence dəyişənindəki bütün sözlərin baş hərfləri böyük şəkildə yazmaq. ("In The End" - bu formada)
const words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
const capitalizedSentence = words.join(" ");
console.log(capitalizedSentence);

// 3. Sentence dəyişənini tərsinə yazmaq. (In the end, we only regret the chances we didn't take. - bu formada)
const reversedSentence = sentence.split(" ").reverse().join(" ");
console.log(reversedSentence);

// 4. Sentence dəyişənində olan ən uzun sözü tapmaq.
let longestWord = "";
words.forEach((word) => {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
});
console.log(longestWord);

// 5. Books array-ini əlifba sırası ilə yazılmış array-ə çevirmək
const sortedBooks = books.sort();
console.log(sortedBooks);
// 6. Books array-ində adı ən uzun olan kitabı tapmaq.
let longestBookName = books[0];
books.forEach((book) => {
  if (book.length > longestBookName.length) {
    longestBookName = book;
  }
});
console.log(longestBookName);


// 7. Books array-ində olan kitabların ümumi olaraq hərflərinin sayını hesablamaq.
let lettersOfBooks = 0;
 for (let i = 0; i < books.length; i++) {
  lettersOfBooks += books[i].length
 }
 console.log(`Kitabların ümumi olaraq ${lettersOfBooks} hərfi var.`)


