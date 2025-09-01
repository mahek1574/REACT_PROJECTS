const Footer = () => {
  return (
    <>
      <div className="bg-fuchsia-200 text-gray-700 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-2 py-5">
          <p className="text-center md:text-left text-md">
            &copy; 2025 YourCompany. All rights reserved.
          </p>

          <div className="flex space-x-4 text-md">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Catalog
            </a>
            <a href="#" className="hover:underline">
              Contact us
            </a>
          </div>

          <div className="flex space-x-4 text-lg">
            <a href="#">
              <i className="fab fa-facebook-f hover:text-blue-600"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter hover:text-blue-400"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram hover:text-pink-500"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in hover:text-blue-600"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-purple-800 h-1"></div>
    </>
  );
};

export default Footer;
