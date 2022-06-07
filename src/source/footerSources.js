
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

const dataMenuHomeFlower1 = "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlcnJ5JTIwdHJlZSUyMGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ;
const dataMenuHomeFlower2 = "https://images.unsplash.com/photo-1495991602988-b15030d76a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBncmFzcyUyMGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ;
const dataMenuHomeFlower3 = "https://images.unsplash.com/photo-1491591462767-3b91b2a19487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHllbGxvdyUyMGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ;
const dataMenuHomeFlower4 = "https://images.unsplash.com/photo-1515863068002-cad5c25d7b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGluayUyMHRyZWUlMjBmbG93ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ;
const dataMenuHomeFlower5 = "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ;
const dataMenuHomeFlower6 = "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ;
const dataMenuHomeFlower7 = "https://images.unsplash.com/photo-1437964706703-40b90bdf563b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ;
const dataMenuHomeFlower8 = "https://images.unsplash.com/photo-1605689294580-924d4c4b7a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpbGxvdyUyMHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ;
const dataMenuHomeFlower9 = "https://images.unsplash.com/photo-1475140604894-b4aaba075542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eWVsbG93JTIwZ3Jhc3MlMjBmbG93ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ;

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
                        <p className="paragraphFooterSources">
                        https://images.unsplash.com/
                        photo-1477414348463-
                        c0eb7f1359b6?ixlib=
                        rb-1.2.1&ixid=
                        MnwxMjA3fDB8MHxwaG90by
                        1wYWdlfHx8fGVufDB8fHx8&auto=
                        format&fit=crop&w=1170&q=80
                        </p>
                    </a>

                    <a href={springPage} target="_blank">
                        <p className="paragraphFooterSources">
                        https://images.unsplash.com/
                        photo-1586952205040-
                        22514ffab1a1?ixlib=
                        rb-1.2.1&ixid=
                        MnwxMjA3fDB8MHxwaG90by
                        1wYWdlfHx8fGVufDB8fHx8&auto=
                        format&fit=crop&w=612&q=80
                        </p>
                    </a>

                    <a href={summerPage} target="_blank">
                        <p className="paragraphFooterSources">
                        https://images.unsplash.com/
                        photo-1530092285049-
                        1c42085fd395?ixlib=
                        rb-1.2.1&ixid=
                        MnwxMjA3fDB8MHxwaG90by
                        1wYWdlfHx8fGVufDB8fHx8&auto=
                        format&fit=crop&w=687&q=80
                        </p>
                    </a>

                    <a href={autumnPage} target="_blank">
                        <p className="paragraphFooterSources">
                        https://images.unsplash.com/
                        photo-1487139975590-
                        b4f1dce9b035?ixlib=
                        rb-1.2.1&ixid=
                        MnwxMjA3fDB8MHxwaG90by
                        1wYWdlfHx8fGVufDB8fHx8&auto=
                        format&fit=crop&w=688&q=80
                        </p>
                    </a>

                    <a href={urlVideo1} target="_blank">
                        <p className="paragraphFooterSources">
                        https://www.youtube.com/
                        watch?v=4UZrsTqkcW4
                        </p>
                    </a>

                    <a href={urlVideo2} target="_blank">
                        <p className="paragraphFooterSources">
                        https://www.youtube.com/
                        watch?v=AmIdY1Eb8tY&t=1402s
                        </p>
                    </a>

                    <a href={urlVideo3} target="_blank">
                        <p className="paragraphFooterSources">
                        https://www.youtube.com/
                        watch?v=tIdNeoHniEY
                        </p>
                    </a>

                    <a href={flower1} target="_blank">
                        <p className="paragraphFooterSources">
                        https://images.unsplash.com/
                        photo-1504051516165-
                        2f5e65b082a1?ixlib=
                        rb-1.2.1&ixid=
                        MnwxMjA3fDB8MHxwaG90by
                        1wYWdlfHx8fGVufDB8fHx8&auto=
                        format&fit=crop&w=687&q=80
                        </p>
                    </a>

                    <a href={flower2} target="_blank">
                        <p className="paragraphFooterSources">
                        https://images.unsplash.com/
                        photo-1523694576729-
                        dc99e9c0f9b4?ixlib=
                        rb-1.2.1&ixid=
                        MnwxMjA3fDB8MHxwaG90by
                        1wYWdlfHx8fGVufDB8fHx8&auto=
                        format&fit=crop&w=735&q=80
                        </p>
                    </a>

                    <a href={flower3} target="_blank">
                        <p className="paragraphFooterSources">
                        https://images.unsplash.com/
                        photo-1529610453335-
                        db84df315b29?ixlib=
                        rb-1.2.1&ixid=
                        MnwxMjA3fDB8MHxwaG90by
                        1wYWdlfHx8fGVufDB8fHx8&auto=
                        format&fit=crop&w=765&q=80
                        </p>
                    </a>

                    <a href={flower4} target="_blank">
                        <p className="paragraphFooterSources">
                        https://images.unsplash.com/
                        photo-1581938165093-
                        050aeb5ef218?ixlib=
                        rb-1.2.1&ixid=
                        MnwxMjA3fDB8MHxwaG90by
                        1wYWdlfHx8fGVufDB8fHx8&auto=
                        format&fit=crop&w=735&q=80
                        </p>
                    </a>

                    <a href={flower5} target="_blank">
                        <p className="paragraphFooterSources">
                        https://images.unsplash.com/
                        photo-1587291085038-
                        bf696d0fe232?ixlib=
                        rb-1.2.1&ixid=
                        MnwxMjA3fDB8MHxwaG90by
                        1wYWdlfHx8fGVufDB8fHx8&auto=
                        format&fit=crop&w=753&q=80
                        </p>
                    </a>

                    <a href={flower6} target="_blank">
                        <p className="paragraphFooterSources">
                        https://images.unsplash.com/
                        photo-1505421810888-
                        a940f267b6ca?ixlib=
                        rb-1.2.1&ixid=
                        MnwxMjA3fDB8MHxwaG90by
                        1wYWdlfHx8fGVufDB8fHx8&auto=
                        format&fit=crop&w=686&q=80
                        </p>
                    </a>

                    <a href={dataMenuHomeFlower1} target="_blank">
                        <p className="paragraphFooterSources">
                        https://images.unsplash.com/
                        photo-1522383225653-
                        ed111181a951?ixlib=
                        rb-1.2.1&ixid=
                        MnwxMjA3fDB8MHxzZWFy
                        Y2h8MXx8Y2hlcnJ5JTIwdHJlZSUy
                        MGZsb3dlcnxlbnwwfHwwfHw%3D&auto=
                        format&fit=crop&w=500&q=60
                        </p>
                    </a>

                    <a href={dataMenuHomeFlower2} target="_blank">
                        <p className="paragraphFooterSources">
                    https://images.unsplash.com/
                    photo-1495991602988-
                    b15030d76a0b?ixlib=
                    rb-1.2.1&ixid=MnwxMjA3f
                    DB8MHxzZWFyY2h8Mnx8Z3JlZW4l
                    MjBncmFzcyUyMGZsb3dlcnxlbnww
                    fHwwfHw%3D&auto=
                    format&fit=crop&w=500&q=60
                        </p>
                    </a>

                    <a href={dataMenuHomeFlower3} target="_blank">
                        <p className="paragraphFooterSources">
                         https://images.unsplash.com/
                         photo-1491591462767-
                         3b91b2a19487?ixlib=
                         rb-1.2.1&ixid=
                         MnwxMjA3fDB8MHxzZWFy
                         Y2h8MTJ8fHllbGxvdyUy
                         MGZsb3dlcnxlbnwwfHwwf
                         Hw%3D&auto=
                         format&fit=crop&w=500&q=60
                        </p>
                    </a>

                    <a href={dataMenuHomeFlower4} target="_blank">
                        <p className="paragraphFooterSources">
                        https://images.unsplash.com/
                        photo-1515863068002-
                        cad5c25d7b48?ixlib=
                        rb-1.2.1&ixid=Mnwx
                        MjA3fDB8MHxzZWFy
                        Y2h8OHx8cGluayUy
                        MHRyZWUlMjBmbG93ZXJ
                        8ZW58MHx8MHx8
                        &auto=format&fit=crop&w=
                        500&q=60
                        </p>
                    </a>

                    <a href={dataMenuHomeFlower5} target="_blank">
                        <p className="paragraphFooterSources">
                     https://images.unsplash.com/
                     photo-1458966480358-
                     a0ac42de0a7a?ixlib=
                     rb-1.2.1&ixid=
                     MnwxMjA3fDB8MHxzZW
                     FyY2h8NHx8dHJlZXx
                     lbnwwfHwwfHw%3D&auto=
                     format&fit=crop&w=500&q=60
                        </p>
                    </a>

                    <a href={dataMenuHomeFlower6} target="_blank">
                        <p className="paragraphFooterSources">
                        https://images.unsplash.com/
                        reserve/bOvf94dPRxWu0u3QsPjF
                        _tree.jpg?ixlib=rb-1.2.1&ixid=
                        MnwxMjA3fDB8MHxzZW
                        FyY2h8MXx8dHJlZXxlbnwwf
                        HwwfHw%3D&auto=
                        format&fit=crop&w=500&q=60
                        </p>
                    </a>

                    <a href={dataMenuHomeFlower7} target="_blank">
                        <p className="paragraphFooterSources">
                        https://images.unsplash.com/
                        photo-1437964706703-
                        40b90bdf563b?ixlib=
                        rb-1.2.1&ixid=
                        MnwxMjA3fDB8MHxzZW
                        FyY2h8N3x8dHJlZXxl
                        bnwwfHwwfHw%3D&auto=
                        format&fit=crop&w=500&q=60
                        </p>
                    </a>

                    <a href={dataMenuHomeFlower8} target="_blank">
                        <p className="paragraphFooterSources">
                        https://images.unsplash.com/
                        photo-1605689294580-
                        924d4c4b7a5d?ixlib=
                        rb-1.2.1&ixid=
                        MnwxMjA3fDB8MHxzZWFy
                        Y2h8MTZ8fHdpbGxvdy
                        UyMHRyZWV8ZW58MHx8MHx8
                        &auto=format&fit=
                        crop&w=500&q=60
                        </p>
                    </a>

                    <a href={dataMenuHomeFlower9} target="_blank">
                        <p className="paragraphFooterSources">
                        https://images.unsplash.com/
                        photo-1475140604894-
                        b4aaba075542?ixlib=
                        rb-1.2.1&ixid=
                        MnwxMjA3fDB8MHxzZW
                        FyY2h8M3x8eWVsbG93JTIwZ3Jhc3
                        MlMjBmbG93ZXJ8ZW58MHx8MHx8
                        &auto=format&fit=
                        crop&w=500&q=60
                        </p>
                    </a>

                </div>

            </div>
        )
    }
}

export default FooterSources;
