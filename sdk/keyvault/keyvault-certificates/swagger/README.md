# KeyVault Certificates Swagger Configuration

> see https://aka.ms/autorest

```yaml
typescript:
  package-name: "@azure/keyvault-certificates"
disable-async-iterators: true
api-version-parameter: choice
v3: true
use-extension:
  "@autorest/typescript": "6.0.0-dev.20210114.1"
azure-arm: false
generate-metadata: false
add-credentials: false
license-header: MICROSOFT_MIT_NO_VERSION
input-file: https://raw.githubusercontent.com/Azure/azure-rest-api-specs/1e2c9f3ec93078da8078389941531359e274f32a/specification/keyvault/data-plane/Microsoft.KeyVault/stable/7.2/certificates.json
output-folder: ../
source-code-folder-path: ./src/generated
hide-clients: true
```