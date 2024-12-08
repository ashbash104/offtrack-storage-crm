import { Badge, List, Skeleton } from "antd";
import SkeletonButton from "antd/lib/skeleton/Button";

export const UpcomingEventsSkeleton = () => {
    return (
        <List.Item>
            <List.Item.Meta
                avatar={<Badge color="transparent" />}
                title={
                    <Skeleton.Button
                        active
                        style={{
                            height: "14px",
                        }}
                    />
                }
                description={
                    <Skeleton.Button
                        active
                        style={{
                            width: "300px",
                            marginTop: "8px",
                            height: "16px",
                        }}
                    />
                }
            />
        </List.Item>
    )
}