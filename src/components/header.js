function Header({ logout }) {
  return (
    <header className=" header d-flex  justify-content-between">
      <a className=" " href="mailto:ar7617@srmist.edu.in">
        <h2 className=" cursor text-start m-3 font">Web developer</h2>
      </a>
      <button
        onClick={() => logout()}
        className="btn text-end my-3 logout"
        type="submit"
      >
        log out
      </button>
    </header>
  );
}

export default Header;
