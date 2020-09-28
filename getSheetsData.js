function randomLetter(letters){
    return letters[Math.floor(Math.random()*letters.length)];
}

fetch('https://spreadsheets.google.com/feeds/cells/1MFnSisZNfYuXskV4D8feHCy-5r4Nk_m1KTOcHOjHoW4/1/public/full?alt=json')
  .then(response => response.json())
  .then(data => data.feed.entry.filter(
    cell => cell.gs$cell.row !== "1" && cell.gs$cell.col === "2"
  ))
  .then(cells => cells.map(
    cell => cell.content.$t
  ))
  .then(letters => {
    document.getElementById("randomizer").innerText = randomLetter(letters);
    console.log(letters)
  });
