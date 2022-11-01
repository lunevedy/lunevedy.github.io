document.querySelector("#picker-box").addEventListener('click', handleLabelClick);

    function handleLabelClick(event) {
        event.stopPropagation();
        const label = event.target.closest("label");
        if (label && this.contains(label)) {
            // Ignore this click
            return;
        }
        const span = event.target.closest("span");
        if (span && this.contains(span)) {
            // Ignore this click
            return;
        }
        const rbs = document.querySelectorAll("input[name='picker-radio']");
        let color_code;

        for (const rb of rbs) {
            if (rb.checked) {
                color_code = rb.value;
                break;
            }
        }

        /* Section background */
        if (btn_id === "btn_section_bg") {
            newStyle = "header.hero-block  { background-color: var("+color_code+") }\n";
            sub_string = "header.hero-block { background-color: ";
            // Used for checking if cols-padding necessary
            sectionBg = "var("+color_code+")";
            console.log("New section background: "+sectionBg);
            console.log("Current column background: "+colsBg);
            console.log("sectionBg: "+sectionBg);
            doUpdateArray(sub_string,newStyle);
        }

        /* badge text */
        else if (btn_id === "btn_badge_text") {
            newStyle = "header.hero-block .badge { color: var("+color_code+") }\n";
            sub_string = ".badge { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* badge background */
        else if (btn_id === "btn_badge_bg") {
            newStyle = "header.hero-block .badge { background-color: var("+color_code+") }\n";
            sub_string = ".badge { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* h1 main heading */
        else if (btn_id === "btn_h1_text") {
            newStyle = "header.hero-block h1 { color: var("+color_code+") }\n";
            sub_string = "h1 { color:"
            doUpdateArray(sub_string,newStyle);
        }

        /* h1 main heading highlight text */
        else if (btn_id === "btn_h1_highlight") {
            newStyle = "header.hero-block h1 span.highlight { color: var("+color_code+") }\n";
            sub_string = "h1 span.highlight";
            doUpdateArray(sub_string,newStyle);
        }

        /* h1 main heading bottom border */
        else if (btn_id === "btn_h1_border") {
            newStyle = "header.hero-block h1.heading-underline::after { background-color: var("+color_code+") }\n";
            sub_string = "h1.heading-underline";
            doUpdateArray(sub_string,newStyle);
        }

        /* h2 sub-heading */
        else if (btn_id === "btn_h2_text") {
            newStyle = "header.hero-block h2 { color: var("+color_code+") }\n";
            sub_string = "h2 { color:"
            doUpdateArray(sub_string,newStyle);
        }

        /* === Buttons === */

        /* Text colour: passive */
        else if (btn_id === "btn_cols_text_passive") {
            // Get class of buttons
            newStyle = ".container-btn a.btn:link,\n"+".container-btn a.btn:visited { color: var("+color_code+") }\n\n";
            sub_string = "a.btn:visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Text colour: active */
        else if (btn_id === "btn_cols_text_active") {
            newStyle = ".container-btn a.btn:focus,\n"+".container-btn a.btn:hover,\n"+".container-btn a.btn:active { color: var("+color_code+") }\n\n";
            sub_string = "a.btn:active { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: passive */
        else if (btn_id === "btn_cols_bg_passive") {
            newStyle = ".container-btn a.btn:link,\n"+".container-btn a.btn:visited { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:visited { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: active */
        else if (btn_id === "btn_cols_bg_active") {
            newStyle = ".container-btn a.btn:focus,\n"+".container-btn a.btn:hover,\n"+".container-btn a.btn:active { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:active { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: passive */
        else if (btn_id === "btn_cols_border_passive") {
            newStyle = ".container-btn a.btn:link,\n"+".container-btn a.btn:visited { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:visited { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: active */
        else if (btn_id === "btn_cols_border_active") {
            newStyle = ".container-btn a.btn:focus,\n"+".container-btn a.btn:hover,\n"+".container-btn a.btn:active { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:active { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Icons colour */
        else if (btn_id === "btn_icon_color") {
            newStyle =  ".container-btn div[class^='flex-cols-'] div[class^='col-'] figure.icon { color: var("+color_code+") }\n";
            sub_string = "figure.icon";
            doUpdateArray(sub_string,newStyle);
        }

        /* Photos overlay textbox color */
        else if (btn_id === "btn_cols_img_overlay_color_text") {
            newStyle =  ".container-btn div[class^='flex-cols-'] div[class^='col-'] figure .cols-img-textbox { color: var("+color_code+") }\n";
            sub_string = "figure.icon";
            doUpdateArray(sub_string,newStyle);
        }

        /* Photos overlay textbox background color */
        else if (btn_id === "btn_cols_img_overlay_color_bg") {
            newStyle =  ".container-btn div[class^='flex-cols-'] div[class^='col-'] figure .cols-img-textbox { background-color: var("+color_code+") }\n";
            sub_string = "figure.icon";
            doUpdateArray(sub_string,newStyle);
        }

        style = document.createElement('style');
        iframe.contentWindow.document.head.appendChild(style);
        style.appendChild(document.createTextNode(newStyle));
        enableCSS();
    }

    function doUpdateArray(sub_string,newStyle) {
        if ( arrCSS.some(e => e.includes(sub_string)) ) {
            const arrPos =arrCSS.findIndex(e => e.includes(sub_string));
            arrCSS.splice(arrPos, 1);
            arrCSS.push(newStyle);
        }
        else {
            arrCSS.push(newStyle);
        }
    }

