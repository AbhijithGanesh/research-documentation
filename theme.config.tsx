import React from 'react'
import { ImLinkedin2 } from "react-icons/im"
import 'tailwindcss/tailwind.css'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Head from 'next/head'
import WebsiteSEO from './components/seo'
import Logo from './components/logo'

const EmptyComponent: React.FC = () => {
  return (
    <></>
  )
}

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/AbhijithGanesh/',
  },
  chat: {
    icon: <ImLinkedin2 />,
    link: 'https://linkedin.com/in/AbhijithGanesh14',
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://research.AbhijithGanesh.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return <>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || 'Nextra'} />
      <meta property="og:description" content={frontMatter.description || 'The next site builder'} />
    </>
  },
  feedback: {
    content: <></>
  },
  logo: (
    <>
      <Logo height={16} width={16} />
      <span style={{ fontWeight: 900, textTransform: 'capitalize' }}>Abhijith's research repository</span>
    </>
  ),
  editLink: {
    // @ts-ignore
    component: <EmptyComponent />,
  },
  footer: {
    text: <><h1 style={{ fontWeight: 700 }}>Abhijith Ganesh © {new Date().getFullYear()}</h1></>,
  },
}

export default config

