import React, { useState } from "react";

const Url = (e) => {
  const [inputUrl, setInputUrl] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [urls, setUrls] = useState("");
  const [copied, setCopied] = useState(false);
  const fetchShortenLink = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${inputUrl}`
      );
      if (!res.ok) {
        setLoading(false);
        throw new Error(
          "The link you have entered is a disallowed link. Please try with another link"
        );
      }
      const data = await res.json();
      setLoading(false);
      setUrls(data.result);
      setError(false);
      console.log(data.result);
    } catch (err) {
      setLoading(false);
      setError(true);
      setErrorMessage(
        "The link you have entered is a disallowed link. Please try with another link"
      );
      console.log(err);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!inputUrl) {
      setLoading(false);
      setError(true);
      setErrorMessage("Please add a link");
    } else {
      setLoading(true);
      fetchShortenLink();
    }
    setInputUrl("");
  };

  const onCopyHandler = () => {
    setCopied(true);
    navigator.clipboard.writeText(urls.short_link);
  };
  return (
    <>
      <div className="url">
        <form onSubmit={onSubmitHandler}>
          <input
            className={error && "error"}
            type="text"
            placeholder="Shorten a link here..."
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
          />

          <button
            type="submit"
            className="btn-shorten"
            onSubmit={onSubmitHandler}
          >
            Shorten it!
          </button>
        </form>
        {error && <small className={error && "danger"}>{errorMessage}</small>}
        {!error && loading && <p className="loading">loading</p>}
      </div>
      {urls && (
        <div className="url-response">
          <div className="display-result">
            <div className="original-link">
              <span> {urls.original_link}</span>
            </div>
            <div className="url-result">
              <span> {urls.short_link}</span>
              <button
                className={`btn-copy ${copied && "copied"}`}
                onClick={onCopyHandler}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Url;
