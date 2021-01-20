function totalBooksCount(books) {}

function totalAccountsCount(accounts) {}

function booksBorrowedCount(books) {}

function getMostCommonGenres(books) {
  let results = {}
  results["Science"] = 0
  results["Historical Fiction"] = 0
  results["Classics"] = 0
  results["Travel"] = 0
  results["Young Adult"] = 0
  results["Nonfiction"] = 0
  for(let i = 0; i < books.length; i ++) {
    const book = books[i]
  switch (book.genre) {
    case "Science":
      let temp1 = book.borrows.length + results["Science"]
      results["Science"] = temp1
      break
    case "Historical Fiction":
      let temp2 = book.borrows.length + results["Historical Fiction"]
      results["Historical Fiction"] = temp2
      break
    case "Classics":
      let temp3 = book.borrows.length + results["Classics"]
      results["Classics"] = temp3
      break
    case "Travel":
      let temp4 = book.borrows.length + results["Travel"]
      results["Travel"] = temp4
      break
    case "Young Adult":
      let temp5 = book.borrows.length + results["Young Adult"]
      results["Young Adult"] = temp5
      break
    case "Nonfiction":
      let temp6 = book.borrows.length + results["Nonfiction"]
      results["Nonfiction"] = temp6
      break
    default:
      console.log("This book needs a genre")
  }
  }//end of for lop
  
  console.log(results)
}// end of function


function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {

}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
