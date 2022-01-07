import "./intro.scss";

export default function intro() {
    return (
        <div className="intro" id="intro">
            <div className="left" >
                <div className="imgContainer">
                    <img src="assets/kam.png" alt=""/>
                </div>
            </div>
            <div className="right" >
                <div className="wrapper">
                    <h2>Hi There,I'm</h2>
                    <h1>Kamran Ali</h1>
                    <h3>Front End Developer<span></span></h3>
                </div>
                <a href="#portfolio">
                      <img src="assets/" alt="" />      
                </a>
            </div>
            
        </div>
    )
}
