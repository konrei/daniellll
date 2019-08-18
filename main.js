async function getimage() {
    const response = await fetch("./image.jpg");
    const blob = await response.blob();
    document.getElementById("image").src = URL.createObjectURL(blob);
}

getimage().catch(error => {
    console.log("error!");
    console.error(error);
});

const urls = ["./image1.jpg", "./image2.jpg", "./image3.jpg"];

async function getimages(urls) {
    for (let url of urls) {
        const response = await fetch(url);
        const blob = await response.blob();
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        document.querySelector(".multiple-images").appendChild(img);
    }
}

getimages(urls);

/*fetch("./image.jpg").then(response => {
    console.log(response);
    return response.blob();
}).then(blob => {
    console.log(blob);
    document.getElementById("image").src = URL.createObjectURL(blob);
});*/