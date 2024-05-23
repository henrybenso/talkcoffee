import Layout from "../layout";
import { auth } from "../../auth";

async function getUser(id: string | undefined) {
  const res = await fetch(`http://localhost:3000/api/user/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const session = await auth();

  const user = await getUser(session?.user?.id);

  return (
    <Layout>
      <div>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">
            Account name: ${user.username ?? "No Username"}
          </h1>
          <p className="mt-4">Find me in src/app/account/page.tsx</p>
        </div>
      </div>
    </Layout>
  );
}
