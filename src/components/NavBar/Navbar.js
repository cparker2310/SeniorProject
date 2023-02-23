import { 
    Link,
    useMatch,
    useResolvedPath
 } from "react-router-dom";

export default function NavBar()
{
    return <nav className="nav">
        <Link to="/" className="logo">MARYVALE</Link>
        <ul>
            <CustomLink to="/conduct">Site Conduct</CustomLink>
            <CustomLink to="/directory">Directory</CustomLink>
            <CustomLink to="/jobs">Career Center</CustomLink>
            <CustomLink to="/messages">Message Board</CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props})
{
    const resolvedPath= useResolvedPath(to)
    const isActive= useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}