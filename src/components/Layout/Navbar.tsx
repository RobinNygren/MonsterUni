import { Menu } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-monsters-uni-secondary text-monsters-uni-detail p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">
          Monsters University
        </NavLink>
        <div className="flex items-center space-x-4">
          <Menu as="div" className="relative">
            <Menu.Button className="hover:bg-monsters-uni-accent px-4 py-2 rounded">
              Monster Students
            </Menu.Button>
            <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-1">
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      to="/add-monster"
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
                      to="/edit-monster"
                      className={`${
                        active ? "bg-gray-100" : ""
                      } group flex rounded-md items-center w-full p-2 text-sm text-gray-900`}
                    >
                      Edit Monster
                    </NavLink>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
          <NavLink
            to="/monsters"
            className="hover:bg-monsters-uni-accent px-4 py-2 rounded"
          >
            Monsters
          </NavLink>
          <NavLink
            to="/about"
            className="hover:bg-monsters-uni-accent px-4 py-2 rounded"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:bg-monsters-uni-accent px-4 py-2 rounded"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
