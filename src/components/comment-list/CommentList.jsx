import { useState, useEffect } from "react";
import request from "../../utils/request.js";
import CommentItem from "./comment-item/CommentItem.jsx";

export default function CommentList({gameId}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        request(`/comments?game_id=eq.${gameId}&order=created_at.desc`)
            .then(result => setComments(result));
    }, [gameId]);
    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
                {comments.map(comment => <CommentItem key={comment.id} {...comment} />)}

            </ul>
            {/* <!-- Display paragraph: If there are no games in the database --> */}
            {/* <!-- <p className="no-comment">No comments.</p> --> */}
        </div>
    );
}