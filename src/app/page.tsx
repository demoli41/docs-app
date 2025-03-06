import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      click <Link href="/documents/123" className="text-blue-400">here</Link> to go to the documents 123 page
    </div>
  );
}
export default Home;