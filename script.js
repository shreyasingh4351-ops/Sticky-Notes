const addBtn = document.getElementById("addBtn")
const container = document.getElementById("notesContainer")

let notes = JSON.parse(localStorage.getItem("notes")) || []

function saveNotes(){
localStorage.setItem("notes", JSON.stringify(notes))
}

function renderNotes(){

container.innerHTML=""

notes.forEach((note,index)=>{

const div = document.createElement("div")
div.classList.add("note")

const textarea = document.createElement("textarea")
textarea.value = note

textarea.addEventListener("input",()=>{
notes[index] = textarea.value
saveNotes()
})

const del = document.createElement("span")
del.textContent="X"
del.classList.add("delete")

del.addEventListener("click",()=>{
notes.splice(index,1)
saveNotes()
renderNotes()
})

div.appendChild(del)
div.appendChild(textarea)

container.appendChild(div)

})

}

addBtn.addEventListener("click",()=>{
notes.push("")
saveNotes()
renderNotes()
})

renderNotes()
