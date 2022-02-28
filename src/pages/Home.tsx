import { Header } from '../components/Header';
import Styles from '../styles/pages/Home.module.css';

export function Home() {
  return (
    <>
      <Header />
      <div className={Styles.container}>
        <h1>TO DO APP</h1>
      </div>
    </>
  );
}
