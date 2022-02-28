import Link from "next/link"
import Image from "next/image"
import moment from 'moment';
export default function BlogCard({post}) {
    return (
    <Link href={`/post/${post._meta.uid}`}>
      <div className="flex flex-col w-[350px] bg-secondry rounded shadow-sm ml-4 mb-4 transition-all duration-300 hover:scale-110 cursor-pointer">
          <div className="h-[200px] w-full relative">
          <Image className="object-cover bg-cover rounded-t" src={post.post_image.url} alt="react" layout="fill"/>
          </div>
          <div className="flex flex-col p-4">
          <div className="pb-4 flex items-center justify-start ">
            <Image src="https://images.prismic.io/myblogy/74008bf6-35ff-4779-a1f2-e7029044960f_4712.jpg?auto=compress,format" className="bg-cover rounded-full" width={30} height={30} alt="my"/>
            <div className="pl-2">
                <span className="text-sm font-semibold text-highlight font-mono">Junaid S.</span>
                <p className="text-xs text-highlight font-mono">{moment(post.post_date).format('MMM DD')}</p>
            </div>
          </div>
              <h1 className="text-xl font-bold text-white pb-2">{post.post_title[0].text}</h1>
              <p className="text-md text-sub leading-[25px] pb-2">{post.post_subtitle[0].text}</p>
              <div className="flex">
                  <p className="pr-2 text-highlight font-mono">{post.post_tags}</p>
              </div>
          </div>
      </div>
      </Link>
    )
  }