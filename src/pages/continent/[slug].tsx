import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";

export default function Continent({ continent }) {
  return (
    <>
      <h1>sdklfhnas</h1>

      
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req })
  const { slug } = params;

  if(!session?.activeSubscription) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const response = 
    await fetch('http://localhost:3000/api/continents')
      .then(response => response.json())
      .then(data => console.log(data));

  const continent = {
    slug,    
  }

  return {
    props: {
      continent,
    }
  }
}