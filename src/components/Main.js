import coverImg from "../porfolio-cover.jpg"
import briefIcon from "../briefcase.svg"
import checkIco from "../check.svg"
import JS from "../javascript.png"
import frameWorks from "../frameworks.png"
import mobile from "../mobile.png"
import React, { useState } from "react"
import WalloF from "./Wall"
import Projects from "./Projects"

export default function Main(){
    const [activeContent, setActive] = useState({
        about: true,
        projects: false,
        education: false
    })
    function toggleActive(e){
        let id = e.target.id;
        switch(id){
            case "about":
                setActive({
                about: true,
                projects: false
                })
                break;
            case "projects":
                setActive({
                about: false,
                projects: true
                })
                break;
            case "education":
                setActive(prev =>({
                    ...prev,
                    education : !prev.education
                }));
            break;
            default:
                return activeContent
        }
    }

    return(
        <main>
            <div className="container main-container">
                <div className="row">
                <div className="col-lg">
                    <div className="card intro-card">
                        <div className="card-body">
                            <img src={coverImg} alt="" className="intro__img"/>
                        <h3 className="main-name card-title">Joel Lopez</h3>
                        <h4 className="card-subtitle">Front End Developer</h4>
                        <div className="availability-wrapper">
                            <img src={briefIcon} alt="" className="work-icon"/>
                            Available for work
                            <img src={checkIco} alt="" className="check-icon" />
                        </div>
                        </div>
                    </div>
                    <div className="card skills-card">
                        <div className="card-body">
                            <h4 className="card-title skills__title">Skills</h4>
                        <ul className="skills-ul">
                            <li className="skills__li d-flex justify-content-between">
                                <span>
                                    React
                                </span> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="text-end dev-img"/>
                            </li>
                            <li className="skills__li d-flex justify-content-between">
                                <span>
                                    Redux
                                </span> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" className="text-end dev-img"/>
                            </li>
                            <li className="skills__li d-flex justify-content-between">
                                <span>
                                    JavaScript
                                </span> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="text-end dev-img"/>
                            </li>
                            <li className="skills__li d-flex justify-content-between">
                                <span>
                                    Html & CSS
                                </span> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original-wordmark.svg" className="text-end dev-img"/>
                            </li>
                            <li className="skills__li d-flex justify-content-between">
                                <span>
                                    SaSS
                                </span> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" className="text-end dev-img"/>
                            </li>
                            <li className="skills__li d-flex justify-content-between">
                                <span>
                                    Bootstrap
                                </span> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" className="text-end dev-img"/>
                            </li>
                        </ul>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-6" id="main-content">
                    <header className="content-header d-flex justify-content-between align-items-center mb-3">
                        <nav className="content__nav d-flex align-items-center">
                            <ul className="content__menu d-flex align-items-center mb-0">
                                <li className={activeContent.about ? "content_item active" : "content_item"}>
                                    <a  className="content__link" onClick={toggleActive} id="about">About</a>
                                </li>
                                <li className={activeContent.projects ? "content_item active" : "content_item"}>
                                    <a  className="content__link" onClick={toggleActive} id="projects">Projects</a>
                                </li>
                            </ul>
                        </nav>
                        <a href="#" className="main-cta">
                            Contact Me
                        </a>
                    </header>
                    {activeContent.about && 
                    <div className="about-wrapper">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title title-color">
                                    About
                                </h3>
                            </div>
                            <div className="card-body">
                                <p className="card-text about-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quia tempora quibusdam enim! Doloribus dicta debitis libero corporis dignissimos optio. Aliquam magnam similique debitis distinctio optio aspernatur quaerat facilis. Necessitatibus?
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title title-color">
                                    Education
                                </h3>
                                <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="card-body">
                                <div className="list-group">
                                    <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/" target="_blank" className="list-group-item list-group-item-action edu-list-item">
                                        <img src={frameWorks} alt=""  className="edu-item-img"/>
                                        <div className="edu-item-data"> 
                                            <p className="edu-item-school">FreeCodeCamp</p>
                                            <p className="edu-item-title">Front End Development Libraries</p>
                                            <div className="edu-item-footer">
                                                <span className="edu-type">
                                                    Pending
                                                </span>
                                                <span className="edu-spacer"></span>
                                                <span className="endDate">
                                                    Current
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://www.freecodecamp.org/certification/JoelLopez/javascript-algorithms-and-data-structures" target="_blank" className="list-group-item list-group-item-action edu-list-item">
                                        <img src={JS} alt=""  className="edu-item-img"/>
                                        <div className="edu-item-data"> 
                                            <p className="edu-item-school">FreeCodeCamp</p>
                                            <p className="edu-item-title">JavaScript Algorithms and Data Structures</p>
                                            <div className="edu-item-footer">
                                                <span className="edu-type">
                                                    Certificate
                                                </span>
                                                <span className="edu-spacer"></span>
                                                <span className="endDate">
                                                    End: 04/08/2022
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://www.freecodecamp.org/certification/JoelLopez/responsive-web-design" target="_blank" className="list-group-item list-group-item-action edu-list-item">
                                        <img src={mobile} alt=""  className="edu-item-img"/>
                                        <div className="edu-item-data"> 
                                            <p className="edu-item-school">FreeCodeCamp</p>
                                            <p className="edu-item-title">Responsive Web Design</p>
                                            <div className="edu-item-footer">
                                                <span className="edu-type">
                                                    Certificate
                                                </span>
                                                <span className="edu-spacer"></span>
                                                <span className="endDate">
                                                    End: 08/06/2022
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                    {activeContent.education && <a className="list-group-item list-group-item-action edu-list-item justify-content-evenly">
                                        <div className="edu-item-data text-center"> 
                                            <p className="edu-item-school">Scrimba</p>
                                            <p className="edu-item-title">Interactive Websites with JS</p>
                                            <div className="edu-item-footer justify-content-center">
                                                <span className="edu-type">
                                                    Course
                                                </span>
                                                <span className="edu-spacer"></span>
                                                <span className="endDate">
                                                    Current
                                                </span>
                                            </div>
                                        </div>
                                        <div className="edu-item-data text-center"> 
                                            <p className="edu-item-school">Scrimba</p>
                                            <p className="edu-item-title">Learn React</p>
                                            <div className="edu-item-footer justify-content-center">
                                                <span className="edu-type">
                                                    Course
                                                </span>
                                                <span className="edu-spacer"></span>
                                                <span className="endDate">
                                                    Current
                                                </span>
                                            </div>
                                        </div>
                                    </a>}
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-end" id="edu-footer ">
                                <a href="#edu-footer" className="btn" onClick={toggleActive} id="education">See More...</a>
                            </div>
                        </div>
                    </div>
                    }
                    {activeContent.projects && <Projects/>}
                </div> 
                <WalloF/>
            </div>
            </div>
        </main>
    )
}