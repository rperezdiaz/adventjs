function prepareGifts(gifts) {
  return gifts
    .filter((gift, idx) => gifts.indexOf(gift) === idx)
    .sort((a, b) => a - b);
}
