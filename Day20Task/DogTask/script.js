
url="https://dog.ceo/api/breeds/image/random";

async function getNewImage(){
    await fetch(url)
    .then((response)=>response.json())
    .then((data)=>setImage(data.message))
    .catch((error)=>alert("Reload the page..."+error));
}

function setImage(source){
    document.getElementsByClassName("randomImage")[0].src=source;
}

getNewImage();
