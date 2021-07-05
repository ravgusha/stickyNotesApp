const addBtn = document.getElementById('plus');
const cont = document.getElementById('container');

addBtn.addEventListener ('click', addNote);

function addNote() {
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    // newNote.contentEditable = "true";
    newNote.innerHTML = ` 
    <textarea></textarea>
    <span class="cross">X</span>`; // Крестик для удаления
    cont.appendChild(newNote);

    document.querySelectorAll('.cross').forEach(note => {note.addEventListener('click', () => { // Удаление элемента
        note.parentNode.remove();
    })
})
}
