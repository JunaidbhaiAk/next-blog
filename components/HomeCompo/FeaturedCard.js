import Image from "next/image";
import Link from "next/link"
import moment from 'moment';
export default function FeaturedCard({posts}) {
    return (
        <>
        {posts.map(({node,idx})=>{
            return node.post_featured &&
            <Link href={`/post/${node._meta.uid}`}> 
            <div className="flex w-[450px] h-[250px] bg-secondry mx-auto rounded-md sm:w-[600px] hover:scale-110 cursor-pointer duration-200" key={idx}>
            <div className="w-[50%] relative">
            <Image src={node.post_image.url} alt="logo" className="bg-cover rounded-tl-md rounded-bl-md" layout="fill" objectFit="cover"/>
            </div>
            <div className="flex flex-col w-[50%] items-start px-5 py-3 justify-evenly">
                <span className="text-sm text-sub pb-1 relative w-[100%] before:font-mono before:content-['FeatureCard'] before:block before:right-0 before:absolute before:text-[0.6rem] before:text-highlight  before:bottom-[1.8rem] sm:before:text-sm">Technology</span>
                <h1 className="text-2xl sm:text-3xl font-bold text-white pb-2">{node.post_title[0].text}</h1>
                <div className="flex flex-col">
                    <p className="text-sm sm:text-base font-medium text-white leading-8">Junaid S.</p>
                    <p className="text-sm text-sub">{moment(node.post_date).format('MMM DD')}</p>
                </div>
            </div>
        </div>
        </Link>
        })}
      
      </>
    )
  }