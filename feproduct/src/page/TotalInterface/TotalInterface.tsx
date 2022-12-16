import React, {useEffect} from "react";
import Navbar from "../../component/user/Navbar/Navbar";
import Announcement from "../../component/user/Announcement/Announcement";
import Newsletter from "../../component/user/Newletter/Newletter";
import Footer from "../../component/user/footer/footer";
import "../layoutUser/layoutUser.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {
    useParams
} from "react-router-dom";
import useSwitchComponent from "../../component/user/hook/useSwitchComponent";

interface ParamTypes {
    id: string | undefined
}

const TotalInterface = () => {
    const {id} = useParams<ParamTypes>();
    const {renderSwitch} = useSwitchComponent(id) as any;
    useEffect(() => {
        renderSwitch();
    }, [id])
    return (
        <div className="ContainerApp">
            <Announcement/>
            <Navbar/>
            {renderSwitch()}
            <Newsletter/>
            {/*<NewsFeeds/>*/}
            <Footer/>
        </div>
    );
}
export default TotalInterface;