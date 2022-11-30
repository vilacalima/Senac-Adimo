function geraNumerosAleatorios(tamanho) {
    var numerosAleatorios = "";
    var caracteres = "0123456789";
    for (var i = 0; i < tamanho; i++) {
        numerosAleatorios += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return numerosAleatorios;
}

const horario = (limite) => {
    return Math.floor(Math.random() * limite + 1);
};

const bookings = [
    {
        id: 1,
        name: "Isabela Midori",
        email: "isamidori@gmail.com",
        telefone: "(16) 9 9934-4865",
        horario: "19/11/2022 - 13:00",
        imovel: "Rua Lídia Paes-Campo limpo"
    },
    {
        id: 2,
        name: "Nathalia Aldinar",
        email: "nataaldinar@gmail.com",
        telefone: "(14) 9 0532-5103",
        horario: "28/11/2022 - 12:30",
        imovel: "Rua Andrade - Jardim Paulista"
    },
    {
        id: 3,
        name: "Robson Vilaça",
        email: "robsonvilaca@gmail.com",
        telefone: "(18) 9 6760-0434",
        horario: "19/11/2022 - 16:00",
        imovel: "Rua do Tatuapé- Tatuape"
    },
    {
        id: 4,
        name: "Nicolas Marques",
        email: "nicolasmarques@gmail.com",
        telefone: "(12) 9 0545-5283",
        horario: "27/12/2022 - 12:30",
        imovel: "Rua Tagipuru - Barra Funda"
    },
    
]

function deletar(id) {
    for (let i = 0; i < bookings.length; i++) {
        if(bookings[i].id === id){
            bookings.splice(i, 1);
        }        
    }
    const remainBookings = bookings;
    const bookingsTable = document.getElementById("bookings_table");
    const realBooking = renderBooking()
    console.log(realBooking);
    bookingsTable.innerHTML = "";
    for (let i = 0; i < remainBookings.length; i++) {
        bookingsTable.innerHTML = bookingsTable.innerHTML + `
        <tr>
            <td>
                <div class="media">
                <div class="media-body">
                    <p>${remainBookings[i].name}</p>
                </div>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p>${remainBookings[i].email}</p>
                <p>${remainBookings[i].telefone}</p>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p>${remainBookings[i].imovel}</p>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p>${remainBookings[i].horario}</p>
                </div>
            </td>
            <td>
                <a href="#" onclick="deletar(${remainBookings[i].id})" class="genric-btn danger circle">Excluir agendamento</a>
                <a href="#" onclick="agendarFake(${remainBookings[i].id})" class="genric-btn success circle">Preencher Formulário do cliente</a>
            </td>
        </tr>`
    }
    bookingsTable.innerHTML = realBooking + bookingsTable.innerHTML
}

function render(){
    const bookingsTable = document.getElementById("bookings_table");
    for (let i = 0; i < bookings.length; i++) {
        bookingsTable.innerHTML = bookingsTable.innerHTML + `
        <tr>
            <td>
                <div class="media">
                <div class="media-body">
                    <p>${bookings[i].name}</p>
                </div>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p>${bookings[i].email}</p>
                <p>${bookings[i].telefone}</p>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p>${bookings[i].imovel}</p>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p>${bookings[i].horario}</p>
                </div>
            </td>
            <td>
                <a href="#" onclick="deletar(${bookings[i].id})" class="genric-btn danger circle">Excluir agendamento</a>
                <a href="#" onclick="agendarFake(${bookings[i].id})" class="genric-btn success circle">Preencher Formulário do cliente</a>
            </td>
        </tr>`
    }
    bookingsTable.innerHTML = renderBooking() + bookingsTable.innerHTML;
}
render()

function agendarFake(id){
    alert("Houve um erro ao acessar o agendamento, tente novamente mais tarde");
}

function renderBooking(){
    const booking = JSON.parse(sessionStorage.getItem("booking"));
    const clientContact = sessionStorage.getItem("clientContact").split("%");
    const user = sessionStorage.getItem("user").split(",");
    if(booking && clientContact){
        return `
        <tr>
            <td>
                <div class="media">
                <div class="media-body">
                    <p>${user[0]}</p>
                </div>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p>${user[1]}</p>
                <p>${clientContact[0]}</p>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p class="booking-name">${booking.name}</p>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p>${clientContact[1]}</p>
                </div>
            </td>
            <td>
                <a href="#" class="genric-btn danger circle">Excluir agendamento</a>
                <a href="#" class="genric-btn success circle">Preencher Formulário do cliente</a>
            </td>
        </tr>`
    }else{
        return "";
    }
}