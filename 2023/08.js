function organizeGifts(gifts) {
  let result = "";

  let newItemIdx = 0;
  for (let i = 0; i < gifts.length; i++) {
    //parse string
    if (gifts[i].match(/[a-z]/i)) {
      let amount = Number(gifts.slice(newItemIdx, i));
      let item = gifts[i];

      newItemIdx = i + 1;

      //process pallets
      if (amount / 50 > 0) {
        let pallets = Math.floor(amount / 50);
        amount = amount % 50;
        result = result.concat(`[${item}]`.repeat(pallets));
      }

      //process boxes
      if (amount / 10 > 0) {
        let boxes = Math.floor(amount / 10);
        amount = amount % 10;
        result = result.concat(`{${item}}`.repeat(boxes));
      }

      //process bags
      if (amount > 0) {
        result = result.concat(`(${item.repeat(amount)})`);
      }
    }
  }

  return result;
}
