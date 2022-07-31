import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile,table } from "../response";
import "./Newletter.scss";
// const Container = styled.div`
//   height: 60vh;
//   background-color: #fcf5f5;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   ${table({ height: "60vh", width: "167%" })}
//   ${mobile({ height: "60vh", width: "100%",position: "relative" })}
// `;
// const Title = styled.h1`
//   font-size: 70px;
//   margin-bottom: 20px;
// `;

// const Desc = styled.div`
//   font-size: 24px;
//   font-weight: 300;
//   margin-bottom: 20px;
//   ${mobile({ textAlign: "center" })}

// `;

// const InputContainer = styled.div`
//   width: 50%;
//   height: 40px;
//   background-color: white;
//   display: flex;
//   justify-content: space-between;
//   border: 1px solid lightgray;
//   ${mobile({ width: "80%" })}
// `;

// const Input = styled.input`
//   border: none;
//   flex: 8;
//   padding-left: 20px;
//   outline:none;
//   border:none;
// `;

// const Button = styled.button`
//   flex: 1;
//   border: none;
//   background-color: teal;
//   color: white;
// `;

const Newsletter = () => {
    return (
        <div className="ContainerNewletter">
            <div className="container">
                <div className="row d-flex flex-column align-items-center">
                    <h1 className="Title col-lg-12 col-xs-12">Newsletter</h1>
                    <div className="Desc col-lg-12 col-xs-12">Get timely updates from your favorite products.</div>
                    <div className="InputContainer col-lg-12 col-xs-12">
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
