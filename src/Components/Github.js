import { Typography, Container, Pagination } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Github() {
  const [repositories, setRepositories] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  function fetchRepos() {
    axios
      .get(
        `https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${pageNumber}`
      )
      .then((res) => {
        if (res.data.items) {
          setRepositories(res.data.items);
          console.log(res.data);
        }
      });
  }
  useEffect(() => {
    document.title = "Github most starred Repositories";
    fetchRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);
  return (
    <>
      <Container maxWidth="lg">
        <div className="back-home">
          <Link className="slider-action bg-white" to="/homepage">
            <i className="far fa-long-arrow-left"></i>
          </Link>
        </div>
        <div className="github-page-container">
          <Typography variant="h5">Top Repositories</Typography>
          <br />
          <div className="repositories flex-column">
            {repositories.map((repo) => {
              function getDateDifference(date) {
                var createdDate = new Date(date);
                var currentDate = new Date(Date.now());
                var difference = currentDate.getTime() - createdDate.getTime();
                var daysBetween = Math.floor(difference / (1000 * 3600 * 24));
                return daysBetween;
              }
              return (
                <div className="repo flex-row" key={repo.id}>
                  <img src={repo.owner.avatar_url} alt="" />
                  <div className="repo-details flex-column">
                    <span className="repo-title">{repo.name}</span>
                    <p className="repo-description">
                      {repo.description === null
                        ? "**No repo description**"
                        : repo.description}
                    </p>
                    <div
                      className="flex-row repo-row"
                      style={{ alignItems: "center" }}
                    >
                      <span className="repo-prop">
                        <b>Stars</b>:{" "}
                        {repo.stargazers_count > 1000
                          ? `${(repo.stargazers_count / 1000).toFixed(1)}k`
                          : repo.stargazers_count}
                      </span>
                      <span className="repo-prop">
                        <b>Issues</b>:
                        {repo.open_issues_count > 1000
                          ? `${(repo.open_issues_count / 1000).toFixed(1)}k`
                          : repo.open_issues_count}
                      </span>
                      <p className="repo-submission">
                        Created <b>{getDateDifference(repo.created_at)}</b> days
                        ago by <b>{repo.owner.login}</b>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <br />
        </div>
        {repositories.length > 0 && (
          <div className="pag-container">
            <Pagination
              variant="outlined"
              shape="rounded"
              count={20}
              onChange={(e, value) => {
                setPageNumber(value);
              }}
            />
          </div>
        )}
      </Container>
    </>
  );
}
