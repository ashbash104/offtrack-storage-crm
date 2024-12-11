import {Col, Row} from "antd"
import { DashboardTotalCountCard, DealsChart, UpcomingEvents } from "../../components"
import { DashboardTotalCountsQuery } from "graphql/types"
import { useCustom } from "@refinedev/core"
import { DASHBOARD_TOTAL_COUNTS_QUERY } from "graphql/queries"

export const Home = () => {

    const { data, isLoading } = useCustom<DashboardTotalCountsQuery>({
        url: '',
        method: 'get',
        meta: {
            gqlquery: DASHBOARD_TOTAL_COUNTS_QUERY
        }
    })
    return (
        <div>
            <Row gutter={[32, 32]}>
                <Col xs={24} sm={24} xl={8}>
                DashboardTotalCountCard
                </Col>
                <Col xs={24} sm={24} xl={8}>
                DashboardTotalCountCard
                </Col>
                <Col xs={24} sm={24} xl={8}>
                DashboardTotalCountCard
                </Col>
            </Row>



            <Row
            gutter={[32, 32]}
            style={{
                marginTop: '32px'
            }}
            >
                <Col
                    xs={24}
                    sm={24}
                    xl={8}
                    style={{
                        height: '460px'
                    }}
                    >
                    <UpcomingEvents/>
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    xl={16}
                    style={{
                        height: '460px'
                    }}
                    >
                    <DealsChart/>
                </Col>
            </Row>
        </div>
    )
}
