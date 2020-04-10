const { readFileSync, writeFileSync } = require('fs');
const convertCoordinates = require('./modules/convertCoordinates');
const deleteProjectThngs = require('./modules/deleteProjectThngs');
const deleteThngActions = require('./modules/deleteThngActions');

module.exports = (api) => {
  const command = {
    about: 'Set of utilities for common tasks.',
    firstArg: 'utils',
    operations: {
      'convert-coordinates': {
        execute: async ([, actionsFile, outputFile]) => convertCoordinates(actionsFile, outputFile),
        pattern: 'convert-coordinates $actionsFile $outputFile',
      },
      'delete-thng-actions': {
        execute: async ([, thngId]) => deleteThngActions(api, thngId),
        pattern: 'delete-thng-actions $thngId',
      },
      'delete-project-thngs': {
        execute: async ([, projectId]) => deleteProjectThngs(api, projectId),
        pattern: 'delete-project-thngs $projectId',
      },
    },
  };

  api.registerCommand(command);
};
