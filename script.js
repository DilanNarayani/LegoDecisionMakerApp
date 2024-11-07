
function getTicket(){

    //first, get the user inputs from the text boxes and save them to variables. I've done the first one for you.
    var kidneyImput = document.getElementById("kidney").value;
    var jobImput = document.getElementById("job").value;
    var moneyImput =document.getElementById("money").value;

    console.log(kidneyImput);
    console.log(jobImput);
    console.log(moneyImput);
    var price

    if (moneyImput >= 400){
        legoImage = "https://www.lego.com/cdn/cs/set/assets/blt519dac201a3dd4c1/42172.png?format=webply&fit=bounds&quality=60&width=1200&height=1200&dpr=2"
        price = 400
    }
    else if (jobImput == "yes"){
        legoImage = "https://www.lego.com/cdn/cs/set/assets/blt3d62bb5d68e6dbd7/10295.jpg"
        price = 120
    }
    else if(kidneyImput == 2){
        legoImage = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FLEGO-Ultimate-Millennium-Falcon-Building%2Fdp%2FB075SDMMMV&psig=AOvVaw3EccW0w31lfWZkq3h5Ptmh&ust=1731076591284000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIi5nP-4yokDFQAAAAAdAAAAABAO"
        price = 1000
    }
    else if(kidneyImput == 1){
        legoImage = "https://www.google.com/imgres?q=get%20a%20job&imgurl=http%3A%2F%2Fstatic1.squarespace.com%2Fstatic%2F6122fb6ed3e54c0b8e6f4c1b%2Ft%2F612d734cf7eff63336475200%2F1630368588520%2FLogoSide2.png%3Fformat%3D1500w&imgrefurl=https%3A%2F%2Fwww.getajob.me%2F&docid=TUeSSoH_OSVm1M&tbnid=_JZxN2GHOADVJM&vet=12ahUKEwiPwNHTucqJAxXUE1kFHetvGt0QM3oECGAQAA..i&w=1500&h=474&hcb=2&ved=2ahUKEwiPwNHTucqJAxXUE1kFHetvGt0QM3oECGAQAA"
    }
    else if (kidneyImput == 0){
        document.getElementById("output").innerHTML = "Seek Medical Attention!";
    }
  
    //Lastly, set the results to display on the screen. Here is an example, although this will just set the results to be an empty string (you'll need to edit what it equals).
    document.getElementById("legoImage").src = legoImage;
    document.getElementById("output").innerHTML = price;
    
  }
