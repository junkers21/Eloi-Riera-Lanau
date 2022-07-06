export function getTimelineList(lang) {
  return fetch('api/' + lang + '/timeline.json')
    .then(data => data.json())
}