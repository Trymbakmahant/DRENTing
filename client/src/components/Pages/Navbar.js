function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">DRENTing</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Rent/Buy</a>
          </li>
          <li tabIndex={0}>
            <a>Upload Product</a>
          </li>
          <li>
            <a>Connect</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
