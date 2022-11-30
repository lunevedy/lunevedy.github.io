import {assets_poster_focal_center, assets_video_focal_center, assets_poster_focal_right, assets_video_focal_right, assets_poster_focal_left,assets_video_focal_left } from '../js/arr-content.js';

/*
////////////////////// VISUALS ///////////////////////
*/

/* Illustration type */

document.getElementById("form_illustration_type").addEventListener("change", doVisualType);

function doVisualType() {
    const rbs = document.querySelectorAll("input[name='illustration_type']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (selectedValue==="type_image") {
        iframe.contentWindow.document.querySelector(".container-media").innerHTML = "\n\t\t\t<img src=\"..\/..\/ui\/assets\/img\/1920x800-center.jpg\" alt=\"Placeholder image\">";
    }

    else if (selectedValue==="type_video") {
        iframe.contentWindow.document.querySelector(".container-media").innerHTML = "\n\t\t\t<video loop=\"\" playsinline=\"\" muted=\"\" autoplay=\"\" poster=\"..\/..\/ui\/assets\/img\/1920x800-center.jpg\" class=\"background-video\" disablepictureinpicture=\"\" preload=\"auto\"><source src=\"..\/..\/ui\/assets\/videos\/video-focal-center.mp4\" type=\"video/mp4\"><\/video>";
    }

    // resets
    document.getElementById("dd_focal_point").value = "0";
    document.getElementById("dd_nudge_mobile").value = "0";

    const el_media = iframe.contentWindow.document.querySelector(".container-media");
    el_media.classList.remove("pull-to-left");
    el_media.classList.remove("push-to-right");
}

/* focal point */
document.querySelector("#dd_focal_point").addEventListener("change", doImgFocalPoint);

function doImgFocalPoint() {
    let opt = document.querySelector("#dd_focal_point").value;

    if (iframe.contentWindow.document.querySelector(".container-media video")) {
        if (opt==="0") {
            iframe.contentWindow.document.querySelector(".container-media video").setAttribute('poster',assets_poster_focal_center);
            iframe.contentWindow.document.querySelector(".container-media video").src = assets_video_focal_center;
        }
        else if (opt==="1") {
            iframe.contentWindow.document.querySelector(".container-media video").setAttribute('poster',assets_poster_focal_right);
            iframe.contentWindow.document.querySelector(".container-media video").src = assets_video_focal_right;
        }
        else if (opt==="2") {
            iframe.contentWindow.document.querySelector(".container-media video").setAttribute('poster',assets_poster_focal_left);
            iframe.contentWindow.document.querySelector(".container-media video").src = assets_video_focal_left;
        }
    }

    else {
        if (opt==="0") {
            iframe.contentWindow.document.querySelector(".container-media img").src = "../../ui/assets/img/1920x800-center.jpg";
        }
        else if (opt==="1") {
            iframe.contentWindow.document.querySelector(".container-media img").src = "../../ui/assets/img/1920x800-right.jpg";
        }
        else if (opt==="2") {
            iframe.contentWindow.document.querySelector(".container-media img").src = "../../ui/assets/img/1920x800-left.jpg";
        }
    }
}

document.querySelector("#dd_nudge_mobile").addEventListener("change", doNudgeMobile);

function doNudgeMobile() {
    let opt = document.querySelector("#dd_nudge_mobile").value;
    const el_media = iframe.contentWindow.document.querySelector(".container-media");

    if (opt==="0") {
        el_media.classList.remove("pull-to-left");
        el_media.classList.remove("push-to-right");
    }

    else if (opt==="1") {
        el_media.classList.remove("push-to-right");
        el_media.classList.add("pull-to-left");
    }

    else if (opt==="2") {
        el_media.classList.remove("pull-to-left");
        el_media.classList.add("push-to-right");
    }
}

document.querySelector("#slider-thumb").addEventListener("input", doSliderOpacity);

function doSliderOpacity() {
    let sliderOpacity = document.getElementById("slider-thumb");
    let output = document.getElementById("slider-display");

    output.innerHTML = ((sliderOpacity.value)/10).toFixed(1); // Display the default slider value

    // Update display of slider value on drag
    output.innerHTML = ((this.value)/10).toFixed(1);

    // only update on release
    // ondragend listener

    let sub_string = "background-image";
    let newStyle = "header.hero-bg > .container-overlay { background-image: linear-gradient(rgba(0,0,0,"+output.innerHTML+"),rgba(0,0,0,"+output.innerHTML+")); } \n";

    // console.log(newStyle);

    doUpdateArray(sub_string,newStyle);

    let style = document.createElement('style');
    iframe.contentWindow.document.head.appendChild(style);
    style.appendChild(document.createTextNode(newStyle));
    enableCSS();

    doUpdateArray(sub_string,newStyle);
}
