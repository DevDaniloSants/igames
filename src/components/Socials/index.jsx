import { FaDiscord, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import styles from './Styles.module.css';

const Socials = () => {
  return (
    <div className={styles.socials}>
      <span><FaInstagram /></span>
      <span><FaYoutube /></span>
      <span> <FaFacebook /></span>
      <span><FaTwitter /></span>
      <span><FaDiscord /></span>
      
    </div>
  );
};

export default Socials;
