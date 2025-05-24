import { Flex, theme, Typography } from "antd";
import BlogItem from "src/components/cards/blog-item-card";
import Passport from "src/assets/passport.png";
import Travel from "src/assets/travel.png";
import Blog from "src/assets/blog.jpg";
const BlogCard = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex={1}
      style={{
        position: "relative",
        backgroundImage: `url(${Blog})`,
        backgroundSize: "cover", // 'cover' ensures full container coverage
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: 60,
        paddingBottom: 60,
        paddingInline: token.paddingSM,
        justifyContent: "center",
        alignItems: "center",
        width: "100%", // ensure full width
      }}
      gap={20}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // adjust opacity here
          zIndex: 1,
        }}
      />
      <Flex style={{ zIndex: 2 }} vertical align="center" gap={30}>
        <Flex vertical align="center">
          <Typography.Text
            style={{
              color: "#fff",
              fontSize: token.fontSizeHeading2,
              fontWeight: token.fontWeightStrong,
            }}
          >
            Our Blog
          </Typography.Text>
          <Typography.Text
            style={{
              color: "#fff",
              fontSize: token.fontSizeHeading5,
              textAlign: "center",
            }}
          >
            visit our blog to discover Travel Hotline and more travel tips!
          </Typography.Text>
        </Flex>
        <Flex gap={20} className="max-md:flex-col max-md:items-center">
          <BlogItem
            label="Planning A Trip? Include These 7 Details In Your Checklist"
            description="Planning a trip can feel overwhelming. Forgetting to pack essential items can cause unnecessary ...."
            image={Travel}
            date="June 26, 2024"
          />
          <BlogItem
            label="The Ultimate Guide To Getting A US Passport"
            description=" Are you planning your next international adventure and need to renew your US passport? You’re in the right place! This comprehensive guide
        will walk you........."
            image={Passport}
            date="June 26, 2024"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default BlogCard;
