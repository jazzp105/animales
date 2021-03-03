const AnimalesC= () =>{
    let op= prompt("Seleccione una opcion de animales: \n 1) Vertebrados \n 2) Invertebrados \n 3) Herbivoros \n 4) Carniboros");
if (op !== "1" && op !== "2" && op !== "3" && op !== "4") {
    alert("Debe ser una opcion entre 1 y 4");
} else {
   
    let result=0;
    if (op === "1") {
        let ver= prompt("Seleccione una opcion de animales: \n 1) caballo \n 2) perro \n 3) gato \n 4) toro");
        if (ver !== "1" && ver !== "2" && ver !== "3" && ver !== "4") {
            alert("Debe ser una opcion entre 1 y 4");
        } else {
            if (ver==="1") {
                alert("El caballo (Equus ferus caballus)1​2​ es un mamífero perisodáctilo domesticado de la familia de los équidos.");
            }
            if (ver==="2") {
                alert("El perro (Canis familiaris o Canis lupus familiaris dependiendo de si se lo considera una especie por derecho propio o una subespecie del lobo),1​2​3​ llamado perro doméstico o can,4​ y en algunos lugares coloquialmente llamado chucho,5​ tuso,6​ choco,7​ entre otros; es un mamífero carnívoro de la familia de los cánidos, que constituye una especie del género Canis.");
            }
            if (ver==="3") {
                alert("El gato doméstico1​2​ (Felis silvestris catus), llamado popularmente gato, y de forma coloquial minino,3​ michino,4​ michi,5​ micho,6​ mizo,7​ miz,8​ morroño9​ o morrongo,10​ entre otros nombres, es un mamífero carnívoro de la familia Felidae. Es una subespecie domesticada por la convivencia con el ser humano.");
            }
            if (ver==="4") {
                alert("La vaca, en el caso de la hembra; o toro, en el caso del macho (Bos primigenius taurus), es un mamífero artiodáctilo de la familia de los bóvidos.");
            }
        }
    } 
      if (op === "2") {
       let ver= prompt("Seleccione una opcion de animales: \n 1) caracol \n 2) babosa \n 3) gusano \n 4) serpiente");
        if (ver !== "1" && ver !== "2" && ver !== "3" && ver !== "4") {
            alert("Debe ser una opcion entre 1 y 4");
        } else {
            if (ver==="1") {
                alert("El término caracol es el nombre común de los moluscos gasterópodos provistos de una concha espiral. Hay caracoles marinos (a veces denominados caracolas), dulceacuícolas y terrestres.");
            }
            if (ver==="2") {
                alert("Las babosas terrestres son moluscos gasterópodos del orden Pulmonata sin concha o con pequeñas conchas internas, en contraste con los caracoles, que tienen una concha prominente.");
            }
            if (ver==="3") {
                alert("La palabra gusano se utiliza coloquialmente para designar los más diversos animales que coinciden en ser pequeños, blandos, de forma alargada y con apéndices locomotores poco destacados o ausentes.");
            }
            if (ver==="4") {
                alert("Las serpientes (Serpentes) u ofidios (Ophidia) son un suborden de saurópsidos (reptiles) diápsidos pertenecientes al orden Squamata, del superorden Lepidosauria, caracterizado por la ausencia de patas (la pitón mantiene diminutas extremidades vestigiales, herencia de su pasado evolutivo)1​ y el cuerpo muy alargado.");
            }
        }
    } 
      if (op === "3") {
       let ver= prompt("Seleccione una opcion de animales: \n 1) conejo \n 2) vaca \n 3) burro \n 4) jirafa");
        if (ver !== "1" && ver !== "2" && ver !== "3" && ver !== "4") {
            alert("Debe ser una opcion entre 1 y 4");
        } else {
            if (ver==="1") {
                alert("El conejo común o conejo europeo (Oryctolagus cuniculus) es una especie de mamífero lagomorfo de la familia Leporidae, y el único miembro actual del género Oryctolagus. Mide hasta 50 cm y su masa puede ser hasta 2.5 kilogramos.");
            }
            if (ver==="2") {
                alert("La vaca Holstein o vaca frisona es una raza vacuna procedente de la región frisosajona (Baja Sajonia y Schleswig-Holstein en Alemania, Frisia y Holanda del Norte en los Países Bajos), que destaca por su alta producción de leche, carne y su buena adaptabilidad.");
            }
            if (ver==="3") {
                alert("El burro, asno, jumento, borrico o pollino (Equus africanus asinus)1​2​ es un animal doméstico de la familia de los équidos.");
            }
            if (ver==="4") {
                alert("La jirafa (Giraffa camelopardalis) es una especie de mamífero artiodáctilo de la familia Giraffidae propio de África. Es la más alta de todas las especies de animales terrestres existentes. Puede alcanzar una altura de 5,8 m y un peso que varía entre 750 y 1600 kg.2​");
            }
        }
    } 
      if (op === "4") {
          let ver= prompt("Seleccione una opcion de animales: \n 1) leon \n 2) tigre \n 3) tiburon \n 4) pantera");
        if (ver !== "1" && ver !== "2" && ver !== "3" && ver !== "4") {
            alert("Debe ser una opcion entre 1 y 4");
        } else {
            if (ver==="1") {
                alert("El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. ");
            }
            if (ver==="2") {
                alert("El tigre (Panthera tigris) es una de las especies3​ de la subfamilia de los panterinos (familia Felidae) pertenecientes al género Panthera.");
            }
            if (ver==="3") {
                alert("Los TIBURONES o selacimorfos (Selachimorpha, del griego σελαχος, selachos, tiburón, y μορφή, morphé, forma) son un superorden de condrictios (peces cartilaginosos) conocidos comúnmente con el nombre de tiburones o escualos. Algunos grandes escualos, como el tiburón blanco y el toro, son conocidos a veces con el nombre de jaquetones.");
            }
            if (ver==="4") {
                alert("Tanto en la especie del Jaguar (Panthera onca) como en la del Leopardo (Panthera pardus) se puede dar un fenómeno denominado melanismo, que consiste en un exceso de pigmentación oscura en las células de la piel, de ahí el pelaje oscuro de algunos jaguares y leopardos a los que denominamos popularmente como panteras negras, es más, si observamos al animal de cerca, se pueden apreciar las manchas oscuras características de ambas especies.");
            }
        }
      }
    }
     
};


