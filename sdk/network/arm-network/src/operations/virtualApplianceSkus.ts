/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/virtualApplianceSkusMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a VirtualApplianceSkus. */
export class VirtualApplianceSkus {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a VirtualApplianceSkus.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * List all SKUs available for a virtual appliance.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualApplianceSkusListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.VirtualApplianceSkusListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.NetworkVirtualApplianceSkuListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkVirtualApplianceSkuListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkVirtualApplianceSkuListResult>, callback?: msRest.ServiceCallback<Models.NetworkVirtualApplianceSkuListResult>): Promise<Models.VirtualApplianceSkusListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VirtualApplianceSkusListResponse>;
  }

  /**
   * Retrieves a single available sku for network virtual appliance.
   * @param skuName Name of the Sku.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualApplianceSkusGetResponse>
   */
  get(skuName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualApplianceSkusGetResponse>;
  /**
   * @param skuName Name of the Sku.
   * @param callback The callback
   */
  get(skuName: string, callback: msRest.ServiceCallback<Models.NetworkVirtualApplianceSku>): void;
  /**
   * @param skuName Name of the Sku.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(skuName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkVirtualApplianceSku>): void;
  get(skuName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkVirtualApplianceSku>, callback?: msRest.ServiceCallback<Models.NetworkVirtualApplianceSku>): Promise<Models.VirtualApplianceSkusGetResponse> {
    return this.client.sendOperationRequest(
      {
        skuName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualApplianceSkusGetResponse>;
  }

  /**
   * List all SKUs available for a virtual appliance.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualApplianceSkusListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualApplianceSkusListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkVirtualApplianceSkuListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkVirtualApplianceSkuListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkVirtualApplianceSkuListResult>, callback?: msRest.ServiceCallback<Models.NetworkVirtualApplianceSkuListResult>): Promise<Models.VirtualApplianceSkusListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.VirtualApplianceSkusListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/networkVirtualApplianceSkus",
  urlParameters: [
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
      bodyMapper: Mappers.NetworkVirtualApplianceSkuListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/networkVirtualApplianceSkus/{skuName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.skuName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetworkVirtualApplianceSku
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
      bodyMapper: Mappers.NetworkVirtualApplianceSkuListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};