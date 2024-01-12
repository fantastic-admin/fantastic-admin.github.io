export function pureFrontendTag() {
  const textParagragh = document.querySelector('div.VPHero.has-image.VPHomeHero > div > div.main > h1.name')
  const pureTagSpan = document.createElement('sup')
  pureTagSpan.classList.add('pure-tag')
  pureTagSpan.textContent = '纯前端框架'
  textParagragh?.appendChild(pureTagSpan)
}
