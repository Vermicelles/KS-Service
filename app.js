const ticket = document.querySelector('.ticket_flex')

let i = 0
let today = new Date()
let year = today.getFullYear()
let mouth = today.getMonth()
let day = today.getDate()
let hour = today.getHours()
let min = today.getMinutes()
console.log(year, mouth, day, hour, min)

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
}

timer = setInterval(() => {  
    let k = Math.floor(Math.random() * 150 + 249)
    let p = Math.floor(Math.random() * 100000)
    ++i
    let rD = Math.floor(Math.random() * 1658800000000)
    let rD1 = new Date(rD).toLocaleString("ru", optionsYear)
    let rD2 = new Date(rD + 94608000000).toLocaleString("ru", optionsYear)
    let rD3 = new Date(year, mouth, (day + 3)).toLocaleString("ru", optionsYear)

    ticket.insertAdjacentHTML(
    'beforeend',
    '<div class="ticket"><img id="tk_img_01" src="Ticket_01.png" alt="нету"><h2 id="lokoType">ТЭП70БС</h2><h1 id="lokoNum">'
    + k + '</h1><div class="time"><p id="numNar">#'
    + i + '</p><p>'
    + today.toLocaleString("ru", optionsYear) + ' / ' + today.toLocaleString("ru", optionsTime)
    + '</p></div><a id="pen" href=""><img src="pen.svg" alt="none"></a><div class="back"><div class="line_tk"></div><table id="table_01"><tr><td>пробег</td><td>' 
    + p + 'км</td></tr><tr><td>приписка</td><td>Джанкой</td></tr><tr><td nowrap>дата запуска</td><td>' + rD1 + '</td></tr><tr><td>гарантия</td><td>' + rD2
    + '</td></tr></table><table id="table_02"><tr><td>дислокация</td><td>Джанкой</td></tr><tr><td nowrap>вид ремонта</td><td>ТО-2</td></tr><tr><td>постановка</td><td>' + today.toLocaleString("ru", optionsYear)
    + '</td></tr><tr><td>выдача</td><td>' + rD3 + '</td></tr></table><div class="status_color"><h3>Текущий ремонт</h3></div></div></div>'
    )
    if(i <= 299) {timer}
    else {clearInterval(timer)}
    }, 200)
