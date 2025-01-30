import { LuUser } from "react-icons/lu";
import {
  currentUser,
  // auth
} from "@clerk/nextjs/server";
import { Button } from "../ui/button";

async function UserEmail() {
  // const { userId } = auth()

  const user = await currentUser();

  const profileEmail = user?.emailAddresses[0].emailAddress;

  if (profileEmail) {
    return (
      <Button
        size="lg"
        variant="outline"
        className="bg-muted/10 text-lg text-blue-800 dark:text-blue-400"
      >
        Welcome {profileEmail.split("@")[0]}
      </Button>
    );
  }

  return (
    <Button
      size="lg"
      variant="outline"
      className="bg-muted/10 text-lg text-blue-800 dark:text-blue-400"
    >
      Welcome Guest
    </Button>
  );
}
export default UserEmail;
