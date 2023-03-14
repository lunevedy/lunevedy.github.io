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

        for (const rb of rbs) {
            if (rb.checked) {
                color_code = rb.value;
                break;
            }
        }

        // Get section theme
        sectionTheme =  sessionStorage.getItem("sectionTheme");

        // Get number of columns
        let colNumber;

        if (iframe.contentWindow.document.querySelector(".flex-cols-3")) {
            colNumber = ".col-3";
        }

        else {
            colNumber = ".col-4";
        }

        /* Section background */
        if (btn_id === "btn_section_bg") {
            newStyle = sectionClassName+ " { background-color: var("+color_code+") }\n";
            sub_string = sectionClassName+ " { background-color: ";
        }

        /* .col-1 badge text */
        else if (btn_id === "btn_col_1_badge_text") {
            newStyle = sectionClassName+ " .col-1-badge { color: var("+color_code+") }\n";
            sub_string = "col-1-badge { color";
        }

        /* .col-1 badge background */
        else if (btn_id === "btn_col_1_badge_bg") {
            newStyle = sectionClassName+ " .col-1-badge { background-color: var("+color_code+") }\n";
            sub_string = "col-1-badge { background-color";
        }

        /* .col-1 h2 main heading */
        else if (btn_id === "btn_col_1_h2_text") {
            newStyle = sectionClassName+ " .col-1 h2 { color: var("+color_code+") }\n";
            sub_string = "col-1 h2 { color:"
        }

        /* .col-1 h2 main heading highlight text */
        else if (btn_id === "btn_col_1_h2_highlight") {
            newStyle = sectionClassName+ " .col-1 h2 span.highlight { color: var("+color_code+") }\n";
            sub_string = "col-1 h2 span.highlight";
        }

        /* .col-1 h2 main heading bottom border */
        else if (btn_id === "btn_col_1_h2_border") {
            newStyle = sectionClassName+ " .col-1 h2.heading-underline::after { background-color: var("+color_code+") }\n";
            sub_string = "heading-underline";
        }

        /* .col-1 h3 sub heading */
        else if (btn_id === "btn_col_1_h3_text") {
            newStyle = sectionClassName+ " .col-1 h3 { color: var("+color_code+") }\n";
            sub_string = "col-1 h3";
        }

        /* Column background */
        else if (btn_id === "btn_cols_bg") {
            newStyle = sectionClassName+sectionTheme+ " .cols-background "+colNumber +" { background-color: var("+color_code+") }\n";
            sub_string = sectionClassName+sectionTheme+ " .cols-background "+colNumber;

        }

        /* Columns badges: text */
        else if (btn_id === "btn_cols_badge_text") {
            newStyle = sectionClassName+" "+colNumber+" .badge { color: var("+color_code+") }\n";
            sub_string = ".badge { color: ";
        }

        /* Columns badges: background */
        else if (btn_id === "btn_cols_badge_bg") {
            newStyle = sectionClassName+" "+colNumber+" .badge { background-color: var("+color_code+") }\n";
            sub_string = ".badge { background-color: ";
        }

        /* Columns subheading */
        else if (btn_id === "btn_cols_h3") {
            newStyle = sectionClassName+" "+colNumber+" h3 { color: var("+color_code+") }\n";
            sub_string = sectionClassName+" "+colNumber+" h3 { color:";
        }

        /* Column text */
        else if (btn_id === "btn_cols_text") {
            newStyle = sectionClassName+" "+colNumber+" p { color: var("+color_code+") }\n" +sectionClassName+" "+colNumber+" li { color: var("+color_code+") }\n";
            sub_string = sectionClassName+" "+colNumber+" p { color: ";
        }

        /* List marker */
        else if (btn_id === "btn_cols_list_marker") {
            newStyle = sectionClassName+" "+colNumber+" li::marker,\n"+sectionClassName+" "+colNumber+" ul.fa-ul li span.fa-li i { color: var("+color_code+") }\n";
            sub_string = "li::marker";
        }

        /* Column borders: colour */
        else if (btn_id === "btn_cols_borders_color") {
            newStyle = sectionClassName+sectionTheme+" "+colNumber+" { border-color: var("+color_code+") }\n";
            sub_string = "{ border-color:"
        }

        /* Column shadows: colour */
        else if (btn_id === "btn_cols_shadows_color") {
            // get value of color code
            const styles = getComputedStyle(document.documentElement);
            let colorValue = styles.getPropertyValue(color_code);
            if (colorValue==="#000") { colorValue="#000000"}
            if (colorValue==="#fff") { colorValue="#ffffff"}
            // console.log("color_code:" +color_code);
            // console.log("colorValue:" +colorValue);

            const hex2rgba = (hex, alpha = 1) => {
                const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
                return `rgba(${r},${g},${b},${alpha})`;
            };

            const strRGB = hex2rgba(colorValue, 0.9);

            if (document.getElementById("cols_shadows_type-1").checked) {
                newStyle = sectionClassName+" .cols-shadows " +colNumber+" { box-shadow: "+strRGB+" 14px 14px 14px 0 }\n";
            }
            else if (document.getElementById("cols_shadows_type-2").checked) {
                newStyle = sectionClassName+" .cols-shadows " +colNumber+" { box-shadow: "+strRGB+" 14px 14px 0 0 }\n";
            }
            sub_string = "cols-shadows";
        }


        /* === Buttons === */

        /* Text colour: passive */
        else if (btn_id === "btn_cols_text_passive") {
            // Get class of buttons
            newStyle = sectionClassName+" a.btn:link,\n"+sectionClassName+" a.btn:visited { color: var("+color_code+") }\n\n";
            sub_string = "a.btn:visited { color";
        }

        /* Text colour: active */
        else if (btn_id === "btn_cols_text_active") {
            newStyle = sectionClassName+" a.btn:focus,\n"+sectionClassName+" a.btn:hover,\n"+sectionClassName+" a.btn:active { color: var("+color_code+") }\n\n";
            sub_string = "a.btn:active { color";
        }

        /* Background colour: passive */
        else if (btn_id === "btn_cols_bg_passive") {
            newStyle = sectionClassName+" a.btn:link,\n"+sectionClassName+" a.btn:visited { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:visited { background-color";
        }

        /* Background colour: active */
        else if (btn_id === "btn_cols_bg_active") {
            newStyle = sectionClassName+" a.btn:focus,\n"+sectionClassName+" a.btn:hover,\n"+sectionClassName+" a.btn:active { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:active { background-color";
        }

        /* Border colour: passive */
        else if (btn_id === "btn_cols_border_passive") {
            newStyle = sectionClassName+" a.btn:link,\n"+sectionClassName+" a.btn:visited { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:visited { border-color";
        }

        /* Border colour: active */
        else if (btn_id === "btn_cols_border_active") {
            newStyle = sectionClassName+" a.btn:focus,\n"+sectionClassName+" a.btn:hover,\n"+sectionClassName+" a.btn:active { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:active { border-color";
        }

        /* Icons colour */
        else if (btn_id === "btn_icon_color") {
            newStyle = sectionClassName+" div[class^='flex-cols-'] div[class^='col-'] figure.icon { color: var("+color_code+") }\n";
            sub_string = "figure.icon";
        }

        /* Photos overlay textbox color */
        else if (btn_id === "btn_cols_img_overlay_color_text") {
            newStyle = sectionClassName+" figure .cols-img-textbox { color: var("+color_code+") }\n";
            sub_string = ".cols-img-textbox { color:";
        }

        /* Photos overlay textbox background color */
        else if (btn_id === "btn_cols_img_overlay_color_bg") {
            newStyle = sectionClassName+" figure .cols-img-textbox { background-color: var("+color_code+") }\n";
            sub_string = ".cols-img-textbox { background-color:";
        }

        // col h3 hyperlinks
        else if (btn_id === "btn_cols_links_h3_text_passive") {
            if (iframe.contentWindow.document.querySelector(".flex-cols-3")) {
                newStyle = sectionClassName+" .flex-cols-3 .col-3 a.col-3-h3:link,\n"+sectionClassName+" .flex-cols-3 .col-3 a.col-3-h3:visited { color: var("+color_code+") }\n";
                console.log("newStyle: "+newStyle);
                sub_string = "a.col-3-h3:visited { color:";
            }
            else if (iframe.contentWindow.document.querySelector(".flex-cols-4")) {
                newStyle = sectionClassName+" .flex-cols-4 .col-4 a.col-4-h3:link,\n"+sectionClassName+" .flex-cols-4 .col-4 a.col-4-h3:visited { color: var("+color_code+") }\n";
                console.log("newStyle: "+newStyle);
                sub_string = "a.col-4-h3:visited { color:";
            }
        }

        else if (btn_id === "btn_cols_links_h3_text_active") {
            if (iframe.contentWindow.document.querySelector(".flex-cols-3")) {
                newStyle = sectionClassName+" .flex-cols-3 .col-3 a.col-3-h3:focus,\n"+sectionClassName+" .flex-cols-3 .col-3 a.col-3-h3:hover,\n"+sectionClassName+" .flex-cols-3 .col-3 a.col-3-h3:active { color: var("+color_code+") }\n";
                console.log("newStyle: "+newStyle);
                sub_string = "a.col-3-h3:focus { color:";
            }

            else if (iframe.contentWindow.document.querySelector(".flex-cols-4")) {
                newStyle = sectionClassName+" .flex-cols-4 .col-4 a.col-4-h3:focus,\n"+sectionClassName+" .flex-cols-4 .col-4 a.col-4-h3:hover,\n"+sectionClassName+" .flex-cols-4 .col-4 a.col-4-h3:active { color: var("+color_code+") }\n";
                console.log("newStyle: "+newStyle);
                sub_string = "a.col-4-h3:focus { color:";
            }
        }

        else if (btn_id === "btn_cols_links_h3_underlines_passive") {
            newStyle = sectionClassName+" div[class^='col-'] a[class^='col-']:link, "+sectionClassName+" div[class^='col-'] a[class^='col-']:visited { text-decoration-color: var("+color_code+") }\n";
            sub_string = "sectionClassName+\ div[class^='col-'] a[class^='col-']:link, \"+sectionClassName+\" div[class^='col-'] a[class^='col-']:visited { text-decoration-color: var(\"+color_code+\") }";
        }

        else if (btn_id === "btn_cols_links_h3_underlines_active") {
            newStyle = sectionClassName+" div[class^='col-'] a[class^='col-']:focus, "+sectionClassName+" div[class^='col-'] a[class^='col-']:hover, "+sectionClassName+" div[class^='col-'] a[class^='col-']:active { text-decoration-color: var("+color_code+") }\n";
            sub_string = "sectionClassName+\" div[class^='col-'] a[class^='col-']:focus, \"+sectionClassName+\" div[class^='col-'] a[class^='col-']:hover, \"+sectionClassName+\" div[class^='col-'] a[class^='col-']:active { text-decoration-color: var(\"+color_code+\") }";
        }

        doUpdateArray(sub_string,newStyle);
    }