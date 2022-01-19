let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];


    function interface()
    {
      
        let costs = [];
        let mitjana = 0;
        let escala = [];
        let last = [];
        
           
        for (let i = 0 ; i < flights.length ; i++)
        {
            if (flights[i].scale === false)
            {
            console.log("El vuelo con origen: " + flights[i].from + 
            "\, y destino: "+ flights[i].to + " tiene un coste de " +flights[i].cost + "€ y no realiza ninguna escala");
            }
            else
            {
                  console.log("El vuelo con origen: " + flights[i].from + 
            "\, y destino: "+ flights[i].to + " tiene un coste de " +flights[i].cost + "€ y realiza alguna escala");
          
            escala.push(flights[i].id)     
            }
           
            costs.push(flights[i].cost);
            last.push(flights[i].to);

        }
        for (let i = 0 ; i<costs.length ; i++)
            {
            mitjana = mitjana + costs[i]/flights.length;
            }
      
         let last5 = last.slice(last.length-5);
        
        console.log("El coste medio de nuestros vuelos es de " + mitjana.toFixed(2) + "€");
        console.log("Tenemos un total de " + escala.length + " vuelos con escala.");
        console.log("Los destinos de los últimos 5 vuelos del día son: " + last5[0]+", " +last5[1]+ ", "
                  +last5[2]+ ", "+last5[3]+ " y "+last5[4]);
        }  
interface();


let userType = prompt("Indica si eres ADMIN o USER:");


function airlinesPro()
{
     
    if (userType === "ADMIN" || userType === "admin")
    {
            for (var i = 0; i<5; i++)
            {
        
                 if (confirm("Quieres introducir un nuevo vuelo?"))
                {
                    let newFlights = 
         
                    {id:flights.length,
                     to:prompt("to"),
                     from:prompt("from"),
                     cost:parseInt(prompt("cost")),
                     scale:confirm("scale")}
         
                        flights.push(newFlights);

                    do
                    {
                        newFlights.cost = parseInt(prompt("Introduce un precio válido"));
                    }
                     while (isNaN(newFlights.cost) || newFlights.cost === "" || newFlights.cost === null);
                       
                    }     
                 else
                 {
                    break;
                 }
                
            }
            
            
        if (confirm("Eliminar algun vuelo?"))
        {
        let elim = parseInt(prompt("Introduce el ID del vuelo a eliminar:"));
        
                
            if (elim === flights[elim].id)
            {
            flights.splice(elim,1);
            alert ("Vuelo eliminado!");
                                 
            }
                  
           
                 
        
        }
        
    
    console.log(flights);
    
    } 
   

    else if (userType === "USER" || userType === "user")
    {
        let precio = parseInt(prompt("Introduce un precio en el buscador"));
        let menor = [];
        let mayor = [];
        let igual = [];
        
        for (var i = 0; i<flights.length;i++)
        {

        
            if (precio<flights[i].cost)
            {
                mayor.push(flights[i]);
            }

            else if (precio>flights[i].cost)
            {
                menor.push(flights[i]);
            }

            else if (precio===flights[i].cost)
            {
                igual.push(flights[i]);
            }

        }    
       
        console.log("Los vuelos por debajo de "+precio+"€ son:");
        for (var i=0;i<menor.length;i++)
        {
            console.log("Vuelo "+menor[i].id+" de "+menor[i].from+ " a "+menor[i].to+" por "+menor[i].cost);
        }

        console.log("Los vuelos de "+precio+"€ son:")
        for (var i=0;i<igual.length;i++)
        {
            console.log("Vuelo "+igual[i].id+" de "+igual[i].from+ " a "+igual[i].to+" por "+igual[i].cost);
        }

        console.log("Los vuelos por encima de "+precio+"€ son:")
        for (var i=0;i<mayor.length;i++)
        {
            console.log("Vuelo "+mayor[i].id+" de "+mayor[i].from+ " a "+mayor[i].to+" por "+mayor[i].cost);
        }

        let compra = parseInt(prompt("Introduce el ID del vuelo que desees comprar:"));
        if (compra === flights[compra].id)
        {
            alert("Gracias por su compra, vuelva pronto.");
            console.log(flights[compra]);
        }
        else
        {
            alert("ID de vuelo no válido");
        }

    }
    else
    {
        alert("Debes de identificarte como ADMIN o como USER");
        userType = prompt("Indica si eres ADMIN o USER:");
        airlinesPro();
    }
    
}
airlinesPro();
