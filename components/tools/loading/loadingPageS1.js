import { Space, Spin } from 'antd'
import style from './styles/loading.module.scss'
export default function LoadingPageS1 () {
  return (
    <div className={style.loading}>
      <div className={'loadingPageS1'}>
        <Space size='middle'>
          <Spin size='large' />
        </Space>
      </div>
    </div>
  )
}
