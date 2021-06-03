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
import * as Mappers from "../models/alertsMappers";
import * as Parameters from "../models/parameters";
import { CostManagementClientContext } from "../costManagementClientContext";

/** Class representing a Alerts. */
export class Alerts {
  private readonly client: CostManagementClientContext;

  /**
   * Create a Alerts.
   * @param {CostManagementClientContext} client Reference to the service client.
   */
  constructor(client: CostManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the alerts for scope defined.
   * @param scope The scope associated with alerts operations. This includes
   * '/subscriptions/{subscriptionId}/' for subscription scope,
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   * Department scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   * for EnrollmentAccount scope,
   * '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group
   * scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   * for billingProfile scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}'
   * for invoiceSection scope, and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}'
   * specific for partners.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListResponse>
   */
  list(scope: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsListResponse>;
  /**
   * @param scope The scope associated with alerts operations. This includes
   * '/subscriptions/{subscriptionId}/' for subscription scope,
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   * Department scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   * for EnrollmentAccount scope,
   * '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group
   * scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   * for billingProfile scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}'
   * for invoiceSection scope, and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}'
   * specific for partners.
   * @param callback The callback
   */
  list(scope: string, callback: msRest.ServiceCallback<Models.AlertsResult>): void;
  /**
   * @param scope The scope associated with alerts operations. This includes
   * '/subscriptions/{subscriptionId}/' for subscription scope,
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   * Department scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   * for EnrollmentAccount scope,
   * '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group
   * scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   * for billingProfile scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}'
   * for invoiceSection scope, and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}'
   * specific for partners.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(scope: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertsResult>): void;
  list(scope: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertsResult>, callback?: msRest.ServiceCallback<Models.AlertsResult>): Promise<Models.AlertsListResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AlertsListResponse>;
  }

  /**
   * Gets the alert for the scope by alert ID.
   * @param scope The scope associated with alerts operations. This includes
   * '/subscriptions/{subscriptionId}/' for subscription scope,
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   * Department scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   * for EnrollmentAccount scope,
   * '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group
   * scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   * for billingProfile scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}'
   * for invoiceSection scope, and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}'
   * specific for partners.
   * @param alertId Alert ID
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsGetResponse>
   */
  get(scope: string, alertId: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsGetResponse>;
  /**
   * @param scope The scope associated with alerts operations. This includes
   * '/subscriptions/{subscriptionId}/' for subscription scope,
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   * Department scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   * for EnrollmentAccount scope,
   * '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group
   * scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   * for billingProfile scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}'
   * for invoiceSection scope, and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}'
   * specific for partners.
   * @param alertId Alert ID
   * @param callback The callback
   */
  get(scope: string, alertId: string, callback: msRest.ServiceCallback<Models.Alert>): void;
  /**
   * @param scope The scope associated with alerts operations. This includes
   * '/subscriptions/{subscriptionId}/' for subscription scope,
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   * Department scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   * for EnrollmentAccount scope,
   * '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group
   * scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   * for billingProfile scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}'
   * for invoiceSection scope, and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}'
   * specific for partners.
   * @param alertId Alert ID
   * @param options The optional parameters
   * @param callback The callback
   */
  get(scope: string, alertId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Alert>): void;
  get(scope: string, alertId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Alert>, callback?: msRest.ServiceCallback<Models.Alert>): Promise<Models.AlertsGetResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        alertId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AlertsGetResponse>;
  }

  /**
   * Dismisses the specified alert
   * @param scope The scope associated with alerts operations. This includes
   * '/subscriptions/{subscriptionId}/' for subscription scope,
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   * Department scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   * for EnrollmentAccount scope,
   * '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group
   * scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   * for billingProfile scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}'
   * for invoiceSection scope, and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}'
   * specific for partners.
   * @param alertId Alert ID
   * @param parameters Parameters supplied to the Dismiss Alert operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsDismissResponse>
   */
  dismiss(scope: string, alertId: string, parameters: Models.DismissAlertPayload, options?: msRest.RequestOptionsBase): Promise<Models.AlertsDismissResponse>;
  /**
   * @param scope The scope associated with alerts operations. This includes
   * '/subscriptions/{subscriptionId}/' for subscription scope,
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   * Department scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   * for EnrollmentAccount scope,
   * '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group
   * scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   * for billingProfile scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}'
   * for invoiceSection scope, and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}'
   * specific for partners.
   * @param alertId Alert ID
   * @param parameters Parameters supplied to the Dismiss Alert operation.
   * @param callback The callback
   */
  dismiss(scope: string, alertId: string, parameters: Models.DismissAlertPayload, callback: msRest.ServiceCallback<Models.Alert>): void;
  /**
   * @param scope The scope associated with alerts operations. This includes
   * '/subscriptions/{subscriptionId}/' for subscription scope,
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   * Department scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   * for EnrollmentAccount scope,
   * '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group
   * scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   * for billingProfile scope,
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}'
   * for invoiceSection scope, and
   * '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}'
   * specific for partners.
   * @param alertId Alert ID
   * @param parameters Parameters supplied to the Dismiss Alert operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  dismiss(scope: string, alertId: string, parameters: Models.DismissAlertPayload, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Alert>): void;
  dismiss(scope: string, alertId: string, parameters: Models.DismissAlertPayload, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Alert>, callback?: msRest.ServiceCallback<Models.Alert>): Promise<Models.AlertsDismissResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        alertId,
        parameters,
        options
      },
      dismissOperationSpec,
      callback) as Promise<Models.AlertsDismissResponse>;
  }

  /**
   * Lists the Alerts for external cloud provider type defined.
   * @param externalCloudProviderType The external cloud provider type associated with
   * dimension/query operations. This includes 'externalSubscriptions' for linked account and
   * 'externalBillingAccounts' for consolidated account. Possible values include:
   * 'externalSubscriptions', 'externalBillingAccounts'
   * @param externalCloudProviderId This can be '{externalSubscriptionId}' for linked account or
   * '{externalBillingAccountId}' for consolidated account used with dimension/query operations.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListExternalResponse>
   */
  listExternal(externalCloudProviderType: Models.ExternalCloudProviderType, externalCloudProviderId: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsListExternalResponse>;
  /**
   * @param externalCloudProviderType The external cloud provider type associated with
   * dimension/query operations. This includes 'externalSubscriptions' for linked account and
   * 'externalBillingAccounts' for consolidated account. Possible values include:
   * 'externalSubscriptions', 'externalBillingAccounts'
   * @param externalCloudProviderId This can be '{externalSubscriptionId}' for linked account or
   * '{externalBillingAccountId}' for consolidated account used with dimension/query operations.
   * @param callback The callback
   */
  listExternal(externalCloudProviderType: Models.ExternalCloudProviderType, externalCloudProviderId: string, callback: msRest.ServiceCallback<Models.AlertsResult>): void;
  /**
   * @param externalCloudProviderType The external cloud provider type associated with
   * dimension/query operations. This includes 'externalSubscriptions' for linked account and
   * 'externalBillingAccounts' for consolidated account. Possible values include:
   * 'externalSubscriptions', 'externalBillingAccounts'
   * @param externalCloudProviderId This can be '{externalSubscriptionId}' for linked account or
   * '{externalBillingAccountId}' for consolidated account used with dimension/query operations.
   * @param options The optional parameters
   * @param callback The callback
   */
  listExternal(externalCloudProviderType: Models.ExternalCloudProviderType, externalCloudProviderId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertsResult>): void;
  listExternal(externalCloudProviderType: Models.ExternalCloudProviderType, externalCloudProviderId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertsResult>, callback?: msRest.ServiceCallback<Models.AlertsResult>): Promise<Models.AlertsListExternalResponse> {
    return this.client.sendOperationRequest(
      {
        externalCloudProviderType,
        externalCloudProviderId,
        options
      },
      listExternalOperationSpec,
      callback) as Promise<Models.AlertsListExternalResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.CostManagement/alerts",
  urlParameters: [
    Parameters.scope1
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertsResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.CostManagement/alerts/{alertId}",
  urlParameters: [
    Parameters.scope1,
    Parameters.alertId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Alert
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const dismissOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "{scope}/providers/Microsoft.CostManagement/alerts/{alertId}",
  urlParameters: [
    Parameters.scope1,
    Parameters.alertId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.DismissAlertPayload,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Alert
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listExternalOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.CostManagement/{externalCloudProviderType}/{externalCloudProviderId}/alerts",
  urlParameters: [
    Parameters.externalCloudProviderType,
    Parameters.externalCloudProviderId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertsResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};