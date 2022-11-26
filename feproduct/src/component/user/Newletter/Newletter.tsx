import { Send } from "@mui/icons-material";
import "./Newletter.scss";

const Newsletter = () => {
    return (
        <div className="ContainerNewletter">
            <div className="container">
                <div className="row d-flex flex-column align-items-center">
                    <h1 className="Title col-lg-12 col-xs-12">Newsletter</h1>
                    <div className="Desc col-lg-12 col-xs-12">Get timely updates from your favorite products.</div>
                    <div className="InputContainer col-lg-12 col-xs-12" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                        <input className="Input" placeholder="Your email" />
                        <button className="Button">
                            <Send />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
