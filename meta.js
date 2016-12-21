function kebabToCamel (name) {
  name = name.replace(/\-(\w)/g, (match, p1) => {
    return p1.toUpperCase();
  });
  name = name.replace(/^\w/, (match) => {
    return match.toUpperCase();
  });
  return name
}

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Plugin name'
    },
    library: {
      type: 'string',
      required: true,
      message: 'Library name for browser usage',
      default (answers) {
        if (answers.name) {
          return kebabToCamel(answers.name)
        } else {
          return ''
        }
      }
    },
    description: {
      type: 'string',
      required: false,
      message: 'Plugin description',
      default: 'A Vue.js Plugin'
    },
    version: {
      type: 'string',
      required: false,
      message: 'Initial version',
      default: '0.0.0'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    githubAccount: {
      type: 'string',
      required: false,
      message: 'GitHub Account',
      default: ''
    },
    css: {
      type: "list",
      message: "Pick a css language",
      choices: [
        "css",
        "sass",
        "less",
        "stylus"
      ]
    }
  },
  helpers: {
    authorFullNameFrom: function (author) {
      const startPosition = author.indexOf('<')
      return author.slice(0, startPosition - 1)
    },
    authorEmailFrom: function (author) {
      const startPosition = author.indexOf('<')
      const endPosition = author.indexOf('>')
      return author.slice(startPosition + 1, endPosition)
    }
  },
  completeMessage: "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev"
}
