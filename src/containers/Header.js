import React, {useEffect} from 'react';
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
/**
 * Контейнер для header
 * @return {JSX.Element}
 * @constructor
 */
const HeaderContainer = (props) => {

    useEffect(() => {

    }, []);

    return (
        <Header>
            <Link className={"lnk"} to="/pay">фыв &#8381;</Link>
            <Link to="/profile" className="lnk username">фыв</Link>
            aleksmanson
        </Header>
    );
};

export default HeaderContainer