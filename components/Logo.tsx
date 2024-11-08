import Image from "next/image";

export default function Logo() {
  return (
    <section className="flex items-center gap-2">
      <Image
        src="/images/dropbox-logo.svg"
        alt="logo"
        width={50}
        height={30}
        className="!w-10 !h-auto"
      />
      <h1 className="pt-1 font-black text-3xl text-deep-purple-500">Minibox</h1>
    </section>
  );
}
