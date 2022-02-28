import PostHeader from '../../components/PostComponents/PostHeader';
import PostContent from '../../components/PostComponents/PostContent';
import { fetchAllData,fetchSingleData } from '../../utils/prismicQueries';

export const getStaticProps = async({params}) => {

  const post = await fetchSingleData(params.slug);
  return{
    props:{
      data:post,
    }
  }
}


export const getStaticPaths = async() => {
  const data = await fetchAllData();
  return{
    paths:data.map(({node})=>({
      params:{slug:node._meta.uid}
    })),
    fallback:false,
  }
  
}

const Post = ({data}) => {
  return (
  <div className="2xl:px-[15rem] flex flex-col w-full min-h-screen bg-primary xl:px-[8rem] lg:px-[6rem] md:px-[4rem] sm:px-[2rem]">
      {/* {console.log(data)} */}
      <PostHeader imgurl={data.post_image.url} title={data.post_title[0].text}/>
      <PostContent ele={data}/>
  </div>
  );
};

export default Post;


