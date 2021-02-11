function findAuthorById(authors, id) {
  const findAuthor = authors.find((author) => author.id === id) 
return findAuthor 
}

function findBookById(books, id) {
  const findBook = books.find((book) => book.id === id)
  return findBook
}

function partitionBooksByBorrowedStatus(books) {
  const notReturnedBooks = books.filter((book) => book.borrows[0].returned === false)
  const returnedBooks = books.filter((book) => book.borrows[0].returned === true)
  return [notReturnedBooks, returnedBooks]
}

function getBorrowersForBook(book, accounts) {
  let result = []
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
