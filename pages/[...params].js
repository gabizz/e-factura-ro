import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import model from '../models/vat'
import { create } from "xmlbuilder2"
import download from "downloadjs"


export default function Home(props) {

  const m = model()

  let root = create(m)
  root.end({prettyPrint: true})
  console.log("porps:", props)
  return (
    <div className={styles.container}>
      <Head>
        <title>e-Factura RO UIB/CIUS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <pre>{JSON.stringify(props.query)}</pre>
         <button onClick = {()=>download(root, "file.xml", "text/xml")}> descarca xml</button>
       </main>
     
    </div>
  )
}

export const getServerSideProps = ({ctx, query}) => {
  return {
    props: {
      data: "ble",
      query: query
    }
  }
}


