
export default function Profile() {
    


    return (
        <section id="profile-page">
            <form id="profile-form" action={submitAction}>
                <div className="container">

                    <h1>My Profile</h1>

                    <div className="profile-picture">
                        <img
                            src={previewUrl || "/images/avatar.png"}
                            alt="Profile picture"
                            width="150"
                            height="150"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="avatar">Upload Picture:</label>
                        <input type="file" id="avatar" name="avatar" accept="image/*" onChange={fileChangeHandler} />
                    </div>

                    <input className="btn submit" type="submit" value="SAVE PICTURE" />

                </div>
            </form>
        </section>
    );
}
