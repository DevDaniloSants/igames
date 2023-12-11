import styles from './Styles.module.css';
import { useRedirect } from '../../hooks/useRedirect';

const Dashboard = () => {
  const { redirect } = useRedirect();
  redirect();

  return <div>Dashboard</div>;
};

export default Dashboard;
