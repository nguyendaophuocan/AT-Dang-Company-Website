import { MailOutlined, SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Input from 'antd/es/input/Input';
import classNames from 'classnames';
import React from 'react';
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo/logo-at.png';
import styles from './footer.module.scss';
const SocialShare = [
  { Social: <FaFacebookF />, link: 'https://www.facebook.com/' },
  { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
  { Social: <FaInstagram />, link: 'https://www.instagram.com/' },
  { Social: <FaTwitter />, link: 'https://twitter.com/' },
];

const FooterHome = () => {
  return (
    <div className='footer-style-2 '>
      <div
        className={classNames('wrapper plr--70 plr_sm--20', styles.footerHome)}
      >
        {' '}
        <div className='row align-items-center justify-content-between'>
          <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <div className='inner'>
              <div
                className={classNames(
                  'logo text-center text-sm-left mb_sm--20',
                  styles.footerLogo
                )}
              >
                <a href='/home-one'>
                  <img
                    className={styles.logo}
                    src={logoImage}
                    alt='Logo images'
                  />{' '}
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-6 col-sm-6 col-12'>
            <div className='inner text-center mt--5'>
              <ul className='social-share rn-lg-size d-flex justify-content-center liststyle'>
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='inner text-center mt--20'>
              <div className='rn-form-group'>
                <Link className={styles.subscribe} to='/subscribe'>
                  <FormattedMessage id='SUBSCRIBE_TO_NEWSLETTERS' />{' '}
                  <MailOutlined style={{ margin: '4px 0 0 10px' }} />
                </Link>
              </div>
            </div>
          </div>
          {/* <div className='col-lg-2 col-md-6 col-sm-12 col-12'>
            
          </div> */}
          <div className='col-lg-3 col-md-12 col-sm-12 col-12'>
            <div className='inner text-lg-right text-center mt_md--20 mt_sm--20'>
              <div className='text'>
                <p style={{color:'#c6c9d8'}}>
                  Copyright © 2022 Dang & Associates, Ltd. All Rights Reserved.
                </p>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterHome;
