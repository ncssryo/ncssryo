function checkLogin() {
    const input = document.getElementById('password-input').value;
    const secretKey = "uscanfly1905"; 

    if (input === secretKey) {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    } else {
        alert("ACCESS DENIED: Incorrect Master Key!");
    }
}

function logout() {
    location.reload(); 
}

// "Enter" tugmasini bosganda ham kiradigan qilish
document.getElementById("password-input")?.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkLogin();
    }
});
