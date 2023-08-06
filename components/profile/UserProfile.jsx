import ProfileForm from "./ProfileForm";
import style from "./UserProfile.module.css";

function UserProfile() {
  // Redirect away if NOT auth

  return (
    <section className={style.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
