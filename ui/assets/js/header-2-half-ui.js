
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
            newStyle = "header"+headerTheme+" { background-color: var("+color_code+") }\n";
            sub_string = "header"+headerTheme+" { background-color: ";
        }

        /* badge text */
        else if (btn_id === "btn_badge_text") {
            newStyle = "header"+headerTheme+" .col-2 .badge { color: var("+color_code+") }\n";
            sub_string = ".badge { color";
        }

        /* badge background */
        else if (btn_id === "btn_badge_bg") {
            newStyle = "header"+headerTheme+" .col-2 .badge { background-color: var("+color_code+") }\n";
            sub_string = ".badge { background-color";
        }

        /* h1 main heading */
        else if (btn_id === "btn_h1_text") {
            newStyle = headerTheme+" h1 { color: var("+color_code+") }\n";
            sub_string = "h1 { color:"
        }

        /* h1 main heading highlight text */
        else if (btn_id === "btn_h1_highlight") {
            newStyle = "header"+headerTheme+" .col-2 h1 span.highlight { color: var("+color_code+") }\n";
            sub_string = "h1 span.highlight";
        }

        /* h1 main heading bottom border */
        else if (btn_id === "btn_h1_border") {
            newStyle = "header"+headerTheme+" .col-2 h1.heading-underline::after { background-color: var("+color_code+") }\n";
            sub_string = "h1.heading-underline";
        }

        /* h2 main heading */
        else if (btn_id === "btn_h2_text") {
            newStyle = "header"+headerTheme+" .col-2 h2 { color: var("+color_code+") }\n";
            sub_string = "h2 { color:"
        }

        /* Header paragraphs text */
        else if (btn_id === "btn_list_text") {
            newStyle = "header"+headerTheme+" .col-2 ul li { color: var("+color_code+") }\n";
            sub_string = " ul li {";
        }

        /* List marker */
        else if (btn_id === "btn_list_marker") {
            newStyle = "header"+headerTheme+" .col-2 li::marker, "+"header"+headerTheme+" ul.fa-ul li span.fa-li i { color: var("+color_code+") }\n";
            sub_string = "li::marker";
        }

        /* === Buttons === */

        /* Text colour: passive */
        else if (btn_id === "btn_text_passive_1") {
            // Get class of buttons
            newStyle = "header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(1):link,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(1):visited { color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):visited { color";
        }

        /* Text colour: active */
        else if (btn_id === "btn_text_active_1") {
            newStyle = "header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(1):focus,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(1):hover,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(1):active { color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):active { color";
        }

        /* Background colour: passive */
        else if (btn_id === "btn_bg_passive_1") {
            newStyle = "header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(1):link,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(1):visited { background-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):visited { background-color";
        }

        /* Background colour: active */
        else if (btn_id === "btn_bg_active_1") {
            newStyle = "header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(1):focus,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(1):hover,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(1):active { background-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):active { background-color";
        }

        /* Border colour: passive */
        else if (btn_id === "btn_border_passive_1") {
            newStyle = "header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(1):link,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(1):visited { border-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):visited { border-color";
        }

        /* Border colour: active */
        else if (btn_id === "btn_border_active_1") {
            newStyle = "header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(1):focus,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(1):hover,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(1):active { border-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):active { border-color";
        }

        /* Text colour: passive */
        else if (btn_id === "btn_text_passive_2") {
            // Get class of buttons
            newStyle = "header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(2):link,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(2):visited { color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):visited { color";
        }

        /* Text colour: active */
        else if (btn_id === "btn_text_active_2") {
            newStyle = "header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(2):focus,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(2):hover,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(2):active { color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):active { color";
        }

        /* Background colour: passive */
        else if (btn_id === "btn_bg_passive_2") {
            newStyle = "header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(2):link,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(2):visited { background-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):visited { background-color";
        }

        /* Background colour: active */
        else if (btn_id === "btn_bg_active_2") {
            newStyle = "header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(2):focus,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(2):hover,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(2):active { background-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):active { background-color";
        }

        /* Border colour: passive */
        else if (btn_id === "btn_border_passive_2") {
            newStyle = "header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(2):link,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(2):visited { border-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):visited { border-color";
        }

        /* Border colour: active */
        else if (btn_id === "btn_border_active_2") {
            newStyle = "header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(2):focus,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(2):hover,\n"+"header"+headerTheme+" .col-2.col-text .container-btn a.btn:nth-child(2):active { border-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):active { border-color";
        }

        /* Photos overlay textbox color */
        else if (btn_id === "btn_img_overlay_color_text") {
            newStyle =  "header"+headerTheme+" div[class^='flex-cols-'] div[class^='col-'] figure .cols-img-textbox { color: var("+color_code+") }\n";
            sub_string = "figure.icon";
        }

        /* Photos overlay textbox background color */
        else if (btn_id === "btn_img_overlay_color_bg") {
            newStyle =  "header"+headerTheme+" div[class^='flex-cols-'] div[class^='col-'] figure .cols-img-textbox { background-color: var("+color_code+") }\n";
            sub_string = "figure.icon";
        }
        doUpdateArray(sub_string,newStyle);
    }

