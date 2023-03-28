import React from 'react'
import { ImLinkedin2 } from "react-icons/im"
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Head from 'next/head'
import WebsiteSEO from './components/seo'

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
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  head: (
    <>
      <Head>
        <meta property="title">Abhijith's research and experiements</meta>
        <meta property='description' content="Discover a vast collection of groundbreaking research in Computer Science, compiled here.From cutting- edge studies to in -depth analysis, our repository is your one - stop destination for the latest findings and insights.Explore our resources and stay up - to - date with the latest trends and developments in CS, AI and Cloud." />      < meta property='og:title' content="Abhijith's research repository" />
        <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1' />
      </Head>
    </>
  ),
  feedback: {
    content: <></>
  },
  logo: (
    <>
      <span style={{ fontWeight: 900, textTransform: 'capitalize' }}>Abhijith's research repository</span>
    </>
  ),
  editLink: {
    // @ts-ignore
    component: <EmptyComponent />,
  },
  footer: {
    text: `Abhijith Ganesh © ${new Date().getFullYear()
      }`,
  },
}

export default config

