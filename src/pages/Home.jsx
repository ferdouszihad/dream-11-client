import Banner from "../components/Banner";
import Countries from "../components/Countries";

const Home = () => {
  return (
    <>
      <section data-aos="fade-up">
        {/* todo :: Need to customize Banner  */}
        <Banner></Banner>
      </section>
      <section>
        <Countries></Countries>
      </section>
      {/* todo :: Need to customize 2 section */}
      <section>
        <div className="w-11/12 bg-slate-300 mx-auto flex my-5 rounded-lg justify-center items-center min-h-[500px]">
          <h2 className="text-5xl font-bold">Extra Section - 1</h2>
        </div>
      </section>
      <section>
        <div className="w-11/12 bg-slate-300 mx-auto flex my-5 rounded-lg justify-center items-center min-h-[500px]">
          <h2 className="text-5xl font-bold">Extra Section - 2</h2>
        </div>
      </section>
    </>
  );
};
export default Home;
