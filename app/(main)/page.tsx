import Image from "next/image";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

export default function Home() {
  if (true) {
    redirect(`/collections/${"outerwear"}`);
  }
  return <h1>home</h1>;
}
