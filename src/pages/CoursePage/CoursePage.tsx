import Header from "../../components/Common/Header/Header";
import CourseLogo from "../../components/DataComponents/CourseLogo/CourseLogo";
import Directions from "../../components/DataComponents/Directions/Directions";
import FittingText from "../../components/DataComponents/FittingText/FittingTexts";
import LowStartMan from "../../components/OtherComponents/LowStartMan/LowStartMan";

export default function CoursePage() {
  return (
    <>
      <div className="flex flex-col container mx-auto md: ">
      <Header />
      <CourseLogo />
      <FittingText />
      <Directions />
      <LowStartMan/>
      </div>
    </>
  );
}
