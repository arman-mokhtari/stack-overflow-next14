import Question from "@/components/forms/question";
import { getUserById } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";

const Page = async () => {
  // const { userId } = auth();

  const userId = "U_123";

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default Page;
