//array   `
let string="Hello";
console.log(string);

const listName=["Budi", "Johnny","John","Ria"]; //budi 0, Johnny 1,John 2,Ria 3
console.log(listName [0]); // kalau mau panggil spesifik elemen dlm array bisa pake angka index

for(let i=0; i<listName.length; i++){
console.log(listName[i]);
//untuk akses index elemen dlm array bisa pakai looping seperti ini
}

const listAngka=[1,2,3,4];
console.log(listAngka[3]);

const listArray=[[1,2]]; // cuma menunjukkan kalau dalam array bisa menampung apapun bahkan dalam array ada array juga bisa
console.log(listArray[0][1]);

//build in method array
console.log(listName)
console.log(listName.join (","));
console.log(listName.length);
console.log(listName.reverse());
console.log(listName.filter((nama)=> nama!=="John"));
console.log(listName.push("Bean"));// masukkin elemen baru dalam array
console.log(listName);

//for of loop: mengiterasi tiap elemen dalam array listName . pd tiap variable nama akan mengambil nilai dari elemen saat ini dlm array list naa
for (let nama of listName){
    console.log(nama); //looping sejumlah datanya
}
//function(reusable block of code) 

// bisa dipanggil berkali-kali dan pny fungsi masing2
//kalau cuma pakai for harus ditulis ulang kalau tiap kali mau dipanggil
//fungsi ky apa: cth fungsi menambahkan 2 angka, menampilkan ke terminal etc.

//ada yg namanya function declaration (semua didalam fungsi  tanda (parameter mirip variable) )
function pertambahan(a,b){
    return a+b; // klo ga panggil return maka hasilnya ga akan direspon cuma dijalankan saja
                // setelah di return nilai a dan b akan kosong lagi siap diisi baru
//tiap kali dipanggil pertambahan maka a+b walau tidak tahu nilainya a+b fungsi ini akan dijalankan
}
console.log(pertambahan(1,2));
console.log(pertambahan(5,6));
// cara untuk memanggil fungsi pertambahan dengan menulis argumen memasukan nilai dr parameter
const satuTambahTiga= pertambahan(1,2);
console.log(satuTambahTiga);
console.log(pertambahan (5,6));


//function expression atau function tanpa nama
const pengurangan = function(a,b){
    return a-b;
}
const tigaKurangSatu=pengurangan (3,1);
console.log(tigaKurangSatu)


//arrow function penyingkatan function expression => penulisannya

const perkalian=(a,b)=> {
    return a * b
}
console.log(perkalian (2,5));

const perkaliaan=(a,b)=> (a*b) // kalau pake arrow function cukup pake () ga perlu direturn
console.log(perkalian (2,5));



//function scope
const _message="world"  // ini di luar tp ttp bisa dipanggil dlm function

function message(){
    const hello="Hello " + _message; // semua yg km tulis dlm block of code function dia milik function tsb aja
    return hello;
}
console.log(message()); 


//default parametrer
// mksd dr yg bawah kalau tidak ada argumen/ b tidak diisi anggap saja 1)
//default parameter yg blkg dikasi gpp, tapi kalau yg dpn dikasi blkg harus dikasi jg
function pembagian (a,b=1){
    console.log(a);
    console.log(b);
    return a/b;
}

console.log(pembagian(4,2));
console.log(pembagian(4))// 4/1 artinya


//rest parameter (menangkap semua kelebihan argumen cth disini ...c
function greet(a,b,...c){
    console.log(c);
    return a+b;
}

console.log(greet("Hell0 ", "World ","welcome", "My", "Website"))


//Nested Function (fungsi dalam fungsi)

function welcomeMessage(name){
    function hello(){
        return  `Hello ${name} `;
    }

    function content(){
        return "Welcome to Purwadhika"
    }
return  `${hello()} ${content()} `
}
console.log(welcomeMessage("Budi")); 


//closure (function yg direturn)

function greet(name){
    const message="Hello ";

    return function(){
        return message + name;
    }
}

const greetBudi = greet ("Budi");
console.log(greetBudi())



//currying
function sendMessage(message, name){
    return  `${message}, ${name}`
}
console.log(sendMessage("Hello", "Budi"));
console.log(sendMessage("Hello", "Ria"));

function transformSendMessage(message){
    return function (name){
        return  `${message},${name}`
    }
}

const helloMessage= transformSendMessage("Hello");
console.log(helloMessage("Budi"));
console.log(helloMessage("Ria"));
//recursive
function countToTen(number){
    console.log(number);
    number++;
    if (number <=10) countToTen(number);
}
console.log(countToTen(1))
