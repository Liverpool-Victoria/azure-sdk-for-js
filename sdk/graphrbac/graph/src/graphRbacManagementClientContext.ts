/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";

const packageName = "@azure/graph";
const packageVersion = "5.0.2";

export class GraphRbacManagementClientContext extends msRestAzure.AzureServiceClient {
  credentials: msRest.ServiceClientCredentials;
  apiVersion?: string;
  tenantID: string;

  /**
   * Initializes a new instance of the GraphRbacManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param tenantID The tenant ID.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, tenantID: string, options?: Models.GraphRbacManagementClientOptions) {
    if (credentials == undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }
    if (tenantID == undefined) {
      throw new Error('\'tenantID\' cannot be null.');
    }

    if (!options) {
      options = {};
    }
    if(!options.userAgent) {
      const defaultUserAgent = msRestAzure.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.apiVersion = '1.6';
    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;

    // This is a manual patch to mitigate a bug in autorest.typescript
    // https://github.com/Azure/autorest.typescript/issues/545
    //
    // If you are regenerating this package, and you have seen a diff that removes
    // this comment or changes the following line. Please check to see if the bug
    // above has been fixed. If not, please keep this change.
    this.baseUri = options.baseUri || "https://graph.windows.net";
    this.requestContentType = "application/json; charset=utf-8";
    this.credentials = credentials;
    this.tenantID = tenantID;

    if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
  }
}