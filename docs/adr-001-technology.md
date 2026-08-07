# ADR-001: Teknoloji seçimi

## Durum
Kabul edildi.

## Karar
Proje için React + TypeScript + Vite + SCSS kullanılmasına karar verildi.

## Neden?
Challenge component yapısı, props ve yeniden kullanılabilir UI parçalarını özellikle istediği için React bu gereksinimleri basit şekilde karşılıyor. TypeScript ise component propslarının daha kontrollü olmasını sağlıyor.

## Alternatif
Vanilla TypeScript de kullanılabilirdi ancak beş ayrı UI componentinin yönetimi React ile daha anlaşılır hale geliyor.
