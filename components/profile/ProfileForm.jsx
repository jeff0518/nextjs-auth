import style from "./ProfileForm.module.css";

function ProfileForm() {
  return (
    <form className={style.form}>
      <div className={style.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" />
      </div>
      <div className={style.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" />
      </div>
      <div className={style.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
