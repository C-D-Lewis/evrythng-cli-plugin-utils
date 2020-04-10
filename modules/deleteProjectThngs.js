const { readFileSync, writeFileSync } = require('fs');

module.exports = async (api, projectId) => {
  const operator = await api.getOperatorScope();
  await operator
    .thng()
    .setProject(projectId)
    .setPerPage(5)
    .streamPages((page) => {
      const promises = page.map(async ({ id }) => {
        await operator.thng(id).delete();
        console.log(`Deleted thng ${id}`);
      });
      return Promise.all(promises);
    });
};
