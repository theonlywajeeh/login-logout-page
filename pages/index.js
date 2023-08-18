import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { getSession, useSession, signOut } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

export default function Home() {
  const { data: session } = useSession();

  function handleSignOut() {
    signOut();
  }

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  );
}

function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl text-bold text-white">Guest HomePage</h3>
      <div className="flex justify-center">
        <Link
          href="/login"
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 "
        >
          Sign in
        </Link>
      </div>
    </main>
  );
}

function User({ session, handleSignOut }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl text-bold text-white">User HomePage</h3>
      <div className="details  text-white">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>
      <div className="flex justify-center py-20">
        <button
          onClick={handleSignOut}
          className="mt-5 px-10 py-1 rounded-sm  bg-indigo-500"
        >
          Sign Out
        </button>
      </div>
    </main>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
