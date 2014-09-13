/**
 * @name unitjs (view)
 * @author Nicolas Tallefourtane <dev@nicolab.net>
 * @link http://unitjs.com
 * @link https://github.com/unitjs/atom-unitjs
 * @license MIT https://github.com/unitjs/atom-unitjs/blob/master/LICENSE
 */

var helpers = require('atom-helpers');
var View    = require('atom').View;

/**
 * @constructor
 */
function UnitjsView () {

  View.__super__.constructor.apply(this, arguments);
}

// inheritance like `class UnitjsView extends View`
helpers.extends(UnitjsView, View);


UnitjsView.content = function() {

  return this.div(
    {
      'class': 'unitjs overlay from-top'
    },

    function() {
      return this.div("The Unitjs package is Alive! It's ALIVE!", {
        'class': 'message'
      });
    }.bind(this));
};

UnitjsView.prototype.initialize = function(serializeState) {

  return atom.workspaceView.command('unitjs:toggle', function() {
    return this.toggle();
  }.bind(this));
};

UnitjsView.prototype.serialize = function() {};

UnitjsView.prototype.destroy = function() {
  return this.detach();
};

UnitjsView.prototype.toggle = function() {

  console.log('UnitjsView was toggled!');

  return this.hasParent() ? this.detach() : atom.workspaceView.append(this);
};


module.exports = UnitjsView;
