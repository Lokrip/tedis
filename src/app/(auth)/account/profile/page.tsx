import { getServerSession } from "next-auth";

export default async function ProfilePage() {
  const session = await getServerSession()

  console.log(session)

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>{session?.user?.name}</h2>
    </div>
  );
}
