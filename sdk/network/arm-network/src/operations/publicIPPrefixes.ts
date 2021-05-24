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
import * as Mappers from "../models/publicIPPrefixesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a PublicIPPrefixes. */
export class PublicIPPrefixes {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a PublicIPPrefixes.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified public IP prefix.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the PublicIpPrefix.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, publicIpPrefixName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,publicIpPrefixName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified public IP prefix in a specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the public IP prefix.
   * @param [options] The optional parameters
   * @returns Promise<Models.PublicIPPrefixesGetResponse>
   */
  get(resourceGroupName: string, publicIpPrefixName: string, options?: Models.PublicIPPrefixesGetOptionalParams): Promise<Models.PublicIPPrefixesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the public IP prefix.
   * @param callback The callback
   */
  get(resourceGroupName: string, publicIpPrefixName: string, callback: msRest.ServiceCallback<Models.PublicIPPrefix>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the public IP prefix.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, publicIpPrefixName: string, options: Models.PublicIPPrefixesGetOptionalParams, callback: msRest.ServiceCallback<Models.PublicIPPrefix>): void;
  get(resourceGroupName: string, publicIpPrefixName: string, options?: Models.PublicIPPrefixesGetOptionalParams | msRest.ServiceCallback<Models.PublicIPPrefix>, callback?: msRest.ServiceCallback<Models.PublicIPPrefix>): Promise<Models.PublicIPPrefixesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        publicIpPrefixName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PublicIPPrefixesGetResponse>;
  }

  /**
   * Creates or updates a static or dynamic public IP prefix.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the public IP prefix.
   * @param parameters Parameters supplied to the create or update public IP prefix operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PublicIPPrefixesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, publicIpPrefixName: string, parameters: Models.PublicIPPrefix, options?: msRest.RequestOptionsBase): Promise<Models.PublicIPPrefixesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,publicIpPrefixName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PublicIPPrefixesCreateOrUpdateResponse>;
  }

  /**
   * Updates public IP prefix tags.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the public IP prefix.
   * @param parameters Parameters supplied to update public IP prefix tags.
   * @param [options] The optional parameters
   * @returns Promise<Models.PublicIPPrefixesUpdateTagsResponse>
   */
  updateTags(resourceGroupName: string, publicIpPrefixName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<Models.PublicIPPrefixesUpdateTagsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the public IP prefix.
   * @param parameters Parameters supplied to update public IP prefix tags.
   * @param callback The callback
   */
  updateTags(resourceGroupName: string, publicIpPrefixName: string, parameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.PublicIPPrefix>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the public IP prefix.
   * @param parameters Parameters supplied to update public IP prefix tags.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateTags(resourceGroupName: string, publicIpPrefixName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPPrefix>): void;
  updateTags(resourceGroupName: string, publicIpPrefixName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PublicIPPrefix>, callback?: msRest.ServiceCallback<Models.PublicIPPrefix>): Promise<Models.PublicIPPrefixesUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        publicIpPrefixName,
        parameters,
        options
      },
      updateTagsOperationSpec,
      callback) as Promise<Models.PublicIPPrefixesUpdateTagsResponse>;
  }

  /**
   * Gets all the public IP prefixes in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.PublicIPPrefixesListAllResponse>
   */
  listAll(options?: msRest.RequestOptionsBase): Promise<Models.PublicIPPrefixesListAllResponse>;
  /**
   * @param callback The callback
   */
  listAll(callback: msRest.ServiceCallback<Models.PublicIPPrefixListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPPrefixListResult>): void;
  listAll(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PublicIPPrefixListResult>, callback?: msRest.ServiceCallback<Models.PublicIPPrefixListResult>): Promise<Models.PublicIPPrefixesListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.PublicIPPrefixesListAllResponse>;
  }

  /**
   * Gets all public IP prefixes in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.PublicIPPrefixesListResponse>
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.PublicIPPrefixesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.PublicIPPrefixListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPPrefixListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PublicIPPrefixListResult>, callback?: msRest.ServiceCallback<Models.PublicIPPrefixListResult>): Promise<Models.PublicIPPrefixesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PublicIPPrefixesListResponse>;
  }

  /**
   * Deletes the specified public IP prefix.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the PublicIpPrefix.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, publicIpPrefixName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        publicIpPrefixName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates a static or dynamic public IP prefix.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the public IP prefix.
   * @param parameters Parameters supplied to the create or update public IP prefix operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, publicIpPrefixName: string, parameters: Models.PublicIPPrefix, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        publicIpPrefixName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets all the public IP prefixes in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PublicIPPrefixesListAllNextResponse>
   */
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PublicIPPrefixesListAllNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PublicIPPrefixListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPPrefixListResult>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PublicIPPrefixListResult>, callback?: msRest.ServiceCallback<Models.PublicIPPrefixListResult>): Promise<Models.PublicIPPrefixesListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.PublicIPPrefixesListAllNextResponse>;
  }

  /**
   * Gets all public IP prefixes in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PublicIPPrefixesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PublicIPPrefixesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PublicIPPrefixListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPPrefixListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PublicIPPrefixListResult>, callback?: msRest.ServiceCallback<Models.PublicIPPrefixListResult>): Promise<Models.PublicIPPrefixesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.PublicIPPrefixesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIpPrefixName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.publicIpPrefixName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPPrefix
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIpPrefixName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.publicIpPrefixName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.TagsObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPPrefix
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/publicIPPrefixes",
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
      bodyMapper: Mappers.PublicIPPrefixListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes",
  urlParameters: [
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.PublicIPPrefixListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIpPrefixName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.publicIpPrefixName,
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIpPrefixName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.publicIpPrefixName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.PublicIPPrefix,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPPrefix
    },
    201: {
      bodyMapper: Mappers.PublicIPPrefix
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.PublicIPPrefixListResult
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
      bodyMapper: Mappers.PublicIPPrefixListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};