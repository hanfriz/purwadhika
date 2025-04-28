
//1.function to get the lowest, highest, and average value in the array (with and without sort function)
arr=[12,5,23,18,4,45,32]
function rankNumber(array){
    let lowest=array[0]; //diisi nilai awal array
    let highest=array[0]; //diisi nilai awal array
    let sum=0; 

    //loop semua isi array, kalau lebih kecil dari lowest, ganti dan kalau lebih besar dari highest ganti)
    for (let i=0; i<arr.length; i++){

        if (arr[i]<lowest){
            lowest=arr[i];
        }
        if (arr [i]>highest){
            highest=arr[i];
        }

        sum +=arr[i]; // tambah semua ke sum
    }
    let average= sum/arr.length; //jumlah angka dibagi jumlah data

    console.log( `lowest: `,lowest);
    console.log(  `highest:`, highest);
    console.log( `average: `, average);

}

rankNumber([12,5,23,18,4,45,32]);


//2.write a function that makes an array of words and returns a string by concatenating the words in the array separated by commas and the last word by an 'and'
fruit=["apple", "banana", "cherry", "date"];

function joinFruit(fruit){
    if (fruit.length===0) return  ` `; // kalau kosong hasilnya kosong
    if (fruit.length===1) return fruit[0]; // kalau ada kata, kembalikan kata itu

    let lastFruit=fruit.pop();// ambil kata terakhir
    return fruit.join( `, ` )+  ` and `+ lastFruit; // gabung sisanya dengan koma lalu ditambah and
}

console.log(joinFruit(["apple", "banana", "cherry", "date"]));


//3. Write a function from a given array of numbers and return the second smallest number

numbers=[5,3,1,7,2,6];

function secondSmallestNumber(numbers){
    numbers.sort((a,b)=> a-b); //sort dari kecil ke besar
    return numbers[1]; //ambil indeks ke-1 (angka kedua dalam array)
}
console.log(secondSmallestNumber([5,3,1,7,2,6]));



//4.Write a function to calculate each element in the same position from two arrays of interger. Assume both arrays are on the same length
array1=[1,2,3];
array2=[3,2,1];

function sumArray(array1,array2){
    let result=[];
    //loop sepanjang array
    for (let i=0; i< array1.length; i++){
        result.push(array1[i]+array2[i]); // tambahkan elemen yang posisinya sama dan masukkan ke result

    }
    return result;
}
console.log(sumArray([1,2,3],[3,2,1]));


//5. write a function that adds an element to the end of an array. However the element should only be added if it is not already in the array

myArray=[1,2,3,4];
newElement=7;

function addNewElement(myArray,newElement){
    if (!myArray.includes(newElement)){
        myArray.push(newElement); // cek apakah newElement sudah ada dalam myArray (includes), kalau belum pakai push
    }
    return myArray;
}
console.log(addNewElement([1,2,3,4],4));
console.log(addNewElement([1,2,3,4],7));


//exercise part 2

//1. Write a function from a given array of mixed data types and return the sum of all the number

mixedArray=["3",1,"string", null, false,undefined,2];

function sumNumber(mixedArray){
    let sum=0;
    //loop semua elemen array dan cek tipe data itu number, kalau iya tambah ke sum
    for (let i=0; i<mixedArray.length; i++){
        if(typeof mixedArray[i]===`number`){
            sum+=mixedArray[i];
        }
    }
    return sum;
}
console.log(sumNumber(["3",1,"string", null, false,undefined,2]));


//2. write a function to insert multiple given interger(not an array) to an array and have a maximum size input.
//the array can only have a maximum size from a given input


maxSize=5;
givenInteger=[5,10,24,3,6,7,8];

function insertWithLimit(givenInteger,maxSize){
    let result=[]; // buat array kosong untuk result


    //loop semua angka
    for (i=0; i<givenInteger.length;i++){
        if (result.length<maxSize){
            result.push(givenInteger[i]); //kalau result belum penuh, bisa tambah angka dalam array dan kalau sudah stop
        }
    }
    return result;
}
console.log(insertWithLimit([5,10,24,3,6,7,8],5));


//3. Write a function that will combine 2 given array into one array

arr1=[1,2,3];
arr2=[4,5,6];

function combineArray(arr1,arr2){
    return arr1.concat(arr2); //menggunakan fungsi concat untuk menggabungkan array tanpa mengubah isinya
}
console.log(combineArray([1,2,3],[4,5,6]));


//4.Write a function to find duplicate value in an array

sampleArray=[1,2,2,2,3,3,4,5,5];
function findDuplicate(sampleArray){
    let duplicate=[];
// loop array, pakai indexOf untuk cari posisi pertama angka, kalau posisi pertama beda dengan posisi sekarang artinya duplicat, tambahkan ke duplicates kalau belum masuk
    for (let i=0; i<sampleArray.length; i++){
        if (sampleArray.indexOf(sampleArray[i])!== i && !duplicate.includes(sampleArray[i])){
            duplicate.push(sampleArray[i]);
        }
    }
    return duplicate;
}

console.log(findDuplicate([1,2,2,3,3,5,5,5]));


//5.Write a function to find the difference in 2 given array

myArr1=[1,2,3,4,5];
myArr2=[3,4,5,6,7];

function findDifference(myArr1,myArr2){
    let result=[];

    for (let i=0; i<myArr1.length; i++){
        if (!myArr2.includes(myArr1[i])){
            result.push(myArr1[i]);
        }
    }

    for (let i=0; i<myArr2.length; i++){
        if (!myArr1.includes(myArr2[i])){
            result.push(myArr2[i])
        }
    }
    return result;
}

console.log (findDifference([1,2,3,4,5],[3,4,5,6,7]));


//exercise part 3


//1. Write a function that will return primitive data types only

basicArray=[1,[],undefined,{},"string", {},[]];

function getPrimitiveTypes(basicArray){
    let result=[];

for (let i=0; i<basicArray.length; i++){
    let type=typeof basicArray[i];
    if (type=== `string ` || type=== `number `|| type ===  `boolean `|| type === ` undefined` || basicArray[i]===null){
        result.push(basicArray[i]);
    }
}
return result;
}
console.log(getPrimitiveTypes([1,[],undefined,{},"string", {},[]]));



//2

Arr=[10,20,40,10,50,30,10,60,10];


function sumDuplicateElements(arr) {
    let counts = {};
    let sum = 0;
  
    // Hitung berapa kali setiap angka muncul
    for (let i = 0; i < arr.length; i++) {
      counts[arr[i]] = (counts[arr[i]] || 0) + 1;
    }
  
    // Loop lagi array untuk jumlahkan semua elemen yang kembar
    for (let i = 0; i < arr.length; i++) {
      if (counts[arr[i]] > 1) {
        sum += arr[i];
      }
    }
  
    return sum;
  }
  
  console.log(sumDuplicateElements([10, 20, 40, 10, 50, 30, 10, 60, 10]));

  //3



  function rockPaperScissors(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    
    // Random pilih 
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log('Computer chose:', computerChoice);
  
    if (playerChoice === computerChoice) {
      return 'Draw';
    }
  
    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'Win';
    } else {
      return 'Lose';
    }
  }
  
  // Contoh pemakaian:
  console.log(rockPaperScissors('rock'));