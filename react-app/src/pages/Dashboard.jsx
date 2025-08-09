import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const modules = [
  'CI/CD Pipelines',
  'Terraform Infrastructure',
  'Kubernetes Clusters',
  'Monitoring & Alerts',
  'Secrets Management',
  'Azure DevOps Boards',
];

const Dashboard = () => {
  const handleClick = (module) => {
    toast.info(`"${module}" is not connected to DevOps Portal`, {
      position: 'top-center',
      autoClose: 3000,
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>DevOps Insights Dashboard</h2>
      <div style={styles.grid}>
        {modules.map((mod) => (
          <div key={mod} style={styles.card} onClick={() => handleClick(mod)}>
            {mod}
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2rem',
    color: '#2c3e50',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    padding: '1.5rem',
    backgroundColor: '#ecf0f1',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
  },
};

export default Dashboard;