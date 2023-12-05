const createMeme = document.getElementById("create-meme");
const memeFeild = document.querySelector('.memes');

createMeme.addEventListener('click', create);

function create(event) { 
    event.preventDefault();

    // Create New Div //
    const newDiv = document.createElement("div");
    newDiv.classList.add('meme');
    memeFeild.appendChild(newDiv);

    // Add URL to New Div //
    const url = document.getElementById("url").value;
    newDiv.style.backgroundImage = `url('${url}')`;

    // Add Top Text to New Div //
    const topTextDiv = document.createElement("div");
    newDiv.appendChild(topTextDiv);
    topTextDiv.classList.add('top-text-div');
    const topText = document.createElement("h3");
    topTextDiv.appendChild(topText);
    const topTextValue = document.getElementById("top-text").value;
    topText.innerText = topTextValue;
    topText.classList.add('meme-text');
    
    // Add Bottom Text to New Div //
    const bottomTextDiv = document.createElement("div");
    newDiv.appendChild(bottomTextDiv);
    bottomTextDiv.classList.add('bottom-text-div');
    const bottomText = document.createElement("h3");
    bottomTextDiv.appendChild(bottomText);
    const bottomTextValue = document.getElementById("bottom-text").value;
    bottomText.innerText = bottomTextValue;
    bottomText.classList.add('meme-text');

    // Delete Div //
    const deleteDiv = document.createElement("div");
    deleteDiv.classList.add('delete');
    deleteDiv.innerText = "X";
    newDiv.appendChild(deleteDiv);
    deleteDiv.addEventListener('click', function () {
    newDiv.remove();
    });

    console.log(url)
    console.log(topText)
    console.log(bottomText)
}