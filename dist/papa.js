(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ProductCategoryRow = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductCategoryRow, _React$Component);

  var _super = _createSuper(ProductCategoryRow);

  function ProductCategoryRow() {
    _classCallCheck(this, ProductCategoryRow);

    return _super.apply(this, arguments);
  }

  _createClass(ProductCategoryRow, [{
    key: "render",
    value: function render() {
      var category = this.props.category;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
        colSpan: "2"
      }, category));
    }
  }]);

  return ProductCategoryRow;
}(React.Component);

var ProductRow = /*#__PURE__*/function (_React$Component2) {
  _inherits(ProductRow, _React$Component2);

  var _super2 = _createSuper(ProductRow);

  function ProductRow() {
    _classCallCheck(this, ProductRow);

    return _super2.apply(this, arguments);
  }

  _createClass(ProductRow, [{
    key: "render",
    value: function render() {
      var product = this.props.product;
      var name = product.stocked ? product.name : /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'red'
        }
      }, product.name);
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, name), /*#__PURE__*/React.createElement("td", null, product.price));
    }
  }]);

  return ProductRow;
}(React.Component);

var ProductTable = /*#__PURE__*/function (_React$Component3) {
  _inherits(ProductTable, _React$Component3);

  var _super3 = _createSuper(ProductTable);

  function ProductTable() {
    _classCallCheck(this, ProductTable);

    return _super3.apply(this, arguments);
  }

  _createClass(ProductTable, [{
    key: "render",
    value: function render() {
      var filterText = this.props.filterText;
      var inStockOnly = this.props.inStockOnly;
      var rows = [];
      var lastCategory = null;
      this.props.products.forEach(function (product) {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }

        if (inStockOnly && !product.stocked) {
          return;
        }

        if (product.category !== lastCategory) {
          rows.push( /*#__PURE__*/React.createElement(ProductCategoryRow, {
            category: product.category,
            key: product.category
          }));
        }

        rows.push( /*#__PURE__*/React.createElement(ProductRow, {
          product: product,
          key: product.name
        }));
        lastCategory = product.category;
      });
      return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Price"))), /*#__PURE__*/React.createElement("tbody", null, rows));
    }
  }]);

  return ProductTable;
}(React.Component);

var SearchBar = /*#__PURE__*/function (_React$Component4) {
  _inherits(SearchBar, _React$Component4);

  var _super4 = _createSuper(SearchBar);

  function SearchBar(props) {
    var _this;

    _classCallCheck(this, SearchBar);

    _this = _super4.call(this, props);
    _this.handleFilterTextChange = _this.handleFilterTextChange.bind(_assertThisInitialized(_this));
    _this.handleInStockChange = _this.handleInStockChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SearchBar, [{
    key: "handleFilterTextChange",
    value: function handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
  }, {
    key: "handleInStockChange",
    value: function handleInStockChange(e) {
      this.props.onInStockChange(e.target.checked);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("input", {
        type: "text",
        placeholder: "Search...",
        value: this.props.filterText,
        onChange: this.handleFilterTextChange
      }), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        checked: this.props.inStockOnly,
        onChange: this.handleInStockChange
      }), ' ', "Only show products in stock"));
    }
  }]);

  return SearchBar;
}(React.Component);

var FilterableProductTable = /*#__PURE__*/function (_React$Component5) {
  _inherits(FilterableProductTable, _React$Component5);

  var _super5 = _createSuper(FilterableProductTable);

  function FilterableProductTable(props) {
    var _this2;

    _classCallCheck(this, FilterableProductTable);

    _this2 = _super5.call(this, props);
    _this2.state = {
      filterText: '',
      inStockOnly: false
    };
    _this2.handleFilterTextChange = _this2.handleFilterTextChange.bind(_assertThisInitialized(_this2));
    _this2.handleInStockChange = _this2.handleInStockChange.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(FilterableProductTable, [{
    key: "handleFilterTextChange",
    value: function handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
  }, {
    key: "handleInStockChange",
    value: function handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SearchBar, {
        filterText: this.state.filterText,
        inStockOnly: this.state.inStockOnly,
        onFilterTextChange: this.handleFilterTextChange,
        onInStockChange: this.handleInStockChange
      }), /*#__PURE__*/React.createElement(ProductTable, {
        products: this.props.products,
        filterText: this.state.filterText,
        inStockOnly: this.state.inStockOnly
      }));
    }
  }]);

  return FilterableProductTable;
}(React.Component);

var PRODUCTS = [{
  category: 'Sporting Goods',
  price: '$49.99',
  stocked: true,
  name: 'Football'
}, {
  category: 'Sporting Goods',
  price: '$9.99',
  stocked: true,
  name: 'Baseball'
}, {
  category: 'Sporting Goods',
  price: '$29.99',
  stocked: false,
  name: 'Basketball'
}, {
  category: 'Electronics',
  price: '$99.99',
  stocked: true,
  name: 'iPod Touch'
}, {
  category: 'Electronics',
  price: '$399.99',
  stocked: false,
  name: 'iPhone 5'
}, {
  category: 'Electronics',
  price: '$199.99',
  stocked: true,
  name: 'Nexus 7'
}];
ReactDOM.render( /*#__PURE__*/React.createElement(FilterableProductTable, {
  products: PRODUCTS
}), document.getElementById('container'));

},{}]},{},[1]);
