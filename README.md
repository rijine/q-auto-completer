# Qndo-Autocomplete

### Installation
 - Package isn\'t published to npm yet
 - Just clone the project, copy **@qndo** folder

### Usage
  - Clone project
  - Do npm install
  - Do ng serve


### Remote source
  The remote source service is using api from http://developer.wordnik.com/docs.html#!/words/searchWords_get_0
  incase api calls fails due to any authentication problem, please replace api key in the code with new from above url.


## Properties and Events for Component

|Attribute| | Description|Type|Required|Default|
|:---    |:--- |:--- |:--- |:---      |:--- |
|source| Property |Data source as input. Source can be an array or function that returns observable| Array / Function(service returns Observable)| YES | - |
| propertyToShow | Property | If your array is a collection of Objects and if it has n properties, pass propertyToShow value to set which property you want to display in dropdown| string | Yes, if source is Array of Objects | - |
| minimumChars| Property | This will start filtering after minimum characters are crossed | string | No | minimumChars = 1
| listSize| Property| number of items in dropdown list| string| No| listSize = 6
| valueChanged | Event | Value changed Event will omit the dropdown item you selected from dropdown| Function | Yes, If you want to capture the value| -|
| styles | Property | This will allow to pass custom styles to the auto complete component | string | No | - |



