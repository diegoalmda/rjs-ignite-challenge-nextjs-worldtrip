import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { api } from "../../services/api";

interface ContinentProps {
  continent: {
    id: number;
    name: string;
    slug: string;
    backgroundImage: string;
    description: string;
    cities: {
      city: string;
      country: string;
      image: string;
      flag: string;
    }[];    
  }
}

export default function Continent({ continent }: ContinentProps) {
  async function loadData() {
  //   const response = await api.get(`/continents`);
  //   console.log(response.data.continents)
  const response = await api.get(`/continents/europa`);
  const continent = {...response.data};
  console.log(continent)
  }

  // loadData()


  return (
    <>
      <Head>
        <title> | WorldTrip</title>
      </Head>

      <main>
        <article>
          <h1>sdfsd</h1>
        </article>
      </main>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  
//   const { slug } = params;

//   const response = await api.get(`/continents/${slug}`);

//   console.log(response.data)

//   // const objectBySlug = response.data.continents.find(continent => continent.slug === slug);

//   const continent = {...response.data};

//   return {
//     props: {
//       continent,
//     }
//   }
// }