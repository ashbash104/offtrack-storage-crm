import { Card, Skeleton } from "antd"
import { Text } from "components/text"
import { totalCountVariants } from "../../constants";
import { Area, AreaConfig } from "@ant-design/plots"
//console.log("#########################", totalCountVariants);
//console.log("#############Companies", totalCountVariants["companies"]);


type Props = {
    resource: "companies" | "contacts" | "deals",
    isLoading: boolean,
    totalCount?: number
}

const DashboardTotalCountCard = ({ resource, isLoading, totalCount }: Props) => {
    const { primaryColor, secondaryColor, icon, title, data } = totalCountVariants[resource];

    console.log("Rendering card for resource:", resource);
    console.log("Icon:", icon);
    console.log("Chart data:", data);

    const config: AreaConfig = {
        data,
        xField: 'index',
        yField: 'value',
        smooth: true,
        tooltip: false,
        autoFit: true,
        animation: false,
        xAxis: false,
        yAxis: false,
        areaStyle: {
            fill: `l(270) 0:#fff 0.2${secondaryColor} 1:${primaryColor}`,
        },
    };

    return (
        <Card style={{ height: "96px", padding: 0 }} bodyStyle={{ padding: '8px 8px 8px 12px' }} size="small">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap'}}>
                {icon && <div>{icon}</div>}
                <Text size="md" className="secondary" style={{marginLeft: '8px'}}>
                  {title}
                </Text>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <Text size="xxxl" strong style={{flex: 1, whiteSpace: 'nowrap', flexShrink: 0, textAlign: 'start', marginLeft: '48px', fontVariantNumeric: 'tabular-nums'}}>
                {isLoading ? (
                    <Skeleton.Button style={{ marginTop: '8px', width: '74px' }} />
                  ) : (
                    totalCount
                )}
              </Text>
              <Area {...config} style={{width: '50%'}}/>
            </div>
            
        </Card>
    )
}


export default DashboardTotalCountCard