import {content_h3_col_3, content_h3_col_4, content_paras_col_3, content_paras_col_4, content_list_col_3, content_list_col_4, arrColBadge} from '../js/arr-content.js';

/*
//////////////// COLUMNS BLOCKS ///////////////
*/

document.querySelector("#form_switch_col_blocks").addEventListener("change", setColumnBlocks);

function setColumnBlocks() {
    const rbs = document.querySelectorAll("input[name='switch_col_blocks']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    let objAllCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");

    // ==== ROW ONE =====
    if (selectedValue==="row-one") {

        // COL-2: reduce from 4 to 2
        if ( (objAllCols.length === 4) && (iframe.contentWindow.document.querySelector('.flex-cols-2')) ) {
            for (let i = 0; i < 2; i++) {
                objAllCols[i].remove();
            }
            disableRowsGap();
        }

        // COL-2: reduce from 6 to 2 (remove 4)
        else if ( ( objAllCols.length === 6) && (iframe.contentWindow.document.querySelector('.flex-cols-2')) ) {
            for (let i = 0; i < 4; i++) {
                objAllCols[i].remove();
            }
            disableRowsGap();
        }

        // 3-COL: reduce from 6 to 3 (remove 3)
        if ( ( objAllCols.length === 6) && (iframe.contentWindow.document.querySelector('.flex-cols-3')) ) {
            for (let i = 0; i < 3; i++) {
                objAllCols[i].remove();
            }
            disableRowsGap();
        }

        // 3-COL: reduce from 9 to 3 (remove 6)
        else if (objAllCols.length === 9) {
            for (let i = 0; i < 6; i++) {
                objAllCols[i].remove();
            }
            disableRowsGap();
        }

        // 4-COL: reduce from 8 to 4
        else if (objAllCols.length === 8) {
            for (let i = 0; i < 4; i++) {
                objAllCols[i].remove();
            }
            disableRowsGap();
        }

        // 4-COL: reduce from 12 to 4
        else if (objAllCols.length === 12) {
            for (let i = 0; i < 8; i++) {
                objAllCols[i].remove();
            }
            disableRowsGap();
        }
    }

    // ==== ROW TWO =====
    else if (selectedValue==="row-two") {

        // 2-COL: increase from 2 to 4
        if (objAllCols.length === 2) {
            let objRowOne = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML;
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = objRowOne.innerHTML;
            enableRowsGap();
        }

        // 2-COL: reduce from 6 to 4.
        else if ( ( objAllCols.length === 6) && (iframe.contentWindow.document.querySelector('.flex-cols-2')) ) {
            objAllCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
            for (let i = 0; i < 2; i++) {
                objAllCols[i].remove();
            }
            enableRowsGap();
        }

        // 3-COL: increase 3 to 6 (double current content)
        if (objAllCols.length === 3) {
            let objRowOne = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML;
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = objRowOne.innerHTML;
            enableRowsGap();
        }

        //  3-COL: reduce from 9 to 6 (remove 3)
        else if (objAllCols.length === 9) {
            objAllCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
            for (let i = 0; i < 3; i++) {
                objAllCols[i].remove();
            }
            enableRowsGap();
        }

        // 4-COL: increase 4 to 8 (double current content)
        if ( (objAllCols.length === 4) && (iframe.contentWindow.document.querySelector('.flex-cols-4')) ) {
            let objRowOne = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML;
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = objRowOne.innerHTML;
            enableRowsGap();
        }

        // 4-COL: reduce from 12 to 8 (remove 4)
        else if (objAllCols.length === 12) {
            objAllCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
            for (let i = 0; i < 4; i++) {
                objAllCols[i].remove();
            }
            enableRowsGap();        }
    }

    // ==== ROW THREE =====

    else if (selectedValue==="row-three") {

        // 2-COL: increase from 2 to 6
        if (objAllCols.length === 2) {
            let objRowOne = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML + objRowOne.innerHTML;
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = objRowOne.innerHTML;
            enableRowsGap();
        }

       // 2-COL: increase from 4 to 6 (double and remove 2)
       if ( (objAllCols.length === 4) && (iframe.contentWindow.document.querySelector('.flex-cols-2')) ) {
            let objRowOne = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML;
            for (let i = 0; i < 2; i++) {
                objRowOne.firstElementChild.remove();
            }
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = objRowOne.innerHTML;
            enableRowsGap();
        }

        // 3-COL: increase from 3 to 9 (treble current content)
        if (objAllCols.length === 3) {
            let objRowOne = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML + objRowOne.innerHTML;
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = objRowOne.innerHTML;
            enableRowsGap();
        }

        // 3-COL: 6 to 9 (double and remove 3)
        if ( ( objAllCols.length === 6) && (iframe.contentWindow.document.querySelector(".col-3")) ) {
            let objRowOne = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML;
            for (let i = 0; i < 3; i++) {
                objRowOne.firstElementChild.remove();
            }
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = objRowOne.innerHTML;
            enableRowsGap();
        }

        // 4-COL: increase 4 to 12 (treble current content)
        if ( (objAllCols.length === 4) && (iframe.contentWindow.document.querySelector('.flex-cols-4')) ) {
            let objRowOne = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML + objRowOne.innerHTML;
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = objRowOne.innerHTML;
            enableRowsGap();
        }

        // 4-COL: 8 to 12 (double and remove 4)
        if (objAllCols.length === 8) {
            let objRowOne = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML;
            for (let i = 0; i < 4; i++) {
                objRowOne.firstElementChild.remove();
            }
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = objRowOne.innerHTML;
            enableRowsGap();
        }
    }
}

/*
//////////////// COLUMNS GAP ///////////////
*/

document.querySelector("#form-cols-gap-width").addEventListener("change", doColsGapWidth);

function doColsGapWidth() {

    const rbs = document.querySelectorAll("input[name='cols-gap-width']");

    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    const objAllCols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");

    objAllCols.classList.remove("cols-gap-1");
    objAllCols.classList.remove("cols-gap-2");
    objAllCols.classList.remove("cols-gap-3");
    objAllCols.classList.remove("cols-gap-4");

    if (selectedValue==="1") {
        objAllCols.classList.add("cols-gap-1");
    }

    else if (selectedValue==="2") {
        objAllCols.classList.add("cols-gap-2");
    }

    else if (selectedValue==="3") {
        objAllCols.classList.add("cols-gap-3");
    }

    else if (selectedValue==="4") {
        objAllCols.classList.add("cols-gap-4");
    }
}

/*
//////////////// ROWS GAP ///////////////
*/

document.querySelector("#form-rows-gap-width").addEventListener("change", doRowsGapWidth);

function doRowsGapWidth() {

    const rbs = document.querySelectorAll("input[name='rows-gap-width']");

    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    const objAllCols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");

    objAllCols.classList.remove("rows-gap-1");
    objAllCols.classList.remove("rows-gap-2");
    objAllCols.classList.remove("rows-gap-3");
    objAllCols.classList.remove("rows-gap-4");

    if (selectedValue==="1") {
        objAllCols.classList.add("rows-gap-1");
    }

    else if (selectedValue==="2") {
        objAllCols.classList.add("rows-gap-2");
    }

    else if (selectedValue==="3") {
        objAllCols.classList.add("rows-gap-3");
    }

    else if (selectedValue==="4") {
        objAllCols.classList.add("rows-gap-4");
    }
}

function enableRowsGap() {
    document.getElementById("rows-gap-width-1").disabled = false;
    document.getElementById("rows-gap-width-2").disabled = false;
    document.getElementById("rows-gap-width-3").disabled = false;
    document.getElementById("rows-gap-width-4").disabled = false;
    document.getElementById("rows-gap-width-1").checked = false;
    document.getElementById("rows-gap-width-2").checked = false;
    document.getElementById("rows-gap-width-3").checked = true;
    document.getElementById("rows-gap-width-4").checked = false;
    document.querySelector("span.rows-gap-px").style.color ='#fff';
}

function disableRowsGap() {
    document.getElementById("rows-gap-width-1").disabled = true;
    document.getElementById("rows-gap-width-2").disabled = true;
    document.getElementById("rows-gap-width-3").disabled = true;
    document.getElementById("rows-gap-width-4").disabled = true;
    document.getElementById("rows-gap-width-1").checked = false;
    document.getElementById("rows-gap-width-2").checked = false;
    document.getElementById("rows-gap-width-3").checked = false;
    document.getElementById("rows-gap-width-4").checked = false;
    document.querySelector("span.rows-gap-px").style.color ='gray';
}


/*
//////////////// COLUMNS ALIGN ///////////////
*/

document.querySelector("#form-cols-align").addEventListener("change", doColsAlign);

function doColsAlign() {
    const rbs = document.querySelectorAll("input[name='cols-align']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").classList.remove("text-center");
    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").classList.add("text-center");
    }
}

/*
//////////////// COLUMNS WIDTH ON MOBILES ///////////////
*/
if (document.querySelector("#form_cols_mobile")) {
    document.querySelector("#form_cols_mobile").addEventListener("change", doColsMobileWidth);
}

function doColsMobileWidth() {
    const rbs = document.querySelectorAll("input[name='switch_cols_mobile']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (selectedValue==="cols-one") {
        iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").classList.remove("mobile-col-2");
        console.log("remove mobile-col-2");
    }

    if (selectedValue==="cols-two") {
        iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").classList.add("mobile-col-2");
        console.log("add mobile-col-2")
    }
}

/*
//////////////// COLUMN BADGES ////////////////////
*/

document.querySelector("#cb_cols_badge").addEventListener("change", doColsBadge);

function doColsBadge() {

    if (!document.getElementById("cb_cols_badge").checked) {
        removeColsBadge();
    }

    else {
        // count column blocks
        const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");

        let arrColBadgeLoop = [];

        if (objCols.length === 2) {
            for (let i = 0; i < (arrColBadge.length-2); i++) {
                arrColBadgeLoop[i] = arrColBadge[i];
            }
        }

        else if (objCols.length === 3) {
            for (let i = 0; i < (arrColBadge.length-1); i++) {
                arrColBadgeLoop[i] = arrColBadge[i];
            }
        }

        else if (objCols.length === 4) {
            const arrColBadgeTemp = [];
            for (let i = 0; i < (arrColBadge.length-2); i++) {
                arrColBadgeTemp[i] = arrColBadge[i];
            }
            arrColBadgeLoop = [].concat(...Array(2).fill(arrColBadgeTemp));
        }


        else if (objCols.length === 6) {
            const arrColBadgeTemp = [];
            for (let i = 0; i < (arrColBadge.length-1); i++) {
                arrColBadgeTemp[i] = arrColBadge[i];
            }
            arrColBadgeLoop = [].concat(...Array(2).fill(arrColBadgeTemp));
        }

        else if (objCols.length === 8) {
            const arrColBadgeTemp = [];
            for (let i = 0; i < (arrColBadge.length); i++) {
                arrColBadgeTemp[i] = arrColBadge[i];
            }
            arrColBadgeLoop = [].concat(...Array(2).fill(arrColBadgeTemp));
        }

        else if (objCols.length === 9) {
            const arrColBadgeTemp = [];
            for (let i = 0; i < (arrColBadge.length-1); i++) {
                arrColBadgeTemp[i] = arrColBadge[i];
            }
            arrColBadgeLoop = [].concat(...Array(3).fill(arrColBadgeTemp));
        }

        else if (objCols.length === 12) {
            const arrColBadgeTemp = [];
            for (let i = 0; i < (arrColBadge.length-1); i++) {
                arrColBadgeTemp[i] = arrColBadge[i];
            }
            arrColBadgeLoop = [].concat(...Array(4).fill(arrColBadgeTemp));
        }

        // Test for figures
        if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] figure")) {
            const objFigs = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] figure")
            let el_fig;
            // Loop through figures
            for (let i = 0; i < objFigs.length; i++) {
                el_fig = objFigs[i];
                el_fig.insertAdjacentHTML("afterend", arrColBadgeLoop[i]);
            }
            document.getElementById("show-cols-badge").style.display="flex";
        }

        // Test for sub-headings
        else if ( (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) || (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] a[class^='col-']") ))  {
            let objH3;
            if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) {
                objH3 = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] h3");
            }
            else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] a[class^='col-']")) {
                objH3 = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] a[class^='col-']");
            }
            let el_h3;
            // Loop through h3 sub-headings
            for (let i = 0; i < objH3.length; i++) {
                el_h3 = objH3[i];
                el_h3.insertAdjacentHTML("beforebegin", arrColBadgeLoop[i]);
            }
            document.getElementById("show-cols-badge").style.display="flex";
        }

        // Test for paragraphs
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] p")) {
            const objParas = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] p");
            let el_para;
            // Loop through paragraphs
            for (let i = 0; i < objParas.length; i++) {
                el_para = objParas[i];
                el_para.insertAdjacentHTML("beforebegin", arrColBadgeLoop[i]);
            }
            document.getElementById("show-cols-badge").style.display="flex";
        }

        // Test for lists
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] ul")) {
            const objULs = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] ul")
            let el_li;
            // Loop through lists
            for (let i = 0; i < objULs.length; i++) {
                el_li = objULs[i];
                el_li.insertAdjacentHTML("beforebegin", arrColBadgeLoop[i]);
            }
            document.getElementById("show-cols-badge").style.display="flex";
        }

        else {
            const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
            let el_col;
            // Loop through columns
            for (let i = 0; i < objCols.length; i++) {
                el_col = objCols[i];
                el_col.innerHTML = arrColBadgeLoop[i];
            }
        }
    }
}


document.querySelector("#form_cols_badge_shape").addEventListener("change", doColsBadgeShape);

function doColsBadgeShape() {

    const objBadges = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] .badge");
    let elBadge
    const rbs = document.querySelectorAll("input[name='switch_cols_badge_shape']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (selectedValue==="square") {
        for (elBadge of objBadges) {
            elBadge.classList.remove("corners-soft");
        }
    }

    else if (selectedValue==="soft") {
        for (elBadge of objBadges) {
            elBadge.classList.add("corners-soft");
        }
    }
}


function removeColsBadge() {
    if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] .badge")) {
        const colsBadge = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] .badge");
        for (let i = 0; i < colsBadge.length; i++) {
            colsBadge[i].remove();
        }
        document.getElementById("show-cols-badge").style.display="none";
        const arg1 = sectionClassName+ " .badge { color:";
        const arg2 = sectionClassName+ " .badge { background-color:";
        removeCSSTagPairs(arg1,arg2);
    }
}

/*
//////////////// COLUMN SUB-HEADINGS ////////////////////
*/

document.querySelector("#cb_cols_h3").addEventListener("change", doColH3);

function doColH3() {

    if (!document.getElementById("cb_cols_h3").checked) {
        removeColH3();
    }

    else {
        removeColH3();
        document.getElementById("btn_cols_h3").disabled=false;
        // count column blocks
        const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
        let arrContent = [];
        let arrContentLoop = [];

        // ======== do col-2 layouts

        if (iframe.contentWindow.document.querySelector(".flex-cols-2")) {

            // populate array
            for (let i = 0; i < (content_h3_col_3.length-1); i++) {
                arrContent[i] = content_h3_col_3[i];
            }

            if (objCols.length === 2) {
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentLoop[i] = arrContent[i];
                }
            }

            else if (objCols.length === 4) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
            }

            else if (objCols.length === 6) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(3).fill(arrContentTemp));
            }
        }

        // ======== do col-3 layouts

        else if (iframe.contentWindow.document.querySelector(".flex-cols-3")) {

            // populate array
            for (let i = 0; i < content_h3_col_3.length; i++) {
                arrContent[i] = content_h3_col_3[i];
            }

            if (objCols.length === 3) {
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentLoop[i] = arrContent[i];
                }
            }

            else if (objCols.length === 6) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
            }

            else if (objCols.length === 9) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(3).fill(arrContentTemp));
            }
       }

        // ======== do col-4 layouts
        else if (iframe.contentWindow.document.querySelector(".flex-cols-4")) {

            // populate array
            for (let i = 0; i < content_h3_col_4.length; i++) {
                arrContent[i] = content_h3_col_4[i];
            }

            if (objCols.length === 4) {
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentLoop[i] = arrContent[i];
                }
            }

            else if (objCols.length === 8) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
            }

            else if (objCols.length === 12) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(4).fill(arrContentTemp));
            }
        }

        // Test for figures (images or icons) and NO badge
        // append after <figure> tag
        if ( (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] figure")) && (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] .badge") ) ) {
            const objFigs = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] figure")
            let el_fig;
            // Loop through figures
            for (let i = 0; i < objFigs.length; i++) {
                el_fig = objFigs[i];
                el_fig.insertAdjacentHTML("afterend", arrContentLoop[i]);
            }
            document.getElementById("cb_cols_shadows").disabled=false;
            document.getElementById("cb_cols_shadows").checked=false;
        }

        // No figures. Test for column badges
        // append after badge div tag
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] .badge")) {

            const objBadges = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] .badge");
            let el_badge;
            // Loop through badges
            for (let i = 0; i < objBadges.length; i++) {
                el_badge = objBadges[i];
                el_badge.insertAdjacentHTML("afterend", arrContentLoop[i]);
            }
            document.getElementById("cb_cols_shadows").disabled=false;
            document.getElementById("cb_cols_shadows").checked=false;
        }

        // Test for paragraphs
        // Append before first paragraph
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] p")) {
            const objParas = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] p:nth-child(1)");
            console.log("first objParas: "+objParas.innerHTML)
            let el_para;
            // Loop through paragraphs
            for (let i = 0; i < objParas.length; i++) {
                el_para = objParas[i];
                el_para.insertAdjacentHTML("beforebegin", arrContentLoop[i]);
            }
            document.getElementById("cb_cols_shadows").disabled=false;
            document.getElementById("cb_cols_shadows").checked=false;
        }

        // Test for lists
        // Append before <ul> tag
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] ul")) {
            const objULs = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] ul")
            let el_li;
            // Loop through lists
            for (let i = 0; i < objULs.length; i++) {
                el_li = objULs[i];
                el_li.insertAdjacentHTML("beforebegin", arrContentLoop[i]);
            }
            document.getElementById("cb_cols_shadows").disabled=false;
            document.getElementById("cb_cols_shadows").checked=false;
        }

        // No pics, icons, paras, lists
        // Insert as column content
        else {
            const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
            let el_col;
            // Loop through columns
            for (let i = 0; i < objCols.length; i++) {
                el_col = objCols[i];
                el_col.innerHTML = arrContentLoop[i];
            }
        }
        document.getElementById("cb_cols_shadows").disabled=false;
        document.getElementById("cb_cols_shadows").checked=false;
        document.getElementById("cb_cols_links_h3").disabled=false;
        document.getElementById("cb_cols_links_h3").checked=false;
    }
}

function removeColH3() {
    if ( (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) || (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] a[class^='col-']")) ) {
        document.getElementById("btn_cols_h3").disabled=true;
        let objH3;
        if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) {
            objH3 = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] h3");
        }
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] a[class^='col-']")) {
            objH3 = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] a[class^='col-']");
        }
        else (objH3 = "");

        // Loop through H3 sub-headings in columns
        for (let i = 0; i < objH3.length; i++) {
            objH3[i].remove();
        }
        iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML.replaceAll('</figure>\n\t\t\t', '</figure>');

        // If no H3 and no text or lists
        if ( (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) && (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] p")) && (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] ul"))) {
            document.getElementById("cb_cols_shadows").disabled=true;
            document.getElementById("cb_cols_shadows").checked=false;
        }
        document.getElementById("hyperlinks-h3").style.display="none";
        document.getElementById("hyperlinks-h3-underline").style.display="none";
        document.getElementById("cb_cols_links_h3").disabled=true;
        document.getElementById("cb_cols_links_h3").checked=false;

        const arg1 = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] h3 { color:";
        removeCSSTagPairs(arg1);
    }
}

/*
//////////////// COLUMN H3 HYPERLINKS ////////////////////
*/

document.querySelector("#cb_cols_links_h3").addEventListener("change", doColH3Hyperlink);

function doColH3Hyperlink() {

    const objAllCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
    let target;
    let col_no;

    if (iframe.contentWindow.document.querySelector(".flex-cols-2")) {
        col_no = "col-2-h3";
    }

    else if (iframe.contentWindow.document.querySelector(".flex-cols-3")) {
        col_no = "col-3-h3";
    }

    else if (iframe.contentWindow.document.querySelector(".flex-cols-4")) {
        col_no = "col-4-h3";
    }

    console.log("col_no: " + col_no);
    if (!document.querySelector("#cb_cols_links_h3").checked) {
        document.getElementById("hyperlinks-h3").style.display="none";
        document.getElementById("hyperlinks-h3-underline").style.display="none";
        document.getElementById("btn_cols_h3").disabled=false;

        for (let i = 0; i < (objAllCols.length); i++) {
            target = objAllCols[i].innerHTML;

            if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-2")) {
                objAllCols[i].innerHTML = target.replace(/(<a href=\"#\" class=\"col-2-h3\">)/igm, '<h3>').replace(/<\/a>/igm, '<\/h3>');
            }

            else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-3")) {
                objAllCols[i].innerHTML = target.replace(/(<a href=\"#\" class=\"col-3-h3\">)/igm, '<h3>').replace(/<\/a>/igm, '<\/h3>');
            }
            else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-4")) {
                objAllCols[i].innerHTML = target.replace(/(<a href=\"#\" class=\"col-4-h3\">)/igm, '<h3>').replace(/<\/a>/igm, '<\/h3>');
            }
        }
    }

    else {
        document.getElementById("hyperlinks-h3").style.display="flex";
        document.getElementById("hyperlinks-h3-underline").style.display="flex";
        document.getElementById("btn_cols_h3").disabled=true;

        for (let i = 0; i < (objAllCols.length); i++) {
            target = objAllCols[i].innerHTML;

            if (iframe.contentWindow.document.querySelector(".flex-cols-2")) {
                objAllCols[i].innerHTML = target.replace(/(<h3>)/igm, '<a href=\"#\" class=\"col-2-h3\">').replace(/<\/h3>/igm, '<\/a>');
            }

            else if (iframe.contentWindow.document.querySelector(".flex-cols-3")) {
                objAllCols[i].innerHTML = target.replace(/(<h3>)/igm, '<a href=\"#\" class=\"col-3-h3\">').replace(/<\/h3>/igm, '<\/a>');
            }

            else if (iframe.contentWindow.document.querySelector(".flex-cols-4")) {
                objAllCols[i].innerHTML = target.replace(/(<h3>)/igm, '<a href=\"#\" class=\"col-4-h3\">').replace(/<\/h3>/igm, '<\/a>');
            }
        }
     }
}

/*
//////////////// COLUMN PARAGRAPHS OR LISTS ////////////////////
*/

document.querySelector("#dd_cols_text").addEventListener("change", doColsText);

function doColsText() {

    let opt = document.querySelector("#dd_cols_text").value;
    const arrContent = [];
    let arrContentLoop = [];

    // remove
    if (opt==="0") {
        document.querySelector("#btn_cols_text").disabled=true;
        document.getElementById("not-paragraphs").style.display ="none";
        document.getElementById("fa-icons").style.display ="none";
        document.getElementById("dd_cols_list_marker").value="0";
        document.getElementById("fa-circle-check").checked=true;
        removeText();
    }

    // paragraphs
    else if (opt==="1") {
        document.querySelector("#btn_cols_text").disabled=false;
        removeText();

        // count column blocks
        const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");

        let arrContent = []
        let arrContentLoop = []

        // ======== do col-2 layouts

        if (iframe.contentWindow.document.querySelector(".flex-cols-2")) {

            // populate array
            for (let i = 0; i < content_paras_col_3.length-1; i++) {
                arrContent[i] = content_paras_col_3[i];
            }


            if (objCols.length === 2) {
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentLoop[i] = arrContent[i];
                }
            }

            else if (objCols.length === 4) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
            }

            else if (objCols.length === 6) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(3).fill(arrContentTemp));
            }
        }

        // ======== do col-3 layouts

        if (iframe.contentWindow.document.querySelector(".flex-cols-3")) {

            // populate array
            for (let i = 0; i < content_paras_col_3.length; i++) {
                arrContent[i] = content_paras_col_3[i];
            }

            if (objCols.length === 3) {
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentLoop[i] = arrContent[i];
                }
            }

            else if (objCols.length === 6) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
            }

            else if (objCols.length === 9) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(3).fill(arrContentTemp));
            }
        }

        // ======== do col-4 layouts

        if (iframe.contentWindow.document.querySelector(".flex-cols-4")) {

            // populate array
            for (let i = 0; i < content_paras_col_4.length; i++) {
                arrContent[i] = content_paras_col_4[i];
            }

            if (objCols.length === 4) {
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentLoop[i] = arrContent[i];
                }
            }

            else if (objCols.length === 8) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
            }

            else if (objCols.length === 12) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(4).fill(arrContentTemp));
            }
        }

        // No buttons
        // Append at end of column
        if (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] a.btn")) {
            const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
            let el_col;
            let el_col_temp;
            for (let i = 0; i < objCols.length; i++) {
                el_col = objCols[i];
                el_col_temp = arrContentLoop[i];
                el_col.innerHTML = el_col.innerHTML + el_col_temp;
            }
        }
        else {
        // Buttons
        // Insert before buttons

            if (iframe.contentWindow.document.querySelector('flex-cols-2')) {
                let objButtons = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 .container-btn");
                let el_button;
                for (let i = 0; i < objButtons.length; i++) {
                    el_button = objButtons[i];
                    el_button.insertAdjacentHTML("beforebegin", arrContentLoop[i]);
                }
            }
            else {
                let objButtons = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] a.btn");
                let el_button;
                for (let i = 0; i < objButtons.length; i++) {
                    el_button = objButtons[i];
                    el_button.insertAdjacentHTML("beforebegin", arrContentLoop[i]);
                }
            }
        }

        document.getElementById("cb_cols_shadows").disabled=false;
        document.getElementById("cb_cols_shadows").checked=false;
        document.getElementById("not-paragraphs").style.display ="none";
        document.getElementById("fa-icons").style.display ="none";
        document.getElementById("dd_cols_list_marker").value="0";
        document.getElementById("fa-circle-check").checked=true;
    }

    // lists
    else if (opt==="2") {
        removeText();
        document.querySelector("#btn_cols_text").disabled=false;

        // count column blocks
        const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");


        // ======== do col-2 layouts
        if (iframe.contentWindow.document.querySelector(".flex-cols-2")) {

            // populate array
            for (let i = 0; i < content_list_col_3.length-1; i++) {
                arrContent[i] = content_list_col_3[i];
            }

            if (objCols.length === 2) {
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentLoop[i] = arrContent[i];
                }
            }

            else if (objCols.length === 4) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
            }

            else if (objCols.length === 6) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(3).fill(arrContentTemp));
            }
        }

        // ======== do col-3 layouts
        else if (iframe.contentWindow.document.querySelector(".flex-cols-3")) {

            // populate array
            for (let i = 0; i < content_list_col_3.length; i++) {
                arrContent[i] = content_list_col_3[i];
            }

            if (objCols.length === 3) {
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentLoop[i] = arrContent[i];
                }
            }

            else if (objCols.length === 6) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
            }

            else if (objCols.length === 9) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(3).fill(arrContentTemp));
            }
        }


        // ======== do col-4 layouts

        else if (iframe.contentWindow.document.querySelector(".flex-cols-4")) {

            // populate array
            for (let i = 0; i < content_list_col_4.length; i++) {
                arrContent[i] = content_list_col_4[i];
            }

            if (objCols.length === 4) {
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentLoop[i] = arrContent[i];
                }
            }

            else if (objCols.length === 8) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
            }

            else if (objCols.length === 12) {
                const arrContentTemp = [];
                for (let i = 0; i < (arrContent.length); i++) {
                    arrContentTemp[i] = arrContent[i];
                }
                arrContentLoop = [].concat(...Array(4).fill(arrContentTemp));
            }
        }

        // No buttons
        // Append at end of column
        if (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] a.btn")) {
            const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
            let el_col;
            let el_col_temp;
            for (let i = 0; i < objCols.length; i++) {
                el_col = objCols[i];
                el_col_temp = arrContentLoop[i];
                el_col.innerHTML = el_col.innerHTML + el_col_temp;
            }
        }
        else {
            // Buttons
            // Insert before buttons
            if (iframe.contentWindow.document.querySelector('.flex-cols-2')) {
                let objButtons = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 .container-btn");
                let el_button;
                for (let i = 0; i < objButtons.length; i++) {
                    el_button = objButtons[i];
                    el_button.insertAdjacentHTML("beforebegin", arrContentLoop[i]);
                }
            }
            else {
                let objButtons = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] a.btn");
                let el_button;
                for (let i = 0; i < objButtons.length; i++) {
                    el_button = objButtons[i];
                    el_button.insertAdjacentHTML("beforebegin", arrContentLoop[i]);
                }
            }
        }

        document.getElementById("dd_cols_list_marker").disabled=false;
        document.getElementById("dd_cols_list_marker").value="0";
        document.getElementById("btn_cols_list_marker").disabled=false;
        document.getElementById("cb_cols_shadows").disabled=false;
        document.getElementById("cb_cols_shadows").checked=false;
        document.getElementById("not-paragraphs").style.display ="flex";
        document.getElementById("fa-icons").style.display ="none";
        document.getElementById("fa-circle-check").checked=true;
    }
}

function removeText() {
    const el_para = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] p");
    for (var i = 0 ; i < el_para.length ; i++) {
      el_para[i].remove();
    }
    const el_bullet = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] li");
    for (var i = 0 ; i < el_bullet.length ; i++) {
        el_bullet[i].remove();
    }
    const el_list = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] ul");
    for (var i = 0 ; i < el_list.length ; i++) {
        el_list[i].remove();
    }

    if (!iframe.contentWindow.document.querySelectorAll("flex-cols-2")) {
        enableColButtons()
    }

    document.getElementById("dd_cols_list_marker").disabled=true;
    document.getElementById("dd_cols_list_marker").value="0";
    document.getElementById("btn_cols_list_marker").disabled=true;

    // If no H3 and no text
    if ( (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) && (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] p")) && (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] ul"))) {
        document.getElementById("cb_cols_shadows").disabled=true;
        document.getElementById("cb_cols_shadows").checked=false;
    }
    const arg1 = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] p { color:";
    const arg2 = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] li { color:";
    const arg3 = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] li::marker";
    removeCSSTagPairs(arg1,arg2,arg3);
}

/*
//////////////// COLUMN LIST MARKER TYPES ////////////////////
*/

document.querySelector("#dd_cols_list_marker").addEventListener("change", doListMarker);

function doListMarker() {

    let opt = document.querySelector("#dd_cols_list_marker").value;
    let objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
    let el_col;

    // Regular
    if (opt==="0") {
        // Test for Font Awesome
        if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] ul.fa-ul") ) {
            // Loop through spans in list items and remove italic nodes
            let objListSpans = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] ul li span");

            for (let i = 0; i < objListSpans.length; i++) {
                objListSpans[i].firstChild.remove();
            }
            // Loop through list items and remove spans
            let objListItems = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] ul li");

            for (let i = 0; i < objListItems.length; i++) {
                objListItems[i].firstChild.remove();
            }

            let objAllCols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");

            objAllCols.innerHTML = objAllCols.innerHTML.replaceAll("<ul class=\"fa-ul\">", "<ul>");
        }
        document.getElementById("fa-icons").style.display ="none";
        document.getElementById("fa-circle-check").checked=true;
    }

    // Font Awesome
    else if (opt==="1") {
        // Test for regular list
        if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] ul:not(.fa-ul)") ) {
            // Loop through columns
            for (let i = 0; i < objCols.length; i++) {
                el_col = objCols[i];
                el_col.innerHTML = el_col.innerHTML.replaceAll("<ul>", "<ul class=\"fa-ul\">");
                el_col.innerHTML = el_col.innerHTML.replaceAll("<li>", "<li><span class=\"fa-li\"><i class=\"fa-solid fa-circle-check\"><\/i><\/span>");
            }
        }
        document.getElementById("fa-icons").style.display ="flex";
        document.getElementById("fa-circle-check").checked=true;
    }
}

/*
//////////////// COLUMN LIST MARKER COLORS ////////////////////
*/

document.querySelector("#form_switch_fa_icons").addEventListener("change", chooseListMarker);

function chooseListMarker() {
    const rbs = document.querySelectorAll("input[name='switch_fa_icons']");
    let objIcons = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] ul li span");
    let node;
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    for (let i = 0; i < objIcons.length; i++) {
        objIcons[i].firstChild.remove();
        node = document.createElement("i");
        node.classList.add("fa-solid");
        node.classList.add(selectedValue);
        objIcons[i].appendChild(node);
    }
}

/*
//////////////// COLUMNS BACKGROUND ///////////////
*/

document.querySelector("#cb_cols_bg").addEventListener("change", doColBg);

function doColBg() {

    const el_cols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']")

    if (!document.getElementById("cb_cols_bg").checked) {
        el_cols.classList.remove("cols-background");
        document.getElementById("btn_cols_bg").disabled=true;

        // if no shadows AND also border
        if ( (!document.getElementById("cb_cols_shadows").checked) && (!document.getElementById("cb_cols_borders").checked) ) {
            // remove padding
            el_cols.classList.remove("cols-padding");
            // remove and disable soft corners
            el_cols.classList.remove("cols-corners-soft");
            document.getElementById("cb_cols_corners_soft").disabled=true;
            document.getElementById("cb_cols_corners_soft").checked=false;
        }

        else if ((document.getElementById("cb_cols_shadows").checked) || (!document.getElementById("cb_cols_borders").checked)) {
            document.getElementById("cb_cols_corners_soft").disabled=false;
        }

        const arg1 = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] { background-color:";
        removeCSSTagPairs(arg1);
        disableFigsPadding();
    }

    else {
        el_cols.classList.add("cols-background");
        el_cols.classList.add("cols-padding");
        // background color paintbrush button enabled
        document.getElementById("btn_cols_bg").disabled=false;
        // soft corners enabled
        document.getElementById("cb_cols_corners_soft").disabled=false;
        enableFigsPadding();
    }
}


/*
//////////////// COLUMNS CORNERS ///////////////
*/

document.querySelector("#cb_cols_corners_soft").addEventListener("change", doColCorners);

function doColCorners() {
    const el_cols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']")

    if (!document.getElementById("cb_cols_corners_soft").checked) {
        el_cols.classList.remove("cols-corners-soft");
        disableColCorners();
    }

    else {
        el_cols.classList.add("cols-corners-soft");
        enableColCorners();
    }
}

function enableColCorners() {
    document.getElementById("cols-corners-radius-1").disabled=false;
    document.getElementById("cols-corners-radius-2").disabled=false;

    if (iframe.contentWindow.document.querySelector(".flex-cols-4")) {
        document.getElementById("cols-corners-radius-1").checked=true;
    }
    else {
        document.getElementById("cols-corners-radius-1").checked=false;
    }

    if (iframe.contentWindow.document.querySelector(".flex-cols-3")) {
        document.getElementById("cols-corners-radius-2").checked=true;
    }
    else {
        document.getElementById("cols-corners-radius-2").checked=false;
    }

    if (iframe.contentWindow.document.querySelector(".flex-cols-2")) {
        document.getElementById("cols-corners-radius-3").checked=true;
    }
    else {
        document.getElementById("cols-corners-radius-3").checked=false;
    }
    document.getElementById("cols-corners-radius-4").checked=false;
    document.getElementById("cols-corners-radius-1").disabled=false;
    document.getElementById("cols-corners-radius-2").disabled=false;
    document.getElementById("cols-corners-radius-3").disabled=false;
    document.getElementById("cols-corners-radius-4").disabled=false;
    document.querySelector("span.corners-radius-px").style.color ='#fff';
}

function disableColCorners() {
    document.getElementById("cols-corners-radius-1").disabled=true;
    document.getElementById("cols-corners-radius-1").checked=false;
    document.getElementById("cols-corners-radius-2").disabled=true;
    document.getElementById("cols-corners-radius-2").checked=false;
    document.getElementById("cols-corners-radius-3").disabled=true;
    document.getElementById("cols-corners-radius-3").checked=false;
    document.getElementById("cols-corners-radius-4").disabled=true;
    document.getElementById("cols-corners-radius-4").checked=false;
    document.querySelector("span.corners-radius-px").style.color ='var(--gray-500)';

    const objAllCols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");

    objAllCols.classList.remove("rad-10px");
    objAllCols.classList.remove("rad-30px");
    objAllCols.classList.remove("rad-40px");


}

/*
//////////////// COLUMNS CORNERS WIDTH ///////////////
*/

document.querySelector("#form-cols-corners-radius").addEventListener("change", doColCornersRadius);

function doColCornersRadius() {

    const rbs = document.querySelectorAll("input[name='cols-corners-radius']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    const objAllCols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");

    objAllCols.classList.remove("rad-10px");
    objAllCols.classList.remove("rad-30px");
    objAllCols.classList.remove("rad-40px");

    if (selectedValue==="1") {
        objAllCols.classList.add("rad-10px");
    }

    else if (selectedValue==="3") {
        objAllCols.classList.add("rad-30px");
    }

    else if (selectedValue==="4") {
        objAllCols.classList.add("rad-40px");
    }
}


/*
//////////////// COLUMNS SHADOWS ///////////////
*/

document.querySelector("#cb_cols_shadows").addEventListener("change", doColShadows);

function doColShadows() {

    const el_cols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']")

    if (!document.getElementById("cb_cols_shadows").checked) {
        el_cols.classList.remove("cols-shadows");
        document.getElementById("btn_cols_shadows_color").disabled=true;
        document.getElementById("btn_cols_shadows_color").checked=false;

        document.getElementById("cols_shadows_type-1").disabled=true;
        document.getElementById("cols_shadows_type-1").checked=false;
        document.getElementById("cols_shadows_type-2").disabled=true;
        document.getElementById("cols_shadows_type-2").checked=false;

        // if no background AND no border AND no shadows

        if ( (!document.getElementById("cb_cols_bg").checked) && (!document.getElementById("cb_cols_borders").checked)  ) {
            // remove padding
            el_cols.classList.remove("cols-padding");
            // remove and disable soft corners
            // el_cols.classList.remove("cols-corners-soft");
            // document.getElementById("cb_cols_corners_soft").disabled=true;
            // document.getElementById("cb_cols_corners_soft").checked=false;
        }
        disableFigsPadding();

        if ( (document.getElementById("cb_cols_bg").checked) || (document.getElementById("cb_cols_borders").checked) ) {
            console.log("Either background or borders selected")
            document.getElementById("cb_cols_corners_soft").disabled=false;
        }

        else {
            document.getElementById("cb_cols_corners_soft").disabled=true;
        }

    }

    else {
        el_cols.classList.add("cols-padding");
        el_cols.classList.add("cols-shadows");
        // el_cols.classList.add("cols-corners-soft");
        // document.getElementById("cb_cols_corners_soft").disabled=false;
        // document.getElementById("cb_cols_corners_soft").checked=true;
        document.getElementById("btn_cols_shadows_color").disabled=false;
        document.getElementById("cols_shadows_type-1").disabled=false;
        document.getElementById("cols_shadows_type-1").checked=true;
        document.getElementById("cols_shadows_type-2").disabled=false;
        document.getElementById("cols_shadows_type-2").checked=false;
        document.getElementById("cb_cols_corners_soft").disabled=false;
        enableFigsPadding();
    }
}

/*
//////////////// COLUMNS SHADOWS TYPE ///////////////
*/

document.querySelector("#form_cols_shadows_type").addEventListener("change", doColShadowsType);

function doColShadowsType() {

    const rbs = document.querySelectorAll("input[name='cols-shadows-type']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    const objAllCols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] > div[class^='col-']");

    const compStyles =  window.getComputedStyle(objAllCols);

    let boxShadow = compStyles.getPropertyValue('box-shadow');

    if (selectedValue==="1") {
        boxShadow = boxShadow.replace("0.9", "0.4");
        boxShadow = boxShadow.replace("16px 16px 0px 0px", "16px 16px 16px 0px");
        boxShadow = boxShadow.replace("14px 14px 0px 0px", "14px 14px 14px 0px");
        boxShadow = boxShadow.replace("7px 7px 0px 0px", "7px 7px 7px 0px");
    }

    else if (selectedValue==="2") {
        boxShadow = boxShadow.replace("0.4", "0.9");
        boxShadow = boxShadow.replace("16px 16px 16px 0px", "16px 16px 0px 0px");
        boxShadow = boxShadow.replace("14px 14px 14px 0px", "14px 14px 0px 0px");
        boxShadow = boxShadow.replace("7px 7px 7px 0px", "7px 7px 0px 0px");
    }

    // Get number of columns
    let colNumber;
    if (iframe.contentWindow.document.querySelector(".flex-cols-2")) {
        colNumber = ".col-2";
    }
    else if (iframe.contentWindow.document.querySelector(".flex-cols-3")) {
        colNumber = ".col-3";
    }
    else if (iframe.contentWindow.document.querySelector(".flex-cols-4")) {
        colNumber = ".col-4";
    }

    const newStyle = sectionClassName+sectionTheme+" .cols-shadows "+colNumber+" { box-shadow: "+boxShadow+ "}\n";
    const sub_string = "cols-shadows";

    doUpdateArray(sub_string,newStyle);
}



/*
//////////////// COLUMNS BORDERS ///////////////
*/

document.querySelector("#cb_cols_borders").addEventListener("change", doColBorders);

function doColBorders() {
    const el_cols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']")

    if (!document.getElementById("cb_cols_borders").checked) {
        document.getElementById("btn_cols_borders_color").disabled=true;
        el_cols.classList.remove("cols-borders-width-1");
        el_cols.classList.remove("cols-borders-width-2");
        el_cols.classList.remove("cols-borders-width-3");
        el_cols.classList.remove("cols-borders-width-4");
        document.getElementById("cols-borders-width-1").disabled=true;
        document.getElementById("cols-borders-width-2").disabled=true;
        document.getElementById("cols-borders-width-3").disabled=true;
        document.getElementById("cols-borders-width-4").disabled=true;
        document.getElementById("cols-borders-width-1").checked=false;
        document.getElementById("cols-borders-width-2").checked=false;
        document.getElementById("cols-borders-width-3").checked=false;
        document.getElementById("cols-borders-width-4").checked=false;
        document.querySelector("span.borders-width-px").style.color ='var(--gray-500)';

        // if no background AND also no shadows
        if ( (!document.getElementById("cb_cols_bg").checked) && (!document.getElementById("cb_cols_shadows").checked) ) {
            // remove padding
            el_cols.classList.remove("cols-padding");
            // remove and disable soft corners
            el_cols.classList.remove("cols-corners-soft");
            document.getElementById("cb_cols_corners_soft").disabled=true;
            document.getElementById("cb_cols_corners_soft").checked=false;
            disableFigsPadding();
        }
    }

    else {
        el_cols.classList.add("cols-padding");
        el_cols.classList.add("cols-borders-width-1");
        document.getElementById("cb_cols_corners_soft").disabled=false;
        document.getElementById("cb_cols_corners_soft").checked;
        document.getElementById("cb_cols_borders").disabled=false;
        document.getElementById("cols-borders-width-1").disabled=false;
        document.getElementById("cols-borders-width-1").checked=true;
        document.getElementById("cols-borders-width-2").disabled=false;
        document.getElementById("cols-borders-width-3").disabled=false;
        document.getElementById("cols-borders-width-4").disabled=false;
        document.getElementById("btn_cols_borders_color").disabled=false;
        document.querySelector("span.borders-width-px").style.color ='#fff';
        enableFigsPadding();
    }
}

function enableFigsPadding() {
    document.getElementById("cb_photos_padding").disabled=false;
    document.getElementById("cb_photos_padding").checked=false;
    document.getElementById("cb_trans_padding").disabled=false;
    document.getElementById("cb_trans_padding").checked=false;
    document.getElementById("cb_drawings_padding").disabled=false;
    document.getElementById("cb_drawings_padding").checked=false;
    document.getElementById("cb_videos_padding").disabled=false;
    document.getElementById("cb_videos_padding").checked=false;
}

function disableFigsPadding() {
    document.getElementById("cb_photos_padding").disabled=true;
    document.getElementById("cb_photos_padding").checked=false;
    document.getElementById("cb_trans_padding").disabled=true;
    document.getElementById("cb_trans_padding").checked=false;
    document.getElementById("cb_drawings_padding").disabled=true;
    document.getElementById("cb_drawings_padding").checked=false;
    document.getElementById("cb_videos_padding").disabled=true;
    document.getElementById("cb_videos_padding").checked=false;
}


/*
//////////////// COLUMNS BORDERS WIDTH ///////////////
*/

document.querySelector("#form-cols-borders-width").addEventListener("change", doColBordersWidth);

function doColBordersWidth() {

    const rbs = document.querySelectorAll("input[name='cols-borders-width']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    const objAllCols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");

    objAllCols.classList.remove("cols-borders-width-1");
    objAllCols.classList.remove("cols-borders-width-2");
    objAllCols.classList.remove("cols-borders-width-3");
    objAllCols.classList.remove("cols-borders-width-4");

    if (selectedValue==="1") {
        objAllCols.classList.add("cols-borders-width-1");
    }

    else if (selectedValue==="2") {
        objAllCols.classList.add("cols-borders-width-2");
    }

    else if (selectedValue==="3") {
        objAllCols.classList.add("cols-borders-width-3");
    }

    else if (selectedValue==="4") {
        objAllCols.classList.add("cols-borders-width-4");
    }
}


function enableColButtons() {
    document.getElementById("btn_cols_text_passive").disabled=false;
    document.getElementById("btn_cols_text_active").disabled=false;
    document.getElementById("btn_cols_bg_passive").disabled=false;
    document.getElementById("btn_cols_bg_active").disabled=false;
    document.getElementById("btn_cols_border_passive").disabled=false;
    document.getElementById("btn_cols_border_active").disabled=false;
    document.getElementById("dd_buttons_type").disabled=false;
    document.getElementById("dd_buttons_type").value="0";
    document.getElementById("dd_buttons_shape").value="0";
    document.getElementById("dd_buttons_shape").disabled=false;
    document.getElementById("dd_buttons_size").disabled=false;
    if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-4")) {
        document.getElementById("dd_buttons_size").value="0";
    }
    else {
        document.getElementById("dd_buttons_size").value="1";
    }
    document.getElementById("rb_btns_icons_right").checked=true;
    document.getElementById("rb_btns_icons_left").disabled=false;
    document.getElementById("rb_btns_icons_right").disabled=false;
    document.getElementById("rd-btns-icons-none").disabled=false;
    document.getElementById("cb_buttons_width").disabled=false;
    document.getElementById("cb_buttons_width").checked=false;
    document.getElementById("cb_buttons_shadow").disabled=false;
    document.getElementById("cb_buttons_shadow").checked=false;
    document.getElementById("cb_buttons_uppercase").disabled=false;
    document.getElementById("cb_buttons_uppercase").checked=false;
}

function disableColButtons() {
    document.getElementById("btn_cols_text_passive").disabled=true;
    document.getElementById("btn_cols_text_active").disabled=true;
    document.getElementById("btn_cols_bg_passive").disabled=true;
    document.getElementById("btn_cols_bg_active").disabled=true;
    document.getElementById("btn_cols_border_passive").disabled=true;
    document.getElementById("btn_cols_border_active").disabled=true;
    document.getElementById("rb_btns_icons_left").checked=false;
    document.getElementById("rb_btns_icons_right").checked=false;
    document.getElementById("rd-btns-icons-none").checked=false;
    document.getElementById("rb_btns_icons_left").disabled=true;
    document.getElementById("rb_btns_icons_right").disabled=true;
    document.getElementById("rd-btns-icons-none").disabled=true;
    document.getElementById("dd_buttons_type").disabled=true;
    document.getElementById("dd_buttons_type").value="0";
    document.getElementById("dd_buttons_shape").value="0";
    document.getElementById("dd_buttons_shape").disabled=true;
    document.getElementById("dd_buttons_size").value="1";
    document.getElementById("dd_buttons_size").disabled=true;
    document.getElementById("cb_buttons_width").disabled=true;
    document.getElementById("cb_buttons_width").checked=false;
    document.getElementById("cb_buttons_shadow").disabled=true;
    document.getElementById("cb_buttons_shadow").checked=false;
    document.getElementById("cb_buttons_uppercase").disabled=true;
    document.getElementById("cb_buttons_uppercase").checked=false;
}
