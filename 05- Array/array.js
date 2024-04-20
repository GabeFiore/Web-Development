let frutas = ["banana", "jabuticaba", "morango", "limão"];
console.log(frutas.includes("morango"));
console.log(frutas.includes("abacaxi"));


if (frutas.includes("abacaxi")){
    console.log ("A string 'Abacaxi' existe no array frutas.");
} else if (frutas.includes("pera")){
    console.log ("A string 'Pera' existe no array frutas.");
} else {
    console.log ("Nem a Pera nem o Abacaxi existem no Array 'Frutas'")
}