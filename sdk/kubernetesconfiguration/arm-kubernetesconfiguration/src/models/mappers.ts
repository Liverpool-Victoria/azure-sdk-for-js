/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Result: msRest.CompositeMapper = {
  serializedName: "Result",
  type: {
    name: "Composite",
    className: "Result",
    modelProperties: {
      sampleProperty: {
        serializedName: "sampleProperty",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorDefinition: msRest.CompositeMapper = {
  serializedName: "ErrorDefinition",
  type: {
    name: "Composite",
    className: "ErrorDefinition",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDefinition"
        }
      }
    }
  }
};

export const ComplianceStatus: msRest.CompositeMapper = {
  serializedName: "ComplianceStatus",
  type: {
    name: "Composite",
    className: "ComplianceStatus",
    modelProperties: {
      complianceState: {
        readOnly: true,
        serializedName: "complianceState",
        type: {
          name: "String"
        }
      },
      lastConfigApplied: {
        serializedName: "lastConfigApplied",
        type: {
          name: "DateTime"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      messageLevel: {
        serializedName: "messageLevel",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HelmOperatorProperties: msRest.CompositeMapper = {
  serializedName: "HelmOperatorProperties",
  type: {
    name: "Composite",
    className: "HelmOperatorProperties",
    modelProperties: {
      chartVersion: {
        serializedName: "chartVersion",
        type: {
          name: "String"
        }
      },
      chartValues: {
        serializedName: "chartValues",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SystemData: msRest.CompositeMapper = {
  serializedName: "systemData",
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyResource: msRest.CompositeMapper = {
  serializedName: "ProxyResource",
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const SourceControlConfiguration: msRest.CompositeMapper = {
  serializedName: "SourceControlConfiguration",
  type: {
    name: "Composite",
    className: "SourceControlConfiguration",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      repositoryUrl: {
        serializedName: "properties.repositoryUrl",
        type: {
          name: "String"
        }
      },
      operatorNamespace: {
        serializedName: "properties.operatorNamespace",
        defaultValue: 'default',
        type: {
          name: "String"
        }
      },
      operatorInstanceName: {
        serializedName: "properties.operatorInstanceName",
        type: {
          name: "String"
        }
      },
      operatorType: {
        serializedName: "properties.operatorType",
        type: {
          name: "String"
        }
      },
      operatorParams: {
        serializedName: "properties.operatorParams",
        type: {
          name: "String"
        }
      },
      configurationProtectedSettings: {
        serializedName: "properties.configurationProtectedSettings",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      operatorScope: {
        serializedName: "properties.operatorScope",
        defaultValue: 'cluster',
        type: {
          name: "String"
        }
      },
      repositoryPublicKey: {
        readOnly: true,
        serializedName: "properties.repositoryPublicKey",
        type: {
          name: "String"
        }
      },
      sshKnownHostsContents: {
        serializedName: "properties.sshKnownHostsContents",
        type: {
          name: "String"
        }
      },
      enableHelmOperator: {
        serializedName: "properties.enableHelmOperator",
        type: {
          name: "Boolean"
        }
      },
      helmOperatorProperties: {
        serializedName: "properties.helmOperatorProperties",
        type: {
          name: "Composite",
          className: "HelmOperatorProperties"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      complianceStatus: {
        readOnly: true,
        serializedName: "properties.complianceStatus",
        type: {
          name: "Composite",
          className: "ComplianceStatus"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const ResourceProviderOperationDisplay: msRest.CompositeMapper = {
  serializedName: "ResourceProviderOperation_display",
  type: {
    name: "Composite",
    className: "ResourceProviderOperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceProviderOperation: msRest.CompositeMapper = {
  serializedName: "ResourceProviderOperation",
  type: {
    name: "Composite",
    className: "ResourceProviderOperation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "ResourceProviderOperationDisplay"
        }
      },
      isDataAction: {
        readOnly: true,
        serializedName: "isDataAction",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const TrackedResource: msRest.CompositeMapper = {
  serializedName: "TrackedResource",
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureEntityResource: msRest.CompositeMapper = {
  serializedName: "AzureEntityResource",
  type: {
    name: "Composite",
    className: "AzureEntityResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        readOnly: true,
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SourceControlConfigurationList: msRest.CompositeMapper = {
  serializedName: "SourceControlConfigurationList",
  type: {
    name: "Composite",
    className: "SourceControlConfigurationList",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SourceControlConfiguration"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceProviderOperationList: msRest.CompositeMapper = {
  serializedName: "ResourceProviderOperationList",
  type: {
    name: "Composite",
    className: "ResourceProviderOperationList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceProviderOperation"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};