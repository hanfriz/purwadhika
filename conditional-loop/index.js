//comparison operators

//equal to (cek value tanpa cek tipe data string atau numeric etc)

console.log(1=="1");
//strick equal to cek value dan data
console.log("Hello"==="Hello1");

//not equal to tanpa cek tipe data
console.log(1!=2);

//strick not equal cek value dan data
console.log(1!=="1");

//greater than
console.log(1>2);

//less than
console.log(1<2);

//greater than or equal to
console.log(1>=1);

//less than or equal to
console.log(1<=1);


//if statement

const nilai= 40;

if (nilai>=80){
    console.log("nilai mencukupi");
}

//else statement jika kondisi diatas tidak terpenuhi jd intinya else ga bisa berdiri sendiri dan ga butuh conditional

else{
    console.log("nilai kurang");
}


//else if statement atau && untuk  2 kondisi terpenuhi dan || untuk atau untuk 1 kondisi terpenuhi

const umur=17;
if (umur>=17 || umur <25){
    console.log("bisa buat ktp");
} else if (umur>=25){
    console.log("sudah punya ktp");
}
else {
    console.log("tidak bisa buat ktp");
}

//chaining condition
nilai="D";
if (nilai==="A"){
    console.log("Nilai Bagus");
}
else if (nilai==="B"){
    console.log("Nilai Oke");
}
else if (nilai==="C"){
    console.log("Nilai Cukup");
}
else{
    console.log("Nilai Kurang");
}


//switch case guna break supaya distop processnya

const buah="mangga";

switch(buah){
    case"apel":
    console.log("harga apel 5000");
    //break
    case"pir":
    console.log("harga pir 4000");
    case"jeruk":
    console.log("harga jeruk 10000");
    default:
        console.log("buah tidak ada");
}


//truty and falsy values (string dianggap true oleh boolean bahkan cm spasi)

//truthy
console.log(Boolean("")); 
const _truestring="";

if (""){
    console.log(true);
}
console.log(Boolean([]));



//short circuiting && operator dan || operator 

let value="1"; 
console.log(Boolean(value));
console.log(value && "true"); //jika value true dalam booleann maka tampilkan true