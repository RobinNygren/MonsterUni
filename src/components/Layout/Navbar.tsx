import { Menu } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">
          Monsters University
        </NavLink>
        <div className="flex items-center space-x-4">
          <Menu as="div" className="relative">
            <Menu.Button className="px-4 py-2 rounded hover:bg-gray-700">
              Monster Students
            </Menu.Button>
            <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-1">
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      to="/addmonster"
                      className={`${
                        active ? "bg-gray-100" : ""
                      } group flex rounded-md items-center w-full p-2 text-sm text-gray-900`}
                    >
                      Add Monster
                    </NavLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      to="/updatemonster"
                      className={`${
                        active ? "bg-gray-100" : ""
                      } group flex rounded-md items-center w-full p-2 text-sm text-gray-900`}
                    >
                      Update Monster
                    </NavLink>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
          <NavLink
            to="/monsters"
            className="hover:bg-gray-700 px-4 py-2 rounded"
          >
            Monsters
          </NavLink>
          <NavLink to="/about" className="hover:bg-gray-700 px-4 py-2 rounded">
            About
          </NavLink>
          <a href="/contact" className="hover:bg-gray-700 px-4 py-2 rounded">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
