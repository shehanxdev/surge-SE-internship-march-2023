//MODULES
import React, { useEffect, useState } from "react";
import axios from "axios";
//HELPER FUNCTIONS
import formatDate from "../helpers/formatDate";
//TEMP IMAGE
import IMG from "../data/feliphe-schiarolli-FiuoiImpa3s-unsplash.jpg";
//MUI icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function ListingSection() {
  const [posts, setPosts] = useState([]);
  //useEffect hook
  useEffect(() => {
    async function fetchData() {
      axios
        .get(process.env.REACT_APP_API_URL + "/posts")
        .then((result) => {
          console.log(result.data);
          console.log(formatDate(result.data[0].createdAt));
          setPosts(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);
  //formatPosts
  const formatPosts = posts.map((post) => {
    return (
      <div className="row flex-column align-items-center mb-5 mt-5 custom-post-card">
        <img className="h-25 w-50" src={IMG} alt="Image placeholder" />
        <div className="row flex-row justify-content-center mt-2">
          <span className="w-25">
            <FavoriteIcon sx={{ color: "pink" }} />
            {post.likes}
          </span>
          <span className="w-25">
            <em>
              <b>{post.userName}</b>
            </em>
          </span>
          <span className="w-25">{formatDate(post.createdAt)}</span>
        </div>
      </div>
    );
  });

  //Conditional rendering of the componenet
  if (posts.length != 0) {
    return <div>{formatPosts}</div>;
  } else {
    return <div>Your feed is loading. Please hold a moment....</div>;
  }
}

export default ListingSection;
