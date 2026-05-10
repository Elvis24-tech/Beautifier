import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-pink-50">

      <Navbar />

      <section className="grid md:grid-cols-2 items-center px-10 py-20">

        <div>

          <h1 className="text-6xl font-bold text-gray-800 leading-tight">
            Glow With Confidence
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Discover luxury beauty products crafted for elegance.
          </p>

          <button className="mt-8 bg-pink-500 text-white px-8 py-4 rounded-full">
            Explore Products
          </button>

        </div>

        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
            className="rounded-3xl shadow-2xl w-[500px]"
          />

        </div>

      </section>

    </div>
  );
}

export default Home;