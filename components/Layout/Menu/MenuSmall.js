import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { useMenuTheme } from '@/contexts/LayoutContext'
import mainLogoWhite from '../../../public/images/TravelexBranco.png'
import mainLogoColorful from '../../../public/images/TravelexLogo.png'
import styles from './Menu.module.scss'
import { MenuIcon } from '../../Icons'

const MenuSmall = ({ toggleMenu }) => {
  const { theme } = useMenuTheme()

  return (
    <nav
      className={classNames(
        styles['menu-small'],
        styles[`menu-small__${theme}`]
      )}
    >
      <div className={styles['menu-mobile']}>
        <div className={styles['mobile-logo']}>
          <Link href="/">
            <a>
              {theme === 'dark' ? (
                <Image src={mainLogoWhite} alt="Travelex Logo Mobile" />
              ) : (
                <Image src={mainLogoColorful} alt="Travelex Logo Mobile" />
              )}
            </a>
          </Link>
        </div>
        <button className={styles['header-small-button']} onClick={toggleMenu}>
          <MenuIcon fill={theme === 'dark' ? '#bebebe' : '#221f42'} />
        </button>
      </div>
    </nav>
  )
}
export default MenuSmall
