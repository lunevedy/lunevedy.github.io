
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
        const colNumber = ".col-2";


        /* Section background */
        if (btn_id === "btn_section_bg") {
            newStyle = sectionClassName+ " { background-color: var("+color_code+") }\n";
            sub_string = sectionClassName+ " { background-color: ";
        }

        /* badge text */
        else if (btn_id === "btn_badge_text") {
            newStyle = sectionClassName+ " .badge { color: var("+color_code+") }\n";
            sub_string = ".badge { color";
        }

        /* badge background */
        else if (btn_id === "btn_badge_bg") {
            newStyle = sectionClassName+ " .badge { background-color: var("+color_code+") }\n";
            sub_string = ".badge { background-color";
        }

        /* h2 main heading */
        else if (btn_id === "btn_h2_text") {
            newStyle = sectionClassName+ " h2 { color: var("+color_code+") }\n";
            sub_string = "h2 { color:"
        }

        /* h2 main heading highlight text */
        else if (btn_id === "btn_h2_highlight") {
            newStyle = sectionClassName+ " .col-text h2 span.highlight { color: var("+color_code+") }\n";
            sub_string = "h2 span.highlight";
        }

        /* h2 main heading bottom border */
        else if (btn_id === "btn_h2_border") {
            newStyle = sectionClassName+ " .col-text h2.heading-underline::after { background-color: var("+color_code+") }\n";
            sub_string = "h2.heading-underline";
        }

        /* h3 sub heading */
        else if (btn_id === "btn_h3_text") {
            newStyle = sectionClassName+ " .col-text h3 { color: var("+color_code+") }\n";
            sub_string = " h3 {";
        }

        /* Section paragraphs text */
        else if (btn_id === "btn_para_text") {
            newStyle = sectionClassName+ " .col-text p { color: var("+color_code+") }\n";
            sub_string = " p {";
        }

        /* Section paragraphs text */
        else if (btn_id === "btn_list_text") {
            newStyle = sectionClassName+ " .col-text ul li { color: var("+color_code+") }\n";
            sub_string = " ul li {";
        }

        /* List marker */
        else if (btn_id === "btn_list_marker") {
            newStyle = sectionClassName+ " .col-text li::marker, "+sectionClassName+ " ul.fa-ul li span.fa-li i { color: var("+color_code+") }\n";
            sub_string = "li::marker";
        }

        /* visual: shadows color */
        else if (btn_id === "btn_visual_shadows_color") {
            const colNumber = ".col-2";
            // get value of color code
            const styles = getComputedStyle(document.documentElement);
            let colorValue = styles.getPropertyValue(color_code);
            if (colorValue==="#000") { colorValue="#000000"}
            if (colorValue==="#fff") { colorValue="#ffffff"}
            // console.log("colorValue: "+colorValue);

            const hex2rgba = (hex, alpha = 1) => {
                const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
                return `rgba(${r},${g},${b},${alpha})`;
            };

            const strRGB = hex2rgba(colorValue, 0.9);

            if (document.getElementById("visual_shadows_type-1").checked) {
                newStyle = "@media (min-width: 768px) { "+sectionClassName+ " "+colNumber+" figure.fig-shadows-box { filter: drop-shadow(8px 8px 8px " +strRGB+ "); } }\n@media (max-width: 767px) { "+sectionClassName+ " "+colNumber+" figure.fig-shadows-box { filter: drop-shadow(6px 6px 6px " +strRGB+ "); } }"; 
            }
            else if (document.getElementById("visual_shadows_type-2").checked) {
                newStyle = "@media (min-width: 768px) { "+sectionClassName+ " "+colNumber+" figure.fig-shadows-box { filter: drop-shadow(12px 12px 0 " +strRGB+ "); } }\n@media (max-width: 767px) { "+sectionClassName+ " "+colNumber+" figure.fig-shadows-box { filter: drop-shadow(8px 8px 0 " +strRGB+ "); } }"; 
            }
            sub_string = "fig-shadows-box";
        }

        /* === Buttons === */

        /* Text colour: passive */
        else if (btn_id === "btn_cols_text_passive") {
            // Get class of buttons
            newStyle = sectionTheme+sectionClassName+" #btn-submit { color: var("+color_code+") }\n";
            console.log("newStyle: "+newStyle);
            sub_string = "#btn-submit { color";
        }

        /* Text colour: active */
        else if (btn_id === "btn_cols_text_active") {
            newStyle = sectionTheme+sectionClassName+" #btn-submit:focus,\n"+sectionTheme+sectionClassName+" #btn-submit:hover,\n"+sectionTheme+sectionClassName+" #btn-submit:active { color: var("+color_code+") }\n\n";
            sub_string = "#btn-submit:active { color";
        }

        /* Background colour: passive */
        else if (btn_id === "btn_cols_bg_passive") {
            newStyle = sectionTheme+sectionClassName+" #btn-submit { background-color: var("+color_code+") }\n";
            sub_string = "btn-submit { background-color";
        }

        /* Background colour: active */
        else if (btn_id === "btn_cols_bg_active") {
            newStyle = sectionTheme+sectionClassName+" #btn-submit:focus,\n"+sectionTheme+sectionClassName+" #btn-submit:hover,\n"+sectionTheme+sectionClassName+" #btn-submit:active { background-color: var("+color_code+") }\n\n";
            sub_string = "#btn-submit:active { background-color";
        }

        /* Border colour: passive */
        else if (btn_id === "btn_cols_border_passive") {
            newStyle = sectionTheme+sectionClassName+" #btn-submit { border-color: var("+color_code+") }\n";
            sub_string = "#btn-submit { border-color";
        }

        /* Border colour: active */
        else if (btn_id === "btn_cols_border_active") {
            newStyle = sectionTheme+sectionClassName+" #btn-submit:focus,\n"+sectionTheme+sectionClassName+" #btn-submit:hover,\n"+sectionTheme+sectionClassName+" #btn-submit:active { border-color: var("+color_code+") }\n\n";
            sub_string = "#btn-submit:active { border-color";
        }

        doUpdateArray(sub_string,newStyle);
    }

