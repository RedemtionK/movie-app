import { Link,useMatch,useResolvedPath } from "react-router-dom"
import image from "../style/Klaus.gif"

export default function Navbar(){
    
return <nav className="nav">
    <img className="logo" src={image} alt='movie'/>
    <Link to="/" className="site-title">Klaus Movies</Link> 
    <CustomLink to="/movies" className="movies">Movies</CustomLink>
    <CustomLink to="/tv-shows" className="tv-shows">TV shows</CustomLink>  
    
    
    <ul>
     
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/register">Register</CustomLink>
        <CustomLink to="/log-in">Log in</CustomLink>
       
    </ul>
</nav>

}
function CustomLink({to,children, ...props}){
    const resolevedPath=useResolvedPath(to)
    const isActive=useMatch({path:resolevedPath.pathname,end:true})
    return (
        <li className={isActive ? "active":""}>
            <Link to={to} {...props}>{children}</Link>
        </li>

    )
}