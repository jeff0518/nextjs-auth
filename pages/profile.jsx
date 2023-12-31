import { getSession } from "next-auth/react";

import UserProfile from "@/components/profile/UserProfile";

function ProfilePage() {
  return <UserProfile />;
}

export async function getServeSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default ProfilePage;
