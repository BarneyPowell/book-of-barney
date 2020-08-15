import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "@/molecules/Menu";
import Home from './Home';
import Post from './Post';
import Header from '@/molecules/Header';
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




export default function Layout({ children }) {
  const { pathname } = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const Template = getTemplate(pathname);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };


  if (isMenuOpen) {
  }


  return (
    <>
          <Header onMenuClick={handleMenuClick}>
            <Menu isDisplayed={isMenuOpen} />
          </Header>

        <Template isMenuOpen={isMenuOpen}>
          {children}
        </Template>

    </>
  );
}