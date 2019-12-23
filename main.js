(function () {

    let
        numbers = [1, 2, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];
    let a = Math.floor(Math.random() * numbers.length);
    document.querySelector("#numbers").innerHTML = `${numbers[a]}`;
        let symbols = ["♠", "♣", "♥", "♦"];
        let b = Math.floor(Math.random() * symbols.length);
        document.querySelector("#symboldown").innerHTML = `${symbols[b]}`;
        document.querySelector("#symbolup").innerHTML = `${symbols[b]}`;
        if (b == 2 || b==3){
            document.querySelector("#symboldown").style.color = "red";
            document.querySelector("#symbolup").style.color = "red";

        }
       

})()