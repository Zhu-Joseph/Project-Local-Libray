function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}//done

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
}//done

function helperBorrows(books) {
  return books.map((book) => book.borrows)
}//Helper function for numberOfBorrows

function numberOfBorrows(account, books) {
  let count = 0
  let borrows = helperBorrows(books)
  for(let i = 0; i < borrows.length; i++) {
    const borrow = borrows[i]
    for(let j = 0; j < borrow.length; j++) {
     if(borrow[j].id == account.id) {
       count += 1
     }
    }
 }return count
}//done

function bookAuthorId(books, authors) {
  for(let i = 0; i < books.length; i++) {
    let book = books[i]
    for(let j =0; j < authors.length; j++) {
      let author = authors[j]
      if(book.authorId === author.id) {
        book.author = author
      }
    }
  }
  return books
}// Helper function for getBooksPossessedByAccount

function getBooksPossessedByAccount(account, books, authors) {
  let result = []
  const booksDetails = bookAuthorId(books, authors)
  for(let i = 0; i < booksDetails.length; i++) {
    let book = booksDetails[i]
    for(let j = 0; j < book.borrows.length; j++) {
      let borrow = book.borrows[j]
      if(borrow.id === account.id && borrow.returned === false) result.push(book)
    }
  }
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
