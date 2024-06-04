import { Alert, AlertIcon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ErrorComponent = ({ message }) => {
  return (
    <Alert
      status="error"
      pos={"fixed"}
      bottom={"4"}
      left={"50%"}
      transform={"translateX(-50%)"}
      w={"container.lg"}
    >
      <AlertIcon />
      {message}
    </Alert>
  );
};

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorComponent;
