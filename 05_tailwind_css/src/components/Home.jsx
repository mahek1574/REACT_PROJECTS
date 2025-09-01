const Home = () => {
  return (
    <>
    
      <nav className="bg-purple-800 text-white flex justify-between items-center h-20 px-8">
        <img
          src="https://img.freepik.com/premium-vector/smartphone-logo-communication-electronics-vector-modern-phone-design-company-brand-symbol_638875-2356.jpg?ga=GA1.1.1012781590.1740801856&semt=ais_hybrid&w=740"
          alt="Logo"
          className="w-14 h-14 rounded-3xl "
        />
        <ul className="flex space-x-9">
          <li className="cursor-pointer hover:text-fuchsia-300 transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-fuchsia-300 transition">
            About
          </li>
          <li className="cursor-pointer hover:text-fuchsia-300 transition">
            Catalog
          </li>
          <li className="cursor-pointer hover:text-fuchsia-300 transition">
            Contact us
          </li>
        </ul>
      </nav>

    
      <main className="bg-fuchsia-200 flex justify-around items-center min-h-[90vh] px-8 py-12">
      
        <div className="max-w-lg">
          <h1 className="text-6xl font-bold mb-6">
            The best phones in the town
          </h1>
          <p className="mb-6 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            sequi illo eum sit odit expedita ipsam, architecto impedit rerum?
            Cum.
          </p>

          <div>
            <button className="bg-purple-800 px-6 py-3 rounded-2xl text-white hover:text-slate-900 hover:bg-fuchsia-900 cursor-pointer mx-2 transition">
              Click me
            </button>
            <button className="bg-purple-800 px-6 py-3 rounded-2xl text-white hover:text-slate-900 hover:bg-fuchsia-900 cursor-pointer mx-2 transition">
              Contact us
            </button>
          </div>
        </div>

        
        <div className="flex items-center justify-center">
          <div className="relative rounded-full border-4 border-purple-800 w-72 h-72 flex items-center justify-center overflow-hidden shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeoiC9ZVhILDth92O6MqDXt9k9eVUqLSRkcQ&s"
              alt="phone"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
