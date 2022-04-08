document.addEventListener('DOmContentLoaded',function(){
    let nodes = [];
    let pardiv = document.getElementById("notesdiv");
    for(let i = 0; i <localStorage.length; i++){
        let divnote = document.createElement("div");
        divnote.classList.add("notediv");
        let objls = JSON.parse(localStorage.getItem(localStorage.key(i)));
        divnote.id = localStorage.key(i);
        let notetext = document.createElement("div");
        notetext.classList.add("div")
        notetext.innerHTML  = objls.note;
        let notedate = objls.time;
        let notedt = document.createElement("div");
        notedt.classList.add("notetime");
        notedt.innerHTML = notedate;
        let delnote = document.createElement("div");
        delnote.classList.add("delnote");
        delnote.innerHTML = "X";
        delnote.addEventListener("click",function(){
            this.parentNode.removeChild();
            localStorage.removeItem(this.parentNode.id);

        });
        divnote.appendChild(delnote);
        divnote.appendChild(notetext);
        divnote.appendChild(notedt);

        let pardiv =document.getElementById("notesdiv");
        pardiv.appendChild(divnote);
    }
});

function addNote(){
    let note = document.getElementById("notein").value;
    let dicnote = document.createElement("div");
    let dc = new Date ();
    let pdc = Date.parse(dc);
    divnote.classList.add("notediv");
    divnote.id = "mynote" + pdc;
    let notetext = document.createElement("div");
    notetext.classList.add("notetext");
    notetext.innerHTML = note;
    let notedate = document.getElementById("datein").value + "<br>" + document.getElementById("time").value;
    let notedt = document.createElement("div");
    notedt.classList.add("notetime");
    notedt.innerHTML = notedate;
    let delnote = document.createElement("div");
    delnote.classList.add("delnote");
    delnote.innerHTML = "X";
    delnote.addEventListener("click", function(){
        this.parentNode.removeChild();
        localStorage.removeItem(this.parentNode.id);
    });
    divnote.appendChild(delnote);
    divnote.appendChild(notetext);
    divnote.appendChild(notedt);

    let pardiv = document.getElementById("notesdiv");
    pardiv.appendChild(divnote);
    let obj = {'note': note, 'time': notedate};
    localStorage.setItem("mynote" + pdc, JSON.stringify(obj));
}

function clearNOte(){
    document.getElementById("notein").value = "";
    document.getElementById("datein").value = "";
    document.getElementById("timein").value = "";
}