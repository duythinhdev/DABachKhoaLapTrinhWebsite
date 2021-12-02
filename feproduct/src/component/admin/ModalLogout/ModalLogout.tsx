import * as React from 'react';
import './ModalLogout.scss';
import * as actions from "../../../store/action/index";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
export default function ListDividers() {
    let dispatch = useDispatch();
    const clickLogout = () => {
        let action = actions.logout();
        dispatch(action);
    }
    return (
        <div className="modalLogout">
            <div className="modalLogoutName">
                <span>Name</span>
            </div>
            <div className="modalLogoutName" onClick={() => clickLogout()}>
                <span><Link to="/loginadmin" >Logout</Link></span>
            </div>
        </div>
    );
}
