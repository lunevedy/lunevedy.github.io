
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

        headerTheme = sessionStorage.getItem("headerTheme");

        /* header background */
        if (btn_id === "btn_header_bg") {
            newStyle = headerTheme+" { background-color: var("+color_code+") }\n";
            sub_string = headerTheme+" { background-color: ";
        }

        /* badge text */
        else if (btn_id === "btn_badge_text") {
            newStyle = headerTheme+" .badge { color: var("+color_code+") }\n";
            sub_string = ".badge { color";
        }

        /* badge background */
        else if (btn_id === "btn_badge_bg") {
            newStyle = headerTheme+" .badge { background-color: var("+color_code+") }\n";
            sub_string = ".badge { background-color";
        }

        /* h2 main heading */
        else if (btn_id === "btn_h1_text") {
            newStyle = headerTheme+" h1 { color: var("+color_code+") }\n";
            sub_string = "h2 { color:"
        }

        /* h2 main heading highlight text */
        else if (btn_id === "btn_h1_highlight") {
            newStyle = headerTheme+" .col-2.col-text h2 span.highlight { color: var("+color_code+") }\n";
            sub_string = "h2 span.highlight";
        }

        /* h2 main heading bottom border */
        else if (btn_id === "btn_h1_border") {
            newStyle = headerTheme+" .col-2.col-text h1.heading-underline::after { background-color: var("+color_code+") }\n";
            sub_string = "h1.heading-underline";
        }


        /* Section paragraphs text */
        else if (btn_id === "btn_para_text") {
            newStyle = headerTheme+" .col-2.col-text p { color: var("+color_code+") }\n";
            sub_string = " p {";
        }

        /* Section paragraphs text */
        else if (btn_id === "btn_list_text") {
            newStyle = headerTheme+" .col-2.col-text ul li { color: var("+color_code+") }\n";
            sub_string = " ul li {";
        }

        /* List marker */
        else if (btn_id === "btn_list_marker") {
            newStyle = headerTheme+" .col-2.col-text li::marker, "+headerTheme+" ul.fa-ul li span.fa-li i { color: var("+color_code+") }\n";
            sub_string = "li::marker";
        }

        /* === Buttons === */

        /* Text colour: passive */
        else if (btn_id === "btn_cols_text_passive_1") {
            // Get class of buttons
            newStyle = headerTheme+" .container-btn a.btn:nth-child(1):link,\n"+headerTheme+" .container-btn a.btn:nth-child(1):visited { color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):visited { color";
        }

        /* Text colour: active */
        else if (btn_id === "btn_cols_text_active_1") {
            newStyle = headerTheme+" .container-btn a.btn:nth-child(1):focus,\n"+headerTheme+" .container-btn a.btn:nth-child(1):hover,\n"+headerTheme+" .container-btn a.btn:nth-child(1):active { color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):active { color";
        }

        /* Background colour: passive */
        else if (btn_id === "btn_cols_bg_passive_1") {
            newStyle = headerTheme+" .container-btn a.btn:nth-child(1):link,\n"+headerTheme+" .container-btn a.btn:nth-child(1):visited { background-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):visited { background-color";
        }

        /* Background colour: active */
        else if (btn_id === "btn_cols_bg_active_1") {
            newStyle = headerTheme+" .container-btn a.btn:nth-child(1):focus,\n"+headerTheme+" .container-btn a.btn:nth-child(1):hover,\n"+headerTheme+" .container-btn a.btn:nth-child(1):active { background-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):active { background-color";
        }

        /* Border colour: passive */
        else if (btn_id === "btn_cols_border_passive_1") {
            newStyle = headerTheme+" .container-btn a.btn:nth-child(1):link,\n"+headerTheme+" .container-btn a.btn:nth-child(1):visited { border-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):visited { border-color";
        }

        /* Border colour: active */
        else if (btn_id === "btn_cols_border_active_1") {
            newStyle = headerTheme+" .container-btn a.btn:nth-child(1):focus,\n"+headerTheme+" .container-btn a.btn:nth-child(1):hover,\n"+headerTheme+" .container-btn a.btn:nth-child(1):active .container-btn { border-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):active { border-color";
        }

        /* Text colour: passive */
        else if (btn_id === "btn_cols_text_passive_2") {
            // Get class of buttons
            newStyle = headerTheme+" .container-btn a.btn:nth-child(2):link,\n"+headerTheme+" .container-btn a.btn:nth-child(2):visited { color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):visited { color";
        }

        /* Text colour: active */
        else if (btn_id === "btn_cols_text_active_2") {
            newStyle = headerTheme+" .container-btn a.btn:nth-child(2):focus,\n"+headerTheme+" .container-btn a.btn:nth-child(2):hover,\n"+headerTheme+" a.btn:nth-child(2):active { color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):active { color";
        }

        /* Background colour: passive */
        else if (btn_id === "btn_cols_bg_passive_2") {
            newStyle = headerTheme+" .container-btn a.btn:nth-child(2):link,\n"+headerTheme+" .container-btn a.btn:nth-child(2):visited { background-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):visited { background-color";
        }

        /* Background colour: active */
        else if (btn_id === "btn_cols_bg_active_2") {
            newStyle = headerTheme+" .container-btn a.btn:nth-child(2):focus,\n"+headerTheme+" .container-btn a.btn:nth-child(2):hover,\n"+headerTheme+" .container-btn a.btn:nth-child(2):active { background-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):active { background-color";
        }

        /* Border colour: passive */
        else if (btn_id === "btn_cols_border_passive_2") {
            newStyle = headerTheme+" .container-btn a.btn:nth-child(2):link,\n"+headerTheme+" .container-btn a.btn:nth-child(2):visited { border-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):visited { border-color";
        }

        /* Border colour: active */
        else if (btn_id === "btn_cols_border_active_2") {
            newStyle = headerTheme+" .container-btn a.btn:nth-child(2):focus,\n"+headerTheme+" .container-btn a.btn:nth-child(2):hover,\n"+headerTheme+" a.btn:nth-child(2):active .container-btn { border-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):active { border-color";
        }

        /* Photos overlay textbox color */
        else if (btn_id === "btn_cols_img_overlay_color_text") {
            newStyle =  headerTheme+" div[class^='flex-cols-'] div[class^='col-'] figure .cols-img-textbox { color: var("+color_code+") }\n";
            sub_string = "figure.icon";
        }

        /* Photos overlay textbox background color */
        else if (btn_id === "btn_cols_img_overlay_color_bg") {
            newStyle =  headerTheme+" div[class^='flex-cols-'] div[class^='col-'] figure .cols-img-textbox { background-color: var("+color_code+") }\n";
            sub_string = "figure.icon";
        }
        doUpdateArray(sub_string,newStyle);
    }
