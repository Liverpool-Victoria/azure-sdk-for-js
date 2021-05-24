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
import * as Mappers from "../models/bigDataPoolsMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a BigDataPools. */
export class BigDataPools {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a BigDataPools.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Get a Big Data pool.
   * @summary Get Big Data pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param bigDataPoolName Big Data pool name
   * @param [options] The optional parameters
   * @returns Promise<Models.BigDataPoolsGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, bigDataPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.BigDataPoolsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param bigDataPoolName Big Data pool name
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, bigDataPoolName: string, callback: msRest.ServiceCallback<Models.BigDataPoolResourceInfo>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param bigDataPoolName Big Data pool name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, bigDataPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BigDataPoolResourceInfo>): void;
  get(resourceGroupName: string, workspaceName: string, bigDataPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BigDataPoolResourceInfo>, callback?: msRest.ServiceCallback<Models.BigDataPoolResourceInfo>): Promise<Models.BigDataPoolsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        bigDataPoolName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.BigDataPoolsGetResponse>;
  }

  /**
   * Patch a Big Data pool.
   * @summary Update a Big Data pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param bigDataPoolName Big Data pool name
   * @param bigDataPoolPatchInfo The updated Big Data pool properties
   * @param [options] The optional parameters
   * @returns Promise<Models.BigDataPoolsUpdateResponse>
   */
  update(resourceGroupName: string, workspaceName: string, bigDataPoolName: string, bigDataPoolPatchInfo: Models.BigDataPoolPatchInfo, options?: msRest.RequestOptionsBase): Promise<Models.BigDataPoolsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param bigDataPoolName Big Data pool name
   * @param bigDataPoolPatchInfo The updated Big Data pool properties
   * @param callback The callback
   */
  update(resourceGroupName: string, workspaceName: string, bigDataPoolName: string, bigDataPoolPatchInfo: Models.BigDataPoolPatchInfo, callback: msRest.ServiceCallback<Models.BigDataPoolResourceInfo>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param bigDataPoolName Big Data pool name
   * @param bigDataPoolPatchInfo The updated Big Data pool properties
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, workspaceName: string, bigDataPoolName: string, bigDataPoolPatchInfo: Models.BigDataPoolPatchInfo, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BigDataPoolResourceInfo>): void;
  update(resourceGroupName: string, workspaceName: string, bigDataPoolName: string, bigDataPoolPatchInfo: Models.BigDataPoolPatchInfo, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BigDataPoolResourceInfo>, callback?: msRest.ServiceCallback<Models.BigDataPoolResourceInfo>): Promise<Models.BigDataPoolsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        bigDataPoolName,
        bigDataPoolPatchInfo,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.BigDataPoolsUpdateResponse>;
  }

  /**
   * Create a new Big Data pool.
   * @summary Create a Big Data pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param bigDataPoolName Big Data pool name
   * @param bigDataPoolInfo The Big Data pool to create.
   * @param [options] The optional parameters
   * @returns Promise<Models.BigDataPoolsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, bigDataPoolName: string, bigDataPoolInfo: Models.BigDataPoolResourceInfo, options?: Models.BigDataPoolsCreateOrUpdateOptionalParams): Promise<Models.BigDataPoolsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,workspaceName,bigDataPoolName,bigDataPoolInfo,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.BigDataPoolsCreateOrUpdateResponse>;
  }

  /**
   * Delete a Big Data pool from the workspace.
   * @summary Delete a Big Data pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param bigDataPoolName Big Data pool name
   * @param [options] The optional parameters
   * @returns Promise<Models.BigDataPoolsDeleteMethodResponse>
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, bigDataPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.BigDataPoolsDeleteMethodResponse> {
    return this.beginDeleteMethod(resourceGroupName,workspaceName,bigDataPoolName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.BigDataPoolsDeleteMethodResponse>;
  }

  /**
   * List Big Data pools in a workspace.
   * @summary List the Big Data pools in a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param [options] The optional parameters
   * @returns Promise<Models.BigDataPoolsListByWorkspaceResponse>
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.BigDataPoolsListByWorkspaceResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.BigDataPoolResourceInfoListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BigDataPoolResourceInfoListResult>): void;
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BigDataPoolResourceInfoListResult>, callback?: msRest.ServiceCallback<Models.BigDataPoolResourceInfoListResult>): Promise<Models.BigDataPoolsListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listByWorkspaceOperationSpec,
      callback) as Promise<Models.BigDataPoolsListByWorkspaceResponse>;
  }

  /**
   * Create a new Big Data pool.
   * @summary Create a Big Data pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param bigDataPoolName Big Data pool name
   * @param bigDataPoolInfo The Big Data pool to create.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, workspaceName: string, bigDataPoolName: string, bigDataPoolInfo: Models.BigDataPoolResourceInfo, options?: Models.BigDataPoolsBeginCreateOrUpdateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        bigDataPoolName,
        bigDataPoolInfo,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Delete a Big Data pool from the workspace.
   * @summary Delete a Big Data pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param bigDataPoolName Big Data pool name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, workspaceName: string, bigDataPoolName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        bigDataPoolName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * List Big Data pools in a workspace.
   * @summary List the Big Data pools in a workspace.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BigDataPoolsListByWorkspaceNextResponse>
   */
  listByWorkspaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BigDataPoolsListByWorkspaceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BigDataPoolResourceInfoListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BigDataPoolResourceInfoListResult>): void;
  listByWorkspaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BigDataPoolResourceInfoListResult>, callback?: msRest.ServiceCallback<Models.BigDataPoolResourceInfoListResult>): Promise<Models.BigDataPoolsListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByWorkspaceNextOperationSpec,
      callback) as Promise<Models.BigDataPoolsListByWorkspaceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/bigDataPools/{bigDataPoolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.bigDataPoolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BigDataPoolResourceInfo
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/bigDataPools/{bigDataPoolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.bigDataPoolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "bigDataPoolPatchInfo",
    mapper: {
      ...Mappers.BigDataPoolPatchInfo,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BigDataPoolResourceInfo
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByWorkspaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/bigDataPools",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BigDataPoolResourceInfoListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/bigDataPools/{bigDataPoolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.bigDataPoolName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.force
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "bigDataPoolInfo",
    mapper: {
      ...Mappers.BigDataPoolResourceInfo,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BigDataPoolResourceInfo
    },
    202: {
      bodyMapper: Mappers.BigDataPoolResourceInfo
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/bigDataPools/{bigDataPoolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.bigDataPoolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    202: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByWorkspaceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
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
      bodyMapper: Mappers.BigDataPoolResourceInfoListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};