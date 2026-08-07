&#x20;Flowly Product Landing



Flowly, ekiplerin görevlerini ve projelerini daha kolay takip edebilmesi için hazırlanmış tek sayfalık bir ürün tanıtım uygulamasıdır.



Bu proje frontend staj challenge kapsamında geliştirilmiştir.



\## Live Demo



https://flowly-landing-challenge.vercel.app



\## Kullanılan Teknolojiler



\- React

\- TypeScript

\- Vite

\- SCSS

\- Vitest

\- ESLint

\- GitHub Actions

\- Vercel



Harici bir UI kütüphanesi kullanılmamıştır.



\## Özellikler



\- Responsive landing page

\- Hero alanı

\- Özellik kartları

\- Fiyatlandırma kartları

\- SSS Accordion

\- İletişim formu

\- Basit form doğrulama

\- Light / Dark tema

\- Modal

\- Klavye ile temel kullanım

\- Temel aria-\* özellikleri



\## UI Bileşenleri



Projede tekrar kullanılabilir beş temel UI bileşeni bulunmaktadır:



\- Button

\- Input

\- Card

\- Modal

\- Accordion



Bileşenler props kullanılarak yapılandırılabilir şekilde hazırlanmıştır.



\## Responsive Tasarım



Uygulama mobil öncelikli olarak hazırlanmıştır.



Kullanılan temel breakpointler:



\- 320px - 640px

\- 641px - 1024px

\- 1025px ve üzeri



Layout için CSS Grid ve Flexbox kullanılmıştır.



\## Kurulum



Projeyi bilgisayarınıza aldıktan sonra:



npm install



Geliştirme ortamını başlatmak için:



npm run dev



Production build oluşturmak için:



npm run build



Lint kontrolü:



npm run lint



Testleri çalıştırmak için:



npm run test



\## Proje Yapısı



src/

&#x20; components/

&#x20;   Accordion/

&#x20;   Button/

&#x20;   Card/

&#x20;   Input/

&#x20;   Modal/

&#x20; tests/

&#x20; styles/

&#x20; App.tsx

&#x20; main.tsx



docs/

&#x20; adr-001-technology.md



.github/

&#x20; workflows/

&#x20;   ci.yml



\## Mimari Notlar



Proje küçük ölçekli olduğu için ek bir state management kütüphanesi kullanılmadı.



React'in useState yapısı tema, modal, accordion ve form işlemleri için yeterli oldu.



Tekrar kullanılabilir arayüz parçaları components klasörü altında ayrı bileşenler halinde tutuldu.



Stil tarafında SCSS ve CSS custom properties kullanıldı. Light ve dark tema renkleri CSS değişkenleri üzerinden yönetilmektedir.



\## Erişilebilirlik



Projede temel erişilebilirlik kurallarına dikkat edildi.



\- Semantic HTML elementleri kullanıldı.

\- Form alanlarında label ve htmlFor ilişkisi kuruldu.

\- Modal için role="dialog" ve aria-modal kullanıldı.

\- Accordion için aria-expanded ve aria-controls kullanıldı.

\- Form hata mesajlarında aria-describedby kullanıldı.

\- Modal Escape tuşu ile kapatılabilir.



\## Form Doğrulama



İletişim formunda:



\- Boş ad kontrolü

\- Boş e-posta kontrolü

\- Basit e-posta format kontrolü

\- Boş mesaj kontrolü



bulunmaktadır.



Form gerçek bir backend servisine veri göndermez. Başarılı işlem yalnızca demo amaçlı gösterilir.



\## CI



GitHub Actions üzerinden aşağıdaki kontroller otomatik olarak çalıştırılmaktadır:



\- Lint

\- Test

\- Production Build



CI hem push hem de pull request işlemlerinde çalışmaktadır.



\## Git Workflow



Projede kullanılan branch yapısı:



\- main: production branch

\- dev: development branch

\- feat/\*: yeni özellikler

\- fix/\*: hata düzeltmeleri



Commit mesajlarında Conventional Commits formatı kullanılmaktadır.



Örnek:



feat: add CI workflow and basic tests



fix: update CI dependency install



\## Deployment



Production deployment Vercel üzerinde yapılmaktadır.



Main branch'e gelen değişiklikler Vercel üzerinden production ortamına deploy edilebilir.



\## Karar Kaydı



Teknoloji seçimiyle ilgili kısa karar kaydı:



docs/adr-001-technology.md



React + TypeScript tercih edilmesinin temel nedeni component ve props yapısını açık ve basit şekilde gösterebilmekti.



\## Lighthouse



Lighthouse raporu Chrome DevTools kullanılarak alınmıştır.



Rapor ekran görüntüsü proje dokümantasyonuna eklenmiştir.



