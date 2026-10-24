// Keep the original URL-based Vega-Embed path so chart loading does not depend
// on browser support for cloning, container autosizing, or rewritten specs.
const charts = [
  ["priority_chart", "priority_chart.vg.json"],
  ["priority_waffle", "priority_waffle.vg.json"],
  ["funding_chart", "funding_chart.vg.json"],
  ["funding_mosaic", "funding_mosaic.vg.json"],
  ["priority_funding_map", "priority_funding_map.vg.json"],
  ["project_count_symbol_map", "project_count_symbol_map.vg.json"],
  ["funding_flow_map", "funding_flow_map.vg.json"],
  ["funding_listing_dumbbell", "funding_listing_dumbbell.vg.json"],
  ["plant_share_tile_map", "plant_share_tile_map.vg.json"],
  ["state_group_heatmap", "state_group_heatmap.vg.json"],
  ["tsx_trend_chart", "tsx_trend_chart.vg.json"],
  ["tsx_group_slope", "tsx_group_slope.vg.json"],
  ["tsx_group_trends", "tsx_group_trends.vg.json"],
  ["outcome_alluvial", "outcome_alluvial.vg.json"],
  ["wombat_population_chart", "wombat_population_chart.vg.json"]
];
if (typeof vegaEmbed !== "function") {
  for (const [id] of charts) {
    document.getElementById(id).textContent = "Chart library could not load. Check your internet connection, then refresh the page.";
  }
  console.error("Vega-Embed did not load from the CDN.");
} else {
  for (const [id, file] of charts) {
    vegaEmbed(`#${id}`, file, {actions: true}).catch(error => {
      console.error(`Failed to render ${id}:`, error);
      document.getElementById(id).textContent = "Chart could not load. Open the page through a local server and check the browser console.";
    });
  }
}
