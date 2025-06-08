import { Flex, Typography } from "antd";
import type { FC } from "react";
interface LocationIdentifierProps {
  locationName: string;
  locationCode: string;
}
const LocationIdentifier: FC<LocationIdentifierProps> = ({
  locationCode,
  locationName,
}) => {
  return (
    <Flex>
      <Typography.Text style={{ fontWeight: 500, fontSize: 15 }}>
        {locationName}
      </Typography.Text>
      <Flex align="flex-end">
        <Typography.Text style={{ fontWeight: 300, fontSize: 12 }}>
          ({locationCode})
        </Typography.Text>
      </Flex>
    </Flex>
  );
};
export default LocationIdentifier;
