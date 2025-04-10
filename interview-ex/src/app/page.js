import Footer from "../components/Footer/Page";
import Header from "../components/Header/Page";
import Center from "../components/Center/Page";
import Interviews from "../components/Interviews/Page";

export default function Home() {
  return (
    <div className="h-screen flex flex-col ">
      <header className="h-[10vh] fixed z-10 w-full">
        <Header />
      </header>
      <main className="flex-1 mt-[10vh]">
       <Center/>
       <Interviews/>
      </main>
      <footer className="h-[30%] bg-[#202c3b] ">
        <Footer />
      </footer>
      </div>
  );
}
