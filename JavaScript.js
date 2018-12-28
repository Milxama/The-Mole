
var img1, img2, img3, img4;
var misses, hits;
var missesPanel,hitsPanel, divPanel;
var upMoleTime, intervalMoleTime;
var num1, num2;
var x, y,n;

function visualDiv() {
    var startDiv = document.getElementById("choices").style.display = "none";
}
function setBgImg() {

    img1 = document.createElement('img');
    if (n == 3) {
        img1.style.width = "150px";
        img1.style.height = "150px";
    }
    if (n == 5) {
        img1.style.width = "100px";
        img1.style.height = "100px";
    }
    if (n == 10) {
        img1.style.width = "60px";
        img1.style.height = "60px";
    }
    img1.src = "holes.jpg";
}
function setMoleImg() {

    img2 = document.createElement('img');
    if (n == 3) {
        img2.style.width = "150px";
        img2.style.height = "150px";
    }
    if (n == 5) {
        img2.style.width = "100px";
        img2.style.height = "100px";
    }
    if (n == 10) {
        img2.style.width = "60px";
        img2.style.height = "60px";
    }
    img2.src = "mole.jpg";
}
function setMissMoleImg() {

    img4 = document.createElement('img');
    if (n == 3) {
        img4.style.width = "150px";
        img4.style.height = "150px";
    }
    if (n == 5) {
        img4.style.width = "100px";
        img4.style.height = "100px";
    }
    if (n == 10) {
        img4.style.width = "60px";
        img4.style.height = "60px";
    }
    img4.src = "missMole.jpg";
}
function setDiedMoleImg() {

    img3 = document.createElement('img');
    if (n == 3) {
        img3.style.width = "150px";
        img3.style.height = "150px";
    }
    if (n == 5) {
        img3.style.width = "100px";
        img3.style.height = "100px";
    }
    if (n == 10) {
        img3.style.width = "60px";
        img3.style.height = "60px";
    }
    img3.src = "diedMole.jpg";
}
function hitMisPanel() {

    missesPanel = document.createElement("text");
    missesPanel.style.textAlign = "center";
    missesPanel.style.backgroundColor = "red";
    missesPanel.style.color = "black";
    missesPanel.style.fontSize = "50px";
    missesPanel.innerHTML = "Misses: "+misses;
    missesPanel.style.width = "90px";
    missesPanel.id = "misses";
    hitsPanel = document.createElement("text");
    hitsPanel.innerHTML = "Hits: " + hits;
    hitsPanel.id = "hits";
    hitsPanel.style.backgroundColor = "green";
    hitsPanel.style.color = "black";
    hitsPanel.style.fontSize = "50px";
    hitsPanel.style.width = "90px";
    document.body.appendChild(hitsPanel);
    document.body.appendChild(missesPanel);
    
}
function gameOver() {
    setTimeout(function () {

        var tbl = document.getElementById("table");
        var h1 = document.createElement("h1");
        h1.innerHTML = "GAME OVER!";
        h1.style.textAlign = "center";
        h1.style.backgroundColor = "gold";
        h1.style.fontSize = "100px";
        document.body.appendChild(h1);

        var startDiv = document.getElementById("choices");
        startDiv.style.display = "initial";
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < n; i++) {
                tbl.firstElementChild.children[i].children[j].removeEventListener("click", hitMole, true);
            }
        }
        tbl.remove();
        tbl.style.display = "none";
        var missPanel = document.getElementById("misses");
        var hitPanel = document.getElementById("hits");
        hits = 0;
        misses = 0;
        missPanel.remove();
        hitPanel.remove();
        setTimeout(function () {
            h1.innerHTML = "";
            h1.style.display = "none";
            h1.remove();
        }, 1000)
    }, 1000)

}
function insertImages() {
    var tbl = document.getElementById("table");
    for (var j = 0; j < n; j++) {
        for (var i = 0; i < n; i++) {
            setBgImg();
            tbl.firstElementChild.children[i].children[j].appendChild(img1);
        }
    }
}
function randomNumber() {
    num1 = Math.floor((Math.random() * (n)));
    num2 = Math.floor((Math.random() * (n)));
}
function randomInTime() {
    var moleInTime = Math.floor((Math.random() * 6) + 10) / 10;
    moleInTime *= 1000;
    return moleInTime;
}
function randomOutTime() {
    var moleOutTime = Math.floor((Math.random() * 76) + 25) / 100;
    moleOutTime *= 1000;
    return moleOutTime;
}
function buildTable() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.id = "table";
    if (n == 3) {
        tbl.style.width = '450px';
        tbl.style.height = '450px';
    }
    if (n == 5) {
        tbl.style.width = '500px';
        tbl.style.height = '500px';
    }
    if (n == 10) {
        tbl.style.width = '600px';
        tbl.style.height = '600px';
    }
    tbl.setAttribute('border', '1');
    tbl.align = "center";
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < n; i++) {
        x = String(i);
        var tr = document.createElement('tr');
        for (var j = 0; j < n; j++) {
            y = String(j);
            var td = document.createElement('td');
            var str = "id";
            td.style.id = str+x+str+y;
            td.value = "no";
            td.style.borderCollapse = "collapse";
            td.style.border = "0px";
            td.style.margin = "0px";
            td.style.padding = "0px";
              td.addEventListener("click", hitMole,true);
            tr.appendChild(td);
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl);
    insertImages();
}
function hitMole() {
    var tbl = document.getElementById("table");
    var thisId = event.currentTarget.style.id;
    String(thisId);
    var str = "id";
    setDiedMoleImg();
    setMissMoleImg();
    if (tbl.firstElementChild.children[num1].children[num2].firstElementChild.src === img2.src && tbl.firstElementChild.children[num1].children[num2].style.id == thisId) {
        hits++;
        hitsPanel.innerHTML = "Hits: " + hits;
        tbl.firstElementChild.children[num1].children[num2].firstElementChild.src = "diedMole.jpg";
    }
    else {
        misses++;
        missesPanel.innerHTML = "Missed: " + misses;
        tbl.firstElementChild.children[num1].children[num2].firstElementChild.src = "missMole.jpg";
        if (misses == 3) {
            gameOver();
        }
    }
}
function startGame() {
    misses = 0;
    hits = 0;
    num1 = 0;
    num2 = 0;
    setBgImg();
    setMoleImg();
    visualDiv();
    hitMisPanel();
    var choice = document.getElementsByClassName("radioChoice");
    for (var i = 0; i < choice.length; i++) {
        if (choice[i].checked)
            n = choice[i].value;
    }
    buildTable();
    moleIn();
}
function adddEventListener() {
    var tbl = document.getElementById("table");
    for (var j = 0; j < n; j++) {
        for (var i = 0; i < n; i++) {
            tbl.firstElementChild.children[i].children[j].addEventListener("click", hitMole, true);
        }
    }
}
function setAllbg(){
    var tbl= document.getElementById("table");
    for (var j = 0; j < n; j++) {
        for (var i = 0; i < n; i++) {
            setBgImg();
            tbl.firstElementChild.children[i].children[j].removeChild(tbl.firstElementChild.children[i].children[j].firstElementChild);
            tbl.firstElementChild.children[i].children[j].appendChild(img1);
        }
    }
}
function moleIn() {
    var tbl = document.getElementById("table");
    tbl.firstElementChild.children[num1].children[num2].firstElementChild.src = "holes.jpg";
    randomNumber();
    intervalMoleTime = setTimeout(function () {   
        var tbl = document.getElementById("table");
        setMoleImg();
        tbl.firstElementChild.children[num1].children[num2].firstElementChild.src = "mole.jpg";
        moleInTime = setTimeout(moleIn, randomInTime());
    },
        randomOutTime() );
}