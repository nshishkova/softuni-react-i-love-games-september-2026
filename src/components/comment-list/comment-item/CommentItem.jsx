import { useAuth } from "../../../hooks/useAuth.js";

export default function CommentItem({ id, text, author, userId, onDelete }) {
    const { user } = useAuth();
    const isAuthor = user?.id === userId;
    return (
        <li className="comment">
            <p>
                {author}: {text} {isAuthor && <button onClick={() => onDelete(id)}>X</button>}
            </p>
        </li>

    );
}