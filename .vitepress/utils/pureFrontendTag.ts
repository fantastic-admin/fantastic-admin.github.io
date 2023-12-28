export function pureFrontendTag() {
  const textParagragh = document.querySelector('div.VPHero.has-image.VPHomeHero > div > div.main > h1.name')
  const pureTagSpan = document.createElement('sup')
  pureTagSpan.classList.add('pure-tag')
  pureTagSpan.innerText = '纯前端'
  textParagragh?.appendChild(pureTagSpan)
}
