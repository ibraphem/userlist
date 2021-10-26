import React, { useState } from "react";
import Header from "./components/layout/Header";
import Pagination from "./components/layout/Pagination";
import User from "./components/users/User";
import JSON from "./test";

function App() {
  const [users, setUsers] = useState(JSON);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getKeyword = (event) => {
    let keyword = event.target.value.toUpperCase();
    //console.log(keyword);
    if (keyword !== "") {
      let filter = users.filter((user) => {
        let user_name = user.first_name.toUpperCase();
        return user_name.indexOf(keyword) > -1;
      });
      setUsers(filter);
    } else {
      setUsers(JSON);
    }
  };
  return (
    <>
      <Header keyword={getKeyword} />
      {currentPosts.map(
        ({ id, first_name, last_name, email, gender, ip_address }) => (
          <User
            key={id}
            first_name={first_name}
            last_name={last_name}
            email={email}
            gender={gender}
            ip_address={ip_address}
          />
        )
      )}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={users.length}
        paginate={paginate}
      />
    </>
  );
}

export default App;
