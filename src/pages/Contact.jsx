import useReveal from "../hooks/useReveal";

function Contact({ contactText, emailLabel, focus, focusText, label, title }) {
  const [sectionRef, isRevealed] = useReveal();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`reveal-section mx-auto max-w-6xl px-6 py-24 ${isRevealed ? "is-revealed" : ""}`}
    >
      <div className="contact-panel">
        <div className="max-w-2xl">
          <p className="section-kicker">{label}</p>
          <h2 className="section-title">{title}</h2>
          <p className="mt-4 text-base leading-8 text-(--muted)">
            {contactText}
          </p>
        </div>

        <div className="grid gap-4 text-sm text-(--muted) sm:grid-cols-2">
          {/* <a className="contact-link" href="mailto:sokneth.dev@example.com">
            <span className="font-medium text-(--text)">{emailLabel}</span>
            <span>sokneth.dev@example.com</span>
          </a> */}
          <a
            className="contact-link"
            href="https://github.com/Seum-Sokneth"
            target="_blank"
            rel="noreferrer"
          >
            <span className="font-medium text-(--text)">GitHub</span>
            <span>github.com</span>
          </a>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/seum-sokneth-a9b454427/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="font-medium text-(--text)">LinkedIn</span>
            <span>linkedin.com</span>
          </a>
          <a
            className="contact-link"
            href="https://www.facebook.com/share/1TMhRqQ3ZU/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="font-medium text-(--text)">Facebook</span>
            <span>facebook.com</span>
          </a>
          <a
            className="contact-link"
            href="https://t.me/neth1"
            target="_blank"
            rel="noreferrer"
          >
            <span className="font-medium text-(--text)">Telegram</span>
            <span>t.me</span>
          </a>
          {/* <div className="contact-link">
            <span className="font-medium text-(--text)">{focus}</span>
            <span>{focusText}</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
