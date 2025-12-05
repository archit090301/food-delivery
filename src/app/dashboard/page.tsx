import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Welcome {session?.user?.name}</h1>
      <p>Your role: {session?.user?.role}</p>
    </div>
  );
}
