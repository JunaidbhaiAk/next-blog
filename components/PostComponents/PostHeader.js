import Image from 'next/image'
import Head from 'next/head'
import { useState,useEffect } from "react";
const PostHeader = ({imgurl,title,sub}) => {

    const [scrollwidth,setscrollwidth] = useState('0');
    useEffect(()=>{
      window.addEventListener("scroll", scrollIncreaser);   
      return(()=>{
        window.removeEventListener("scroll", scrollIncreaser);
      })
    })
    const scrollIncreaser = () => {
        const scrollTotal = document.documentElement.scrollTop;
        const heightWin = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = `${Math.floor(scrollTotal / heightWin * 100)}%`;
        setscrollwidth(scroll);
    }

    const progressMainStyle = {
        height: "5px",
        position:'sticky',
        background: "#5DEDCB",
        width: scrollwidth,
        top:'0',
    };

    return(<>
    <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title} key="title" />
        <meta name="description" content={sub}></meta>
    </Head>
    <Image className="w-full h-[300px] bg-cover object-cover" src={imgurl} alt="cool" width={700} height={400}/>
    <div style={progressMainStyle} id="scr"></div>
    </>)
}

export default PostHeader;