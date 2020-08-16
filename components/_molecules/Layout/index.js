import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "@/molecules/Menu";
import Home from './Home';
import Post from './Post';
import Header from '@/molecules/Header';
import Main from '@/molecules/Main';


import Footer from '@/molecules/Footer';
import React, { useState } from 'react';

const TemplateMap = {
  'home': Home,
  'post': Post
};

const getTemplate = (pathname) => {
  const isRoot = pathname === "/";
  return isRoot
    ? Home
    : TemplateMap[pathname.split('/')[1].toLowerCase()];
}




import Home from './Home';
import Post from './Post';

const TemplateMap = {
  'home': Home,
  'post': Post
};

const getTemplate = (pathname) => {
  const isRoot = pathname === "/";
  return isRoot
    ? Home
    : TemplateMap[pathname.split('/')[1].toLowerCase()];
}


export default function Layout({ children }) {
  const { pathname } = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const Template = getTemplate(pathname);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const styles = {
    content: {
      filter: 'brightness(1)',
      transition: 'filter 0.5s ease-in-out'
    }
  }

  if (isMenuOpen) {
    styles.content.filter = 'brightness(0.5)';
  }


  return (
    <>
      <Header onMenuClick={handleMenuClick}>
        <Menu isDisplayed={isMenuOpen} />
      </Header>

      <Main isMenuOpen={isMenuOpen}>
        <Template>
          {children}
        </Template>
      </Main>

      <Footer>

      </Footer>

    </>
  );
}