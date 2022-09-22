

export default function WalloF(){

    return (
        <div className="col-lg wall-col">
            <div className="card ">
                <div className="card-header">
                    <h4 className="card-title title-color">
                                Wall of fame
                    </h4>
                </div>
                <div className="card-body wall-body">
                    <div className="wall-item">
                        <img src="https://raw.githubusercontent.com/JoelLH/Images/main/portfolioImages/project8.jpeg" alt="" className="w-item-img" />
                            <h4 className="w-item-title text-dark">
                                E-commerce Product page
                            </h4>
                            <ul className="w-item-data">
                                <li className="w-item-link">
                                    <a href="https://e-commerce-joelweb.netlify.app/" className=" w-item-btn" target="_blank">Live</a>
                                </li>
                                <li className="w-item-git ">
                                    <a href="https://github.com/JoelLH/frontend-projects/tree/main/ecommerce-page-react" className=" w-item-btn btn-black bg-dark" target="_blank">Github</a>
                                </li>
                            </ul>
                            <div className="leader-board gold">01</div>
                    </div>
                    <div className="wall-item">
                        
                        <img src="https://raw.githubusercontent.com/JoelLH/Images/main/portfolioImages/project7.jpeg" alt="" className="w-item-img" />
                            <h4 className="w-item-title text-dark">
                            Meme Generator
                            </h4>
                            <ul className="w-item-data">
                                <li className="w-item-link">
                                    <a href="https://joellh.github.io/meme-generator/" className="w-item-btn" target="_blank">Live</a>
                                </li>
                                <li className="w-item-git ">
                                    <a href="https://github.com/JoelLH/meme-generator" target="_blank" className=" w-item-btn btn-black bg-dark">Github</a>
                                </li>
                            </ul>
                            <div className="leader-board silver">02</div>
                    </div>
                    <div className="wall-item">
                        <img src="https://raw.githubusercontent.com/JoelLH/Images/main/portfolioImages/wall3.jpeg" alt="" className="w-item-img" />
                            <h4 className="w-item-title">
                            Markdown Editor
                            </h4>
                            <ul className="w-item-data">
                                <li className="w-item-link">
                                    <a href="https://markdown-preview-jhweb.netlify.app/"
                                    target="_blank"
                                    className=" w-item-btn">Live</a>
                                </li>
                                <li className="w-item-git">
                                    <a href="https://github.com/JoelLH/markdown-previewer"
                                    className=" w-item-btn btn-black"
                                    target="_blank"
                                    >Github</a>
                                </li>
                            </ul>
                            <div className="leader-board bronze">03</div>
                    </div>
                </div>
            </div>
        </div>
    )
}