// === Components === //
import { Table, Space, Typography } from 'antd'

// === Hooks === //
import { useAsync } from 'react-async-hook'

// === Services === //
import { getRecordList } from '@/services/record'

// === Utils === //
import groupBy from 'lodash/groupBy'
import moment from 'moment'


const Report = () => {
    const { loading, result, error } = useAsync(() => getRecordList().then((rs) => {
        const nextResult = []
        let groupIndex = 0
        const groupMap = groupBy(rs, 'group_id')
        Object.keys(groupMap).reverse().forEach((groupId) => {
            const groupArray = groupMap[groupId]
            groupIndex++
            groupArray.forEach((item, index) => {
                nextResult.push({
                    ...item,
                    groupIndex,
                    rowSpan: index === 0 ? groupArray.length : 0
                })
            })
        })
        return nextResult
    }))

    const fixedColumns = [
        {
            title: '竞技组',
            dataIndex: 'group_id',
            render: (_, record) => `Group ${record.groupIndex}`,
            onCell: (record) => ({
                rowSpan: record.rowSpan
            }),
        },
        {
            title: '时间',
            dataIndex: 'group_id',
            render: (_) => moment(1 * _).format('YYYY-MM-DD HH:mm:ss'),
            onCell: (record) => ({
                rowSpan: record.rowSpan
            }),
        },
        {
            title: '名称',
            dataIndex: 'name',
        },
        {
            title: '积分',
            dataIndex: 'score',
            render: (value) => {
                return <span className={value < 0 ? 'text-red-400' : 'text-green-400'
                }> {value}</span >
            }
        },
    ]
    return <div className='w-full h-full'>
        <Table
            loading={loading}
            bordered={true}
            columns={fixedColumns}
            rowKey="id"
            dataSource={result}
            pagination={false}
        />
    </div>
}
export default Report