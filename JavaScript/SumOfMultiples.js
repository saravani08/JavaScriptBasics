var n = 17;
var s=0;
for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      s += i;
    }
  }
  console.log(s);