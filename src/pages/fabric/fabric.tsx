// React Imports
import { useEffect, useState } from "react";

// Assets Imports
import bg from "@/assets/images/frame.png";

// Fabric Imports
import { fabric } from "fabric";

export function Fabric() {
  const [img, setImg] = useState("");

  useEffect(() => {
    void (async () => {
      const img = await new Promise<fabric.Image>((res) => {
        fabric.Image.fromURL(bg, res);
      });

      const text = new fabric.Text("hello world");

      const group = new fabric.Group([img, text]);

      const groupHeight = group.height || 0;
      const textTop = text.top || 0;
      const textHeight = text.height || 0;
      text.set({ top: groupHeight + textTop - textHeight });

      const dataURL = group.toDataURL({});
      setImg(dataURL);

      // const blob = await new Promise<Blob>((res, rej) => {
      //   group.toCanvasElement().toBlob(
      //     (blob) => {
      //       blob ? res(blob) : rej(null);
      //     },
      //     "image/jpeg",
      //     0.95
      //   );
      // });

      // const href = URL.createObjectURL(blob);
      // const a = document.createElement("a");
      // a.href = href;
      // a.download = `${Date.now()}.jpg`;
      // a.click();
      // a.remove();
      // URL.revokeObjectURL(href);
    })();
  }, []);

  return (
    <>
      <img src={img} width={380} alt="fabric" />
    </>
  );
}
