# Qndo-Autocomplete

### Installation
 - Package isn't published to npm yet
 - Just clone the project, copy **@qndo** folder

### Usage
  - Clone project
  - Do npm install
  - Do ng serve


## Properties and Events for Component

|Attribute| | Description|Type|Required|Default|
|:---    |:--- |:--- |:--- |:---      |:--- |
|source| Property |Data source as input. Source can be an array or function that returns observable| Array / Function(service returns Observable)| YES | - |
| propertyToShow | Property | If your array is a collection of Objects and if it has n properties, pass propertyToShow value to set which property you want to display in dropdown| string | Yes, if source is Array of Objects | - |
| valueChanged | Event | Value changed Event will omit the dropdown item you selected from dropdown| Function | Yes, If you want to capture the value| -|
| styles | Property | This will allow to pass custom styles to the auto complete component | string | No | - |



