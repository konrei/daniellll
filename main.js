async function getimage() {
    const response = await fetch("./image.jpg");
    const blob = await response.blob();
    document.getElementById("image").src = URL.createObjectURL(blob);
}

getimage().catch(error => {
    console.log("error!");
    console.error(error);
});

async function getimages() {
    var images = [];
    var urls = ["./image1.jpg", "./image2.jpg", "./image3.jpg"];

    const response2 = await fetch(urls[0]);
    const blob2 = await response2.blob();
    
    var newImage = document.createElement("img");
    newImage.setAttribute("id", "newImage");
    document.querySelector(".multiple-images").appendChild(newImage);
    
    document.getElementById("newImage").src = URL.createObjectURL(blob2);
}

getimages();
/*fetch("./image.jpg").then(response => {
    console.log(response);
    return response.blob();
}).then(blob => {
    console.log(blob);
    document.getElementById("image").src = URL.createObjectURL(blob);
});*/