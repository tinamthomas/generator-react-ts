var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    prompting() {
        return this.prompt([{
            type    : 'input',
            name    : 'name',
            message : 'Your project name',
            default : 'My project'
        },{
            type    : 'input',
            name    : 'description',
            message : 'Projection description',
            default : 'Project description'
        },{
            type    : 'input',
            name    : 'author',
            message : 'Author name',
            default : 'Author'
        }]).then((answers) => this.answers = answers);
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('app'),
            this.destinationPath('.'),
            {
                name: this.answers.name,
                description: this.answers.description,
                author: this.answers.author,
            }
        );
        // Copy all dotfiles
        this.fs.copy(
          this.templatePath('app/.*'),
          this.destinationPath('.')
        );
    }
};