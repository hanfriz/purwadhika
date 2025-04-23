console.log ("Hello World");
const nama= "Budi";
console.log(nama);
const umur= 25;
console.log(umur);

let alamat="Jln jalanan";
alamat="jln kedua";
console.log(alamat);

var telp="0212111";
console.log(telp);

const _string="1";
console.log(typeof _string);

const _number=1;
console.log(typeof _number);

const _bool= false;
console.log(typeof _bool);
console.log(_bool);

const _date= new Date();
console.log(_date);

const _null=null;
console.log(_null);

let _undefined;
console.log(_undefined);

// template concat
const deskripsi="Hello,"+nama+",umur kamu" +umur;
console.log(deskripsi);

//template lateral

const _deskripsi='Hello ${nama},umur kamu{umur}'
console.log(_deskripsi);


//build in method

console.log(_deskripsi.toUpperCase());
console.log(_deskripsi.toLowerCase());
console.log("AUIEO".replace("A",'*')); //yg mau diubah apa, 'diubah jd apa'

//number build in method

//angka ubah jadi string atau ke interger
const angka=5.15;
console.log(angka.toString());

//currency
console.log(angka.toLocaleString("in-Id", {
    style:"currency",
    currency:"IDR"
}))

//global build in method
console.log(parseInt(angka));
console.log(Number(angka));

//date build in method

let tanggal=new Date("2025-01-31");
console.log(tanggal.getDate());
console.log(tanggal.getMonth()+1); // plus 1 karena angka di js mulai dr 0 jd utk bulan 12 harus di +1
console.log(tanggal.getFullYear());
console.log(tanggal.toLocaleString("in-ID", {timezone:'Asia/Jakarta'})) // agar value sesuai local kita

//operator matematika

console.log(5+5);
console.log(5-5);
console.log(5*5);
console.log(5/5);
console.log(5%5); // sisa hasil pembagian
console.log(5**3); // pangkat

//modify in place

let x=5;
x+=5;
console.log(x);

let pesan="Hello";
pesan+=" World"
console.log(pesan);
x-=2;
console.log(x); 
//bisa digunakan untuk string jg

//increment&decrement menambah atau mengurangi 1

let y=1;
y++; //y=y+1
console.log(y);

y--; //y=y-1
console.log(y);

//postfix digunakan untuk looping
console.log(y);
console.log(y++);
console.log(y);

//prefix bisa digunakan untuk looping

console.log(y);
console.log(--y);

//pseudocode -- step by step untuk memecahkan masalah dalam masalah awam. 

//array