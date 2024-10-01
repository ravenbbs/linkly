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
import AppAside from "@/components/layout/AppAside";

export default async function AccountPage({ searchParams }) {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;

  if (!session) {
    return redirect("/");
  }
  
  // Connect to MongoDB if not already connected
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI);
  }

  const page = await Page.findOne({ owner: session?.user?.email });
  const user = await User.findOne({ owner: session?.user?.email });

  const pagePlain = page ? page.toJSON() : null;
  const userPlain = user ? user.toJSON() : null;

  if (pagePlain) {
    return (
      <>
        <AppAside UserImage={session?.user?.image} uri={pagePlain.uri}/>
        <div className="flex flex-col shrink-0 gap-2 max-w-4xl self-end bg-base-300 mt-24 sm:mt-0">
          <PageSettingsForm page={pagePlain} user={userPlain} session={session} />
          <PageButtonsForm page={pagePlain} />
          <PageLinksForm page={pagePlain} user={session?.user} />
        </div>
      </>
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