import CategoryItem from '../category-item/category-item.component'
import './directory.styles.scss'

const Directory = ({categories}) => {
  return (
    <div className="directory-container">
        {categories.map((categories) => (
        <CategoryItem category={categories} key={category.id}/>
        ))}
    </div>
  )
}

export default Directory