import { useEffect, useState } from "react";
import { BriefcaseBusiness, FileText, FolderOpen, Mail, Linkedin } from "lucide-react";
import { SiFacebook, SiInstagram, SiWhatsapp, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

const WHATSAPP_REVIEW_URL =
  "https://wa.me/923378029920?text=Hello%20Global%20Career%20Studio%2C%20I%20would%20like%20to%20book%20a%20free%20resume%20review.";
const WHATSAPP_CHAT_URL = "https://wa.me/923378029920";
const CONTACT_EMAIL = "gloabalcareerstudio@gmail.com";
const BRAND_MARK_URL = `${import.meta.env.BASE_URL}images/global-career-mark.webp`;
const TEAM_PHOTO_BASE_URL = `${import.meta.env.BASE_URL}images/team/`;

type TeamMember = {
  name: string;
  title: string;
  experience: string;
  linkedin: string | null;
  photo: string | null;
};

// Keep team records and profile image paths together for easy updates.
const TEAM: TeamMember[] = [
  { name: "Liaqat Ali", title: "Founder & Agency Owner", experience: "", linkedin: null, photo: `${TEAM_PHOTO_BASE_URL}liaqat-ali.webp` },
  { name: "Sami Ullah Shah", title: "Senior ATS Resume & LinkedIn Optimization Specialist", experience: "7+ Years", linkedin: "https://www.linkedin.com/in/sami-ullah-shah-a0b921207/", photo: `${TEAM_PHOTO_BASE_URL}sami-ullah-shah.webp` },
  { name: "Shuja Uddin", title: "Senior ATS Resume & LinkedIn Optimization Specialist", experience: "9+ Years", linkedin: "https://www.linkedin.com/in/shuja-uddin-5a0361236/", photo: `${TEAM_PHOTO_BASE_URL}shuja-uddin.webp` },
  { name: "Nisar Ahmed", title: "Senior ATS Resume & LinkedIn Optimization Specialist", experience: "10+ Years", linkedin: "https://www.linkedin.com/in/nisar-ahmed-498130244/", photo: `${TEAM_PHOTO_BASE_URL}nisar-ahmed.webp` },
  { name: "Uzair Ahmed", title: "ATS Resume Writer & LinkedIn Optimization Specialist", experience: "5+ Years", linkedin: "https://www.linkedin.com/in/uzair-ahmed-0bb75b257/", photo: `${TEAM_PHOTO_BASE_URL}uzair-ahmed.webp` },
  { name: "Uzair Farooq", title: "Professional Resume Writer & LinkedIn Profile Optimization Expert", experience: "5+ Years", linkedin: "https://www.linkedin.com/in/uzair-farooq-240246260/", photo: `${TEAM_PHOTO_BASE_URL}uzair-farooq.webp` },
  { name: "Mehr Biyar", title: "ATS Resume & LinkedIn Optimization Expert", experience: "5+ Years", linkedin: "https://www.linkedin.com/in/mehr-biyar-6a3339257/", photo: `${TEAM_PHOTO_BASE_URL}mehr-biyar.webp` },
  { name: "Waqas Hassni", title: "Professional Resume Writer & LinkedIn Optimization Expert", experience: "5+ Years", linkedin: "https://www.linkedin.com/in/waqas-hassni-758331246/", photo: `${TEAM_PHOTO_BASE_URL}waqas-hassni.webp` },
  { name: "Muhammad Arsalan", title: "Resume Writer, LinkedIn Profile Specialist & Cover Letter Expert", experience: "5+ Years", linkedin: "https://www.linkedin.com/in/muhammad-arsalan-9765092a0/", photo: `${TEAM_PHOTO_BASE_URL}muhammad-arsalan.webp` },
  { name: "Sudais Ahmed", title: "Professional Resume Writer & LinkedIn Specialist", experience: "5+ Years", linkedin: "https://www.linkedin.com/in/sudais-ahmed/", photo: `${TEAM_PHOTO_BASE_URL}sudais-ahmed.webp` },
  { name: "Mudassir Ahmed", title: "ATS Resume Specialist, LinkedIn Optimization Expert & Cover Letter Strategist", experience: "5+ Years", linkedin: "https://www.linkedin.com/in/mudassir-ahmed-b7485b35a/", photo: `${TEAM_PHOTO_BASE_URL}mudassir-ahmed.webp` },
];

const SERVICES = [
  { number: "01", title: "Resume Writing", description: "Crafting ATS-friendly resumes designed to attract top recruiters worldwide.", icon: FileText },
  { number: "02", title: "Cover Letter", description: "Compelling and custom cover letters highlighting your unique skills.", icon: Mail },
  { number: "03", title: "LinkedIn Optimization", description: "Enhancing your profile to stand out in the global job market.", icon: Linkedin },
  { number: "04", title: "Job Application Assistance", description: "We proactively apply for relevant jobs for you in various industries.", icon: BriefcaseBusiness },
  { number: "05", title: "Portfolio & Samples", description: "Explore our successful resume and cover letter templates.", icon: FolderOpen },
];

const SOCIALS = [
  { name: "Facebook", href: "https://web.facebook.com/profile.php?id=61574395491287" },
  { name: "Instagram", href: "https://www.instagram.com/globalcareerstudio/" },
  { name: "X", href: "https://x.com/GlobalCareer001" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/globalcareerstudio" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const submitContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hello Global Career Studio,",
      `My name is ${String(form.get("name") ?? "").trim()}.`,
      `My email is ${String(form.get("email") ?? "").trim()}.`,
      `Message: ${String(form.get("message") ?? "").trim()}`,
    ].join("\n");
    window.open(`${WHATSAPP_CHAT_URL}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="site">
      <header className="header">
        <div className="wrap header-inner">
          <a className="brand" href="#home" aria-label="Global Career Studio home" data-testid="link-home">
            <img className="brand-mark" src={BRAND_MARK_URL} alt="" />
            <span>Global Career <b>Studio</b></span>
          </a>
          <button
            className={`menu-toggle${menuOpen ? " active" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
          >
            <span /><span /><span />
          </button>
          <nav id="primary-navigation" className={`nav${menuOpen ? " nav-open" : ""}`} aria-label="Main navigation">
            <a href="#home" onClick={closeMenu} data-testid="link-nav-home">Home</a>
            <a href="#services" onClick={closeMenu} data-testid="link-nav-services">Services</a>
            <a href="#team" onClick={closeMenu} data-testid="link-nav-team">Team</a>
            <a href="#contact" onClick={closeMenu} data-testid="link-nav-contact">Contact</a>
            <a className="nav-cta" href={WHATSAPP_REVIEW_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu} data-testid="link-header-review">Book Free Resume Review <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="wrap hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="eyebrow-line" />Career documents for a global search</div>
              <h1>Transform Your<br /><span>Career Globally</span></h1>
              <p className="hero-desc">Professional Resume Writing, Cover Letter, and LinkedIn Optimization tailored for European and international industries to land your dream remote job.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={WHATSAPP_REVIEW_URL} target="_blank" rel="noopener noreferrer" data-testid="link-get-started">Get Started Today <span aria-hidden="true">↗</span></a>
                <a className="button button-outline" href={WHATSAPP_REVIEW_URL} target="_blank" rel="noopener noreferrer" data-testid="link-hero-review">Book Free Resume Review</a>
              </div>
              <p className="trust-line"><span className="trust-dot" /> ATS-Optimized <i /> Globally Focused <i /> Success-Based Model</p>
            </div>
            <div className="hero-visual reveal delay-1" aria-label="Abstract career document illustration">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="hero-spark spark-one" /><div className="hero-spark spark-two" />
              <div className="resume-sheet">
                <div className="sheet-top"><span className="sheet-avatar">GC</span><span className="sheet-status">CAREER PROFILE</span></div>
                <div className="sheet-title-line" /><div className="sheet-sub-line" />
                <div className="sheet-rule" />
                <span className="sheet-label">EXPERIENCE</span>
                <div className="sheet-line wide" /><div className="sheet-line" /><div className="sheet-line short" />
                <div className="sheet-section"><span className="sheet-label">SKILLS</span><div className="skill-row"><i /><i /><i /></div></div>
                <span className="sheet-check" aria-hidden="true">✓</span>
              </div>
              <div className="visual-caption"><span className="caption-mark">GC</span><span>Make your next move<br /><b>feel like your best one.</b></span></div>
              <div className="visual-index">01 <span /> GLOBAL CAREER STUDIO</div>
            </div>
          </div>
          <div className="hero-bottom-line" />
        </section>

        <section className="section services" id="services">
          <div className="wrap">
            <div className="section-heading reveal">
              <div><div className="eyebrow"><span className="eyebrow-line" />What we do</div><h2>Make every part<br />of your profile <em>count.</em></h2></div>
              <p>Thoughtful career documents and application support, built around your next opportunity.</p>
            </div>
            <div className="service-grid">
              {SERVICES.map((service) => (
                <article className={`service-card reveal service-${service.number}`} key={service.number} data-testid={`card-service-${service.number}`}>
                  <div className="service-card-top"><span className="service-icon" aria-hidden="true"><service.icon size={19} strokeWidth={1.8} /></span><span className="service-num">{service.number}</span></div>
                  <h3>{service.title}</h3><p>{service.description}</p>
                  {service.number === "05" && <a className="sample-link" href="#samples" data-testid="link-view-samples">View Samples <span aria-hidden="true">↗</span></a>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="samples section" id="samples">
          <div className="wrap samples-layout">
            <div className="samples-copy reveal">
              <div className="eyebrow"><span className="eyebrow-line" />Portfolio & samples</div>
              <h2>Clear, polished.<br /><em>Ready to be yours.</em></h2>
              <p>Explore our successful resume and cover letter templates.</p>
              <a className="button button-primary" href="#sample-gallery" data-testid="button-view-samples">View Samples <span aria-hidden="true">↓</span></a>
            </div>
            <div className="sample-gallery" id="sample-gallery" aria-label="Portfolio sample placeholders">
              <article className="sample-preview resume-preview reveal" data-testid="sample-resume-preview">
                <div className="preview-head"><span>RESUME</span><span className="preview-placeholder">PLACEHOLDER PREVIEW</span></div>
                <div className="preview-body" aria-label="Resume sample placeholder" data-testid="sample-resume-placeholder">
                  <div className="preview-profile"><span className="preview-avatar" /><div><i className="line line-title" /><i className="line line-small" /></div></div>
                  <i className="line line-heading" /><i className="line" /><i className="line line-medium" /><i className="line line-heading second" /><i className="line" /><i className="line line-short" />
                  <div className="preview-tags"><i /><i /><i /></div>
                </div>
                <span className="preview-edit">Sample placeholder</span>
              </article>
              <article className="sample-preview letter-preview reveal delay-1" data-testid="sample-cover-letter-preview">
                <div className="preview-head"><span>COVER LETTER</span><span className="preview-placeholder">PLACEHOLDER PREVIEW</span></div>
                <div className="letter-paper" aria-label="Cover letter sample placeholder" data-testid="sample-cover-letter-placeholder">
                  <i className="line line-title" /><i className="line line-short" /><i className="line line-heading second" /><i className="line" /><i className="line" /><i className="line line-medium" /><i className="line line-heading second" /><i className="line" /><i className="line line-short" />
                </div>
                <span className="preview-edit">Sample placeholder</span>
              </article>
            </div>
          </div>
        </section>

        <section className="review-band">
          <div className="wrap review-inner reveal">
            <div><span className="review-kicker">A clear first step</span><h2>Not sure where your resume stands?<br /><em>Get a free expert review.</em></h2></div>
            <a className="button button-light" href={WHATSAPP_REVIEW_URL} target="_blank" rel="noopener noreferrer" data-testid="link-review-banner">Book Free Resume Review on WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="section team-section" id="team">
          <div className="wrap">
            <div className="section-heading team-heading reveal">
              <div><div className="eyebrow"><span className="eyebrow-line" />About & team</div><h2>People behind<br />your next <em>chapter.</em></h2></div>
              <p>Global Career Studio supports people applying to international opportunities with resume writing, cover letters, LinkedIn optimization and job application assistance.</p>
            </div>
            <div className="team-grid">
              {TEAM.map((member, index) => (
                <article className={`team-card${index === 0 ? " owner-card" : ""} reveal`} key={member.name} data-testid={`card-team-${index}`}>
                  <div className="team-photo" role="img" aria-label={member.photo ? `${member.name} portrait` : `${member.name} initials placeholder`}>
                    {member.photo ? <img src={member.photo} alt={`${member.name}`} /> : <span>{member.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span>}
                    {index === 0 && <span className="owner-label">OWNER</span>}
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3><p className="team-title">{member.title}</p>
                    {member.experience && <p className="team-experience">{member.experience}</p>}
                    {member.linkedin && <a className="linkedin-link" href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`} data-testid={`link-linkedin-${index}`}>View LinkedIn <span aria-hidden="true">↗</span></a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process" id="process">
          <div className="wrap">
            <div className="section-heading process-heading reveal">
              <div><div className="eyebrow"><span className="eyebrow-line" />A clear way forward</div><h2>Our Success Model</h2></div>
              <p>We support your global job search. Once you are hired, we charge a simple 10% commission on your first month's salary.</p>
            </div>
            <div className="steps">
              {[
                ["01", "Free Resume Review"],
                ["02", "Profile and Documents Built"],
                ["03", "Job Applications Submitted"],
                ["04", "You Get Hired, Simple 10% Commission"],
              ].map(([number, title]) => <article className="step reveal" key={number} data-testid={`step-process-${number}`}><span className="step-number">{number}</span><span className="step-rule" /><h3>{title}</h3></article>)}
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="wrap contact-layout">
            <div className="contact-copy reveal">
              <div className="eyebrow"><span className="eyebrow-line" />Let's connect</div>
              <h2>Your next move<br />starts <em>here.</em></h2>
              <p>Tell us what you’re looking for. Your message will open in WhatsApp so you can send it directly.</p>
              <a className="contact-review-link" href={WHATSAPP_REVIEW_URL} target="_blank" rel="noopener noreferrer" data-testid="link-contact-review">Book Free Resume Review <span aria-hidden="true">↗</span></a>
              <div className="contact-details">
                <a href={`mailto:${CONTACT_EMAIL}`} data-testid="link-email"><span className="detail-icon" aria-hidden="true">@</span><span><small>Email</small>{CONTACT_EMAIL}</span></a>
                <a href={WHATSAPP_REVIEW_URL} target="_blank" rel="noopener noreferrer" data-testid="link-whatsapp"><span className="detail-icon" aria-hidden="true"><SiWhatsapp /></span><span><small>WhatsApp</small>+923378029920</span></a>
              </div>
            </div>
            <form className="contact-form reveal delay-1" onSubmit={submitContact} data-testid="form-contact">
              <div className="form-heading"><span>Send a message</span><span className="form-index">01 — 03</span></div>
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Name" required data-testid="input-contact-name" />
              <label htmlFor="contact-email">Email address</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required data-testid="input-contact-email" />
              <label htmlFor="contact-message">How can we help?</label>
              <textarea id="contact-message" name="message" rows={4} placeholder="Write your message…" required data-testid="input-contact-message" />
              <button className="button button-primary form-submit" type="submit" data-testid="button-contact-submit">Continue to WhatsApp <span aria-hidden="true">↗</span></button>
              <p className="form-note">Your message details are added to a WhatsApp chat for you to send.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-main">
          <div className="footer-brand-block">
            <a className="brand footer-brand" href="#home" data-testid="link-footer-home"><img className="brand-mark" src={BRAND_MARK_URL} alt="" /><span>Global Career <b>Studio</b></span></a>
            <a className="footer-domain" href="https://globalcareerstudio.com" data-testid="link-domain">globalcareerstudio.com</a>
          </div>
          <nav className="footer-socials" aria-label="Social media">
            {SOCIALS.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" data-testid={`link-social-${social.name.toLowerCase()}`}>{social.name === "Facebook" ? <SiFacebook aria-hidden="true" /> : social.name === "Instagram" ? <SiInstagram aria-hidden="true" /> : social.name === "X" ? <SiX aria-hidden="true" /> : <FaLinkedinIn aria-hidden="true" />}<span>{social.name}</span><span aria-hidden="true">↗</span></a>)}
          </nav>
          <a className="footer-review" href={WHATSAPP_REVIEW_URL} target="_blank" rel="noopener noreferrer" data-testid="link-footer-review">Book Free Resume Review <span aria-hidden="true">↗</span></a>
        </div>
        <div className="wrap footer-contact-links">
          <a href={`mailto:${CONTACT_EMAIL}`} data-testid="link-footer-email"><Mail size={14} aria-hidden="true" /> {CONTACT_EMAIL}</a>
          <a href={WHATSAPP_REVIEW_URL} target="_blank" rel="noopener noreferrer" data-testid="link-footer-whatsapp"><SiWhatsapp aria-hidden="true" /> +923378029920</a>
        </div>
        <div className="wrap footer-bottom"><span>© 2026 Global Career Studio. All rights reserved.</span><a href="#home" data-testid="link-back-top">Back to top ↑</a></div>
      </footer>
      <a className="whatsapp-float" href={WHATSAPP_REVIEW_URL} target="_blank" rel="noopener noreferrer" aria-label="Book a free resume review on WhatsApp" data-testid="button-fixed-whatsapp">
        <SiWhatsapp className="whatsapp-symbol" aria-hidden="true" /><span>Free resume review</span>
      </a>
    </div>
  );
}

export default App;