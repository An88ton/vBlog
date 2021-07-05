import "./headerBar.css";
export default (props) => {
    return (
        <div className={"headerBar"}>
            <img src="../../resources/logo.png"/>
            <div className="navigation">
                <a href={""}>My cabinet</a>
                <a href={""}>Stories</a>
                <a href={""}>Add story</a>
            </div>
            <hr/>
        </div>
    )
}