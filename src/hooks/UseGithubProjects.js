import { useEffect, useState } from "react";
import axios from "axios";

export default function useGithubProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Aaryan-dw/repos")
      .then((res) => {
        setRepos(res.data.slice(0, 6));
      })
      .catch(console.error);
  }, []);

  return repos;
}