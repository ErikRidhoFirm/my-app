import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const produk = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin");

    if (loginStatus !== "true") {
      router.replace("/auth/login"); // redirect ke halaman login jika belum login
    } else {
      setLoading(false); // set loading menjadi false jika sudah login
    }
  }, [router]);

  if (loading) return <div>Loading...</div>;
  return <div>Produk User Page</div>;
};

export default produk;
