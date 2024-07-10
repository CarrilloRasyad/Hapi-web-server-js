// ------------ Payload Request -----------
// fungsi nya adalah untuk membaca data string JSON sama seperti di javascript menggunakan JSON.parse()
// dengan menggunakan framework Hapi cukup gunakan request.payload yang fungsi nya sama dengan JSON.parse()

// server.route({
//     method: 'POST',
//     path: '/login',
//     handler: (request, h) => {
//         const { username, password } = request.payload;
//         return `Welcome ${username}!`;
//     },
// });

// ---------- Client mengirim data login dengan struktur seperti data string JSON -----------
//{ "username": "harrypotter", "password": "encryptedpassword" }