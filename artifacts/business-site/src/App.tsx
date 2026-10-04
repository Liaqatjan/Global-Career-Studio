function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="wrap header-inner">
          <a className="brand" href="#home" aria-label="Aapka Business, shuru">
            <span className="brand-mark">A</span>
            <span>Aapka Business</span>
          </a>
          <nav className="nav" aria-label="Asal navigation">
            <a href="#services">Khidmaat</a>
            <a href="#about">Hamare baare mein</a>
            <a href="#process">Tareeqa</a>
            <a href="#faq">Aksar poochay gaye</a>
          </nav>
          <a className="nav-cta" href="#contact">Rabita karein <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="wrap hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">Aap ke qareeb, aap ke liye</div>
              <h1 className="display">Kaam ho<br />aasaan. <em>Rishta</em><br />rahe khaas.</h1>
              <p className="hero-desc">Rozmarrah ki zarooriyat ke liye seedhi, bharosemand madad. Aap batayein kya chahiye — baqi baat hum mil kar samajh lete hain.</p>
              <div className="hero-actions">
                <a className="button" href="#services">Khidmaat dekhein <span aria-hidden="true">↗</span></a>
                <a className="text-link" href="#contact">Rabtay ka tareeqa <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <div className="hero-art reveal delay-1" aria-label="Sukoon bhara abstract illustration">
              <div className="stamp">Aapka<br />apna<br />business</div>
              <div className="art-frame">
                <div className="sun-disc" />
                <div className="arch"><div className="arch-inner" /></div>
                <div className="stem one"><i className="leaf l1" /><i className="leaf l2" /></div>
                <div className="stem two"><i className="leaf l3" /><i className="leaf l4" /></div>
              </div>
              <div className="art-note">Baat se shuru, bharosay tak.</div>
            </div>
          </div>
        </section>

        <div className="marquee" aria-label="Hamari soch">
          <div className="wrap marquee-inner">
            <span>Seedhi baat <i>✳</i></span><span>Saaf mashwara <i>✳</i></span><span>Aapki sahulat <i>✳</i></span><span>Apna sa rawayya <i>✳</i></span>
          </div>
        </div>

        <section className="section services" id="services">
          <div className="wrap">
            <div className="section-heading">
              <div><div className="eyebrow">Hum kis tarah madad karte hain</div><h2 className="display">Kaam ki baat,<br />bina uljhan.</h2></div>
              <p>Yeh jagah aap apni asal khidmaat ke mutabiq asaani se badal sakte hain. Har service ke saath ek chhoti si wazahat dein.</p>
            </div>
            <div className="service-grid">
              <article className="service-card"><span className="service-num">01 / Khidmat</span><h3>Service ka naam</h3><p>Yahan apni pehli khidmat ka mukhtasar aur saaf ta'aruf likhein.</p><span className="card-arrow" aria-hidden="true">↗</span></article>
              <article className="service-card"><span className="service-num">02 / Madad</span><h3>Kaam ki qisam</h3><p>Batayein ke yeh kaam kis zaroorat mein kaam aata hai.</p><span className="card-arrow" aria-hidden="true">↗</span></article>
              <article className="service-card"><span className="service-num">03 / Mashwara</span><h3>Mazeed sahulat</h3><p>Apni teesri peshkash ya kisi khaas option ki tafseel dein.</p><span className="card-arrow" aria-hidden="true">↗</span></article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap about" id="about">
            <div className="about-visual">
              <span className="about-mark">apna</span>
              <div className="about-quote">“Pehle samajhna,<br />phir kaam shuru karna.”</div>
            </div>
            <div className="about-copy">
              <div className="eyebrow">Chhota business, apna rawayya</div>
              <h2 className="display">Har baat mein insaniyat.</h2>
              <p>Aapka Business ek owner-run local business ke liye tayyar kiya gaya safha hai. Yahan apna chhota sa ta'aruf dein: aap kaun hain, kya kaam karte hain, aur customers aapse kis tarah rabta kar sakte hain.</p>
              <p>Apni asli kahani aur kaam ka andaaz likhein — saadgi se, apne alfaaz mein.</p>
              <div className="about-points">
                <div className="about-point"><span className="point-dot">01</span> Seedha rabta, seedhi baat</div>
                <div className="about-point"><span className="point-dot">02</span> Zaroorat ke mutabiq mashwara</div>
                <div className="about-point"><span className="point-dot">03</span> Kaam se pehle wazeh tafseel</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section process" id="process">
          <div className="wrap">
            <div className="section-heading">
              <div><div className="eyebrow">Shuru karna hai asaan</div><h2 className="display">Chaar qadam.<br />Koi mushkil nahi.</h2></div>
              <p>Har naya kaam ek guftagu se shuru hota hai. Aap apni zaroorat batayein, phir agla qadam saaf ho jata hai.</p>
            </div>
            <div className="steps">
              <article className="step"><span className="step-number">Qadam 01</span><h3>Baat batayein</h3><p>Apni zaroorat ya sawal ka chhota sa khulasa dein.</p></article>
              <article className="step"><span className="step-number">Qadam 02</span><h3>Mil kar samjhein</h3><p>Hum aapki baat sun kar munasib options par guftagu karenge.</p></article>
              <article className="step"><span className="step-number">Qadam 03</span><h3>Tafseel tay karein</h3><p>Kaam, waqt aur baqi zaroori baatein pehle wazeh hongi.</p></article>
              <article className="step"><span className="step-number">Qadam 04</span><h3>Kaam aage barhe</h3><p>Sab baat samajh aaye, tab mil kar agla qadam lein.</p></article>
            </div>
          </div>
        </section>

        <section className="note-band">
          <div className="wrap note-inner">
            <div><h2 className="display">Har sawal ki jagah hai.<br />Baat karne se shuru karein.</h2><p>Koi commitment nahi — pehle bas apni zaroorat share karein.</p></div>
            <a className="button" href="#contact">Rabtay ki tafseel <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="wrap faq-grid">
            <div>
              <div className="eyebrow">Zehan mein sawal?</div>
              <h2 className="display">Pehle se jaan lein.</h2>
              <p className="faq-intro">Aam sawalon ke jawab yahan diye gaye hain. Apni service ke hisaab se inhein edit karein.</p>
            </div>
            <div className="faq-list">
              <details className="faq-item"><summary>Apni service ke baare mein kaise poochun?</summary><p>Rabtay ke diye gaye zariye se apna sawal bhejein ya call karein. Apni zaroorat ka chhota sa khulasa dena kaafi hai.</p></details>
              <details className="faq-item"><summary>Kaam shuru karne se pehle kya maloom hoga?</summary><p>Kaam ki tafseel, dastiyabi aur doosri zaroori baatein pehle guftagu mein wazeh kar lein. Yahan apni asal policy add karein.</p></details>
              <details className="faq-item"><summary>Kya main apni zaroorat ke mutabiq mashwara le sakta hoon?</summary><p>Ji haan, pehle apni baat share karein. Aap mil kar tay kar sakte hain ke agla munasib qadam kya hai.</p></details>
              <details className="faq-item"><summary>Rabtay ke liye kya tafseel bhejun?</summary><p>Apna naam, rabtay ka tareeqa aur zaroorat ka mukhtasar bayan bhejna madadgar hota hai. Sensitive maloomat share na karein.</p></details>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap contact-card">
            <div>
              <div className="eyebrow">Aapki baari</div>
              <h2 className="display">Baat yahin<br />se shuru karein.</h2>
              <p>Apni asal contact details neeche add karein. Filhaal yeh editable placeholders hain — koi form submit ya fake contact link nahi.</p>
              <a className="button" href="#home">Wapas shuru par <span aria-hidden="true">↑</span></a>
            </div>
            <div className="contact-options">
              <div className="contact-item"><span className="contact-icon" aria-hidden="true">↗</span><div><strong>Phone / WhatsApp</strong><span>[Apna phone number yahan likhein]</span></div></div>
              <div className="contact-item"><span className="contact-icon" aria-hidden="true">@</span><div><strong>Email</strong><span>[Apna email address yahan likhein]</span></div></div>
              <div className="contact-item"><span className="contact-icon" aria-hidden="true">⌖</span><div><strong>Jagah</strong><span>[Apna shehar ya ilaqa yahan likhein]</span></div></div>
              <div className="contact-item"><span className="contact-icon" aria-hidden="true">◷</span><div><strong>Auqaat</strong><span>[Apne kaam ke auqaat yahan likhein]</span></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <a className="brand" href="#home"><span className="brand-mark">A</span><span>Aapka Business</span></a>
          <span>Apna kaam, apne logon ke liye.</span>
          <div className="footer-links"><a href="#services">Khidmaat</a><a href="#about">Ta'aruf</a><a href="#contact">Rabita</a></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
