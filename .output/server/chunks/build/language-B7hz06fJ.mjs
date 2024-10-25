import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0$b = publicAssetsURL("/images/thumbnails/unpetrify-animals.jpg");
const _sfc_main$c = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3>Unpetrify Animals</h3><a href="https://sunshine-english-school-actvities.s3.af-south-1.amazonaws.com/MC004/index.html" target="_blank"><img${ssrRenderAttr("src", _imports_0$b)} style="${ssrRenderStyle({ "width": "100%" })}"><div class="caption"><p></p></div></a><!--]-->`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UnpetrifyAnimals.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const _imports_0$a = publicAssetsURL("/images/thumbnails/version-four-web.jfif");
const _sfc_main$b = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3>Animal Vocab</h3><a href="https://sunshine-english-school-actvities.s3.af-south-1.amazonaws.com/Adventure001/index.html" target="_blank"><img${ssrRenderAttr("src", _imports_0$a)} style="${ssrRenderStyle({ "width": "100%" })}"><div class="caption"><p></p></div></a><!--]-->`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VersionFourWeb.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _imports_0$9 = publicAssetsURL("/images/thumbnails/forest-vocab.jfif");
const _sfc_main$a = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3>Forest Vocab</h3><a href="https://sunshine-english-school-actvities.s3.af-south-1.amazonaws.com/MC002/index.html" target="_blank"><img${ssrRenderAttr("src", _imports_0$9)} style="${ssrRenderStyle({ "width": "100%" })}"><div class="caption"><p></p></div></a><!--]-->`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ForestVocab.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _imports_0$8 = publicAssetsURL("/images/thumbnails/jungle-vocab.jfif");
const _sfc_main$9 = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3>Jungle Vocab</h3><a href="https://sunshine-english-school-actvities.s3.af-south-1.amazonaws.com/MC003/index.html" target="_blank"><img${ssrRenderAttr("src", _imports_0$8)} style="${ssrRenderStyle({ "width": "100%" })}"><div class="caption"><p></p></div></a><!--]-->`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/JungleVocab.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _imports_0$7 = publicAssetsURL("/images/thumbnails/chase-spelling.gif");
const _sfc_main$8 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3>Chase Spelling</h3><a href="https://sunshine-english-school-actvities.s3.af-south-1.amazonaws.com/ChaseGame/index.html" target="_blank"><img${ssrRenderAttr("src", _imports_0$7)} style="${ssrRenderStyle({ "width": "100%" })}"><div class="caption"><p></p></div></a><!--]-->`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ChaseSpelling.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _imports_0$6 = publicAssetsURL("/images/thumbnails/drag-and-drop-spelling.jfif");
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3>Drag And Drop Spelling</h3><a href="https://sunshine-english-school-actvities.s3.af-south-1.amazonaws.com/DragAndDropSpelling/index.html" target="_blank"><img${ssrRenderAttr("src", _imports_0$6)} style="${ssrRenderStyle({ "width": "100%" })}"><div class="caption"><p></p></div></a><!--]-->`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DragAndDropSpelling.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _imports_0$5 = publicAssetsURL("/images/thumbnails/spelling-bee.jfif");
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3>Spelling Bee</h3><a href="https://sunshine-english-school-actvities.s3.af-south-1.amazonaws.com/SpellingBee/index.html" target="_blank"><img${ssrRenderAttr("src", _imports_0$5)} style="${ssrRenderStyle({ "width": "100%" })}"><div class="caption"><p></p></div></a><!--]-->`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SpellingBee.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _imports_0$4 = publicAssetsURL("/images/thumbnails/version-five.jpg");
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3>Version 5</h3><a href="http://version-five.s3-website-us-east-1.amazonaws.com/" target="_blank"><img${ssrRenderAttr("src", _imports_0$4)} style="${ssrRenderStyle({ "width": "100%" })}"><div class="caption"><p></p></div></a><!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VersionFive.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0$3 = publicAssetsURL("/images/thumbnails/version-seven.jpg");
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3>Version 7</h3><a href="http://version-seven.s3-website-us-east-1.amazonaws.com" target="_blank"><img${ssrRenderAttr("src", _imports_0$3)} style="${ssrRenderStyle({ "width": "100%" })}"><div class="caption"><p></p></div></a><!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VersionSeven.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0$2 = publicAssetsURL("/images/thumbnails/version-three.jpg");
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3>Version 3</h3><a href="https://sunshine-english-school-actvities.s3.af-south-1.amazonaws.com/MC001/index.html" target="_blank"><img${ssrRenderAttr("src", _imports_0$2)} style="${ssrRenderStyle({ "width": "100%" })}"><div class="caption"><p></p></div></a><!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VersionThree.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$1 = publicAssetsURL("/images/thumbnails/word-card-3d-portrait.jpg");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3>Word Card 3d Portrait Game</h3><a href="http://word-card-3d-portrait-game.s3-website-us-east-1.amazonaws.com" target="_blank"><img${ssrRenderAttr("src", _imports_0$1)} style="${ssrRenderStyle({ "width": "100%" })}"><div class="caption"><p></p></div></a><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WordCard3dPortrait.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = publicAssetsURL("/images/thumbnails/version-six.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3>Version 6</h3><a href="http://version-six.s3-website-us-east-1.amazonaws.com" target="_blank"><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "width": "100%" })}"><div class="caption"><p></p></div></a><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VersionSix.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UnpetrifyAnimals = __nuxt_component_0;
  const _component_VersionFourWeb = __nuxt_component_1;
  const _component_ForestVocab = __nuxt_component_2;
  const _component_JungleVocab = __nuxt_component_3;
  const _component_ChaseSpelling = __nuxt_component_4;
  const _component_DragAndDropSpelling = __nuxt_component_5;
  const _component_SpellingBee = __nuxt_component_6;
  const _component_VersionFive = __nuxt_component_7;
  const _component_VersionSeven = __nuxt_component_8;
  const _component_VersionThree = __nuxt_component_9;
  const _component_WordCard3dPortrait = __nuxt_component_10;
  const _component_VersionSix = __nuxt_component_11;
  _push(`<!--[--><h1>Language</h1><h2>Minigames</h2><div class="row"><div class="col">`);
  _push(ssrRenderComponent(_component_UnpetrifyAnimals, null, null, _parent));
  _push(`</div><div class="col">`);
  _push(ssrRenderComponent(_component_VersionFourWeb, null, null, _parent));
  _push(`</div></div><div class="row"><div class="col">`);
  _push(ssrRenderComponent(_component_ForestVocab, null, null, _parent));
  _push(`</div><div class="col">`);
  _push(ssrRenderComponent(_component_JungleVocab, null, null, _parent));
  _push(`</div></div><div class="row"><div class="col">`);
  _push(ssrRenderComponent(_component_ChaseSpelling, null, null, _parent));
  _push(`</div><div class="col">`);
  _push(ssrRenderComponent(_component_DragAndDropSpelling, null, null, _parent));
  _push(`</div></div><div class="row"><div class="col">V4: needs to be fixed</div><div class="col">`);
  _push(ssrRenderComponent(_component_SpellingBee, null, null, _parent));
  _push(`</div></div><h2>Magic Words series</h2><div class="row"><div class="col">`);
  _push(ssrRenderComponent(_component_VersionFive, null, null, _parent));
  _push(`</div><div class="col">`);
  _push(ssrRenderComponent(_component_VersionSeven, null, null, _parent));
  _push(`</div></div><div class="row"><div class="col"></div><div class="col">`);
  _push(ssrRenderComponent(_component_VersionThree, null, null, _parent));
  _push(`</div></div><div class="row"><div class="col">`);
  _push(ssrRenderComponent(_component_WordCard3dPortrait, null, null, _parent));
  _push(`</div><div class="col">`);
  _push(ssrRenderComponent(_component_VersionSix, null, null, _parent));
  _push(`</div></div><h2>Conlang games</h2><div class="row"><div class="col">Audio Bliss game: needs to be fixed</div><div class="col">Keyboard Bliss game: needs to be fixed</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/language.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const language = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { language as default };
//# sourceMappingURL=language-B7hz06fJ.mjs.map
