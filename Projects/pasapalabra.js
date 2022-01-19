
function pasapalabra()
{

    const questionSet = 
    [

        { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
        { letter: "a", answer: "abrigo", status: 0, question: "CON LA A. Prenda de vestir para taparse del frío"},
        { letter: "a", answer: "ambar", status: 0, question: "CON LA A. Resina fosil gracias a la cual se puede clonar dinosaurios en Jurassic Park "},

        { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
        { letter: "b", answer: "bomba", status: 0, question: "CON LA B. Artefacto explosivo. Canción del verano del año 2000"},
        { letter: "b", answer: "barba", status: 0, question: "CON LA B. Pelo que nace en la cara, desde la zona situada ante las orejas hasta el arranque del cuello"},

        { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
        { letter: "c", answer: "calabaza", status: 0, question: "CON LA C. Fruto característico de la festividad de Halloween"},
        { letter: "c", answer: "camion",status: 0, question: "CON LA C. Loquillo lo quería para ser feliz"},

        { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
        { letter: "d", answer: "doraemon", status: 0, question: "CON LA D. Gato cósmico"},
        { letter: "d", answer: "demonio", status:0, question: "CON LA D. Espíritu que incita al mal"},

        { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
        { letter: "e", answer: "elefante", status: 0,question: "CON LA E. El mayor de los animales terrestres"},
        { letter: "e", answer: "elemental", status: 0,question: "CON LA E. Palabra que sirve para invocar al \"querido Watson\""},

        { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
        { letter: "f", answer: "facebook", status: 0, question: "CON LA F. Red social que ha visto tiempos mejores"},
        { letter: "f", answer: "felino", status: 0, question: "CON LA F. Perteneciente o relativo al gato"},

        { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
        { letter: "g", answer: "goma", status: 0, question: "CON LA G. Se usa para borrar el lápiz"},
        { letter: "g", answer: "genio", status: 0, question: "CON LA G. Aparece al frotar la lámpara"},

        { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
        { letter: "h", answer: "holograma", status: 0, question: "CON LA H. Según Matrix, nuestra realidad es uno de ellos"},
        { letter: "h", answer: "hermano", status: 0, question: "CON LA H. Otro hijo de tus padres"},

        { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
        { letter: "i", answer: "inspector", status: 0, question: "CON LA I. El más absurdo se llama Gadget"},
        { letter: "i", answer: "intraterrestres", status: 0, question: "CON LA I. Seres que supuestamente habitan en el interior de la tierra"},

        { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
        { letter: "j", answer: "jauria", status: 0, question: "CON LA J. Conjunto de perros"},
        { letter: "j", answer: "jesuitas", status: 0, question: "CON LA J. Compañía de Jesús, fundada en Italia por san Ignacio de Loyola en 1540"},

        { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
        { letter: "k", answer: "kimono", status: 0, question: "CON LA K. Túnica de origen japonés"},
        { letter: "k", answer: "kebab", status: 0, question: "CON LA K. El amigo Doner siempre está ahí en las noches de alcohol"},

        { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
        { letter: "l", answer: "laberinto", status: 0, question: "CON LA L. Si te metes en él, cuidado con el Minotauro"},
        { letter: "l", answer: "logia", status: 0, question: "CON LA L. Asociación de masones"},

        { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
        { letter: "m", answer: "mercurio", status: 0, question: "CON LA M. El mensajero de los dioses"},
        { letter: "m", answer: "mercadona", status: 0, question: "CON LA M. Supermercado valenciano que está por todas partes"},

        { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
        { letter: "n", answer: "nostradamus", status: 0, question: "CON LA N. Alias del supuesto adivino Michele de Notre-Dame"},
        { letter: "n", answer: "navidad", status: 0, question: "CON LA N. El Sol Invictus de la antigua Roma"},

        { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
        { letter: "ñ", answer: "puñalada", status: 0, question: "CONTIENE LA Ñ. Puede ser trapera o no, pero duele siempre"},
        { letter: "ñ", answer: "cuñado", status: 0, question: "CONTIENE LA Ñ. Tu opinión no le interesa porque sabe de todo"},

        { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
        { letter: "o", answer: "oleo", status: 0, question: "CON LA O. Pintura hecha con colores desleídos en aceite secante"},
        { letter: "o", answer: "orangutan", status: 0, question: "CON LA O. Simio antropomorfo de pelo rojizo"},

        { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
        { letter: "p", answer: "partisano", status: 0, question: "CON LA P. Guerrillero de la resistencia en la II Guerra Mundial"},
        { letter: "p", answer: "periodico", status: 0, question: "CON LA P. Publicación en papel de tirada diaria"},

        { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
        { letter: "q", answer: "quinto", status: 0, question: "CON LA Q. Botellín de cerveza de 25cl"},
        { letter: "q", answer: "quadrophenia", status: 0, question: "CON LA Q. Película de 1979 que narra las aventuras de un joven mod llamado Jimmy"},

        { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
        { letter: "r", answer: "ramones", status: 0, question: "CON LA R. Banda pionera del punk-rock aunque mucha gente cree que es una marca de camisetas"},
        { letter: "r", answer: "richelieu", status: 0, question: "CON LA R. El cardenal de los 3 mosqueteros"},

        { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
        { letter: "s", answer: "ska", status: 0, question: "CON LA S. Música de origen Jamaicano de la cual deriva el Reggae"},
        { letter: "s", answer: "skin", status: 0, question: "CON LA S. Suele llevar botas y la cabeza rapada"},

        { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
        { letter: "t", answer: "topo", status: 0, question: "CON LA T. Pequeño mamífero que no destaca por su agudeza visual"},
        { letter: "t", answer: "tetris", status: 0, question: "CON LA T. Exitoso videojuego de 1984 creado por Alexei Pajitnov"},

        { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
        { letter: "u", answer: "ulises", status: 0, question: "CON LA U. El héroe de la Odisea"},
        { letter: "u", answer: "unicornio", status: 0, question: "CON LA U. Animal mitológico de un solo cuerno"},

        { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
        { letter: "v", answer: "velociraptor", status: 0, question: "CON LA V. Veloz dinosaurio que no conocía la pedicura"},
        { letter: "v", answer: "vitriolo", status: 0, question: "CON LA V. Nombre que los alquimistas daban al ácido sulfúrico"},

        { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
        { letter: "w", answer: "wc", status: 0, question: "CON LA W. Suele estar escrito en la puerta del fondo a la derecha"},
        { letter: "w", answer: "wagner", status: 0, question:"CON LA W. Compositor de la ópera Parsifal" },

        { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
        { letter: "x", answer: "xenofobo", status: 0, question: "CON LA X. Hombre que teme y/o odia a los extranjeros"},
        { letter: "x", answer: "xilofono", status: 0, question: "CON LA X. Instrumento musical que empieza por x"},

        { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
        { letter: "y", answer: "yema", status: 0, question: "CON LA Y. La parte del huevo que se suele comer con pan"},
        { letter: "y", answer: "yodo", status: 0, question: "CON LA Y. Elemento químico usado en ocasiones como desinfectante"},

        { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
        { letter: "z", answer: "zelda", status: 0, question: "CON LA Z. La princesa de Hyrule"},
        { letter: "z", answer: "zoidberg", status: 0, question: "CON LA Z. Es el médico de la empresa Planet Express"} 
    ];

    let questions = [];

    let ranking =
    [
        {
            name : "Konchi",
            points : 2700,
            correct : 27
        },
        
        {
            name : "Albert",
            points : 2300,
            correct : 23
        },

        {
            name : "Almu",
            points : 1900,
            correct : 19
        },

        {
            name : "Pepo",
            points : 1300,
            correct : 13
        },
        
    ]

   function generadorRosco()
   {
    let a = questionSet.filter(questionSet => questionSet.letter === "a");
    questions.push(a[Math.floor(Math.random()*a.length)]);
    
    let b = questionSet.filter(questionSet => questionSet.letter === "b");
    questions.push(b[Math.floor(Math.random()*b.length)]);
       
    let c = questionSet.filter(questionSet => questionSet.letter === "c");
    questions.push(c[Math.floor(Math.random()*c.length)]);

    let d = questionSet.filter(questionSet => questionSet.letter === "d");
    questions.push(d[Math.floor(Math.random()*d.length)]);
    
    let e = questionSet.filter(questionSet => questionSet.letter === "e");
    questions.push(e[Math.floor(Math.random()*e.length)]);
    
    let f = questionSet.filter(questionSet => questionSet.letter === "f");
    questions.push(f[Math.floor(Math.random()*f.length)]);
    
    let g = questionSet.filter(questionSet => questionSet.letter === "g");
    questions.push(g[Math.floor(Math.random()*g.length)]);
    
    let h = questionSet.filter(questionSet => questionSet.letter === "h");
    questions.push(h[Math.floor(Math.random()*h.length)]);
    
    let i = questionSet.filter(questionSet => questionSet.letter === "i");
    questions.push(i[Math.floor(Math.random()*i.length)]);
    
    let j = questionSet.filter(questionSet => questionSet.letter === "j");
    questions.push(j[Math.floor(Math.random()*j.length)]);
    
    let k = questionSet.filter(questionSet => questionSet.letter === "k");
    questions.push(k[Math.floor(Math.random()*k.length)]);
    
    let l = questionSet.filter(questionSet => questionSet.letter === "l");
    questions.push(l[Math.floor(Math.random()*l.length)]);
    
    let m = questionSet.filter(questionSet => questionSet.letter === "m");
    questions.push(m[Math.floor(Math.random()*m.length)]);
    
    let n = questionSet.filter(questionSet => questionSet.letter === "n");
    questions.push(n[Math.floor(Math.random()*n.length)]);
    
    let ñ = questionSet.filter(questionSet => questionSet.letter === "ñ");
    questions.push(ñ[Math.floor(Math.random()*ñ.length)]);
    
    let o = questionSet.filter(questionSet => questionSet.letter === "o");
    questions.push(o[Math.floor(Math.random()*o.length)]);
    
    let p = questionSet.filter(questionSet => questionSet.letter === "p");
    questions.push(p[Math.floor(Math.random()*p.length)]);
    
    let q = questionSet.filter(questionSet => questionSet.letter === "q");
    questions.push(q[Math.floor(Math.random()*q.length)]);
    
    let r = questionSet.filter(questionSet => questionSet.letter === "r");
    questions.push(r[Math.floor(Math.random()*r.length)]);
    
    let s = questionSet.filter(questionSet => questionSet.letter === "s");
    questions.push(s[Math.floor(Math.random()*s.length)]);
    
    let t = questionSet.filter(questionSet => questionSet.letter === "t");
    questions.push(t[Math.floor(Math.random()*t.length)]);
    
    let u = questionSet.filter(questionSet => questionSet.letter === "u");
    questions.push(u[Math.floor(Math.random()*u.length)]);
    
    let v = questionSet.filter(questionSet => questionSet.letter === "v");
    questions.push(v[Math.floor(Math.random()*v.length)]);
    
    let w = questionSet.filter(questionSet => questionSet.letter === "w");
    questions.push(w[Math.floor(Math.random()*w.length)]);
    
    let x = questionSet.filter(questionSet => questionSet.letter === "x");
    questions.push(x[Math.floor(Math.random()*x.length)]);
    
    let y = questionSet.filter(questionSet => questionSet.letter === "y");
    questions.push(y[Math.floor(Math.random()*y.length)]);
    
    let z = questionSet.filter(questionSet => questionSet.letter === "z");
    questions.push(z[Math.floor(Math.random()*z.length)]);
    
   }

    generadorRosco();
    
    const user = 
    {
        name : prompt("Introduce tu nombre de usuario:"),
        points : 0,
        correct : 0
    }

    function preguntas()
    {    
        for (i = 0; i<questions.length; i++)
        {
            let pregunta = prompt(questions[i].question);
            let resposta = questions[i].answer;
         
            if (pregunta === null)
            {
                alert("La respuesta correcta es: "+resposta.toUpperCase());
                questions[i].status = 3;
                
                
            }
            
            
            else if (pregunta.toUpperCase() === resposta.toUpperCase())
            {
                questions[i].status = 1;
                alert("CORRECTO!");
                user.points += 100;
                user.correct += 1;
                
            }

            else if (pregunta.toUpperCase() === "END")
            {
                alert("Has acertado "+user.correct+" palabras")
                break;
            }

            else if (pregunta.toUpperCase() === "PASAPALABRA")
            {
                alert ("Pasamos palabra");
                questions[i].status = 2;
            }

           
            else if (pregunta.toUpperCase() !== resposta.toUpperCase())
            {
                alert("La respuesta correcta es: "+resposta.toUpperCase());
                questions[i].status = 3;
                
            }
            
                      
        }

        
        for (var i = questions.length; i--;)
        {
            if (questions[i].status !== 2)
            {
            questions.splice(i,1);
            }
        }

        if (questions.length !== 0)
        {
            preguntas();
        }
    }
    
    
    preguntas();

    console.table(questions);

    let statusZ = questions.filter(questions=>questions.status=== 0);
    
    if (statusZ.length < 1)
    {
        ranking.push(user);
        let novaLlista = ranking.sort((c1, c2) => (c1.points < c2.points) ? 1 : (c1.points > c2.points) ? -1 : 0);
        console.table(novaLlista);
    }

    if(confirm("Quieres jugar de nuevo?"))
    {
        pasapalabra();
    }
    else
    {
        alert("Gracias, hasta la próxima!");
    }
}
pasapalabra();