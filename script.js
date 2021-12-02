let title1 = "Hello World! It's my homework. Lorem ipsum dolor sit amet consectetur adipisicing elit.";
function StrCheck (maxLength, str) {
    if (str.length !== maxLength) {
        //alert(str);
        while (str.charAt(maxLength) !== " ") {
            maxLength--;
        }
        alert(str.substr(0, maxLength) + "...");
    }
    else {
        alert(str);
    }
}

/*function StrCheck () {
    if (title1.length !== 10) {
        alert(title1);
        alert(title1.substr(0,10) + "...");
    }
    else {
        alert("Error");
    }
}*/

//StrCheck();
StrCheck(15, title1);
//hello