'use client';
import {savePageLinks} from "@/actions/pageActions";
import { upload } from "@/app/libs/upload";
import SubmitButton from "@/components/buttons/SubmitButton";
import { Icon } from "@iconify/react";
import Image from "next/image";
import {useState} from "react";
import toast from "react-hot-toast";
import {ReactSortable} from "react-sortablejs";

export default function PageLinksForm({page,user}) {
  const [links,setLinks] = useState(page.links || []);
  async function save() {
    await savePageLinks(links);
    toast.success('Guardados con éxito!');
  }
  function addNewLink() {
    setLinks(prev => {
      return [...prev, {
        key: Date.now().toString(),
        title:'',
        subtitle:'',
        icon:'',
        url:'',
      }];
    });
  }
  function handleUpload(ev, linkKeyForUpload) {
    upload(ev, uploadedImageUrl => {
      setLinks(prevLinks => {
        const newLinks = [...prevLinks];
        newLinks.forEach((link,index) => {
          if (link.key === linkKeyForUpload) {
            link.icon = uploadedImageUrl;
          }
        });
        return newLinks;
      });
    });
  }
  function handleLinkChange(keyOfLinkToChange, prop, ev) {
    setLinks(prev => {
      const newLinks = [...prev];
      newLinks.forEach((link) => {
        if (link.key === keyOfLinkToChange) {
          link[prop] = ev.target.value;
        }
      });
      return [...prev];
    })
  }
  function removeLink(linkKeyToRemove) {
    setLinks(prevLinks =>
      [...prevLinks].filter(l => l.key !== linkKeyToRemove)
    );
  }
  return (
    <form action={save}>
    <h2 className="text-2xl font-bold mb-4">Links Personales</h2>
    <button
      onClick={addNewLink}
      type="button"
      className="text-blue-500 text-lg flex gap-2 items-center cursor-pointer">
      <Icon className="bg-blue-500 text-white p-1 rounded-full aspect-square" icon={"ic:round-plus"} />
      <span>Agregar</span>
    </button>
    <div className="">
      <ReactSortable
        handle={'.handle'}
        list={links} setList={setLinks}>
        {links.map(l => (
          <div key={l.key} className="mt-8 md:flex gap-6 items-center">
            <div className="handle">
            <Icon icon={"uim:grip-horizontal-line"} 
            className="cursor-pointer text-black handle font-bold" 
            />
            </div>
            <div className="text-center">
              <div className="bg-gray-300 relative aspect-square overflow-hidden w-16 h-16 inline-flex justify-center items-center">
                {l.icon && (
                  <Image
                    className="w-full h-full object-cover"
                    src={l.icon}
                    alt={'icon'}
                    width={64} height={64} />
                )}
                {!l.icon && (
                  <Icon icon={"ph:link-fill"} fontSize={42} ssr={true}/>
                )}
              </div>
              <div>
                <input
                  onChange={ev => handleUpload(ev,l.key)}
                  id={'icon'+l.key}
                  type="file"
                  className="hidden"/>
                <label htmlFor={'icon'+l.key} className="border mt-2 p-2 flex items-center gap-1 text-gray-600 cursor-pointer mb-2 justify-center">
                <Icon icon={"ic:twotone-cloud"} ssr={true} />
                  <span>Cambiar Icono</span>
                </label>
                <button
                  onClick={() => removeLink(l.key)}
                  type="button" className="w-full bg-gray-300 py-2 px-3 mb-2 h-full flex gap-2 items-center justify-center">
                  <Icon icon={"iconamoon:trash-duotone"} />
                  <span>Eliminar</span>
                </button>
              </div>
            </div>
            <div className="grow">
              <label className="input-label">Titulo:</label>
              <input
                value={l.title}
                onChange={ev => handleLinkChange(l.key, 'title', ev)}
                type="text" placeholder="Sitio Web"/>
              <label className="input-label">Subtitulo:</label>
              <input
                value={l.subtitle}
                onChange={ev => handleLinkChange(l.key, 'subtitle', ev)}
                type="text" placeholder="Descripción opcional"/>
              <label className="input-label">URL:</label>
              <input
                value={l.url}
                onChange={ev => handleLinkChange(l.key, 'url', ev)}
                type="text" placeholder="url"/>
            </div>
          </div>
        ))}
      </ReactSortable>
    </div>
    <div className="w-full text-center">
      <SubmitButton>
        Guardar
      </SubmitButton>
    </div>
  </form>
  );
}