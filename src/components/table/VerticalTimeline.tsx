import TimelineItem from "./TimelineItem";

function VerticalTimeline () {
    return (
        <>
            <div className="overflow-y-scroll h-[32rem] p-[0_0.75rem] block 2xlm:hidden">
                <table className="w-[16.25rem] h-[104.375rem] bg-[url('./img/timeline-vertical.png')] bg-no-repeat bg-center bg-cover m-auto table border-collapse border-spacing-0">
                    <tbody className="h-full">
                        <tr>
                            <TimelineItem heading={""} description={""} topicCount={""} sizeProperty={"h-[2%]"} vertical />
                            <TimelineItem heading={""} description={""} topicCount={""} vertical />
                        </tr>
                        <tr>
                            <TimelineItem heading={"OOP in PHP"} description={"Program as a kit set"} topicCount={"1st topic"} sizeProperty={"h-[13%]"} vertical />
                            <TimelineItem heading={""} description={""} topicCount={""} vertical />
                        </tr>
                        <tr>
                            <TimelineItem heading={""} description={""} topicCount={""} sizeProperty={"h-[18%]"} vertical />
                            <TimelineItem heading={"PostgreSQL and DIBI"} description={"Database abstraction library"} topicCount={"2nd topic"} vertical />
                        </tr>
                        <tr>
                            <TimelineItem heading={"Application architecture"} description={"Design patterns"} topicCount={"3rd topic"} sizeProperty={"h-[16%]"} vertical />
                            <TimelineItem heading={""} description={""} topicCount={""} vertical />
                        </tr>
                        <tr>
                            <TimelineItem heading={""} description={""} topicCount={""} sizeProperty={"h-[16%]"} vertical />
                            <TimelineItem heading={"Advanced techniques"} description={"PHP made more efficient"} topicCount={"4th topic"}  vertical />
                        </tr>
                        <tr>
                            <TimelineItem heading={"SECURITY"} description={"Common vulnerabilities"} topicCount={"5th topic"} sizeProperty={"h-[15%]"} vertical />
                            <TimelineItem heading={""} description={""} topicCount={""} vertical />
                        </tr>
                        <tr>
                            <TimelineItem heading={""} description={""} topicCount={""} sizeProperty={"h-[9%]"} vertical />
                            <TimelineItem heading={"AJAX"} description={"JSON"} topicCount={"6th topic"} vertical />
                        </tr>
                        <tr>
                            <TimelineItem heading={"Integrations"} description={"SOAP, REST API"} topicCount={"7th topic"} sizeProperty={"h-[11%]"} vertical />
                            <TimelineItem heading={""} description={""} topicCount={""} vertical />
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default VerticalTimeline;