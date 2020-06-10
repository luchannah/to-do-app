function onReady () {
  const ADD_FORM = document.getElementById('addToDoForm');
  let id = 0;
  let toDos = [] // an array of to-dos // Get the form that holds everything

  function renderTheUI () {
    const TODO_LIST = document.getElementById('toDoList');
    TODO_LIST.textContent = '';

    // for each item in the array toDo, apply this function
    toDos.forEach(function (toDo) {
      const newLi = document.createElement('li')
      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox';

      const deleteBTN = document.createElement('button')
      deleteBTN.textContent = 'Delete'

      newLi.textContent = toDo.title // add the toDo's title text to newLi

      TODO_LIST.appendChild(newLi)
      newLi.appendChild(checkbox)
      newLi.appendChild(deleteBTN)

      deleteBTN.addEventListener('click', () => {
        toDos = toDos.filter(function(item) {
          return item.id !== toDo.id
        })
        renderTheUI()
      })

    })
  }

  function createNewToDo () {
    // Get the text for the title of each to-do
    const NEW_TODO_TEXT = document.getElementById('newToDoText')
    if (!NEW_TODO_TEXT.value) { return }
    toDos.push({ // .push adds an element to the end of the array
      title: NEW_TODO_TEXT.value, // assign the text of the to-do inut to a property
      complete: false, // ????
      id: id
    })

    id++ // for each to-do we make, we are keeping track of the id starting with 0

    NEW_TODO_TEXT.value = '' // clear the text input for the user
    renderTheUI()
  }
  ADD_FORM.addEventListener('submit', event => {
    event.preventDefault()
    createNewToDo()
  })
  renderTheUI()
}

window.onload = function () {
  // alert('The window has loaded!');
  onReady()
}
