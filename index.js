//  document.getElementById("subscribe").addEventListener('click', function () {
//             document.getElementById('card1').style.display = 'none';
//             document.getElementById('card2').style.display = 'block';
// });



document.getElementById("subscribe").addEventListener('click', function () {
    const mail = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(mail)) {
        alert("Please enter a valid email address.");
    } else {
        document.getElementById("card1").style.display = "none";
        document.getElementById("card2").style.display = "block";
    }
});

document.getElementById('close').addEventListener('click', function (){
    document.getElementById("card1").style.display = "flex";
    document.getElementById("card2").style.display = "none";
});