import Head from "next/head";
import Footer from "/components/layout/Footer";

const about = () => {
  return (
    <>
      <Head>
        <title>About Codevolution</title>
        <meta name="description" content="Free tutorials on web development" />
      </Head>
      <div className="content">About</div>
    </>
  );
};

export default about;

about.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
