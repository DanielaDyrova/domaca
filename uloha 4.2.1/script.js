/*

FIT e-mail
Vytvořte e-mailovou adresu pro studenty FIT ČVUT.

Pokud se přihlásíte jako student například na Fakultu Informačních Technologí ČVUT, bude vám informačním systémem automaticky přidělen e-mail, který se vytvoří z vašeho jména a příjmení. Z vašeho příjmení se vezme pět prvních znaků a z vašeho křestního jména první tři. Výsledek se převede na malá písmena a připojí se doména fit.cvut.cz. Pro jméno Jana Procházková tak vznikne adresa prochjan@fit.cvut.cz.

Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní jméno a pak příjmení, obojí bez diakritiky.
Pomocí metody trim zajistěte, že ve jméně ani příjmení nebudou na začátku ani na konci žádné bílé znaky.
Pomocí metody slice vyřízněte ze jména i příjmení příslušné části.
Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do stránky.
*/

const user = {
    name: prompt("Your first name?"),


    lastName: prompt("Your last name"),
}

const newName = user.name.trim()  
const newLast = user.lastName.trim()   

const newName1 =  newName.toLowerCase()  
const newLast1 =  newLast.toLowerCase()  


const newName2 = newName1.slice(0,3)
const newLast2 = newLast1.slice(0,5) 


document.body.innerHTML += `Yours FIT e-mail adress is : ${newName2}${newLast2}@fit.cvut.cz`


