import HeaderTitle from "@/components/headerTitle/HeaderTitle";
import { service_data } from "@/data/home";

const ExploreService = () => {
  const myData = service_data;
  console.log(myData);
  return (
    <div>
      <div className="text-center">
        <HeaderTitle
          title={"Explore Our Data Services"}
          subTitle={"More than 15,000 companies trust and choose Itech"}
        />
      </div>
      <div>{myData.length}</div>
    </div>
  );
};

export default ExploreService;
