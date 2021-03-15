import * as React from 'react';
import LanguageButton from '../../../components/layout/LanguageButton/LanguageButton';
import ScrollTopArrow from '../ScrollTopArrow/ScrollTopArrow';
import { FooterStyles } from './Footer.Styles';

const Footer = () => {
    return (
        <>
            <FooterStyles style={{ marginTop: '20%' }}>
                <div className="container">
                    Development by{' '}
                    <a
                        href="https://www.github.com/quoctrung163"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        quoctrung163
                    </a>{' '}
                    with <i className="fa fa-heart heart" /> &copy;&nbsp;
                    {new Date().getFullYear()}
                </div>
            </FooterStyles>
            <ScrollTopArrow />
            <LanguageButton />
        </>
    );
};

export default Footer;
