const noteCreateBtn = document.getElementById('noteCreateBtn');
const notesContainer = document.querySelector('.notes-container');

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

function updateStorage() {
  localStorage.setItem('notes', notesContainer.innerHTML);
}


noteCreateBtn.addEventListener('click', () => {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');
  img.src = './src/images/delete-svgrepo-com.png';
  notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener('click', function(e) {
  if(e.target.tagName.toLowerCase() === 'img') {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName.toLowerCase() === 'p') {
      notes = document.querySelector('.input-box');
      notes.forEach(note => {
        note.onkeyup = function() {
          updateStorage();
        }
      })
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    document.execCommand('insertLineBreak');
    e.preventDefault();
  }
})