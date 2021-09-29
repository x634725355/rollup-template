import { resolve } from 'path';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Momo = /*#__PURE__*/function () {
  function Momo() {
    _classCallCheck(this, Momo);

    this.name = 'momo';
    this.age = 18;
    console.log('momo', resolve('./dist/momo.js'));
  }

  _createClass(Momo, [{
    key: "callMe",
    value: function callMe() {
      console.log("".concat(this.name, " ").concat(this.age));
    }
  }]);

  return Momo;
}();

export { Momo };
//# sourceMappingURL=index.js.map
