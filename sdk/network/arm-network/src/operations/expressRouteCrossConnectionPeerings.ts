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
import * as Mappers from "../models/expressRouteCrossConnectionPeeringsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a ExpressRouteCrossConnectionPeerings. */
export class ExpressRouteCrossConnectionPeerings {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a ExpressRouteCrossConnectionPeerings.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all peerings in a specified ExpressRouteCrossConnection.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCrossConnectionPeeringsListResponse>
   */
  list(resourceGroupName: string, crossConnectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionPeeringsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param callback The callback
   */
  list(resourceGroupName: string, crossConnectionName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeeringList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, crossConnectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeeringList>): void;
  list(resourceGroupName: string, crossConnectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeeringList>, callback?: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeeringList>): Promise<Models.ExpressRouteCrossConnectionPeeringsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        crossConnectionName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ExpressRouteCrossConnectionPeeringsListResponse>;
  }

  /**
   * Deletes the specified peering from the ExpressRouteCrossConnection.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, crossConnectionName: string, peeringName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,crossConnectionName,peeringName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified peering for the ExpressRouteCrossConnection.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCrossConnectionPeeringsGetResponse>
   */
  get(resourceGroupName: string, crossConnectionName: string, peeringName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionPeeringsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param callback The callback
   */
  get(resourceGroupName: string, crossConnectionName: string, peeringName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeering>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, crossConnectionName: string, peeringName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeering>): void;
  get(resourceGroupName: string, crossConnectionName: string, peeringName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeering>, callback?: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeering>): Promise<Models.ExpressRouteCrossConnectionPeeringsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        crossConnectionName,
        peeringName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ExpressRouteCrossConnectionPeeringsGetResponse>;
  }

  /**
   * Creates or updates a peering in the specified ExpressRouteCrossConnection.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param peeringParameters Parameters supplied to the create or update ExpressRouteCrossConnection
   * peering operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCrossConnectionPeeringsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, crossConnectionName: string, peeringName: string, peeringParameters: Models.ExpressRouteCrossConnectionPeering, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionPeeringsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,crossConnectionName,peeringName,peeringParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExpressRouteCrossConnectionPeeringsCreateOrUpdateResponse>;
  }

  /**
   * Deletes the specified peering from the ExpressRouteCrossConnection.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, crossConnectionName: string, peeringName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        crossConnectionName,
        peeringName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates a peering in the specified ExpressRouteCrossConnection.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param peeringParameters Parameters supplied to the create or update ExpressRouteCrossConnection
   * peering operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, crossConnectionName: string, peeringName: string, peeringParameters: Models.ExpressRouteCrossConnectionPeering, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        crossConnectionName,
        peeringName,
        peeringParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets all peerings in a specified ExpressRouteCrossConnection.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCrossConnectionPeeringsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionPeeringsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeeringList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeeringList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeeringList>, callback?: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionPeeringList>): Promise<Models.ExpressRouteCrossConnectionPeeringsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ExpressRouteCrossConnectionPeeringsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.crossConnectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionPeeringList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.crossConnectionName,
    Parameters.peeringName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionPeering
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.crossConnectionName,
    Parameters.peeringName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.crossConnectionName,
    Parameters.peeringName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "peeringParameters",
    mapper: {
      ...Mappers.ExpressRouteCrossConnectionPeering,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionPeering
    },
    201: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionPeering
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionPeeringList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};