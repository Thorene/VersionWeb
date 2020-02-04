import { useRouter } from 'next/router'
import Link from 'next/link'
 import React from 'react'
import Head from 'next/head'
 import Link from 'next/link';
import axios from 'axios';
const API_PATH = 'https://solutions-web.be/sf_next/recup_infos.php';
import fetch from 'isomorphic-fetch';
import Qs from 'Qs'; 

 const Produit = () => {
  const { id } = router.query
  const router = useRouter()

  return (
    <>
      <Header />
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Produit
