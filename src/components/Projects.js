

export default function Projects(){
    return (
        <div className="project-cards-wrapper">
            <div className="card project-card">
                <img src="https://raw.githubusercontent.com/JoelLH/Images/main/portfolioImages/watchlist-joelweb.png" alt="" className="card-img"/>
                <div className="card-body">
                    <a href="https://watchlist-joelweb.netlify.app/" className="card-title title-color">
                        Film search app
                    </a>
                    
                    <div className="card-text ">
                        <p>One page application to search for films and create a personal watchlist.
                        It uses fetch to call OMDb API to get the user search and localStorage to create the watchlist
                        </p>
                        Features: 
                        <ul className="project-ul">
                            <li>Responsive display of search results and watchlist</li>
                            <li>Modern UI </li>
                            <li>Movies card with relevant information</li>
                        </ul>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <div className="site-links d-flex">
                        <a href="https://github.com/JoelLH/ScrimbaProjects/tree/main/movie-watchlist" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"  className="dev-img" alt="github logo"/></a>
                        
                        <a href="https://watchlist-joelweb.netlify.app/" className="card-live-link" target="_blank">Live</a>
                    </div>
                    <div className="site-tech d-flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="text-end dev-img" alt="react logo"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original-wordmark.svg" className="text-end dev-img" alt="devicon logo"/>
                    </div>
                </div>
            </div>            
            <div className="card project-card">
                <img src="https://raw.githubusercontent.com/JoelLH/Images/main/portfolioImages/Project4.jpeg" alt="" className="card-img"/>
                <div className="card-body">
                    <a href="https://randomequotejhweb.netlify.app/#" className="card-title title-color">
                        Random Quote Machine
                    </a>
                    
                    <p className="card-text ">
                        Features: 
                        <ul className="project-ul">
                            <li>Fetch random quote from public API</li>
                            <li>Displays random quote each time new quote button is pressed</li>
                            <li>Changes background color when a new quote is displayed</li>
                        </ul>
                    </p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <div className="site-links d-flex">
                        <a href="https://github.com/JoelLH/Projects/tree/main/random-quote-machine" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"  className="dev-img" alt="github logo"/></a>
                        
                        <a href="https://randomequotejhweb.netlify.app/#" className="card-live-link" target="_blank">Live</a>
                    </div>
                    <div className="site-tech d-flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="text-end dev-img" alt="react logo"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" className="text-end dev-img" alt="bootstrap logo"/>
                    </div>
                </div>
            </div>
            <div className="card project-card">
                <img src="https://raw.githubusercontent.com/JoelLH/Images/main/portfolioImages/Project5.jpeg" alt="" className="card-img"/>
                <div className="card-body">
                    <a href="https://cute-florentine-bf3141.netlify.app/" className="card-title title-color">
                        Interactive Pricing Component
                    </a>
                    
                    <div className="card-text">
                        <p>Responsive interactive price component with slider</p>
                        Features: 
                        <ul className="project-ul">
                            <li>View the optimal layout for the app depending on their device's screen size</li>
                            <li>See hover states for all interactive elements on the page</li>
                            <li>Use the slider and toggle to see prices for different page view numbers</li>
                        </ul>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <div className="site-links d-flex">
                        <a href="https://github.com/JoelLH/frontend-projects/tree/main/interactive-pricing-component-main" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"  className="dev-img" alt="github logo"/></a>
                        
                        <a href="https://cute-florentine-bf3141.netlify.app/" className="card-live-link" target="_blank">Live</a>
                    </div>
                    <div className="site-tech d-flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="text-end dev-img" alt="javascript logo"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original-wordmark.svg" className="text-end dev-img" alt="devicon logo"/>
                    </div>
                </div>
            </div>
            <div className="card project-card">
                <img src="https://raw.githubusercontent.com/JoelLH/Images/main/portfolioImages/pomodoro-timer.jpeg" alt="" className="card-img"/>
                <div className="card-body">
                    <a href="https://pomodorotimer-joelwebdev.netlify.app/" className="card-title title-color">
                        Pomodoro Timer
                    </a>
                    
                    <div className="card-text">
                        <p>The pomodoro  is a productivity and time management timer that breaks 30min intervals into 25mins of focused work and 5 mins breaks</p>
                        Features: 
                        <ul className="project-ul">
                            <li>Session and breaks controls</li>
                            <li>Timer display that changes depending on the current status</li>
                            <li>Start/Stop and reset controls</li>

                        </ul>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <div className="site-links d-flex">
                        <a href="https://github.com/JoelLH/Projects/tree/main/pomodoro-timer" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"  className="dev-img" alt=""/></a>
                        
                        <a href="https://pomodorotimer-joelwebdev.netlify.app/" className="card-live-link" target="_blank">Live</a>
                    </div>
                    <div className="site-tech d-flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="text-end dev-img" alt="react logo"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original-wordmark.svg" className="text-end dev-img" alt="devicon logo"/>
                    </div>
                </div>
            </div>
            <div className="card project-card">
                <img src="https://raw.githubusercontent.com/JoelLH/Images/main/portfolioImages/interactive-comments.jpeg" alt="Interactive Comments Section" className="card-img"/>
                <div className="card-body">
                    <a href="https://curious-marshmallow-469d68.netlify.app/" className="card-title title-color">
                        Interactive comments section
                    </a>
                    <div className="card-text ">
                        <p>Comment section page built with vanilla JavaScript</p>
                        Features: 
                        <ul className="project-ul">
                            <li>View the optimal layout  depending on their device's screen size</li>
                            <li>Hover states for all interactive elements on the page</li>
                            <li>Create, Read, Update, and Delete comments and replies
                            Upvote and downvote comments</li>
                        </ul>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <div className="site-links d-flex">
                        <a href="https://github.com/JoelLH/frontend-projects/tree/main/interactive-comments-section-main" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"  className="dev-img" alt=""/></a>
                        
                        <a href="https://curious-marshmallow-469d68.netlify.app/" className="card-live-link" target="_blank">Live</a>
                    </div>
                    <div className="site-tech d-flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="text-end dev-img" alt="javascript logo"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original-wordmark.svg" className="text-end dev-img" alt="devicon logo"/>
                    </div>
                </div>
            </div>
            <div className="card project-card">
                <img src="https://raw.githubusercontent.com/JoelLH/Images/main/portfolioImages/twindog-joewebdev.png" alt="" className="card-img"/>
                <div className="card-body">
                    <a href="https://twindog-joewebdev.netlify.app/" className="card-title title-color">
                        Tindog('tinder') web app  
                    </a>
                    
                    <div className="card-text ">
                        <p>Aims to recreate tinder date app for dogs in a fun way. It uses class object constructor to create a new user dog for display</p>
                        Features:
                        <ul className="project-ul">
                            <li>Responsive web app</li>
                            <li>Like and dislike buttons which trigger animations and display a corresponding badge</li>
                        </ul>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <div className="site-links d-flex">
                        <a href="https://github.com/JoelLH/frontend-projects/tree/main/clipboard-landing-page-master" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"  className="dev-img" alt="github logo"/></a>
                        
                        <a href="https://twindog-joewebdev.netlify.app/" className="card-live-link" target="_blank">Live</a>
                    </div>
                    <div className="site-tech d-flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original-wordmark.svg" className="text-end dev-img" alt="devicon logo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}