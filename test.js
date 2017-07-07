//paginator

in App

Route path = page/:pageNum

in homepage 

component.mount

const pageNum = this.props.match.parmas.pageNum

        axios.get(`${API_URL}/posts/page=${pageNum}`)

        in render of homepage
        
        <paginatior currPage={Number{this.props.match.parmas.pageNum}} /> //turns into a number

const paginator = (props) =>

const prevUrl = `/page/${props.currPage -1}`
const nextUrl = `/page/${props.currPage =1}`
return (
  <nav className="pagination is-centered">     </nav>
  <link rel="stylesheet" href=""/>
)

in return of paginator

nav class pagination
a next
b before

<link to={prevUrlclassname=pagination previous
  <link to={nextUrlclassname=pagination previous
