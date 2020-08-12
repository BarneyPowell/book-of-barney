import Link from "next/link";
import { useRouter } from "next/router";

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

  const Template = getTemplate(pathname);

  return (
    <Template>
      {children}
    </Template>
  );
}