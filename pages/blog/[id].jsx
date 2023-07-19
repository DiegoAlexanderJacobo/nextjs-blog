import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/StylePath.module.css'

export default function DetallePost({data}) {
    const btnPrev = <Link href={`/blog/${data.id - 1}`}>Anterior</Link>
    const btnNext = <Link href={`/blog/${data.id + 1}`}>Siguiente</Link>

    const validarPrev = (btnPrev) => {
        if(data.id != 1)
            return btnPrev
    }

    const validarNext = (btnNext) => {
        if(data.id != 100)
            return btnNext
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>{`Post | ${data.id}`}</title>
                <meta name="description" content={`Información acerca del post N° ${data.id}`}/>
            </Head>

            <div className={styles.linkReturn}>
                <Link href='/blog'>← Volver al Menú</Link>
            </div>

            <div className={styles.containerPost}>
                <h3 className={styles.titlePost}>
                    {data.id}.- {data.title.toUpperCase()}
                </h3>
                <p>
                    {data.body}
                </p>
            </div>

            <div className={styles.nextPrev}>
                <div className={styles.prev}>
                    {validarPrev(btnPrev)}
                </div>

                <div className={styles.next}>
                    {validarNext(btnNext)}
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths () {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        const paths = data.map(({id}) => ({params: {id: `${id}`}}))
    
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.log (error);
    }
}

export async function getStaticProps ({params}) {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + params.id)
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