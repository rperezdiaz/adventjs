function drawGift(size, symbol) {
  let levels = [];
  levels.push(" ".repeat(size - 1) + "#".repeat(size) + "\n");

  for (let i = 0; i < size - 1; i++) {
    let level;

    if (i === size - 2) {
      level = "#".repeat(size) + symbol.repeat(i) + "#\n";
    } else {
      level = "#" + symbol.repeat(size - 2) + "#" + symbol.repeat(i) + "#\n";
    }

    levels.push(" ".repeat(size - (i + 2)) + level);
  }
  let reversed = levels.map((str) => str.trim());
  levels.pop();
  return levels.join("") + reversed.reverse().join("\n") + "\n";
}
