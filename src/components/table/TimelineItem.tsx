interface TimelineItemProps {
    heading: string;
    description: string;
    topicCount: string;
    sizeProperty?: string;
    vertical?: boolean;
}

function TimelineItem ({heading, description, topicCount, sizeProperty, vertical}:TimelineItemProps) {
    return (
        <>
            <td className={`${vertical === true ? "p-[0.9375rem_0.625rem_0.9375rem_0]" : "p-[1.5625rem_1.375rem_1.375rem_0.5rem] table-cell text-left align-middle"} ${sizeProperty}`}>
                <h6
                className={`font-semibold text-[1.15rem] leading-[110%] ${(vertical === true && heading !== "") && "m-[0.76666667rem_0_0.46rem_0]"}`}>
                    {heading}
                </h6>
                <p className="text-[0.9375rem] leading-[1.375rem]">
                    {description}
                </p>
                <span className="text-[0.75rem] text-[#f55d4b]">
                    {topicCount}
                </span>
            </td>
        </>
    );
}

export default TimelineItem;