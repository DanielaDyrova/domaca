/*
Množstevní slevy
Napište program, který spočítá cenu objednávky triček s potiskem.

Firma nabízející trička s potiskem poskytuje množstevní slevy podle počtu objednaný kusů. Při objednávce pod 50 kusů stojí jedno tričko 300 Kč. Pokud si objednáme alespoň 50 kusů, je cena 250 Kč za kus. Při objednávce nad 200 kusů je cena 200 Kč za tričko. Nad 500 kusů zaplatíme 150 Kč za tričko a nad 1000 kusů zaplatíme 120 korun za tričko.

Napište stránku, která od uživatele obdrží počet kusů, které si chce objednat, a program odpoví celkovou ceny objednávky výpisem do stránky.
*/

let price = {
    price50 : 300,
    price200 :250,
    price500 : 200,
    price1000: 150,
    priceMore: 120,
}
let shirt = Number(prompt("How many T-shirts you would like to order?"))

if(shirt >=1000){
    document.body.innerHTML +=`Full price of your order is ${price.priceMore*shirt} Kc`
}
else if(shirt <1000 && shirt >=500){
    document.body.innerHTML +=`Full price of your order is ${price.price1000*shirt} Kc`
}
else if(shirt <500 && shirt >=200){
    document.body.innerHTML +=`Full price of your order is ${price.price500*shirt} Kc `
}
else if(shirt <200 && shirt >= 50){
    document.body.innerHTML +=`Full price of your order is ${price.price200*shirt} Kc `
}
else  {
     document.body.innerHTML +=`Full price of your order is ${price.price50*shirt} Kc`
}