let nock = require('nock');

module.exports.hash = "a76192f8cc28a6cfa0b708eda3e6595d";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fdev.azuresynapse.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [ 'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '97fd9ab5-5452-404d-a5e4-e30b8bcc7100',
  'x-ms-ests-server',
  '2.1.11562.10 - EUS ProdSlices',
  'Set-Cookie',
  'fpc=AvzULwO9SbVOqJjwdF4-3lHKOuyWBwAAAKt3_dcOAAAA; expires=Wed, 05-May-2021 21:27:43 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Mon, 05 Apr 2021 21:27:42 GMT',
  'Content-Length',
  '1322' ]);

nock('https://testaccount.dev.azuresynapse.net', {"encodedQueryParams":true})
  .get('/integrationRuntimes/AutoResolveIntegrationRuntime')
  .query(true)
  .reply(200, {"id":"/subscriptions/faa080af-c1d8-40ad-9cce-e1a450ca5b57/resourceGroups/xiangyan/providers/Microsoft.Synapse/workspaces/xysynapsetest/integrationruntimes/AutoResolveIntegrationRuntime","name":"AutoResolveIntegrationRuntime","type":"Microsoft.Synapse/workspaces/integrationruntimes","properties":{"type":"Managed","typeProperties":{"computeProperties":{"location":"AutoResolve"}},"provisioningState":null},"etag":"3801cded-0000-0800-0000-5fa34e1b0000"}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '453',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0 Microsoft-HTTPAPI/2.0',
  'Strict-Transport-Security',
  'max-age=15724800; includeSubDomains',
  'x-ms-correlation-request-id',
  'ae26350b-f89f-4269-80bc-f4b9b6ae3e0f',
  'X-Content-Type-Options',
  'nosniff',
  'X-Powered-By',
  'ASP.NET',
  'x-ms-request-id',
  '10b6e6f4-8215-44f0-9845-a44077ebb55a',
  'Date',
  'Mon, 05 Apr 2021 21:27:43 GMT',
  'Connection',
  'close' ]);