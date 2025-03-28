/*! For license information please see components-shop-basketBtn-basketBtn-stories.733eaa75.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[293],{"./src/components/shop/basketBtn/basketBtn.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,countEmpty:()=>countEmpty,countNotEmpty:()=>countNotEmpty,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _BasketBtn__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/shop/basketBtn/BasketBtn.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"BasketBtn",component:_BasketBtn__WEBPACK_IMPORTED_MODULE_0__.Z};var countEmpty={render:function render(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_BasketBtn__WEBPACK_IMPORTED_MODULE_0__.Z,_objectSpread({},args))},args:{count:0}},countNotEmpty={render:function render(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_BasketBtn__WEBPACK_IMPORTED_MODULE_0__.Z,_objectSpread({},args))},args:{count:2}};countEmpty.parameters={...countEmpty.parameters,docs:{...countEmpty.parameters?.docs,source:{originalSource:"{\n  render: (args: BasketBtnProps) => <BasketBtn {...args} />,\n  args: {\n    count: 0\n  }\n}",...countEmpty.parameters?.docs?.source}}},countNotEmpty.parameters={...countNotEmpty.parameters,docs:{...countNotEmpty.parameters?.docs,source:{originalSource:"{\n  render: (args: BasketBtnProps) => <BasketBtn {...args} />,\n  args: {\n    count: 2\n  }\n}",...countNotEmpty.parameters?.docs?.source}}};const __namedExportsOrder=["countEmpty","countNotEmpty"]},"./src/components/shop/basketBtn/BasketBtn.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),BasketBtn=function BasketBtn(_ref){var count=_ref.count;return count>0?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{children:"-"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"text",value:count}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{children:"+"})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{children:"В корзину"})};const __WEBPACK_DEFAULT_EXPORT__=BasketBtn;try{BasketBtn.displayName="BasketBtn",BasketBtn.__docgenInfo={description:"",displayName:"BasketBtn",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/shop/basketBtn/BasketBtn.tsx#BasketBtn"]={docgenInfo:BasketBtn.__docgenInfo,name:"BasketBtn",path:"src/components/shop/basketBtn/BasketBtn.tsx#BasketBtn"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);