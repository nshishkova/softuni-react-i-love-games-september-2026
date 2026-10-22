import { useAuth } from "../../../hooks/useAuth.js";

export default function CommentItem({ id, text, author, user_id, onDelete }) {
    const { user } = useAuth();
    const isAuthor = user?.id === user_id;
    return (
        <li className="comment">
            <p>
                {author}: {text} {isAuthor && <button onClick={() => onDelete(id)}>X</button>}
            </p>
        </li>

    );
}