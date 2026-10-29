import profileImageFallback from "../assets/image.png";
import useReveal from "../hooks/useReveal";

function Home({
  isKhmer,
  profileImage = profileImageFallback,
  role,
  location,
}) {
  const [sectionRef, isRevealed] = useReveal();

  return (
    <section
      id="home"
      ref={sectionRef}
      className={`home-hero reveal-section mx-auto min-h-[calc(100vh-81px)] max-w-6xl px-6 py-12 ${isRevealed ? "is-revealed" : ""}`}
    >
      <img
        className="home-profile-image"
        src={profileImage}
        alt="Seum Sokneth"
      />

      <div className="home-copy-entrance max-w-3xl">
        <p className="section-kicker">Portfolio</p>
        <div className="mt-8">
          <div className="mt-4">
            <div className="fx-typewriter">WEBDEVELOPER</div>
          </div>
          <div className="mt-4">
            <h1 className="fx-aurora font-extrabold leading-tight ">
              I am Full-Stack Web Developer and Java Backend Engineering
            </h1>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-(--muted)">
          {isKhmer
            ? "ខ្ញុំចូលចិត្តសាងសង់ UI ស្អាតៗ និង backend services ដែលមានរចនាសម្ព័ន្ធច្បាស់លាស់ សម្រាប់ projects ដែលអាចប្រើការពិតបាន។"
            : "I enjoy building polished interfaces and structured backend services for projects that solve real problems."}
        </p>
        <a
          href="/Sokneth-Seum-Resume.pdf"
          download="Sokneth-Seum-Resume.pdf"
          className="mt-8 inline-flex items-center rounded-full border border-(--accent) px-5 py-3 text-sm font-semibold text-(--accent) transition hover:bg-(--accent) hover:text-(--surface)"
        >
          Download CV
        </a>
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-(--muted)">
          <div>
            <p className="font-semibold text-(--text)">01+</p>
            <p>{isKhmer ? "ឆ្នាំនៃការអនុវត្ត" : "Years practicing"}</p>
          </div>
          <div>
            <p className="font-semibold text-(--text)">React + Java</p>
            <p>{role}</p>
          </div>
          <div>
            <p className="font-semibold text-(--text)">Remote</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
