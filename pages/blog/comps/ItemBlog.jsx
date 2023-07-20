import Link from 'next/link'
import styles from '../../../styles/StylePath.module.css'

export default function ItemBlog({dataPost}) {
  return (
    <div className={styles.boxDataItem}>
      {console.log(dataPost.id)}
      <Link href={"/blog/2"}>
        <div className={styles.itemContainer}>
            <h3 className={styles.itemTitle}>2efer</h3>
        </div>
      </Link>
    </div>
  )
}
