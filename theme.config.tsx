import React from 'react'
import { ImLinkedin2 } from "react-icons/im"
import 'tailwindcss/tailwind.css'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Abhijith's research repository</span>,
  project: {
    link: 'https://github.com/AbhijithGanesh/',
  },
  chat: {
    icon: <ImLinkedin2 />,
    link: 'https://linkedin.com/in/AbhijithGanesh14',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  head: <><title>Abhijith's research repository</title></>,
  footer: {
    text: `Abhijith Ganesh © ${new Date().getFullYear()
      }`,
    // Made with ❤️ using Nextra
  },
}

export default config
