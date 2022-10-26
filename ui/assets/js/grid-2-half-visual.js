import {content_photo_landscape_section, content_photo_portrait_section, content_photo_square_section, content_photo_circle_section, content_trans_landscape_section, content_trans_portrait_section, content_trans_square_section, content_drawing_landscape_section, content_drawing_portrait_section, content_drawing_square_section, content_vid_file_section, content_vid_yt_section, content_vid_rumble_section, content_textbox_section } from '../js/arr-content.js';

/*
////////////////////// VISUALS: FOUR TYPES ///////////////////////
*/

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
        doPhoto();
    }
    else if (selectedValue==="transparent") {
        doTransparent();
    }
    else if (selectedValue==="drawings") {
        doDrawing();
    }
    else if (selectedValue==="videos") {
        doVideo();
    }
}

/*
//////////////// VISUALS: PHOTOS ///////////////
*/

function doPhoto() {
    removeVisual();
    document.getElementById("rb_vis_type_1").checked=true;

    document.getElementById("box-shape-photo").style.display = 'block';
    document.getElementById("box-shape-trans").style.display = 'none';
    document.getElementById("box-shape-drawing").style.display = 'none';
    document.getElementById("box-source-video").style.display = 'none';
    document.getElementById("dd_shape_photo").value = "1";
    document.getElementById("dd_shape_trans").value = "1";
    document.getElementById("dd_shape_drawing").value = "1";
    document.getElementById("dd_source_video").value = "1";

    document.getElementById("cb_visual_shadows").disabled= false;
    document.getElementById("cb_visual_shadows").checked = false;
    document.getElementById("cb_visual_corners_soft").disabled= false;
    document.getElementById("cb_visual_corners_soft").checked = false;

    doVisSubTypes(1); /* Default photo */
}

document.getElementById("dd_shape_photo").addEventListener("change", doShapePhoto);

function doShapePhoto() {
    removeVisual();
    document.getElementById("cb_visual_shadows").disabled= false;
    document.getElementById("cb_visual_shadows").checked = false;
    document.getElementById("cb_visual_corners_soft").disabled= false;
    document.getElementById("cb_visual_corners_soft").checked = false;

    let opt = document.getElementById("dd_shape_photo").value;

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

/*
//////////////// VISUALS: TRANSPARENT ///////////////
*/

function doTransparent() {
    removeVisual();
    document.getElementById("rb_vis_type_2").checked=true;

    document.getElementById("box-shape-photo").style.display = 'none';
    document.getElementById("box-shape-trans").style.display = 'block';
    document.getElementById("box-shape-drawing").style.display = 'none';
    document.getElementById("box-source-video").style.display = 'none';
    document.getElementById("dd_shape_photo").value = "1";
    document.getElementById("dd_shape_trans").value = "1";
    document.getElementById("dd_shape_drawing").value = "1";
    document.getElementById("dd_source_video").value = "1";
    document.getElementById("cb_visual_shadows").disabled= false;
    document.getElementById("cb_visual_shadows").checked = false;
    document.getElementById("cb_visual_corners_soft").disabled= true;
    document.getElementById("cb_visual_corners_soft").checked = false;

    doVisSubTypes(5); /* Default transparent image */
}

document.getElementById("dd_shape_trans").addEventListener("change", doShapeTrans);

function doShapeTrans() {
    removeVisual();
    document.getElementById("cb_visual_shadows").disabled= false;
    document.getElementById("cb_visual_shadows").checked = false;
    document.getElementById("cb_visual_corners_soft").disabled= true;
    document.getElementById("cb_visual_corners_soft").checked = false;

    let opt = document.querySelector("#dd_shape_trans").value;

    if (opt==="1") {
        doVisSubTypes(5);
    }
    else if (opt==="2") {
        doVisSubTypes(6);
    }
    else if (opt==="3") {
        doVisSubTypes(7);
    }
}

/*
//////////////// VISUALS: DRAWINGS ///////////////
*/

function doDrawing() {
    removeVisual();
    document.getElementById("rb_vis_type_3").checked=true;

    document.getElementById("box-shape-photo").style.display = 'none';
    document.getElementById("box-shape-trans").style.display = 'none';
    document.getElementById("box-shape-drawing").style.display = 'block';
    document.getElementById("box-source-video").style.display = 'none';
    document.getElementById("dd_shape_photo").value = "1";
    document.getElementById("dd_shape_trans").value = "1";
    document.getElementById("dd_shape_drawing").value = "1";
    document.getElementById("dd_source_video").value = "1";
    document.getElementById("cb_visual_shadows").disabled= false;
    document.getElementById("cb_visual_shadows").checked = false;
    document.getElementById("cb_visual_corners_soft").disabled= true;
    document.getElementById("cb_visual_corners_soft").checked = false;

    doVisSubTypes(8); /* Default drawing */
}

document.getElementById("dd_shape_drawing").addEventListener("change", doShapeDrawing);

function doShapeDrawing() {
    removeVisual();
    document.getElementById("cb_visual_shadows").disabled= false;
    document.getElementById("cb_visual_shadows").checked = false;
    document.getElementById("cb_visual_corners_soft").disabled= true;
    document.getElementById("cb_visual_corners_soft").checked = false;

    let opt = document.getElementById("dd_shape_drawing").value;

    if (opt==="1") {
        doVisSubTypes(8);
    }
    else if (opt==="2") {
        doVisSubTypes(9);
    }
    else if (opt==="3") {
        doVisSubTypes(10);
    }
}

/*
//////////////// VISUALS: VIDEOS ///////////////
*/

function doVideo() {

    removeVisual();
    document.getElementById("rb_vis_type_4").checked=true;

    document.getElementById("box-shape-photo").style.display = 'none';
    document.getElementById("box-shape-trans").style.display = 'none';
    document.getElementById("box-shape-drawing").style.display = 'none';
    document.getElementById("box-source-video").style.display = 'block';
    document.getElementById("dd_shape_photo").value = "1";
    document.getElementById("dd_shape_trans").value = "1";
    document.getElementById("dd_shape_drawing").value = "1";
    document.getElementById("dd_source_video").value = "1";
    document.getElementById("cb_visual_shadows").disabled= true;
    document.getElementById("cb_visual_shadows").checked = false;
    document.getElementById("cb_visual_corners_soft").disabled= true;
    document.getElementById("cb_visual_corners_soft").checked = false;
    doVisSubTypes(11); /* Default video */
}

document.getElementById("dd_source_video").addEventListener("change", doSourceVideo);

function doSourceVideo() {

    let opt = document.querySelector("#dd_source_video").value;
    removeVisual();

    if (opt==="1") {
        doVisSubTypes(11);
    }

    else if (opt==="2") {
        doVisSubTypes(12);
    }
    else if (opt==="3") {
        doVisSubTypes(13);
    }
}

/* ======== LIST OF VISUAL SUB-TYPES =============== */

function doVisSubTypes(n) {

    const objSection = iframe.contentWindow.document.querySelector("section .col-2.col-visual");
    let el_visual;

    // photos: landscape
    if (n===1) {
        el_visual = content_photo_landscape_section;
    }
    // photos: portrait
    else if (n===2) {
        el_visual = content_photo_portrait_section;
    }
    // photos: square
    else if (n===3) {
        el_visual = content_photo_square_section;
    }
    // photos: circle
    else if (n===4) {
        el_visual = content_photo_circle_section;
    }

    // transparent: landscape
    if (n===5) {
        el_visual = content_trans_landscape_section;
    }
    // transparent: portrait
    else if (n===6) {
        el_visual = content_trans_portrait_section;
    }
    // transparent: square
    else if (n===7) {
        el_visual = content_trans_square_section;
    }

    // drawings: landscape
    else if (n===8) {
        el_visual = content_drawing_landscape_section;
    }
    // drawings: portrait
    else if (n===9) {
        el_visual = content_drawing_portrait_section;
    }
    // drawings: square
    else if (n===10) {
        el_visual = content_drawing_square_section;
    }

    // videos: file
    else if (n===11) {
        el_visual = content_vid_file_section;
    }

    // videos: YouTube
    else if (n===12) {
        el_visual = content_vid_yt_section;
    }

    // videos: Rumble
    else if (n===13) {
        el_visual = content_vid_rumble_section;
    }
    objSection.innerHTML = el_visual + objSection.innerHTML;

    // if (n===4) { doImgCircle(); }
}

function doImgCircle() {
    console.log("got to doImgCircle()")
    const el_fig = iframe.contentWindow.document.querySelector("section .col-2.col-visual");
    el_fig.classList.add("img-circle");

    // document.getElementById("cb_photos_corners_soft").disabled=true;
    // document.getElementById("cb_img_textbox").disabled=true;
    // document.getElementById("cb_photos_zoom").disabled=true;
}

function resetImgCircle() {
    const el_fig = iframe.contentWindow.document.querySelector("section .col-2.col-visual figure");
    el_fig.classList.remove("img-circle");
    // document.getElementById("cb_photos_corners_soft").disabled=false;
    // document.getElementById("cb_photos_shadows").disabled=false;
    // document.getElementById("cb_photos_zoom").disabled=false;
    // document.getElementById("cb_img_textbox").disabled=false;
    // document.getElementById("cb_img_h4").disabled=false;
    // document.getElementById("cb_photos_zoom").disabled=false;
}


/* ================= VISUAL PROPERTIES ===================== */

/* photos: corners */

document.querySelector("#cb_visual_corners_soft").addEventListener("change", doFigCorners);

function doFigCorners() {

    const el_fig = iframe.contentWindow.document.querySelector("section .col-2.col-visual figure");

    if (!document.getElementById("cb_visual_corners_soft").checked) {
        el_fig.classList.remove("fig-corners-soft");
    }
    else {
        el_fig.classList.add("fig-corners-soft");
    }
}

/* photos: shadows */
document.querySelector("#cb_visual_shadows").addEventListener("change", doImgShadows);

function doImgShadows() {

    const el_fig = iframe.contentWindow.document.querySelector("section .col-2.col-visual figure");

    if (!document.getElementById("cb_visual_shadows").checked) {
        el_fig.classList.remove("fig-shadows-trans");
    }
    else {
        el_fig.classList.add("fig-shadows-trans");
    }
}

/* photos: overlay textbox */

// document.querySelector("#cb_img_textbox").addEventListener("change", doColH3TextBox);

function doColH3TextBox() {

    const el_fig = iframe.contentWindow.document.querySelector("section .col-2.col-visual figure");
    let el_TextBox;
    let node;
    const arrContent = [];

    if (!document.querySelector("#cb_img_textbox").checked) {
        // Remove div as child of figure
        el_TextBox = iframe.contentWindow.document.querySelector("section .col-2.col-visual figure .cols-img-textbox");
        el_fig.removeChild(el_TextBox);
        document.getElementById("show-textbox").style.display = "none";
    }

    else {
        // Add overlay textbox as child of figure
        node = document.createElement("div");
        node.innerText = content_textbox_section;
        node.classList.add("cols-img-textbox");
        el_fig.appendChild(node);
        document.getElementById("show-textbox").style.display = "block";
    }
}

function removeVisual() {
    const parentNode = iframe.contentWindow.document.querySelector("section .col-2.col-visual figure");
    var el_img = Array.prototype.slice.call(iframe.contentWindow.document.getElementsByTagName("figure"),0);
    for (let i = 0; i < el_img.length; i++) {
        el_img[i].parentNode.removeChild(el_img[i]);
    }
}

