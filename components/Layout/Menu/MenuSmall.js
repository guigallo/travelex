import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { useMenuTheme } from '@/contexts/LayoutContext'
import mainLogo from '../../../public/images/TravelexBranco.png'
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
              <Image src={mainLogo} alt="Travelex Logo Mobile" />
            </a>
          </Link>
        </div>
        <button className={styles['header-small-button']} onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>
    </nav>
  )
}
export default MenuSmall
