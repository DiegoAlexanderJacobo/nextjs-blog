import Link from 'next/link'
import styles from '../../../styles/StylePath.module.css'

export default function ItemBlog({dataPost}) {
  return (
    <div className={styles.boxDataItem}>
      <Link href={`/blog/3`}>
        <div className={styles.itemContainer}>
            <h3 className={styles.itemTitle}>{dataPost.title.toUpperCase()}</h3>
        </div>
      </Link>
    </div>
  )
}
