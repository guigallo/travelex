import Link from 'next/link'
import styles from './Menu.module.scss'

function Menu() {
  return (
    <div>
      <Link href="/">
        <a>
          Home
        </a>
      </Link>

      <Link href="/institucional">
        <a>
          Institucional
        </a>
      </Link>

      <Link href="/cambio/corporativo">
        <a>
          Câmbio Corporativo
        </a>
      </Link>

      <Link href="/cambio/pessoa-fisica">
        <a>
          Câmbio Pessoa Física
        </a>
      </Link>

      <a href="/blog" target="_blank">
        Blog
      </a>

      <Link href="/cadastro">
        <a>
          Abra sua conta
        </a>
      </Link>
    </div>
  )
}

export default Menu
