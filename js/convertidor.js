const $convertir = document.querySelector("#convertir");
const $resultado = document.querySelector("#resultado");
const $form = document.querySelector("#form")

function convertir(num) {

    const numStr = num.toString().split("").reverse();
    let newUnidad, newDecena, newCentena, newMiles;
    const arrFinal = [];
    const armado = {
       0: [],
       1: ["uno"],
       2: ["uno", "uno"],
       3: ["uno", "uno", "uno"],
       4: ["uno", "cinco"],
       5: ["cinco"],
       6: ["cinco", "uno"],
       7: ["cinco", "uno", "uno"],
       8: ["cinco", "uno", "uno", "uno"],
       9: ["uno", "diez"]
     };
     
    let unidad = armado[numStr[0]];
    let decena = armado[numStr[1]];
    let centena = armado[numStr[2]];
    let miles = armado[numStr[3]];
    
    if(unidad){
      newUnidad = unidad.map(x =>  
        x
        .replaceAll('uno', 'I')
        .replaceAll('cinco', 'V')
        .replaceAll('diez', 'X')
        );
      arrFinal.unshift(newUnidad);
    }
    
    if(decena){
      newDecena = decena.map(x =>  
        x
        .replaceAll('uno', 'X')
        .replaceAll('cinco', 'L')
        .replaceAll('diez', 'C')
        );
      arrFinal.unshift(newDecena);
    }else{
      newDecena = "";
    }
    
    if(centena){
      newCentena = centena.map(x =>  
        x
        .replaceAll('uno', 'C')
        .replaceAll('cinco', 'D')
        .replaceAll('diez', 'M')
        );
      arrFinal.unshift(newCentena);
    }else{
      newCentena = "";
    }
    
    if(miles){
      newMiles = miles.map(x =>  
        x.replaceAll('uno', 'M')
        );
      arrFinal.unshift(newMiles);
    }else{
      newMiles = "";
    }
    
    
     const resultadoFinal = arrFinal.flat().join("");
     $resultado.innerText = resultadoFinal
}


$convertir.onclick = function(event){
        checkInput();
        event.preventDefault();
    
    }

function checkInput(){
    const $nroConvertir = $form.numero.value;
    if($nroConvertir > 0 && $nroConvertir < 4000){
        convertir($nroConvertir);
        $form.numero.className = "form-control is-valid";
    }else{
        $form.numero.className = "form-control is-invalid"
    }
}