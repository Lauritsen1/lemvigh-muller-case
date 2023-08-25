import Image from 'next/image'

import '@/styles/site-header.scss'

import githubLogo from '@/assets/github-logo.svg'

export default function SiteHeader() {
  return (
    <header className='site-header'>
      <div className='container test'>
        <h1>Lemvigh-Müller Coding Assignment</h1>
        <a href='https://github.com/Lauritsen1/lemvigh-muller-case'>
          <Image src={githubLogo} height={30} width={30} alt='GitHub logo' />
        </a>
      </div>
    </header>
  )
}
