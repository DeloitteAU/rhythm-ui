const fs = require('fs'); // eslint-disable-line
const PATH = 'components/{{pascalCase name}}';
const REACT_PATH = 'react/{{pascalCase name}}React';
const VUE_PATH =  'vue/{{pascalCase name}}Vue';
const PLOP_PATH = 'plopTemplates/Component';
const PLOP_REACT = 'plopTemplates/reactAdapters';
const PLOP_VUE = 'plopTemplates/vueAdapters';

const reactActions = [
	{
		type: 'add',
		path: `${REACT_PATH}/src/{{pascalCase name}}.tsx`,
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
		path: `${VUE_PATH}/{{pascalCase name}}Vue.ts`,
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

const checkComponent = () => {
	let choices = [];
	fs
		.readdirSync('./components')
		.forEach(file => {
			if (!checkFile(`react/${file}React`)) {
				choices.push(file)
			}
		});
	return choices
};

const ensureRui = text => `rui ${text.replace(/Rui/gi, "")}`;

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
				//format the component to have Rui
				filter: ensureRui
            },
            {
                type: 'list',
                name: 'adapter',
                message: 'Do you also need an adapter?',
                choices: ['Not yet', 'React'],
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
                    path: `${PATH}/src/{{pascalCase name}}.ts`,
                    templateFile: `${PLOP_PATH}/src/Component.ts.hbs`
                },
                {
                    type: 'add',
                    path: `${PATH}/src/{{pascalCase name}}.css.ts`,
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
				message: 'Please chose your component',
				choices: () => {
					return checkComponent()
				},
			},
            {
                type: 'list',
                name: 'adapter',
                message: 'Please chose an adapter',
				choices: ['React'],
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




