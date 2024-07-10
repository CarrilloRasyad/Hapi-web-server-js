// ----------- Response Tool Kit ----------
// Bila kasusnya sederhana seperti di atas, memang lebih baik Anda langsung kembalikan dengan nilai secara eksplisit. 
// Namun, ketahuilah bahwa dengan cara tersebut status response selalu bernilai 200 OK. 
// Ketika Anda butuh mengubah nilai status response, di situlah Anda membutuhkan parameter h.

// server.route({
//     method: 'POST',
//     path: '/user',
//     handler: (request, h) => {
//         return h.response('created').code(201);
//     },
// });

// ---------- Fungsi Handler -------------
// Fungsi handler harus selalu mengembalikan sebuah nilai,
// bila Anda menggunakan h ketika menangani permintaan, maka kembalikanlah dengan nilai h.response(). Anda bisa lihat contoh kode di atas.
// Parameter h tidak hanya berfungsi untuk menetapkan status kode respons. 
// Melalui h, Anda juga bisa menetapkan header response, content type, content length, dan masih banyak lagi. 

// Detailed notation
// const handler = (request, h) => {
//     const response = h.response('success');
//     response.type('text/plain');
//     response.header('X-Custom', 'some-value');
//     return response;
// };
 
// // Chained notation
// const handler = (request, h) => {
//     return h.response('success')
//         .type('text/plain')
//         .header('X-Custom', 'some-value');
// };