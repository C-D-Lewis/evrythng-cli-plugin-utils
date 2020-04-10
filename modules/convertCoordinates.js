const { readFileSync, writeFileSync } = require('fs');

module.exports = (actionsFile, outputFile) => {
  const actions = JSON.parse(readFileSync(actionsFile, 'utf8'));
  const coordinates = actions.map(p => ([p.location.latitude, p.location.longitude]));

  writeFileSync(outputFile, coordinates.join('\n'), 'utf8');
  console.log(`Wrote ${coordinates.length} items to ${outputFile}`);
};
