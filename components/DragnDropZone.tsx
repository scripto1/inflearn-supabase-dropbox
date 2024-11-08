"use client";

import { Button } from "@material-tailwind/react";
import { uploadFile } from "actions/storageActions";
import { useRef } from "react";

export default function DragnDropZone() {
  const fileRef = useRef(null);

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const file = fileRef.current.files?.[0];
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          const result = await uploadFile(formData);
          console.log(result);
        }
      }}
      className="flex flex-col items-center justify-center w-full rounded-2xl py-24 border-2 border-dotted border-deep-purple-200 bg-light-green-100"
    >
      <input ref={fileRef} type="file" className="" />
      <p className="font-bold text-green-700">
        파일을 여기에 끌어다 놓거나 클릭하여 업로드하세요.
      </p>
      {/* @ts-ignore */}
      <Button type="submit">파일 업로드</Button>
    </form>
  );
}
