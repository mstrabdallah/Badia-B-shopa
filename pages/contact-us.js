import Head from "next/head";
import ContactUs from '@components/contact-us/contact-us'
export default function ContactUsPage() {

  return (
    <div>
      <Head>
        <title>باقات بي-شوبا</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>

      <ContactUs />
    </div>
  );
}
