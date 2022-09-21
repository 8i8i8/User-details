import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Voting() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [rank1, setRank1] = useState("");
  const [rank2, setRank2] = useState("");
  const [rank3, setRank3] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const [currentItem, setCurrentItem] = useState("rank 1");

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err.data));
  }, []);
  const search = (a) => {
    setSearchInput(a.target.value);
    const searchResult = data.filter((b) => {
      if (
        b.dishName.toLowerCase().includes(a.target.value.toLowerCase()) ||
        b.description.toLowerCase().includes(a.target.value.toLowerCase())
      ) {
        return b;
      }
    });
    setSearchResult(searchResult);
  };
  const css = (rank) => {
    if (currentItem === rank) return "a  px-3 p-2 d-flex";
    else return "px-3 p-2 d-flex";
  };
  const onclick = (rank) => {
    if (currentItem === rank) setCurrentItem("");
    else setCurrentItem(rank);
  };
  const logout = () => {
    localStorage.clear();
  };

  const presentData = searchResult.length > 0 ? searchResult : data;
  return (
    <div className="container my-3 ">
      {console.log(error)}
      {error && <p>{error}</p>}
      <header className=" header d-flex  justify-content-between">
        <a className=" " href="mailto:ar7617@srmist.edu.in">
          <h1 className=" cursor text-start m-3 font">Web developer</h1>
        </a>
        <button
          className="btn text-end m-3 logout"
          onClick={logout}
          type="submit"
        >
          <Link className="logout" to="/">
            log out
          </Link>
        </button>
      </header>
      <div className="p-3 ">
        <div className="my-3 ">
          {currentItem && (
            <strong className="m-3 color ">
              select item for {currentItem} from the list below
            </strong>
          )}
          {rank1 && rank2 && rank3 && (
            <p className="mx-3 color ">
              You can edit any time by selecting the rank
            </p>
          )}
        </div>
        <div onClick={() => onclick("rank 1")} className={css("rank 1")}>
          <h3 className="grey py-1">rank 1 </h3>{" "}
          <h3 className="mx-2 py-1">{rank1}</h3>
          <h3 className="grey py-1">- 30 points</h3>
        </div>
        <div onClick={() => onclick("rank 2")} className={css("rank 2")}>
          <h3 className="grey py-1">rank 2</h3>{" "}
          <h3 className="mx-2 py-1">{rank2}</h3>
          <h3 className="grey py-1">- 20 points</h3>
        </div>
        <div onClick={() => onclick("rank 3")} className={css("rank 3")}>
          <h3 className="grey py-1">rank 3</h3>{" "}
          <h3 className="mx-2 py-1">{rank3}</h3>
          <h3 className="grey py-1">- 10 points</h3>
        </div>
        {rank1.length > 0 && rank2.length > 0 && rank3.length > 0 && (
          <button className="btn  mx-3 mt-3 complete ">complete voting</button>
        )}
      </div>

      <div className="container">
        <div className="container my-4">
          <input
            className="form-control  "
            type="search"
            value={searchInput}
            placeholder={`search ${currentItem}`}
            onChange={search}
          />
          <p className=" mx-2">
            {" "}
            {searchInput.length > 0
              ? searchResult.length === 0
                ? "nothing was found"
                : "results"
              : ""}
          </p>
        </div>
        {presentData.length > 0 && (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4  mx-auto ">
            {presentData.map((a) => (
              <div className="col mx-auto">
                <div
                  className="card mx-auto"
                  key={a.id}
                  style={{ width: "18rem" }}
                >
                  <img
                    className="card-img-top"
                    src={a.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{a.dishName}</h5>
                    <p className="card-text">{a.description}</p>
                    <button
                      className="btn"
                      key={a.id}
                      onClick={() => {
                        switch (currentItem) {
                          case "rank 1":
                            setRank1(() => a.dishName);
                            console.log(
                              a.dishName === rank2 || rank2.length === 0
                            );
                            if (a.dishName === rank2 || rank2.length === 0) {
                              setRank2("");
                              setCurrentItem("rank 2");
                            } else if (
                              a.dishName === rank3 ||
                              rank3.length === 0
                            ) {
                              setRank3("");
                              setCurrentItem("rank 3");
                            } else setCurrentItem("");

                            break;

                          case "rank 2":
                            setRank2(() => a.dishName);

                            if (a.dishName === rank1 || rank1.length === 0) {
                              setRank1("");
                              setCurrentItem("rank 1");
                            } else if (
                              a.dishName === rank3 ||
                              rank3.length === 0
                            ) {
                              setRank3("");
                              setCurrentItem("rank 3");
                            } else setCurrentItem("");
                            break;

                          case "rank 3":
                            setRank3(() => a.dishName);

                            if (a.dishName === rank2 || rank2.length === 0) {
                              setRank2("");
                              setCurrentItem("rank 2");
                            } else if (
                              a.dishName === rank1 ||
                              rank1.length === 0
                            ) {
                              setRank1("");
                              setCurrentItem("rank 1");
                            } else setCurrentItem("");
                            break;

                          default:
                            setCurrentItem("");
                        }
                      }}
                    >
                      Rank this item
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <footer className=" text-center my-3 ">
        <a className=" footer" href="mailto:ar7617@srmist.edu.in">
          Contact us for creating websites{" "}
          <i className="fa fa-envelope" aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
}

export default Voting;
