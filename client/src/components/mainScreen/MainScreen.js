import React, { useState } from "react";
import photo from "../../data/user_images/avatar.jpg"
import "../mainScreen/style.css"
import figures from "../../images/other/figures.svg"
import certificate1 from "../../data/certificates/certificate1.jpg"
import certificate2 from "../../data/certificates/certificate2.jpg"
import Footer from "../../components/footer/Footer"
import { Link } from 'react-router-dom';
import users from '../../data/users.json'

const MainScreen = ({ articles }) => {
    return (
        <div className="screens">
            <span className="anchor-offset" id="Main"></span>
            <div id="Main" className="mainScreen anchor-offset">
                <div className="userImgContainer"> 
                    <div className="imgFrame">
                        <img src={photo} className="userImg"/>
                    </div>
                </div>
                <div className="infoFrame">
                    <div className="name">{users[0].name}</div>
                    <div className="position">{users[0].position}</div>
                    <div class="blue-rectangle"></div>
                    <div className="contacts">
                        {
                            users[0].contacts.map((contact, index) => (
                                <div>{contact + "\n"}</div>
                            ))}
                    </div>
                </div>  
                <div>
                    <img className="figuresImg" src={figures}/>
                </div>
            </div>
            <div id="Articles" className="contentHeader anchor-offset">
                Статьи
                <div class="light-blue-rectangle"></div>
            </div>
            {articles.map((article, index) => (
                <Link to={`/article/${index}`} key={index}>
                    <div className="article">
                        {article.title}
                    </div>
                </Link>
            ))}
            <div id="Certificates" className="contentHeader anchor-offset">
                Сертификаты
                <div class="light-blue-rectangle"></div>
            </div>
            <div className="certificates">
                <img className="certificate" src={certificate1}></img>
                <img className="certificate" src={certificate2}></img>
                <img className="certificate" src={certificate2}></img>
                <img className="certificate" src={certificate2}></img>
            </div>
            <Footer/>
        </div>
    );
}

export default MainScreen;