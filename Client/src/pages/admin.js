import React, {useState} from 'react';
import './admin.css';




const Admin = () => {
    const [page, setPage] = useState('Users');   

    const pageRender = () => {
        switch(page){
            // case 'Users':
            //     return <Users />
            // case 'Products':
            //     return <Products />
            // case 'Orders':
            //     return <Orders />
            // case 'Messages':
            //     return <Messages />
            // default:
            //     return <Users />
        }
    }


    return (
        <div>
            <section className='side-panel'>
                    <div className='side-panel-info'>
                        <p>Admin Dashbord</p>
                        <ul>
                            <li>
                            <button onClick={() => setPage('Users')} className={page === 'Users' ? 'active' : 'notActive'}>Users</button>
                            </li>
                            <li>
                            <button onClick={() => setPage('Products')} className={page === 'Products' ? 'active' : 'notActive'}>Products</button>
                            </li>
                            <li>
                            <button onClick={() => setPage('Orders')} className={page === 'Orders' ? 'active' : 'notActive'}>Orders</button>
                            </li>
                            <li>
                            <button onClick={() => setPage('Messages')} className={page === 'Messages' ? 'active' : 'notActive'}>Messages</button>
                            </li>
                        </ul>
                    </div>
            </section>
        </div>
    )
}

export default Admin