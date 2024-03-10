const base = s => `https://www.bing.com/search?q=${encodeURIComponent(s)}&form=QBLH&sp=-1&lq=0&pq=goo&sc=11-3&qs=n&sk=&cvid=A57BE96569BA4505B4554D8D20EEC993&ghsh=0&ghacc=0&ghpl=`
const button = document.querySelector("#open")
const methods = ["country","last","animal","month"]

let ex = 0

/*const chance = new Chance()*/


button.onclick = function() {

    ex++

    if(ex > 20) {
        clearInterval(int)
    }

    const rand = parseInt(Math.random() * (methods.length - 1))

    window.location.href = base(chance[methods[rand]]())
}