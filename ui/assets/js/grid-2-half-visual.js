import {content_photo_landscape_section, content_photo_portrait_section, content_photo_square_section, content_trans_landscape_section, content_trans_portrait_section, content_drawing_landscape_section, content_vid_file_section, content_vid_yt_section, content_vid_rumble_section, content_textbox_section } from '../js/arr-content.js';

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

    const el_fig = iframe.contentWindow.document.querySelector("section .col-2.col-visual figure");

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

    const el_fig = iframe.contentWindow.document.querySelector("section .col-2.col-visual figure");

    if (!document.getElementById("cb_photos_shadows").checked) {
        el_fig.classList.remove("fig-shadows-box");
    }
    else {
        el_fig.classList.add("fig-shadows-box");
    }
}

/* photos: overlay textbox */

document.querySelector("#cb_img_textbox").addEventListener("change", doColH3TextBox);

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

/* photos: soft corners */

document.querySelector("#form_img_textbox_shape").addEventListener("change", doTextBoxShape);

function doTextBoxShape() {

    const el_TextBox = iframe.contentWindow.document.querySelector(".cols-img-textbox");
    const rbs = document.querySelectorAll("input[name='switch_img_textbox_shape']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (selectedValue==="square") {
        el_TextBox.classList.remove("corners-soft");
    }

    else if (selectedValue==="soft") {
        el_TextBox.classList.add("corners-soft");
    }
}


function resetPhotoProps() {
    document.getElementById("dd_photos_shape").value="1";
    document.getElementById("cb_photos_shadows").checked=false;
    document.getElementById("cb_photos_corners_soft").checked=false;
    document.getElementById("show-textbox").style.display = "none";
    document.getElementById("cb_img_textbox").checked=false;
}

/*
//////////////// VISUALS: TRANSPARENT ///////////////
*/

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
    document.getElementById("rb_vis_type_4").disabled=false;

    // Property containers
    document.getElementById("properties-photos").style.display = "none";
    document.getElementById("properties-transparent").style.display = "block";
    document.getElementById("properties-drawings").style.display = "none";
    // document.getElementById("properties-icons").style.display = "none";
    // document.getElementById("properties-videos").style.display = "none";

    // Reset properties
    resetPhotoProps();
    resetDrawingsProps();
    resetVideoProps();
    document.getElementById("dd_transparent_shape").value = "1";
    doVisSubTypes(6);
}

document.querySelector("#dd_transparent_shape").addEventListener("change", doTransparentType);

function doTransparentType() {
    let opt = document.querySelector("#dd_transparent_shape").value;
    const el_fig = iframe.contentWindow.document.querySelector("section .col-2.col-visual figure");
    el_fig.classList.remove("img-circle");

    removeVisual();
    if (opt==="1") {
        doVisSubTypes(5);
        console.log("do 5");
    }
    else if (opt==="2") {
        doVisSubTypes(6);
        console.log("do 6");

    }
    else if (opt==="3") {
        doVisSubTypes(7);
        console.log("do 7");

    }

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

    const el_fig = iframe.contentWindow.document.querySelector("section .col-2.col-visual figure");

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

    const el_fig = iframe.contentWindow.document.querySelector("section .col-2.col-visual figure");

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
    doVisSubTypes(11);
}

document.querySelector("#dd_videos_type").addEventListener("change", doVideosType);

function doVideosType() {

    let opt = document.querySelector("#dd_videos_type").value;
    removeVisual();
    if (opt==="0") {
        doVisSubTypes(11);
    }

    else if (opt==="1") {
        doVisSubTypes(12);
    }
    else if (opt==="2") {
        doVisSubTypes(13);
    }
}

function resetVideoProps() {
    document.querySelector("#dd_videos_type").value="0";
}

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
        el_visual = content_photo_square_section;
    }

    // transparent: landscape
    if (n===5) {
        console.log("transparent: landscape");
        removeVisual();

        el_visual = content_trans_landscape_section;
    }
    // transparent: portrait
    else if (n===6) {
        removeVisual();
        el_visual = content_trans_portrait_section;
    }
    // transparent: square
    else if (n===7) {
        el_visual = content_trans_portrait_section;
    }

    // drawings: landscape
    else if (n===8) {
        el_visual = content_drawing_landscape_section;
    }

    // drawings: portrait
    else if (n===9) {
        el_visual = content_drawing_landscape_section;
    }

    // drawings: square
    else if (n===10) {
        el_visual = content_drawing_landscape_section;
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


function removeVisual() {

    const parentNode = iframe.contentWindow.document.querySelector("section .col-2.col-visual figure");
    var el_img = Array.prototype.slice.call(iframe.contentWindow.document.getElementsByTagName("figure"),0);
    for (let i = 0; i < el_img.length; i++) {
        el_img[i].parentNode.removeChild(el_img[i]);
    }
}

