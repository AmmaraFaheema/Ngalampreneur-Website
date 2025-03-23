document.addEventListener("DOMContentLoaded", function () {
    // mengambil elemen form berdasarkan ID
    const form = document.getElementById("registerForm");

    // menambahkan event listener saat form disubmit
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah pengiriman form sebelum validasi

        // mengambil nilai dari input
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();

        // validasi bahwa semua field harus diisi
        if (!fullname || !email || !password || !confirmPassword) {
            alert("All fields must be filled!");
            return;
        }

        // validasi format email menggunakan regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        // validasi panjang password minimal 6 karakter
        if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return;
        }

        // validasi password dan konfirmasi password harus sama
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // jika semua validasi lolos, tampilkan pesan sukses
        alert("Registration successful!");
        form.reset(); // Mengosongkan form setelah registrasi sukses
    });
});
