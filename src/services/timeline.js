export function getTimelineList(lang) {

  let lng = lang;
  if (lang.includes("es") && lang !== "es-ES") {
    lng = "es-ES"
  }
  if (lang.includes("fr") && lang !== "fr-FR") {
    lng = "fr-FR"
  }
  if (lang.includes("en") && lang !== "en") {
    lng = "en"
  }

  return fetch('api/' + lng + '/timeline.json')
    .then(data => data.json())
}