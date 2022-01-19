function bingo()
{
 
    let username = prompt("Introduce tu nombre:")
    let bingoCard = [[],[],[]];
    let numbers = [];
    let xCount =[];
    let linea = false;

    
    function nuevoCarton()
    {
        let randomNumber = [];

        function generadorRandom()
        {
            
            let casilla = parseInt(Math.random() * (51 - 1) + 1);
            if (randomNumber.indexOf(casilla) !== -1)
            {
                generadorRandom();
            }
            else
            {
        
             randomNumber.push(casilla);
            }

        }

        for (var i = 0; i<3;i++)
        {
            for (var j = 0; j<5;j++)
            {
                generadorRandom();
                bingoCard[i][j] = randomNumber[randomNumber.length - 1];
        
            }
        }

        console.table(bingoCard);
    }  
    
    nuevoCarton();
   
    while (!confirm("Hola "+username+", te gusta este cartón? Si quieres uno nuevo haz click en cancelar:"))
    {
        nuevoCarton();
    }

    function lineaCheck()
    {
        for (var i = 0; i<bingoCard.length; i++)
       { 
            if (bingoCard[i][0] === "X" && bingoCard[i][1] === "X" && bingoCard[i][2] === "X" && bingoCard[i][3] === "X" && bingoCard[i][4] === "X")
            {
            linea = true;
            }

       }
       if (linea)
       {
           alert("LÍNEA!!");
       }
    }



    function bombo()
    {
        let bola = parseInt(Math.random() * (51 - 1) + 1);
        if(numbers.indexOf(bola) !== -1)
        {
            bola = null;
        } 
        else
        {
            alert(bola);
            numbers.push(bola);
        }
        if (bola!== null)
        {   
            return bola;
        }      
    }

debugger;
    function turno()
    {
        let check = bombo();
       
       if (typeof check !== 'undefined')
       {
            for (var i = 0; i < bingoCard.length; i++)
            {
                for (var j = 0; j < 5; j++)
                    {    
                        if (check===bingoCard[i][j])
                        {
                            bingoCard[i][j] = "X";
                            xCount.push("x");
                            console.table(bingoCard);
                            cantaBingo();
                            if(linea === false)
                            {
                                lineaCheck();
                            }
                        }
                    }    

            }
       } 
       else
       {
            turno();
       }   
    }


    while (xCount.length<bingoCard.length*5)
    {
        if (confirm("Quieres sacar una bola nueva?"))
        {
            turno();
        }
        
        else
        {
            break;
        }

        
    }
   
   
   function cantaBingo()
    {
                
        if (xCount.length === 15)
        {
            alert("BINGO!!");
            console.log("Enhorabuena! Has cantado Bingo con un total de "+numbers.length+ " bolas")
        }
      
    }
   
   
   
    function punts()
    {
        let llista = 
         [
         {user : "Konchi", punts : 9000},
         {user : "Albert", punts : 8100},
         {user : "Maytal", punts : 7200},
         {user : "Sparrer", punts : 6300},
         {user : "Dori", punts : 5400},
         ];

         
         if (xCount.length === 15)
         {
            let userPoints = {user : username, punts : (50-numbers.length)*900};
            llista.push(userPoints);
         }
         else
         {
            console.log("Partida cancelada");
            userPoints = {user : username, punts : "Partida cancelada"};
            llista.push(userPoints);
         }
         let novaLlista = llista.sort((c1, c2) => (c1.punts < c2.punts) ? 1 : (c1.punts > c2.punts) ? -1 : 0);
         
         console.table(novaLlista);
        }


       
        punts();

}
bingo();

