import { Timeline } from "@/components/Timeline";
import { experiences } from "@/constants";

interface Props {}

const Experiences = (props: Props) => {
    return(
        <div className="w-full" id="experiences">
            <Timeline data={experiences} />
        </div>
    )
}

export default Experiences;