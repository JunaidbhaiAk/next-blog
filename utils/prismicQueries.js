import client from "./prismichelper";
import gql from "graphql-tag";

export const fetchAllData = async () => {
  try {
    const data = await client.query({
      query: gql`
        query {
          _allDocuments {
            edges {
              node {
                ... on Blog_post {
                  _meta {
                    uid
                  }
                  post_title
                  post_subtitle
                  post_image
                  post_tags,
                  post_featured
                }
                _meta {
                  id
                }
              }
            }
          }
        }
      `,
    });
    return data.data._allDocuments.edges;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleData = async(slug) => {
    try{
        const data = await client.query({
            query: gql`
            query{
                blog_post(uid:"${slug}",lang:"en-us"){
                  post_image,
                  post_title
                  post_content,
                  post_tags,
                  post_date
                }
            }
            `
        });
        return data.data.blog_post;
    }catch(error){
        console.log(error);
    }
}
