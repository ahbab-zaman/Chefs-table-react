const Header = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="text-gray-500 font-semibold hover:transition-colors hover:duration-300">
                  Home
                </a>
              </li>
              <li>
                <a className="text-gray-500 font-semibold hover:transition-colors hover:duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a className="text-gray-500 font-semibold hover:transition-colors hover:duration-300">
                  About
                </a>
              </li>
              <li>
                <a className="text-gray-500 font-semibold hover:transition-colors hover:duration-300">
                  Search
                </a>
              </li>
            </ul>
          </div>
          <h4 className="font-bold text-2xl">CHAFES TABLE</h4>
        </div>

        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a className="text-gray-500 font-semibold hover:transition-colors hover:duration-300">
                Home
              </a>
            </li>
            <li>
              <a className="text-gray-500 font-semibold hover:transition-colors hover:duration-300">
                Contact
              </a>
            </li>
            <li>
              <a className="text-gray-500 font-semibold hover:transition-colors hover:duration-300">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-500 font-semibold hover:transition-colors hover:duration-300">
                Search
              </a>
            </li>
          </ul>
        </div>

        <div class="navbar-end space-x-2">
         <div>
         <input placeholder="Search" type="text" name="" id="" className="bg-slate-200 rounded-full py-1 px-2"/>
         </div>
          <div className="bg-green-300 w-8 h-8 flex justify-center items-center rounded-full">
            <i class="fa-regular fa-circle-user"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
