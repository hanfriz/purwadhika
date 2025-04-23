//1. code to display the multiplication table of a given interger
// Multiplication Table
const number = 9;
// loop dari 1 sampai 10
for (let i = 1; i <= 10; i++) {
  // template literal untuk format output
  console.log(`${number} x ${i} = ${number * i}`);
}



// 2. Cek Palindrome

let str = "madam";
let reversed = "";

// Loop dari akhir ke awal untuk bikin string terbalik
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

//  Kemudian Bandingkan
if (str === reversed) {
  console.log(str + " is a palindrome");
} else {
  console.log(str + " is NOT a palindrome");
}

//3. convert cm to km

const cm=100000;
const km=cm/100000;

console.log(`"${cm}" cm = ${km} km`);

//format number as currency

const amount=1000;
const formatted= new Intl.NumberFormat('id-ID',{
    style:'currency',
    currency:'IDR',
    minimumFractionDigits:2,
}).format(amount);

console.log(formatted);


//code to remove first occurance of a given search string from a string
const original = "Hello world";
const search = "ell";

let result = "";
let i = 0;
let found = false;

while (i < original.length) {

  if (!found &&
      original[i] === 'e' &&
      original[i + 1] === 'l' &&
      original[i + 2] === 'l') {
    
  
    i += 3;
    found = true;
  } else {

    result += original[i];
    i++;
  }
}

console.log(result);

//find largest of two given intergers

const num1=42;
const num2=27;


let larger;

if (num1 > num2) {
  larger = num1;
} else {
  larger = num2;
}

console.log('Larger number:', larger);


//conditional statement to sort three numbers

let a = 42, b = 27, c = 18;
let kecil, tengah, besar;

// Cek kombinasi secara manual
if (a <= b && a <= c) {
  kecil = a;
  if (b <= c) {
    tengah = b;
    besar = c;
  } else {
    tengah = c;
    besar = b;
  }
} else if (b <= a && b <= c) {
  kecil = b;
  if (a <= c) {
    tengah = a;
    besar = c;
  } else {
    tengah = c;
    besar = a;
  }
} else {
  kecil = c;
  if (a <= b) {
    tengah = a;
    besar = b;
  } else {
    tengah = b;
    besar = a;
  }
}

console.log(" Sorted:", kecil + ", " + tengah + ", " + besar);


//code to show input string, number or other data type

let x = "hello";
let hasil;

if (typeof x === "string") {
  hasil = 1;
} else {
  if (typeof x === "number") {
    hasil = 2;
  } else {
    hasil = 3;
  }
}

console.log('Identify:', hasil); 
