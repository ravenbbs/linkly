import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UsernameForm from "@/components/UsernameForm";
import { Page } from "@/models/Page";
import mongoose from "mongoose";

export default async function AnalyticsPage({ searchParams }) {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;

  if (!session) {
    return redirect("/");
  }
  mongoose.connect(process.env.MONGODB_URI);


  const page = await Page.findOne({owner: session?.user?.email})

  if (page) {
    return (<>
    <div>
      Tu pagina de analytics
    </div>
    </>)
  }

  return (
    <div className="hero">
      <div className="hero-content text-center">
        <UsernameForm desiredUsername={desiredUsername} />
      </div>
    </div>
  );
}
