import { Card, Skeleton } from "antd"
import { Text } from "components/text"
import { totalCountVariants } from "../../constants";
import { Area, AreaConfig } from "@ant-design/plots"
console.log("#########################", totalCountVariants);
console.log("#############Companies", totalCountVariants["companies"]);


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
        <Card style={{ height: "auto", padding: 0 }} bodyStyle={{ padding: '12px' }} size="small">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {icon && <div>{icon}</div>}
                <div>{title}</div>
            </div>
            <div style={{ marginTop: '8px' }}>
                {isLoading ? (
                    <Skeleton.Button style={{ width: '74px' }} />
                ) : (
                    <div>{totalCount}</div>
                )}
            </div>
            <div style={{ marginTop: '16px' }}>
                <Area {...config} />
            </div>
        </Card>
    );
};


export default DashboardTotalCountCard