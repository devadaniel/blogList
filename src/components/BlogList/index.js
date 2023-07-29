// Write your JS code here
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogDetails} = props
  return (
    <div className="blogs-list-container">
      <BlogItem blogDetails={blogDetails} />
    </div>
  )
}

export default BlogList
