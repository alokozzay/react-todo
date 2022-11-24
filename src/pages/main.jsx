import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import PostForm from "../copmponents/PosrForm";
import PostFilter from "../copmponents/PostFilter";
import Posts from "../copmponents/Posts";

import Loader from "../copmponents/UI/loader/Loader";
import MyModal from "../copmponents/UI/modal/MyModal";
import Pagination from "../copmponents/UI/pagination/pagination";
import useFetching from "../hooks/useFetching";

import { useSortedandSearch } from "../hooks/usePosts";
import getPagesCount from "../utils/pages";

function Main() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ search: "", select: "" });

  const [modal, setModal] = useState(false);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPost, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  const searchAndsortedPost = useSortedandSearch(
    posts,
    filter.select,
    filter.search
  );

  const chengePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    fetchPost();
  }, [page]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  return (
    <div className="App">
      <MyModal visibility={modal} setVisibility={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
        setModalClick={setModal}
      />
      {postError && <h1>${postError}</h1>}
      {isPostLoading ? (
        // <h1>Loading posts...</h1>
        <Loader />
      ) : (
        <Posts
          remove={removePost}
          posts={searchAndsortedPost}
          title="Post List!"
        />
      )}

      <Pagination page={page} totalPages={totalPages} chengePage={chengePage} />
    </div>
  );
}

export default Main;
