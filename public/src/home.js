const totalBooksCount = (books) => books.length 

const totalAccountsCount = (accounts) => accounts.length

function booksBorrowedCount(books) {
//   let count = 0
  let result = []
  for (let i = 0; i < books.length; i++) {
    const book = books[i].borrows
    for(let j = 0; j < book.length; j++) {
      const borrowed = book[j].returned
//       if(borrowed === false) count += 1
      if(borrowed === false) result.push(book[j])
    }
  }
  const end = result.reduce((acc, status) => {acc[status.id] = status.returned; return acc}, {})
//   return count
  return Object.keys(end).length
}

function getMostCommonGenres(books) {
  let results = {}
  let toArray = []
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
      let temp1 = 1 + results["Science"]
      results["Science"] = temp1
      break
    case "Historical Fiction":
      let temp2 = 1 + results["Historical Fiction"]
      results["Historical Fiction"] = temp2
      break
    case "Classics":
      let temp3 = 1 + results["Classics"]
      results["Classics"] = temp3
      break
    case "Travel":
      let temp4 = 1 + results["Travel"]
      results["Travel"] = temp4
      break
    case "Young Adult":
      let temp5 = 1 + results["Young Adult"]
      results["Young Adult"] = temp5
      break
    case "Nonfiction":
      let temp6 = 1 + results["Nonfiction"]
      results["Nonfiction"] = temp6
      break
    default:
      console.log("This book needs a genre")
  }
  }//end of for lop
//   console.log(results) to check results
  for(let result in results) {
    toArray.push({name: result, count: results[result]})
  }
//   console.log(toArray) to check toArray
  const final = toArray.sort((genreA, genreB) => (genreA.count > genreB.count ? -1 : 1))
//   console.log(final.slice(0,5)) to check top 5
  return final.slice(0,5)
}// end of function 

function getMostPopularBooks(books) {
  let toArray = []
  const filterBooks = books.filter((book) => book.borrows.length > 0)
  for(let book in filterBooks) {
    let bookNo = filterBooks[book]
    toArray.push({name: bookNo.title, count: bookNo.borrows.length})
  }
  const final = toArray.sort((titleA, titleB) => (titleA.count > titleB.count ? -1 : 1))
  return final.slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  let toArray = []
  let authorArray = []
  let returnArr = []
  for(let book in books) {
    let bookNo = books[book]
    toArray.push({name: bookNo.authorId, count: bookNo.borrows.length})
  } 
  for(let author in authors) {
    let authorNo = authors[author]
    authorArray.push({id: authorNo.id, name: `${authorNo.name.first} ${authorNo.name.last}`})
  }
  for(let i = 0; i < toArray.length; i++) {
    let array = toArray[i]
//     console.log(array.name)
    for(let j = 0; j < authorArray.length; j++) {
//       console.log(authorArray[j].id)
      if(array.name == authorArray[j].id) {
        returnArr.push({name: authorArray[j].name, count: array.count})
      }
    }
  }
  const end = returnArr.sort((authorA, authorB) => (authorA.count > authorB.count ? -1 : 1))
  return end.slice(0,5)
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
