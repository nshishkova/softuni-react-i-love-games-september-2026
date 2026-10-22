import { useEffect, useContext } from "react";
import CommentContext from "../../contexts/comment-context.jsx";
import CommentItem from "./comment-item/CommentItem.jsx";
import { commentApi } from "../../api/index.js";

export default function CommentList({gameId}) {
    const { comments, dispatch } = useContext(CommentContext);

    useEffect(() => {
        commentApi.getAll(gameId)
            .then(result => dispatch({ type: "SET_COMMENTS", payload: result }));
    }, [gameId, dispatch]);

    const deleteCommentHandler = (id) => {
        commentApi.remove(id)
            .then(() => dispatch({ type: "DELETE_COMMENT", payload: id }));
    };

    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
                {comments.map(comment => <CommentItem key={comment.id} onDelete={deleteCommentHandler} {...comment} />)}

            </ul>
            {/* <!-- Display paragraph: If there are no games in the database --> */}
            {/* <!-- <p className="no-comment">No comments.</p> --> */}
        </div>
    );
}