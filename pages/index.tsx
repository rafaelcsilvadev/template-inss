import NavBarComponent from '../components/navBar';
import MyInss from '../components/myInss';
import Footer from '../components/footer';
import Head from 'next/head';

function Home() {
  return (
    <main>
      <Head>
        <link rel="shortcut icon" href="/images/inss-logo.png" type="image/x-icon"/>
        <title>INSS</title>
      </Head>
      <NavBarComponent />
      <MyInss />
      <Footer/>
    </main>
  );
}

export default Home;
