
//listAdd,delete,checklist
function todolist() {
let text = document.getElementById('text').value
if(text == ''){ return }
let list = document.getElementById('list')
let li = document.createElement('li')
let hapus = document.createElement('span')

hapus.textContent = '\u00D7'
li.onclick = function () {
  li.classList.toggle('checked')
}
hapus.onclick = function () {
  li.remove()
}

li.append( `${text}`,hapus)
list.appendChild(li)
document.getElementById('text').value = ''
}

//fitur search keren anjay
let search = document.querySelector('.search')
search.addEventListener('input', function() {
let gg= document.querySelectorAll('li')
  
  gg.forEach(item => {
    if(!item.textContent.toLowerCase().includes(search.value.toLowerCase())){
      item.style.display = 'none'
    }else {
      item.style.display = ''
    }
  })
})




