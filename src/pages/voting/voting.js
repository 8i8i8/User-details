import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import search from "./components/search";
import itemOnClick from "./components/cases";
import ranks from "./components/ranks";
import Store from "../../storage/store";
import Header from "../../components/header";
function Voting({ logout }) {
  const addStoreData = Store((state) => state.add);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rank1, setRank1] = useState(
    localStorage.getItem("rank 1")
      ? JSON.parse(localStorage.getItem("rank 1")).name
      : ""
  );
  const [rank2, setRank2] = useState(
    localStorage.getItem("rank 2")
      ? JSON.parse(localStorage.getItem("rank 2")).name
      : ""
  );
  const [rank3, setRank3] = useState(
    localStorage.getItem("rank 3")
      ? JSON.parse(localStorage.getItem("rank 3")).name
      : ""
  );
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [currentItem, setCurrentItem] = useState("rank 1");

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
      )
      .then((res) => {
        setData(res.data);
        addStoreData(res.data);
        setError("");
        return setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  const presentData = searchResult.length > 0 ? searchResult : data;
  return (
    <div className="container my-3 ">
      <Header logout={logout} />
      <h3 className="text-center title">voting</h3>
      {error.length > 0 && <h2 className="text-center black">{error}</h2>}
      {loading && (
        <h2 className="text-center black">
          <span
            className="spinner-grow spinner-grow-sm me-2 m1-2"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </h2>
      )}

      {error?.length === 0 && !loading && (
        <>
          <div className="p-3 ">
            <div className="mb-3 ">
              {currentItem && (
                <strong className="mx-3 color ">
                  select item for {currentItem} from the list
                </strong>
              )}
              {rank1 && rank2 && rank3 && (
                <p className="mx-3 color ">
                  <small className="fon">
                    You can edit any time by selecting the rank
                  </small>
                </p>
              )}
            </div>
            {ranks("rank 1", rank1, 30, "rank1", currentItem, setCurrentItem)}
            {ranks("rank 2", rank2, 20, "rank2", currentItem, setCurrentItem)}
            {ranks("rank 3", rank3, 10, "rank3", currentItem, setCurrentItem)}
            {rank1.length > 0 && rank2.length > 0 && rank3.length > 0 && (
              <Link to="/result" className="btn  mx-3 mt-3 complete">
                complete voting
              </Link>
            )}
          </div>

          <div className=" container">
            <div className=" my-4">
              <input
                className="form-control"
                type="search"
                value={searchInput}
                placeholder={`search ${currentItem}`}
                onChange={(a) =>
                  search(a, setSearchInput, setSearchResult, data)
                }
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

            {presentData?.length > 0 && (
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4  mx-auto scroll ">
                {presentData.map((a) => (
                  <div key={a.id} className="col mx-auto">
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
                        {currentItem.length > 0 && (
                          <button
                            className="btn"
                            key={a.id}
                            onClick={() =>
                              itemOnClick(
                                a,
                                setRank1,
                                setRank2,
                                setRank3,
                                rank1,
                                rank2,
                                rank3,
                                setCurrentItem,
                                currentItem
                              )
                            }
                          >
                            Rank{" "}
                            {currentItem.length > 0
                              ? currentItem.charAt(currentItem.length - 1)
                              : "it"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
export default Voting;
