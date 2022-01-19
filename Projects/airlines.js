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
        let usuari = prompt("¿Cómo te llamas?");
        let costs = [];
        let mitjana = 0;
        let escala = [];
        let last = [];
        
        alert("Bienvenido a Skylab Airlines "+usuari+"!");
   
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