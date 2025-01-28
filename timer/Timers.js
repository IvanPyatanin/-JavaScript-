const p = document.getElementById('main')

const count = setInterval(() => {

    if (p.textContent > 0) {
        p.textContent = Number(p.textContent) - 1;
    } else {
        alert("Вы победили в конкурсе!")
        clearInterval(count)
    }

}, 1000)