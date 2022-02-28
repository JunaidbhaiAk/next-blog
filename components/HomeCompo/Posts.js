import BlogCard from "./BlogCard"
export default function Posts({posts}) {
    return (
      <div className="mt-12 flex flex-wrap justify-center">
          {posts.map(({node})=>{
             return ( 
                !node.post_featured && <BlogCard post={node} key={node._meta.id}/>
             )
            // console.log(ele);
          })}
      </div>
    )
  }