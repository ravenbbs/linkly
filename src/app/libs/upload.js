import toast from "react-hot-toast";

export async function upload(ev, callbackFn) {
  const file = ev.target.files?.[0];

  if (file) {

    const uploadPromise = new Promise((resolve, reject) => {
      const data = new FormData;
      data.set('file', file);
      fetch('/api/uploadthing', {
        method: 'POST',
        body: data,
      }).then(response => {
        if (response.ok) {
          response.json().then(link => {
            callbackFn(link);
            resolve(link);
          });
        } else {
          reject();
        }
      });
    });

    await toast.promise(uploadPromise, {
      loading: 'Subiendo...',
      success: 'Éxito!',
      error: 'Ocurrió un error!',
    });

  }
}