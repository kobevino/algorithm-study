module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('generate files', {
		description: 'template for algorithm',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'Enter your file name!'
		}],
		actions: [{
      type: 'add',
			path: 'src/{{camelCase name}}/kobe.js',
      templateFile: "templates/example.js.hbs"
    }, {
      type: 'add',
			path: 'src/{{camelCase name}}/{{camelCase name}}.test.js',
      templateFile: "templates/example.test.js.hbs"
    }]
	});
}