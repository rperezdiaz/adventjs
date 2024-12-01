function adjustLights(lights) {
  const fix = (idx, arr) => {
    if (arr[idx] === "🟢") {
      arr[idx] = "🔴";
    } else if (arr[idx] === "🔴") {
      arr[idx] = "🟢";
    }
  };

  let counter = 0;

  for (let i = 1; i < lights.length; i++) {
    // 🔴🔴🔴
    if (lights[i - 1] === lights[i] && lights[i + 1] === lights[i]) {
      fix(i, lights);
      counter++;
    }

    // [🔴🔴🟢]🟢
    else if (lights[i - 1] === lights[i] && lights[i + 1] !== lights[i]) {
      fix(i - 1, lights);
      counter++;
    }

    //🟢🔴🔴
    else if (lights[i + 1] === lights[i] && lights[i - 1] !== lights[i]) {
      fix(i + 1, lights);
      counter++;
    }
  }

  return counter;
}
