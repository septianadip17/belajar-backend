// fungsi menjumlahkan semua angka dalam array
function sumArray(numbers) {
  let total = 0; // mulai total dari 0
  for (let num of numbers) {
    total += num; // nambahin setiap angka ke total
  }
  return total; // balikin hasil penjumlahan
}

// contoh penggunaan
// console.log(sumArray([1, 2, 3])); // seharusnya 6

// tes sederhana
console.assert(sumArray([]) === 0, 'Test 1 gagal: harus 0 untuk array kosong');
console.assert(sumArray([5]) === 5, 'Test 2 gagal: harus 5 untuk [5]');
console.assert(sumArray([1, 2, 3]) === 6, 'Test 3 gagal: harus 6 untuk [1,2,3]');
console.log('Semua tes berhasil!');
