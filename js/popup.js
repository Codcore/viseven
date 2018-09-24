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
    document.getElementById("popup_img").src = image.querySelector(".gallery_img").src;
    document.getElementById("popup").style.visibility = "visible";
}
