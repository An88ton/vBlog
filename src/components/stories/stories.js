import {Link} from "react-router-dom";
import Story from "../story/story";
import "./stories.css"
import {useEffect, useState} from "react";

export default function () {
    const [stories, setStories] = useState([]);

    useEffect(async () => {
        fetch("http://localhost:8080/stories/", {method: "GET", mode: "cors",
            headers: {'Access-Control-Allow-Origin':'*',
                      'Content-Type': 'application/json'}}).then((response) => {
            response.json().then((arrStories) => {setStories(arrStories)
            });
        });
    })

    return (
        <div className="Stories">
            {stories.map(story => {
                return (<Link to={"/story/"+story.id} className={"StoryLink"}>
                    <Story title={story.title}
                           overview={story.overview}
                           text={story.text}
                           author={story.author}/>
                </Link>)
            })
            }
        </div>
    )

    /* [
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
            text: "So now I making my project",
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

    ]*/
}