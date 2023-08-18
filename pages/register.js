import Layout from "@/layout/layout"
import Head from "next/head"

import Link from "next/link";
import styles from '../styles/Form.module.css'
import Image from "next/image";



export default function Register() {
    return (
    <Layout>
        <Head>
      <title>Reister Page</title>
    </Head>
    <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400"> lorem asdadasdasdasdasdasddasdasd </p>
        </div>
{/* Form */}
<form className="flex flex-col gap-5">
<div className={styles.input_group}>
    <input 
    type="text"
    name="username"
    placeholder="username"
    className={styles.input_text}
    />
</div>
<div className={styles.input_group}>
    <input 
    type="text"
    name="email"
    placeholder="email"
    className={styles.input_text}
    />
</div>
<div className={styles.input_group}>
    <input 
    type="password"
    name="password"
    placeholder="password"
    className={styles.input_text}
    />
</div>
<div className={styles.input_group}>
    <input 
    type="password"
    name="password"
    placeholder="Confirm password"
    className={styles.input_text}
    />
</div>
{/* login button */}
<div className="input-group">
  <button type="submit" className={styles.button}>Sign in</button>
</div>

</form>
{/* bottom section */}
<p className="text-center text-gray-400">Don't have an account yet?  <Link href={"./register"} className="text-blue-700">Sign Up</Link></p>
      </section>
     </Layout>
    )
  }