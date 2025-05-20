import { Button, Flex, theme, Typography } from "antd";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ErrorElement = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const handleBackClick = useCallback(() => {
    navigate(-1);
  }, []);
  return (
    <Flex
      flex="1"
      className="h-screen w-full"
      justify="center"
      align="center"
      vertical
      gap={10}
    >
      <Typography.Title>
        <span className="text-[red]">404!</span> Page Not found
      </Typography.Title>
      <Typography.Text style={{ fontSize: token.fontSizeHeading3 }}>
        The Page you've requested is not found.
      </Typography.Text>
      <Button
        onClick={handleBackClick}
        type="primary"
        variant="outlined"
        size="large"
        style={{
          backgroundColor: "#3D2482",
          borderRadius: 50,
        }}
      >
        Go Back
      </Button>
    </Flex>
  );
};
export default ErrorElement;
