const base = s => `https://www.bing.com/search?q=${encodeURIComponent(s)}&form=QBLH&sp=-1&lq=0&pq=goo&sc=11-3&qs=n&sk=&cvid=A57BE96569BA4505B4554D8D20EEC993&ghsh=0&ghacc=0&ghpl=`
const button = document.querySelector("#open")

/*(() => {

    const elems = Array.from(document.querySelectorAll("clf-ca-card"))

})()*/

button.onclick = async function () {


    const rand = parseInt(Math.random() * (arr.length - 1))

    const opened = window.open(base(arr[rand]))

    setTimeout(() => {
        opened.close()
    }, 4000)

}