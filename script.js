function szamol(){
    const aoldal = parseFloat(document.querySelector('#aoldal').value);
    const boldal = parseFloat(document.querySelector('#boldal').value);
    const kerulet = (aoldal + boldal) * 2;
    const terulet = aoldal*boldal;

    console.log("A téglalap területe: " + terulet);
    console.log("A téglalap kerülete: " + kerulet);
    // alert("A téglalap területe: " + terulet);
    const eredmeny = document.querySelector('#eredmeny');
    eredmeny.innerHTML = "<p> A Téglalap területe: " + terulet + "</p>";
    eredmeny.innerHTML += "<p> A Téglalap területe: " + kerulet + "</p>";

}