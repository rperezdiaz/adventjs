function maxDistance(movements) {
  let result = 0;
  let wild = 0;
  for (let i = 0; i < movements.length; i++) {
    switch (movements[i]) {
      case ">":
        result++;
        break;
      case "<":
        result--;
        break;
      default:
        wild++;
    }
  }

  return Math.abs(result) + wild;
}
