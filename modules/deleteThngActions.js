const { readFileSync, writeFileSync } = require('fs');

module.exports = async (api, thngId) => {
  const operator = await api.getOperatorScope();
  await operator
    .thng(thngId)
    .action('all')
    .setPerPage(5)
    .streamPages((page) => {
      const promises = page.map(async ({ id, type }) => {
        await operator.action(type, id).delete();
        console.log(`Deleted ${type} ${id}`);
      });
      return Promise.all(promises);
    });
};
