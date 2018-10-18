"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formOne = function (_React$Component) {
  _inherits(formOne, _React$Component);

  function formOne(props) {
    _classCallCheck(this, formOne);

    var _this = _possibleConstructorReturn(this, (formOne.__proto__ || Object.getPrototypeOf(formOne)).call(this, props));

    _this.state = {
      name: "",
      email: "",
      password: ""
    };
    return _this;
  }

  _createClass(formOne, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        null,
        React.createElement("input", null)
      );
    }
  }]);

  return formOne;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9mb3JtT25lLmpzeCJdLCJuYW1lcyI6WyJmb3JtT25lIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTzs7O0FBQ0osbUJBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSxrSEFDWkEsS0FEWTs7QUFFbEIsVUFBS0MsS0FBTCxHQUFZO0FBQ1ZDLFlBQU0sRUFESTtBQUVWQyxhQUFPLEVBRkc7QUFHVkMsZ0JBQVU7QUFIQSxLQUFaO0FBRmtCO0FBT25COzs7OzZCQUNTO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQURGLE9BREY7QUFLRDs7OztFQWZtQkMsTUFBTUMsUyIsImZpbGUiOiJmb3JtT25lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgZm9ybU9uZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPXtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIHBhc3N3b3JkOiBcIlwiXG4gICAgfVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtPlxuICAgICAgICA8aW5wdXQ+PC9pbnB1dD5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH07XG59Il19