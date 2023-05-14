var butona = document.querySelectorAll("button");
var input1 = document.querySelector(".input1");

for(var i=0; i<butona.length; i++){

    butona[i].addEventListener("click", llogarit);
}

function llogarit(){

    var vlera = this.value;

    if(vlera != "="){

        input1.value += vlera;
    }

    else{

        input1.value=eval(input1.value);
    }

    if(vlera == "c"){

        input1.value= "";
    }

    if(vlera == "pi"){

        input1.value = Math.PI;
    }

    if(vlera == "sin"){

        input1.value = Math.sin(parseInt(input1.value) * Math.PI / 180);
    }

    if(vlera == "cos"){

        input1.value = Math.cos(parseInt(input1.value) * Math.PI / 180);
    }

    if(vlera == "rrenja"){

        input1.value = Math.sqrt(parseInt(input1.value));
    }


}
