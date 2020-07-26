exports.ids = [2];
exports.modules = {

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

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("c029df04", content, true, context)
};

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPage_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPage_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPage_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPage_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPage_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPage_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "._1iNOr{margin:auto;padding:120px 16px;max-width:100%;width:640px}._3NtUv{font-size:2rem;margin-bottom:2rem}.Y1cTa{display:flex;flex-wrap:wrap;color:var(--sub-color);font-size:.9rem;line-height:1.5;margin-bottom:4rem}.Y1cTa span{display:block}._2fS-7{margin:0 .5em}._2CUk4{font-size:1rem;line-height:1.7}._2CUk4>*+*{margin-top:24px}._2CUk4 a{color:inherit}._2CUk4 a[target=_blank]:after{background:var(--text-color);-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'/%3E%3C/svg%3E\");-webkit-mask-size:contain;mask-size:contain;-webkit-mask-position:center;mask-position:center;content:\"\";display:inline-block;width:1em;height:1em;margin-left:.1em;transform:translateY(.125em)}._2CUk4 img{max-width:100%;height:auto}._2e3jw{margin-top:4rem;display:flex}._1wlTm{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--bg2-color);border-radius:4px;color:var(--text-color);height:48px;width:48px;margin-right:1rem}._1wlTm[aria-disabled=true]{cursor:not-allowed}._1wlTm svg{fill:currentColor}._1wlTm[data-type=twitter]{background:#1da1f2}._1wlTm[data-type=twitter] svg{fill:#fff;height:30px;width:30px}", ""]);
// Exports
exports.locals = {
	"wrapper": "_1iNOr",
	"title": "_3NtUv",
	"date": "Y1cTa",
	"separator": "_2fS-7",
	"contents": "_2CUk4",
	"footer": "_2e3jw",
	"share": "_1wlTm"
};
module.exports = exports;


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/posts/_id.vue?vue&type=template&id=6c3cac5f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('post-page',_vm._b({attrs:{"url":_vm.canonicalUrl}},'post-page',_vm.postData,false))}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/posts/_id.vue?vue&type=template&id=6c3cac5f&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/PostPage.vue?vue&type=template&id=1a61f126&
var PostPagevue_type_template_id_1a61f126_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{class:_vm.$style.wrapper},[_vm._ssrNode("<h1"+(_vm._ssrClass(null,_vm.$style.title))+">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h1> <div"+(_vm._ssrClass(null,_vm.$style.date))+"><span><time"+(_vm._ssrAttr("datetime",_vm.createdAt.toISOString()))+">"+_vm._ssrEscape(_vm._s(_vm.createdAtStr)+" 投稿")+"</time></span> "+((_vm.isUpdated)?("<span"+(_vm._ssrClass(null,_vm.$style.separator))+">/</span> <span><time"+(_vm._ssrAttr("datetime",_vm.updatedAt.toISOString()))+">"+_vm._ssrEscape(_vm._s(_vm.updatedAtStr)+" 更新")+"</time></span>"):"<!---->")+"</div> <section"+(_vm._ssrClass(null,_vm.$style.contents))+">"+(_vm._s(_vm.body))+"</section> <footer"+(_vm._ssrClass(null,_vm.$style.footer))+"><a"+(_vm._ssrAttr("href",_vm.tweetUrl))+" target=\"_blank\" rel=\"noopener\" aria-label=\"ツイートする\" data-type=\"twitter\""+(_vm._ssrClass(null,_vm.$style.share))+"><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"400\" width=\"400\" viewBox=\"0 0 400 400\"><path fill=\"none\" d=\"M0 0h400v400H0z\"></path> <path d=\"M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 00325 122.47a102.38 102.38 0 01-29.46 8.07 51.47 51.47 0 0022.55-28.37 102.79 102.79 0 01-32.57 12.45 51.34 51.34 0 00-87.41 46.78A145.62 145.62 0 0192.4 107.81a51.33 51.33 0 0015.88 68.47A50.91 50.91 0 0185 169.86v.65a51.31 51.31 0 0041.15 50.28 51.21 51.21 0 01-23.16.88 51.35 51.35 0 0047.92 35.62 102.92 102.92 0 01-63.7 22 104.41 104.41 0 01-12.21-.74 145.21 145.21 0 0078.62 23\"></path></svg></a> "+((_vm.isSupportedShare)?("<button aria-label=\"シェアする\" data-type=\"shareapi\""+(_vm._ssrClass(null,_vm.$style.share))+"><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"></path> <path d=\"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z\"></path></svg></button>"):"<!---->")+"</footer>")])}
var PostPagevue_type_template_id_1a61f126_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/pages/PostPage.vue?vue&type=template&id=1a61f126&

// EXTERNAL MODULE: ./src/utils/date.ts
var date = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/PostPage.vue?vue&type=script&lang=ts&


/* harmony default export */ var PostPagevue_type_script_lang_ts_ = (external_vue_default.a.extend({
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      required: true
    },
    introduction: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      required: true
    },
    updatedAt: {
      type: Date,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      isSupportedShare: false
    };
  },

  computed: {
    createdAtStr() {
      return Object(date["a" /* formatDate */])(this.createdAt);
    },

    updatedAtStr() {
      return Object(date["a" /* formatDate */])(this.updatedAt);
    },

    isUpdated() {
      return this.createdAtStr !== this.updatedAtStr;
    },

    tweetUrl() {
      const url = encodeURIComponent(this.url);
      return `https://twitter.com/intent/tweet?url=${url}&via=amotarao`;
    }

  },

  mounted() {
    this.isSupportedShare = 'share' in window.navigator;
  },

  methods: {
    async share() {
      await window.navigator.share({
        title: this.title,
        url: this.url
      });
    }

  }
}));
// CONCATENATED MODULE: ./src/components/pages/PostPage.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_PostPagevue_type_script_lang_ts_ = (PostPagevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/pages/PostPage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_PostPagevue_type_script_lang_ts_,
  PostPagevue_type_template_id_1a61f126_render,
  PostPagevue_type_template_id_1a61f126_staticRenderFns,
  false,
  injectStyles,
  null,
  "d4c490e6"
  
)

/* harmony default export */ var PostPage = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/posts/_id.vue?vue&type=script&lang=ts&


/* harmony default export */ var _idvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  components: {
    PostPage: PostPage
  },

  async asyncData({
    $axios,
    params,
    query,
    error
  }) {
    const q = {
      draftKey: typeof query.draftKey === 'string' ? query.draftKey : null
    };
    const qs = Object.entries(q).filter(q => q[1] !== null).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&');
    const url = `https://api.amon.house/v1/posts/${params.id}?${qs}`;
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
      post: response.data
    };
  },

  computed: {
    postData() {
      const post = this.post;
      return {
        id: post.id,
        title: post.title,
        introduction: post.introduction,
        body: post.body,
        thumbnail: 'thumbnail' in post && post.thumbnail ? post.thumbnail.url : null,
        createdAt: new Date(post.createdAt),
        updatedAt: new Date(post.updatedAt)
      };
    },

    canonicalUrl() {
      return `https://amon.house/posts/${this.$route.params.id}`;
    }

  },

  head() {
    const postData = this.postData;
    const canonicalUrl = this.canonicalUrl;
    const encodedTitle = encodeURIComponent(postData.title);
    const thumbnail = postData.thumbnail ? `${postData.thumbnail}?w=1200&h=630&fit=crop` : `https://i.imgg.app/amon/amon-house/jpg?title=${encodedTitle}`;
    return {
      title: postData.title,
      link: [{
        hid: 'canonical',
        rel: 'canonical',
        href: canonicalUrl
      }],
      meta: [{
        hid: 'og:type',
        property: 'og:type',
        content: 'article'
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: canonicalUrl
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: postData.title
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: postData.introduction
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: thumbnail
      }, {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '1200'
      }, {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '630'
      }, {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      }],
      __dangerouslyDisableSanitizersByTagID: {
        'og:image': ['content']
      }
    };
  }

}));
// CONCATENATED MODULE: ./src/pages/posts/_id.vue?vue&type=script&lang=ts&
 /* harmony default export */ var posts_idvue_type_script_lang_ts_ = (_idvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/pages/posts/_id.vue





/* normalize component */

var _id_component = Object(componentNormalizer["a" /* default */])(
  posts_idvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "06926ce6"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (_id_component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map