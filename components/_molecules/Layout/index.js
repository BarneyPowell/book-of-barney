import Link from "next/link";
import { useRouter } from "next/router";
import PrimaryNavigation from "@/molecules/PrimaryNavigation";
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

  console.log('isMenuOpen', isMenuOpen);

  const handleMenuClick = () => {
    console.log('menu clicked, setting to ' + !isMenuOpen);
    setMenuOpen(!isMenuOpen);
  };

  const styles = {
    parent: {
      left: 0,
      transition: 'left 0.5s ease-in-out'
    },
    menu: {
      width: '50vw'
    },
    content: {

    }
  }

  const parentClassnames = [
    'flex',
    'h-screen',
    'max-h-screen',
    'relative',
    'overflow-hidden',
    'overflow-x-visible',
    'overflow-y-visible'
  ]

  if (isMenuOpen) {
    // parentClassnames.push('max-h-screen');
    // parentClassnames.push('h-screen');
    // parentClassnames.push('overflow-x-hidden');
    styles.parent.left = '-50vw';
    styles.parent.height = '100%';
  }


  return (
    <>
          <Header onMenuClick={handleMenuClick} />
  <div className={parentClassnames.join(' ')} style={styles.parent}>
      <div className="w-screen flex-shrink-0 overflow-x-scroll">

        <Template>
          {children}
        </Template>
      </div>
      <div className="flex-shrink-0 h-full bg-gray-300" >
        <PrimaryNavigation />
      </div>

    </div>
    </>
  );
}