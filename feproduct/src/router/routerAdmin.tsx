import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useSelector} from "react-redux";
import { RootStateOrAny} from "react-redux";

import Home from "../page/homeAdmin/Home";
import list from "../page/ListAdmin/ListAdmin";
import Single from "../page/SingleAdmin/Single";
import New from "../component/adminNew/new/New";
import { userInputs } from "../formSource";

const RoutingAdmin = () => {
    const darkMode = useSelector((state: RootStateOrAny) => { return  state.main.darkMode });
    let news: any = <New inputs={userInputs} title="Add New User" />;
    let single: any =  <Single />;
    return <div className={darkMode ? "app dark" : "app"}>
            <Router>
                <Switch>
                    <Route path="/">
                        <Route path="/home"  component={Home} />
                        <Route path="/users"  component={list}> 
                                <Route  component={list} />
                                <Route path="/users/:userId" component={single} />
                                <Route
                                        path="/users/new"
                                        component={news}
                                    />
                        </Route>
                    </Route>
                </Switch>
            </Router>
        </div>
}
export default RoutingAdmin;