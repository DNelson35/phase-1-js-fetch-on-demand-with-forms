
function movieById(id){
    fetch(`http://localhost:3000/movies/${id}`)
    .then((resp) => resp.json())
    .then((resp) => useID(resp))
}

function useID(resp){
   const title = document.querySelector("section#movieDetails h4")
   const summery = document.querySelector('section#movieDetails p')
   title.textContent = resp.title
   summery.textContent = resp.summary
}

const init = () => {
    document.querySelector('form').addEventListener('submit', e =>{
        e.preventDefault()
         movieById(e.target[0].value)
    })
}

document.addEventListener('DOMContentLoaded', init);