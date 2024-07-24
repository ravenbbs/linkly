import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import PageSettingsForm from "@/components/forms/PageSettingForm";
import PageButtonsForm from "@/components/forms/PageButtonsForm";
import UsernameForm from "@/components/UsernameForm";
import PageLinksForm from "@/components/forms/PageLinkForm";
import { User } from "@/models/User";

export default async function AccountPage({ searchParams }) {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;

  if (!session) {
    return redirect("/");
  }
  mongoose.connect(process.env.MONGODB_URI);

  const page = await Page.findOne({ owner: session?.user?.email});
  const user = await User.findOne({owner: session?.user?.email})

  if (page) {
    return (
      <div className="flex flex-col gap-2 max-w-4xl self-end bg-base-300 mt-24 sm:mt-0">
        <PageSettingsForm page={page} user={user} session={session} />
        <PageButtonsForm page={page} />
        <PageLinksForm page={page} user={session?.user} />
      </div>
    );
  }

  return (
    <div className="hero">
      <div className="hero-content text-center">
        <UsernameForm desiredUsername={desiredUsername} />
      </div>
    </div>
  );
}
