import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "@/molecules/Menu";
import Home from './Home';
import Article from './Article';
import Header from '@/molecules/Header';
import Main from '@/molecules/Main';

import Footer from '@/molecules/Footer';
import React, { useState } from 'react';

const TemplateMap = {
  'home': Home,
  'article': Article
};

const getTemplate = (name) => {
  if (TemplateMap.hasOwnProperty(name)) {
    return TemplateMap[name];
  }
  throw new Error(`Unable to find a template with name '${name}'`);
}

export default function Layout({ template, children }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const Template = getTemplate(template);

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