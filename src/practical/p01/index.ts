type Post = {
  id: number;
  title: string;
};

export async function getEdgePosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  if (data.length === 0) return [];

  const first = { id: data[0].id, title: data[0].title };
  const last = { id: data[data.length - 1].id, title: data[data.length - 1].title };

  if (data.length === 1) {
    return [first, first];
  }

  return [first, last];
}