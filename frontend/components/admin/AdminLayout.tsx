import React from 'react';
import { Link } from 'react-router-dom';

const AdminLayout: React.FC = ({ children }) => {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><Link to="/admin/users">Users</Link></li>
            <li><Link to="/admin/settings">Settings</Link></li>
            <li><Link to="/admin/orders">Orders</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;