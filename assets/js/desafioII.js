//Traer Valor del front
const userData = document.querySelector("#user-data");
//Traer usuarios de API
const apiUser = (() => {
    const url = "https://randomuser.me/api/?results=50"
    const getUser = async () => {
        const response = await fetch(url)
        const datos = await response.json()
        return datos.results
    }
    return {
        publico: async () => {
            const tarjetas = await getUser()
            pintarTarjetas(tarjetas)
        }
    }
})();

//Pintar trajetas con datos obtenidos
const pintarTarjetas = (tarjetas) => {
    userData.innerHTML = '' 
    tarjetas.slice(0, 4).forEach(item => {
        // Construir el HTML de una tarjeta
        userData.innerHTML += `
            <div class="card">
                <img src="${item.picture.large}" alt="imagen">
                <div class="card-info">
                    <p>Name: ${item.name.first} ${item.name.last}</p>
                    <p>Email: ${item.email}</p>
                    <p>Telefono: ${item.phone}</p>
                </div>
        `;
    });


};
apiUser.publico();