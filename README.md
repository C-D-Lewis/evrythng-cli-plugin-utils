# evrythng-cli-plugin-util

Plugin for [`evrythng-cli`](https://github.com/evrythng/evrythng-cli) that adds
useful functions for working with and testing EVRYTHNG resources.


## Commands

Convert a JSON file of actions to a conventional coordinates list.
```
utils convert-coordinates $actionsFile $outputFile
```

Delete all actions on a given Thng.
```
utils delete-thng-actions $thngId
```

Delete all Thngs in a given project.
```
utils delete-project-thngs $projectId
```
