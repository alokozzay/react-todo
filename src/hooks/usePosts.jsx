import { useMemo } from "react";

export const useSortedPosts = (posts, select) => {
  const sortedPost = useMemo(() => {
    if (select) {
      return [...posts].sort((a, b) => a[select].localeCompare(b[select]));
    }
    return posts;
  }, [select, posts]);
  return sortedPost;
};

export const useSortedandSearch = (posts, select, search) => {
  const sortedPost = useSortedPosts(posts, select);
  const searchAndsortedPost = useMemo(() => {
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(search)
    );
  }, [search, sortedPost]);
  return searchAndsortedPost;
};
