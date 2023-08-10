// import { getSession } from "next-auth/react";
// import { useState, useEffect } from "react";
import ProfileForm from "./ProfileForm";
import style from "./UserProfile.module.css";

function UserProfile() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       window.location.href = "/auth";
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return <p className={style.profile}>Loading...</p>;
  // }
  async function changePasswordHandler(passwordData) {
    const response = await fetch("/api/user/changePassword", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <section className={style.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
