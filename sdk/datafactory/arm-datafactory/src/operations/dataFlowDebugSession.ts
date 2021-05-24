/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/dataFlowDebugSessionMappers";
import * as Parameters from "../models/parameters";
import { DataFactoryManagementClientContext } from "../dataFactoryManagementClientContext";

/** Class representing a DataFlowDebugSession. */
export class DataFlowDebugSession {
  private readonly client: DataFactoryManagementClientContext;

  /**
   * Create a DataFlowDebugSession.
   * @param {DataFactoryManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataFactoryManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates a data flow debug session.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug session definition
   * @param [options] The optional parameters
   * @returns Promise<Models.DataFlowDebugSessionCreateResponse>
   */
  create(resourceGroupName: string, factoryName: string, request: Models.CreateDataFlowDebugSessionRequest, options?: msRest.RequestOptionsBase): Promise<Models.DataFlowDebugSessionCreateResponse> {
    return this.beginCreate(resourceGroupName,factoryName,request,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DataFlowDebugSessionCreateResponse>;
  }

  /**
   * Query all active data flow debug sessions.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataFlowDebugSessionQueryByFactoryResponse>
   */
  queryByFactory(resourceGroupName: string, factoryName: string, options?: msRest.RequestOptionsBase): Promise<Models.DataFlowDebugSessionQueryByFactoryResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param callback The callback
   */
  queryByFactory(resourceGroupName: string, factoryName: string, callback: msRest.ServiceCallback<Models.QueryDataFlowDebugSessionsResponse>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The optional parameters
   * @param callback The callback
   */
  queryByFactory(resourceGroupName: string, factoryName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.QueryDataFlowDebugSessionsResponse>): void;
  queryByFactory(resourceGroupName: string, factoryName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.QueryDataFlowDebugSessionsResponse>, callback?: msRest.ServiceCallback<Models.QueryDataFlowDebugSessionsResponse>): Promise<Models.DataFlowDebugSessionQueryByFactoryResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        options
      },
      queryByFactoryOperationSpec,
      callback) as Promise<Models.DataFlowDebugSessionQueryByFactoryResponse>;
  }

  /**
   * Add a data flow into debug session.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug session definition with debug content.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataFlowDebugSessionAddDataFlowResponse>
   */
  addDataFlow(resourceGroupName: string, factoryName: string, request: Models.DataFlowDebugPackage, options?: msRest.RequestOptionsBase): Promise<Models.DataFlowDebugSessionAddDataFlowResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug session definition with debug content.
   * @param callback The callback
   */
  addDataFlow(resourceGroupName: string, factoryName: string, request: Models.DataFlowDebugPackage, callback: msRest.ServiceCallback<Models.AddDataFlowToDebugSessionResponse>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug session definition with debug content.
   * @param options The optional parameters
   * @param callback The callback
   */
  addDataFlow(resourceGroupName: string, factoryName: string, request: Models.DataFlowDebugPackage, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AddDataFlowToDebugSessionResponse>): void;
  addDataFlow(resourceGroupName: string, factoryName: string, request: Models.DataFlowDebugPackage, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AddDataFlowToDebugSessionResponse>, callback?: msRest.ServiceCallback<Models.AddDataFlowToDebugSessionResponse>): Promise<Models.DataFlowDebugSessionAddDataFlowResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        request,
        options
      },
      addDataFlowOperationSpec,
      callback) as Promise<Models.DataFlowDebugSessionAddDataFlowResponse>;
  }

  /**
   * Deletes a data flow debug session.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug session definition for deletion
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, factoryName: string, request: Models.DeleteDataFlowDebugSessionRequest, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug session definition for deletion
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, factoryName: string, request: Models.DeleteDataFlowDebugSessionRequest, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug session definition for deletion
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, factoryName: string, request: Models.DeleteDataFlowDebugSessionRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, factoryName: string, request: Models.DeleteDataFlowDebugSessionRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        request,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Execute a data flow debug command.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug command definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataFlowDebugSessionExecuteCommandResponse>
   */
  executeCommand(resourceGroupName: string, factoryName: string, request: Models.DataFlowDebugCommandRequest, options?: msRest.RequestOptionsBase): Promise<Models.DataFlowDebugSessionExecuteCommandResponse> {
    return this.beginExecuteCommand(resourceGroupName,factoryName,request,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DataFlowDebugSessionExecuteCommandResponse>;
  }

  /**
   * Creates a data flow debug session.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug session definition
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, factoryName: string, request: Models.CreateDataFlowDebugSessionRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        factoryName,
        request,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Execute a data flow debug command.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug command definition.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginExecuteCommand(resourceGroupName: string, factoryName: string, request: Models.DataFlowDebugCommandRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        factoryName,
        request,
        options
      },
      beginExecuteCommandOperationSpec,
      options);
  }

  /**
   * Query all active data flow debug sessions.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataFlowDebugSessionQueryByFactoryNextResponse>
   */
  queryByFactoryNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DataFlowDebugSessionQueryByFactoryNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  queryByFactoryNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.QueryDataFlowDebugSessionsResponse>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  queryByFactoryNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.QueryDataFlowDebugSessionsResponse>): void;
  queryByFactoryNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.QueryDataFlowDebugSessionsResponse>, callback?: msRest.ServiceCallback<Models.QueryDataFlowDebugSessionsResponse>): Promise<Models.DataFlowDebugSessionQueryByFactoryNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      queryByFactoryNextOperationSpec,
      callback) as Promise<Models.DataFlowDebugSessionQueryByFactoryNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const queryByFactoryOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/queryDataFlowDebugSessions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.QueryDataFlowDebugSessionsResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const addDataFlowOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/addDataFlowToDebugSession",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "request",
    mapper: {
      ...Mappers.DataFlowDebugPackage,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AddDataFlowToDebugSessionResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/deleteDataFlowDebugSession",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "request",
    mapper: {
      ...Mappers.DeleteDataFlowDebugSessionRequest,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/createDataFlowDebugSession",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "request",
    mapper: {
      ...Mappers.CreateDataFlowDebugSessionRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CreateDataFlowDebugSessionResponse,
      headersMapper: Mappers.DataFlowDebugSessionCreateHeaders
    },
    202: {
      headersMapper: Mappers.DataFlowDebugSessionCreateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.DataFlowDebugSessionCreateHeaders
    }
  },
  serializer
};

const beginExecuteCommandOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/executeDataFlowDebugCommand",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "request",
    mapper: {
      ...Mappers.DataFlowDebugCommandRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DataFlowDebugCommandResponse,
      headersMapper: Mappers.DataFlowDebugSessionExecuteCommandHeaders
    },
    202: {
      headersMapper: Mappers.DataFlowDebugSessionExecuteCommandHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.DataFlowDebugSessionExecuteCommandHeaders
    }
  },
  serializer
};

const queryByFactoryNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.QueryDataFlowDebugSessionsResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};