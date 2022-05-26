import React, { Component } from 'react'

class KommunicateChat extends Component {
    componentDidMount(){
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"26bfc31437635a6f4b16171d8bd21e148","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
    }
    render(){
        return (
            <div>
                <h1>this is chat bot</h1>
            </div>
        )
    }
}
export default KommunicateChat;