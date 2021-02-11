function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const borrowedBooks = books.filter((book) => book.borrows[0].returned === false).length
  return borrowedBooks
}

function sortAndGetTopFive(arr) {
  // new function to reduce to top 5 only - helper function
  return arr
    .sort((arr1, arr2) => arr1.count < arr2.count ? 1 : -1)
    .slice(0, 5)
}

function getMostCommonGenres(books) {
  const popularBooks = books.reduce((acc, curr) => {
    let popularGenre = acc.find((accBook) => accBook.name === curr.genre)
    if (popularGenre === undefined) {
      acc.push({ name: curr.genre, count: 1 })
    } else {
      popularGenre.count++
    }
    return acc
  }, [])
  return sortAndGetTopFive(popularBooks)
}


function getMostPopularBooks(books) {
  const popularBook = books.map((book) => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  })
  return sortAndGetTopFive(popularBook)
}


function getMostPopularAuthors(books, authors) { 
  let result = []
    authors.forEach((author) => {
      const obj = {
        name: `${author.name.first} ${author.name.last}`, 
        count: 0
      }
      books.forEach((book) => {
        if(book.authorId === author.id)
        obj.count += book.borrows.length
      })
      result.push(obj)
    })
    return sortAndGetTopFive(result)
  }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
