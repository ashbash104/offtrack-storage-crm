import { CalendarOutlined } from "@ant-design/icons"
import { Badge, Card, List } from "antd"
import { Text } from "../text"
import { UpcomingEventsSkeleton } from "components/skeleton/upcoming-events"
import { useList } from "@refinedev/core"
import { DASHBOARD_CALENDAR_UPCOMING_EVENTS_QUERY } from "graphql/queries"
import { getDateColor, getDate } from "../../utilities/date"
import dayjs from "dayjs"


export const UpcomingEvents = () => {
    // useList is a hok that allows us to get data from API. 
    // You can sort and filter data from the source. It also caches the data. 
    const { data, isLoading} = useList({
        resource: 'events',
        pagination: {pageSize: 5},
        sorters: [
            {
                field: 'startDate',
                order: 'asc'
            }

        ],
        filters: [
            {
                field: 'startDate',
                operator: 'gte',
                value: dayjs().format('YYYY-MM-DD')
            }

        ],
        meta: {
            gqlQuery: DASHBOARD_CALENDAR_UPCOMING_EVENTS_QUERY
        }
    });

    return (
        <Card 
            style={{ height: '100%'}}
            headStyle={{ padding: '8px 16px' }}
            bodyStyle={{ padding: '0 1rem' }}
            title={
                <div style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    }}>
                    <CalendarOutlined />
                    <Text size="sm" style={{ marginLeft: "0.7rem"}}>
                    UpcomingEvents
                    </Text>
                </div>
            }
        >
            {/* {isLoading ? (
                <List
                itemLayout="horizontal"
                dataSource={Array.from({length: 5}).map((_, index)=> ({
                    id: index,
                }))}
                renderItem={() => <UpcomingEventsSkeleton />}
                />
            ) : (
                <List
                  itemLayout="horizontal"
                  // Data source for the upcoming events
                  dataSource={[data?.data | []}
                  renderItem={(item) => {
                    const renderDate = getDate(item.startDate, item.endDate)
                    return (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Badge color={item.color}/>}
                            title={<Text size="xs">renderDate</Text>}
                            description={<Text ellipsis={{tooltip: true}}
                            strong>
                                {item.title}
                            </Text>}
                        />
                        </List.Item>
                    )
                  }}

                </List>
            )} */}
            
            {!isLoading && data?.data.length == 0 && (
                    <span 
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'canter',
                            height: '220px'
                        }}
                      >
                        No Upcoming Events
                      </span>
                    )}
        </Card>
    )
}