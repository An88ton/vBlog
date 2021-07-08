import {Link} from "react-router-dom";
import { Redirect } from "react-router-dom";
import Story from "../story/story";
import "./stories.css"

let stories = null;

export default function () {
    stories = [
        {
            id: 0,
            title: "I began to study react",
            overview: "It was really new experience",
            text: "So now I making my project",
            author: "Jack"
        },
        {
            id: 1,
            title: "I began to study react",
            overview: "It was really new experience",
            text: "So now I making my project",
            author: "Jack"
        },
        {
            id: 2,
            title: "I began to study react",
            overview: "It was really new experience",
            text: "So now I making my projectsdvdfsvdsfbvdfsbdfsbdbdfsbdfbfsdbvdsfbvdsfbsdfbd",
            author: "Jack"
        },
        {
            id: 3,
            title: "I began to study react",
            overview: "It was really new experience",
            text: "So now I making my project",
            author: "Jack"
        },
        {
            id: 4,
            title: "I began to study react",
            overview: "It was really new experience",
            text: "So now I making my project",
            author: "Jack"
        },
        {
            id: 5,
            title: "I began to study react",
            overview: "It was really new experience",
            text: "So now I making my project",
            author: "Jack"
        },

    ]
    return (
        <div className="Stories">
            {stories.map(story => {
                return (<Link to={"/story/"+story.id} className={"StoryLink"}><Story title={story.title}
                               overview={story.overview}
                               text={story.text}
                               author={story.author}
                /></Link>)
            })
            }
        </div>
    )
}