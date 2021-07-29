import "./storyPage.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function () {
    const {id} = useParams();
    const [story, setStory] = useState({});
    useEffect(async () => {
        fetch(("http://localhost:8080/stories/"+id), {method: "GET", mode: "cors",
            headers: {'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'}}).then((response) => {
            response.json().then((newStory) => {setStory(newStory)
            });
        });
    })
    return (
        <div>
            <h1>{story.title}</h1>
            <h3>{story.overview}</h3>
            <p>{story.text}</p>
        </div>
    );
}