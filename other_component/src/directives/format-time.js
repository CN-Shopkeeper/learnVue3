import dayjs from "dayjs"

export default function(app){
    let formatString="YYYY-MM-DD HH:mm";
    app.directive("format-time",{
        created(el,bindings) {
            if (bindings.value){
                formatString=bindings.value;
            }
        },
        mounted(el,bindings) {
            const textContent = el .textContent;
            let timestamp = parseInt(textContent);
            if (textContent.length===10){
                timestamp*=1000;
            }
            el.textContent=dayjs(timestamp).format(formatString);
        },
    })
}