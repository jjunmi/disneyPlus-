import { Link } from "react-router-dom";
import "./Notfound.css";

const Notfound = () => {

    return(
        <div className="notfound-content">
            <div className="notfound-text">
                <p>잘못된 페이지 입니다.</p>
                <Link to={"/"}>되돌아가기</Link>
            </div>
        </div>
    );
}
export default Notfound;