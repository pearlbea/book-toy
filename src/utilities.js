const ascSort = (books, field) => {
  return books.sort((a, b) => {
    if (a[field] < b[field]) return -1;
    else if (a[field] > b[field]) return 1;
    return 0;
  });
};

const descSort = (books, field) => {
  return books.slice().sort((a, b) => {
    if (a[field] < b[field]) return 1;
    else if (a[field] > b[field]) return -1;
    return 0;
  });
};

export { ascSort, descSort };
