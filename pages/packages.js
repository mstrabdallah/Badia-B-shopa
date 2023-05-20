import Head from "next/head";
import { wrapper } from "../store/store";
import { getMemberships, getMemberships2 } from "../store/slices/packages/packagesSlice";
import Packages from '@components/packages/packages'



// export const getStaticProps = wrapper.getStaticProps(store => async (context) => {
//   const data = await store.dispatch(getMemberships())

//   //  console.log(data)
//   // return { props: { id: null } };

//   return {
//     revalidate: 10, // In seconds
//   }
// });



export default function PackagesPage() {

  return (
    <div>
      <Head>
        <title>باقات بي-شوبا</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>

      <Packages />
    </div>
  );
}

