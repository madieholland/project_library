function getTotalBooksCount(books) {
  // finds total number of books
  return books.length
}

function getTotalAccountsCount(accounts) {
  // finds total number of accounts
  return accounts.length
}

function getBooksBorrowedCount(books) {
  //get total borrowed books
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
  // loop through all books to find genres 
  const popularBooks = books.reduce((acc, curr) => {
    let popularGenre = acc.find((accBook) => accBook.name === curr.genre)
    if (popularGenre === undefined) {
      acc.push({ name: curr.genre, count: 1 })
    } else {
      // add popular genres together 
      popularGenre.count++
    }
    return acc
  }, [])
  // use function made above to only show top 5 
  return sortAndGetTopFive(popularBooks)
}


function getMostPopularBooks(books) {
  // loop through all books to find how many times each one was borrowed 
  const popularBook = books.map((book) => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  })
  // use function made above to only show top 5 
  return sortAndGetTopFive(popularBook)
}


function getMostPopularAuthors(books, authors) {
  let result = []
  // create an object within the array for the author's first and last name and number of books
  authors.forEach((author) => {
    const obj = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    }
    // loop through all books to find authors
    books.forEach((book) => {
      if (book.authorId === author.id)
        obj.count += book.borrows.length
    })
    result.push(obj)
  })
  // use function made above to only show top 5 
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
