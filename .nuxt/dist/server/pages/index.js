exports.ids = [1];
exports.modules = {

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("96ec2212", content, true, context)
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatDate; });
const formatDate = date => {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();
  const min = `0${date.getMinutes()}`.slice(-2);
  return `${y}.${m}.${d} ${h}:${min}`;
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCard_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCard_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCard_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCard_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCard_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCard_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "._2et6P{border-radius:8px;box-shadow:0 2px 4px 0 var(--shadow-color);color:inherit;display:block;overflow:hidden;text-decoration:none;height:100%;width:100%;transition:all .2s ease-out}._2et6P:hover{box-shadow:0 4px 8px 0 var(--shadow-color)}.M0sGm{position:relative;width:100%}.M0sGm:before{content:\"\";display:block;padding-top:60%}.M0sGm img{-o-object-fit:cover;object-fit:cover;position:absolute;top:0;left:0;bottom:0;right:0;height:100%;width:100%}.eOi3W{color:var(--sub-color);font-size:.8rem;line-height:1.5;padding:.5rem 1rem}.eOi3W,._3Tzkp{text-align:left}._3Tzkp{padding:0 1rem 1rem;font-size:1rem}", ""]);
// Exports
exports.locals = {
	"card": "_2et6P",
	"thumbnail": "M0sGm",
	"date": "eOi3W",
	"title": "_3Tzkp"
};
module.exports = exports;


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3f4de76b", content, true, context)
};

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/PostCard.vue?vue&type=template&id=a4c552fe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nuxt-link',{class:_vm.$style.card,attrs:{"to":("/posts/" + _vm.id)}},[_c('div',{class:_vm.$style.thumbnail},[_c('img',{attrs:{"src":_vm.computedThumbnail,"alt":(_vm.title + "のサムネイル")}})]),_vm._v(" "),_c('p',{class:_vm.$style.date},[_c('time',{attrs:{"datetime":_vm.updatedAtDate.toISOString()}},[_vm._v(_vm._s(_vm.updatedAtStr))]),_vm._v(" 更新\n  ")]),_vm._v(" "),_c('p',{class:_vm.$style.title},[_vm._v(_vm._s(_vm.title))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/PostCard.vue?vue&type=template&id=a4c552fe&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./src/utils/date.ts
var date = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/PostCard.vue?vue&type=script&lang=ts&


/* harmony default export */ var PostCardvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    thumbnail: {
      type: Object,
      default: null
    },
    updatedAt: {
      type: String,
      required: true
    }
  },
  computed: {
    computedThumbnail() {
      const encodedTitle = encodeURIComponent(this.title);

      if (this.thumbnail !== null) {
        return `${this.thumbnail.url}?w=450&h=300&fit=crop`;
      }

      return `https://i.imgg.app/amon/amon-house/jpg?title=${encodedTitle}`;
    },

    updatedAtDate() {
      return new Date(this.updatedAt);
    },

    updatedAtStr() {
      return Object(date["a" /* formatDate */])(this.updatedAtDate);
    }

  }
}));
// CONCATENATED MODULE: ./src/components/molecules/PostCard.vue?vue&type=script&lang=ts&
 /* harmony default export */ var molecules_PostCardvue_type_script_lang_ts_ = (PostCardvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/molecules/PostCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  molecules_PostCardvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "537dfdc5"
  
)

/* harmony default export */ var PostCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nWCWJ{font-family:Roboto,sans-serif;margin:0 auto;padding:2rem 1rem;min-height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}._3tI9g{min-height:-webkit-fit-content;min-height:-moz-fit-content;min-height:fit-content;max-width:100%}._3IDhB{margin-bottom:2rem}._3eTle,.SBdwn{margin:0 auto 2rem}._3eTle{width:720px;max-width:100%;list-style:none;display:grid;justify-content:center;grid-template-columns:repeat(auto-fit,minmax(224px,1fr));grid-gap:1rem}.Ad3nu{margin:auto;height:100%;width:100%}._2vQGD,._3-5JT{align-items:center;display:flex;flex-wrap:wrap;justify-content:center;list-style:none;margin:0 -.5rem}._1jVtU,._3RZEZ{margin:.5rem;text-align:left}", ""]);
// Exports
exports.locals = {
	"container": "nWCWJ",
	"inner": "_3tI9g",
	"title": "_3IDhB",
	"postList": "_3eTle",
	"postSection": "SBdwn",
	"postItem": "Ad3nu",
	"siteList": "_2vQGD",
	"snsList": "_3-5JT",
	"siteItem": "_1jVtU",
	"snsItem": "_3RZEZ"
};
module.exports = exports;


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=template&id=09b8ffc6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.container},[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$style.inner))+">","</div>",[_vm._ssrNode("<h1"+(_vm._ssrClass(null,_vm.$style.title))+">あもんはうす</h1> "),_vm._ssrNode("<section"+(_vm._ssrClass(null,_vm.$style.postSection))+">","</section>",[_vm._ssrNode("<ul"+(_vm._ssrClass(null,_vm.$style.postList))+">","</ul>",_vm._l((_vm.posts),function(item,i){return _vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.$style.postItem))+">","</li>",[_c('post-card',_vm._b({},'post-card',item,false))],1)}),0),_vm._ssrNode(" "),_c('basic-button',{attrs:{"to":"/posts","data-type":"site","data-size":"small"}},[_vm._v("記事一覧")])],2),_vm._ssrNode(" "),_vm._ssrNode("<ul"+(_vm._ssrClass(null,_vm.$style.snsList))+">","</ul>",_vm._l((_vm.snsItems),function(item,i){return _vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.$style.snsItem))+">","</li>",[_c('basic-button',{attrs:{"href":item.url,"data-type":item.type}},[_vm._v(_vm._s(item.name))])],1)}),0),_vm._ssrNode(" "),_vm._ssrNode("<ul"+(_vm._ssrClass(null,_vm.$style.siteList))+">","</ul>",_vm._l((_vm.siteItems),function(item,i){return _vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.$style.siteItem))+">","</li>",[_c('basic-button',{attrs:{"href":item.url,"data-type":"site","data-size":"small"}},[_vm._v(_vm._s(item.name))])],1)}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/index.vue?vue&type=template&id=09b8ffc6&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./src/components/molecules/PostCard.vue + 4 modules
var PostCard = __webpack_require__(37);

// EXTERNAL MODULE: ./src/components/atoms/BasicButton.vue + 4 modules
var BasicButton = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=script&lang=ts&



/* harmony default export */ var pagesvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  components: {
    PostCard: PostCard["a" /* default */],
    BasicButton: BasicButton["a" /* default */]
  },

  async asyncData({
    $axios,
    query,
    error
  }) {
    const q = {
      draftKey: typeof query.draftKey === 'string' ? query.draftKey : null,
      limit: 3,
      fields: ['id', 'title', 'thumbnail', 'updatedAt'].join(',')
    };
    const qs = Object.entries(q).filter(q => q[1] !== null).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&');
    const url = `https://api.amon.house/v1/posts?${qs}`;
    const response = await $axios.get(url).catch(error => {
      if (error.response) {
        return {
          data: null,
          status: error.response.status
        };
      }

      return {
        data: null,
        status: 500
      };
    });

    if (response.data === null) {
      error({
        statusCode: response.status,
        message: ''
      });
      return;
    }

    return {
      posts: response.data.contents
    };
  },

  data() {
    return {
      snsItems: [{
        name: 'Twitter',
        type: 'twitter',
        url: 'https://twitter.com/amotarao'
      }, {
        name: 'GitHub',
        type: 'github',
        url: 'https://github.com/amotarao'
      }],
      siteItems: [{
        name: 'ゆくくる',
        url: 'https://yukukuru.app'
      }, {
        name: '東京メトロ、遅れてる？',
        url: 'https://metro.chikoku.net'
      }]
    };
  },

  computed: {
    canonicalUrl() {
      return `https://amon.house/`;
    }

  },

  head() {
    const canonicalUrl = this.canonicalUrl;
    return {
      link: [{
        hid: 'canonical',
        rel: 'canonical',
        href: canonicalUrl
      }]
    };
  }

}));
// CONCATENATED MODULE: ./src/pages/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_pagesvue_type_script_lang_ts_ = (pagesvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_pagesvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "15985b3e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map