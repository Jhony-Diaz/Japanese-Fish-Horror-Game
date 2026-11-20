const savedWordForm = document.getElementById("saved-word-form");
const japaneseWord = document.getElementById("japanese-word");
const englishWord = document.getElementById("english-word");
const savedWords = document.getElementById("saved-words");




savedWordForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const listItem = document.createElement("li");
  listItem.textContent = `${japaneseWord.value} | ${englishWord.value}`;
  savedWords.appendChild(listItem);

  savedWordForm.reset();
})