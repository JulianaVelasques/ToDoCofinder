import Styles from '../styles/components/Header.module.css';

export function Header() {
  return (
    <div className={Styles.container}>
      <p>LOGO AQUI</p>
      <div className={Styles.login}>
        <img
          className={Styles.avatar}
          src="https://www.desenhoonline.com/site/wp-content/uploads/avatar-simpson.jpg"
          alt=""
        />
        <p>Juliana Velasques</p>
      </div>
    </div>
  );
}
