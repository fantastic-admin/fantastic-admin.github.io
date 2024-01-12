export function fetchReleaseTag() {
  return fetch('https://api.github.com/repos/fantastic-admin/basic/releases/latest')
    .then(res => res.json())
    .then(json => json.tag_name ?? '')
    .then((releaseTag) => {
      if (!releaseTag)
        return
      const tagLineParagragh = document.querySelector('div.VPHero.has-image.VPHomeHero > div > div.main > p.tagline')
      const docsReleaseTagSpan = document.createElement('samp')
      docsReleaseTagSpan.classList.add('github-release-tag')
      docsReleaseTagSpan.textContent = releaseTag
      tagLineParagragh?.appendChild(docsReleaseTagSpan)
    })
}
