close_button = document.querySelector(".popup__close");
close_button.onclick = function(){
    document.getElementById("popup").style.visibility = "hidden";
};

var images = document.querySelectorAll(".gallery__content-img");

images.forEach(function (image) {
    image.onclick = function () {
      popup(image);
    }
});

function popup(image) {

    var popup_img = document.getElementById("popup_img");
    popup_img.src = '';
    popup_img.src = image.querySelector(".gallery_img").src.split(".")[0]+"_big.jpg";
    document.getElementById("popup").style.visibility = "visible";
}
