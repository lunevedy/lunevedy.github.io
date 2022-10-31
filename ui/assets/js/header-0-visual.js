import {content_photo_landscape_section, content_photo_square_section, content_photo_circle_section, content_trans_landscape_section, content_drawing_landscape_section, content_vid_file_section, content_vid_yt_section, content_vid_rumble_section } from '../js/arr-content.js';

/*
////////////////////// VISUALS: FOUR TYPES ///////////////////////
*/

document.querySelector("#cb_visual").addEventListener("change", doVis);

function doVis() {
    if (!document.getElementById("cb_visual").checked) {
        removeVisual();
        document.getElementById("rb_vis_type_1").disabled=true;
        document.getElementById("rb_vis_type_2").disabled=true;
        document.getElementById("rb_vis_type_3").disabled=true;
        document.getElementById("rb_vis_type_4").disabled=true;

        document.getElementById("form_vis_types").style.display = "none";
        document.getElementById("properties-photos").style.display = "none";
        document.getElementById("properties-transparent").style.display = "none";
        document.getElementById("properties-drawings").style.display = "none";
        document.getElementById("properties-videos").style.display = "none";
    }
    else {
        document.getElementById("properties-photos").style.display = "block";
        doPhotos(1);
    }
}

document.querySelector("#form_vis_types").addEventListener("click", doVisType);

function doVisType() {
    const rbs = document.querySelectorAll("#form_vis_types input[name='vis_type']");
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    removeVisual();
    if (selectedValue==="photos") {
        doPhotos();
    }
    else if (selectedValue==="transparent") {
        doTransparent();
    }
    else if (selectedValue==="drawings") {
        doDrawings();
    }
    else if (selectedValue==="videos") {
        doVideos();
    }
}

/*
//////////////// VISUALS: PHOTOS ///////////////
*/

function doPhotos() {
    removeVisual();

    // Visual types
    document.getElementById("form_vis_types").style.display = "block";
    document.getElementById("rb_vis_type_1").disabled=false;
    document.getElementById("rb_vis_type_1").checked=true;
    document.getElementById("rb_vis_type_2").disabled=false;
    document.getElementById("rb_vis_type_3").disabled=false;
    document.getElementById("rb_vis_type_4").disabled=false;

    // Property containers
    document.getElementById("properties-photos").style.display = "block";
    document.getElementById("properties-transparent").style.display = "none";
    document.getElementById("properties-drawings").style.display = "none";
    document.getElementById("properties-videos").style.display = "none";

    // Property resets
    resetTransProps();
    resetDrawingsProps();
    resetVideoProps();
    // Set properties
    document.getElementById("dd_photos_shape").value = "1";
    doVisSubTypes(1);
}

document.querySelector("#dd_photos_shape").addEventListener("change", doPhotosType);

function doPhotosType() {

    let opt = document.querySelector("#dd_photos_shape").value;
    removeVisual();
    if (opt==="1") {
        doVisSubTypes(1);
    }
    else if (opt==="2") {
        doVisSubTypes(2);
    }
    else if (opt==="3") {
        doVisSubTypes(3);
    }
    else if (opt==="4") {
        doVisSubTypes(4);
    }
}

/* photos: corners */

document.querySelector("#cb_photos_corners_soft").addEventListener("change", doPhotosCorners);

function doPhotosCorners() {

    const el_fig = iframe.contentWindow.document.querySelector("header figure");

    if (!document.getElementById("cb_photos_corners_soft").checked) {
        el_fig.classList.remove("fig-corners-soft");
    }
    else {
        el_fig.classList.add("fig-corners-soft");
    }
}

/* photos: shadows */
document.querySelector("#cb_photos_shadows").addEventListener("change", doPhotosShadows);

function doPhotosShadows() {

    const el_fig = iframe.contentWindow.document.querySelector("header figure");

    if (!document.getElementById("cb_photos_shadows").checked) {
        el_fig.classList.remove("fig-shadows-box");
    }
    else {
        el_fig.classList.add("fig-shadows-box");
    }
}


function resetPhotoProps() {
    document.getElementById("dd_photos_shape").value="1";
    document.getElementById("cb_photos_shadows").checked=false;
    document.getElementById("cb_photos_corners_soft").checked=false;
}

/*
//////////////// VISUALS: TRANSPARENT ///////////////
*/

function doTransparent() {
    removeVisual();

    // Visual types
    document.getElementById("form_vis_types").style.display = "block";
    document.getElementById("rb_vis_type_1").disabled=false;
    document.getElementById("rb_vis_type_2").disabled=false;
    document.getElementById("rb_vis_type_2").checcked=true;
    document.getElementById("rb_vis_type_3").disabled=false;
    document.getElementById("rb_vis_type_4").disabled=false;

    // Property containers
    document.getElementById("properties-photos").style.display = "none";
    document.getElementById("properties-transparent").style.display = "block";
    document.getElementById("properties-drawings").style.display = "none";
    document.getElementById("properties-videos").style.display = "none";

    // Reset properties
    resetPhotoProps();
    resetDrawingsProps();
    resetVideoProps();
    // Set properties
    document.getElementById("cb_trans_shadows").checked = false;
    doVisSubTypes(4);
}

/* transparent: shadows */
document.querySelector("#cb_trans_shadows").addEventListener("change", doTransShadows);

function doTransShadows() {

    const el_fig = iframe.contentWindow.document.querySelector("header figure");

    if (!document.getElementById("cb_trans_shadows").checked) {
        el_fig.classList.remove("fig-shadows-trans");
    }
    else {
        el_fig.classList.add("fig-shadows-trans");
    }
}

function resetTransProps() {
    document.getElementById("cb_trans_shadows").checked = false;
}

/*
//////////////// VISUALS: DRAWINGS ///////////////
*/

function doDrawings() {
    removeVisual();

    // Visual types
    document.getElementById("form_vis_types").style.display = "block";
    document.getElementById("rb_vis_type_1").disabled=false;
    document.getElementById("rb_vis_type_2").disabled=false;
    document.getElementById("rb_vis_type_3").disabled=false;
    document.getElementById("rb_vis_type_4").disabled=false;

    // Property containers
    document.getElementById("properties-photos").style.display = "none";
    document.getElementById("properties-transparent").style.display = "none";
    document.getElementById("properties-drawings").style.display = "block";
    document.getElementById("properties-videos").style.display = "none";

    // Reset properties
    resetPhotoProps();
    resetTransProps();
    resetVideoProps();

    // Set properties
    document.getElementById("cb_drawings_shadows").checked = false;
    doVisSubTypes(5);
}

/* drawings: shadows */
document.querySelector("#cb_drawings_shadows").addEventListener("change", doDrawingsShadows);

function doDrawingsShadows() {

    const el_fig = iframe.contentWindow.document.querySelector("header figure");

    if (!document.getElementById("cb_drawings_shadows").checked) {
        el_fig.classList.remove("fig-shadows-trans");
    }
    else {
        el_fig.classList.add("fig-shadows-trans");
    }
}

function resetDrawingsProps() {
    document.getElementById("cb_drawings_shadows").checked = false;
}

/*
//////////////// VISUAL ELEMENT WIDTH ///////////////
*/

document.querySelector("#dd_switch_header_vis_width").addEventListener("change", doFigWidthPhoto);

function doFigWidthPhoto() {
    let opt = document.querySelector("#dd_switch_header_vis_width").value;
    const el_header_fig = iframe.contentWindow.document.querySelector("header figure");

    if (opt==="120") {
        el_header_fig.classList.remove("w-50");
        el_header_fig.classList.remove("w-80");
        el_header_fig.classList.remove("w-100");
        el_header_fig.classList.add("w-120");
        document.getElementById("figure-animate").disabled = true;
        document.getElementById("figure-animate").value = "0";
    }

    if (opt==="100") {
        el_header_fig.classList.remove("w-50");
        el_header_fig.classList.remove("w-80");
        el_header_fig.classList.remove("w-120");
        el_header_fig.classList.add("w-100");
        document.getElementById("figure-animate").disabled = false;
    }

    else if (opt==="80") {
        el_header_fig.classList.remove("w-50");
        el_header_fig.classList.remove("w-100");
        el_header_fig.classList.remove("w-120");
        el_header_fig.classList.add("w-80");
        document.getElementById("figure-animate").disabled = false;
    }

    else if (opt==="50") {
        el_header_fig.classList.remove("w-80");
        el_header_fig.classList.remove("w-100");
        el_header_fig.classList.remove("w-120");
        el_header_fig.classList.add("w-50");
        document.getElementById("figure-animate").disabled = false;
    }
}

document.querySelector("#dd_switch_header_trans_width").addEventListener("change", doFigWidthTrans);

function doFigWidthTrans() {
    let opt = document.querySelector("#dd_switch_header_trans_width").value;
    const el_header_fig = iframe.contentWindow.document.querySelector("header figure");

    if (opt==="120") {
        el_header_fig.classList.remove("w-50");
        el_header_fig.classList.remove("w-80");
        el_header_fig.classList.remove("w-100");
        el_header_fig.classList.add("w-120");
    }

    if (opt==="100") {
        el_header_fig.classList.remove("w-50");
        el_header_fig.classList.remove("w-80");
        el_header_fig.classList.remove("w-120");
        el_header_fig.classList.add("w-100");
    }

    else if (opt==="80") {
        el_header_fig.classList.remove("w-50");
        el_header_fig.classList.remove("w-100");
        el_header_fig.classList.remove("w-120");
        el_header_fig.classList.add("w-80");
    }

    else if (opt==="50") {
        el_header_fig.classList.remove("w-80");
        el_header_fig.classList.remove("w-100");
        el_header_fig.classList.remove("w-120");
        el_header_fig.classList.add("w-50");
    }
}

document.querySelector("#dd_switch_header_drawings_width").addEventListener("change", doFigWidthDrawings);

function doFigWidthDrawings() {
    let opt = document.querySelector("#dd_switch_header_drawings_width").value;
    const el_header_fig = iframe.contentWindow.document.querySelector("header figure");

    if (opt==="120") {
        el_header_fig.classList.remove("w-50");
        el_header_fig.classList.remove("w-80");
        el_header_fig.classList.remove("w-100");
        el_header_fig.classList.add("w-120");
    }

    if (opt==="100") {
        el_header_fig.classList.remove("w-50");
        el_header_fig.classList.remove("w-80");
        el_header_fig.classList.remove("w-120");
        el_header_fig.classList.add("w-100");
    }

    else if (opt==="80") {
        el_header_fig.classList.remove("w-50");
        el_header_fig.classList.remove("w-100");
        el_header_fig.classList.remove("w-120");
        el_header_fig.classList.add("w-80");
    }

    else if (opt==="50") {
        el_header_fig.classList.remove("w-80");
        el_header_fig.classList.remove("w-100");
        el_header_fig.classList.remove("w-120");
        el_header_fig.classList.add("w-50");
    }
}

document.querySelector("#dd_switch_header_vids_width").addEventListener("change", doFigWidthVids);

function doFigWidthVids() {
    let opt = document.querySelector("#dd_switch_header_vids_width").value;
    const el_header_fig = iframe.contentWindow.document.querySelector("header figure");

    if (opt==="120") {
        el_header_fig.classList.remove("w-50");
        el_header_fig.classList.remove("w-80");
        el_header_fig.classList.remove("w-100");
        el_header_fig.classList.add("w-120");
    }

    if (opt==="100") {
        el_header_fig.classList.remove("w-50");
        el_header_fig.classList.remove("w-80");
        el_header_fig.classList.remove("w-120");
        el_header_fig.classList.add("w-100");
    }

    else if (opt==="80") {
        el_header_fig.classList.remove("w-50");
        el_header_fig.classList.remove("w-100");
        el_header_fig.classList.remove("w-120");
        el_header_fig.classList.add("w-80");
    }

    else if (opt==="50") {
        el_header_fig.classList.remove("w-80");
        el_header_fig.classList.remove("w-100");
        el_header_fig.classList.remove("w-120");
        el_header_fig.classList.add("w-50");
    }
}

/*
//////////////// VISUALS: VIDEOS ///////////////
*/

function doVideos() {

    removeVisual();

    // Visual types
    document.getElementById("form_vis_types").style.display = "block";
    document.getElementById("rb_vis_type_1").disabled=false;
    document.getElementById("rb_vis_type_2").disabled=false;
    document.getElementById("rb_vis_type_3").disabled=false;
    document.getElementById("rb_vis_type_4").disabled=false;

    // Property containers
    document.getElementById("properties-photos").style.display = "none";
    document.getElementById("properties-transparent").style.display = "none";
    document.getElementById("properties-drawings").style.display = "none";
    document.getElementById("properties-videos").style.display = "block";

    // Reset properties
    resetPhotoProps();
    resetDrawingsProps();
    resetTransProps();
    // Set properties
    document.getElementById("dd_videos_type").value = "0";
    doVisSubTypes(6);
}

document.querySelector("#dd_videos_type").addEventListener("change", doVideosType);

function doVideosType() {

    let opt = document.querySelector("#dd_videos_type").value;
    removeVisual();
    if (opt==="0") {
        doVisSubTypes(6);
    }

    else if (opt==="1") {
        doVisSubTypes(7);
    }
    else if (opt==="2") {
        doVisSubTypes(8);
    }
}

function resetVideoProps() {
    document.querySelector("#dd_videos_type").value="0";
}

function doVisSubTypes(n) {

    const objHeader = iframe.contentWindow.document.querySelector("header");
    let el_visual;

    // photos: landscape
    if (n===1) {
        el_visual = content_photo_landscape_section;
    }
    // photos: square
    else if (n===2) {
        el_visual = content_photo_square_section;
    }
    // photos: circle
    else if (n===3) {
        el_visual = content_photo_circle_section;
    }

    // transparent: landscape
    else if (n===4) {
        el_visual = content_trans_landscape_section;
    }

    // drawings: landscape
    else if (n===5) {
        el_visual = content_drawing_landscape_section;
    }

    // videos: file
    else if (n===6) {
        el_visual = content_vid_file_section;
    }

    // videos: YouTube
    else if (n===7) {
        el_visual = content_vid_yt_section;
    }

    // videos: Rumble
    else if (n===8) {
        el_visual = content_vid_rumble_section;
    }
    objHeader.innerHTML = objHeader.innerHTML + el_visual;
}

/*
//////////////// ANIMATE VISUAL ///////////////
*/

document.querySelector("#figure-animate").addEventListener("change", doFigureAnimate);

function doFigureAnimate() {

    let opt = document.getElementById("figure-animate").value;

    if (opt==="0") {
        removeFigureAnimate();
    }

    else if (opt==="1") {
        removeFigureAnimate();
        iframe.contentWindow.document.querySelector("header > figure").classList.add("reveal-slide-up-header");
    }

    else if (opt==="2") {
        removeFigureAnimate();
        iframe.contentWindow.document.querySelector("header > figure").classList.add("reveal-slide-from-left-header");
    }

    else if (opt==="3") {
        removeFigureAnimate();
        iframe.contentWindow.document.querySelector("header > figure").classList.add("reveal-slide-from-right-header");
    }

    else if (opt==="4") {
        removeFigureAnimate();
        iframe.contentWindow.document.querySelector("header > figure").classList.add("reveal-fade-in-header");
    }

    else if (opt==="5") {
        removeFigureAnimate();
        iframe.contentWindow.document.querySelector("header > figure").classList.add("reveal-scale-in-header");
    }
}

function removeFigureAnimate() {
    iframe.contentWindow.document.querySelector("header > figure").classList.remove("reveal-slide-up-header");
    iframe.contentWindow.document.querySelector("header > figure").classList.remove("reveal-slide-from-left-header");
    iframe.contentWindow.document.querySelector("header > figure").classList.remove("reveal-slide-from-right-header");
    iframe.contentWindow.document.querySelector("header > figure").classList.remove("reveal-fade-in-header");
    iframe.contentWindow.document.querySelector("header > figure").classList.remove("reveal-scale-in-header");
    iframe.contentWindow.document.querySelector("header > figure").classList.remove("reveal-appear-in-header");
}


function removeVisual() {
    const parentNode = iframe.contentWindow.document.querySelector("header");
    var el_img = Array.prototype.slice.call(iframe.contentWindow.document.getElementsByTagName("figure"),0);
    for (let i = 0; i < el_img.length; i++) {
        el_img[i].parentNode.removeChild(el_img[i]);
    }
}

