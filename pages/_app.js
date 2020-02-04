import App, {Container} from 'next/app' 
import HomePage from '../pages/Index' 
import Nav from '../components/Nav' 

class MyApp extends App {
    render() {
         return ( 
             <div>
                <Nav/>
                <HomePage/>
             </div>
        )
    }
} 
export default MyApp