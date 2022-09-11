import femLogo from "../femLogo.svg"

export default function Header(){
    return(
        <header className=" sticky-top main-header">
            <div className="container">
                <nav className="navbar  navbar-expand-lg main-navbar">
                <a href="#" className="navbar-brand title-color">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav main-nav">
                        <li className="nav-item ">
                            <a href="https://github.com/JoelLH"  className="nav-link title-color"
                            target="_blank"
                            >Github</a>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                            alt="github logo"/>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/joel-lopez-0595ba193/" className="nav-link title-color"
                            target="_blank"
                            >Linkedin
                            </a>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="linkedin logo"/>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.frontendmentor.io/profile/JoelLH" className="nav-link title-color"
                            target="_blank"
                            >FrontEndMentor</a>
                            <img src={femLogo} alt="" className="femImg"/>
                        </li>
                        <li className="nav-item">
                            <a href="https://codepen.io/JL-web" className="nav-link title-color"
                            target="_blank"
                            >Codepen
                            </a>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codepen/codepen-plain.svg"
                            alt="codepen logo" 
                            />
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </header>
    )
}