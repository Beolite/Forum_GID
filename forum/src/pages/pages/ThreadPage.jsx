import ThreadComponent from "../components/ThreadComponent"
import Layout from "./Layout"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";


function ThreadPage(){
    return(
        <Layout>
            <ThreadComponent></ThreadComponent>
        </Layout>
    )
}
export default ThreadPage