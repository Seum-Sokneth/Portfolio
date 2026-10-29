import { useEffect, useState } from "react";
import profileImage from "./assets/image.png";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

import { copy, projects, skills } from "./data/portfolioData";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isKhmer, setIsKhmer] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeSkillGroup, setActiveSkillGroup] = useState("frontend");
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = window.localStorage.getItem("portfolio-theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return "dark";
  });

  const t = isKhmer ? copy.km : copy.en;
  const skillItems = isKhmer ? skills.km : skills.en;
  const projectItems = isKhmer ? projects.km : projects.en;
  const isDark = theme === "dark";
  const selectedSkillGroup =
    skillItems.groups.find((group) => group.id === activeSkillGroup) ??
    skillItems.groups[0];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const introTimer = window.setTimeout(() => setShowIntro(false), 2800);

    return () => window.clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    if (showIntro) {
      return undefined;
    }

    const sections = ["home", "about", "projects", "skills", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);

        if (visibleSections.length === 0) {
          return;
        }

        const viewportFocus = window.innerHeight * 0.4;
        const currentSection = visibleSections.reduce((closest, entry) =>
          Math.abs(entry.boundingClientRect.top - viewportFocus) <
          Math.abs(closest.boundingClientRect.top - viewportFocus)
            ? entry
            : closest,
        );

        setActiveSection(currentSection.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [showIntro]);

  if (showIntro) {
    return (
      <div
        className="intro-screen"
        role="status"
        aria-label="Loading portfolio"
      >
        <div className="intro-count" aria-live="polite">
          <span style={{ "--count-delay": "0s" }}>1</span>
          <span style={{ "--count-delay": "0.7s" }}>2</span>
          <span style={{ "--count-delay": "1.4s" }}>3</span>
        </div>
        <p className="intro-label">SEUM SOKNETH / PORTFOLIO</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-(--surface) text-(--text)">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-32 -top-24 h-72 w-72 rounded-full bg-(--accent)/20 blur-3xl" />
        <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-(--accent-strong)/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-(--glow-soft) blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-(--line) bg-(--surface-header) backdrop-blur-xl">
        <div className="relative mx-auto flex max-w-6xl items-center justify-end px-6 py-4">
          <nav className="site-nav absolute left-1/2 hidden -translate-x-1/2 items-center text-sm md:flex">
            <a
              href="#home"
              className={`site-nav-link ${activeSection === "home" ? "is-active" : ""}`}
              aria-current={activeSection === "home" ? "location" : undefined}
              onClick={() => setActiveSection("home")}
            >
              {t.nav.home}
            </a>
            <a
              href="#skills"
              className={`site-nav-link ${activeSection === "skills" ? "is-active" : ""}`}
              aria-current={activeSection === "skills" ? "location" : undefined}
              onClick={() => setActiveSection("skills")}
            >
              {t.nav.skills}
            </a>
            <a
              href="#projects"
              className={`site-nav-link ${activeSection === "projects" ? "is-active" : ""}`}
              aria-current={activeSection === "projects" ? "location" : undefined}
              onClick={() => setActiveSection("projects")}
            >
              {t.nav.projects}
            </a>
            <a
              href="#about"
              className={`site-nav-link ${activeSection === "about" ? "is-active" : ""}`}
              aria-current={activeSection === "about" ? "location" : undefined}
              onClick={() => setActiveSection("about")}
            >
              {t.nav.about}
            </a>
            <a
              href="#contact"
              className={`site-nav-link ${activeSection === "contact" ? "is-active" : ""}`}
              aria-current={activeSection === "contact" ? "location" : undefined}
              onClick={() => setActiveSection("contact")}
            >
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                setTheme((current) => (current === "dark" ? "light" : "dark"))
              }
              className="grid h-10 w-10 place-items-center rounded-full border border-(--line) transition hover:border-(--accent) hover:text-(--accent)"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              title={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsKhmer((current) => !current)}
              className="rounded-full border border-(--line) px-4 py-2 text-xs font-medium tracking-[0.2em] uppercase transition hover:border-(--accent) hover:text-(--accent)"
            >
              {isKhmer ? "EN" : "KH"}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="rounded-full border border-(--line) px-3 py-2 text-sm md:hidden"
              aria-label="Toggle navigation"
            >
              Menu
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-(--line) px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm text-(--muted)">
              <a
                href="#home"
                className={activeSection === "home" ? "is-active" : ""}
                onClick={() => {
                  setActiveSection("home");
                  setMenuOpen(false);
                }}
              >
                {t.nav.home}
              </a>
              <a
                href="#skills"
                className={activeSection === "skills" ? "is-active" : ""}
                onClick={() => {
                  setActiveSection("skills");
                  setMenuOpen(false);
                }}
              >
                {t.nav.skills}
              </a>
              <a
                href="#projects"
                className={activeSection === "projects" ? "is-active" : ""}
                onClick={() => {
                  setActiveSection("projects");
                  setMenuOpen(false);
                }}
              >
                {t.nav.projects}
              </a>

              <a
                href="#about"
                className={activeSection === "about" ? "is-active" : ""}
                onClick={() => {
                  setActiveSection("about");
                  setMenuOpen(false);
                }}
              >
                {t.nav.about}
              </a>
              <a
                href="#contact"
                className={activeSection === "contact" ? "is-active" : ""}
                onClick={() => {
                  setActiveSection("contact");
                  setMenuOpen(false);
                }}
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <Home
          isKhmer={isKhmer}
          profileImage={profileImage}
          role={t.role}
          ctaPrimary={t.ctaPrimary}
          ctaSecondary={t.ctaSecondary}
          location={t.location}
        />

        <Skill
          activeSkillGroup={activeSkillGroup}
          selectedSkillGroup={selectedSkillGroup}
          setActiveSkillGroup={setActiveSkillGroup}
          skillItems={skillItems}
          title={t.skillsTitle}
          label={t.nav.skills}
        />

        <Project
          label={t.projectsLabel}
          projectItems={projectItems}
          sourceLabel={t.sourceCodeLabel}
          title={t.projectsTitle}
        />

        <About isKhmer={isKhmer} />

        <Contact
          contactText={t.contactText}
          emailLabel={t.email}
          focus={t.focus}
          focusText={t.focusText}
          label={t.nav.contact}
          title={t.contactTitle}
        />
      </main>

      <footer className="border-t border-(--line) px-6 py-8 text-center text-sm text-(--muted)">
        {t.footer}
      </footer>
    </div>
  );
}

export default App;
