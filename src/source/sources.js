
import React ,{useState} from "react";
import FooterSources from "./footerSources";
import "../NavbarFooter/index.css";



export function Sources() {

    const [show,setShow] = useState(false) ;

    return (<>

            {show && <FooterSources/>}
            <button
                onClick={() => {
                    setShow(!show);
                }}>{show ? "Hide Sources" : "Show Sources"}</button>

        </>
    )
}
