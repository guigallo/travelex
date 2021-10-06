import Layout from '@/components/Layout'
import styles from './Corporativo.module.scss'

function Hedge() {
  return <div>Hedge</div>
}

function Corporativo() {
  return (
    <Layout>
      <div>
        <span>Análises, registros e declareções</span>
      </div>
      <Hedge />
      <div>
        <span>Assessoria e serviços</span>
      </div>
      <div>
        <span>Trade Finance</span>
      </div>
      <div>
        <span>Trade Service</span>
      </div>
    </Layout>
  )
}

export default Corporativo
