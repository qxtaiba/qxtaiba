import menu from './command-output/menu'
import about from './command-output/about'
import skills from './command-output/skills'
import github from './command-output/github'
import linkedin from './command-output/linkedin'
import email from './command-output/email'
import credits from './command-output/credits'
import resume from './command-output/resume'

export default class CommandParser {
    parse(command, args) {
        
        let output = null;

        if (command.length) {
            const method = 'cmd' + command.charAt(0).toUpperCase() + command.slice(1)

            if (this[method])
                output = this[method](args)
        }

        if (output === null)
            output = this.notFoundOutput(command);
            
        output = this.parseOutput(output)

        return output;
    }

    parseOutput(output) {
        if (Array.isArray(output)) {
            for (let i = 0; i < output.length; i++) {
                output[i] = this.parseOutputString(output[i])
            }
        } else {
            output = this.parseOutputString(output)
        }

        return output
    }

    parseOutputString(str) {
        return str.replace(/\t/g, '    ') // replace tabs with spaces
                  .replace(/ /g, '&nbsp;') // replace spaces with nbsp
                  .replace(/\n/g, '<br>') // replace EOL with br tags
                  .replace(/\r\n/g, '<br>') // replace windows new line with br tags
                  .replace(/<color="(.*?)">(.*?)<\/color>/g, "<span class='csl-$1'>$2</span>") // implement color tags
                  .replace(/<link="(.*?)">(.*?)<\/link>/g, "<a href='$1' target='_blank'>$2</a>") // implement link tags
    }

    notFoundOutput(command) {
        return [command + ': command not found']
    }

    cmdEcho(args) {
        return args.join(' ')
    }

    cmdMenu(args) {
        return JSON.parse(JSON.stringify(menu))
    }

    cmdAbout(args) {
        return JSON.parse(JSON.stringify(about))
    }

    cmdSkills(args) {
        return JSON.parse(JSON.stringify(skills))
    }

    cmdGithub(args) {
        return JSON.parse(JSON.stringify(github));
    }

    cmdLinkedin(args) {
        return JSON.parse(JSON.stringify(linkedin));
    }

    cmdEmail(args) {
        return JSON.parse(JSON.stringify(email));
    }

    cmdResume(args){
        return JSON.parse(JSON.stringify(resume))
    }

    cmdCredits(args) {
        return JSON.parse(JSON.stringify(credits));
    }

    cmdAll(args) {
        return this.cmdMenu()
                   .concat(this.cmdAbout())
                   .concat(this.cmdSkills())
                   .concat(this.cmdGithub())
                   .concat(this.cmdLinkedin())
                   .concat(this.cmdEmail())
                   .concat(this.cmdResume())
                   .concat(this.cmdCredits())
    }

    cmdLs(args) {
        return this.cmdMenu();
    }
}