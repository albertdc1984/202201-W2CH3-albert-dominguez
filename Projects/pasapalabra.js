function pasapalabra() {
  const questionSet = [
    {
      constter: "a",
      answer: "abducir",
      status: 0,
      question:
        "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },
    {
      constter: "a",
      answer: "abrigo",
      status: 0,
      question: "CON LA A. Prenda de vestir para taparse del frío",
    },
    {
      constter: "a",
      answer: "ambar",
      status: 0,
      question:
        "CON LA A. Resina fosil gracias a la cual se puede clonar dinosaurios en Jurassic Park ",
    },

    {
      constter: "b",
      answer: "bingo",
      status: 0,
      question:
        "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
      constter: "b",
      answer: "bomba",
      status: 0,
      question:
        "CON LA B. Artefacto explosivo. Canción del verano del año 2000",
    },
    {
      constter: "b",
      answer: "barba",
      status: 0,
      question:
        "CON LA B. Pelo que nace en la cara, desde la zona situada ante las orejas hasta el arranque del cuello",
    },

    {
      constter: "c",
      answer: "churumbel",
      status: 0,
      question: "CON LA C. Niño, crío, bebé",
    },
    {
      constter: "c",
      answer: "calabaza",
      status: 0,
      question: "CON LA C. Fruto característico de la festividad de Halloween",
    },
    {
      constter: "c",
      answer: "camion",
      status: 0,
      question: "CON LA C. Loquillo lo quería para ser feliz",
    },

    {
      constter: "d",
      answer: "diarrea",
      status: 0,
      question:
        "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },
    {
      constter: "d",
      answer: "doraemon",
      status: 0,
      question: "CON LA D. Gato cósmico",
    },
    {
      constter: "d",
      answer: "demonio",
      status: 0,
      question: "CON LA D. Espíritu que incita al mal",
    },

    {
      constter: "e",
      answer: "ectoplasma",
      status: 0,
      question:
        "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
    },
    {
      constter: "e",
      answer: "elefante",
      status: 0,
      question: "CON LA E. El mayor de los animales terrestres",
    },
    {
      constter: "e",
      answer: "elemental",
      status: 0,
      question: 'CON LA E. Palabra que sirve para invocar al "querido Watson"',
    },

    {
      constter: "f",
      answer: "facil",
      status: 0,
      question:
        "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
    },
    {
      constter: "f",
      answer: "facebook",
      status: 0,
      question: "CON LA F. Red social que ha visto tiempos mejores",
    },
    {
      constter: "f",
      answer: "felino",
      status: 0,
      question: "CON LA F. Perteneciente o relativo al gato",
    },

    {
      constter: "g",
      answer: "galaxia",
      status: 0,
      question:
        "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    },
    {
      constter: "g",
      answer: "goma",
      status: 0,
      question: "CON LA G. Se usa para borrar el lápiz",
    },
    {
      constter: "g",
      answer: "genio",
      status: 0,
      question: "CON LA G. Aparece al frotar la lámpara",
    },

    {
      constter: "h",
      answer: "harakiri",
      status: 0,
      question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
    },
    {
      constter: "h",
      answer: "holograma",
      status: 0,
      question: "CON LA H. Según Matrix, nuestra realidad es uno de ellos",
    },
    {
      constter: "h",
      answer: "hermano",
      status: 0,
      question: "CON LA H. Otro hijo de tus padres",
    },

    {
      constter: "i",
      answer: "iglesia",
      status: 0,
      question: "CON LA I. Templo cristiano",
    },
    {
      constter: "i",
      answer: "inspector",
      status: 0,
      question: "CON LA I. El más absurdo se llama Gadget",
    },
    {
      constter: "i",
      answer: "intraterrestres",
      status: 0,
      question:
        "CON LA I. Seres que supuestamente habitan en el interior de la tierra",
    },

    {
      constter: "j",
      answer: "jabali",
      status: 0,
      question:
        "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {
      constter: "j",
      answer: "jauria",
      status: 0,
      question: "CON LA J. Conjunto de perros",
    },
    {
      constter: "j",
      answer: "jesuitas",
      status: 0,
      question:
        "CON LA J. Compañía de Jesús, fundada en Italia por san Ignacio de Loyola en 1540",
    },

    {
      constter: "k",
      answer: "kamikaze",
      status: 0,
      question:
        "CON LA K. Persona que se juega la vida realizando una acción temeraria",
    },
    {
      constter: "k",
      answer: "kimono",
      status: 0,
      question: "CON LA K. Túnica de origen japonés",
    },
    {
      constter: "k",
      answer: "kebab",
      status: 0,
      question:
        "CON LA K. El amigo Doner siempre está ahí en las noches de alcohol",
    },

    {
      constter: "l",
      answer: "licantropo",
      status: 0,
      question: "CON LA L. Hombre lobo",
    },
    {
      constter: "l",
      answer: "laberinto",
      status: 0,
      question: "CON LA L. Si te metes en él, cuidado con el Minotauro",
    },
    {
      constter: "l",
      answer: "logia",
      status: 0,
      question: "CON LA L. Asociación de masones",
    },

    {
      constter: "m",
      answer: "misantropo",
      status: 0,
      question:
        "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {
      constter: "m",
      answer: "mercurio",
      status: 0,
      question: "CON LA M. El mensajero de los dioses",
    },
    {
      constter: "m",
      answer: "mercadona",
      status: 0,
      question: "CON LA M. Supermercado valenciano que está por todas partes",
    },

    {
      constter: "n",
      answer: "necedad",
      status: 0,
      question: "CON LA N. Demostración de poca inteligencia",
    },
    {
      constter: "n",
      answer: "nostradamus",
      status: 0,
      question: "CON LA N. Alias del supuesto adivino Michele de Notre-Dame",
    },
    {
      constter: "n",
      answer: "navidad",
      status: 0,
      question: "CON LA N. El Sol Invictus de la antigua Roma",
    },

    {
      constter: "ñ",
      answer: "señal",
      status: 0,
      question:
        "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    },
    {
      constter: "ñ",
      answer: "puñalada",
      status: 0,
      question: "CONTIENE LA Ñ. Puede ser trapera o no, pero duele siempre",
    },
    {
      constter: "ñ",
      answer: "cuñado",
      status: 0,
      question: "CONTIENE LA Ñ. Tu opinión no le interesa porque sabe de todo",
    },

    {
      constter: "o",
      answer: "orco",
      status: 0,
      question:
        "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {
      constter: "o",
      answer: "oleo",
      status: 0,
      question:
        "CON LA O. Pintura hecha con colores desleídos en aceite secante",
    },
    {
      constter: "o",
      answer: "orangutan",
      status: 0,
      question: "CON LA O. Simio antropomorfo de pelo rojizo",
    },

    {
      constter: "p",
      answer: "protoss",
      status: 0,
      question:
        "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    },
    {
      constter: "p",
      answer: "partisano",
      status: 0,
      question:
        "CON LA P. Guerrillero de la resistencia en la II Guerra Mundial",
    },
    {
      constter: "p",
      answer: "periodico",
      status: 0,
      question: "CON LA P. Publicación en papel de tirada diaria",
    },

    {
      constter: "q",
      answer: "queso",
      status: 0,
      question:
        "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
    },
    {
      constter: "q",
      answer: "quinto",
      status: 0,
      question: "CON LA Q. Botellín de cerveza de 25cl",
    },
    {
      constter: "q",
      answer: "quadrophenia",
      status: 0,
      question:
        "CON LA Q. Película de 1979 que narra las aventuras de un joven mod llamado Jimmy",
    },

    { constter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
    {
      constter: "r",
      answer: "ramones",
      status: 0,
      question:
        "CON LA R. Banda pionera del punk-rock aunque mucha gente cree que es una marca de camisetas",
    },
    {
      constter: "r",
      answer: "richelieu",
      status: 0,
      question: "CON LA R. El cardenal de los 3 mosqueteros",
    },

    {
      constter: "s",
      answer: "stackoverflow",
      status: 0,
      question:
        "CON LA S. Comunidad salvadora de todo desarrollador informático",
    },
    {
      constter: "s",
      answer: "ska",
      status: 0,
      question:
        "CON LA S. Música de origen Jamaicano de la cual deriva el Reggae",
    },
    {
      constter: "s",
      answer: "skin",
      status: 0,
      question: "CON LA S. Suele llevar botas y la cabeza rapada",
    },

    {
      constter: "t",
      answer: "terminator",
      status: 0,
      question:
        "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    },
    {
      constter: "t",
      answer: "topo",
      status: 0,
      question:
        "CON LA T. Pequeño mamífero que no destaca por su agudeza visual",
    },
    {
      constter: "t",
      answer: "tetris",
      status: 0,
      question:
        "CON LA T. Exitoso videojuego de 1984 creado por Alexei Pajitnov",
    },

    {
      constter: "u",
      answer: "unamuno",
      status: 0,
      question:
        "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
      constter: "u",
      answer: "ulises",
      status: 0,
      question: "CON LA U. El héroe de la Odisea",
    },
    {
      constter: "u",
      answer: "unicornio",
      status: 0,
      question: "CON LA U. Animal mitológico de un solo cuerno",
    },

    {
      constter: "v",
      answer: "vikingos",
      status: 0,
      question:
        "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },
    {
      constter: "v",
      answer: "velociraptor",
      status: 0,
      question: "CON LA V. Veloz dinosaurio que no conocía la pedicura",
    },
    {
      constter: "v",
      answer: "vitriolo",
      status: 0,
      question: "CON LA V. Nombre que los alquimistas daban al ácido sulfúrico",
    },

    {
      constter: "w",
      answer: "sandwich",
      status: 0,
      question:
        "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
    },
    {
      constter: "w",
      answer: "wc",
      status: 0,
      question:
        "CON LA W. Suele estar escrito en la puerta del fondo a la derecha",
    },
    {
      constter: "w",
      answer: "wagner",
      status: 0,
      question: "CON LA W. Compositor de la ópera Parsifal",
    },

    {
      constter: "x",
      answer: "botox",
      status: 0,
      question:
        "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
    },
    {
      constter: "x",
      answer: "xenofobo",
      status: 0,
      question: "CON LA X. Hombre que teme y/o odia a los extranjeros",
    },
    {
      constter: "x",
      answer: "xilofono",
      status: 0,
      question: "CON LA X. Instrumento musical que empieza por x",
    },

    {
      constter: "y",
      answer: "peyote",
      status: 0,
      question:
        "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    },
    {
      constter: "y",
      answer: "yema",
      status: 0,
      question: "CON LA Y. La parte del huevo que se suele comer con pan",
    },
    {
      constter: "y",
      answer: "yodo",
      status: 0,
      question:
        "CON LA Y. Elemento químico usado en ocasiones como desinfectante",
    },

    {
      constter: "z",
      answer: "zen",
      status: 0,
      question:
        "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    },
    {
      constter: "z",
      answer: "zelda",
      status: 0,
      question: "CON LA Z. La princesa de Hyrule",
    },
    {
      constter: "z",
      answer: "zoidberg",
      status: 0,
      question: "CON LA Z. Es el médico de la empresa Planet Express",
    },
  ];

  const questions = [];

  const ranking = [
    {
      name: "Konchi",
      points: 2700,
      correct: 27,
    },

    {
      name: "Albert",
      points: 2300,
      correct: 23,
    },

    {
      name: "Almu",
      points: 1900,
      correct: 19,
    },

    {
      name: "Pepo",
      points: 1300,
      correct: 13,
    },
  ];

  function generadorRosco() {
    const a = questionSet.filter((questionSet) => questionSet.constter === "a");
    questions.push(a[Math.floor(Math.random() * a.length)]);

    const b = questionSet.filter((questionSet) => questionSet.constter === "b");
    questions.push(b[Math.floor(Math.random() * b.length)]);

    const c = questionSet.filter((questionSet) => questionSet.constter === "c");
    questions.push(c[Math.floor(Math.random() * c.length)]);

    const d = questionSet.filter((questionSet) => questionSet.constter === "d");
    questions.push(d[Math.floor(Math.random() * d.length)]);

    const e = questionSet.filter((questionSet) => questionSet.constter === "e");
    questions.push(e[Math.floor(Math.random() * e.length)]);

    const f = questionSet.filter((questionSet) => questionSet.constter === "f");
    questions.push(f[Math.floor(Math.random() * f.length)]);

    const g = questionSet.filter((questionSet) => questionSet.constter === "g");
    questions.push(g[Math.floor(Math.random() * g.length)]);

    const h = questionSet.filter((questionSet) => questionSet.constter === "h");
    questions.push(h[Math.floor(Math.random() * h.length)]);

    const i = questionSet.filter((questionSet) => questionSet.constter === "i");
    questions.push(i[Math.floor(Math.random() * i.length)]);

    const j = questionSet.filter((questionSet) => questionSet.constter === "j");
    questions.push(j[Math.floor(Math.random() * j.length)]);

    const k = questionSet.filter((questionSet) => questionSet.constter === "k");
    questions.push(k[Math.floor(Math.random() * k.length)]);

    const l = questionSet.filter((questionSet) => questionSet.constter === "l");
    questions.push(l[Math.floor(Math.random() * l.length)]);

    const m = questionSet.filter((questionSet) => questionSet.constter === "m");
    questions.push(m[Math.floor(Math.random() * m.length)]);

    const n = questionSet.filter((questionSet) => questionSet.constter === "n");
    questions.push(n[Math.floor(Math.random() * n.length)]);

    const ñ = questionSet.filter((questionSet) => questionSet.constter === "ñ");
    questions.push(ñ[Math.floor(Math.random() * ñ.length)]);

    const o = questionSet.filter((questionSet) => questionSet.constter === "o");
    questions.push(o[Math.floor(Math.random() * o.length)]);

    const p = questionSet.filter((questionSet) => questionSet.constter === "p");
    questions.push(p[Math.floor(Math.random() * p.length)]);

    const q = questionSet.filter((questionSet) => questionSet.constter === "q");
    questions.push(q[Math.floor(Math.random() * q.length)]);

    const r = questionSet.filter((questionSet) => questionSet.constter === "r");
    questions.push(r[Math.floor(Math.random() * r.length)]);

    const s = questionSet.filter((questionSet) => questionSet.constter === "s");
    questions.push(s[Math.floor(Math.random() * s.length)]);

    const t = questionSet.filter((questionSet) => questionSet.constter === "t");
    questions.push(t[Math.floor(Math.random() * t.length)]);

    const u = questionSet.filter((questionSet) => questionSet.constter === "u");
    questions.push(u[Math.floor(Math.random() * u.length)]);

    const v = questionSet.filter((questionSet) => questionSet.constter === "v");
    questions.push(v[Math.floor(Math.random() * v.length)]);

    const w = questionSet.filter((questionSet) => questionSet.constter === "w");
    questions.push(w[Math.floor(Math.random() * w.length)]);

    const x = questionSet.filter((questionSet) => questionSet.constter === "x");
    questions.push(x[Math.floor(Math.random() * x.length)]);

    const y = questionSet.filter((questionSet) => questionSet.constter === "y");
    questions.push(y[Math.floor(Math.random() * y.length)]);

    const z = questionSet.filter((questionSet) => questionSet.constter === "z");
    questions.push(z[Math.floor(Math.random() * z.length)]);
  }

  generadorRosco();

  const user = {
    name: prompt("Introduce tu nombre de usuario:"),
    points: 0,
    correct: 0,
  };

  function preguntas() {
    for (let i = 0; i < questions.length; i++) {
      const pregunta = prompt(questions[i].question);
      const resposta = questions[i].answer;

      if (pregunta === null) {
        alert(`La respuesta correcta es: ${resposta.toUpperCase()}`);
        questions[i].status = 3;
      } else if (pregunta.toUpperCase() === resposta.toUpperCase()) {
        questions[i].status = 1;
        alert("CORRECTO!");
        user.points += 100;
        user.correct += 1;
      } else if (pregunta.toUpperCase() === "END") {
        alert(`Has acertado ${user.correct} palabras`);
        break;
      } else if (pregunta.toUpperCase() === "PASAPALABRA") {
        alert("Pasamos palabra");
        questions[i].status = 2;
      } else if (pregunta.toUpperCase() !== resposta.toUpperCase()) {
        alert(`La respuesta correcta es: ${resposta.toUpperCase()}`);
        questions[i].status = 3;
      }
    }

    for (let i = questions.length; i--; ) {
      if (questions[i].status !== 2) {
        questions.splice(i, 1);
      }
    }

    if (questions.length !== 0) {
      preguntas();
    }
  }

  preguntas();

  console.table(questions);

  const statusZ = questions.filter((questions) => questions.status === 0);

  if (statusZ.length < 1) {
    ranking.push(user);
    const novaLlista = ranking.sort((c1, c2) =>
      c1.points < c2.points ? 1 : c1.points > c2.points ? -1 : 0
    );
    console.table(novaLlista);
  }

  if (confirm("Quieres jugar de nuevo?")) {
    pasapalabra();
  } else {
    alert("Gracias, hasta la próxima!");
  }
}
pasapalabra();
