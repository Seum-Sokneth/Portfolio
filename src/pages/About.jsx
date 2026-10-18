import useReveal from "../hooks/useReveal";
import profileImage from "../assets/images/mypic.jpg";

function About({ isKhmer }) {
  const [sectionRef, isRevealed] = useReveal();

  const educationItems = [
    {
      school: isKhmer ? "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ" : "Royal University of Phnom Penh",
      degree: isKhmer ? "បរិញ្ញាបត្រវិស្វកម្មបច្ចេកវិទ្យាព័ត៌មាន" : "Bachelor of Information Technology Engineering",
      period: isKhmer ? "២០២៥ -> បច្ចុប្បន្ន" : "2025 -> Present",
      location: isKhmer ? "ភ្នំពេញ, កម្ពុជា" : "Phnom Penh, Cambodia",
      status: isKhmer ? "កំពុងសិក្សា" : "Active",
    },
    {
      school: isKhmer ? "វិទ្យាល័យ ប៊ុន រ៉ានី ហ៊ុន សែន មេមត់" : "Bun Rany Hun Sen Memot High School",
      degree: isKhmer ? "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ" : "High School Diploma",
      period: isKhmer ? "២០២៤ -> បញ្ចប់" : "2024 -> Graduated",
      location: isKhmer ? "មេមត់, ត្បូងឃ្មុំ, កម្ពុជា" : "Memot, Tboung Khmum, Cambodia",
      status: isKhmer ? "រួចរាល់" : "Done",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`reveal-section mx-auto max-w-6xl px-6 py-24 ${isRevealed ? "is-revealed" : ""}`}
    >
      <div className="about-showcase md:grid md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div className="order-2 space-y-6 md:order-1">
          <div>
            <p className="section-kicker">
              {isKhmer ? "អំពីខ្ញុំ" : "About Me"}
            </p>
            <h2 className="section-title text-2xl md:text-4xl">
              {isKhmer
                ? "ខ្ញុំចូលចិត្តបង្កើត software ដែលស្អាត សាមញ្ញ និងងាយថែទាំ។"
                : "I care about software that feels clean, simple, and maintainable."}
            </h2>
          </div>

          <div className="about-text-card panel space-y-6 text-base leading-8 text-[var(--muted)]">
            <p>
              {isKhmer
                ? "ខ្ញុំផ្តោតលើ React សម្រាប់ frontend និង Java Spring Boot សម្រាប់ backend។ ខ្ញុំចូលចិត្តរៀបចំ code ឱ្យអានងាយ និងបង្កើត interfaces ដែលសម្របខ្លួនបានល្អលើ mobile និង desktop។"
                : "My focus is React on the frontend and Java Spring Boot on the backend. I like organizing code clearly and building interfaces that adapt well on mobile and desktop."}
            </p>
            <p>
              {isKhmer
                ? "គោលដៅរបស់ខ្ញុំគឺបន្តរីកចម្រើនជាអ្នកអភិវឌ្ឍ full-stack ដោយធ្វើ projects ពិត, ធ្វើការជាក្រុម និងដោះស្រាយបញ្ហាដោយរចនាសម្ព័ន្ធល្អ។"
                : "My goal is to keep growing into a strong full-stack developer by shipping real projects, working in teams, and solving problems with solid structure."}
            </p>
          </div>

          <div className="space-y-5">
            {educationItems.map((item) => (
              <article key={item.school} className="education-card">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="education-title">{item.school}</h3>
                    <p className="education-degree">{item.degree}</p>
                  </div>
                  <span className="education-status">
                    <span aria-hidden="true" />
                    {item.status}
                  </span>
                </div>
                <div className="education-meta">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="about-portrait-wrap order-1 md:order-2">
          <img
            className="about-portrait"
            src={profileImage}
            alt="Seum Sokneth"
          />
        </div>
      </div>
    </section>
  );
}

export default About;