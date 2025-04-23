//check number oddd or even
//	num % 2 menghitung sisa bagi num dibagi 2.
	//Jika === 0, berarti bilangan genap.
	//	Jika tidak, berarti ganjil.
	//console.log menampilkan hasilnya di terminal atau console.


let number=25;
if (number%2===0){
    console.log(number +"is even");
}
else {
    console.log(number + "is odd");
}





//check prime number

//isPrime di‑set true sebagai asumsi awal.
//	Jika x <= 1, langsung false karena 0 dan 1 bukan prima.
//	Loop i dari 2 sampai √x cukup untuk cek pembagi.
//	Jika x % i === 0, berarti ada pembagi selain 1 dan dirinya, maka bukan prima (isPrime = false; break).
//	Akhirnya tampilkan teks sesuai nilai boolean isPrime.

let x=7;
let isPrime=true;
if (x<=1){
isPrime=false;
}
else {
    for(let i=2; i<=Math.sqrt(x); i++){
        if (x%i===0){
            isPrime=false;
            break
        }
    }

}
console.log(x + (isPrime? "is a prime number":"is not a prime number"));


//sum number 1 to N
//total = 0 sebagai accumulator.
//for loop dari i = 1 hingga i = N, setiap iterasi total += i menambahkan i ke total.
//Setelah loop selesai, total berisi 1 + 2 + … + N.

let n=5;
let total=0;

for (let i=1; i<=n; i++){
    total+=i;
}
console.log("Sum 1 to", n , "=", total);


//factorial number
//faktorial = 1 karena perkalian identitas.
//Loop i dari 1 sampai m, setiap iterasi faktorial *= i (faktorial = faktorial × i).
//Hasilnya 4! = 24 (1×2×3×4).

let m=4;
let factorial=1;

for (let i=1; i<=m; i++){
    factorial*=i;
}
console.log(m+"!=",factorial);


//fibonacci
//1.	Inisialisasi dua bilangan pertama a = 0 dan b = 1.
//2.	Cetak a (yaitu 0) di luar loop.
//3.	Dalam loop i dari 1 sampai < count:
//		Cetak nilai b (awal 1).
//		Hitung nilai selanjutnya: next = a + b.
//  	Geser: a = b, lalu b = next.
//4.	Ulangi, sehingga terbentuk deret: 0, 1, 1, 2, 3, 5, 8, …

let count=15;
let a=0;
let b=1;

console.log("fibonacci seqence:");
console.log(a);
for(let i=1; i<=count;i++){
    console.log(b);
    let next=a+b;
    a=b;
    b=next;
}