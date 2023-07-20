import Head from 'next/head'
import ItemBlog from './comps/ItemBlog'
import styles from '../../styles/StylePath.module.css'

export default function index({data}) {
  return (
    <div className={styles.container}>
        <Head>
            <title>BLOG DE POSTS</title>
            <meta name="description" content={`Pagina que muestra los titulos de cada Post.`}/>
        </Head>

        <div className={styles.boxTitle}>
            <h1>DATA RECIBIDA</h1>
            <p>Se muestra la data extraida de un sitio externo</p>
        </div>

        <div className={styles.sectionStyle}>
            {data.map((dataItem) => {
            return (
                <ItemBlog dataPost={dataItem}/>
            )
            })}
        </div>
    </div>
  )
}

export async function getStaticProps () {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
    
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.log (error);
    }
}