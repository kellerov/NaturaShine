module.exports = {
    configs: {
      recommended: {
        extends: ['prettier'],
        plugins: ['prettier'],
        plugin:['prettier/recommended'],
        rules: {
          'prettier/prettier': 'error'
        }
      }
    }