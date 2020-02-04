import { useRouter } from 'next/router'
import Link from 'next/link'
 
class Post extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            user: 'Ok',
            guid:'https://studiofrancine.be/product/canon-xa-15/',
            mailSent:'', 
        };
		 
 		
    }
	componentDidMount() { 
		this.setState({id:window.location.pathname.replace("produits/","").replace("/", ""),
		url:window.location.pathname
		});
    }
	render()
	{
  return (
    <div>
       <h1>Post: {this.state.id}</h1>
      <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${this.state.id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${this.state.id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </div>
  )
	}
}

export default Post
