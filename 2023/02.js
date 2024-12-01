function manufacture(gifts, materials) {
  const isInMaterials = (char) => materials.includes(char);
  return gifts.filter((word) => word.split("").every(isInMaterials));
}
