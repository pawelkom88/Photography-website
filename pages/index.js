import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../components/loader/Loader";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/main"), 4000);

    return () => clearTimeout(timer);
  }, [router]);

  return <Loader />;
}
