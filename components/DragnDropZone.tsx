"use client";

import { Button, Spinner } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "actions/storageActions";
import { queryClient } from "app/config/ReactQueryClientProvider";
import { useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";

export default function DragnDropZone() {
  const fileRef = useRef(null);
  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      });
    },
  });

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const formData = new FormData();

      acceptedFiles.forEach((file) => {
        formData.append(file.name, file);
      });

      const result = await uploadImageMutation.mutate(formData);
      console.log(result);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-col items-center justify-center w-full rounded-2xl py-24 border-2 border-dotted border-deep-purple-200 bg-light-green-100 cursor-pointer"
    >
      <input {...getInputProps()} />
      {uploadImageMutation.isPending ? (
        // @ts-ignore
        <Spinner />
      ) : isDragActive ? (
        <p className="font-bold text-green-700">파일을 여기에 놓아주세요</p>
      ) : (
        <p className="font-bold text-green-700">
          파일을 여기에 끌어다 놓거나 클릭하여 업로드하세요.
        </p>
      )}
      {/* @ts-ignore */}
      {/* <Button loading={uploadImageMutation.isPending} type="submit">
        파일 업로드
      </Button> */}
    </div>
  );
}
