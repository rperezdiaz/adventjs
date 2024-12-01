function findNaughtyStep(original, modified) {
  for (let i = 0; i < original.length || i < modified.length; i++) {
    if (original[i] !== modified[i]) {
      return original.length > modified.length ? original[i] : modified[i];
    }
  }

  return "";
}
