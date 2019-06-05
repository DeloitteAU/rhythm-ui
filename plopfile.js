const fs = require('fs'); // eslint-disable-line
const PATH = 'components/Rui{{pascalCase name}}';
const REACT_PATH = 'components/react/Rui{{pascalCase name}}React';
const VUE_PATH =  'components/vue/Rui{{pascalCase name}}Vue';
const PLOP_PATH = 'plopTemplates/Component';
const PLOP_REACT = 'plopTemplates/reactAdapters';
const PLOP_VUE = 'plopTemplates/vueAdapters';

const reactActions = [
	{
		type: 'add',
		path: `${REACT_PATH}/src/Rui{{pascalCase name}}.tsx`,
		templateFile: `${PLOP_REACT}/src/Component.tsx.hbs`
	},
	{
		type: 'add',
		path: `${REACT_PATH}/src/index.tsx`,
		templateFile: `${PLOP_REACT}/src/index.tsx.hbs`
	},
	{
		type: 'add',
		path: `${REACT_PATH}/.babelrc`,
		templateFile: `${PLOP_REACT}/.babelrc.hbs`
	},
	{
		type: 'add',
		path: `${REACT_PATH}/package.json`,
		templateFile: `${PLOP_REACT}/package.json.hbs`
	},
];

const vueActions = [
	{
		type: 'add',
		path: `${VUE_PATH}/Rui{{pascalCase name}}Vue.ts`,
		templateFile: `${PLOP_VUE}/readme.md.hbs`
	}
];

const isNotEmpty = name => {
	return ( value ) => {
		return value.length === 0 ? `${name} is required` : true;
	}
};

const checkFile = file => {
	try {
		fs.accessSync(file, fs.constants.R_OK);
		return true;
	} catch (err) {
		return false;
	}
};

const fileExists = value => {
	//check value is not empty
	if(value.length === 0) {return `component name is required`}

	value = `Rui${value}`;
	if (checkFile(`src/components/${value}`)) {return  `${value} is not a component, check spelling and try again` }
	if (checkFile(`src/components/vue/${value}Vue`)) { return `${value} is already a vue component adaptor` }

	return checkFile(`src/components/react/${value}React`) ? `${value} is already a react component adaptor`: true;
};


module.exports = plop => {
    plop.setGenerator('component', {
        description: 'create a new component',

        //prompts are user inputs that provided as arguments to the templates
        prompts: [
            {
                // Raw text input
                type: 'input',
                // Variable name for this input
                name: 'name',
                // Prompt to display on command line
                message: 'What is your component name?',
                // validate the field is not empty
                validate: isNotEmpty( 'name'),
            },
            {
                type: 'list',
                name: 'adapter',
                message: 'Do you also need an adapter?',
                choices: ['Not yet', 'React', 'Vue (unavailable)', 'Both (unavailable)'],
            },
        ],
        actions: data => {
            let actions = [];
            actions = actions.concat([
                {
                    type: 'add',
                    path: `${PATH}/index.d.ts`,
                    templateFile: `${PLOP_PATH}/index.d.ts.hbs`
                },
                {
                    type: 'add',
                    path: `${PATH}/.babelrc`,
                    templateFile: `${PLOP_PATH}/.babelrc.hbs`
                },
                {
                    type: 'add',
                    path: `${PATH}/package.json`,
                    templateFile: `${PLOP_PATH}/package.json.hbs`
                },
                {
                    type: 'add',
                    path: `${PATH}/readme.md`,
                    templateFile: `${PLOP_PATH}/readme.md.hbs`
                },
                //src files - component, css and index
                {
                    type: 'add',
                    path: `${PATH}/src/Rui{{pascalCase name}}.ts`,
                    templateFile: `${PLOP_PATH}/src/Component.ts.hbs`
                },
                {
                    type: 'add',
                    path: `${PATH}/src/Rui{{pascalCase name}}.css.ts`,
                    templateFile: `${PLOP_PATH}/src/Component.css.ts.hbs`
                },
                {
                    type: 'add',
                    path: `${PATH}/src/index.ts`,
                    templateFile: `${PLOP_PATH}/src/index.ts.hbs`
                },
            ]);
            if (data.adapter === 'React' || data.adapter === 'Both') {
                actions = actions.concat(reactActions)
            }
            if (data.adapter === 'Vue' || data.adapter === 'Both') {
                actions = actions.concat(vueActions)
            }
            return actions
        },
    });

    plop.setGenerator('adapter', {
        description: 'Create an adapter that wraps the html component',

        //prompts are user inputs that provided as arguments to the templates
        prompts: [
            {
                type: 'list',
                name: 'adapter',
                message: 'Please chose an adapter',
                choices: ['React', 'Vue', 'Both'],
            },
            {
                type: 'input',
                name: 'name',
                message: 'and what is your component name (do not include Rui prefix)?',
                validate: function (value) {
                     return fileExists(value)
                },
            },
        ],

        actions: data => {
            let actions = [];
            if (data.adapter === 'React' || data.adapter === 'Both') {
                actions = actions.concat(reactActions)
            }
            if (data.adapter === 'Vue' || data.adapter === 'Both') {
                actions = actions.concat(vueActions)
            }
            return actions
        },
    })
};




