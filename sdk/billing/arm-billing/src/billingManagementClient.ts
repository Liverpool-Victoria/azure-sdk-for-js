/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { BillingManagementClientContext } from "./billingManagementClientContext";


class BillingManagementClient extends BillingManagementClientContext {
  // Operation groups
  billingAccounts: operations.BillingAccounts;
  address: operations.Address;
  availableBalances: operations.AvailableBalances;
  instructions: operations.Instructions;
  billingProfiles: operations.BillingProfiles;
  customers: operations.Customers;
  invoiceSections: operations.InvoiceSections;
  billingPermissions: operations.BillingPermissions;
  billingSubscriptions: operations.BillingSubscriptions;
  products: operations.Products;
  invoices: operations.Invoices;
  transactions: operations.Transactions;
  policies: operations.Policies;
  billingProperty: operations.BillingPropertyOperations;
  operations: operations.Operations;
  billingRoleDefinitions: operations.BillingRoleDefinitions;
  billingRoleAssignments: operations.BillingRoleAssignments;
  agreements: operations.Agreements;
  enrollmentAccounts: operations.EnrollmentAccounts;
  billingPeriods: operations.BillingPeriods;

  /**
   * Initializes a new instance of the BillingManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The ID that uniquely identifies an Azure subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.BillingManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.billingAccounts = new operations.BillingAccounts(this);
    this.address = new operations.Address(this);
    this.availableBalances = new operations.AvailableBalances(this);
    this.instructions = new operations.Instructions(this);
    this.billingProfiles = new operations.BillingProfiles(this);
    this.customers = new operations.Customers(this);
    this.invoiceSections = new operations.InvoiceSections(this);
    this.billingPermissions = new operations.BillingPermissions(this);
    this.billingSubscriptions = new operations.BillingSubscriptions(this);
    this.products = new operations.Products(this);
    this.invoices = new operations.Invoices(this);
    this.transactions = new operations.Transactions(this);
    this.policies = new operations.Policies(this);
    this.billingProperty = new operations.BillingPropertyOperations(this);
    this.operations = new operations.Operations(this);
    this.billingRoleDefinitions = new operations.BillingRoleDefinitions(this);
    this.billingRoleAssignments = new operations.BillingRoleAssignments(this);
    this.agreements = new operations.Agreements(this);
    this.enrollmentAccounts = new operations.EnrollmentAccounts(this);
    this.billingPeriods = new operations.BillingPeriods(this);
  }
}

// Operation Specifications

export {
  BillingManagementClient,
  BillingManagementClientContext,
  Models as BillingManagementModels,
  Mappers as BillingManagementMappers
};
export * from "./operations";