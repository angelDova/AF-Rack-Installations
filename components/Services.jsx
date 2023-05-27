// Mezzanine, stairways, teardown&dismantle, structural racking, selective racking, all types of storage systems, pick modules
import Maintenance from "../public/images/Maintenance.jpeg";
import Mezzanine from "../public/images/Mezzanine.jpeg";
import Stairways from "../public/images/Stairways.jpeg";
import Structural from "../public/images/Structural.jpeg";
import Teardown from "../public/images/Teardown.jpeg";
import ServicesImg from "./ServicesImg";

const Services = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Services Offered</p>
      <p className="pb-4">@AF Rack Installations</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <ServicesImg services={Mezzanine} />
        <ServicesImg services={Maintenance} />
        <ServicesImg services={Stairways} />
        <ServicesImg services={Structural} />
        <ServicesImg services={Teardown} />
        <ServicesImg services={Teardown} />
      </div>
    </div>
  );
};

export default Services;
