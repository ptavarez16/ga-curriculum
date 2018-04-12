import Component from '@ember/component'

export default Component.extend({
  example: {
    text: ''
  },

  actions: {
    createExample () {
      this.sendAction('create', this.get('example'))
      this.set('example', {})
    }
  }
})
