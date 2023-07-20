import Link from 'next/link'
import styles from '../../../styles/StylePath.module.css'

export default function ItemBlog({dataPost}) {
  
  const dataIdTitle = (num) => {
    try {
      if(num == 0)
        return dataPost.id;
      else
        return dataPost.title;
    } catch (error) {
      console.log("Error en datapost: " + error)
    }
  }

  return (
    <div className={styles.boxDataItem}>
      <Link href={`/blog/${dataIdTitle(0)}`}>
        <div className={styles.itemContainer}>
            <h3 className={styles.itemTitle}>{dataIdTitle(1)}</h3>
        </div>
      </Link>
    </div>
  )
}
