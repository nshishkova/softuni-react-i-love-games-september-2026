
import { storageRequest } from "../../utils/request";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function Profile() {
    const navigate = useNavigate();
    const uploadFileHandler = async (formData) => {
        const file = formData.get("profile-picture");

        try {
            await storageRequest(file.name, file);
            //TODO update database with the new profile picture URL or reference
            //"https://erupyawdaagduppaijwm.supabase.co/storage/v1/object/images"
            toast.success("File uploaded successfully");

            navigate("/");
        } catch (error) {
            toast.error("Error uploading file: " + error.message);
        }
    };


    return (
        <section id="profile-page">
            <form id="profile-form" action={uploadFileHandler}>
                <div className="container">

                    <h1>My Profile</h1>

                    <div className="profile-picture">
                        <img
                            src={"https://th.bing.com/th/id/R.fd8b7793156d3610e359e1cc830c8c50?rik=H9%2b3P%2buueepg5Q&pid=ImgRaw&r=0"}
                            alt="Profile picture"
                            width="150"
                            height="150"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="avatar">Upload Picture:</label>
                        <input type="file" id="avatar" name="profile-picture" accept="image/*" />
                    </div>

                    <input className="btn submit" type="submit" value="SAVE PICTURE" />

                </div>
            </form>
        </section>
    );
}
