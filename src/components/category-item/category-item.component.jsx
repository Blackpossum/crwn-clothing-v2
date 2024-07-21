import './category-item.styless.scss'
import jackets from '../../assets/adrian-ordonez-P0W27GRvyww-unsplash.jpg'

const CategoryItem = ({ category }) => {
  // destructure props
  const { title, id }= category
  return (
    <div className="category-container" key={id}>
          <div className="background-image" style={{
            backgroundImage: `url(${jackets})`
          }}/> 
          <div className="category-body-container" key={id}>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
    </div>
  )
}

export default CategoryItem