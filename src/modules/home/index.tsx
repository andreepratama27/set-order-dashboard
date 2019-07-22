import React from "react";

const Home: React.FC = () => {
  return (
    <section className="w-full">
      <nav className="flex items-center justify-between flex-wrap bg-gray-200 p-6 pl-10">
        <ul className="flex">
          <li className="mr-12">
            <a href="#" className="font-bold">
              Business settings
            </a>
          </li>
          <li className="mr-8">
            <a href="#" className="text-gray-500">
              Account settings
            </a>
          </li>
        </ul>
      </nav>

      <div className="menu p-6 border-b-2 border-gray-200 pl-10">
        <div className="menu-input">
          <p className="text-2xl">Menu and category</p>

          <div className="w-full">
            <form action="" className="flex">
              <div className="mb-4 mt-6 w-1/4 mr-10">
                <label htmlFor="" className="block text-gray-700">
                  Name
                </label>

                <input
                  type="text"
                  className="mt-2 w-full py-2 border-gray-200 border-2 rounded-sm pl-3"
                  placeholder="Name restaurant"
                />
              </div>

              <div className="mb-4 mt-6 w-1/4">
                <label htmlFor="" className="block text-gray-700">
                  Category
                </label>

                <select
                  name=""
                  id=""
                  className="block w-full border-gray-200 bg-white mt-2 border-2 h-10 py-2"
                >
                  <option value="">Mexico</option>
                  <option value="">Texas</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="menu p-6 border-b-2 border-gray-200 pl-10">
        <div className="menu-input">
          <p className="text-2xl">Cover photo</p>
          <p>Use your best interior photo to showcase your business</p>

          <div className="mt-6 h-56 w-1/2 bg-gray-200 rounded-lg">
            <img src="https://unsplash.it/300x300?random" alt="" />
          </div>
          <p className="mt-3 text-gray-700">JPEG, PNG files only - MAX 5MB</p>
        </div>
      </div>

      <div className="menu p-6 pl-10">
        <div className="menu-input">
          <p className="text-2xl">Address and phone number</p>
          <p>Use your best interior photo to showcase your business</p>

          <div className="w-full">
            <form action="" className="flex flex-col">
              <div className="mt-6 w-1/2 mr-10">
                <label htmlFor="" className="block text-gray-700">
                  Name
                </label>

                <input
                  type="text"
                  className="mt-2 w-full py-2 border-gray-200 border-2 rounded-sm pl-3"
                  placeholder="Name restaurant"
                />
              </div>

              <div className="flex mt-4 w-1/2 justify-between">
                <div className="w-64">
                  <input
                    type="text"
                    className="mt-2 w-full py-2 border-gray-200 border-2 rounded-sm pl-3"
                    placeholder="Name restaurant"
                  />
                </div>
                <div className="w-64">
                  <input
                    type="text"
                    className="mt-2 w-full py-2 border-gray-200 border-2 rounded-sm pl-3"
                    placeholder="Name restaurant"
                  />
                </div>
                <div className="w-64">
                  <input
                    type="text"
                    className="mt-2 w-full py-2 border-gray-200 border-2 rounded-sm pl-3"
                    placeholder="Name restaurant"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
