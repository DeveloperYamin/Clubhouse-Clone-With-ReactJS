import { Link } from "react-router-dom";
import styles from "../styles/Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.WelcomeContainer}>
      <h1>Welcome!</h1>
      <div className={styles.WelcomeInfo}>
        <p>
          We're working hard to get Clubhouse ready for everyone! While we wrap
          up the finishing touches, we're adding people gradually to make sure
          noting breaks
        </p>
        <p>
          Anyone can join with an invite from an existing user - or reserve your
          username and we'll text you if you have a friend on the app who can
          let you in. We are so grateful you're here and can't wait to have you
          join!
        </p>
        <p>Paul, Rohan & the Clubhouse team</p>
      </div>
      <div className={styles.actionBtn}>
        <Link
          to="/get_username"
          className="primaryBtn d-flex align-items-center"
        >
          Get Your Username
        </Link>
        <Link to="/sign_in" className="mt-2" >Have An Invite Text? Sign In</Link>
      </div>
    </div>
  );
}

export default Welcome;
