import FeaturedCard from "../components/HomeCompo/FeaturedCard";
import Posts from "../components/HomeCompo/Posts";
import { fetchAllData } from "../utils/prismicQueries";
import HomeHead from "../components/HomeCompo/HomeHead";
export async function getStaticProps() {
  const data = await fetchAllData();
  return {
    props: {
      posts: data,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className="flex bg-primary min-h-screen">
      <div className="flex flex-col w-full justify-center py-3">
        <h3 className="text-white font-mono text-base font-medium w-fit text-center m-auto p-1 sm:text-xl">Blogging is good for your career. A well-executed blog sets you apart as an expert in your field.<span className="font-mono text-l font-bold w-fit block ml-auto text-highlight sm:text-xl">~ Penelope Trunk</span></h3>
        <HomeHead />
        <FeaturedCard posts={posts} />
        <Posts posts={posts} />
     
      </div>
    </div>
  );
}
