import React from "react";
import './Footer.scss';


const Footer = () => {
    return (
        <div className="footer">
            <div className="row between-sm">
                <div className="col-xs-12 col-auto-left flex-column">
                    <div className="row">
                        <div className="col-xs-12 start-sm start-xs">
                            <span>
                                © 2001–{new Date().getFullYear()} ООО <a className="link fs-12" href="https://sweb.ru"> «СпейсВэб»</a>
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 start-sm start-xs">
                            <span>Все права защищены.</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 start-sm  start-xs">
                            <span>
                                Лицензия <a className="link fs-12" href="https://sweb.ru/documents/#%D1%81ertificates">№163230</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 xs_step-15-0 col-auto-right flex-column">
                    <div className="row">
                        <div className="col-xs-12 start-xs">
                            <span>
                                <a className="link fs-12" href="tel:+7 (812) 334-12-22">+7 (812) 334-12-22</a> (в Санкт-Петербурге)
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 start-xs">
                            <span>
                                <a className="link fs-12" href="tel:+7 (495) 663-16-12">+7 (495) 663-16-12</a> (в Москве)
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 start-xs">
                            <span>
                                <a className="link fs-12" href="tel:8 (800) 100-16-15">&ensp;8 (800) 100-16-15 </a> (бесплатно по России)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;