// === Components === //
import { Button } from 'antd'

// === Hooks === //
import { useAsync } from 'react-async-hook'

// === Services === //
import { fetchAbtestConfig } from '@/services/abtest'


const Home = () => {
    return <div className='flex items-center justify-center h-full'>
        <img className='w-[150px] h-[150px] rounded-[50%] m-0  p-1' src="https://natata-api.vercel.app/logo.png" alt="" />
        <p className='text-lg ml-4 font-bold'>Hakuma natata!!!</p>
    </div>
}
export default Home