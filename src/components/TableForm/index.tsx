
import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

interface Attribute {
  name: string;
  dataType: string;
  size: string;
  precision: string;
  constraints: string;
  defaultValue: string;
  validations: string;
}

interface Entity {
  name: string;
  attributes: Attribute[];
}

// Predefined entities with their attributes
const predefinedEntities: Record<string, Attribute[]> = {
  "User": [
    { name: "id", dataType: "uuid", size: "", precision: "", constraints: "PRIMARY KEY", defaultValue: "", validations: "" },
    { name: "username", dataType: "varchar", size: "50", precision: "", constraints: "UNIQUE NOT NULL", defaultValue: "", validations: "" },
    { name: "email", dataType: "varchar", size: "100", precision: "", constraints: "UNIQUE NOT NULL", defaultValue: "", validations: "email" },
    { name: "password", dataType: "varchar", size: "255", precision: "", constraints: "NOT NULL", defaultValue: "", validations: "" },
    { name: "created_at", dataType: "timestamp", size: "", precision: "", constraints: "NOT NULL", defaultValue: "CURRENT_TIMESTAMP", validations: "" }
  ],
  "Product": [
    { name: "id", dataType: "uuid", size: "", precision: "", constraints: "PRIMARY KEY", defaultValue: "", validations: "" },
    { name: "name", dataType: "varchar", size: "100", precision: "", constraints: "NOT NULL", defaultValue: "", validations: "" },
    { name: "description", dataType: "text", size: "", precision: "", constraints: "", defaultValue: "", validations: "" },
    { name: "price", dataType: "decimal", size: "", precision: "10,2", constraints: "NOT NULL", defaultValue: "0.00", validations: "" },
    { name: "stock", dataType: "integer", size: "", precision: "", constraints: "NOT NULL", defaultValue: "0", validations: "" }
  ],
  "Order": [
    { name: "id", dataType: "uuid", size: "", precision: "", constraints: "PRIMARY KEY", defaultValue: "", validations: "" },
    { name: "user_id", dataType: "uuid", size: "", precision: "", constraints: "NOT NULL", defaultValue: "", validations: "" },
    { name: "total_amount", dataType: "decimal", size: "", precision: "10,2", constraints: "NOT NULL", defaultValue: "0.00", validations: "" },
    { name: "status", dataType: "varchar", size: "20", precision: "", constraints: "NOT NULL", defaultValue: "'pending'", validations: "" },
    { name: "created_at", dataType: "timestamp", size: "", precision: "", constraints: "NOT NULL", defaultValue: "CURRENT_TIMESTAMP", validations: "" }
  ],
  "Category": [
    { name: "id", dataType: "uuid", size: "", precision: "", constraints: "PRIMARY KEY", defaultValue: "", validations: "" },
    { name: "name", dataType: "varchar", size: "50", precision: "", constraints: "UNIQUE NOT NULL", defaultValue: "", validations: "" },
    { name: "description", dataType: "text", size: "", precision: "", constraints: "", defaultValue: "", validations: "" }
  ],
  "Address": [
    { name: "id", dataType: "uuid", size: "", precision: "", constraints: "PRIMARY KEY", defaultValue: "", validations: "" },
    { name: "user_id", dataType: "uuid", size: "", precision: "", constraints: "NOT NULL", defaultValue: "", validations: "" },
    { name: "street", dataType: "varchar", size: "100", precision: "", constraints: "NOT NULL", defaultValue: "", validations: "" },
    { name: "city", dataType: "varchar", size: "50", precision: "", constraints: "NOT NULL", defaultValue: "", validations: "" },
    { name: "state", dataType: "varchar", size: "50", precision: "", constraints: "NOT NULL", defaultValue: "", validations: "" },
    { name: "postal_code", dataType: "varchar", size: "20", precision: "", constraints: "NOT NULL", defaultValue: "", validations: "" }
  ]
};

export default function TableForm({ onSave }: { onSave: () => void }) {
  const [entityName, setEntityName] = useState("");
  const [attributes, setAttributes] = useState<Attribute[]>([]);
  const [currentAttribute, setCurrentAttribute] = useState<Attribute>({
    name: "",
    dataType: "",
    size: "",
    precision: "",
    constraints: "",
    defaultValue: "",
    validations: ""
  });
  const [isCustomEntity, setIsCustomEntity] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState("");

  const resetAttributeForm = () => {
    setCurrentAttribute({
      name: "",
      dataType: "",
      size: "",
      precision: "",
      constraints: "",
      defaultValue: "",
      validations: ""
    });
  };

  const handleEntitySelect = (selected: string) => {
    setSelectedEntity(selected);
    
    if (selected === "custom") {
      setIsCustomEntity(true);
      setEntityName("");
      setAttributes([]);
    } else if (selected) {
      setIsCustomEntity(false);
      setEntityName(selected);
      setAttributes(predefinedEntities[selected] || []);
    } else {
      setIsCustomEntity(false);
      setEntityName("");
      setAttributes([]);
    }
  };

  const handleAddAttribute = () => {
    if (!currentAttribute.name || !currentAttribute.dataType) {
      alert("Attribute Name and Data Type are required!");
      return;
    }

    setAttributes(prev => [...prev, currentAttribute]);
    resetAttributeForm();
  };

  const handleDeleteAttribute = (index: number) => {
    setAttributes(prev => prev.filter((_, i) => i !== index));
  };

  const handleEditAttribute = (index: number) => {
    setCurrentAttribute(attributes[index]);
    setAttributes(prev => prev.filter((_, i) => i !== index));
  };

  const handleSaveEntity = async () => {
    if (!entityName) {
      alert("Entity Name is required!");
      return;
    }

    if (attributes.length === 0) {
      alert("At least one attribute is required!");
      return;
    }

    const entity: Entity = {
      name: entityName,
      attributes
    };

    try {
      const response = await fetch('http://192.168.1.18:3030/api/table/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entity),
      });

      if (!response.ok) {
        throw new Error('Failed to save entity');
      }

      alert("Entity saved successfully!");
      setEntityName("");
      setAttributes([]);
      resetAttributeForm();
      setIsCustomEntity(false);
      setSelectedEntity("");
    } catch (error) {
      console.error('Error saving entity:', error);
      alert("Failed to save entity. Please try again.");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        {/* Left Column - Entity Setup */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-bold text-xl text-black dark:text-white">Entity Setup</h3>
          </div>
          
          <div className="p-6.5 space-y-4">
            {/* Select Entity */}
            <div>
              <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                Select Entity <span className="text-meta-1">*</span>
              </label>
              <select
                value={selectedEntity}
                onChange={(e) => handleEntitySelect(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              >
                <option value="">Select an entity</option>
                {Object.keys(predefinedEntities).map((entity) => (
                  <option key={entity} value={entity}>{entity}</option>
                ))}
                <option value="custom">Create Custom Entity</option>
              </select>
            </div>

            {isCustomEntity && (
              <div>
                <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                  Entity Name <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  value={entityName}
                  onChange={(e) => setEntityName(e.target.value)}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  placeholder="Enter entity name"
                />
              </div>
            )}

            {(isCustomEntity || entityName) && (
              <>
                {/* Attribute Fields */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                    Attribute Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    value={currentAttribute.name}
                    onChange={(e) => setCurrentAttribute({...currentAttribute, name: e.target.value})}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    placeholder="Enter attribute name"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {/* Data Type */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                      Data Type <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      value={currentAttribute.dataType}
                      onChange={(e) => setCurrentAttribute({...currentAttribute, dataType: e.target.value})}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Data type"
                    />
                  </div>

                  {/* Size */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                      Size
                    </label>
                    <input
                      type="text"
                      value={currentAttribute.size}
                      onChange={(e) => setCurrentAttribute({...currentAttribute, size: e.target.value})}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Size"
                    />
                  </div>

                  {/* Precision */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                      Precision
                    </label>
                    <input
                      type="text"
                      value={currentAttribute.precision}
                      onChange={(e) => setCurrentAttribute({...currentAttribute, precision: e.target.value})}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Precision"
                    />
                  </div>
                </div>

                {/* Constraints */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                    Constraints
                  </label>
                  <select 
                    value={currentAttribute.constraints}
                    onChange={(e) => setCurrentAttribute({...currentAttribute, constraints: e.target.value})}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  >
                    <option value="">Select constraints</option>
                    <option value="PRIMARY KEY">PRIMARY KEY</option>
                    <option value="UNIQUE">UNIQUE</option>
                    <option value="NOT NULL">NOT NULL</option>
                  </select>
                </div>

                {/* Default Value */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                    Default Value
                  </label>
                  <input
                    type="text"
                    value={currentAttribute.defaultValue}
                    onChange={(e) => setCurrentAttribute({...currentAttribute, defaultValue: e.target.value})}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    placeholder="Enter default value"
                  />
                </div>

                {/* Validations */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                    Validations
                  </label>
                  <select
                    value={currentAttribute.validations}
                    onChange={(e) => setCurrentAttribute({...currentAttribute, validations: e.target.value})}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  >
                    <option value="">Select validations</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="url">URL</option>
                  </select>
                </div>

                <button 
                  onClick={handleAddAttribute}
                  className="flex w-full justify-center rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90"
                >
                  Add Attribute
                </button>
              </>
            )}
          </div>
        </div>

        {/* Right Column - Preview and Routes */}
        <div className="space-y-9">
          {/* Entity Preview */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-bold text-xl text-black dark:text-white">Entity Preview</h3>
            </div>
            
            <div className="p-6.5">
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-2 text-left dark:bg-meta-4">
                      <th className="px-4 py-4 font-medium text-black dark:text-white">
                        Attribute Name
                      </th>
                      <th className="px-4 py-4 font-medium text-black dark:text-white">
                        Data Type
                      </th>
                      <th className="px-4 py-4 font-medium text-black dark:text-white">
                        Size
                      </th>
                      <th className="px-4 py-4 font-medium text-black dark:text-white">
                        Constraints
                      </th>
                      <th className="px-4 py-4 font-medium text-black dark:text-white">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {attributes?.map((attr, index) => (
                      <tr key={index}>
                        <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                          {attr.name}
                        </td>
                        <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                          {attr.dataType}
                        </td>
                        <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                          {attr.size}
                        </td>
                        <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                          {attr.constraints}
                        </td>
                        <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark custom-icon-btn">
                          <div className="flex items-center space-x-3 custom-icon-btn">
                            <button onClick={() => handleEditAttribute(index)} >
                              <Pencil className="hover:text-primary custom-icon-btn" />
                            </button>
                            <button onClick={() => handleDeleteAttribute(index)}>
                              <Trash2 className="hover:text-meta-1 custom-icon-btn" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4.5 flex flex-wrap gap-3">
  <button 
    onClick={handleSaveEntity}
    className="inline-flex items-center justify-center rounded bg-primary px-6 py-2 text-center font-medium text-white hover:bg-opacity-90"
  >
    Save Entity
  </button>
  <button 
    onClick={() => {
      setEntityName("");
      setAttributes([]);
      resetAttributeForm();
      setIsCustomEntity(false);
      setSelectedEntity("");
    }}
    className=" btn btn-cancel inline-flex items-center justify-center rounded bg-meta-1 px-6 py-2 text-center font-medium text-white hover:bg-opacity-90"
  >
    Cancel
  </button>
</div>
            </div>
          </div>

          {/* Entity Routes */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">Entity Routes</h3>
            </div>
            
            <div className="p-6.5">
              {entityName && (
                <div className="space-y-2.5">
                  <div className="rounded border border-stroke py-3 px-4 dark:border-strokedark">
                    GET /api/{entityName.toLowerCase()}
                  </div>
                  <div className="rounded border border-stroke py-3 px-4 dark:border-strokedark">
                    POST /api/{entityName.toLowerCase()}
                  </div>
                  <div className="rounded border border-stroke py-3 px-4 dark:border-strokedark">
                    PUT /api/{entityName.toLowerCase()}/[id]
                  </div>
                  <div className="rounded border border-stroke py-3 px-4 dark:border-strokedark">
                    DELETE /api/{entityName.toLowerCase()}/[id]
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}