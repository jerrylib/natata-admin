import { useEffect, useState } from 'react'

// === Components === //
import { Statistic, Row, Col, Divider, Select } from 'antd'

// === Hooks === //
import { useAsync } from 'react-async-hook'
import { useSearchParams, } from 'react-router-dom'

// === Services === //
import { getRecordList } from '@/services/record'

// === Utils === //
import sumBy from 'lodash/sumBy'


const Detail = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const [currentUser, setCurrentUser] = useState()

    const { result, loading } = useAsync(() => getRecordList({ name: currentUser }), [currentUser])

    const onChange = (value) => {
        setCurrentUser(value)
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };

    // Filter `option.label` match the user type `input`
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    useEffect(() => {
        setCurrentUser(searchParams.get('id'))
    }, [searchParams])

    const totalWinCount = sumBy(result, i => i.score > 0 ? i.score : 0)
    const totalLossCount = sumBy(result, i => i.score < 0 ? i.score : 0)
    const total = totalWinCount + totalLossCount

    console.log('currentUser=', currentUser)

    return <div className='w-full'>
        <Row>
            <Col span={24} className='flex items-center'>
                <Select
                    showSearch
                    width={400}
                    value={currentUser}
                    className='min-w-[200px]'
                    size='large'
                    placeholder="查看人员信息"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={[
                        {
                            value: null,
                            label: '全员',
                        },
                        {
                            value: '李老师',
                            label: '李老师',
                        },
                        {
                            value: '林兴玉',
                            label: '林兴玉',
                        },
                        {
                            value: '丰泽林总',
                            label: '丰泽林总',
                        },
                        {
                            value: '李彬',
                            label: '李彬',
                        },
                        {
                            value: '黄嘎嘎',
                            label: '黄嘎嘎',
                        },
                        {
                            value: '丰疆黄总',
                            label: '丰疆黄总',
                        },
                        {
                            value: '封封',
                            label: '封封',
                        },
                    ]}
                />
            </Col>
        </Row>
        <Divider />
        <Row>
            <Col span={6}>
                <Statistic loading={loading} title="总计（分）" value={total} />
            </Col>
            <Col span={6}>
                <Statistic loading={loading} title="负" value={totalLossCount} />
            </Col>
            <Col span={6}>
                <Statistic loading={loading} title="赢" value={totalWinCount} />
            </Col>
            <Col span={6}>
                <Statistic loading={loading} title="场均输赢（分）" value={result?.length > 0 ? (total / result.length).toFixed(2) : 0} />
            </Col>
        </Row>
    </div>
}
export default Detail