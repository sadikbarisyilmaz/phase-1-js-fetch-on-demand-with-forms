
document.addEventListener('DOMContentLoaded', ()=>{
    
  
      
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault()

        let input = e.target.firstElementChild.nextElementSibling.value
        console.log(e.target.firstElementChild.nextElementSibling.value);

        fetch(`http://localhost:3000/movies/${input}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            title.innerHTML = data["title"]
            summary.innerHTML = data["summary"]
        })
    })
    
    
});