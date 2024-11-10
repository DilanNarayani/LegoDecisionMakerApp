function getTicket(){

    //first, get the user inputs from the text boxes and save them to variables. I've done the first one for you.
    var kidneyImput = document.getElementById("kidney").value;
    var jobImput = document.getElementById("job").value;
    var moneyImput =document.getElementById("money").value;

    console.log(kidneyImput);
    console.log(jobImput);
    console.log(moneyImput);
    var price

// Kidneys
    if (kidneyImput > 2){
        legoImage = "https://www.shutterstock.com/image-vector/red-rubber-lies-lie-liar-260nw-2332672717.jpg"
        price = "Liar. Try again!";
    }
    else if (kidneyImput == 0){
        legoImage = "https://www.achn.net/globalassets/2022-new-site-photos/istock-987891546.jpg"
        price = "Seek Medical Attention. Go to the Hospital!";
    }



    // Money 
    else if (moneyImput >= 400 && moneyImput <= 999){
        legoImage = "https://www.lego.com/cdn/cs/set/assets/blt519dac201a3dd4c1/42172.png?format=webply&fit=bounds&quality=60&width=1200&height=1200&dpr=2"
        price = "$" + 400
    }

    else if (moneyImput <= 400 && moneyImput >= 120){
        legoImage = "https://www.lego.com/cdn/cs/set/assets/blt3d62bb5d68e6dbd7/10295.jpg"
        price = "$" + 120
    }

    else if (moneyImput <= 120 && moneyImput >= 25){
        legoImage = "https://plenty.gifts/us-en/wp-content/uploads/sites/3/2024/06/lego-botanicals-chrysanthemum-10368-closeup.webp"
        price = "$" + 25
    }



    else if (moneyImput >= 1000){
        legoImage = "https://www.werd.com/wp-content/uploads/2017/09/Ultimate-Collector-Series-Millennium-Falcon.jpg"
        price = "$" + 1000
    }

    




    // Job
    else if (moneyImput <= 10 && jobImput == "no" && (kidneyImput == 1)){
        legoImage = "https://cdn.aarp.net/content/dam/aarp/work/job-search/2020/08/1140-new-job-keyboard.jpg"
        price = "Good luck searching!"
    }
    else if (moneyImput <= 10 && jobImput == "no" && (kidneyImput == 2)){
        legoImage = "https://gizmodo.com/app/uploads/2017/10/okxigt7ow5d9f1uqbdng.jpg"
        price = "Sell that kidney! Buy a Lego Set!"
    }






















    // else if (jobImput == "yes"){
    //     legoImage = "https://www.lego.com/cdn/cs/set/assets/blt3d62bb5d68e6dbd7/10295.jpg"
    //     price = 120
    // }


    // else if(kidneyImput == 1){
    //     legoImage = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FLEGO-Ultimate-Millennium-Falcon-Building%2Fdp%2FB075SDMMMV&psig=AOvVaw3EccW0w31lfWZkq3h5Ptmh&ust=1731076591284000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIi5nP-4yokDFQAAAAAdAAAAABAO"
    //     price = 1000
    // }
    // else if(kidneyImput == 3){
    //     legoImage = "https://cdn.merlinsbricks.com/images/LEGO-60204/LEGO-60204-0.webp?v=3"
    // }
    // else if (kidneyImput == 0){
    //     document.getElementById("output").innerHTML = "Seek Medical Attention!";
    // }
    // else if (kidneyImput == 1){
    //     document.getElementById("output").innerHTML = "Seek Medical Attention!";
    // }
    

  
    //Lastly, set the results to display on the screen. Here is an example, although this will just set the results to be an empty string (you'll need to edit what it equals).
    document.getElementById("legoImage").src = legoImage;
    document.getElementById("output").innerHTML = price;
    
  }
