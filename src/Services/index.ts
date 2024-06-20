import { Blog } from "../Interfaces/blogs";

export const loaderBlog = async(): Promise<Blog[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return posts as Blog[];
}