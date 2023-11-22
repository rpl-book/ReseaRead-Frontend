import Image from "next/image";
import Button from "../Button";
import SubsectionText from "../SubsectionText";
import { PDesc } from "../PText";
import "./NewRelease.css";

const NewRelease = ({ desc }) => {
  return (
    <div>
      <div className="mt-30 mb-10">
        <SubsectionText title="New Release"/>

        <div className="flex">
          <div className="flex-none w-1/2">
            <div className="mt-5 pr-10">
              <PDesc desc="
                Dive into the enchanting world of literary mastery, where words dance
                on the pages like never before. Immerse yourself in a captivating journey
                that knows no bounds, as the stories unfold with every turn of the page.
                Explore uncharted territories of imagination and embrace narratives that
                will sweep you off your feet. Our latest releases promise to transport you to
                realms of wonder and awe, where every sentence is a portal to a new
                adventure waiting to be explored" 
              />
            </div>
          </div>

          <div className="nr-img flex-none w-1/2">
            <img src="/nr-adv.png"/>
          </div>
        </div>

        <div className="mt-5">
          <Button buttonName="Discover" size="20" color="white" targetPage="/" />
        </div>
        

      </div>
    </div>
  );
};

export default NewRelease;
