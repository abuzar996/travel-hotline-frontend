import { Flex } from "antd";

import Footer from "src/components/footer";
import CustomCarousal from "./components/carousel";
import Discovery from "./components/discovery";
import WhyTravel from "./components/why-travel";
import BlogCard from "./components/blog";
import NewsLetter from "./components/news-letter";

const Home = () => {
  return (
    <Flex vertical>
      <CustomCarousal />
      <Discovery />
      <WhyTravel />
      <BlogCard />
      <NewsLetter />
      <Footer />
    </Flex>
  );
};

export default Home;
