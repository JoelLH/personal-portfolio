

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
                        <img src="http://placeimg.com/640/360/any" alt="" className="w-item-img" />
                            <h4 className="w-item-title">
                                Lorem, ipsum dolor.
                            </h4>
                            <ul className="w-item-data">
                                <li className="w-item-link">
                                    <a href="#" className=" w-item-btn">Live</a>
                                </li>
                                <li className="w-item-git">
                                    <a href="#" className=" w-item-btn btn-black">Github</a>
                                </li>
                            </ul>
                            <div className="leader-board gold">01</div>
                    </div>
                    <div className="wall-item">
                        
                        <img src="http://placeimg.com/640/360/any" alt="" className="w-item-img" />
                            <h4 className="w-item-title">
                            Meme Generator
                            </h4>
                            <ul className="w-item-data">
                                <li className="w-item-link">
                                    <a href="https://joellh.github.io/meme-generator/" className="w-item-btn" target="_blank">Live</a>
                                </li>
                                <li className="w-item-git">
                                    <a href="#" className=" w-item-btn btn-black">Github</a>
                                </li>
                            </ul>
                            <div className="leader-board silver">02</div>
                    </div>
                    <div className="wall-item">
                        <img src="http://placeimg.com/640/360/any" alt="" className="w-item-img" />
                            <h4 className="w-item-title">
                            Lorem, ipsum dolor.
                            </h4>
                            <ul className="w-item-data">
                                <li className="w-item-link">
                                    <a href="#" className=" w-item-btn">Live</a>
                                </li>
                                <li className="w-item-git">
                                    <a href="#" className=" w-item-btn btn-black">Github</a>
                                </li>
                            </ul>
                            <div className="leader-board bronze">03</div>
                    </div>
                </div>
            </div>
        </div>
    )
}