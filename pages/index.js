import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../components/loader/Loader";
import Panels from "../components/panels/Panels";

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/main"), 4000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <Panels />
      <Loader />;
    </>
  );
}
