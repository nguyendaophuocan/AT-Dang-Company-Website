import React, { Component } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

class PageHelmet extends Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>{this.props.pageTitle} </title>
            <meta
              name='Dang & Assosiates, LTD.'
              content='Dang & Assosiates, LTD.'
            />
          </Helmet>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}

export default PageHelmet;
