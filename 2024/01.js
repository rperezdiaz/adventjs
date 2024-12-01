function prepareGifts(gifts) {
  return gifts
    .filter((gift, idx) => gifts.indexOf(gift) === idx)
    .toSorted((a, b) => a - b);
}
