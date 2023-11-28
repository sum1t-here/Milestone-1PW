function invRightTri(i) {
  for (let row = i; row >= 1; row--) {
    let asterisks = '';
    for (let j = 1; j <= row; j++) {
      asterisks += '* ';
    }
    console.log(asterisks);
  }
}

const numRows = 5;

invRightTri(numRows);
