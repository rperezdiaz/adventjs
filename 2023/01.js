function findFirstRepeated(gifts) {
  const checked = [];
  for (let gift of gifts) {
    if (checked.includes(gift)) {
      return gift;
    }
    checked.push(gift);
  }
  return -1;
}
