import { useState } from 'react'
import { Button } from './components/Button/Button'
import { Input } from './components/Input/Input'
import { Card } from './components/Card/Card'
import { Modal } from './components/Modal/Modal'
import { Accordion } from './components/Accordion/Accordion'

const features = [
  { icon: '⚡', title: 'Hızlı çalışma', text: 'Tek bir panelden görevlerinizi ve ekip işlerinizi kolayca takip edin.' },
  { icon: '📊', title: 'Basit raporlar', text: 'Projenizin durumunu anlaşılır grafik ve özetlerle görün.' },
  { icon: '🔒', title: 'Güvenli alan', text: 'Ekibinizin verilerini düzenli ve güvenli şekilde yönetin.' },
]

const plans = [
  { name: 'Başlangıç', price: '0₺', description: 'Küçük ekipler için', features: ['3 proje', 'Temel raporlar', 'E-posta desteği'] },
  { name: 'Profesyonel', price: '249₺', description: 'Büyüyen ekipler için', features: ['Sınırsız proje', 'Gelişmiş raporlar', 'Öncelikli destek'], featured: true },
  { name: 'Ekip', price: '499₺', description: 'Daha büyük ekipler için', features: ['Tüm özellikler', 'Özel çalışma alanı', '7/24 destek'] },
]

const faqs = [
  { question: 'Flowly nedir?', answer: 'Flowly, ekiplerin proje ve görevlerini tek bir yerde yönetmesine yardımcı olan basit bir çalışma platformudur.' },
  { question: 'Ücretsiz plan var mı?', answer: 'Evet. Başlangıç planını ücretsiz kullanabilir ve ihtiyaç duyduğunuzda yükseltebilirsiniz.' },
  { question: 'İptal edebilir miyim?', answer: 'Evet. Ücretli planınızı istediğiniz zaman iptal edebilirsiniz.' },
]

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const next: Record<string, string> = {}
    if (!form.name.trim()) next.name = 'Ad alanı zorunludur.'
    if (!form.email.trim()) next.email = 'E-posta alanı zorunludur.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Geçerli bir e-posta girin.'
    if (!form.message.trim()) next.message = 'Mesaj alanı zorunludur.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header className="header">
        <div className="container nav">
          <a className="logo" href="#top" aria-label="Flowly ana sayfa">Flowly</a>
          <nav aria-label="Ana menü">
            <a href="#features">Özellikler</a>
            <a href="#pricing">Fiyatlar</a>
            <a href="#faq">SSS</a>
            <a href="#contact">İletişim</a>
          </nav>
          <button className="theme-toggle" type="button" onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? 'Açık temaya geç' : 'Koyu temaya geç'}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">EKİPLER İÇİN DAHA BASİT</span>
              <h1>İşinizi daha <span>akıllı</span> yönetin.</h1>
              <p>Flowly ile görevlerinizi, projelerinizi ve ekip iletişiminizi tek bir yerde toplayın.</p>
              <div className="hero-actions">
                <Button text="Ücretsiz Başla" onClick={() => setModalOpen(true)} />
                <a className="text-link" href="#features">Nasıl çalışıyor? →</a>
              </div>
              <p className="small-note">Kredi kartı gerekmez · 14 gün deneme</p>
            </div>
            <div className="hero-card" aria-label="Ürün paneli önizlemesi">
              <div className="fake-window">
                <div className="window-top"><span></span><span></span><span></span></div>
                <div className="dashboard">
                  <div className="dash-title">Proje Özeti <span>Bu hafta</span></div>
                  <div className="stats"><div><b>24</b><small>Görev</small></div><div><b>86%</b><small>İlerleme</small></div><div><b>8</b><small>Ekip üyesi</small></div></div>
                  <div className="progress"><span></span></div>
                  <div className="task-row"><i>✓</i> Ana sayfa tasarımı <b>Tamamlandı</b></div>
                  <div className="task-row"><i>✓</i> Mobil görünüm <b>Tamamlandı</b></div>
                  <div className="task-row"><i>•</i> Form doğrulama <b>Devam ediyor</b></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <div className="section-heading"><span className="eyebrow">ÖZELLİKLER</span><h2>İhtiyacınız olan her şey.</h2><p>Ekibinizin günlük işlerini daha kolay hale getiren araçlar.</p></div>
            <div className="card-grid">
              {features.map((feature) => <Card key={feature.title} {...feature} />)}
            </div>
          </div>
        </section>

        <section id="pricing" className="section pricing-section">
          <div className="container">
            <div className="section-heading"><span className="eyebrow">FİYATLAR</span><h2>Size uygun planı seçin.</h2></div>
            <div className="pricing-grid">
              {plans.map((plan) => (
                <article className={plan.featured ? 'price-card featured' : 'price-card'} key={plan.name}>
                  {plan.featured && <span className="popular">EN POPÜLER</span>}
                  <h3>{plan.name}</h3><p>{plan.description}</p><div className="price">{plan.price}<small>/ay</small></div>
                  <ul>{plan.features.map((item) => <li key={item}>✓ {item}</li>)}</ul>
                  <Button text="Planı seç" variant={plan.featured ? 'primary' : 'secondary'} onClick={() => setModalOpen(true)} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container faq-container">
            <div className="section-heading"><span className="eyebrow">SSS</span><h2>Merak ettikleriniz.</h2></div>
            <div>{faqs.map((faq) => <Accordion key={faq.question} question={faq.question} answer={faq.answer} />)}</div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-box">
            <div><span className="eyebrow">İLETİŞİM</span><h2>Bir sorunuz mu var?</h2><p>Formu doldurun, size en kısa sürede dönüş yapalım.</p></div>
            <form onSubmit={submitForm} noValidate>
              <Input label="Ad Soyad" id="name" value={form.name} error={errors.name} onChange={(e) => setForm({...form, name: e.target.value})} />
              <Input label="E-posta" id="email" type="email" value={form.email} error={errors.email} onChange={(e) => setForm({...form, email: e.target.value})} />
              <div className="field"><label htmlFor="message">Mesaj</label><textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} aria-describedby={errors.message ? 'message-error' : undefined}></textarea>{errors.message && <span id="message-error" className="error">{errors.message}</span>}</div>
              <Button text="Mesaj Gönder" type="submit" />
              {submitted && <p className="success" role="status">✓ Mesajınız başarıyla gönderildi.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer><div className="container footer-inner"><strong>Flowly</strong><span>© 2026 Flowly. Tüm hakları saklıdır.</span></div></footer>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Flowly ile başlayın">
        <p>Demo için bu alanı kullanabilirsiniz. Gerçek bir ödeme veya kayıt işlemi yapılmaz.</p>
        <Button text="Tamam" onClick={() => setModalOpen(false)} />
      </Modal>
    </div>
  )
}

export default App