import React from "react";

class Hubspot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hubspotActive: false
        };
    }
    componentDidMount (){
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if(window.hbspt) {
                window.hbspt.forms.create(this.formObj);
            }
        })

    }
    formObj = {
        region: "na1",
        portalId: "8158739",
        formId: "b5b24ccc-52d9-4106-80f4-944bf5f9cd39",
        target: "#hubspotForm"
    }
    render = () => {
        return (
            <div>
                <div id="hubspotForm"></div>
            </div>
        )
    }
}

export default Hubspot