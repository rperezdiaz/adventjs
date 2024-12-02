function createFrame(names) {
  let prefix = "* ";
  let suffix = " *";

  //get longest name length
  let longestNameLength = 0;
  for (let name of names) {
    if (name.length > longestNameLength) {
      longestNameLength = name.length;
    }
  }

  // build frame
  let frame = "*".repeat(longestNameLength + prefix.length + suffix.length);

  //build result
  let result = frame + "\n";
  for (let name of names) {
    result += prefix + name.padEnd(longestNameLength) + suffix + "\n";
  }

  return result + frame;
}
