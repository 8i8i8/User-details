import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import css from "./components/css";
import btn from "./components/btn";
import Store from "../../storage/store";
import Footer from "../../components/footer";
import Header from "../../components/header";

function Result({ logout }) {
  const addStoreData = Store((state) => state.add);

  const getStoreData = Store((state) => state.store[0]);
  const [data, setData] = useState(getStoreData || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const rank1 = localStorage.getItem("rank 1")
    ? JSON.parse(localStorage.getItem("rank 1"))
    : "";
  const rank2 = localStorage.getItem("rank 2")
    ? JSON.parse(localStorage.getItem("rank 2"))
    : "";
  const rank3 = localStorage.getItem("rank 3")
    ? JSON.parse(localStorage.getItem("rank 3"))
    : "";

  useEffect(() => {
    if (data?.length === 0) {
      setLoading(true);
      axios
        .get(
          "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
        )
        .then((res) => {
          setData(res.data);
          addStoreData(res.data);
          setLoading(false);
          return setError("");
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, []);
  return (
    <div className="container my-3">
      <Header logout={logout} />
      <div className="container d-flex align-items-center justify-content-center">
        <h3>
          {" "}
          <Link to="/user" className="text-center title titleResult pe-1">
            voting
          </Link>{" "}
        </h3>
        <h3 className="title"> Results</h3>
      </div>
      {error?.length > 0 && <h2 className="text-center black">{error}</h2>}
      {loading && (
        <h2 className="text-center black">
          <span
            class="spinner-grow spinner-grow-sm me-2 m1-2"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </h2>
      )}
      {error?.length === 0 && !loading && (
        <>
          <button
            className="btn complete mt-3 mb-1 ms-3"
            onClick={() => btn(data, setData, rank1, rank2, rank3)}
          >
            display your ranks
          </button>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4  mx-auto scroll2 ">
            {data?.length > 0 &&
              data.map((a) => (
                <div className="col mx-auto ">
                  <div
                    className={css(a, rank1, rank2, rank3)}
                    key={a.id}
                    style={{ width: "18rem" }}
                  >
                    <img
                      className="card-img-top"
                      src={a.image}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <div className=" d-flex card-title">
                        <h5 className="result me-2">{a.id}</h5>{" "}
                        <h5>{a.dishName}</h5>
                      </div>
                      <p className="card-text">{a.description}</p>
                      {a.id === rank1.id && a.dishName === rank1.name && (
                        <h4 className="black">Rank 1</h4>
                      )}
                      {a.id === rank2.id && a.dishName === rank2.name && (
                        <h4 className="black">Rank 2</h4>
                      )}
                      {a.id === rank3.id && a.dishName === rank3.name && (
                        <h4 className="black">Rank 3</h4>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Result;
