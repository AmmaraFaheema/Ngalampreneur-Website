document.addEventListener("DOMContentLoaded", function () {
    const signUpLink = document.querySelector(".register-text a");
    
    signUpLink.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah perilaku default link
        window.location.href = "Register.html"; // Mengarahkan ke halaman signup
    });
});