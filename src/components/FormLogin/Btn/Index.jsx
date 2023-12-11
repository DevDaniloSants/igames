import styles from './Styles.module.css';

const Button = ({ handleClick, children, disabled }) => {
  return (
    <button className={styles.login} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
