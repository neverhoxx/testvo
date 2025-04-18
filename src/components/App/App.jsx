import { useEffect, React } from 'react';
import { Provider } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AppRoutes from '../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { store } from '../redux/store';

import styles from '../../styles/index.css';

const App = () => {
    useEffect(() => {
        AOS.init({ duration: 700, once: true });
    }, []);

    return (
        <Provider store={store}>
            <div className="app wrapper">
                <Header />
                <AppRoutes />
                <Footer />
            </div>
        </Provider>
    );
};

export default App;
