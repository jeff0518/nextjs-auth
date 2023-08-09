import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import ProfileForm from "./ProfileForm";
import style from "./UserProfile.module.css";

function UserProfile() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        window.location.href = "/auth";
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return <p className={style.profile}>Loading...</p>;
  }

  return (
    <section className={style.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
