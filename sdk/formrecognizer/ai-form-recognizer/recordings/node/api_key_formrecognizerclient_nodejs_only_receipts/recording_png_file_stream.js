let nock = require('nock');

module.exports.hash = "b9a20d6d323f90719f60c4144a9715e7";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/v2.1/prebuilt/receipt/analyzeResults/4cbea208-66d9-417c-8096-c52ae96eac9d',
  'x-envoy-upstream-service-time',
  '496',
  'apim-request-id',
  '4cbea208-66d9-417c-8096-c52ae96eac9d',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Wed, 12 May 2021 01:27:48 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1/prebuilt/receipt/analyzeResults/4cbea208-66d9-417c-8096-c52ae96eac9d')
  .reply(200, {"status":"running","createdDateTime":"2021-05-12T01:27:48Z","lastUpdatedDateTime":"2021-05-12T01:27:48Z"}, [
  'Content-Length',
  '106',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '10',
  'apim-request-id',
  'cb7f736c-db0d-4009-aeab-503917567251',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Wed, 12 May 2021 01:27:48 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1/prebuilt/receipt/analyzeResults/4cbea208-66d9-417c-8096-c52ae96eac9d')
  .reply(200, {"status":"running","createdDateTime":"2021-05-12T01:27:48Z","lastUpdatedDateTime":"2021-05-12T01:27:48Z"}, [
  'Content-Length',
  '106',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '10',
  'apim-request-id',
  '1477514e-05fe-4b01-a36f-a1ca8f56c71f',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Wed, 12 May 2021 01:27:48 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1/prebuilt/receipt/analyzeResults/4cbea208-66d9-417c-8096-c52ae96eac9d')
  .reply(200, {"status":"succeeded","createdDateTime":"2021-05-12T01:27:48Z","lastUpdatedDateTime":"2021-05-12T01:27:51Z","analyzeResult":{"version":"2.1.0","readResults":[{"page":1,"angle":-0.0752,"width":1688,"height":3000,"unit":"pixel"}],"documentResults":[{"docType":"prebuilt:receipt","pageRange":[1,1],"fields":{"Items":{"type":"array","valueArray":[{"type":"object","valueObject":{"Name":{"type":"string","valueString":"Surface Pro 6","text":"Surface Pro 6","boundingBox":[364,1559,675,1561.7,674.5,1625.7,363.5,1623],"page":1,"confidence":0.914},"Quantity":{"type":"number","valueNumber":1,"text":"1","boundingBox":[327,1558,352,1559,351,1623,327,1623],"page":1,"confidence":0.971},"TotalPrice":{"type":"number","valueNumber":999,"text":"999.00","boundingBox":[974,1792,1135,1796,1133,1859,973,1855],"page":1,"confidence":0.983}}},{"type":"object","valueObject":{"Name":{"type":"string","valueString":"SurfacePen","text":"SurfacePen","boundingBox":[349,2017,624,2013,624,2079,350,2084],"page":1,"confidence":0.718},"Quantity":{"type":"number","valueNumber":1,"text":"1","boundingBox":[315,2018,336,2018,337,2084,316,2085],"page":1,"confidence":0.976},"TotalPrice":{"type":"number","valueNumber":99.99,"text":"$ 99.99","boundingBox":[963,2025,1128,2025,1128,2092,963,2092],"page":1,"confidence":0.967}}}]},"MerchantAddress":{"type":"string","valueString":"123 Main Street Redmond, WA 98052","text":"123 Main Street Redmond, WA 98052","boundingBox":[311.4,688,751.3,689,750.8,859.6,311,858.5],"page":1,"confidence":0.975},"MerchantName":{"type":"string","valueString":"Contoso","text":"Contoso","boundingBox":[324,590,501,601,498,654,320,645],"page":1,"confidence":0.974},"MerchantPhoneNumber":{"type":"phoneNumber","text":"123-456-7890","boundingBox":[303,1003,621,1009,619,1071,303,1064],"page":1,"confidence":0.988},"ReceiptType":{"type":"string","valueString":"Itemized","confidence":0.99},"Subtotal":{"type":"number","valueNumber":1098.99,"text":"1098.99","boundingBox":[963,2255,1137,2251,1138,2325,965,2329],"page":1,"confidence":0.982},"Tax":{"type":"number","valueNumber":104.4,"text":"$ 104.40","boundingBox":[939.7,2370.4,1130,2366.7,1131.3,2435.3,941,2439],"page":1,"confidence":0.985},"Total":{"type":"number","valueNumber":1203.39,"text":"$ 1203.39","boundingBox":[914.1,2589.8,1123,2612,1116,2677.4,907.2,2655.1],"page":1,"confidence":0.957},"TransactionDate":{"type":"date","valueDate":"2019-06-10","text":"6/10/2019","boundingBox":[299,1221,497,1222,496,1292,299,1292],"page":1,"confidence":0.987},"TransactionTime":{"type":"time","valueTime":"13:59:00","text":"13:59","boundingBox":[511,1223,628,1224,625,1292,509,1292],"page":1,"confidence":0.985}}}]}}, [
  'Content-Length',
  '2664',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '17',
  'apim-request-id',
  'c4f84e4d-bc3f-4a5f-9ec4-93f998271ead',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Wed, 12 May 2021 01:27:53 GMT'
]);