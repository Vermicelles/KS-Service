const ticket = document.querySelector('.border_ticket')

let i = 0
let today = new Date()
let year = today.getFullYear()
let mouth = today.getMonth()
let day = today.getDate()
let hour = today.getHours()
let min = today.getMinutes()

var optionsYear = {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
	timezone: 'UTC'
};
var optionsTime = {
	hour: 'numeric',
	minute: 'numeric',
	timezone: 'UTC'
};
createTicket()
function createTicket(){
    let k = Math.floor(Math.random() * 150 + 249)
    let p = Math.floor(Math.random() * 100000)
    ++i
    let rD = Math.floor(Math.random() * 1658800000000)
    let rD1 = new Date(rD).toLocaleString("ru", optionsYear)
    let rD2 = new Date(rD + 94608000000).toLocaleString("ru", optionsYear)
    let rD3 = new Date(year, mouth, (day + 3)).toLocaleString("ru", optionsYear)
    
    function randomRemont() {
        let remRandom = Math.floor(Math.random() * 10)
        return remRandom
    }
    randomRemont()
    if (randomRemont() >= 5) {ticket.insertAdjacentHTML(
        'beforeend',
        '<div class="ticket"><img id="tk_img" src="Ticket_02.png" alt="нету"><h2>ТЭП70БС</h2><h1>' + k + '</h1><p>' + today.toLocaleString("ru", optionsYear) + '<br>' + today.toLocaleString("ru", optionsTime) + '</p><table id="table_01"><tr><td>пробег</td><td>' + p + 'км</td></tr><tr><td>приписка</td><td>Джанкой</td></tr><tr><td>дата запуска</td><td>' + rD1 + '</td></tr><tr><td>гарантия</td><td>' + rD2 + '</td></tr></table><table id="table_02"><tr><td>дислокация</td><td>Джанкой</td></tr><tr><td>вид ремонта</td><td>ТО-2</td></tr><tr><td>постановка</td><td>' + today.toLocaleString("ru", optionsYear) + '</td></tr><tr><td>выдача</td><td>' + rD3 + '</td></tr></table><div class="right_status"><h3 id="neplan">неплановый<br>ремонт</h3><h4>в процессе</h4></div><h5 id="number_zn">' + String(i).padStart(4, '0')  + '</h5><button id="set" ><img src="pen.svg" alt="none"></button><div class="line_bold"></div></div>'
        )}
    else {{ticket.insertAdjacentHTML(
        'beforeend',
        '<div class="ticket"><img id="tk_img" src="Ticket_02.png" alt="нету"><h2>ТЭП70БС</h2><h1>' + k + '</h1><p>' + today.toLocaleString("ru", optionsYear) + '<br>' + today.toLocaleString("ru", optionsTime) + '</p><table id="table_01"><tr><td>пробег</td><td>' + p + 'км</td></tr><tr><td>приписка</td><td>Джанкой</td></tr><tr><td>дата запуска</td><td>' + rD1 + '</td></tr><tr><td>гарантия</td><td>' + rD2 + '</td></tr></table><table id="table_02"><tr><td>дислокация</td><td>Джанкой</td></tr><tr><td>вид ремонта</td><td>ТО-2</td></tr><tr><td>постановка</td><td>' + today.toLocaleString("ru", optionsYear) + '</td></tr><tr><td>выдача</td><td>' + rD3 + '</td></tr></table><div class="right_status"><h3>плановый<br>ремонт</h3><h4 id="complete">завершен</h4></div><h5 id="number_zn">' + String(i).padStart(4, '0')  + '</h5><button id="set" ><img src="pen.svg" alt="none"></button><div class="line_bold"></div></div>'
        )}}
    }
    

let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                createTicket()
            }
            observer.unobserve(entry.target)
            observer.observe(document.querySelector('.ticket:last-child'))
        })
    }, {
        threshold: 0.2
    })
    
    observer.observe(document.querySelector('.ticket'))

    