import React, { Component, Fragment } from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Header from '../header/Header';
import Footer from '../footer/FooterOtherPage';
import * as filestack from 'filestack-js';
import { FILESTACK_API_KEY } from '../../utils/constants';

class App extends Component {
  render() {
    const client = filestack.init(FILESTACK_API_KEY);
    client.picker().open();

    return (
      <Fragment>
        <Header
          headertransparent='header--transparent'
          colorblack='color--black'
          logoname='logo.png'
        />
        {this.props.children}

        {/* Start Back To Top */}
        <div className='backto-top'>
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
