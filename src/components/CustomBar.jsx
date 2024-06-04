import { Badge, HStack, Progress, Text, VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
const CustomBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={50} colorScheme={"teal"} w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge colorScheme="red">{low}</Badge>
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge colorScheme="green">{high}</Badge>
    </HStack>
  </VStack>
);

CustomBar.propTypes = {
  high: PropTypes.string.isRequired,
  low: PropTypes.string.isRequired,
};

export default CustomBar;
