const weekday= ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
const dateEl = document.querySelector('.date');
const timeEl = document.querySelector('.time');

function handleTime() {
		const today = new Date();
    let hrs = today.getHours();
    let mins = today.getMinutes();
		let sec = today.getSeconds();
    if(hrs<=9)
       hrs = '0' + hrs;
    if(mins<10)
      mins = '0' + mins;
    const postTime= hrs + ':' + mins + ':' + sec;
    timeEl.innerText = postTime;
  }

function renderDate() {
	const today = new Date();
	const dayOfWeek = weekday[today.getDay()];
	const date = today.getDate();
	const month = today.getMonth() + 1;
	const year = today.getFullYear();
	
	dateEl.innerText = `${dayOfWeek} ${date}/ ${month}/ ${year}`;
}

renderDate();
handleTime();

setInterval(handleTime, 1000);
