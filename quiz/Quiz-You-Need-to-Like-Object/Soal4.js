/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
  //code here
  let hasil = []
  for(var i =0;i<arr.length;i++) {
    let dataSementara = []
    let sementara =''
    for(var u=0;u<arr[i].length;u++) {
        if(arr[i][u] == '-') {
            dataSementara.push(sementara)
            sementara = ''
        }else {
            sementara += arr[i][u]
        }
        if(arr[i].length-1 == u) {
            dataSementara.push(sementara)
        }
    }
    let rute = ['Yogyakarta','Semarang', 'Surabaya','Denpasar']
    let idxAsal = 0
    let idxTujuan = 0
    for(var j =0;j<rute.length;j++) {
        if(rute[j]== dataSementara[1]) {
           idxAsal = j
        }
        if(rute[j] == dataSementara[2]) {
            idxTujuan = j
        }
    }
    let jarak = idxAsal-idxTujuan
    if (jarak < 0) { jarak *= -1 }
    kendaraanBiaya =0
    if(dataSementara[3] == 'Pesawat') kendaraanBiaya = 275000
    if(dataSementara[3] == 'Kereta') kendaraanBiaya =250000
    if(dataSementara[3] == 'Bis') kendaraanBiaya=225000
    let diskon =0
   if(emoney == 'Gopay') diskon= 5
   if(emoney == 'Dana') diskon= 10
   if(emoney == 'OVO') diskon= 15
    let biaya = (kendaraanBiaya - (kendaraanBiaya * diskon) /100)*jarak
    let obj = {
        name: dataSementara[0],
        departureCity : dataSementara[1],
        destinationCity: dataSementara[2],
        transport : dataSementara[3],
        totalCost : biaya}
    hasil.push(obj)
    obj = {}
  }
  let swapped;
  for(var i =0;i<hasil.length;i++) {
    swapped = false
    for(var j =0;j<hasil.length-i-1;j++) {
        if(hasil[j].totalCost < hasil[j+1].totalCost) {
            [hasil[j],hasil[j+1]] = [hasil[j+1],hasil[j]]
            swapped =true
        }
    }
    if(!swapped) {
        break;
    }
  }
  return hasil
}

console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'));
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log("==================================================================================================");
console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], 'Cash')); // []; benar ini