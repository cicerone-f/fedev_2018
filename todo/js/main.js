// var data = {
//   todo: [],
//   completed: []
// }

// renderTodoList()

// function renderTodoList () {
//   if (!data.todo.length && !data.completed.length) return

//   for (var i = 0; i < data.todo.length; i++) {
//     var value = data.todo[i]
//     addItemToDOM(value)
//   }

//   for (var j = 0; j < data.completed.length; j++) {
//     var value = data.completed[j]
//     addItemToDOM(value, true)
//   }
// }

// // Adds a new item to the todo list
// function addItemToDOM (text, completed) {
//   var list = completed
//     ? document.getElementById('completed')
//     : document.getElementById('todo')

//   var item = document.createElement('li')
//   item.innerText = text

//   var buttons = document.createElement('div')
//   buttons.classList.add('buttons')

//   var remove = document.createElement('button')
//   remove.classList.add('remove')
//   remove.innerHTML = 'R'

//   var complete = document.createElement('button')
//   complete.classList.add('complete')
//   complete.innerHTML = 'C'

//   buttons.appendChild(remove)
//   buttons.appendChild(complete)
//   item.appendChild(buttons)

//   list.insertBefore(item, list.childNodes[0])
// }
