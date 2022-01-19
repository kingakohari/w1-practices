/* const data = [
    "Gergely Kiss",
    "Krisztián Bui",
    "Buczkó Balázs",
    "András Varga",
    "Borbála Teréz Kovács"
];
 */

const data = [
    {
        name: "Gergely Kiss",
        favouriteFood: "csirke/rizs"
    },
    {
        name: "András Varga",
        favouriteFood: "brassói"
    },
    {
        name: "Buczkó Balázs",
        favouriteFood: "kolbászos rájás pizza"
    },
    {
        name: "Krisztián Bui",
        favouriteFood: "banán"
    },
    {
        name: "Borbála Teréz Kovács",
        favouriteFood: "avokádó"
    },
    {
        name: "Benett Viszokai",
        favouriteFood: "alma"
    }
]
function loadEvent(){
    console.log ("Page has loaded");
    const root = document.querySelector("#root")

    for (const frontendStudent of data) {
     
    root.insertAdjacentHTML("beforeend", `
        <section>
            <h1>${frontendStudent.name}<h1>
            <p>${frontendStudent.favouriteFood}</p>
        </section>
    `)    
    }

}
window.addEventListener("load", loadEvent);