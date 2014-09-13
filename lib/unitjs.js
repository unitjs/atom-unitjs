/**
 * @name unitjs (main)
 * @author Nicolas Tallefourtane <dev@nicolab.net>
 * @link http://unitjs.com
 * @link https://github.com/unitjs/atom-unitjs
 * @license MIT https://github.com/unitjs/atom-unitjs/blob/master/LICENSE
 */

var UnitjsView = require('./unitjs-view');

module.exports = {

  unitjsView: null,

  activate: function(state) {
    return this.unitjsView = new UnitjsView(state.unitjsViewState);
  },

  deactivate: function() {
    return this.unitjsView.destroy();
  },

  serialize: function() {

    return {
      unitjsViewState: this.unitjsView.serialize()
    };
  }

};
