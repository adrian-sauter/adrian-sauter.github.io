// // Initialize medium zoom.
// $(document).ready(function () {
//   medium_zoom = mediumZoom("[data-zoomable]", {
//     background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
//   });
// });

$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee",
    margin: 200, // keeps 200px of space around the zoomed image on all sides
  });
});
