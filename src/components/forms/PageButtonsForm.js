'use client';

import {savePageButtons} from "@/actions/pageActions";
import SubmitButton from "@/components/buttons/SubmitButton";
import { ReactSortable } from "react-sortablejs";
import { Icon } from "@iconify/react";

import {useState} from "react";
import toast from "react-hot-toast";

export const allButtons = [
  {key: 'email', 'label': 'e-mail', icon: "iconoir:mail-solid", placeholder: 'Juanito@gmail.com'},
  {key: 'mobile', 'label': 'mobile', icon: "solar:phone-bold", placeholder: '+1 222 222 222'},
  {key: 'instagram', 'label': 'instagram', icon: "mdi:instagram"},
  {key: 'facebook', 'label': 'facebook', icon: "mdi:facebook"},
  {key: 'discord', 'label': 'discord', icon: "ic:baseline-discord"},
  {key: 'tiktok', 'label': 'tiktok', icon: "ic:baseline-tiktok"},
  {key: 'youtube', 'label': 'youtube', icon: "mdi:youtube"},
  {key: 'whatsapp', 'label': 'whatsapp', icon: "mdi:whatsapp"},
  {key: 'github', 'label': 'github', icon: "mdi:github"},
  {key: 'telegram', 'label': 'telegram', icon: "mdi:telegram"},
];

function upperFirst(str) {
  return str.slice(0,1).toUpperCase() + str.slice(1);
}

export default function PageButtonsForm({page}) {
  const pageButtons = page.buttons || {};
  const pageSavedButtonsKeys = Object.keys(pageButtons);
  const pageSavedButtonsInfo = pageSavedButtonsKeys
    .map(k => allButtons.find(b => b.key === k))
    .filter(Boolean);

  const [activeButtons, setActiveButtons] = useState(pageSavedButtonsInfo);

  function addButtonToProfile(button) {
    setActiveButtons(prevButtons => {
      return [...prevButtons, button];
    });
  }

  async function saveButtons(formData) {
    await savePageButtons(formData);
    toast.success('Guardado con Exito!');
  }

  function removeButton({key:keyToRemove}) {
    setActiveButtons(prevButtons => {
      return prevButtons
        .filter(button => button.key !== keyToRemove);
    });
  }

  const availableButtons = allButtons.filter(b1 => !activeButtons.find(b2 => b1.key === b2?.key));

  return (
    <div>
      <form action={saveButtons}>
        <h2 className="text-2xl font-bold mb-4">Buttons</h2>
        <ReactSortable
          handle=".handle"
          list={activeButtons}
          setList={setActiveButtons}>
          {activeButtons.map(b => (
            <div key={b.key} className="mb-4 md:flex items-center">
              <div className="w-56 flex h-full text-gray-700 p-2 gap-2 items-center">
                <Icon
                  icon={"uim:grip-horizontal-line"}
                  className="cursor-pointer text-black handle font-bold"  ssr={true}/>
                <Icon icon={b.icon} ssr={true}/>
                <span>{upperFirst(b.label)}:</span>
              </div>
              <div className="grow flex">
                <input
                  placeholder={b.placeholder}
                  name={b.key}
                  defaultValue={page.buttons[b.key]}
                  type="text" style={{marginBottom:'0'}} />
                <button
                  onClick={() => removeButton(b)}
                  type="button"
                  className="py-2 px-4  cursor-pointer">
                  <Icon icon={"iconamoon:trash-duotone"} />
                </button>
              </div>
            </div>
          ))}
        </ReactSortable>
        <div className="flex flex-wrap gap-2 mt-4 border-y py-4">
          {availableButtons.map(b => (
            <button
              key={b.key}
              type="button"
              onClick={() => addButtonToProfile(b)}
              className="flex items-center gap-1 p-2 bg-gray-200">
              <Icon icon={b.icon} />
              <span className="">
                {upperFirst(b.label)}
              </span>
              <Icon icon={"ic:round-plus"} />
            </button>
          ))}
        </div>
        <div className="max-w-xs mx-auto mt-8">
          <SubmitButton>
            Guardar
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}