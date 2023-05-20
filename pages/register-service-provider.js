import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSuspenseS1 from "@components/tools/loading/loadingSuspenseS1";

const RegisterServiceProvider = dynamic(() => import("@components/register-service-provider/register-service-provider"), {
  ssr: false,
});

// import ContactUs from '@components/contact-us/contact-us'
export default function RegisterServiceProviderPage() {
 
  return (
    <div>
      <Head>
        <title>التسجيل كمزود خدمة</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>

      <Suspense fallback={<LoadingSuspenseS1 />}>
        <RegisterServiceProvider />
      </Suspense>
    </div>
  );
}
