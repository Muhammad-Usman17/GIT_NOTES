// libs
import React,{Component} from 'react';
import { Provider } from 'react-redux';
import { sessionService } from 'redux-react-session';

// src
import styles from './styles.scss';
import configureStore from '../../redux/store/configureStore';

const store = configureStore();
sessionService.initSessionService(store, { driver: 'COOKIES' });

export default class App extends Component{
render(){
  return (
    <Provider store={store}>
    <div>
      {/* <i className={styles.logo} />
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link className={styles.link} to="/home">
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.link} to="/tools">
            Tools
          </Link>
        </li>
      </ul> */}
      <div className={styles.content}>
        {this.props.children}
      </div>
    </div>
    </Provider>
   
  )
 
}
}


