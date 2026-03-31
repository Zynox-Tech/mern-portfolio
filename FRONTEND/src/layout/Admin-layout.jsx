import {NavLink,Outlet} from 'react-router-dom';
export const AdminLayout=()=>{
    return(
        <>
        <header>
            <div>
                <nav>
                    <ul>
                        <li> <NavLink to="/admin/users">Users</NavLink> </li>
                        <li> <NavLink to="/admin/contacts">Contacts</NavLink> </li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet />
        
        </>
        
    )
}