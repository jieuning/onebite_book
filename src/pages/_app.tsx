import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/test");
  };

  useEffect(() => {
    // Link 컴포넌트를 사용하지 않을 때 프리패칭이 적용되지 않는 문제 해결
    router.prefetch("/test");
  }, []);

  return (
    <>
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        <Link href={"/search"} prefetch={false}>
          search
        </Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>
        <div>
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
