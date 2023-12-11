import { FaDiscord, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import styles from './Styles.module.css';

const Socials = () => {
  return (
    <div className={styles.socials}>
      <FaInstagram />
      <FaYoutube />
      <FaFacebook />
      <FaTwitter />
      <FaDiscord />
    </div>
  );
};

export default Socials;
