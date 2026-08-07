# Flowly Product Landing

Staj challenge kapsamında hazırlanmış tek sayfalık ürün tanıtım uygulaması.

## Teknolojiler

- React
- TypeScript
- Vite
- SCSS
- Vanilla React state / event handling

Harici UI kütüphanesi kullanılmamıştır.

## Kurulum

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Özellikler

- Responsive landing page
- Hero, özellikler, fiyat kartları, SSS ve iletişim formu
- Light / Dark tema
- Accordion
- Modal
- Basit form doğrulama
- Semantic HTML
- Temel ARIA kullanımı
- Yeniden kullanılabilir Button, Input, Card, Modal ve Accordion componentleri

## Mimari not

Sayfa bölümleri `App.tsx` içinde tutulurken tekrar kullanılabilir UI parçaları `src/components` altında ayrı dosyalarda bulunmaktadır. SCSS tek bir ana stylesheet üzerinden yönetilmiştir. Küçük proje olduğu için gereksiz state management kütüphanesi kullanılmamıştır.

## Karar

React + TypeScript seçilmesinin nedeni component yapısını ve props kullanımını açık şekilde göstermekti.

## Geliştirme

Bu proje 4 günlük challenge süresine uygun olacak şekilde sade tutulmuştur. Gerçek bir backend veya ödeme sistemi bulunmamaktadır.
