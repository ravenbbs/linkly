import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import PageSettingsForm from "@/components/forms/PageSettingForm";
import UsernameForm from "@/components/UsernameForm";
export default async function AccountPage({ searchParams }) {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;

  if (!session) {
    return redirect("/");
  }
  mongoose.connect(process.env.MONGODB_URI);

  const page = await Page.findOne({owner: session?.user?.email})

  if (page) {
    return (<>
    <PageSettingsForm/>
    </>
    
  )
  }

  return (
    <div className="hero">
      <div className="hero-content text-center">
        <UsernameForm desiredUsername={desiredUsername} />
      </div>
    </div>
  );
}
