import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Next Js Pre-Rendering method</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <Link href="/news">
        <a>News</a>
      </Link>
    </>
  );
}
