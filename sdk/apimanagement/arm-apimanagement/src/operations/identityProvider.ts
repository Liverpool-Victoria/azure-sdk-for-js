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
import * as Mappers from "../models/identityProviderMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a IdentityProvider. */
export class IdentityProvider {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a IdentityProvider.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists a collection of Identity Provider configured in the specified service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.IdentityProviderListByServiceResponse>
   */
  listByService(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase): Promise<Models.IdentityProviderListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, callback: msRest.ServiceCallback<Models.IdentityProviderList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IdentityProviderList>): void;
  listByService(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IdentityProviderList>, callback?: msRest.ServiceCallback<Models.IdentityProviderList>): Promise<Models.IdentityProviderListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.IdentityProviderListByServiceResponse>;
  }

  /**
   * Gets the entity state (Etag) version of the identityProvider specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param [options] The optional parameters
   * @returns Promise<Models.IdentityProviderGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, options?: msRest.RequestOptionsBase): Promise<Models.IdentityProviderGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.IdentityProviderGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        identityProviderName,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.IdentityProviderGetEntityTagResponse>;
  }

  /**
   * Gets the configuration details of the identity Provider configured in specified service
   * instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param [options] The optional parameters
   * @returns Promise<Models.IdentityProviderGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, options?: msRest.RequestOptionsBase): Promise<Models.IdentityProviderGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, callback: msRest.ServiceCallback<Models.IdentityProviderContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IdentityProviderContract>): void;
  get(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IdentityProviderContract>, callback?: msRest.ServiceCallback<Models.IdentityProviderContract>): Promise<Models.IdentityProviderGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        identityProviderName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IdentityProviderGetResponse>;
  }

  /**
   * Creates or Updates the IdentityProvider configuration.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param parameters Create parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.IdentityProviderCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, parameters: Models.IdentityProviderCreateContract, options?: Models.IdentityProviderCreateOrUpdateOptionalParams): Promise<Models.IdentityProviderCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param parameters Create parameters.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, parameters: Models.IdentityProviderCreateContract, callback: msRest.ServiceCallback<Models.IdentityProviderContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param parameters Create parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, parameters: Models.IdentityProviderCreateContract, options: Models.IdentityProviderCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.IdentityProviderContract>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, parameters: Models.IdentityProviderCreateContract, options?: Models.IdentityProviderCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.IdentityProviderContract>, callback?: msRest.ServiceCallback<Models.IdentityProviderContract>): Promise<Models.IdentityProviderCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        identityProviderName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.IdentityProviderCreateOrUpdateResponse>;
  }

  /**
   * Updates an existing IdentityProvider configuration.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<Models.IdentityProviderUpdateResponse>
   */
  update(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, parameters: Models.IdentityProviderUpdateParameters, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<Models.IdentityProviderUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, parameters: Models.IdentityProviderUpdateParameters, ifMatch: string, callback: msRest.ServiceCallback<Models.IdentityProviderContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, parameters: Models.IdentityProviderUpdateParameters, ifMatch: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IdentityProviderContract>): void;
  update(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, parameters: Models.IdentityProviderUpdateParameters, ifMatch: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IdentityProviderContract>, callback?: msRest.ServiceCallback<Models.IdentityProviderContract>): Promise<Models.IdentityProviderUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        identityProviderName,
        parameters,
        ifMatch,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.IdentityProviderUpdateResponse>;
  }

  /**
   * Deletes the specified identity provider configuration.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, ifMatch: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, ifMatch: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, ifMatch: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        identityProviderName,
        ifMatch,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets the client secret details of the Identity Provider.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param [options] The optional parameters
   * @returns Promise<Models.IdentityProviderListSecretsResponse>
   */
  listSecrets(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, options?: msRest.RequestOptionsBase): Promise<Models.IdentityProviderListSecretsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param callback The callback
   */
  listSecrets(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, callback: msRest.ServiceCallback<Models.ClientSecretContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier. Possible values include:
   * 'facebook', 'google', 'microsoft', 'twitter', 'aad', 'aadB2C'
   * @param options The optional parameters
   * @param callback The callback
   */
  listSecrets(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClientSecretContract>): void;
  listSecrets(resourceGroupName: string, serviceName: string, identityProviderName: Models.IdentityProviderType, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClientSecretContract>, callback?: msRest.ServiceCallback<Models.ClientSecretContract>): Promise<Models.IdentityProviderListSecretsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        identityProviderName,
        options
      },
      listSecretsOperationSpec,
      callback) as Promise<Models.IdentityProviderListSecretsResponse>;
  }

  /**
   * Lists a collection of Identity Provider configured in the specified service instance.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.IdentityProviderListByServiceNextResponse>
   */
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.IdentityProviderListByServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.IdentityProviderList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IdentityProviderList>): void;
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IdentityProviderList>, callback?: msRest.ServiceCallback<Models.IdentityProviderList>): Promise<Models.IdentityProviderListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServiceNextOperationSpec,
      callback) as Promise<Models.IdentityProviderListByServiceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/identityProviders",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IdentityProviderList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getEntityTagOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/identityProviders/{identityProviderName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.identityProviderName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.IdentityProviderGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.IdentityProviderGetEntityTagHeaders
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/identityProviders/{identityProviderName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.identityProviderName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IdentityProviderContract,
      headersMapper: Mappers.IdentityProviderGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.IdentityProviderGetHeaders
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/identityProviders/{identityProviderName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.identityProviderName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch0,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.IdentityProviderCreateContract,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IdentityProviderContract,
      headersMapper: Mappers.IdentityProviderCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.IdentityProviderContract,
      headersMapper: Mappers.IdentityProviderCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.IdentityProviderCreateOrUpdateHeaders
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/identityProviders/{identityProviderName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.identityProviderName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.IdentityProviderUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IdentityProviderContract,
      headersMapper: Mappers.IdentityProviderUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.IdentityProviderUpdateHeaders
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/identityProviders/{identityProviderName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.identityProviderName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listSecretsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/identityProviders/{identityProviderName}/listSecrets",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.identityProviderName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClientSecretContract,
      headersMapper: Mappers.IdentityProviderListSecretsHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.IdentityProviderListSecretsHeaders
    }
  },
  serializer
};

const listByServiceNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.IdentityProviderList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};