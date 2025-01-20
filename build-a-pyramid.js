console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");

// Using standard way
let i = 1;
const hashLength = 9;
for ( i; i <= hashLength; i=i+2) {
  let hashText = "";
  let j = 0;
  let k = (hashLength - i) / 2;
  let m = i;
  for (j; j < hashLength; j++) {
    if ((k > 0 && m > 0) || (k <= 0 && m <= 0)) {
      hashText += " ";
      k--;
    } else {
      hashText += "#";
      m--;
    }
  }
  console.log(hashText);
}

// Using Array
let k = 1;
for ( k; k <= hashLength; k=k+2) {
  let hashArray = new Array(k).fill("#");
  let spaceArray = new Array((hashLength - k) / 2).fill(" ");
  console.log(([...spaceArray, ...hashArray, ...spaceArray]).toString().replace(/,/g, ''));
}
