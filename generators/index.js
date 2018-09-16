var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    method1() {
        this.log('Starting to generate code');
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('app'),
            this.destinationPath('.')
        );
    }
};