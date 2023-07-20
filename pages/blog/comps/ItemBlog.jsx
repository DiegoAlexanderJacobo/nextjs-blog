import Link from 'next/link'
import styles from '../../../styles/StylePath.module.css'

export default function ItemBlog({dataPost}) {
  
  const dataIdTitle = () => {
    try {
      return [dataPost.id, dataPost.title];
    } catch (error) {
      console.log("Error en datapost: " + error)
    }
  }

  return (
    <div className={styles.boxDataItem}>
      {console.log(dataIdTitle())}
      <Link href={`/blog/2`}>
        <div className={styles.itemContainer}>
            <h3 className={styles.itemTitle}>2eddssdsdsdsdssdfer</h3>
        </div>
      </Link>
    </div>
  )
}
