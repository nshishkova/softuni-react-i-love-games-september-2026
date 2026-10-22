import { useReducer, useEffect } from "react";
import CommentItem from "./comment-item/CommentItem.jsx";
import { commentReducer } from "./comment-reducer.js";
import { commentApi } from "../../api/index.js";

export default function CommentList({gameId}) {
    const [comments, dispatch] = useReducer(commentReducer, []);

    useEffect(() => {
        commentApi.getAll(gameId)
            .then(result => dispatch({ type: "SET_COMMENTS", payload: result }));
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