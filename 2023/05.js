function cyberReindeer(road, time) {
  let elapsed = 1;
  const snapshots = [road];
  const _road = road.split("");

  let current = ".";
  let i = 0;

  while (elapsed < time) {
    //open gates
    if (elapsed === 5 && _road.includes("|")) {
      _road.forEach((c, i) => {
        if (c === "|") {
          _road[i] = "*";
        }
      });
    }

    let next = _road[i + 1];

    switch (next) {
      case ".":
      case "*":
        _road[i + 1] = "S";
        _road[i] = current;
        i++;
        current = next;
        break;
      case "|":
      default:
    }
    snapshots.push(_road.join(""));
    elapsed++;
  }

  return snapshots;
}
