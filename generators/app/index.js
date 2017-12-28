var Generator = require('yeoman-generator');

module.exports = class extends Generator {

	constructor(args, opts) {
		super(args, opts);
		this.argument('appName', { type: String, required: true });
		this.log(`The name of your project is : ${this.options.appName}`);
	}

	// copy template
	copyTemplate() {
		let appName = this.options.appName;
		this.fs.copyTpl(
			this.templatePath('../../../template/**/*.*'),
			this.destinationPath(appName + '/'),
			{ appName }
		);

		this.fs.copy(
			this.templatePath('../../../template/.*'),
			this.destinationRoot(appName + '/')
		);

	}
};
