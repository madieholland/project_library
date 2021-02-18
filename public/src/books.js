function findAuthorById(authors, id) {
  // loop through all authors until author ids match 
  const findAuthor = authors.find((author) => author.id === id) 
return findAuthor 
}

function findBookById(books, id) {
  // loop through all books until book ids match 
  const findBook = books.find((book) => book.id === id)
  return findBook
}

function partitionBooksByBorrowedStatus(books) {
  // loop through to find only books not returned 
  const notReturnedBooks = books.filter((book) => book.borrows[0].returned === false)
  // loop through to find only books returned 
  const returnedBooks = books.filter((book) => book.borrows[0].returned === true)
  // separate into not returned and returned 
  return [notReturnedBooks, returnedBooks]
}

function getBorrowersForBook(book, accounts) {
  let result = []
  // loop through all accounts to find which accounts have borrowed each book
  accounts.forEach((account) => {
    book.borrows.forEach((transaction) => {
      if (transaction.id === account.id) {
        let obj = {
          ...account,
          returned: transaction.returned
        }
        result.push(obj)
      }
    })
  })
  // return array with only 10 most recent borrowers
  return result.slice(0, 10) 
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
