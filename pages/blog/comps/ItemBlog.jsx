import Link from 'next/link'
import styles from '../../../styles/StylePath.module.css'

export default function ItemBlog({dataPost}) {
  try {
    const dataId = dataPost.id;
    const dataTitle = dataPost.title;
  } catch (error) {
    console.log("Error en datapost")
  }

  return (
    <div className={styles.boxDataItem}>
      {console.log(dataId)}
      <Link href={"/blog/2"}>
        <div className={styles.itemContainer}>
            <h3 className={styles.itemTitle}>2eddssdsdsdsdssdfer</h3>
        </div>
      </Link>
    </div>
  )
}
