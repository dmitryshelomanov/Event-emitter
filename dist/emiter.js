"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.events = {};
    this.instance = null;
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(name, callback) {
      if (this.events[name]) {
        this.events[name].push(callback);
      } else {
        this.events[name] = [callback];
      }
    }
  }, {
    key: "emit",
    value: function emit(name) {
      var _this = this;

      for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      if (this.events[name]) {
        this.events[name].forEach(function (cb) {
          cb.apply(_this, rest);
        });
      }
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        return this.instance = new EventEmitter();
      }
      return this.instance;
    }
  }]);

  return EventEmitter;
}();