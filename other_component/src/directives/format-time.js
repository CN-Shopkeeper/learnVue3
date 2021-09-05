import dayjs from "dayjs"

export default function(app){
    app.directive("format-time",{
        created(el,bindings) {
            // 不能定义为全局的，因为会邮箱后续使用
            bindings.formatString="YYYY-MM-DD HH:mm";
            if (bindings.value){
                bindings.formatString=bindings.value;
            }
        },
        mounted(el,bindings) {
            const textContent = el .textContent;
            let timestamp = parseInt(textContent);
            if (textContent.length===10){
                timestamp*=1000;
            }
            el.textContent=dayjs(timestamp).format(bindings.formatString);
        },
    })
}