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

const _imports_0 = publicAssetsURL("/images/thumbnails/ai-physics-tutor.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3>AI Physics Tutor</h3><a href="http://ai-physic-tutor.s3-website-us-east-1.amazonaws.com/" target="_blank"><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "width": "100%" })}"><div class="caption"><p></p></div></a><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AIPhysicsTutor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AIPhysicsTutor = __nuxt_component_0;
  _push(`<!--[--><h1>Physics</h1><div class="row"><div class="col">`);
  _push(ssrRenderComponent(_component_AIPhysicsTutor, null, null, _parent));
  _push(`</div><div class="col">Physics VR: needs to be fixed for web</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/physics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const physics = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { physics as default };
//# sourceMappingURL=physics-Dx6GvzZl.mjs.map
