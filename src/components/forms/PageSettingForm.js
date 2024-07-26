"use client";
import { savePageSettings } from "@/actions/pageActions";
import { upload } from "@/app/libs/upload";
import SubmitButton from "@/components/buttons/SubmitButton";
import RadioTogglers from "@/components/formItems/radioTogglers";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function PageSettingsForm({ page, user, session }) {
  const [bgType, setBgType] = useState(page.bgType);
  const [bgColor, setBgColor] = useState(page.bgColor);
  const [bgImage, setBgImage] = useState(page.bgImage);
  const [avatar, setAvatar] = useState(user?.image || session.user.image);
  async function saveBaseSettings(formData) {
    const result = await savePageSettings(formData);
    if (result) {
      toast.success("Guardado con Exito!");
    }
  }

  async function handleCoverImageChange(ev) {
    await upload(ev, (link) => {
      setBgImage(link);
    });
  }
  async function handleAvatarImageChange(ev) {
    await upload(ev, (link) => {
      setAvatar(link);
    });
  }
  return (
    <form className=" rounded-md " action={saveBaseSettings}>
      <div
        className="py-4 rounded-md min-h-[280px] flex justify-center items-start pt-16 bg-cover bg-center"
        style={
          bgType === "color"
            ? { backgroundColor: bgColor }
            : { backgroundImage: `url(${bgImage})` }
        }
      >
        <div>
          <RadioTogglers
            defaultValue={page.bgType}
            options={[
              { value: "color", label: "Color", icon: "mdi:palette" },
              { value: "image", label: "Image", icon: "ph:image-duotone" },
            ]}
            onChange={(val) => setBgType(val)}
          />

          {bgType === "color" && (
            <label className="btn w-40 h-12 shadow mt-2">
              <span>Color:</span>
              <input
                type="color"
                name="bgColor"
                onChange={(ev) => setBgColor(ev.target.value)}
                defaultValue={page.bgColor}
              />
            </label>
          )}
          {bgType === "image" && (
            <label className="btn w-40 h-12 shadow mt-2">
              <input type="hidden" name="bgImage" value={bgImage} />
              <input
                type="file"
                onChange={handleCoverImageChange}
                className="hidden"
              />
              <span>Cambiar imagen:</span>
            </label>
          )}
        </div>
      </div>
      <div className="flex justify-center -mb-10 ">
        <div className="relative -top-20 w-[120px] h-[120px]">
          <div className="avatar">
            <div className="ring-secondary ring-offset-base-100 w-[120px] h-[120px] rounded-full ring ring-offset-2">
              <Image
                priority
                className="w-full h-full object-cover"
                src={avatar}
                alt={"avatar"}
                width={128}
                height={128}
              />
            </div>
          </div>

          <label
            htmlFor="avatarIn"
            className="absolute bottom-0 right-0 bg-white  rounded-full shadow shadow-black/50 aspect-square flex items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="oklch(var(--p))"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v9m0-9l3 3m-3-3l-3 3m8.5 2c1.519 0 2.5-1.231 2.5-2.75a2.75 2.75 0 0 0-2.016-2.65A5 5 0 0 0 8.37 8.108a3.5 3.5 0 0 0-1.87 6.746"
              />
            </svg>
          </label>
          <input
            onChange={handleAvatarImageChange}
            id="avatarIn"
            type="file"
            className="hidden"
          />
          <input type="hidden" name="avatar" value={avatar} />
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-center items-center md:justify-between px-6  ">
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Nombre</span>
          </div>
          <input
            type="text"
            id="nameIn"
            name="displayName"
            defaultValue={page.displayName}
            placeholder="Juan Carlos"
            className="input input-bordered w-full max-w-xl"
          />
        </label>

        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Ubicación</span>
          </div>
          <input
            type="text"
            id="locationIn"
            name="location"
            defaultValue={page.location}
            placeholder="Algún lugar..."
            className="input input-bordered w-full max-w-xl"
          />
        </label>

        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Your bio</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24  w-full max-w-xl"
            name="bio"
            defaultValue={page.bio}
            id="bioIn"
            placeholder="Escribe tu biografía aquí..."
          ></textarea>
        </label>
      </div>

      <div className="w-full text-center">
        <SubmitButton>Guardar</SubmitButton>
      </div>
    </form>
  );
}
