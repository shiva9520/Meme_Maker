let img = document.querySelector('img');
let btn = document.querySelector('button');

btn.addEventListener('click',()=>{

    // fetch('https://api.imgflip.com/get_memes')
    //     .then(response => response.json())
    //     .then(data => {
    //         const memes = data.data.memes;
    //         const randomMeme = memes[Math.floor(Math.random() * memes.length)];  
    //         img.setAttribute("src", randomMeme.url);  
    //         console.log(randomMeme.url);  
    //         console.log(memes);  
    //         console.log(data);  
    //     })
    //     .catch(error => {
    //         console.error('Error fetching memes:', error);
    //     });
    fetch(' https://meme-api.com/gimme')
    .then(r=>r.json())
    .then(data=>{
        img.setAttribute('src',data.url)
    })
    .catch(error=>{
        console.error('Api Fetching Error');
    })
})

