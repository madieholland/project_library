function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) => nameA.name.last > nameB.name.last ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0
  books.forEach((book) => {
    book.borrows.forEach((borrowed) => {
      if (account.id === borrowed.id) {
        counter++
      }
    })
  })
  return counter
}

function getBooksPossessedByAccount(account, books, authors) {
  // Filtering through checked out books 
  const checkedOutBooks = books.filter((book) => book.borrows[0].id === account.id)
  const result = checkedOutBooks.map((books) => {
    const author = authors.find((author) => author.id === books.authorId)
    // combining objects 
    return {
      ...books,
      author: author,
    }
  })

  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
