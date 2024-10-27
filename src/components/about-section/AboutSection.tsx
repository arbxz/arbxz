import Container from "@/components/shared/Container";

import About from "./About";

const AboutSection = () => {
  return (
    <div id="skils" className="w-full">
      <Container>
        <div className="flex flex-wrap sm:flex-nowrap w-full gap-4 justify-stretch items-stretch">
          <div className="w-full">
            <About />
          </div>
          <div className="hidden dark:block w-full rounded-br-2xl rounded-bl-2xl overflow-hidden">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1854658602&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            {/* <div
              style={{
                fontSize: "10px",
                color: "#cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                  "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
                fontWeight: 100,
              }}>
              <a
                href="https://soundcloud.com/gay_bitch"
                title="Luna"
                target="_blank"
                style={{ color: "#cccccc", textDecoration: "none" }}>
                Luna
              </a>
              ·
              <a
                href="https://soundcloud.com/gay_bitch/the-promised-consort-elden"
                title="The Promised Consort Radahn - Elden Ring Shadow Of The Erdtree OST"
                target="_blank"
                style={{ color: "#cccccc", textDecoration: "none" }}>
                The Promised Consort Radahn - Elden Ring Shadow Of The Erdtree
                OST
              </a>
            </div> */}
          </div>

          <div className="dark:hidden w-full rounded-br-2xl rounded-bl-2xl overflow-hidden">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1864334481&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            {/* <div
              style={{
                fontSize: "10px",
                color: "#cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                  "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
                fontWeight: 100,
              }}>
              <a
                href="https://soundcloud.com/carlos-belles-student-ehs"
                title="Reclaimer"
                target="_blank"
                style={{ color: "#cccccc", textDecoration: "none" }}>
                Reclaimer
              </a>
              ·
              <a
                href="https://soundcloud.com/carlos-belles-student-ehs/shaman-village-elden-ring-shadow-of-the-erdtree-ost-official-soundtrack-original-score"
                title="Shaman Village  Elden Ring Shadow Of The Erdtree OST Official Soundtrack Original Score"
                target="_blank"
                style={{ color: "#cccccc", textDecoration: "none" }}>
                Shaman Village Elden Ring Shadow Of The Erdtree OST Official
                Soundtrack Original Score
              </a>
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
