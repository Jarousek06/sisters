# Sister's — web

Statický web pro food truck **Sister's** (Mírové náměstí, Štětí).
Žádný build, žádné závislosti — čisté HTML + CSS + kousek JS. Stačí otevřít nebo nahrát na hosting.

## Struktura

```
sisters/
├── index.html              celá stránka (one-page)
├── assets/
│   ├── css/style.css       veškerý styl
│   ├── js/main.js          mobilní menu, otevřeno/zavřeno, odhalování při scrollu
│   └── img/                hotové obrázky pro web
├── _zdroje/                původní fotky z Facebooku (na hosting není potřeba)
└── README.md
```

## Lokální spuštění

```bash
python -m http.server 5181 --directory sisters
```

Pak otevřít http://localhost:5181

## Fotky

Všechny obrázky v `assets/img/` jsou vyrobené z podkladů v `_zdroje/` (původní fotky
z Facebooku). Originály tam zůstávají pro případ, že by bylo potřeba udělat jiný výřez —
na hosting se nahrávat nemusí.

| Soubor | Kde se použije | Odkud pochází |
|---|---|---|
| `hero.jpg` | velká úvodní fotka | foto trucku, oříznuté pod grafickým textem |
| `logo-cream.png` | logo v heru a v patičce | logo s odstraněným zeleným pozadím |
| `logo-mark.png` + `logo-word.png` | logo v horní liště | bageta a nápis vyříznuté z loga zvlášť |
| `favicon.ico` | ikona v záložce prohlížeče | bageta z loga, 16/32/48/64 px |
| `apple-touch-icon.png`, `favicon-512.png` | ikona na ploše mobilu / PWA | totéž ve velkém |
| `logo-sage.png`, `*-cream.png` | rezervní barevné varianty | zatím se nepoužívají |
| `sestry.jpg` | sekce „Jsme dvě sestry“ | detail bagety — **dočasně**, viz níže |
| `galerie-1.jpg` … `galerie-6.jpg` | mozaika v galerii | výřezy z fotky trucku a z FB koláže |
| `og.jpg` | náhled při sdílení na FB | výřez z hero fotky, 1200 × 630 px |

**Za co stojí vyměnit lepší fotkou:**

- `sestry.jpg` — teď je tam jídlo, patří sem fotka obou sester (na výšku, poměr 4:5).
- `galerie-3/4/5.jpg` — vyřezané z malé FB koláže, jsou proto trochu měkké.
  Jakýkoliv originál z telefonu bude ostřejší.

Nová fotka se nasadí prostým přepsáním souboru se stejným názvem. Před nahráním ji
zmenši na ~1600–2400 px na delší straně, ať se web načítá rychle.

## TODO — doplnit obsah

- [ ] **Menu a ceny** — položky v `index.html` (sekce `<!-- MENU -->`) jsou návrh, ne skutečná
      nabídka. Přepiš je tím, co reálně děláte, včetně cen.
- [ ] **E-mail** — teď je tam `info@sisters-steti.cz`, vyměnit za skutečný.
- [ ] **Facebook** — odkaz v patičce vede zatím na vyhledávání, nahradit přímou adresou stránky.
- [ ] **Doména** — v `<link rel="canonical">` je `sisters-steti.cz`, upravit podle reality.

## Co web umí sám

- **Otevřeno / zavřeno** v horní liště se počítá z reálného času (Po–Pá 5:30–15:00).
  Když se otevírací doba změní, uprav konstanty na začátku `assets/js/main.js`
  a zároveň tabulku v sekci „Kde nás najdete“.
- **Dnešní den** se v tabulce otevírací doby zvýrazní automaticky.
- **Mapa** je vložená z Google Maps, funguje bez API klíče.
- Strukturovaná data (schema.org `FoodEstablishment`) pro Google — adresa, telefon,
  otevírací doba.

## Nasazení

Nejrychlejší cesta: [Netlify Drop](https://app.netlify.com/drop) — přetáhnout celou složku
`sisters/` do okna prohlížeče. Web je hned online, doména se dá připojit později.
