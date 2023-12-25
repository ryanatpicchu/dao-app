import { aP as requireSecp256k1 } from "./index.aa258704.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var secp256k1Exports = requireSecp256k1();
const secp256k1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: secp256k1Exports
}, [secp256k1Exports]);
export {
  secp256k1 as s
};
