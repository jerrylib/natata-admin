import { useEffect, useState } from 'react';

// === Components === //
import { Checkbox, Row, Col, InputNumber, Button, Divider } from 'antd';

// === Services === //
import { recordPost } from '@/services/record'

// === Utils === //
import omit from 'lodash/omit';


const defaultValue = ['李老师', '林兴玉', '丰泽林总', '李彬']

const options = ['李老师', '林兴玉', '丰泽林总', '李彬', '黄嘎嘎', '丰疆黄总', '封封']

const Team = () => {
    const [selectValue, setSelectValue] = useState([])

    const onChange = (event) => {
        const { target: { value, checked } } = event
        if (checked) {
            setSelectValue({
                ...selectValue,
                [value]: 0
            })
        } else {
            setSelectValue(omit(selectValue, [value]))
        }
    }

    const handleNumberChange = (item, value) => {
        setSelectValue({
            ...selectValue,
            [item]: value
        })
    }

    const submit = () => {
        const result = Object.keys(selectValue).map(i => {
            return { name: i, score: selectValue[i] }
        })
        recordPost(result)
    }

    const reset = () => {
        setSelectValue(defaultValue.reduce((rs, item) => {
            rs[item] = 0
            return rs
        }, {}))
    }

    useEffect(() => {
        reset()
    }, [])

    console.log('selectValue=', selectValue)
    return <div>
        <Checkbox.Group style={{ width: '100%' }} value={Object.keys(selectValue)} >
            <Row>
                {options.map((item, index) => {
                    return <Col key={index} span={24} className='p-4 flex items-center justify-between'>
                        <Checkbox onChange={onChange} value={item}>{item}</Checkbox>
                        <InputNumber min={-1000} max={1000} addonAfter={'分'} value={selectValue[item]} onChange={(value) => handleNumberChange(item, value)} />
                    </Col>
                })}
            </Row>
        </Checkbox.Group>
        <Divider />
        <Row>
            <Col span={24} className='flex items center justify-center gap-4'>
                <Button type="primary" onClick={submit}>提交</Button>
                <Button danger onClick={reset} >重置</Button>
            </Col>
        </Row>
    </div>
}
export default Team