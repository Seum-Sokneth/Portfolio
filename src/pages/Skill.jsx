import useReveal from "../hooks/useReveal";

const skillLogos = {
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "React.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  HTML5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "Tailwind CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  Bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  "Spring Boot":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  Laravel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  "C++":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "VS Code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  Figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
};

function Skill({
  activeSkillGroup,
  label,
  selectedSkillGroup,
  setActiveSkillGroup,
  skillItems,
  title,
}) {
  const [sectionRef, isRevealed] = useReveal();

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`skills-section reveal-section mx-auto max-w-6xl px-4 lg:mt-10  py-6 md:py-8 ${isRevealed ? "is-revealed" : ""}`}
    >
      <div className="mb-4 max-w-2xl ">
        <p className="section-kicker">{label}</p>
        <h2 className="section-title ">{title}</h2>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {skillItems.groups.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`skill-category-card text-left ${activeSkillGroup === item.id ? "is-active" : ""}`}
            onClick={() => setActiveSkillGroup(item.id)}
          >
            <div className="skill-category-heading">
              <div className="skill-category-icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="text-base font-extrabold">{item.title}</h3>
            </div>
            <div className="skill-category-items flex flex-wrap gap-3">
              {item.items.map((entry) => (
                <span key={entry} className="skill-chip">
                  {skillLogos[entry] ? (
                    <img src={skillLogos[entry]} alt="" aria-hidden="true" />
                  ) : (
                    <span className="skill-chip-fallback" aria-hidden="true">
                      {entry.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                  {entry}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      <div className="skills-meter-panel mt-4">
        <div className="skills-meter-header">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="text-base font-extrabold">
              {selectedSkillGroup.barsTitle}
            </h3>
            <div className="skill-scale" aria-label="Skill percentage scale">
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        <div className="skills-meter-grid grid gap-x-6 gap-y-3 p-3 sm:grid-cols-2">
          {selectedSkillGroup.bars.map((item) => (
            <div key={item.name}>
              <div className="mb-1 flex items-center justify-between gap-3">
                <span className="text-sm font-bold">{item.name}</span>
                <span className="text-sm font-medium text-(--text)/90">
                  {item.level}%
                </span>
              </div>
              <div className="skill-progress-track">
                <span
                  className="skill-progress-fill"
                  style={{ width: `${item.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
