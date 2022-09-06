const { dirname } = require('path')
const { codegen } = require('swagger-axios-codegen')
codegen({
  methodNameMode: 'operationId',
  source: require('./mock-api/swagger.json'),
  fileName: "bff.ts"
})
console.log(`Axios client interface is ready on  ${__dirname}/service/bff.ts`);
console.log(`Pass the .ts file(s) to frontend application team for integration`);