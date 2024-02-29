import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  const profileData = {
    "data": {
      "user": {
        "name": "Rishabh Tyagi",
        "bio": "Full Stack Software Developer 🚀 | Software Engineer @rishabhTyagi",
        "avatarUrl": "https://avatars.githubusercontent.com/u/41332162?v=4",
        "location": "Gurugram, Haryana",
        "pinnedItems": {
          "totalCount": 4,
          "edges": [
            {
              "node": {
                "name": "Moksh Art Gallery",
                "description": "🚀 An art gallery is a place where one can see and buy artworks by emerging, established or master artists. It's important to keep in mind that a gallery is not a shop, but a meeting point for art lovers.",
                "url": "https://artgallery-kappa.vercel.app/",
                "diskUsage": 26102,
                "primaryLanguage": {
                  "name": "React",
                  "color": "#f1e05a"
                }
              }
            },
            {
              "node": {
                "name": "Altstar",
                "description": "🔥 Outline the potential for rental income and appreciation in property value over time, providing a compelling case for investment.",
                "forkCount": 137,
                "stargazers": {
                  "totalCount": 781
                },
                "url": "https://altstar.vercel.app/",
                "id": "MDEwOlJlcG9zaXRvcnkyMzUwNTIwMDE=",
                "diskUsage": 35575,
                "primaryLanguage": {
                  "name": "React",
                  "color": "#f1e05a"
                }
              }
            },
            {
              "node": {
                "name": "Qfund",
                "description": "🤖 QFundTMprovides a complete solution for managing the Payday loan transactions for loans that are disbursed to borrowers in return for checks drawn",
                "url": "https://qfunduiuxqa.qfund.net/",
                "id": "MDEwOlJlcG9zaXRvcnkyMTU1NDg3ODY=",
                "diskUsage": 2139,
                "primaryLanguage": {
                  "name": "React",
                  "color": "#f1e05a"
                }
              }
            },
            {
              "node": {
                "name": "Trust43",
                "description": "🎉 Empower Homebuyers with ease of Information",
                "forkCount": 10,
                "stargazers": {
                  "totalCount": 39
                },
                "url": "https://trust43.com",
                "id": "MDEwOlJlcG9zaXRvcnkxOTMwMzQ1ODI=",
                "diskUsage": 27697,
                "primaryLanguage": {
                  "name": "React",
                  "color": "#f1e05a"
                }
              }
            }
          ]
        }
      }
    }
  }


  // useEffect(() => {
  //   const getRepoData = () => {
  //     fetch("/profile.json")
  //       .then(result => {
  //         if (result.ok) {
  //           return result.json();
  //         }
  //         throw result;
  //       })
  //       .then(response => {
  //         setrepoFunction(response.data.user.pinnedItems.edges);
  //       })
  //       .catch(function (error) {
  //         console.error(
  //           `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
  //         );
  //         setrepoFunction("Error");
  //       });
  //   };
  //   getRepoData();
  // }, []);

  // function setrepoFunction(array) {
  //   setrepo(array);
  // }
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Other Projects</h1>
          <div className="repo-cards-div-main">
            {profileData.data.user.pinnedItems.edges.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
