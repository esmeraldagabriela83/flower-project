
import React,{Component} from "react";
import "../NavbarFooter/index.css";

const urlVideo1 = "https://www.youtube.com/watch?v=4UZrsTqkcW4" ;
const urlVideo2 = "https://www.youtube.com/watch?v=AmIdY1Eb8tY&t=1402s" ;
const urlVideo3 = "https://www.youtube.com/watch?v=tIdNeoHniEY" ;
const urlLeavesHomeFirstComponent="https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const springPage="https://images.unsplash.com/photo-1586952205040-22514ffab1a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=612&q=80";
const summerPage="https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const autumnPage="https://images.unsplash.com/photo-1487139975590-b4f1dce9b035?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80";

const flower1 = "https://images.unsplash.com/photo-1504051516165-2f5e65b082a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ;
const flower2 = "https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" ;
const flower3 = "https://images.unsplash.com/photo-1529610453335-db84df315b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" ;
const flower4 = "https://images.unsplash.com/photo-1581938165093-050aeb5ef218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" ;
const flower5 = "https://images.unsplash.com/photo-1587291085038-bf696d0fe232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80" ;
const flower6 = "https://images.unsplash.com/photo-1505421810888-a940f267b6ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" ;


class FooterSources extends Component {
    constructor() {
        super();
        console.log("CONSTRUCT")
    }
    componentDidMount() {
        console.log("DID MOUNT")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("DID UPDATE")
    }

    componentWillUnmount() {
        console.log("WILL UNMOUNT")
    }

    render() {
        console.log("RENDER")
        return (
            <div>

                <p>Sources</p>

                <div className="section">

                    <a href={urlLeavesHomeFirstComponent} target="_blank" >
                        <p className="paragraphFooterSources">{urlLeavesHomeFirstComponent}</p>
                    </a>

                    <a href={springPage} target="_blank">
                        <p className="paragraphFooterSources">{springPage}</p>
                    </a>

                    <a href={summerPage} target="_blank">
                        <p className="paragraphFooterSources">{summerPage}</p>
                    </a>

                    <a href={autumnPage} target="_blank">
                        <p className="paragraphFooterSources">{autumnPage}</p>
                    </a>

                    <a href={urlVideo1} target="_blank">
                        <p className="paragraphFooterSources">{urlVideo1}</p>
                    </a>

                    <a href={urlVideo2} target="_blank">
                        <p className="paragraphFooterSources">{urlVideo2}</p>
                    </a>

                    <a href={urlVideo3} target="_blank">
                        <p className="paragraphFooterSources">{urlVideo3}</p>
                    </a>

                    <a href={flower1} target="_blank">
                        <p className="paragraphFooterSources">{flower1}</p>
                    </a>

                    <a href={flower2} target="_blank">
                        <p className="paragraphFooterSources">{flower2}</p>
                    </a>

                    <a href={flower3} target="_blank">
                        <p className="paragraphFooterSources">{flower3}</p>
                    </a>

                    <a href={flower4} target="_blank">
                        <p className="paragraphFooterSources">{flower4}</p>
                    </a>

                    <a href={flower5} target="_blank">
                        <p className="paragraphFooterSources">{flower5}</p>
                    </a>

                    <a href={flower6} target="_blank">
                        <p className="paragraphFooterSources">{flower6}</p>
                    </a>

                </div>

            </div>
        )
    }
}

export default FooterSources;


