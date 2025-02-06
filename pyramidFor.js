//Drawing Pyramid using For
let n = 8;  

// Outer loop to handle rows
for (let i = 1; i <= n; i++) {
    let row = '';

    // Add spaces for the current row
    for (let j = 1; j <= n - i; j++) {
        row += ' ';  // Add space
    }

    // Add stars for the current row
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += '*';  // Add star
    }
  
    console.log(row);
}
