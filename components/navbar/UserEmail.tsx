import { LuUser } from "react-icons/lu";
import {
  currentUser,
  // auth
} from "@clerk/nextjs/server";

async function UserEmail() {
  // const { userId } = auth()

  const user = await currentUser();

  const profileEmail = user?.emailAddresses[0].emailAddress;

  if (profileEmail) {
    return <p>Welcome {profileEmail.split("@")[0]}</p>;
  }

  return <p>Welcome Guest</p>;
}
export default UserEmail;
