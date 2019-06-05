#Plop

Plop is a small component generator that can be used to quickly set up our web-components from pre designed templates.

### Usage
##### Component
To use plop to generate a component follow these steps:

````
1. $ npm run generate component
2. Choose a component name. i.e Button (please leave out Rui or any prefix at this stage)
3. Chose if you would like to add an adapter. If you choose no, this can be done at a later stage.
````
Hey presto! Your component can now be fount in the components directory.

##### Adapter
The adapters are React and Vue.js wrappers for our web components. To create an adaptor for your component follow these steps.

````
  1. $ npm run generate adapter
  2. Select which adapter you require. (React, Vue or both)
  3. Enter name of component you wish to create an adaptor for (leaving off any Rui prefix).
````
*Please note: Creating an adapter will only work for an existing component.
Please use the 'component' command if you are building a component from scratch.
 
======

#### Plopfile.js
Here is where the prompts and actions are generated. 

#### plopTemplates
Here is where the template files are kept, we use handlebars to build our semantic templates easily. 
These should stay consistent and reflect what will be created in your component files.


### Further documentation 
To read further into plop, their documentation can be found on their website https://plopjs.com/documentation/
