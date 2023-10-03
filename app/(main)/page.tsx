import { redirect } from "next/navigation";

export default function Home() {
  if (true) {
    redirect(`/collections/${"outerwear"}`);
  }
  return <h1>home</h1>;
}
