export function valueToBar(value:number):string {
  const fullCirclesCount:number = Math.round(value/16.66);
  const bar:string = new Array(fullCirclesCount + 1).join('◉').padEnd(6,'O');
  return bar;
};

export function timeSince(since:Date):string {
  const timeIntervals = {
      D: 86400,  // day
      H: 3600,   // hours
      M: 60,     // minute
      S: 1,      // second
  };

  let diff = (new Date().getTime() - since.getTime()) / 1000; // 100
  let diffAsString = '';

  for (const [key,value] of Object.entries(timeIntervals)) {
      if (diff/value >= 1) {
          let curr = Math.floor(diff/value)
          diffAsString += `${curr}${key} `
          diff -= value * curr;
      } else {
          diffAsString += `0${key} `
      }
  }

  return diffAsString;
}