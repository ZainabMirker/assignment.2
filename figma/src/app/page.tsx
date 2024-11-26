import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Edu.Co</title>
        <meta name="description" content="Selling on the internet like a pro" />
      </Head>
      <main className="bg-[#252B42] min-h-screen text-white">
        {/* Header Section */}
        <header className="flex items-center justify-between px-8 py-4">
          <h1 className="text-2xl font-bold ml-10">Edu.Co</h1>
          <nav className="flex space-x-10 pr-[120px]">
            <a href="#" className="hover:text-[#23A6F0]">
              Home
            </a>
            <a href="#" className="hover:text-[#23A6F0]">
              Product
            </a>
            <a href="#" className="hover:text-[#23A6F0]">
              Pricing
            </a>
            <a href="#" className="hover:text-[#23A6F0]">
              Contact
            </a>
          </nav>
          <div>
            <button className="text-[1rem] font-semibold py-2 px-6 mr-4 hover:text-[#23A6F0]">
              Login
            </button>
            <button className="bg-[#23A6F0] text-xs font-semibold py-2 px-6 rounded hover:bg-[#5cafdfdd]">
              JOIN US
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center mt-12 space-y-4">
          <h2 className="text-xl  text-[#23A6F0]">Welcome</h2>
          <h1 className="text-5xl font-bold leading-relaxed uppercase pb-0">
            Selling on the
            <br />
            internet like a pro
          </h1>
          <p className="max-w-md mx-auto mt-2 pb-2 text-gray-400 text-[1rem]">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <div className="flex justify-center mt-8 space-x-4">
            <button className="bg-[#23A6F0] py-3 px-8 rounded ">
              Get Quote Now
            </button>
            <button className="border text-[#23A6F0] border-[#23A6F0] py-2 px-8 rounded">
              Learn More
            </button>
          </div>
        </section>

        {/* Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-8">
          <div className="bg-[#ffff] p-6 rounded shadow-md">
            <div className="w-[70px] h-[76px] p-[22px_19px] gap-[10px] rounded-[10px] bg-[#FFDCD1]"></div>
            <h3 className="text-xl font-semibold py-4 mb-2 text-[#252B42]">
              Training Courses
            </h3>
            <div className="w-[50px] h-[2px] bg-[#E74040] mt-[-15px] "></div>
            <p className="text-[#737373] leading-5 pt-3">
              The gradual accumulation of information about atomic and
              small-scale behavior...
            </p>
          </div>
          <div className="bg-[#ffff] p-6 rounded shadow-md">
            <div className="w-[70px] h-[76px] p-[22px_19px] gap-[10px] rounded-[10px] bg-[#B9EAA8]"></div>
            <h3 className="text-xl font-semibold py-4 mb-2 text-[#252B42]">
              2,790 online Courses
            </h3>
            <div className="w-[50px] h-[2px] bg-[#E74040] mt-[-15px] "></div>
            <p className="text-[#737373] leading-5 pt-3">
              The gradual accumulation of information about atomic and
              small-scale behavior...
            </p>
          </div>
          <div className="bg-[#23A6F0] p-6 rounded shadow-md">
            <div className="w-[70px] h-[76px] p-[22px_19px] gap-[10px] rounded-[10px] bg-[#ffff]"></div>
            <h3 className="text-xl font-semibold py-4 mb-2 text-[#ffff]">
              Training Courses
            </h3>
            <div className="w-[50px] h-[2px] bg-[#ffff] mt-[-15px] "></div>
            <p className="text-[#ffff] leading-5 pt-3">
              The gradual accumulation of information about atomic and
              small-scale behavior...
            </p>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="text-center py-8 mt-16 border-t border-gray-700">
          &copy; {new Date().getFullYear()} Edu.Co | All rights reserved.
        </footer>
      </main>
    </>
  );
}

