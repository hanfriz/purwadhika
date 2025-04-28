//No. 1 create a function that can create a triangle pattern according to the height we provide like the following:
//tinggi = 5: tinggi segitiga (bisa diganti)
//i untuk baris ke berapa dan j untuk angka di dalam 1 baris
//baris adalah string sementara untuk menyusun tiap baris angka
//Pakai 2 loop:Loop luar: untuk baris (tinggi segitiga) dan Loop dalam: untuk angka dalam 1 baris


let tinggi = 5;

for (let i = 1; i <= tinggi; i++) {
  let baris = "";

  for (let j = 1; j <= i; j++) {
    baris += j + " ";
  }

  console.log(baris);
}


//no 2 replace multiple of 3, 5, and 3&5

function multiple (n){
    for (let i=1; i<=n; i++){
        if (i%15 ===0){
            console.log("Fizzbuzz");
        }
        else if (i%3===0){
           console.log("fizz"); 
        }
        else if (i%5===0){
            console.log("buzz"); 
         }
         else  {
            console.log(i); 
         }
     }
     }
    
     multiple(16);


//3. function for calculating Body Mass Index

const calculateBMI=(weight,height)=>{
    const bmi=weight/(height*height);
    if (bmi<18.5) return "Less weight";
    if (bmi<24.9) return "ideal";
    if (bmi<29.9) return "overweight";
    if (bmi<39.9) return "very overweight";
    if(39.9<bmi) return "obesity";

}

console.log(calculateBMI(60,1.65));


//4.a function to remove all odd numbers in an array and return a new array that contains even number only

let listNumber=[1,2,3,4,5,6,7,8,9,10];
let hasil=[];

for (let i = 0; i < listNumber.length; i++) {
    if (listNumber[i] % 2 == 0) {
      hasil.push(listNumber[i]);  // hanya tambahkan angka ganjil
    }
  }
  
  console.log(hasil);



//5. write a function to split a string and convert it into an array of words

let kalimat="Hello World";
let kataArray= kalimat.split(" ");// dikasi spasi ditengah " " supaya yg displit antara kata bukan huruf

console.log(kataArray)


     