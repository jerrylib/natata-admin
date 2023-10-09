// === Components === //
import { Button } from 'antd'

// === Hooks === //
import { useAsync } from 'react-async-hook'

// === Services === //
import { fetchAbtestConfig } from '@/services/abtest'


const Home = () => {
    const { result } = useAsync(fetchAbtestConfig, [])
    return <div>
        <p>Home{JSON.stringify(result)}</p>
        <Button type="primary">确认</Button>
    </div>
}
export default Home