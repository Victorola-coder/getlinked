import {
  TimelineLeft,
  TimelineMobile,
  TimelineRight,
} from "../../components/timeline";
import { timeline } from "../../data/data";
import { Container } from "../../components";

const Timeline = () => {
  return (
    <div className="border-b-[1px] border-[#ffffff2e]">
      <Container className="py-20">
        <header className="w-full max-w-[346px] mx-auto text-center text-white mb-20">
          <h1 className="text-[32px] font-clashbold font-bold mb-2">
            Timeline
          </h1>
          <p className="font-mon text-[14px]">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </header>
        <section className="hidden sm:block">
          {timeline.map((tld) =>
            tld.direction === "left" ? (
              <TimelineLeft
                key={tld.id}
                title={tld.title}
                content={tld.content}
                date={tld.date}
                index={tld.index}
                start={tld?.start}
                end={tld?.end}
              />
            ) : (
              <TimelineRight
                key={tld.id}
                title={tld.title}
                content={tld.content}
                date={tld.date}
                index={tld.index}
                start={tld?.start}
                end={tld?.end}
              />
            )
          )}
        </section>
        <section className="block sm:hidden">
          {timeline.map((tld) => (
            <TimelineMobile
              key={tld.id}
              title={tld.title}
              content={tld.content}
              date={tld.date}
              index={tld.index}
            />
          ))}
        </section>
      </Container>
    </div>
  );
};

export default Timeline;
