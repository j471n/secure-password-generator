const input = document.querySelector('input');
const button = document.getElementById('gen');
const copy = document.getElementById('copy');

button.addEventListener('click', () => {
    input.value = RandomPassword(16);
    console.log("Pass :" +
        input.value);
});


copy.addEventListener('click', () => {
    input.select();
    document.execCommand('copy');
    alert("Copied!");
    input.value = "";
})



function RandomPassword(length = 16) {

    const charset = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890-!@#$%^&*()-_[]<>/?+";

    let password = "";

    for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * (charset.length + 1));
        password += charset.charAt(char)
    }
    return password;


}