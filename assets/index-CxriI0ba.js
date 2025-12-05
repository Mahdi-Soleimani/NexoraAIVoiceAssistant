(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Yd,Jd;function Kd(){return{geminiUrl:Yd,vertexUrl:Jd}}function Zd(n,e,t,i){var o,r;if(!(n!=null&&n.baseUrl)){const s=Kd();return e?(o=s.vertexUrl)!==null&&o!==void 0?o:t:(r=s.geminiUrl)!==null&&r!==void 0?r:i}return n.baseUrl}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Dn{}function Te(n,e){const t=/\{([^}]+)\}/g;return n.replace(t,(i,o)=>{if(Object.prototype.hasOwnProperty.call(e,o)){const r=e[o];return r!=null?String(r):""}else throw new Error(`Key '${o}' not found in valueMap.`)})}function d(n,e,t){for(let r=0;r<e.length-1;r++){const s=e[r];if(s.endsWith("[]")){const a=s.slice(0,-2);if(!(a in n))if(Array.isArray(t))n[a]=Array.from({length:t.length},()=>({}));else throw new Error(`Value must be a list given an array path ${s}`);if(Array.isArray(n[a])){const u=n[a];if(Array.isArray(t))for(let c=0;c<u.length;c++){const f=u[c];d(f,e.slice(r+1),t[c])}else for(const c of u)d(c,e.slice(r+1),t)}return}else if(s.endsWith("[0]")){const a=s.slice(0,-3);a in n||(n[a]=[{}]);const u=n[a];d(u[0],e.slice(r+1),t);return}(!n[s]||typeof n[s]!="object")&&(n[s]={}),n=n[s]}const i=e[e.length-1],o=n[i];if(o!==void 0){if(!t||typeof t=="object"&&Object.keys(t).length===0||t===o)return;if(typeof o=="object"&&typeof t=="object"&&o!==null&&t!==null)Object.assign(o,t);else throw new Error(`Cannot set value for an existing key. Key: ${i}`)}else i==="_self"&&typeof t=="object"&&t!==null&&!Array.isArray(t)?Object.assign(n,t):n[i]=t}function l(n,e,t=void 0){try{if(e.length===1&&e[0]==="_self")return n;for(let i=0;i<e.length;i++){if(typeof n!="object"||n===null)return t;const o=e[i];if(o.endsWith("[]")){const r=o.slice(0,-2);if(r in n){const s=n[r];return Array.isArray(s)?s.map(a=>l(a,e.slice(i+1),t)):t}else return t}else n=n[o]}return n}catch(i){if(i instanceof TypeError)return t;throw i}}function Qd(n,e){for(const[t,i]of Object.entries(e)){const o=t.split("."),r=i.split("."),s=new Set;let a=-1;for(let u=0;u<o.length;u++)if(o[u]==="*"){a=u;break}if(a!==-1&&r.length>a)for(let u=a;u<r.length;u++){const c=r[u];c!=="*"&&!c.endsWith("[]")&&!c.endsWith("[0]")&&s.add(c)}Ts(n,o,r,0,s)}}function Ts(n,e,t,i,o){if(i>=e.length||typeof n!="object"||n===null)return;const r=e[i];if(r.endsWith("[]")){const s=r.slice(0,-2),a=n;if(s in a&&Array.isArray(a[s]))for(const u of a[s])Ts(u,e,t,i+1,o)}else if(r==="*"){if(typeof n=="object"&&n!==null&&!Array.isArray(n)){const s=n,a=Object.keys(s).filter(c=>!c.startsWith("_")&&!o.has(c)),u={};for(const c of a)u[c]=s[c];for(const[c,f]of Object.entries(u)){const h=[];for(const p of t.slice(i))p==="*"?h.push(c):h.push(p);d(s,h,f)}for(const c of a)delete s[c]}}else{const s=n;r in s&&Ts(s[r],e,t,i+1,o)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ya(n){if(typeof n!="string")throw new Error("fromImageBytes must be a string");return n}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function jd(n){const e={},t=l(n,["operationName"]);t!=null&&d(e,["operationName"],t);const i=l(n,["resourceName"]);return i!=null&&d(e,["_url","resourceName"],i),e}function ef(n){const e={},t=l(n,["name"]);t!=null&&d(e,["name"],t);const i=l(n,["metadata"]);i!=null&&d(e,["metadata"],i);const o=l(n,["done"]);o!=null&&d(e,["done"],o);const r=l(n,["error"]);r!=null&&d(e,["error"],r);const s=l(n,["response","generateVideoResponse"]);return s!=null&&d(e,["response"],nf(s)),e}function tf(n){const e={},t=l(n,["name"]);t!=null&&d(e,["name"],t);const i=l(n,["metadata"]);i!=null&&d(e,["metadata"],i);const o=l(n,["done"]);o!=null&&d(e,["done"],o);const r=l(n,["error"]);r!=null&&d(e,["error"],r);const s=l(n,["response"]);return s!=null&&d(e,["response"],of(s)),e}function nf(n){const e={},t=l(n,["generatedSamples"]);if(t!=null){let r=t;Array.isArray(r)&&(r=r.map(s=>rf(s))),d(e,["generatedVideos"],r)}const i=l(n,["raiMediaFilteredCount"]);i!=null&&d(e,["raiMediaFilteredCount"],i);const o=l(n,["raiMediaFilteredReasons"]);return o!=null&&d(e,["raiMediaFilteredReasons"],o),e}function of(n){const e={},t=l(n,["videos"]);if(t!=null){let r=t;Array.isArray(r)&&(r=r.map(s=>sf(s))),d(e,["generatedVideos"],r)}const i=l(n,["raiMediaFilteredCount"]);i!=null&&d(e,["raiMediaFilteredCount"],i);const o=l(n,["raiMediaFilteredReasons"]);return o!=null&&d(e,["raiMediaFilteredReasons"],o),e}function rf(n){const e={},t=l(n,["video"]);return t!=null&&d(e,["video"],ff(t)),e}function sf(n){const e={},t=l(n,["_self"]);return t!=null&&d(e,["video"],hf(t)),e}function af(n){const e={},t=l(n,["operationName"]);return t!=null&&d(e,["_url","operationName"],t),e}function lf(n){const e={},t=l(n,["operationName"]);return t!=null&&d(e,["_url","operationName"],t),e}function uf(n){const e={},t=l(n,["name"]);t!=null&&d(e,["name"],t);const i=l(n,["metadata"]);i!=null&&d(e,["metadata"],i);const o=l(n,["done"]);o!=null&&d(e,["done"],o);const r=l(n,["error"]);r!=null&&d(e,["error"],r);const s=l(n,["response"]);return s!=null&&d(e,["response"],cf(s)),e}function cf(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["parent"]);i!=null&&d(e,["parent"],i);const o=l(n,["documentName"]);return o!=null&&d(e,["documentName"],o),e}function Ic(n){const e={},t=l(n,["name"]);t!=null&&d(e,["name"],t);const i=l(n,["metadata"]);i!=null&&d(e,["metadata"],i);const o=l(n,["done"]);o!=null&&d(e,["done"],o);const r=l(n,["error"]);r!=null&&d(e,["error"],r);const s=l(n,["response"]);return s!=null&&d(e,["response"],df(s)),e}function df(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["parent"]);i!=null&&d(e,["parent"],i);const o=l(n,["documentName"]);return o!=null&&d(e,["documentName"],o),e}function ff(n){const e={},t=l(n,["uri"]);t!=null&&d(e,["uri"],t);const i=l(n,["encodedVideo"]);i!=null&&d(e,["videoBytes"],ya(i));const o=l(n,["encoding"]);return o!=null&&d(e,["mimeType"],o),e}function hf(n){const e={},t=l(n,["gcsUri"]);t!=null&&d(e,["uri"],t);const i=l(n,["bytesBase64Encoded"]);i!=null&&d(e,["videoBytes"],ya(i));const o=l(n,["mimeType"]);return o!=null&&d(e,["mimeType"],o),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Ja;(function(n){n.OUTCOME_UNSPECIFIED="OUTCOME_UNSPECIFIED",n.OUTCOME_OK="OUTCOME_OK",n.OUTCOME_FAILED="OUTCOME_FAILED",n.OUTCOME_DEADLINE_EXCEEDED="OUTCOME_DEADLINE_EXCEEDED"})(Ja||(Ja={}));var Ka;(function(n){n.LANGUAGE_UNSPECIFIED="LANGUAGE_UNSPECIFIED",n.PYTHON="PYTHON"})(Ka||(Ka={}));var Za;(function(n){n.SCHEDULING_UNSPECIFIED="SCHEDULING_UNSPECIFIED",n.SILENT="SILENT",n.WHEN_IDLE="WHEN_IDLE",n.INTERRUPT="INTERRUPT"})(Za||(Za={}));var Wn;(function(n){n.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",n.STRING="STRING",n.NUMBER="NUMBER",n.INTEGER="INTEGER",n.BOOLEAN="BOOLEAN",n.ARRAY="ARRAY",n.OBJECT="OBJECT",n.NULL="NULL"})(Wn||(Wn={}));var Qa;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.MODE_DYNAMIC="MODE_DYNAMIC"})(Qa||(Qa={}));var ja;(function(n){n.API_SPEC_UNSPECIFIED="API_SPEC_UNSPECIFIED",n.SIMPLE_SEARCH="SIMPLE_SEARCH",n.ELASTIC_SEARCH="ELASTIC_SEARCH"})(ja||(ja={}));var el;(function(n){n.AUTH_TYPE_UNSPECIFIED="AUTH_TYPE_UNSPECIFIED",n.NO_AUTH="NO_AUTH",n.API_KEY_AUTH="API_KEY_AUTH",n.HTTP_BASIC_AUTH="HTTP_BASIC_AUTH",n.GOOGLE_SERVICE_ACCOUNT_AUTH="GOOGLE_SERVICE_ACCOUNT_AUTH",n.OAUTH="OAUTH",n.OIDC_AUTH="OIDC_AUTH"})(el||(el={}));var tl;(function(n){n.HTTP_IN_UNSPECIFIED="HTTP_IN_UNSPECIFIED",n.HTTP_IN_QUERY="HTTP_IN_QUERY",n.HTTP_IN_HEADER="HTTP_IN_HEADER",n.HTTP_IN_PATH="HTTP_IN_PATH",n.HTTP_IN_BODY="HTTP_IN_BODY",n.HTTP_IN_COOKIE="HTTP_IN_COOKIE"})(tl||(tl={}));var nl;(function(n){n.PHISH_BLOCK_THRESHOLD_UNSPECIFIED="PHISH_BLOCK_THRESHOLD_UNSPECIFIED",n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_HIGH_AND_ABOVE="BLOCK_HIGH_AND_ABOVE",n.BLOCK_HIGHER_AND_ABOVE="BLOCK_HIGHER_AND_ABOVE",n.BLOCK_VERY_HIGH_AND_ABOVE="BLOCK_VERY_HIGH_AND_ABOVE",n.BLOCK_ONLY_EXTREMELY_HIGH="BLOCK_ONLY_EXTREMELY_HIGH"})(nl||(nl={}));var il;(function(n){n.THINKING_LEVEL_UNSPECIFIED="THINKING_LEVEL_UNSPECIFIED",n.LOW="LOW",n.HIGH="HIGH"})(il||(il={}));var ol;(function(n){n.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",n.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",n.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",n.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",n.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",n.HARM_CATEGORY_IMAGE_HATE="HARM_CATEGORY_IMAGE_HATE",n.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT="HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT",n.HARM_CATEGORY_IMAGE_HARASSMENT="HARM_CATEGORY_IMAGE_HARASSMENT",n.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT="HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_JAILBREAK="HARM_CATEGORY_JAILBREAK"})(ol||(ol={}));var rl;(function(n){n.HARM_BLOCK_METHOD_UNSPECIFIED="HARM_BLOCK_METHOD_UNSPECIFIED",n.SEVERITY="SEVERITY",n.PROBABILITY="PROBABILITY"})(rl||(rl={}));var sl;(function(n){n.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE",n.OFF="OFF"})(sl||(sl={}));var al;(function(n){n.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",n.STOP="STOP",n.MAX_TOKENS="MAX_TOKENS",n.SAFETY="SAFETY",n.RECITATION="RECITATION",n.LANGUAGE="LANGUAGE",n.OTHER="OTHER",n.BLOCKLIST="BLOCKLIST",n.PROHIBITED_CONTENT="PROHIBITED_CONTENT",n.SPII="SPII",n.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",n.IMAGE_SAFETY="IMAGE_SAFETY",n.UNEXPECTED_TOOL_CALL="UNEXPECTED_TOOL_CALL",n.IMAGE_PROHIBITED_CONTENT="IMAGE_PROHIBITED_CONTENT",n.NO_IMAGE="NO_IMAGE"})(al||(al={}));var ll;(function(n){n.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",n.NEGLIGIBLE="NEGLIGIBLE",n.LOW="LOW",n.MEDIUM="MEDIUM",n.HIGH="HIGH"})(ll||(ll={}));var ul;(function(n){n.HARM_SEVERITY_UNSPECIFIED="HARM_SEVERITY_UNSPECIFIED",n.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",n.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",n.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",n.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(ul||(ul={}));var cl;(function(n){n.URL_RETRIEVAL_STATUS_UNSPECIFIED="URL_RETRIEVAL_STATUS_UNSPECIFIED",n.URL_RETRIEVAL_STATUS_SUCCESS="URL_RETRIEVAL_STATUS_SUCCESS",n.URL_RETRIEVAL_STATUS_ERROR="URL_RETRIEVAL_STATUS_ERROR",n.URL_RETRIEVAL_STATUS_PAYWALL="URL_RETRIEVAL_STATUS_PAYWALL",n.URL_RETRIEVAL_STATUS_UNSAFE="URL_RETRIEVAL_STATUS_UNSAFE"})(cl||(cl={}));var dl;(function(n){n.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",n.SAFETY="SAFETY",n.OTHER="OTHER",n.BLOCKLIST="BLOCKLIST",n.PROHIBITED_CONTENT="PROHIBITED_CONTENT",n.IMAGE_SAFETY="IMAGE_SAFETY",n.MODEL_ARMOR="MODEL_ARMOR",n.JAILBREAK="JAILBREAK"})(dl||(dl={}));var fl;(function(n){n.TRAFFIC_TYPE_UNSPECIFIED="TRAFFIC_TYPE_UNSPECIFIED",n.ON_DEMAND="ON_DEMAND",n.PROVISIONED_THROUGHPUT="PROVISIONED_THROUGHPUT"})(fl||(fl={}));var vo;(function(n){n.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",n.TEXT="TEXT",n.IMAGE="IMAGE",n.AUDIO="AUDIO"})(vo||(vo={}));var hl;(function(n){n.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",n.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",n.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",n.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(hl||(hl={}));var pl;(function(n){n.TUNING_MODE_UNSPECIFIED="TUNING_MODE_UNSPECIFIED",n.TUNING_MODE_FULL="TUNING_MODE_FULL",n.TUNING_MODE_PEFT_ADAPTER="TUNING_MODE_PEFT_ADAPTER"})(pl||(pl={}));var ml;(function(n){n.ADAPTER_SIZE_UNSPECIFIED="ADAPTER_SIZE_UNSPECIFIED",n.ADAPTER_SIZE_ONE="ADAPTER_SIZE_ONE",n.ADAPTER_SIZE_TWO="ADAPTER_SIZE_TWO",n.ADAPTER_SIZE_FOUR="ADAPTER_SIZE_FOUR",n.ADAPTER_SIZE_EIGHT="ADAPTER_SIZE_EIGHT",n.ADAPTER_SIZE_SIXTEEN="ADAPTER_SIZE_SIXTEEN",n.ADAPTER_SIZE_THIRTY_TWO="ADAPTER_SIZE_THIRTY_TWO"})(ml||(ml={}));var xs;(function(n){n.JOB_STATE_UNSPECIFIED="JOB_STATE_UNSPECIFIED",n.JOB_STATE_QUEUED="JOB_STATE_QUEUED",n.JOB_STATE_PENDING="JOB_STATE_PENDING",n.JOB_STATE_RUNNING="JOB_STATE_RUNNING",n.JOB_STATE_SUCCEEDED="JOB_STATE_SUCCEEDED",n.JOB_STATE_FAILED="JOB_STATE_FAILED",n.JOB_STATE_CANCELLING="JOB_STATE_CANCELLING",n.JOB_STATE_CANCELLED="JOB_STATE_CANCELLED",n.JOB_STATE_PAUSED="JOB_STATE_PAUSED",n.JOB_STATE_EXPIRED="JOB_STATE_EXPIRED",n.JOB_STATE_UPDATING="JOB_STATE_UPDATING",n.JOB_STATE_PARTIALLY_SUCCEEDED="JOB_STATE_PARTIALLY_SUCCEEDED"})(xs||(xs={}));var gl;(function(n){n.TUNING_TASK_UNSPECIFIED="TUNING_TASK_UNSPECIFIED",n.TUNING_TASK_I2V="TUNING_TASK_I2V",n.TUNING_TASK_T2V="TUNING_TASK_T2V",n.TUNING_TASK_R2V="TUNING_TASK_R2V"})(gl||(gl={}));var _l;(function(n){n.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",n.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",n.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",n.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(_l||(_l={}));var vl;(function(n){n.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED="FEATURE_SELECTION_PREFERENCE_UNSPECIFIED",n.PRIORITIZE_QUALITY="PRIORITIZE_QUALITY",n.BALANCED="BALANCED",n.PRIORITIZE_COST="PRIORITIZE_COST"})(vl||(vl={}));var Sl;(function(n){n.UNSPECIFIED="UNSPECIFIED",n.BLOCKING="BLOCKING",n.NON_BLOCKING="NON_BLOCKING"})(Sl||(Sl={}));var El;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.MODE_DYNAMIC="MODE_DYNAMIC"})(El||(El={}));var yl;(function(n){n.ENVIRONMENT_UNSPECIFIED="ENVIRONMENT_UNSPECIFIED",n.ENVIRONMENT_BROWSER="ENVIRONMENT_BROWSER"})(yl||(yl={}));var Tl;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.AUTO="AUTO",n.ANY="ANY",n.NONE="NONE",n.VALIDATED="VALIDATED"})(Tl||(Tl={}));var xl;(function(n){n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE"})(xl||(xl={}));var Ml;(function(n){n.DONT_ALLOW="DONT_ALLOW",n.ALLOW_ADULT="ALLOW_ADULT",n.ALLOW_ALL="ALLOW_ALL"})(Ml||(Ml={}));var Al;(function(n){n.auto="auto",n.en="en",n.ja="ja",n.ko="ko",n.hi="hi",n.zh="zh",n.pt="pt",n.es="es"})(Al||(Al={}));var Cl;(function(n){n.MASK_MODE_DEFAULT="MASK_MODE_DEFAULT",n.MASK_MODE_USER_PROVIDED="MASK_MODE_USER_PROVIDED",n.MASK_MODE_BACKGROUND="MASK_MODE_BACKGROUND",n.MASK_MODE_FOREGROUND="MASK_MODE_FOREGROUND",n.MASK_MODE_SEMANTIC="MASK_MODE_SEMANTIC"})(Cl||(Cl={}));var Rl;(function(n){n.CONTROL_TYPE_DEFAULT="CONTROL_TYPE_DEFAULT",n.CONTROL_TYPE_CANNY="CONTROL_TYPE_CANNY",n.CONTROL_TYPE_SCRIBBLE="CONTROL_TYPE_SCRIBBLE",n.CONTROL_TYPE_FACE_MESH="CONTROL_TYPE_FACE_MESH"})(Rl||(Rl={}));var wl;(function(n){n.SUBJECT_TYPE_DEFAULT="SUBJECT_TYPE_DEFAULT",n.SUBJECT_TYPE_PERSON="SUBJECT_TYPE_PERSON",n.SUBJECT_TYPE_ANIMAL="SUBJECT_TYPE_ANIMAL",n.SUBJECT_TYPE_PRODUCT="SUBJECT_TYPE_PRODUCT"})(wl||(wl={}));var Il;(function(n){n.EDIT_MODE_DEFAULT="EDIT_MODE_DEFAULT",n.EDIT_MODE_INPAINT_REMOVAL="EDIT_MODE_INPAINT_REMOVAL",n.EDIT_MODE_INPAINT_INSERTION="EDIT_MODE_INPAINT_INSERTION",n.EDIT_MODE_OUTPAINT="EDIT_MODE_OUTPAINT",n.EDIT_MODE_CONTROLLED_EDITING="EDIT_MODE_CONTROLLED_EDITING",n.EDIT_MODE_STYLE="EDIT_MODE_STYLE",n.EDIT_MODE_BGSWAP="EDIT_MODE_BGSWAP",n.EDIT_MODE_PRODUCT_IMAGE="EDIT_MODE_PRODUCT_IMAGE"})(Il||(Il={}));var Pl;(function(n){n.FOREGROUND="FOREGROUND",n.BACKGROUND="BACKGROUND",n.PROMPT="PROMPT",n.SEMANTIC="SEMANTIC",n.INTERACTIVE="INTERACTIVE"})(Pl||(Pl={}));var bl;(function(n){n.ASSET="ASSET",n.STYLE="STYLE"})(bl||(bl={}));var Dl;(function(n){n.INSERT="INSERT",n.REMOVE="REMOVE",n.REMOVE_STATIC="REMOVE_STATIC",n.OUTPAINT="OUTPAINT"})(Dl||(Dl={}));var Nl;(function(n){n.OPTIMIZED="OPTIMIZED",n.LOSSLESS="LOSSLESS"})(Nl||(Nl={}));var Ul;(function(n){n.SUPERVISED_FINE_TUNING="SUPERVISED_FINE_TUNING",n.PREFERENCE_TUNING="PREFERENCE_TUNING"})(Ul||(Ul={}));var Ll;(function(n){n.STATE_UNSPECIFIED="STATE_UNSPECIFIED",n.STATE_PENDING="STATE_PENDING",n.STATE_ACTIVE="STATE_ACTIVE",n.STATE_FAILED="STATE_FAILED"})(Ll||(Ll={}));var Fl;(function(n){n.STATE_UNSPECIFIED="STATE_UNSPECIFIED",n.PROCESSING="PROCESSING",n.ACTIVE="ACTIVE",n.FAILED="FAILED"})(Fl||(Fl={}));var Bl;(function(n){n.SOURCE_UNSPECIFIED="SOURCE_UNSPECIFIED",n.UPLOADED="UPLOADED",n.GENERATED="GENERATED"})(Bl||(Bl={}));var Ol;(function(n){n.TURN_COMPLETE_REASON_UNSPECIFIED="TURN_COMPLETE_REASON_UNSPECIFIED",n.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",n.RESPONSE_REJECTED="RESPONSE_REJECTED",n.NEED_MORE_INPUT="NEED_MORE_INPUT"})(Ol||(Ol={}));var kl;(function(n){n.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",n.TEXT="TEXT",n.IMAGE="IMAGE",n.VIDEO="VIDEO",n.AUDIO="AUDIO",n.DOCUMENT="DOCUMENT"})(kl||(kl={}));var Hl;(function(n){n.START_SENSITIVITY_UNSPECIFIED="START_SENSITIVITY_UNSPECIFIED",n.START_SENSITIVITY_HIGH="START_SENSITIVITY_HIGH",n.START_SENSITIVITY_LOW="START_SENSITIVITY_LOW"})(Hl||(Hl={}));var Gl;(function(n){n.END_SENSITIVITY_UNSPECIFIED="END_SENSITIVITY_UNSPECIFIED",n.END_SENSITIVITY_HIGH="END_SENSITIVITY_HIGH",n.END_SENSITIVITY_LOW="END_SENSITIVITY_LOW"})(Gl||(Gl={}));var Vl;(function(n){n.ACTIVITY_HANDLING_UNSPECIFIED="ACTIVITY_HANDLING_UNSPECIFIED",n.START_OF_ACTIVITY_INTERRUPTS="START_OF_ACTIVITY_INTERRUPTS",n.NO_INTERRUPTION="NO_INTERRUPTION"})(Vl||(Vl={}));var zl;(function(n){n.TURN_COVERAGE_UNSPECIFIED="TURN_COVERAGE_UNSPECIFIED",n.TURN_INCLUDES_ONLY_ACTIVITY="TURN_INCLUDES_ONLY_ACTIVITY",n.TURN_INCLUDES_ALL_INPUT="TURN_INCLUDES_ALL_INPUT"})(zl||(zl={}));var Wl;(function(n){n.SCALE_UNSPECIFIED="SCALE_UNSPECIFIED",n.C_MAJOR_A_MINOR="C_MAJOR_A_MINOR",n.D_FLAT_MAJOR_B_FLAT_MINOR="D_FLAT_MAJOR_B_FLAT_MINOR",n.D_MAJOR_B_MINOR="D_MAJOR_B_MINOR",n.E_FLAT_MAJOR_C_MINOR="E_FLAT_MAJOR_C_MINOR",n.E_MAJOR_D_FLAT_MINOR="E_MAJOR_D_FLAT_MINOR",n.F_MAJOR_D_MINOR="F_MAJOR_D_MINOR",n.G_FLAT_MAJOR_E_FLAT_MINOR="G_FLAT_MAJOR_E_FLAT_MINOR",n.G_MAJOR_E_MINOR="G_MAJOR_E_MINOR",n.A_FLAT_MAJOR_F_MINOR="A_FLAT_MAJOR_F_MINOR",n.A_MAJOR_G_FLAT_MINOR="A_MAJOR_G_FLAT_MINOR",n.B_FLAT_MAJOR_G_MINOR="B_FLAT_MAJOR_G_MINOR",n.B_MAJOR_A_FLAT_MINOR="B_MAJOR_A_FLAT_MINOR"})(Wl||(Wl={}));var ql;(function(n){n.MUSIC_GENERATION_MODE_UNSPECIFIED="MUSIC_GENERATION_MODE_UNSPECIFIED",n.QUALITY="QUALITY",n.DIVERSITY="DIVERSITY",n.VOCALIZATION="VOCALIZATION"})(ql||(ql={}));var Di;(function(n){n.PLAYBACK_CONTROL_UNSPECIFIED="PLAYBACK_CONTROL_UNSPECIFIED",n.PLAY="PLAY",n.PAUSE="PAUSE",n.STOP="STOP",n.RESET_CONTEXT="RESET_CONTEXT"})(Di||(Di={}));class Ms{constructor(e){const t={};for(const i of e.headers.entries())t[i[0]]=i[1];this.headers=t,this.responseInternal=e}json(){return this.responseInternal.json()}}class ro{get text(){var e,t,i,o,r,s,a,u;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning text from the first one.");let c="",f=!1;const h=[];for(const p of(u=(a=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)!==null&&u!==void 0?u:[]){for(const[m,E]of Object.entries(p))m!=="text"&&m!=="thought"&&m!=="thoughtSignature"&&(E!==null||E!==void 0)&&h.push(m);if(typeof p.text=="string"){if(typeof p.thought=="boolean"&&p.thought)continue;f=!0,c+=p.text}}return h.length>0&&console.warn(`there are non-text parts ${h} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),f?c:void 0}get data(){var e,t,i,o,r,s,a,u;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning data from the first one.");let c="";const f=[];for(const h of(u=(a=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)!==null&&u!==void 0?u:[]){for(const[p,m]of Object.entries(h))p!=="inlineData"&&(m!==null||m!==void 0)&&f.push(p);h.inlineData&&typeof h.inlineData.data=="string"&&(c+=atob(h.inlineData.data))}return f.length>0&&console.warn(`there are non-data parts ${f} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),c.length>0?btoa(c):void 0}get functionCalls(){var e,t,i,o,r,s,a,u;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning function calls from the first one.");const c=(u=(a=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)===null||u===void 0?void 0:u.filter(f=>f.functionCall).map(f=>f.functionCall).filter(f=>f!==void 0);if((c==null?void 0:c.length)!==0)return c}get executableCode(){var e,t,i,o,r,s,a,u,c;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning executable code from the first one.");const f=(u=(a=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)===null||u===void 0?void 0:u.filter(h=>h.executableCode).map(h=>h.executableCode).filter(h=>h!==void 0);if((f==null?void 0:f.length)!==0)return(c=f==null?void 0:f[0])===null||c===void 0?void 0:c.code}get codeExecutionResult(){var e,t,i,o,r,s,a,u,c;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning code execution result from the first one.");const f=(u=(a=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)===null||u===void 0?void 0:u.filter(h=>h.codeExecutionResult).map(h=>h.codeExecutionResult).filter(h=>h!==void 0);if((f==null?void 0:f.length)!==0)return(c=f==null?void 0:f[0])===null||c===void 0?void 0:c.output}}class $l{}class Xl{}class pf{}class mf{}class gf{}class _f{}class Yl{}class Jl{}class Kl{}class vf{}class Sr{_fromAPIResponse({apiResponse:e,_isVertexAI:t}){const i=new Sr;let o;const r=e;return t?o=tf(r):o=ef(r),Object.assign(i,o),i}}class Zl{}class Ql{}class jl{}class eu{}class Sf{}class Ef{}class yf{}class Ta{_fromAPIResponse({apiResponse:e,_isVertexAI:t}){const i=new Ta,r=uf(e);return Object.assign(i,r),i}}class Tf{}class xf{}class Mf{}class tu{}class Af{get text(){var e,t,i;let o="",r=!1;const s=[];for(const a of(i=(t=(e=this.serverContent)===null||e===void 0?void 0:e.modelTurn)===null||t===void 0?void 0:t.parts)!==null&&i!==void 0?i:[]){for(const[u,c]of Object.entries(a))u!=="text"&&u!=="thought"&&c!==null&&s.push(u);if(typeof a.text=="string"){if(typeof a.thought=="boolean"&&a.thought)continue;r=!0,o+=a.text}}return s.length>0&&console.warn(`there are non-text parts ${s} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),r?o:void 0}get data(){var e,t,i;let o="";const r=[];for(const s of(i=(t=(e=this.serverContent)===null||e===void 0?void 0:e.modelTurn)===null||t===void 0?void 0:t.parts)!==null&&i!==void 0?i:[]){for(const[a,u]of Object.entries(s))a!=="inlineData"&&u!==null&&r.push(a);s.inlineData&&typeof s.inlineData.data=="string"&&(o+=atob(s.inlineData.data))}return r.length>0&&console.warn(`there are non-data parts ${r} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),o.length>0?btoa(o):void 0}}class Cf{get audioChunk(){if(this.serverContent&&this.serverContent.audioChunks&&this.serverContent.audioChunks.length>0)return this.serverContent.audioChunks[0]}}class xa{_fromAPIResponse({apiResponse:e,_isVertexAI:t}){const i=new xa,r=Ic(e);return Object.assign(i,r),i}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function at(n,e){if(!e||typeof e!="string")throw new Error("model is required and must be a string");if(e.includes("..")||e.includes("?")||e.includes("&"))throw new Error("invalid model parameter");if(n.isVertexAI()){if(e.startsWith("publishers/")||e.startsWith("projects/")||e.startsWith("models/"))return e;if(e.indexOf("/")>=0){const t=e.split("/",2);return`publishers/${t[0]}/models/${t[1]}`}else return`publishers/google/models/${e}`}else return e.startsWith("models/")||e.startsWith("tunedModels/")?e:`models/${e}`}function Pc(n,e){const t=at(n,e);return t?t.startsWith("publishers/")&&n.isVertexAI()?`projects/${n.getProject()}/locations/${n.getLocation()}/${t}`:t.startsWith("models/")&&n.isVertexAI()?`projects/${n.getProject()}/locations/${n.getLocation()}/publishers/google/${t}`:t:""}function bc(n){return Array.isArray(n)?n.map(e=>Er(e)):[Er(n)]}function Er(n){if(typeof n=="object"&&n!==null)return n;throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof n}`)}function Dc(n){const e=Er(n);if(e.mimeType&&e.mimeType.startsWith("image/"))return e;throw new Error(`Unsupported mime type: ${e.mimeType}`)}function Nc(n){const e=Er(n);if(e.mimeType&&e.mimeType.startsWith("audio/"))return e;throw new Error(`Unsupported mime type: ${e.mimeType}`)}function nu(n){if(n==null)throw new Error("PartUnion is required");if(typeof n=="object")return n;if(typeof n=="string")return{text:n};throw new Error(`Unsupported part type: ${typeof n}`)}function Uc(n){if(n==null||Array.isArray(n)&&n.length===0)throw new Error("PartListUnion is required");return Array.isArray(n)?n.map(e=>nu(e)):[nu(n)]}function As(n){return n!=null&&typeof n=="object"&&"parts"in n&&Array.isArray(n.parts)}function iu(n){return n!=null&&typeof n=="object"&&"functionCall"in n}function ou(n){return n!=null&&typeof n=="object"&&"functionResponse"in n}function Dt(n){if(n==null)throw new Error("ContentUnion is required");return As(n)?n:{role:"user",parts:Uc(n)}}function Ma(n,e){if(!e)return[];if(n.isVertexAI()&&Array.isArray(e))return e.flatMap(t=>{const i=Dt(t);return i.parts&&i.parts.length>0&&i.parts[0].text!==void 0?[i.parts[0].text]:[]});if(n.isVertexAI()){const t=Dt(e);return t.parts&&t.parts.length>0&&t.parts[0].text!==void 0?[t.parts[0].text]:[]}return Array.isArray(e)?e.map(t=>Dt(t)):[Dt(e)]}function jt(n){if(n==null||Array.isArray(n)&&n.length===0)throw new Error("contents are required");if(!Array.isArray(n)){if(iu(n)||ou(n))throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");return[Dt(n)]}const e=[],t=[],i=As(n[0]);for(const o of n){const r=As(o);if(r!=i)throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");if(r)e.push(o);else{if(iu(o)||ou(o))throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");t.push(o)}}return i||e.push({role:"user",parts:Uc(t)}),e}function Rf(n,e){n.includes("null")&&(e.nullable=!0);const t=n.filter(i=>i!=="null");if(t.length===1)e.type=Object.values(Wn).includes(t[0].toUpperCase())?t[0].toUpperCase():Wn.TYPE_UNSPECIFIED;else{e.anyOf=[];for(const i of t)e.anyOf.push({type:Object.values(Wn).includes(i.toUpperCase())?i.toUpperCase():Wn.TYPE_UNSPECIFIED})}}function Li(n){const e={},t=["items"],i=["anyOf"],o=["properties"];if(n.type&&n.anyOf)throw new Error("type and anyOf cannot be both populated.");const r=n.anyOf;r!=null&&r.length==2&&(r[0].type==="null"?(e.nullable=!0,n=r[1]):r[1].type==="null"&&(e.nullable=!0,n=r[0])),n.type instanceof Array&&Rf(n.type,e);for(const[s,a]of Object.entries(n))if(a!=null)if(s=="type"){if(a==="null")throw new Error("type: null can not be the only possible type for the field.");if(a instanceof Array)continue;e.type=Object.values(Wn).includes(a.toUpperCase())?a.toUpperCase():Wn.TYPE_UNSPECIFIED}else if(t.includes(s))e[s]=Li(a);else if(i.includes(s)){const u=[];for(const c of a){if(c.type=="null"){e.nullable=!0;continue}u.push(Li(c))}e[s]=u}else if(o.includes(s)){const u={};for(const[c,f]of Object.entries(a))u[c]=Li(f);e[s]=u}else{if(s==="additionalProperties")continue;e[s]=a}return e}function Aa(n){return Li(n)}function Ca(n){if(typeof n=="object")return n;if(typeof n=="string")return{voiceConfig:{prebuiltVoiceConfig:{voiceName:n}}};throw new Error(`Unsupported speechConfig type: ${typeof n}`)}function Ra(n){if("multiSpeakerVoiceConfig"in n)throw new Error("multiSpeakerVoiceConfig is not supported in the live API.");return n}function Yi(n){if(n.functionDeclarations)for(const e of n.functionDeclarations)e.parameters&&(Object.keys(e.parameters).includes("$schema")?e.parametersJsonSchema||(e.parametersJsonSchema=e.parameters,delete e.parameters):e.parameters=Li(e.parameters)),e.response&&(Object.keys(e.response).includes("$schema")?e.responseJsonSchema||(e.responseJsonSchema=e.response,delete e.response):e.response=Li(e.response));return n}function Ji(n){if(n==null)throw new Error("tools is required");if(!Array.isArray(n))throw new Error("tools is required and must be an array of Tools");const e=[];for(const t of n)e.push(t);return e}function wf(n,e,t,i=1){const o=!e.startsWith(`${t}/`)&&e.split("/").length===i;return n.isVertexAI()?e.startsWith("projects/")?e:e.startsWith("locations/")?`projects/${n.getProject()}/${e}`:e.startsWith(`${t}/`)?`projects/${n.getProject()}/locations/${n.getLocation()}/${e}`:o?`projects/${n.getProject()}/locations/${n.getLocation()}/${t}/${e}`:e:o?`${t}/${e}`:e}function Nn(n,e){if(typeof e!="string")throw new Error("name must be a string");return wf(n,e,"cachedContents")}function Lc(n){switch(n){case"STATE_UNSPECIFIED":return"JOB_STATE_UNSPECIFIED";case"CREATING":return"JOB_STATE_RUNNING";case"ACTIVE":return"JOB_STATE_SUCCEEDED";case"FAILED":return"JOB_STATE_FAILED";default:return n}}function Zn(n){return ya(n)}function If(n){return n!=null&&typeof n=="object"&&"name"in n}function Pf(n){return n!=null&&typeof n=="object"&&"video"in n}function bf(n){return n!=null&&typeof n=="object"&&"uri"in n}function Fc(n){var e;let t;if(If(n)&&(t=n.name),!(bf(n)&&(t=n.uri,t===void 0))&&!(Pf(n)&&(t=(e=n.video)===null||e===void 0?void 0:e.uri,t===void 0))){if(typeof n=="string"&&(t=n),t===void 0)throw new Error("Could not extract file name from the provided input.");if(t.startsWith("https://")){const o=t.split("files/")[1].match(/[a-z0-9]+/);if(o===null)throw new Error(`Could not extract file name from URI ${t}`);t=o[0]}else t.startsWith("files/")&&(t=t.split("files/")[1]);return t}}function Bc(n,e){let t;return n.isVertexAI()?t=e?"publishers/google/models":"models":t=e?"models":"tunedModels",t}function Oc(n){for(const e of["models","tunedModels","publisherModels"])if(Df(n,e))return n[e];return[]}function Df(n,e){return n!==null&&typeof n=="object"&&e in n}function Nf(n,e={}){const t=n,i={name:t.name,description:t.description,parametersJsonSchema:t.inputSchema};return t.outputSchema&&(i.responseJsonSchema=t.outputSchema),e.behavior&&(i.behavior=e.behavior),{functionDeclarations:[i]}}function Uf(n,e={}){const t=[],i=new Set;for(const o of n){const r=o.name;if(i.has(r))throw new Error(`Duplicate function name ${r} found in MCP tools. Please ensure function names are unique.`);i.add(r);const s=Nf(o,e);s.functionDeclarations&&t.push(...s.functionDeclarations)}return{functionDeclarations:t}}function kc(n,e){let t;if(typeof e=="string")if(n.isVertexAI())if(e.startsWith("gs://"))t={format:"jsonl",gcsUri:[e]};else if(e.startsWith("bq://"))t={format:"bigquery",bigqueryUri:e};else throw new Error(`Unsupported string source for Vertex AI: ${e}`);else if(e.startsWith("files/"))t={fileName:e};else throw new Error(`Unsupported string source for Gemini API: ${e}`);else if(Array.isArray(e)){if(n.isVertexAI())throw new Error("InlinedRequest[] is not supported in Vertex AI.");t={inlinedRequests:e}}else t=e;const i=[t.gcsUri,t.bigqueryUri].filter(Boolean).length,o=[t.inlinedRequests,t.fileName].filter(Boolean).length;if(n.isVertexAI()){if(o>0||i!==1)throw new Error("Exactly one of `gcsUri` or `bigqueryUri` must be set for Vertex AI.")}else if(i>0||o!==1)throw new Error("Exactly one of `inlinedRequests`, `fileName`, must be set for Gemini API.");return t}function Lf(n){if(typeof n!="string")return n;const e=n;if(e.startsWith("gs://"))return{format:"jsonl",gcsUri:e};if(e.startsWith("bq://"))return{format:"bigquery",bigqueryUri:e};throw new Error(`Unsupported destination: ${e}`)}function Hc(n){if(typeof n!="object"||n===null)return{};const e=n,t=e.inlinedResponses;if(typeof t!="object"||t===null)return n;const o=t.inlinedResponses;if(!Array.isArray(o)||o.length===0)return n;let r=!1;for(const s of o){if(typeof s!="object"||s===null)continue;const u=s.response;if(typeof u!="object"||u===null)continue;if(u.embedding!==void 0){r=!0;break}}return r&&(e.inlinedEmbedContentResponses=e.inlinedResponses,delete e.inlinedResponses),n}function Ki(n,e){const t=e;if(!n.isVertexAI()){if(/batches\/[^/]+$/.test(t))return t.split("/").pop();throw new Error(`Invalid batch job name: ${t}.`)}if(/^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/.test(t))return t.split("/").pop();if(/^\d+$/.test(t))return t;throw new Error(`Invalid batch job name: ${t}.`)}function Gc(n){const e=n;return e==="BATCH_STATE_UNSPECIFIED"?"JOB_STATE_UNSPECIFIED":e==="BATCH_STATE_PENDING"?"JOB_STATE_PENDING":e==="BATCH_STATE_RUNNING"?"JOB_STATE_RUNNING":e==="BATCH_STATE_SUCCEEDED"?"JOB_STATE_SUCCEEDED":e==="BATCH_STATE_FAILED"?"JOB_STATE_FAILED":e==="BATCH_STATE_CANCELLED"?"JOB_STATE_CANCELLED":e==="BATCH_STATE_EXPIRED"?"JOB_STATE_EXPIRED":e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ff(n){const e={},t=l(n,["responsesFile"]);t!=null&&d(e,["fileName"],t);const i=l(n,["inlinedResponses","inlinedResponses"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>gh(s))),d(e,["inlinedResponses"],r)}const o=l(n,["inlinedEmbedContentResponses","inlinedResponses"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),d(e,["inlinedEmbedContentResponses"],r)}return e}function Bf(n){const e={},t=l(n,["predictionsFormat"]);t!=null&&d(e,["format"],t);const i=l(n,["gcsDestination","outputUriPrefix"]);i!=null&&d(e,["gcsUri"],i);const o=l(n,["bigqueryDestination","outputUri"]);return o!=null&&d(e,["bigqueryUri"],o),e}function Of(n){const e={},t=l(n,["format"]);t!=null&&d(e,["predictionsFormat"],t);const i=l(n,["gcsUri"]);i!=null&&d(e,["gcsDestination","outputUriPrefix"],i);const o=l(n,["bigqueryUri"]);if(o!=null&&d(e,["bigqueryDestination","outputUri"],o),l(n,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(l(n,["inlinedResponses"])!==void 0)throw new Error("inlinedResponses parameter is not supported in Vertex AI.");if(l(n,["inlinedEmbedContentResponses"])!==void 0)throw new Error("inlinedEmbedContentResponses parameter is not supported in Vertex AI.");return e}function lr(n){const e={},t=l(n,["name"]);t!=null&&d(e,["name"],t);const i=l(n,["metadata","displayName"]);i!=null&&d(e,["displayName"],i);const o=l(n,["metadata","state"]);o!=null&&d(e,["state"],Gc(o));const r=l(n,["metadata","createTime"]);r!=null&&d(e,["createTime"],r);const s=l(n,["metadata","endTime"]);s!=null&&d(e,["endTime"],s);const a=l(n,["metadata","updateTime"]);a!=null&&d(e,["updateTime"],a);const u=l(n,["metadata","model"]);u!=null&&d(e,["model"],u);const c=l(n,["metadata","output"]);return c!=null&&d(e,["dest"],Ff(Hc(c))),e}function Cs(n){const e={},t=l(n,["name"]);t!=null&&d(e,["name"],t);const i=l(n,["displayName"]);i!=null&&d(e,["displayName"],i);const o=l(n,["state"]);o!=null&&d(e,["state"],Gc(o));const r=l(n,["error"]);r!=null&&d(e,["error"],r);const s=l(n,["createTime"]);s!=null&&d(e,["createTime"],s);const a=l(n,["startTime"]);a!=null&&d(e,["startTime"],a);const u=l(n,["endTime"]);u!=null&&d(e,["endTime"],u);const c=l(n,["updateTime"]);c!=null&&d(e,["updateTime"],c);const f=l(n,["model"]);f!=null&&d(e,["model"],f);const h=l(n,["inputConfig"]);h!=null&&d(e,["src"],kf(h));const p=l(n,["outputConfig"]);p!=null&&d(e,["dest"],Bf(Hc(p)));const m=l(n,["completionStats"]);return m!=null&&d(e,["completionStats"],m),e}function kf(n){const e={},t=l(n,["instancesFormat"]);t!=null&&d(e,["format"],t);const i=l(n,["gcsSource","uris"]);i!=null&&d(e,["gcsUri"],i);const o=l(n,["bigquerySource","inputUri"]);return o!=null&&d(e,["bigqueryUri"],o),e}function Hf(n,e){const t={};if(l(e,["format"])!==void 0)throw new Error("format parameter is not supported in Gemini API.");if(l(e,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(l(e,["bigqueryUri"])!==void 0)throw new Error("bigqueryUri parameter is not supported in Gemini API.");const i=l(e,["fileName"]);i!=null&&d(t,["fileName"],i);const o=l(e,["inlinedRequests"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>mh(n,s))),d(t,["requests","requests"],r)}return t}function Gf(n){const e={},t=l(n,["format"]);t!=null&&d(e,["instancesFormat"],t);const i=l(n,["gcsUri"]);i!=null&&d(e,["gcsSource","uris"],i);const o=l(n,["bigqueryUri"]);if(o!=null&&d(e,["bigquerySource","inputUri"],o),l(n,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(l(n,["inlinedRequests"])!==void 0)throw new Error("inlinedRequests parameter is not supported in Vertex AI.");return e}function Vf(n){const e={},t=l(n,["data"]);if(t!=null&&d(e,["data"],t),l(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=l(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function zf(n,e){const t={},i=l(e,["name"]);return i!=null&&d(t,["_url","name"],Ki(n,i)),t}function Wf(n,e){const t={},i=l(e,["name"]);return i!=null&&d(t,["_url","name"],Ki(n,i)),t}function qf(n){const e={},t=l(n,["content"]);t!=null&&d(e,["content"],t);const i=l(n,["citationMetadata"]);i!=null&&d(e,["citationMetadata"],$f(i));const o=l(n,["tokenCount"]);o!=null&&d(e,["tokenCount"],o);const r=l(n,["finishReason"]);r!=null&&d(e,["finishReason"],r);const s=l(n,["avgLogprobs"]);s!=null&&d(e,["avgLogprobs"],s);const a=l(n,["groundingMetadata"]);a!=null&&d(e,["groundingMetadata"],a);const u=l(n,["index"]);u!=null&&d(e,["index"],u);const c=l(n,["logprobsResult"]);c!=null&&d(e,["logprobsResult"],c);const f=l(n,["safetyRatings"]);if(f!=null){let p=f;Array.isArray(p)&&(p=p.map(m=>m)),d(e,["safetyRatings"],p)}const h=l(n,["urlContextMetadata"]);return h!=null&&d(e,["urlContextMetadata"],h),e}function $f(n){const e={},t=l(n,["citationSources"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>o)),d(e,["citations"],i)}return e}function Vc(n){const e={},t=l(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>xh(r))),d(e,["parts"],o)}const i=l(n,["role"]);return i!=null&&d(e,["role"],i),e}function Xf(n,e){const t={},i=l(n,["displayName"]);if(e!==void 0&&i!=null&&d(e,["batch","displayName"],i),l(n,["dest"])!==void 0)throw new Error("dest parameter is not supported in Gemini API.");return t}function Yf(n,e){const t={},i=l(n,["displayName"]);e!==void 0&&i!=null&&d(e,["displayName"],i);const o=l(n,["dest"]);return e!==void 0&&o!=null&&d(e,["outputConfig"],Of(Lf(o))),t}function ru(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["src"]);o!=null&&d(t,["batch","inputConfig"],Hf(n,kc(n,o)));const r=l(e,["config"]);return r!=null&&Xf(r,t),t}function Jf(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["model"],at(n,i));const o=l(e,["src"]);o!=null&&d(t,["inputConfig"],Gf(kc(n,o)));const r=l(e,["config"]);return r!=null&&Yf(r,t),t}function Kf(n,e){const t={},i=l(n,["displayName"]);return e!==void 0&&i!=null&&d(e,["batch","displayName"],i),t}function Zf(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["src"]);o!=null&&d(t,["batch","inputConfig"],oh(n,o));const r=l(e,["config"]);return r!=null&&Kf(r,t),t}function Qf(n,e){const t={},i=l(e,["name"]);return i!=null&&d(t,["_url","name"],Ki(n,i)),t}function jf(n,e){const t={},i=l(e,["name"]);return i!=null&&d(t,["_url","name"],Ki(n,i)),t}function eh(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["name"]);i!=null&&d(e,["name"],i);const o=l(n,["done"]);o!=null&&d(e,["done"],o);const r=l(n,["error"]);return r!=null&&d(e,["error"],r),e}function th(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["name"]);i!=null&&d(e,["name"],i);const o=l(n,["done"]);o!=null&&d(e,["done"],o);const r=l(n,["error"]);return r!=null&&d(e,["error"],r),e}function nh(n,e){const t={},i=l(e,["contents"]);if(i!=null){let r=Ma(n,i);Array.isArray(r)&&(r=r.map(s=>s)),d(t,["requests[]","request","content"],r)}const o=l(e,["config"]);return o!=null&&(d(t,["_self"],ih(o,t)),Qd(t,{"requests[].*":"requests[].request.*"})),t}function ih(n,e){const t={},i=l(n,["taskType"]);e!==void 0&&i!=null&&d(e,["requests[]","taskType"],i);const o=l(n,["title"]);e!==void 0&&o!=null&&d(e,["requests[]","title"],o);const r=l(n,["outputDimensionality"]);if(e!==void 0&&r!=null&&d(e,["requests[]","outputDimensionality"],r),l(n,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(l(n,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return t}function oh(n,e){const t={},i=l(e,["fileName"]);i!=null&&d(t,["file_name"],i);const o=l(e,["inlinedRequests"]);return o!=null&&d(t,["requests"],nh(n,o)),t}function rh(n){const e={};if(l(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=l(n,["fileUri"]);t!=null&&d(e,["fileUri"],t);const i=l(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function sh(n){const e={},t=l(n,["id"]);t!=null&&d(e,["id"],t);const i=l(n,["args"]);i!=null&&d(e,["args"],i);const o=l(n,["name"]);if(o!=null&&d(e,["name"],o),l(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(l(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return e}function ah(n){const e={},t=l(n,["mode"]);t!=null&&d(e,["mode"],t);const i=l(n,["allowedFunctionNames"]);if(i!=null&&d(e,["allowedFunctionNames"],i),l(n,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return e}function lh(n,e,t){const i={},o=l(e,["systemInstruction"]);t!==void 0&&o!=null&&d(t,["systemInstruction"],Vc(Dt(o)));const r=l(e,["temperature"]);r!=null&&d(i,["temperature"],r);const s=l(e,["topP"]);s!=null&&d(i,["topP"],s);const a=l(e,["topK"]);a!=null&&d(i,["topK"],a);const u=l(e,["candidateCount"]);u!=null&&d(i,["candidateCount"],u);const c=l(e,["maxOutputTokens"]);c!=null&&d(i,["maxOutputTokens"],c);const f=l(e,["stopSequences"]);f!=null&&d(i,["stopSequences"],f);const h=l(e,["responseLogprobs"]);h!=null&&d(i,["responseLogprobs"],h);const p=l(e,["logprobs"]);p!=null&&d(i,["logprobs"],p);const m=l(e,["presencePenalty"]);m!=null&&d(i,["presencePenalty"],m);const E=l(e,["frequencyPenalty"]);E!=null&&d(i,["frequencyPenalty"],E);const y=l(e,["seed"]);y!=null&&d(i,["seed"],y);const S=l(e,["responseMimeType"]);S!=null&&d(i,["responseMimeType"],S);const g=l(e,["responseSchema"]);g!=null&&d(i,["responseSchema"],Aa(g));const w=l(e,["responseJsonSchema"]);if(w!=null&&d(i,["responseJsonSchema"],w),l(e,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(l(e,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const C=l(e,["safetySettings"]);if(t!==void 0&&C!=null){let q=C;Array.isArray(q)&&(q=q.map(Y=>Mh(Y))),d(t,["safetySettings"],q)}const M=l(e,["tools"]);if(t!==void 0&&M!=null){let q=Ji(M);Array.isArray(q)&&(q=q.map(Y=>Ch(Yi(Y)))),d(t,["tools"],q)}const O=l(e,["toolConfig"]);if(t!==void 0&&O!=null&&d(t,["toolConfig"],Ah(O)),l(e,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const F=l(e,["cachedContent"]);t!==void 0&&F!=null&&d(t,["cachedContent"],Nn(n,F));const N=l(e,["responseModalities"]);N!=null&&d(i,["responseModalities"],N);const H=l(e,["mediaResolution"]);H!=null&&d(i,["mediaResolution"],H);const A=l(e,["speechConfig"]);if(A!=null&&d(i,["speechConfig"],Ca(A)),l(e,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const T=l(e,["thinkingConfig"]);T!=null&&d(i,["thinkingConfig"],T);const B=l(e,["imageConfig"]);return B!=null&&d(i,["imageConfig"],ph(B)),i}function uh(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["candidates"]);if(i!=null){let u=i;Array.isArray(u)&&(u=u.map(c=>qf(c))),d(e,["candidates"],u)}const o=l(n,["modelVersion"]);o!=null&&d(e,["modelVersion"],o);const r=l(n,["promptFeedback"]);r!=null&&d(e,["promptFeedback"],r);const s=l(n,["responseId"]);s!=null&&d(e,["responseId"],s);const a=l(n,["usageMetadata"]);return a!=null&&d(e,["usageMetadata"],a),e}function ch(n,e){const t={},i=l(e,["name"]);return i!=null&&d(t,["_url","name"],Ki(n,i)),t}function dh(n,e){const t={},i=l(e,["name"]);return i!=null&&d(t,["_url","name"],Ki(n,i)),t}function fh(n){const e={};if(l(n,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const t=l(n,["enableWidget"]);return t!=null&&d(e,["enableWidget"],t),e}function hh(n){const e={};if(l(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(l(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const t=l(n,["timeRangeFilter"]);return t!=null&&d(e,["timeRangeFilter"],t),e}function ph(n){const e={},t=l(n,["aspectRatio"]);t!=null&&d(e,["aspectRatio"],t);const i=l(n,["imageSize"]);if(i!=null&&d(e,["imageSize"],i),l(n,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(l(n,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");return e}function mh(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["request","model"],at(n,i));const o=l(e,["contents"]);if(o!=null){let a=jt(o);Array.isArray(a)&&(a=a.map(u=>Vc(u))),d(t,["request","contents"],a)}const r=l(e,["metadata"]);r!=null&&d(t,["metadata"],r);const s=l(e,["config"]);return s!=null&&d(t,["request","generationConfig"],lh(n,s,l(t,["request"],{}))),t}function gh(n){const e={},t=l(n,["response"]);t!=null&&d(e,["response"],uh(t));const i=l(n,["error"]);return i!=null&&d(e,["error"],i),e}function _h(n,e){const t={},i=l(n,["pageSize"]);e!==void 0&&i!=null&&d(e,["_query","pageSize"],i);const o=l(n,["pageToken"]);if(e!==void 0&&o!=null&&d(e,["_query","pageToken"],o),l(n,["filter"])!==void 0)throw new Error("filter parameter is not supported in Gemini API.");return t}function vh(n,e){const t={},i=l(n,["pageSize"]);e!==void 0&&i!=null&&d(e,["_query","pageSize"],i);const o=l(n,["pageToken"]);e!==void 0&&o!=null&&d(e,["_query","pageToken"],o);const r=l(n,["filter"]);return e!==void 0&&r!=null&&d(e,["_query","filter"],r),t}function Sh(n){const e={},t=l(n,["config"]);return t!=null&&_h(t,e),e}function Eh(n){const e={},t=l(n,["config"]);return t!=null&&vh(t,e),e}function yh(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["nextPageToken"]);i!=null&&d(e,["nextPageToken"],i);const o=l(n,["operations"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>lr(s))),d(e,["batchJobs"],r)}return e}function Th(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["nextPageToken"]);i!=null&&d(e,["nextPageToken"],i);const o=l(n,["batchPredictionJobs"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>Cs(s))),d(e,["batchJobs"],r)}return e}function xh(n){const e={},t=l(n,["mediaResolution"]);t!=null&&d(e,["mediaResolution"],t);const i=l(n,["codeExecutionResult"]);i!=null&&d(e,["codeExecutionResult"],i);const o=l(n,["executableCode"]);o!=null&&d(e,["executableCode"],o);const r=l(n,["fileData"]);r!=null&&d(e,["fileData"],rh(r));const s=l(n,["functionCall"]);s!=null&&d(e,["functionCall"],sh(s));const a=l(n,["functionResponse"]);a!=null&&d(e,["functionResponse"],a);const u=l(n,["inlineData"]);u!=null&&d(e,["inlineData"],Vf(u));const c=l(n,["text"]);c!=null&&d(e,["text"],c);const f=l(n,["thought"]);f!=null&&d(e,["thought"],f);const h=l(n,["thoughtSignature"]);h!=null&&d(e,["thoughtSignature"],h);const p=l(n,["videoMetadata"]);return p!=null&&d(e,["videoMetadata"],p),e}function Mh(n){const e={},t=l(n,["category"]);if(t!=null&&d(e,["category"],t),l(n,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const i=l(n,["threshold"]);return i!=null&&d(e,["threshold"],i),e}function Ah(n){const e={},t=l(n,["functionCallingConfig"]);t!=null&&d(e,["functionCallingConfig"],ah(t));const i=l(n,["retrievalConfig"]);return i!=null&&d(e,["retrievalConfig"],i),e}function Ch(n){const e={},t=l(n,["functionDeclarations"]);if(t!=null){let f=t;Array.isArray(f)&&(f=f.map(h=>h)),d(e,["functionDeclarations"],f)}if(l(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=l(n,["googleSearchRetrieval"]);i!=null&&d(e,["googleSearchRetrieval"],i);const o=l(n,["computerUse"]);o!=null&&d(e,["computerUse"],o);const r=l(n,["fileSearch"]);r!=null&&d(e,["fileSearch"],r);const s=l(n,["codeExecution"]);if(s!=null&&d(e,["codeExecution"],s),l(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const a=l(n,["googleMaps"]);a!=null&&d(e,["googleMaps"],fh(a));const u=l(n,["googleSearch"]);u!=null&&d(e,["googleSearch"],hh(u));const c=l(n,["urlContext"]);return c!=null&&d(e,["urlContext"],c),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Pn;(function(n){n.PAGED_ITEM_BATCH_JOBS="batchJobs",n.PAGED_ITEM_MODELS="models",n.PAGED_ITEM_TUNING_JOBS="tuningJobs",n.PAGED_ITEM_FILES="files",n.PAGED_ITEM_CACHED_CONTENTS="cachedContents",n.PAGED_ITEM_FILE_SEARCH_STORES="fileSearchStores",n.PAGED_ITEM_DOCUMENTS="documents"})(Pn||(Pn={}));class pi{constructor(e,t,i,o){this.pageInternal=[],this.paramsInternal={},this.requestInternal=t,this.init(e,i,o)}init(e,t,i){var o,r;this.nameInternal=e,this.pageInternal=t[this.nameInternal]||[],this.sdkHttpResponseInternal=t==null?void 0:t.sdkHttpResponse,this.idxInternal=0;let s={config:{}};!i||Object.keys(i).length===0?s={config:{}}:typeof i=="object"?s=Object.assign({},i):s=i,s.config&&(s.config.pageToken=t.nextPageToken),this.paramsInternal=s,this.pageInternalSize=(r=(o=s.config)===null||o===void 0?void 0:o.pageSize)!==null&&r!==void 0?r:this.pageInternal.length}initNextPage(e){this.init(this.nameInternal,e,this.paramsInternal)}get page(){return this.pageInternal}get name(){return this.nameInternal}get pageSize(){return this.pageInternalSize}get sdkHttpResponse(){return this.sdkHttpResponseInternal}get params(){return this.paramsInternal}get pageLength(){return this.pageInternal.length}getItem(e){return this.pageInternal[e]}[Symbol.asyncIterator](){return{next:async()=>{if(this.idxInternal>=this.pageLength)if(this.hasNextPage())await this.nextPage();else return{value:void 0,done:!0};const e=this.getItem(this.idxInternal);return this.idxInternal+=1,{value:e,done:!1}},return:async()=>({value:void 0,done:!0})}}async nextPage(){if(!this.hasNextPage())throw new Error("No more pages to fetch.");const e=await this.requestInternal(this.params);return this.initNextPage(e),this.page}hasNextPage(){var e;return((e=this.params.config)===null||e===void 0?void 0:e.pageToken)!==void 0}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Rh extends Dn{constructor(e){super(),this.apiClient=e,this.list=async(t={})=>new pi(Pn.PAGED_ITEM_BATCH_JOBS,i=>this.listInternal(i),await this.listInternal(t),t),this.create=async t=>(this.apiClient.isVertexAI()&&(t.config=this.formatDestination(t.src,t.config)),this.createInternal(t)),this.createEmbeddings=async t=>{if(console.warn("batches.createEmbeddings() is experimental and may change without notice."),this.apiClient.isVertexAI())throw new Error("Vertex AI does not support batches.createEmbeddings.");return this.createEmbeddingsInternal(t)}}createInlinedGenerateContentRequest(e){const t=ru(this.apiClient,e),i=t._url,o=Te("{model}:batchGenerateContent",i),a=t.batch.inputConfig.requests,u=a.requests,c=[];for(const f of u){const h=Object.assign({},f);if(h.systemInstruction){const p=h.systemInstruction;delete h.systemInstruction;const m=h.request;m.systemInstruction=p,h.request=m}c.push(h)}return a.requests=c,delete t.config,delete t._url,delete t._query,{path:o,body:t}}getGcsUri(e){if(typeof e=="string")return e.startsWith("gs://")?e:void 0;if(!Array.isArray(e)&&e.gcsUri&&e.gcsUri.length>0)return e.gcsUri[0]}getBigqueryUri(e){if(typeof e=="string")return e.startsWith("bq://")?e:void 0;if(!Array.isArray(e))return e.bigqueryUri}formatDestination(e,t){const i=t?Object.assign({},t):{},o=Date.now().toString();if(i.displayName||(i.displayName=`genaiBatchJob_${o}`),i.dest===void 0){const r=this.getGcsUri(e),s=this.getBigqueryUri(e);if(r)r.endsWith(".jsonl")?i.dest=`${r.slice(0,-6)}/dest`:i.dest=`${r}_dest_${o}`;else if(s)i.dest=`${s}_dest_${o}`;else throw new Error("Unsupported source for Vertex AI: No GCS or BigQuery URI found.")}return i}async createInternal(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=Jf(this.apiClient,e);return a=Te("batchPredictionJobs",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>Cs(f))}else{const c=ru(this.apiClient,e);return a=Te("{model}:batchGenerateContent",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>lr(f))}}async createEmbeddingsInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=Zf(this.apiClient,e);return r=Te("{model}:asyncBatchEmbedContent",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json()),o.then(u=>lr(u))}}async get(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=dh(this.apiClient,e);return a=Te("batchPredictionJobs/{name}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>Cs(f))}else{const c=ch(this.apiClient,e);return a=Te("batches/{name}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>lr(f))}}async cancel(e){var t,i,o,r;let s="",a={};if(this.apiClient.isVertexAI()){const u=Wf(this.apiClient,e);s=Te("batchPredictionJobs/{name}:cancel",u._url),a=u._query,delete u._url,delete u._query,await this.apiClient.request({path:s,queryParams:a,body:JSON.stringify(u),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal})}else{const u=zf(this.apiClient,e);s=Te("batches/{name}:cancel",u._url),a=u._query,delete u._url,delete u._query,await this.apiClient.request({path:s,queryParams:a,body:JSON.stringify(u),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal})}}async listInternal(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=Eh(e);return a=Te("batchPredictionJobs",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=Th(f),p=new tu;return Object.assign(p,h),p})}else{const c=Sh(e);return a=Te("batches",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=yh(f),p=new tu;return Object.assign(p,h),p})}}async delete(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=jf(this.apiClient,e);return a=Te("batchPredictionJobs/{name}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>th(f))}else{const c=Qf(this.apiClient,e);return a=Te("batches/{name}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"DELETE",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>eh(f))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function wh(n){const e={},t=l(n,["data"]);if(t!=null&&d(e,["data"],t),l(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=l(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function su(n){const e={},t=l(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>Zh(r))),d(e,["parts"],o)}const i=l(n,["role"]);return i!=null&&d(e,["role"],i),e}function Ih(n,e){const t={},i=l(n,["ttl"]);e!==void 0&&i!=null&&d(e,["ttl"],i);const o=l(n,["expireTime"]);e!==void 0&&o!=null&&d(e,["expireTime"],o);const r=l(n,["displayName"]);e!==void 0&&r!=null&&d(e,["displayName"],r);const s=l(n,["contents"]);if(e!==void 0&&s!=null){let f=jt(s);Array.isArray(f)&&(f=f.map(h=>su(h))),d(e,["contents"],f)}const a=l(n,["systemInstruction"]);e!==void 0&&a!=null&&d(e,["systemInstruction"],su(Dt(a)));const u=l(n,["tools"]);if(e!==void 0&&u!=null){let f=u;Array.isArray(f)&&(f=f.map(h=>jh(h))),d(e,["tools"],f)}const c=l(n,["toolConfig"]);if(e!==void 0&&c!=null&&d(e,["toolConfig"],Qh(c)),l(n,["kmsKeyName"])!==void 0)throw new Error("kmsKeyName parameter is not supported in Gemini API.");return t}function Ph(n,e){const t={},i=l(n,["ttl"]);e!==void 0&&i!=null&&d(e,["ttl"],i);const o=l(n,["expireTime"]);e!==void 0&&o!=null&&d(e,["expireTime"],o);const r=l(n,["displayName"]);e!==void 0&&r!=null&&d(e,["displayName"],r);const s=l(n,["contents"]);if(e!==void 0&&s!=null){let h=jt(s);Array.isArray(h)&&(h=h.map(p=>p)),d(e,["contents"],h)}const a=l(n,["systemInstruction"]);e!==void 0&&a!=null&&d(e,["systemInstruction"],Dt(a));const u=l(n,["tools"]);if(e!==void 0&&u!=null){let h=u;Array.isArray(h)&&(h=h.map(p=>ep(p))),d(e,["tools"],h)}const c=l(n,["toolConfig"]);e!==void 0&&c!=null&&d(e,["toolConfig"],c);const f=l(n,["kmsKeyName"]);return e!==void 0&&f!=null&&d(e,["encryption_spec","kmsKeyName"],f),t}function bh(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["model"],Pc(n,i));const o=l(e,["config"]);return o!=null&&Ih(o,t),t}function Dh(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["model"],Pc(n,i));const o=l(e,["config"]);return o!=null&&Ph(o,t),t}function Nh(n,e){const t={},i=l(e,["name"]);return i!=null&&d(t,["_url","name"],Nn(n,i)),t}function Uh(n,e){const t={},i=l(e,["name"]);return i!=null&&d(t,["_url","name"],Nn(n,i)),t}function Lh(n){const e={},t=l(n,["sdkHttpResponse"]);return t!=null&&d(e,["sdkHttpResponse"],t),e}function Fh(n){const e={},t=l(n,["sdkHttpResponse"]);return t!=null&&d(e,["sdkHttpResponse"],t),e}function Bh(n){const e={};if(l(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=l(n,["fileUri"]);t!=null&&d(e,["fileUri"],t);const i=l(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function Oh(n){const e={},t=l(n,["id"]);t!=null&&d(e,["id"],t);const i=l(n,["args"]);i!=null&&d(e,["args"],i);const o=l(n,["name"]);if(o!=null&&d(e,["name"],o),l(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(l(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return e}function kh(n){const e={},t=l(n,["mode"]);t!=null&&d(e,["mode"],t);const i=l(n,["allowedFunctionNames"]);if(i!=null&&d(e,["allowedFunctionNames"],i),l(n,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return e}function Hh(n){const e={};if(l(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const t=l(n,["description"]);t!=null&&d(e,["description"],t);const i=l(n,["name"]);i!=null&&d(e,["name"],i);const o=l(n,["parameters"]);o!=null&&d(e,["parameters"],o);const r=l(n,["parametersJsonSchema"]);r!=null&&d(e,["parametersJsonSchema"],r);const s=l(n,["response"]);s!=null&&d(e,["response"],s);const a=l(n,["responseJsonSchema"]);return a!=null&&d(e,["responseJsonSchema"],a),e}function Gh(n,e){const t={},i=l(e,["name"]);return i!=null&&d(t,["_url","name"],Nn(n,i)),t}function Vh(n,e){const t={},i=l(e,["name"]);return i!=null&&d(t,["_url","name"],Nn(n,i)),t}function zh(n){const e={};if(l(n,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const t=l(n,["enableWidget"]);return t!=null&&d(e,["enableWidget"],t),e}function Wh(n){const e={};if(l(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(l(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const t=l(n,["timeRangeFilter"]);return t!=null&&d(e,["timeRangeFilter"],t),e}function qh(n,e){const t={},i=l(n,["pageSize"]);e!==void 0&&i!=null&&d(e,["_query","pageSize"],i);const o=l(n,["pageToken"]);return e!==void 0&&o!=null&&d(e,["_query","pageToken"],o),t}function $h(n,e){const t={},i=l(n,["pageSize"]);e!==void 0&&i!=null&&d(e,["_query","pageSize"],i);const o=l(n,["pageToken"]);return e!==void 0&&o!=null&&d(e,["_query","pageToken"],o),t}function Xh(n){const e={},t=l(n,["config"]);return t!=null&&qh(t,e),e}function Yh(n){const e={},t=l(n,["config"]);return t!=null&&$h(t,e),e}function Jh(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["nextPageToken"]);i!=null&&d(e,["nextPageToken"],i);const o=l(n,["cachedContents"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),d(e,["cachedContents"],r)}return e}function Kh(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["nextPageToken"]);i!=null&&d(e,["nextPageToken"],i);const o=l(n,["cachedContents"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),d(e,["cachedContents"],r)}return e}function Zh(n){const e={},t=l(n,["mediaResolution"]);t!=null&&d(e,["mediaResolution"],t);const i=l(n,["codeExecutionResult"]);i!=null&&d(e,["codeExecutionResult"],i);const o=l(n,["executableCode"]);o!=null&&d(e,["executableCode"],o);const r=l(n,["fileData"]);r!=null&&d(e,["fileData"],Bh(r));const s=l(n,["functionCall"]);s!=null&&d(e,["functionCall"],Oh(s));const a=l(n,["functionResponse"]);a!=null&&d(e,["functionResponse"],a);const u=l(n,["inlineData"]);u!=null&&d(e,["inlineData"],wh(u));const c=l(n,["text"]);c!=null&&d(e,["text"],c);const f=l(n,["thought"]);f!=null&&d(e,["thought"],f);const h=l(n,["thoughtSignature"]);h!=null&&d(e,["thoughtSignature"],h);const p=l(n,["videoMetadata"]);return p!=null&&d(e,["videoMetadata"],p),e}function Qh(n){const e={},t=l(n,["functionCallingConfig"]);t!=null&&d(e,["functionCallingConfig"],kh(t));const i=l(n,["retrievalConfig"]);return i!=null&&d(e,["retrievalConfig"],i),e}function jh(n){const e={},t=l(n,["functionDeclarations"]);if(t!=null){let f=t;Array.isArray(f)&&(f=f.map(h=>h)),d(e,["functionDeclarations"],f)}if(l(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=l(n,["googleSearchRetrieval"]);i!=null&&d(e,["googleSearchRetrieval"],i);const o=l(n,["computerUse"]);o!=null&&d(e,["computerUse"],o);const r=l(n,["fileSearch"]);r!=null&&d(e,["fileSearch"],r);const s=l(n,["codeExecution"]);if(s!=null&&d(e,["codeExecution"],s),l(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const a=l(n,["googleMaps"]);a!=null&&d(e,["googleMaps"],zh(a));const u=l(n,["googleSearch"]);u!=null&&d(e,["googleSearch"],Wh(u));const c=l(n,["urlContext"]);return c!=null&&d(e,["urlContext"],c),e}function ep(n){const e={},t=l(n,["functionDeclarations"]);if(t!=null){let h=t;Array.isArray(h)&&(h=h.map(p=>Hh(p))),d(e,["functionDeclarations"],h)}const i=l(n,["retrieval"]);i!=null&&d(e,["retrieval"],i);const o=l(n,["googleSearchRetrieval"]);o!=null&&d(e,["googleSearchRetrieval"],o);const r=l(n,["computerUse"]);if(r!=null&&d(e,["computerUse"],r),l(n,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const s=l(n,["codeExecution"]);s!=null&&d(e,["codeExecution"],s);const a=l(n,["enterpriseWebSearch"]);a!=null&&d(e,["enterpriseWebSearch"],a);const u=l(n,["googleMaps"]);u!=null&&d(e,["googleMaps"],u);const c=l(n,["googleSearch"]);c!=null&&d(e,["googleSearch"],c);const f=l(n,["urlContext"]);return f!=null&&d(e,["urlContext"],f),e}function tp(n,e){const t={},i=l(n,["ttl"]);e!==void 0&&i!=null&&d(e,["ttl"],i);const o=l(n,["expireTime"]);return e!==void 0&&o!=null&&d(e,["expireTime"],o),t}function np(n,e){const t={},i=l(n,["ttl"]);e!==void 0&&i!=null&&d(e,["ttl"],i);const o=l(n,["expireTime"]);return e!==void 0&&o!=null&&d(e,["expireTime"],o),t}function ip(n,e){const t={},i=l(e,["name"]);i!=null&&d(t,["_url","name"],Nn(n,i));const o=l(e,["config"]);return o!=null&&tp(o,t),t}function op(n,e){const t={},i=l(e,["name"]);i!=null&&d(t,["_url","name"],Nn(n,i));const o=l(e,["config"]);return o!=null&&np(o,t),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class rp extends Dn{constructor(e){super(),this.apiClient=e,this.list=async(t={})=>new pi(Pn.PAGED_ITEM_CACHED_CONTENTS,i=>this.listInternal(i),await this.listInternal(t),t)}async create(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=Dh(this.apiClient,e);return a=Te("cachedContents",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>f)}else{const c=bh(this.apiClient,e);return a=Te("cachedContents",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>f)}}async get(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=Vh(this.apiClient,e);return a=Te("{name}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>f)}else{const c=Gh(this.apiClient,e);return a=Te("{name}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>f)}}async delete(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=Uh(this.apiClient,e);return a=Te("{name}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=Fh(f),p=new jl;return Object.assign(p,h),p})}else{const c=Nh(this.apiClient,e);return a=Te("{name}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"DELETE",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=Lh(f),p=new jl;return Object.assign(p,h),p})}}async update(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=op(this.apiClient,e);return a=Te("{name}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"PATCH",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>f)}else{const c=ip(this.apiClient,e);return a=Te("{name}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"PATCH",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>f)}}async listInternal(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=Yh(e);return a=Te("cachedContents",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=Kh(f),p=new eu;return Object.assign(p,h),p})}else{const c=Xh(e);return a=Te("cachedContents",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=Jh(f),p=new eu;return Object.assign(p,h),p})}}}function au(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function mt(n){return this instanceof mt?(this.v=n,this):new mt(n)}function Fi(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),o,r=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(m){return function(E){return Promise.resolve(E).then(m,h)}}function a(m,E){i[m]&&(o[m]=function(y){return new Promise(function(S,g){r.push([m,y,S,g])>1||u(m,y)})},E&&(o[m]=E(o[m])))}function u(m,E){try{c(i[m](E))}catch(y){p(r[0][3],y)}}function c(m){m.value instanceof mt?Promise.resolve(m.value.v).then(f,h):p(r[0][2],m)}function f(m){u("next",m)}function h(m){u("throw",m)}function p(m,E){m(E),r.shift(),r.length&&u(r[0][0],r[0][1])}}function po(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof au=="function"?au(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(r){t[r]=n[r]&&function(s){return new Promise(function(a,u){s=n[r](s),o(a,u,s.done,s.value)})}}function o(r,s,a,u){Promise.resolve(u).then(function(c){r({value:c,done:a})},s)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function sp(n){var e;if(n.candidates==null||n.candidates.length===0)return!1;const t=(e=n.candidates[0])===null||e===void 0?void 0:e.content;return t===void 0?!1:zc(t)}function zc(n){if(n.parts===void 0||n.parts.length===0)return!1;for(const e of n.parts)if(e===void 0||Object.keys(e).length===0)return!1;return!0}function ap(n){if(n.length!==0){for(const e of n)if(e.role!=="user"&&e.role!=="model")throw new Error(`Role must be user or model, but got ${e.role}.`)}}function lu(n){if(n===void 0||n.length===0)return[];const e=[],t=n.length;let i=0;for(;i<t;)if(n[i].role==="user")e.push(n[i]),i++;else{const o=[];let r=!0;for(;i<t&&n[i].role==="model";)o.push(n[i]),r&&!zc(n[i])&&(r=!1),i++;r?e.push(...o):e.pop()}return e}class lp{constructor(e,t){this.modelsModule=e,this.apiClient=t}create(e){return new up(this.apiClient,this.modelsModule,e.model,e.config,structuredClone(e.history))}}class up{constructor(e,t,i,o={},r=[]){this.apiClient=e,this.modelsModule=t,this.model=i,this.config=o,this.history=r,this.sendPromise=Promise.resolve(),ap(r)}async sendMessage(e){var t;await this.sendPromise;const i=Dt(e.message),o=this.modelsModule.generateContent({model:this.model,contents:this.getHistory(!0).concat(i),config:(t=e.config)!==null&&t!==void 0?t:this.config});return this.sendPromise=(async()=>{var r,s,a;const u=await o,c=(s=(r=u.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content,f=u.automaticFunctionCallingHistory,h=this.getHistory(!0).length;let p=[];f!=null&&(p=(a=f.slice(h))!==null&&a!==void 0?a:[]);const m=c?[c]:[];this.recordHistory(i,m,p)})(),await this.sendPromise.catch(()=>{this.sendPromise=Promise.resolve()}),o}async sendMessageStream(e){var t;await this.sendPromise;const i=Dt(e.message),o=this.modelsModule.generateContentStream({model:this.model,contents:this.getHistory(!0).concat(i),config:(t=e.config)!==null&&t!==void 0?t:this.config});this.sendPromise=o.then(()=>{}).catch(()=>{});const r=await o;return this.processStreamResponse(r,i)}getHistory(e=!1){const t=e?lu(this.history):this.history;return structuredClone(t)}processStreamResponse(e,t){var i,o;return Fi(this,arguments,function*(){var s,a,u,c;const f=[];try{for(var h=!0,p=po(e),m;m=yield mt(p.next()),s=m.done,!s;h=!0){c=m.value,h=!1;const E=c;if(sp(E)){const y=(o=(i=E.candidates)===null||i===void 0?void 0:i[0])===null||o===void 0?void 0:o.content;y!==void 0&&f.push(y)}yield yield mt(E)}}catch(E){a={error:E}}finally{try{!h&&!s&&(u=p.return)&&(yield mt(u.call(p)))}finally{if(a)throw a.error}}this.recordHistory(t,f)})}recordHistory(e,t,i){let o=[];t.length>0&&t.every(r=>r.role!==void 0)?o=t:o.push({role:"model",parts:[]}),i&&i.length>0?this.history.push(...lu(i)):this.history.push(e),this.history.push(...o)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Pr extends Error{constructor(e){super(e.message),this.name="ApiError",this.status=e.status,Object.setPrototypeOf(this,Pr.prototype)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function cp(n){const e={},t=l(n,["file"]);return t!=null&&d(e,["file"],t),e}function dp(n){const e={},t=l(n,["sdkHttpResponse"]);return t!=null&&d(e,["sdkHttpResponse"],t),e}function fp(n){const e={},t=l(n,["name"]);return t!=null&&d(e,["_url","file"],Fc(t)),e}function hp(n){const e={},t=l(n,["sdkHttpResponse"]);return t!=null&&d(e,["sdkHttpResponse"],t),e}function pp(n){const e={},t=l(n,["name"]);return t!=null&&d(e,["_url","file"],Fc(t)),e}function mp(n,e){const t={},i=l(n,["pageSize"]);e!==void 0&&i!=null&&d(e,["_query","pageSize"],i);const o=l(n,["pageToken"]);return e!==void 0&&o!=null&&d(e,["_query","pageToken"],o),t}function gp(n){const e={},t=l(n,["config"]);return t!=null&&mp(t,e),e}function _p(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["nextPageToken"]);i!=null&&d(e,["nextPageToken"],i);const o=l(n,["files"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),d(e,["files"],r)}return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class vp extends Dn{constructor(e){super(),this.apiClient=e,this.list=async(t={})=>new pi(Pn.PAGED_ITEM_FILES,i=>this.listInternal(i),await this.listInternal(t),t)}async upload(e){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");return this.apiClient.uploadFile(e.file,e.config).then(t=>t)}async download(e){await this.apiClient.downloadFile(e)}async listInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=gp(e);return r=Te("files",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json().then(c=>{const f=c;return f.sdkHttpResponse={headers:u.headers},f})),o.then(u=>{const c=_p(u),f=new Tf;return Object.assign(f,c),f})}}async createInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=cp(e);return r=Te("upload/v1beta/files",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json()),o.then(u=>{const c=dp(u),f=new xf;return Object.assign(f,c),f})}}async get(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=pp(e);return r=Te("files/{file}",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json()),o.then(u=>u)}}async delete(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=fp(e);return r=Te("files/{file}",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json().then(c=>{const f=c;return f.sdkHttpResponse={headers:u.headers},f})),o.then(u=>{const c=hp(u),f=new Mf;return Object.assign(f,c),f})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ur(n){const e={},t=l(n,["data"]);if(t!=null&&d(e,["data"],t),l(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=l(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function Sp(n){const e={},t=l(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>Lp(r))),d(e,["parts"],o)}const i=l(n,["role"]);return i!=null&&d(e,["role"],i),e}function Ep(n){const e={};if(l(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=l(n,["fileUri"]);t!=null&&d(e,["fileUri"],t);const i=l(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function yp(n){const e={},t=l(n,["id"]);t!=null&&d(e,["id"],t);const i=l(n,["args"]);i!=null&&d(e,["args"],i);const o=l(n,["name"]);if(o!=null&&d(e,["name"],o),l(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(l(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return e}function Tp(n){const e={};if(l(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const t=l(n,["description"]);t!=null&&d(e,["description"],t);const i=l(n,["name"]);i!=null&&d(e,["name"],i);const o=l(n,["parameters"]);o!=null&&d(e,["parameters"],o);const r=l(n,["parametersJsonSchema"]);r!=null&&d(e,["parametersJsonSchema"],r);const s=l(n,["response"]);s!=null&&d(e,["response"],s);const a=l(n,["responseJsonSchema"]);return a!=null&&d(e,["responseJsonSchema"],a),e}function xp(n){const e={},t=l(n,["modelSelectionConfig"]);t!=null&&d(e,["modelConfig"],t);const i=l(n,["responseJsonSchema"]);i!=null&&d(e,["responseJsonSchema"],i);const o=l(n,["audioTimestamp"]);o!=null&&d(e,["audioTimestamp"],o);const r=l(n,["candidateCount"]);r!=null&&d(e,["candidateCount"],r);const s=l(n,["enableAffectiveDialog"]);s!=null&&d(e,["enableAffectiveDialog"],s);const a=l(n,["frequencyPenalty"]);a!=null&&d(e,["frequencyPenalty"],a);const u=l(n,["logprobs"]);u!=null&&d(e,["logprobs"],u);const c=l(n,["maxOutputTokens"]);c!=null&&d(e,["maxOutputTokens"],c);const f=l(n,["mediaResolution"]);f!=null&&d(e,["mediaResolution"],f);const h=l(n,["presencePenalty"]);h!=null&&d(e,["presencePenalty"],h);const p=l(n,["responseLogprobs"]);p!=null&&d(e,["responseLogprobs"],p);const m=l(n,["responseMimeType"]);m!=null&&d(e,["responseMimeType"],m);const E=l(n,["responseModalities"]);E!=null&&d(e,["responseModalities"],E);const y=l(n,["responseSchema"]);y!=null&&d(e,["responseSchema"],y);const S=l(n,["routingConfig"]);S!=null&&d(e,["routingConfig"],S);const g=l(n,["seed"]);g!=null&&d(e,["seed"],g);const w=l(n,["speechConfig"]);w!=null&&d(e,["speechConfig"],Wc(w));const C=l(n,["stopSequences"]);C!=null&&d(e,["stopSequences"],C);const M=l(n,["temperature"]);M!=null&&d(e,["temperature"],M);const O=l(n,["thinkingConfig"]);O!=null&&d(e,["thinkingConfig"],O);const F=l(n,["topK"]);F!=null&&d(e,["topK"],F);const N=l(n,["topP"]);if(N!=null&&d(e,["topP"],N),l(n,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return e}function Mp(n){const e={};if(l(n,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const t=l(n,["enableWidget"]);return t!=null&&d(e,["enableWidget"],t),e}function Ap(n){const e={};if(l(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(l(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const t=l(n,["timeRangeFilter"]);return t!=null&&d(e,["timeRangeFilter"],t),e}function Cp(n,e){const t={},i=l(n,["generationConfig"]);e!==void 0&&i!=null&&d(e,["setup","generationConfig"],i);const o=l(n,["responseModalities"]);e!==void 0&&o!=null&&d(e,["setup","generationConfig","responseModalities"],o);const r=l(n,["temperature"]);e!==void 0&&r!=null&&d(e,["setup","generationConfig","temperature"],r);const s=l(n,["topP"]);e!==void 0&&s!=null&&d(e,["setup","generationConfig","topP"],s);const a=l(n,["topK"]);e!==void 0&&a!=null&&d(e,["setup","generationConfig","topK"],a);const u=l(n,["maxOutputTokens"]);e!==void 0&&u!=null&&d(e,["setup","generationConfig","maxOutputTokens"],u);const c=l(n,["mediaResolution"]);e!==void 0&&c!=null&&d(e,["setup","generationConfig","mediaResolution"],c);const f=l(n,["seed"]);e!==void 0&&f!=null&&d(e,["setup","generationConfig","seed"],f);const h=l(n,["speechConfig"]);e!==void 0&&h!=null&&d(e,["setup","generationConfig","speechConfig"],Ra(h));const p=l(n,["thinkingConfig"]);e!==void 0&&p!=null&&d(e,["setup","generationConfig","thinkingConfig"],p);const m=l(n,["enableAffectiveDialog"]);e!==void 0&&m!=null&&d(e,["setup","generationConfig","enableAffectiveDialog"],m);const E=l(n,["systemInstruction"]);e!==void 0&&E!=null&&d(e,["setup","systemInstruction"],Sp(Dt(E)));const y=l(n,["tools"]);if(e!==void 0&&y!=null){let F=Ji(y);Array.isArray(F)&&(F=F.map(N=>Bp(Yi(N)))),d(e,["setup","tools"],F)}const S=l(n,["sessionResumption"]);e!==void 0&&S!=null&&d(e,["setup","sessionResumption"],Fp(S));const g=l(n,["inputAudioTranscription"]);e!==void 0&&g!=null&&d(e,["setup","inputAudioTranscription"],g);const w=l(n,["outputAudioTranscription"]);e!==void 0&&w!=null&&d(e,["setup","outputAudioTranscription"],w);const C=l(n,["realtimeInputConfig"]);e!==void 0&&C!=null&&d(e,["setup","realtimeInputConfig"],C);const M=l(n,["contextWindowCompression"]);e!==void 0&&M!=null&&d(e,["setup","contextWindowCompression"],M);const O=l(n,["proactivity"]);return e!==void 0&&O!=null&&d(e,["setup","proactivity"],O),t}function Rp(n,e){const t={},i=l(n,["generationConfig"]);e!==void 0&&i!=null&&d(e,["setup","generationConfig"],xp(i));const o=l(n,["responseModalities"]);e!==void 0&&o!=null&&d(e,["setup","generationConfig","responseModalities"],o);const r=l(n,["temperature"]);e!==void 0&&r!=null&&d(e,["setup","generationConfig","temperature"],r);const s=l(n,["topP"]);e!==void 0&&s!=null&&d(e,["setup","generationConfig","topP"],s);const a=l(n,["topK"]);e!==void 0&&a!=null&&d(e,["setup","generationConfig","topK"],a);const u=l(n,["maxOutputTokens"]);e!==void 0&&u!=null&&d(e,["setup","generationConfig","maxOutputTokens"],u);const c=l(n,["mediaResolution"]);e!==void 0&&c!=null&&d(e,["setup","generationConfig","mediaResolution"],c);const f=l(n,["seed"]);e!==void 0&&f!=null&&d(e,["setup","generationConfig","seed"],f);const h=l(n,["speechConfig"]);e!==void 0&&h!=null&&d(e,["setup","generationConfig","speechConfig"],Wc(Ra(h)));const p=l(n,["thinkingConfig"]);e!==void 0&&p!=null&&d(e,["setup","generationConfig","thinkingConfig"],p);const m=l(n,["enableAffectiveDialog"]);e!==void 0&&m!=null&&d(e,["setup","generationConfig","enableAffectiveDialog"],m);const E=l(n,["systemInstruction"]);e!==void 0&&E!=null&&d(e,["setup","systemInstruction"],Dt(E));const y=l(n,["tools"]);if(e!==void 0&&y!=null){let F=Ji(y);Array.isArray(F)&&(F=F.map(N=>Op(Yi(N)))),d(e,["setup","tools"],F)}const S=l(n,["sessionResumption"]);e!==void 0&&S!=null&&d(e,["setup","sessionResumption"],S);const g=l(n,["inputAudioTranscription"]);e!==void 0&&g!=null&&d(e,["setup","inputAudioTranscription"],g);const w=l(n,["outputAudioTranscription"]);e!==void 0&&w!=null&&d(e,["setup","outputAudioTranscription"],w);const C=l(n,["realtimeInputConfig"]);e!==void 0&&C!=null&&d(e,["setup","realtimeInputConfig"],C);const M=l(n,["contextWindowCompression"]);e!==void 0&&M!=null&&d(e,["setup","contextWindowCompression"],M);const O=l(n,["proactivity"]);return e!==void 0&&O!=null&&d(e,["setup","proactivity"],O),t}function wp(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["setup","model"],at(n,i));const o=l(e,["config"]);return o!=null&&d(t,["config"],Cp(o,t)),t}function Ip(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["setup","model"],at(n,i));const o=l(e,["config"]);return o!=null&&d(t,["config"],Rp(o,t)),t}function Pp(n){const e={},t=l(n,["musicGenerationConfig"]);return t!=null&&d(e,["musicGenerationConfig"],t),e}function bp(n){const e={},t=l(n,["weightedPrompts"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>o)),d(e,["weightedPrompts"],i)}return e}function Dp(n){const e={},t=l(n,["media"]);if(t!=null){let c=bc(t);Array.isArray(c)&&(c=c.map(f=>ur(f))),d(e,["mediaChunks"],c)}const i=l(n,["audio"]);i!=null&&d(e,["audio"],ur(Nc(i)));const o=l(n,["audioStreamEnd"]);o!=null&&d(e,["audioStreamEnd"],o);const r=l(n,["video"]);r!=null&&d(e,["video"],ur(Dc(r)));const s=l(n,["text"]);s!=null&&d(e,["text"],s);const a=l(n,["activityStart"]);a!=null&&d(e,["activityStart"],a);const u=l(n,["activityEnd"]);return u!=null&&d(e,["activityEnd"],u),e}function Np(n){const e={},t=l(n,["media"]);if(t!=null){let c=bc(t);Array.isArray(c)&&(c=c.map(f=>f)),d(e,["mediaChunks"],c)}const i=l(n,["audio"]);i!=null&&d(e,["audio"],Nc(i));const o=l(n,["audioStreamEnd"]);o!=null&&d(e,["audioStreamEnd"],o);const r=l(n,["video"]);r!=null&&d(e,["video"],Dc(r));const s=l(n,["text"]);s!=null&&d(e,["text"],s);const a=l(n,["activityStart"]);a!=null&&d(e,["activityStart"],a);const u=l(n,["activityEnd"]);return u!=null&&d(e,["activityEnd"],u),e}function Up(n){const e={},t=l(n,["setupComplete"]);t!=null&&d(e,["setupComplete"],t);const i=l(n,["serverContent"]);i!=null&&d(e,["serverContent"],i);const o=l(n,["toolCall"]);o!=null&&d(e,["toolCall"],o);const r=l(n,["toolCallCancellation"]);r!=null&&d(e,["toolCallCancellation"],r);const s=l(n,["usageMetadata"]);s!=null&&d(e,["usageMetadata"],kp(s));const a=l(n,["goAway"]);a!=null&&d(e,["goAway"],a);const u=l(n,["sessionResumptionUpdate"]);return u!=null&&d(e,["sessionResumptionUpdate"],u),e}function Lp(n){const e={},t=l(n,["mediaResolution"]);t!=null&&d(e,["mediaResolution"],t);const i=l(n,["codeExecutionResult"]);i!=null&&d(e,["codeExecutionResult"],i);const o=l(n,["executableCode"]);o!=null&&d(e,["executableCode"],o);const r=l(n,["fileData"]);r!=null&&d(e,["fileData"],Ep(r));const s=l(n,["functionCall"]);s!=null&&d(e,["functionCall"],yp(s));const a=l(n,["functionResponse"]);a!=null&&d(e,["functionResponse"],a);const u=l(n,["inlineData"]);u!=null&&d(e,["inlineData"],ur(u));const c=l(n,["text"]);c!=null&&d(e,["text"],c);const f=l(n,["thought"]);f!=null&&d(e,["thought"],f);const h=l(n,["thoughtSignature"]);h!=null&&d(e,["thoughtSignature"],h);const p=l(n,["videoMetadata"]);return p!=null&&d(e,["videoMetadata"],p),e}function Fp(n){const e={},t=l(n,["handle"]);if(t!=null&&d(e,["handle"],t),l(n,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return e}function Wc(n){const e={},t=l(n,["languageCode"]);t!=null&&d(e,["languageCode"],t);const i=l(n,["voiceConfig"]);if(i!=null&&d(e,["voiceConfig"],i),l(n,["multiSpeakerVoiceConfig"])!==void 0)throw new Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");return e}function Bp(n){const e={},t=l(n,["functionDeclarations"]);if(t!=null){let f=t;Array.isArray(f)&&(f=f.map(h=>h)),d(e,["functionDeclarations"],f)}if(l(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=l(n,["googleSearchRetrieval"]);i!=null&&d(e,["googleSearchRetrieval"],i);const o=l(n,["computerUse"]);o!=null&&d(e,["computerUse"],o);const r=l(n,["fileSearch"]);r!=null&&d(e,["fileSearch"],r);const s=l(n,["codeExecution"]);if(s!=null&&d(e,["codeExecution"],s),l(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const a=l(n,["googleMaps"]);a!=null&&d(e,["googleMaps"],Mp(a));const u=l(n,["googleSearch"]);u!=null&&d(e,["googleSearch"],Ap(u));const c=l(n,["urlContext"]);return c!=null&&d(e,["urlContext"],c),e}function Op(n){const e={},t=l(n,["functionDeclarations"]);if(t!=null){let h=t;Array.isArray(h)&&(h=h.map(p=>Tp(p))),d(e,["functionDeclarations"],h)}const i=l(n,["retrieval"]);i!=null&&d(e,["retrieval"],i);const o=l(n,["googleSearchRetrieval"]);o!=null&&d(e,["googleSearchRetrieval"],o);const r=l(n,["computerUse"]);if(r!=null&&d(e,["computerUse"],r),l(n,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const s=l(n,["codeExecution"]);s!=null&&d(e,["codeExecution"],s);const a=l(n,["enterpriseWebSearch"]);a!=null&&d(e,["enterpriseWebSearch"],a);const u=l(n,["googleMaps"]);u!=null&&d(e,["googleMaps"],u);const c=l(n,["googleSearch"]);c!=null&&d(e,["googleSearch"],c);const f=l(n,["urlContext"]);return f!=null&&d(e,["urlContext"],f),e}function kp(n){const e={},t=l(n,["promptTokenCount"]);t!=null&&d(e,["promptTokenCount"],t);const i=l(n,["cachedContentTokenCount"]);i!=null&&d(e,["cachedContentTokenCount"],i);const o=l(n,["candidatesTokenCount"]);o!=null&&d(e,["responseTokenCount"],o);const r=l(n,["toolUsePromptTokenCount"]);r!=null&&d(e,["toolUsePromptTokenCount"],r);const s=l(n,["thoughtsTokenCount"]);s!=null&&d(e,["thoughtsTokenCount"],s);const a=l(n,["totalTokenCount"]);a!=null&&d(e,["totalTokenCount"],a);const u=l(n,["promptTokensDetails"]);if(u!=null){let m=u;Array.isArray(m)&&(m=m.map(E=>E)),d(e,["promptTokensDetails"],m)}const c=l(n,["cacheTokensDetails"]);if(c!=null){let m=c;Array.isArray(m)&&(m=m.map(E=>E)),d(e,["cacheTokensDetails"],m)}const f=l(n,["candidatesTokensDetails"]);if(f!=null){let m=f;Array.isArray(m)&&(m=m.map(E=>E)),d(e,["responseTokensDetails"],m)}const h=l(n,["toolUsePromptTokensDetails"]);if(h!=null){let m=h;Array.isArray(m)&&(m=m.map(E=>E)),d(e,["toolUsePromptTokensDetails"],m)}const p=l(n,["trafficType"]);return p!=null&&d(e,["trafficType"],p),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Hp(n){const e={},t=l(n,["data"]);if(t!=null&&d(e,["data"],t),l(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=l(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function Gp(n){const e={},t=l(n,["content"]);t!=null&&d(e,["content"],t);const i=l(n,["citationMetadata"]);i!=null&&d(e,["citationMetadata"],Vp(i));const o=l(n,["tokenCount"]);o!=null&&d(e,["tokenCount"],o);const r=l(n,["finishReason"]);r!=null&&d(e,["finishReason"],r);const s=l(n,["avgLogprobs"]);s!=null&&d(e,["avgLogprobs"],s);const a=l(n,["groundingMetadata"]);a!=null&&d(e,["groundingMetadata"],a);const u=l(n,["index"]);u!=null&&d(e,["index"],u);const c=l(n,["logprobsResult"]);c!=null&&d(e,["logprobsResult"],c);const f=l(n,["safetyRatings"]);if(f!=null){let p=f;Array.isArray(p)&&(p=p.map(m=>m)),d(e,["safetyRatings"],p)}const h=l(n,["urlContextMetadata"]);return h!=null&&d(e,["urlContextMetadata"],h),e}function Vp(n){const e={},t=l(n,["citationSources"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>o)),d(e,["citations"],i)}return e}function zp(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["contents"]);if(o!=null){let r=jt(o);Array.isArray(r)&&(r=r.map(s=>s)),d(t,["contents"],r)}return t}function Wp(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["tokensInfo"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>r)),d(e,["tokensInfo"],o)}return e}function qp(n){const e={},t=l(n,["values"]);t!=null&&d(e,["values"],t);const i=l(n,["statistics"]);return i!=null&&d(e,["statistics"],$p(i)),e}function $p(n){const e={},t=l(n,["truncated"]);t!=null&&d(e,["truncated"],t);const i=l(n,["token_count"]);return i!=null&&d(e,["tokenCount"],i),e}function br(n){const e={},t=l(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>tg(r))),d(e,["parts"],o)}const i=l(n,["role"]);return i!=null&&d(e,["role"],i),e}function Xp(n){const e={},t=l(n,["controlType"]);t!=null&&d(e,["controlType"],t);const i=l(n,["enableControlImageComputation"]);return i!=null&&d(e,["computeControl"],i),e}function Yp(n){const e={};if(l(n,["systemInstruction"])!==void 0)throw new Error("systemInstruction parameter is not supported in Gemini API.");if(l(n,["tools"])!==void 0)throw new Error("tools parameter is not supported in Gemini API.");if(l(n,["generationConfig"])!==void 0)throw new Error("generationConfig parameter is not supported in Gemini API.");return e}function Jp(n,e){const t={},i=l(n,["systemInstruction"]);e!==void 0&&i!=null&&d(e,["systemInstruction"],Dt(i));const o=l(n,["tools"]);if(e!==void 0&&o!=null){let s=o;Array.isArray(s)&&(s=s.map(a=>Jc(a))),d(e,["tools"],s)}const r=l(n,["generationConfig"]);return e!==void 0&&r!=null&&d(e,["generationConfig"],Hm(r)),t}function Kp(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["contents"]);if(o!=null){let s=jt(o);Array.isArray(s)&&(s=s.map(a=>br(a))),d(t,["contents"],s)}const r=l(e,["config"]);return r!=null&&Yp(r),t}function Zp(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["contents"]);if(o!=null){let s=jt(o);Array.isArray(s)&&(s=s.map(a=>a)),d(t,["contents"],s)}const r=l(e,["config"]);return r!=null&&Jp(r,t),t}function Qp(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["totalTokens"]);i!=null&&d(e,["totalTokens"],i);const o=l(n,["cachedContentTokenCount"]);return o!=null&&d(e,["cachedContentTokenCount"],o),e}function jp(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["totalTokens"]);return i!=null&&d(e,["totalTokens"],i),e}function em(n,e){const t={},i=l(e,["model"]);return i!=null&&d(t,["_url","name"],at(n,i)),t}function tm(n,e){const t={},i=l(e,["model"]);return i!=null&&d(t,["_url","name"],at(n,i)),t}function nm(n){const e={},t=l(n,["sdkHttpResponse"]);return t!=null&&d(e,["sdkHttpResponse"],t),e}function im(n){const e={},t=l(n,["sdkHttpResponse"]);return t!=null&&d(e,["sdkHttpResponse"],t),e}function om(n,e){const t={},i=l(n,["outputGcsUri"]);e!==void 0&&i!=null&&d(e,["parameters","storageUri"],i);const o=l(n,["negativePrompt"]);e!==void 0&&o!=null&&d(e,["parameters","negativePrompt"],o);const r=l(n,["numberOfImages"]);e!==void 0&&r!=null&&d(e,["parameters","sampleCount"],r);const s=l(n,["aspectRatio"]);e!==void 0&&s!=null&&d(e,["parameters","aspectRatio"],s);const a=l(n,["guidanceScale"]);e!==void 0&&a!=null&&d(e,["parameters","guidanceScale"],a);const u=l(n,["seed"]);e!==void 0&&u!=null&&d(e,["parameters","seed"],u);const c=l(n,["safetyFilterLevel"]);e!==void 0&&c!=null&&d(e,["parameters","safetySetting"],c);const f=l(n,["personGeneration"]);e!==void 0&&f!=null&&d(e,["parameters","personGeneration"],f);const h=l(n,["includeSafetyAttributes"]);e!==void 0&&h!=null&&d(e,["parameters","includeSafetyAttributes"],h);const p=l(n,["includeRaiReason"]);e!==void 0&&p!=null&&d(e,["parameters","includeRaiReason"],p);const m=l(n,["language"]);e!==void 0&&m!=null&&d(e,["parameters","language"],m);const E=l(n,["outputMimeType"]);e!==void 0&&E!=null&&d(e,["parameters","outputOptions","mimeType"],E);const y=l(n,["outputCompressionQuality"]);e!==void 0&&y!=null&&d(e,["parameters","outputOptions","compressionQuality"],y);const S=l(n,["addWatermark"]);e!==void 0&&S!=null&&d(e,["parameters","addWatermark"],S);const g=l(n,["labels"]);e!==void 0&&g!=null&&d(e,["labels"],g);const w=l(n,["editMode"]);e!==void 0&&w!=null&&d(e,["parameters","editMode"],w);const C=l(n,["baseSteps"]);return e!==void 0&&C!=null&&d(e,["parameters","editConfig","baseSteps"],C),t}function rm(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["prompt"]);o!=null&&d(t,["instances[0]","prompt"],o);const r=l(e,["referenceImages"]);if(r!=null){let a=r;Array.isArray(a)&&(a=a.map(u=>ag(u))),d(t,["instances[0]","referenceImages"],a)}const s=l(e,["config"]);return s!=null&&om(s,t),t}function sm(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["predictions"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>Dr(r))),d(e,["generatedImages"],o)}return e}function am(n,e){const t={},i=l(n,["taskType"]);e!==void 0&&i!=null&&d(e,["requests[]","taskType"],i);const o=l(n,["title"]);e!==void 0&&o!=null&&d(e,["requests[]","title"],o);const r=l(n,["outputDimensionality"]);if(e!==void 0&&r!=null&&d(e,["requests[]","outputDimensionality"],r),l(n,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(l(n,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return t}function lm(n,e){const t={},i=l(n,["taskType"]);e!==void 0&&i!=null&&d(e,["instances[]","task_type"],i);const o=l(n,["title"]);e!==void 0&&o!=null&&d(e,["instances[]","title"],o);const r=l(n,["outputDimensionality"]);e!==void 0&&r!=null&&d(e,["parameters","outputDimensionality"],r);const s=l(n,["mimeType"]);e!==void 0&&s!=null&&d(e,["instances[]","mimeType"],s);const a=l(n,["autoTruncate"]);return e!==void 0&&a!=null&&d(e,["parameters","autoTruncate"],a),t}function um(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["contents"]);if(o!=null){let a=Ma(n,o);Array.isArray(a)&&(a=a.map(u=>u)),d(t,["requests[]","content"],a)}const r=l(e,["config"]);r!=null&&am(r,t);const s=l(e,["model"]);return s!==void 0&&d(t,["requests[]","model"],at(n,s)),t}function cm(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["contents"]);if(o!=null){let s=Ma(n,o);Array.isArray(s)&&(s=s.map(a=>a)),d(t,["instances[]","content"],s)}const r=l(e,["config"]);return r!=null&&lm(r,t),t}function dm(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["embeddings"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>s)),d(e,["embeddings"],r)}const o=l(n,["metadata"]);return o!=null&&d(e,["metadata"],o),e}function fm(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["predictions[]","embeddings"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>qp(s))),d(e,["embeddings"],r)}const o=l(n,["metadata"]);return o!=null&&d(e,["metadata"],o),e}function hm(n){const e={},t=l(n,["endpoint"]);t!=null&&d(e,["name"],t);const i=l(n,["deployedModelId"]);return i!=null&&d(e,["deployedModelId"],i),e}function pm(n){const e={};if(l(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=l(n,["fileUri"]);t!=null&&d(e,["fileUri"],t);const i=l(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function mm(n){const e={},t=l(n,["id"]);t!=null&&d(e,["id"],t);const i=l(n,["args"]);i!=null&&d(e,["args"],i);const o=l(n,["name"]);if(o!=null&&d(e,["name"],o),l(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(l(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return e}function gm(n){const e={},t=l(n,["mode"]);t!=null&&d(e,["mode"],t);const i=l(n,["allowedFunctionNames"]);if(i!=null&&d(e,["allowedFunctionNames"],i),l(n,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return e}function _m(n){const e={};if(l(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const t=l(n,["description"]);t!=null&&d(e,["description"],t);const i=l(n,["name"]);i!=null&&d(e,["name"],i);const o=l(n,["parameters"]);o!=null&&d(e,["parameters"],o);const r=l(n,["parametersJsonSchema"]);r!=null&&d(e,["parametersJsonSchema"],r);const s=l(n,["response"]);s!=null&&d(e,["response"],s);const a=l(n,["responseJsonSchema"]);return a!=null&&d(e,["responseJsonSchema"],a),e}function vm(n,e,t){const i={},o=l(e,["systemInstruction"]);t!==void 0&&o!=null&&d(t,["systemInstruction"],br(Dt(o)));const r=l(e,["temperature"]);r!=null&&d(i,["temperature"],r);const s=l(e,["topP"]);s!=null&&d(i,["topP"],s);const a=l(e,["topK"]);a!=null&&d(i,["topK"],a);const u=l(e,["candidateCount"]);u!=null&&d(i,["candidateCount"],u);const c=l(e,["maxOutputTokens"]);c!=null&&d(i,["maxOutputTokens"],c);const f=l(e,["stopSequences"]);f!=null&&d(i,["stopSequences"],f);const h=l(e,["responseLogprobs"]);h!=null&&d(i,["responseLogprobs"],h);const p=l(e,["logprobs"]);p!=null&&d(i,["logprobs"],p);const m=l(e,["presencePenalty"]);m!=null&&d(i,["presencePenalty"],m);const E=l(e,["frequencyPenalty"]);E!=null&&d(i,["frequencyPenalty"],E);const y=l(e,["seed"]);y!=null&&d(i,["seed"],y);const S=l(e,["responseMimeType"]);S!=null&&d(i,["responseMimeType"],S);const g=l(e,["responseSchema"]);g!=null&&d(i,["responseSchema"],Aa(g));const w=l(e,["responseJsonSchema"]);if(w!=null&&d(i,["responseJsonSchema"],w),l(e,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(l(e,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const C=l(e,["safetySettings"]);if(t!==void 0&&C!=null){let q=C;Array.isArray(q)&&(q=q.map(Y=>lg(Y))),d(t,["safetySettings"],q)}const M=l(e,["tools"]);if(t!==void 0&&M!=null){let q=Ji(M);Array.isArray(q)&&(q=q.map(Y=>mg(Yi(Y)))),d(t,["tools"],q)}const O=l(e,["toolConfig"]);if(t!==void 0&&O!=null&&d(t,["toolConfig"],pg(O)),l(e,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const F=l(e,["cachedContent"]);t!==void 0&&F!=null&&d(t,["cachedContent"],Nn(n,F));const N=l(e,["responseModalities"]);N!=null&&d(i,["responseModalities"],N);const H=l(e,["mediaResolution"]);H!=null&&d(i,["mediaResolution"],H);const A=l(e,["speechConfig"]);if(A!=null&&d(i,["speechConfig"],Ca(A)),l(e,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const T=l(e,["thinkingConfig"]);T!=null&&d(i,["thinkingConfig"],T);const B=l(e,["imageConfig"]);return B!=null&&d(i,["imageConfig"],qm(B)),i}function Sm(n,e,t){const i={},o=l(e,["systemInstruction"]);t!==void 0&&o!=null&&d(t,["systemInstruction"],Dt(o));const r=l(e,["temperature"]);r!=null&&d(i,["temperature"],r);const s=l(e,["topP"]);s!=null&&d(i,["topP"],s);const a=l(e,["topK"]);a!=null&&d(i,["topK"],a);const u=l(e,["candidateCount"]);u!=null&&d(i,["candidateCount"],u);const c=l(e,["maxOutputTokens"]);c!=null&&d(i,["maxOutputTokens"],c);const f=l(e,["stopSequences"]);f!=null&&d(i,["stopSequences"],f);const h=l(e,["responseLogprobs"]);h!=null&&d(i,["responseLogprobs"],h);const p=l(e,["logprobs"]);p!=null&&d(i,["logprobs"],p);const m=l(e,["presencePenalty"]);m!=null&&d(i,["presencePenalty"],m);const E=l(e,["frequencyPenalty"]);E!=null&&d(i,["frequencyPenalty"],E);const y=l(e,["seed"]);y!=null&&d(i,["seed"],y);const S=l(e,["responseMimeType"]);S!=null&&d(i,["responseMimeType"],S);const g=l(e,["responseSchema"]);g!=null&&d(i,["responseSchema"],Aa(g));const w=l(e,["responseJsonSchema"]);w!=null&&d(i,["responseJsonSchema"],w);const C=l(e,["routingConfig"]);C!=null&&d(i,["routingConfig"],C);const M=l(e,["modelSelectionConfig"]);M!=null&&d(i,["modelConfig"],M);const O=l(e,["safetySettings"]);if(t!==void 0&&O!=null){let j=O;Array.isArray(j)&&(j=j.map(se=>se)),d(t,["safetySettings"],j)}const F=l(e,["tools"]);if(t!==void 0&&F!=null){let j=Ji(F);Array.isArray(j)&&(j=j.map(se=>Jc(Yi(se)))),d(t,["tools"],j)}const N=l(e,["toolConfig"]);t!==void 0&&N!=null&&d(t,["toolConfig"],N);const H=l(e,["labels"]);t!==void 0&&H!=null&&d(t,["labels"],H);const A=l(e,["cachedContent"]);t!==void 0&&A!=null&&d(t,["cachedContent"],Nn(n,A));const T=l(e,["responseModalities"]);T!=null&&d(i,["responseModalities"],T);const B=l(e,["mediaResolution"]);B!=null&&d(i,["mediaResolution"],B);const q=l(e,["speechConfig"]);q!=null&&d(i,["speechConfig"],Yc(Ca(q)));const Y=l(e,["audioTimestamp"]);Y!=null&&d(i,["audioTimestamp"],Y);const ie=l(e,["thinkingConfig"]);ie!=null&&d(i,["thinkingConfig"],ie);const le=l(e,["imageConfig"]);return le!=null&&d(i,["imageConfig"],$m(le)),i}function uu(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["contents"]);if(o!=null){let s=jt(o);Array.isArray(s)&&(s=s.map(a=>br(a))),d(t,["contents"],s)}const r=l(e,["config"]);return r!=null&&d(t,["generationConfig"],vm(n,r,t)),t}function cu(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["contents"]);if(o!=null){let s=jt(o);Array.isArray(s)&&(s=s.map(a=>a)),d(t,["contents"],s)}const r=l(e,["config"]);return r!=null&&d(t,["generationConfig"],Sm(n,r,t)),t}function du(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["candidates"]);if(i!=null){let u=i;Array.isArray(u)&&(u=u.map(c=>Gp(c))),d(e,["candidates"],u)}const o=l(n,["modelVersion"]);o!=null&&d(e,["modelVersion"],o);const r=l(n,["promptFeedback"]);r!=null&&d(e,["promptFeedback"],r);const s=l(n,["responseId"]);s!=null&&d(e,["responseId"],s);const a=l(n,["usageMetadata"]);return a!=null&&d(e,["usageMetadata"],a),e}function fu(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["candidates"]);if(i!=null){let c=i;Array.isArray(c)&&(c=c.map(f=>f)),d(e,["candidates"],c)}const o=l(n,["createTime"]);o!=null&&d(e,["createTime"],o);const r=l(n,["modelVersion"]);r!=null&&d(e,["modelVersion"],r);const s=l(n,["promptFeedback"]);s!=null&&d(e,["promptFeedback"],s);const a=l(n,["responseId"]);a!=null&&d(e,["responseId"],a);const u=l(n,["usageMetadata"]);return u!=null&&d(e,["usageMetadata"],u),e}function Em(n,e){const t={};if(l(n,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(l(n,["negativePrompt"])!==void 0)throw new Error("negativePrompt parameter is not supported in Gemini API.");const i=l(n,["numberOfImages"]);e!==void 0&&i!=null&&d(e,["parameters","sampleCount"],i);const o=l(n,["aspectRatio"]);e!==void 0&&o!=null&&d(e,["parameters","aspectRatio"],o);const r=l(n,["guidanceScale"]);if(e!==void 0&&r!=null&&d(e,["parameters","guidanceScale"],r),l(n,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const s=l(n,["safetyFilterLevel"]);e!==void 0&&s!=null&&d(e,["parameters","safetySetting"],s);const a=l(n,["personGeneration"]);e!==void 0&&a!=null&&d(e,["parameters","personGeneration"],a);const u=l(n,["includeSafetyAttributes"]);e!==void 0&&u!=null&&d(e,["parameters","includeSafetyAttributes"],u);const c=l(n,["includeRaiReason"]);e!==void 0&&c!=null&&d(e,["parameters","includeRaiReason"],c);const f=l(n,["language"]);e!==void 0&&f!=null&&d(e,["parameters","language"],f);const h=l(n,["outputMimeType"]);e!==void 0&&h!=null&&d(e,["parameters","outputOptions","mimeType"],h);const p=l(n,["outputCompressionQuality"]);if(e!==void 0&&p!=null&&d(e,["parameters","outputOptions","compressionQuality"],p),l(n,["addWatermark"])!==void 0)throw new Error("addWatermark parameter is not supported in Gemini API.");if(l(n,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const m=l(n,["imageSize"]);if(e!==void 0&&m!=null&&d(e,["parameters","sampleImageSize"],m),l(n,["enhancePrompt"])!==void 0)throw new Error("enhancePrompt parameter is not supported in Gemini API.");return t}function ym(n,e){const t={},i=l(n,["outputGcsUri"]);e!==void 0&&i!=null&&d(e,["parameters","storageUri"],i);const o=l(n,["negativePrompt"]);e!==void 0&&o!=null&&d(e,["parameters","negativePrompt"],o);const r=l(n,["numberOfImages"]);e!==void 0&&r!=null&&d(e,["parameters","sampleCount"],r);const s=l(n,["aspectRatio"]);e!==void 0&&s!=null&&d(e,["parameters","aspectRatio"],s);const a=l(n,["guidanceScale"]);e!==void 0&&a!=null&&d(e,["parameters","guidanceScale"],a);const u=l(n,["seed"]);e!==void 0&&u!=null&&d(e,["parameters","seed"],u);const c=l(n,["safetyFilterLevel"]);e!==void 0&&c!=null&&d(e,["parameters","safetySetting"],c);const f=l(n,["personGeneration"]);e!==void 0&&f!=null&&d(e,["parameters","personGeneration"],f);const h=l(n,["includeSafetyAttributes"]);e!==void 0&&h!=null&&d(e,["parameters","includeSafetyAttributes"],h);const p=l(n,["includeRaiReason"]);e!==void 0&&p!=null&&d(e,["parameters","includeRaiReason"],p);const m=l(n,["language"]);e!==void 0&&m!=null&&d(e,["parameters","language"],m);const E=l(n,["outputMimeType"]);e!==void 0&&E!=null&&d(e,["parameters","outputOptions","mimeType"],E);const y=l(n,["outputCompressionQuality"]);e!==void 0&&y!=null&&d(e,["parameters","outputOptions","compressionQuality"],y);const S=l(n,["addWatermark"]);e!==void 0&&S!=null&&d(e,["parameters","addWatermark"],S);const g=l(n,["labels"]);e!==void 0&&g!=null&&d(e,["labels"],g);const w=l(n,["imageSize"]);e!==void 0&&w!=null&&d(e,["parameters","sampleImageSize"],w);const C=l(n,["enhancePrompt"]);return e!==void 0&&C!=null&&d(e,["parameters","enhancePrompt"],C),t}function Tm(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["prompt"]);o!=null&&d(t,["instances[0]","prompt"],o);const r=l(e,["config"]);return r!=null&&Em(r,t),t}function xm(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["prompt"]);o!=null&&d(t,["instances[0]","prompt"],o);const r=l(e,["config"]);return r!=null&&ym(r,t),t}function Mm(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["predictions"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>Fm(s))),d(e,["generatedImages"],r)}const o=l(n,["positivePromptSafetyAttributes"]);return o!=null&&d(e,["positivePromptSafetyAttributes"],$c(o)),e}function Am(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["predictions"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>Dr(s))),d(e,["generatedImages"],r)}const o=l(n,["positivePromptSafetyAttributes"]);return o!=null&&d(e,["positivePromptSafetyAttributes"],Xc(o)),e}function Cm(n,e){const t={},i=l(n,["numberOfVideos"]);if(e!==void 0&&i!=null&&d(e,["parameters","sampleCount"],i),l(n,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(l(n,["fps"])!==void 0)throw new Error("fps parameter is not supported in Gemini API.");const o=l(n,["durationSeconds"]);if(e!==void 0&&o!=null&&d(e,["parameters","durationSeconds"],o),l(n,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const r=l(n,["aspectRatio"]);e!==void 0&&r!=null&&d(e,["parameters","aspectRatio"],r);const s=l(n,["resolution"]);e!==void 0&&s!=null&&d(e,["parameters","resolution"],s);const a=l(n,["personGeneration"]);if(e!==void 0&&a!=null&&d(e,["parameters","personGeneration"],a),l(n,["pubsubTopic"])!==void 0)throw new Error("pubsubTopic parameter is not supported in Gemini API.");const u=l(n,["negativePrompt"]);e!==void 0&&u!=null&&d(e,["parameters","negativePrompt"],u);const c=l(n,["enhancePrompt"]);if(e!==void 0&&c!=null&&d(e,["parameters","enhancePrompt"],c),l(n,["generateAudio"])!==void 0)throw new Error("generateAudio parameter is not supported in Gemini API.");const f=l(n,["lastFrame"]);e!==void 0&&f!=null&&d(e,["instances[0]","lastFrame"],Nr(f));const h=l(n,["referenceImages"]);if(e!==void 0&&h!=null){let p=h;Array.isArray(p)&&(p=p.map(m=>wg(m))),d(e,["instances[0]","referenceImages"],p)}if(l(n,["mask"])!==void 0)throw new Error("mask parameter is not supported in Gemini API.");if(l(n,["compressionQuality"])!==void 0)throw new Error("compressionQuality parameter is not supported in Gemini API.");return t}function Rm(n,e){const t={},i=l(n,["numberOfVideos"]);e!==void 0&&i!=null&&d(e,["parameters","sampleCount"],i);const o=l(n,["outputGcsUri"]);e!==void 0&&o!=null&&d(e,["parameters","storageUri"],o);const r=l(n,["fps"]);e!==void 0&&r!=null&&d(e,["parameters","fps"],r);const s=l(n,["durationSeconds"]);e!==void 0&&s!=null&&d(e,["parameters","durationSeconds"],s);const a=l(n,["seed"]);e!==void 0&&a!=null&&d(e,["parameters","seed"],a);const u=l(n,["aspectRatio"]);e!==void 0&&u!=null&&d(e,["parameters","aspectRatio"],u);const c=l(n,["resolution"]);e!==void 0&&c!=null&&d(e,["parameters","resolution"],c);const f=l(n,["personGeneration"]);e!==void 0&&f!=null&&d(e,["parameters","personGeneration"],f);const h=l(n,["pubsubTopic"]);e!==void 0&&h!=null&&d(e,["parameters","pubsubTopic"],h);const p=l(n,["negativePrompt"]);e!==void 0&&p!=null&&d(e,["parameters","negativePrompt"],p);const m=l(n,["enhancePrompt"]);e!==void 0&&m!=null&&d(e,["parameters","enhancePrompt"],m);const E=l(n,["generateAudio"]);e!==void 0&&E!=null&&d(e,["parameters","generateAudio"],E);const y=l(n,["lastFrame"]);e!==void 0&&y!=null&&d(e,["instances[0]","lastFrame"],dn(y));const S=l(n,["referenceImages"]);if(e!==void 0&&S!=null){let C=S;Array.isArray(C)&&(C=C.map(M=>Ig(M))),d(e,["instances[0]","referenceImages"],C)}const g=l(n,["mask"]);e!==void 0&&g!=null&&d(e,["instances[0]","mask"],Rg(g));const w=l(n,["compressionQuality"]);return e!==void 0&&w!=null&&d(e,["parameters","compressionQuality"],w),t}function wm(n){const e={},t=l(n,["name"]);t!=null&&d(e,["name"],t);const i=l(n,["metadata"]);i!=null&&d(e,["metadata"],i);const o=l(n,["done"]);o!=null&&d(e,["done"],o);const r=l(n,["error"]);r!=null&&d(e,["error"],r);const s=l(n,["response","generateVideoResponse"]);return s!=null&&d(e,["response"],Dm(s)),e}function Im(n){const e={},t=l(n,["name"]);t!=null&&d(e,["name"],t);const i=l(n,["metadata"]);i!=null&&d(e,["metadata"],i);const o=l(n,["done"]);o!=null&&d(e,["done"],o);const r=l(n,["error"]);r!=null&&d(e,["error"],r);const s=l(n,["response"]);return s!=null&&d(e,["response"],Nm(s)),e}function Pm(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["prompt"]);o!=null&&d(t,["instances[0]","prompt"],o);const r=l(e,["image"]);r!=null&&d(t,["instances[0]","image"],Nr(r));const s=l(e,["video"]);s!=null&&d(t,["instances[0]","video"],Kc(s));const a=l(e,["source"]);a!=null&&Um(a,t);const u=l(e,["config"]);return u!=null&&Cm(u,t),t}function bm(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["prompt"]);o!=null&&d(t,["instances[0]","prompt"],o);const r=l(e,["image"]);r!=null&&d(t,["instances[0]","image"],dn(r));const s=l(e,["video"]);s!=null&&d(t,["instances[0]","video"],Zc(s));const a=l(e,["source"]);a!=null&&Lm(a,t);const u=l(e,["config"]);return u!=null&&Rm(u,t),t}function Dm(n){const e={},t=l(n,["generatedSamples"]);if(t!=null){let r=t;Array.isArray(r)&&(r=r.map(s=>Om(s))),d(e,["generatedVideos"],r)}const i=l(n,["raiMediaFilteredCount"]);i!=null&&d(e,["raiMediaFilteredCount"],i);const o=l(n,["raiMediaFilteredReasons"]);return o!=null&&d(e,["raiMediaFilteredReasons"],o),e}function Nm(n){const e={},t=l(n,["videos"]);if(t!=null){let r=t;Array.isArray(r)&&(r=r.map(s=>km(s))),d(e,["generatedVideos"],r)}const i=l(n,["raiMediaFilteredCount"]);i!=null&&d(e,["raiMediaFilteredCount"],i);const o=l(n,["raiMediaFilteredReasons"]);return o!=null&&d(e,["raiMediaFilteredReasons"],o),e}function Um(n,e){const t={},i=l(n,["prompt"]);e!==void 0&&i!=null&&d(e,["instances[0]","prompt"],i);const o=l(n,["image"]);e!==void 0&&o!=null&&d(e,["instances[0]","image"],Nr(o));const r=l(n,["video"]);return e!==void 0&&r!=null&&d(e,["instances[0]","video"],Kc(r)),t}function Lm(n,e){const t={},i=l(n,["prompt"]);e!==void 0&&i!=null&&d(e,["instances[0]","prompt"],i);const o=l(n,["image"]);e!==void 0&&o!=null&&d(e,["instances[0]","image"],dn(o));const r=l(n,["video"]);return e!==void 0&&r!=null&&d(e,["instances[0]","video"],Zc(r)),t}function Fm(n){const e={},t=l(n,["_self"]);t!=null&&d(e,["image"],Xm(t));const i=l(n,["raiFilteredReason"]);i!=null&&d(e,["raiFilteredReason"],i);const o=l(n,["_self"]);return o!=null&&d(e,["safetyAttributes"],$c(o)),e}function Dr(n){const e={},t=l(n,["_self"]);t!=null&&d(e,["image"],qc(t));const i=l(n,["raiFilteredReason"]);i!=null&&d(e,["raiFilteredReason"],i);const o=l(n,["_self"]);o!=null&&d(e,["safetyAttributes"],Xc(o));const r=l(n,["prompt"]);return r!=null&&d(e,["enhancedPrompt"],r),e}function Bm(n){const e={},t=l(n,["_self"]);t!=null&&d(e,["mask"],qc(t));const i=l(n,["labels"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>r)),d(e,["labels"],o)}return e}function Om(n){const e={},t=l(n,["video"]);return t!=null&&d(e,["video"],Ag(t)),e}function km(n){const e={},t=l(n,["_self"]);return t!=null&&d(e,["video"],Cg(t)),e}function Hm(n){const e={},t=l(n,["modelSelectionConfig"]);t!=null&&d(e,["modelConfig"],t);const i=l(n,["responseJsonSchema"]);i!=null&&d(e,["responseJsonSchema"],i);const o=l(n,["audioTimestamp"]);o!=null&&d(e,["audioTimestamp"],o);const r=l(n,["candidateCount"]);r!=null&&d(e,["candidateCount"],r);const s=l(n,["enableAffectiveDialog"]);s!=null&&d(e,["enableAffectiveDialog"],s);const a=l(n,["frequencyPenalty"]);a!=null&&d(e,["frequencyPenalty"],a);const u=l(n,["logprobs"]);u!=null&&d(e,["logprobs"],u);const c=l(n,["maxOutputTokens"]);c!=null&&d(e,["maxOutputTokens"],c);const f=l(n,["mediaResolution"]);f!=null&&d(e,["mediaResolution"],f);const h=l(n,["presencePenalty"]);h!=null&&d(e,["presencePenalty"],h);const p=l(n,["responseLogprobs"]);p!=null&&d(e,["responseLogprobs"],p);const m=l(n,["responseMimeType"]);m!=null&&d(e,["responseMimeType"],m);const E=l(n,["responseModalities"]);E!=null&&d(e,["responseModalities"],E);const y=l(n,["responseSchema"]);y!=null&&d(e,["responseSchema"],y);const S=l(n,["routingConfig"]);S!=null&&d(e,["routingConfig"],S);const g=l(n,["seed"]);g!=null&&d(e,["seed"],g);const w=l(n,["speechConfig"]);w!=null&&d(e,["speechConfig"],Yc(w));const C=l(n,["stopSequences"]);C!=null&&d(e,["stopSequences"],C);const M=l(n,["temperature"]);M!=null&&d(e,["temperature"],M);const O=l(n,["thinkingConfig"]);O!=null&&d(e,["thinkingConfig"],O);const F=l(n,["topK"]);F!=null&&d(e,["topK"],F);const N=l(n,["topP"]);if(N!=null&&d(e,["topP"],N),l(n,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return e}function Gm(n,e){const t={},i=l(e,["model"]);return i!=null&&d(t,["_url","name"],at(n,i)),t}function Vm(n,e){const t={},i=l(e,["model"]);return i!=null&&d(t,["_url","name"],at(n,i)),t}function zm(n){const e={};if(l(n,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const t=l(n,["enableWidget"]);return t!=null&&d(e,["enableWidget"],t),e}function Wm(n){const e={};if(l(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(l(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const t=l(n,["timeRangeFilter"]);return t!=null&&d(e,["timeRangeFilter"],t),e}function qm(n){const e={},t=l(n,["aspectRatio"]);t!=null&&d(e,["aspectRatio"],t);const i=l(n,["imageSize"]);if(i!=null&&d(e,["imageSize"],i),l(n,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(l(n,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");return e}function $m(n){const e={},t=l(n,["aspectRatio"]);t!=null&&d(e,["aspectRatio"],t);const i=l(n,["imageSize"]);i!=null&&d(e,["imageSize"],i);const o=l(n,["outputMimeType"]);o!=null&&d(e,["imageOutputOptions","mimeType"],o);const r=l(n,["outputCompressionQuality"]);return r!=null&&d(e,["imageOutputOptions","compressionQuality"],r),e}function Xm(n){const e={},t=l(n,["bytesBase64Encoded"]);t!=null&&d(e,["imageBytes"],Zn(t));const i=l(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function qc(n){const e={},t=l(n,["gcsUri"]);t!=null&&d(e,["gcsUri"],t);const i=l(n,["bytesBase64Encoded"]);i!=null&&d(e,["imageBytes"],Zn(i));const o=l(n,["mimeType"]);return o!=null&&d(e,["mimeType"],o),e}function Nr(n){const e={};if(l(n,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");const t=l(n,["imageBytes"]);t!=null&&d(e,["bytesBase64Encoded"],Zn(t));const i=l(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function dn(n){const e={},t=l(n,["gcsUri"]);t!=null&&d(e,["gcsUri"],t);const i=l(n,["imageBytes"]);i!=null&&d(e,["bytesBase64Encoded"],Zn(i));const o=l(n,["mimeType"]);return o!=null&&d(e,["mimeType"],o),e}function Ym(n,e,t){const i={},o=l(e,["pageSize"]);t!==void 0&&o!=null&&d(t,["_query","pageSize"],o);const r=l(e,["pageToken"]);t!==void 0&&r!=null&&d(t,["_query","pageToken"],r);const s=l(e,["filter"]);t!==void 0&&s!=null&&d(t,["_query","filter"],s);const a=l(e,["queryBase"]);return t!==void 0&&a!=null&&d(t,["_url","models_url"],Bc(n,a)),i}function Jm(n,e,t){const i={},o=l(e,["pageSize"]);t!==void 0&&o!=null&&d(t,["_query","pageSize"],o);const r=l(e,["pageToken"]);t!==void 0&&r!=null&&d(t,["_query","pageToken"],r);const s=l(e,["filter"]);t!==void 0&&s!=null&&d(t,["_query","filter"],s);const a=l(e,["queryBase"]);return t!==void 0&&a!=null&&d(t,["_url","models_url"],Bc(n,a)),i}function Km(n,e){const t={},i=l(e,["config"]);return i!=null&&Ym(n,i,t),t}function Zm(n,e){const t={},i=l(e,["config"]);return i!=null&&Jm(n,i,t),t}function Qm(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["nextPageToken"]);i!=null&&d(e,["nextPageToken"],i);const o=l(n,["_self"]);if(o!=null){let r=Oc(o);Array.isArray(r)&&(r=r.map(s=>Rs(s))),d(e,["models"],r)}return e}function jm(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["nextPageToken"]);i!=null&&d(e,["nextPageToken"],i);const o=l(n,["_self"]);if(o!=null){let r=Oc(o);Array.isArray(r)&&(r=r.map(s=>ws(s))),d(e,["models"],r)}return e}function eg(n){const e={},t=l(n,["maskMode"]);t!=null&&d(e,["maskMode"],t);const i=l(n,["segmentationClasses"]);i!=null&&d(e,["maskClasses"],i);const o=l(n,["maskDilation"]);return o!=null&&d(e,["dilation"],o),e}function Rs(n){const e={},t=l(n,["name"]);t!=null&&d(e,["name"],t);const i=l(n,["displayName"]);i!=null&&d(e,["displayName"],i);const o=l(n,["description"]);o!=null&&d(e,["description"],o);const r=l(n,["version"]);r!=null&&d(e,["version"],r);const s=l(n,["_self"]);s!=null&&d(e,["tunedModelInfo"],gg(s));const a=l(n,["inputTokenLimit"]);a!=null&&d(e,["inputTokenLimit"],a);const u=l(n,["outputTokenLimit"]);u!=null&&d(e,["outputTokenLimit"],u);const c=l(n,["supportedGenerationMethods"]);c!=null&&d(e,["supportedActions"],c);const f=l(n,["temperature"]);f!=null&&d(e,["temperature"],f);const h=l(n,["maxTemperature"]);h!=null&&d(e,["maxTemperature"],h);const p=l(n,["topP"]);p!=null&&d(e,["topP"],p);const m=l(n,["topK"]);m!=null&&d(e,["topK"],m);const E=l(n,["thinking"]);return E!=null&&d(e,["thinking"],E),e}function ws(n){const e={},t=l(n,["name"]);t!=null&&d(e,["name"],t);const i=l(n,["displayName"]);i!=null&&d(e,["displayName"],i);const o=l(n,["description"]);o!=null&&d(e,["description"],o);const r=l(n,["versionId"]);r!=null&&d(e,["version"],r);const s=l(n,["deployedModels"]);if(s!=null){let h=s;Array.isArray(h)&&(h=h.map(p=>hm(p))),d(e,["endpoints"],h)}const a=l(n,["labels"]);a!=null&&d(e,["labels"],a);const u=l(n,["_self"]);u!=null&&d(e,["tunedModelInfo"],_g(u));const c=l(n,["defaultCheckpointId"]);c!=null&&d(e,["defaultCheckpointId"],c);const f=l(n,["checkpoints"]);if(f!=null){let h=f;Array.isArray(h)&&(h=h.map(p=>p)),d(e,["checkpoints"],h)}return e}function tg(n){const e={},t=l(n,["mediaResolution"]);t!=null&&d(e,["mediaResolution"],t);const i=l(n,["codeExecutionResult"]);i!=null&&d(e,["codeExecutionResult"],i);const o=l(n,["executableCode"]);o!=null&&d(e,["executableCode"],o);const r=l(n,["fileData"]);r!=null&&d(e,["fileData"],pm(r));const s=l(n,["functionCall"]);s!=null&&d(e,["functionCall"],mm(s));const a=l(n,["functionResponse"]);a!=null&&d(e,["functionResponse"],a);const u=l(n,["inlineData"]);u!=null&&d(e,["inlineData"],Hp(u));const c=l(n,["text"]);c!=null&&d(e,["text"],c);const f=l(n,["thought"]);f!=null&&d(e,["thought"],f);const h=l(n,["thoughtSignature"]);h!=null&&d(e,["thoughtSignature"],h);const p=l(n,["videoMetadata"]);return p!=null&&d(e,["videoMetadata"],p),e}function ng(n){const e={},t=l(n,["productImage"]);return t!=null&&d(e,["image"],dn(t)),e}function ig(n,e){const t={},i=l(n,["numberOfImages"]);e!==void 0&&i!=null&&d(e,["parameters","sampleCount"],i);const o=l(n,["baseSteps"]);e!==void 0&&o!=null&&d(e,["parameters","baseSteps"],o);const r=l(n,["outputGcsUri"]);e!==void 0&&r!=null&&d(e,["parameters","storageUri"],r);const s=l(n,["seed"]);e!==void 0&&s!=null&&d(e,["parameters","seed"],s);const a=l(n,["safetyFilterLevel"]);e!==void 0&&a!=null&&d(e,["parameters","safetySetting"],a);const u=l(n,["personGeneration"]);e!==void 0&&u!=null&&d(e,["parameters","personGeneration"],u);const c=l(n,["addWatermark"]);e!==void 0&&c!=null&&d(e,["parameters","addWatermark"],c);const f=l(n,["outputMimeType"]);e!==void 0&&f!=null&&d(e,["parameters","outputOptions","mimeType"],f);const h=l(n,["outputCompressionQuality"]);e!==void 0&&h!=null&&d(e,["parameters","outputOptions","compressionQuality"],h);const p=l(n,["enhancePrompt"]);e!==void 0&&p!=null&&d(e,["parameters","enhancePrompt"],p);const m=l(n,["labels"]);return e!==void 0&&m!=null&&d(e,["labels"],m),t}function og(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["source"]);o!=null&&sg(o,t);const r=l(e,["config"]);return r!=null&&ig(r,t),t}function rg(n){const e={},t=l(n,["predictions"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>Dr(o))),d(e,["generatedImages"],i)}return e}function sg(n,e){const t={},i=l(n,["prompt"]);e!==void 0&&i!=null&&d(e,["instances[0]","prompt"],i);const o=l(n,["personImage"]);e!==void 0&&o!=null&&d(e,["instances[0]","personImage","image"],dn(o));const r=l(n,["productImages"]);if(e!==void 0&&r!=null){let s=r;Array.isArray(s)&&(s=s.map(a=>ng(a))),d(e,["instances[0]","productImages"],s)}return t}function ag(n){const e={},t=l(n,["referenceImage"]);t!=null&&d(e,["referenceImage"],dn(t));const i=l(n,["referenceId"]);i!=null&&d(e,["referenceId"],i);const o=l(n,["referenceType"]);o!=null&&d(e,["referenceType"],o);const r=l(n,["maskImageConfig"]);r!=null&&d(e,["maskImageConfig"],eg(r));const s=l(n,["controlImageConfig"]);s!=null&&d(e,["controlImageConfig"],Xp(s));const a=l(n,["styleImageConfig"]);a!=null&&d(e,["styleImageConfig"],a);const u=l(n,["subjectImageConfig"]);return u!=null&&d(e,["subjectImageConfig"],u),e}function $c(n){const e={},t=l(n,["safetyAttributes","categories"]);t!=null&&d(e,["categories"],t);const i=l(n,["safetyAttributes","scores"]);i!=null&&d(e,["scores"],i);const o=l(n,["contentType"]);return o!=null&&d(e,["contentType"],o),e}function Xc(n){const e={},t=l(n,["safetyAttributes","categories"]);t!=null&&d(e,["categories"],t);const i=l(n,["safetyAttributes","scores"]);i!=null&&d(e,["scores"],i);const o=l(n,["contentType"]);return o!=null&&d(e,["contentType"],o),e}function lg(n){const e={},t=l(n,["category"]);if(t!=null&&d(e,["category"],t),l(n,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const i=l(n,["threshold"]);return i!=null&&d(e,["threshold"],i),e}function ug(n){const e={},t=l(n,["image"]);return t!=null&&d(e,["image"],dn(t)),e}function cg(n,e){const t={},i=l(n,["mode"]);e!==void 0&&i!=null&&d(e,["parameters","mode"],i);const o=l(n,["maxPredictions"]);e!==void 0&&o!=null&&d(e,["parameters","maxPredictions"],o);const r=l(n,["confidenceThreshold"]);e!==void 0&&r!=null&&d(e,["parameters","confidenceThreshold"],r);const s=l(n,["maskDilation"]);e!==void 0&&s!=null&&d(e,["parameters","maskDilation"],s);const a=l(n,["binaryColorThreshold"]);e!==void 0&&a!=null&&d(e,["parameters","binaryColorThreshold"],a);const u=l(n,["labels"]);return e!==void 0&&u!=null&&d(e,["labels"],u),t}function dg(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["source"]);o!=null&&hg(o,t);const r=l(e,["config"]);return r!=null&&cg(r,t),t}function fg(n){const e={},t=l(n,["predictions"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>Bm(o))),d(e,["generatedMasks"],i)}return e}function hg(n,e){const t={},i=l(n,["prompt"]);e!==void 0&&i!=null&&d(e,["instances[0]","prompt"],i);const o=l(n,["image"]);e!==void 0&&o!=null&&d(e,["instances[0]","image"],dn(o));const r=l(n,["scribbleImage"]);return e!==void 0&&r!=null&&d(e,["instances[0]","scribble"],ug(r)),t}function Yc(n){const e={},t=l(n,["languageCode"]);t!=null&&d(e,["languageCode"],t);const i=l(n,["voiceConfig"]);if(i!=null&&d(e,["voiceConfig"],i),l(n,["multiSpeakerVoiceConfig"])!==void 0)throw new Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");return e}function pg(n){const e={},t=l(n,["functionCallingConfig"]);t!=null&&d(e,["functionCallingConfig"],gm(t));const i=l(n,["retrievalConfig"]);return i!=null&&d(e,["retrievalConfig"],i),e}function mg(n){const e={},t=l(n,["functionDeclarations"]);if(t!=null){let f=t;Array.isArray(f)&&(f=f.map(h=>h)),d(e,["functionDeclarations"],f)}if(l(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=l(n,["googleSearchRetrieval"]);i!=null&&d(e,["googleSearchRetrieval"],i);const o=l(n,["computerUse"]);o!=null&&d(e,["computerUse"],o);const r=l(n,["fileSearch"]);r!=null&&d(e,["fileSearch"],r);const s=l(n,["codeExecution"]);if(s!=null&&d(e,["codeExecution"],s),l(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const a=l(n,["googleMaps"]);a!=null&&d(e,["googleMaps"],zm(a));const u=l(n,["googleSearch"]);u!=null&&d(e,["googleSearch"],Wm(u));const c=l(n,["urlContext"]);return c!=null&&d(e,["urlContext"],c),e}function Jc(n){const e={},t=l(n,["functionDeclarations"]);if(t!=null){let h=t;Array.isArray(h)&&(h=h.map(p=>_m(p))),d(e,["functionDeclarations"],h)}const i=l(n,["retrieval"]);i!=null&&d(e,["retrieval"],i);const o=l(n,["googleSearchRetrieval"]);o!=null&&d(e,["googleSearchRetrieval"],o);const r=l(n,["computerUse"]);if(r!=null&&d(e,["computerUse"],r),l(n,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const s=l(n,["codeExecution"]);s!=null&&d(e,["codeExecution"],s);const a=l(n,["enterpriseWebSearch"]);a!=null&&d(e,["enterpriseWebSearch"],a);const u=l(n,["googleMaps"]);u!=null&&d(e,["googleMaps"],u);const c=l(n,["googleSearch"]);c!=null&&d(e,["googleSearch"],c);const f=l(n,["urlContext"]);return f!=null&&d(e,["urlContext"],f),e}function gg(n){const e={},t=l(n,["baseModel"]);t!=null&&d(e,["baseModel"],t);const i=l(n,["createTime"]);i!=null&&d(e,["createTime"],i);const o=l(n,["updateTime"]);return o!=null&&d(e,["updateTime"],o),e}function _g(n){const e={},t=l(n,["labels","google-vertex-llm-tuning-base-model-id"]);t!=null&&d(e,["baseModel"],t);const i=l(n,["createTime"]);i!=null&&d(e,["createTime"],i);const o=l(n,["updateTime"]);return o!=null&&d(e,["updateTime"],o),e}function vg(n,e){const t={},i=l(n,["displayName"]);e!==void 0&&i!=null&&d(e,["displayName"],i);const o=l(n,["description"]);e!==void 0&&o!=null&&d(e,["description"],o);const r=l(n,["defaultCheckpointId"]);return e!==void 0&&r!=null&&d(e,["defaultCheckpointId"],r),t}function Sg(n,e){const t={},i=l(n,["displayName"]);e!==void 0&&i!=null&&d(e,["displayName"],i);const o=l(n,["description"]);e!==void 0&&o!=null&&d(e,["description"],o);const r=l(n,["defaultCheckpointId"]);return e!==void 0&&r!=null&&d(e,["defaultCheckpointId"],r),t}function Eg(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","name"],at(n,i));const o=l(e,["config"]);return o!=null&&vg(o,t),t}function yg(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["config"]);return o!=null&&Sg(o,t),t}function Tg(n,e){const t={},i=l(n,["outputGcsUri"]);e!==void 0&&i!=null&&d(e,["parameters","storageUri"],i);const o=l(n,["safetyFilterLevel"]);e!==void 0&&o!=null&&d(e,["parameters","safetySetting"],o);const r=l(n,["personGeneration"]);e!==void 0&&r!=null&&d(e,["parameters","personGeneration"],r);const s=l(n,["includeRaiReason"]);e!==void 0&&s!=null&&d(e,["parameters","includeRaiReason"],s);const a=l(n,["outputMimeType"]);e!==void 0&&a!=null&&d(e,["parameters","outputOptions","mimeType"],a);const u=l(n,["outputCompressionQuality"]);e!==void 0&&u!=null&&d(e,["parameters","outputOptions","compressionQuality"],u);const c=l(n,["enhanceInputImage"]);e!==void 0&&c!=null&&d(e,["parameters","upscaleConfig","enhanceInputImage"],c);const f=l(n,["imagePreservationFactor"]);e!==void 0&&f!=null&&d(e,["parameters","upscaleConfig","imagePreservationFactor"],f);const h=l(n,["labels"]);e!==void 0&&h!=null&&d(e,["labels"],h);const p=l(n,["numberOfImages"]);e!==void 0&&p!=null&&d(e,["parameters","sampleCount"],p);const m=l(n,["mode"]);return e!==void 0&&m!=null&&d(e,["parameters","mode"],m),t}function xg(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["_url","model"],at(n,i));const o=l(e,["image"]);o!=null&&d(t,["instances[0]","image"],dn(o));const r=l(e,["upscaleFactor"]);r!=null&&d(t,["parameters","upscaleConfig","upscaleFactor"],r);const s=l(e,["config"]);return s!=null&&Tg(s,t),t}function Mg(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["predictions"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>Dr(r))),d(e,["generatedImages"],o)}return e}function Ag(n){const e={},t=l(n,["uri"]);t!=null&&d(e,["uri"],t);const i=l(n,["encodedVideo"]);i!=null&&d(e,["videoBytes"],Zn(i));const o=l(n,["encoding"]);return o!=null&&d(e,["mimeType"],o),e}function Cg(n){const e={},t=l(n,["gcsUri"]);t!=null&&d(e,["uri"],t);const i=l(n,["bytesBase64Encoded"]);i!=null&&d(e,["videoBytes"],Zn(i));const o=l(n,["mimeType"]);return o!=null&&d(e,["mimeType"],o),e}function Rg(n){const e={},t=l(n,["image"]);t!=null&&d(e,["_self"],dn(t));const i=l(n,["maskMode"]);return i!=null&&d(e,["maskMode"],i),e}function wg(n){const e={},t=l(n,["image"]);t!=null&&d(e,["image"],Nr(t));const i=l(n,["referenceType"]);return i!=null&&d(e,["referenceType"],i),e}function Ig(n){const e={},t=l(n,["image"]);t!=null&&d(e,["image"],dn(t));const i=l(n,["referenceType"]);return i!=null&&d(e,["referenceType"],i),e}function Kc(n){const e={},t=l(n,["uri"]);t!=null&&d(e,["uri"],t);const i=l(n,["videoBytes"]);i!=null&&d(e,["encodedVideo"],Zn(i));const o=l(n,["mimeType"]);return o!=null&&d(e,["encoding"],o),e}function Zc(n){const e={},t=l(n,["uri"]);t!=null&&d(e,["gcsUri"],t);const i=l(n,["videoBytes"]);i!=null&&d(e,["bytesBase64Encoded"],Zn(i));const o=l(n,["mimeType"]);return o!=null&&d(e,["mimeType"],o),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Pg(n,e){const t={},i=l(n,["displayName"]);return e!==void 0&&i!=null&&d(e,["displayName"],i),t}function bg(n){const e={},t=l(n,["config"]);return t!=null&&Pg(t,e),e}function Dg(n,e){const t={},i=l(n,["force"]);return e!==void 0&&i!=null&&d(e,["_query","force"],i),t}function Ng(n){const e={},t=l(n,["name"]);t!=null&&d(e,["_url","name"],t);const i=l(n,["config"]);return i!=null&&Dg(i,e),e}function Ug(n){const e={},t=l(n,["name"]);return t!=null&&d(e,["_url","name"],t),e}function Lg(n,e){const t={},i=l(n,["customMetadata"]);if(e!==void 0&&i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>s)),d(e,["customMetadata"],r)}const o=l(n,["chunkingConfig"]);return e!==void 0&&o!=null&&d(e,["chunkingConfig"],o),t}function Fg(n){const e={},t=l(n,["name"]);t!=null&&d(e,["name"],t);const i=l(n,["metadata"]);i!=null&&d(e,["metadata"],i);const o=l(n,["done"]);o!=null&&d(e,["done"],o);const r=l(n,["error"]);r!=null&&d(e,["error"],r);const s=l(n,["response"]);return s!=null&&d(e,["response"],Og(s)),e}function Bg(n){const e={},t=l(n,["fileSearchStoreName"]);t!=null&&d(e,["_url","file_search_store_name"],t);const i=l(n,["fileName"]);i!=null&&d(e,["fileName"],i);const o=l(n,["config"]);return o!=null&&Lg(o,e),e}function Og(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["parent"]);i!=null&&d(e,["parent"],i);const o=l(n,["documentName"]);return o!=null&&d(e,["documentName"],o),e}function kg(n,e){const t={},i=l(n,["pageSize"]);e!==void 0&&i!=null&&d(e,["_query","pageSize"],i);const o=l(n,["pageToken"]);return e!==void 0&&o!=null&&d(e,["_query","pageToken"],o),t}function Hg(n){const e={},t=l(n,["config"]);return t!=null&&kg(t,e),e}function Gg(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["nextPageToken"]);i!=null&&d(e,["nextPageToken"],i);const o=l(n,["fileSearchStores"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),d(e,["fileSearchStores"],r)}return e}function Qc(n,e){const t={},i=l(n,["mimeType"]);e!==void 0&&i!=null&&d(e,["mimeType"],i);const o=l(n,["displayName"]);e!==void 0&&o!=null&&d(e,["displayName"],o);const r=l(n,["customMetadata"]);if(e!==void 0&&r!=null){let a=r;Array.isArray(a)&&(a=a.map(u=>u)),d(e,["customMetadata"],a)}const s=l(n,["chunkingConfig"]);return e!==void 0&&s!=null&&d(e,["chunkingConfig"],s),t}function Vg(n){const e={},t=l(n,["fileSearchStoreName"]);t!=null&&d(e,["_url","file_search_store_name"],t);const i=l(n,["config"]);return i!=null&&Qc(i,e),e}function zg(n){const e={},t=l(n,["sdkHttpResponse"]);return t!=null&&d(e,["sdkHttpResponse"],t),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Wg="Content-Type",qg="X-Server-Timeout",$g="User-Agent",Is="x-goog-api-client",Xg="1.31.0",Yg=`google-genai-sdk/${Xg}`,Jg="v1beta1",Kg="v1beta",hu=/^\s*data: (.*)(?:\n\n|\r\r|\r\n\r\n)/;class Zg{constructor(e){var t,i;this.clientOptions=Object.assign(Object.assign({},e),{project:e.project,location:e.location,apiKey:e.apiKey,vertexai:e.vertexai});const o={};this.clientOptions.vertexai?(o.apiVersion=(t=this.clientOptions.apiVersion)!==null&&t!==void 0?t:Jg,o.baseUrl=this.baseUrlFromProjectLocation(),this.normalizeAuthParameters()):(o.apiVersion=(i=this.clientOptions.apiVersion)!==null&&i!==void 0?i:Kg,o.baseUrl="https://generativelanguage.googleapis.com/"),o.headers=this.getDefaultHeaders(),this.clientOptions.httpOptions=o,e.httpOptions&&(this.clientOptions.httpOptions=this.patchHttpOptions(o,e.httpOptions))}baseUrlFromProjectLocation(){return this.clientOptions.project&&this.clientOptions.location&&this.clientOptions.location!=="global"?`https://${this.clientOptions.location}-aiplatform.googleapis.com/`:"https://aiplatform.googleapis.com/"}normalizeAuthParameters(){if(this.clientOptions.project&&this.clientOptions.location){this.clientOptions.apiKey=void 0;return}this.clientOptions.project=void 0,this.clientOptions.location=void 0}isVertexAI(){var e;return(e=this.clientOptions.vertexai)!==null&&e!==void 0?e:!1}getProject(){return this.clientOptions.project}getLocation(){return this.clientOptions.location}getApiVersion(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.apiVersion!==void 0)return this.clientOptions.httpOptions.apiVersion;throw new Error("API version is not set.")}getBaseUrl(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.baseUrl!==void 0)return this.clientOptions.httpOptions.baseUrl;throw new Error("Base URL is not set.")}getRequestUrl(){return this.getRequestUrlInternal(this.clientOptions.httpOptions)}getHeaders(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.headers!==void 0)return this.clientOptions.httpOptions.headers;throw new Error("Headers are not set.")}getRequestUrlInternal(e){if(!e||e.baseUrl===void 0||e.apiVersion===void 0)throw new Error("HTTP options are not correctly set.");const i=[e.baseUrl.endsWith("/")?e.baseUrl.slice(0,-1):e.baseUrl];return e.apiVersion&&e.apiVersion!==""&&i.push(e.apiVersion),i.join("/")}getBaseResourcePath(){return`projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`}getApiKey(){return this.clientOptions.apiKey}getWebsocketBaseUrl(){const e=this.getBaseUrl(),t=new URL(e);return t.protocol=t.protocol=="http:"?"ws":"wss",t.toString()}setBaseUrl(e){if(this.clientOptions.httpOptions)this.clientOptions.httpOptions.baseUrl=e;else throw new Error("HTTP options are not correctly set.")}constructUrl(e,t,i){const o=[this.getRequestUrlInternal(t)];return i&&o.push(this.getBaseResourcePath()),e!==""&&o.push(e),new URL(`${o.join("/")}`)}shouldPrependVertexProjectPath(e){return!(this.clientOptions.apiKey||!this.clientOptions.vertexai||e.path.startsWith("projects/")||e.httpMethod==="GET"&&e.path.startsWith("publishers/google/models"))}async request(e){let t=this.clientOptions.httpOptions;e.httpOptions&&(t=this.patchHttpOptions(this.clientOptions.httpOptions,e.httpOptions));const i=this.shouldPrependVertexProjectPath(e),o=this.constructUrl(e.path,t,i);if(e.queryParams)for(const[s,a]of Object.entries(e.queryParams))o.searchParams.append(s,String(a));let r={};if(e.httpMethod==="GET"){if(e.body&&e.body!=="{}")throw new Error("Request body should be empty for GET request, but got non empty request body")}else r.body=e.body;return r=await this.includeExtraHttpOptionsToRequestInit(r,t,o.toString(),e.abortSignal),this.unaryApiCall(o,r,e.httpMethod)}patchHttpOptions(e,t){const i=JSON.parse(JSON.stringify(e));for(const[o,r]of Object.entries(t))typeof r=="object"?i[o]=Object.assign(Object.assign({},i[o]),r):r!==void 0&&(i[o]=r);return i}async requestStream(e){let t=this.clientOptions.httpOptions;e.httpOptions&&(t=this.patchHttpOptions(this.clientOptions.httpOptions,e.httpOptions));const i=this.shouldPrependVertexProjectPath(e),o=this.constructUrl(e.path,t,i);(!o.searchParams.has("alt")||o.searchParams.get("alt")!=="sse")&&o.searchParams.set("alt","sse");let r={};return r.body=e.body,r=await this.includeExtraHttpOptionsToRequestInit(r,t,o.toString(),e.abortSignal),this.streamApiCall(o,r,e.httpMethod)}async includeExtraHttpOptionsToRequestInit(e,t,i,o){if(t&&t.timeout||o){const r=new AbortController,s=r.signal;if(t.timeout&&(t==null?void 0:t.timeout)>0){const a=setTimeout(()=>r.abort(),t.timeout);a&&typeof a.unref=="function"&&a.unref()}o&&o.addEventListener("abort",()=>{r.abort()}),e.signal=s}return t&&t.extraBody!==null&&Qg(e,t.extraBody),e.headers=await this.getHeadersInternal(t,i),e}async unaryApiCall(e,t,i){return this.apiCall(e.toString(),Object.assign(Object.assign({},t),{method:i})).then(async o=>(await pu(o),new Ms(o))).catch(o=>{throw o instanceof Error?o:new Error(JSON.stringify(o))})}async streamApiCall(e,t,i){return this.apiCall(e.toString(),Object.assign(Object.assign({},t),{method:i})).then(async o=>(await pu(o),this.processStreamResponse(o))).catch(o=>{throw o instanceof Error?o:new Error(JSON.stringify(o))})}processStreamResponse(e){var t;return Fi(this,arguments,function*(){const o=(t=e==null?void 0:e.body)===null||t===void 0?void 0:t.getReader(),r=new TextDecoder("utf-8");if(!o)throw new Error("Response body is empty");try{let s="";for(;;){const{done:a,value:u}=yield mt(o.read());if(a){if(s.trim().length>0)throw new Error("Incomplete JSON segment at the end");break}const c=r.decode(u,{stream:!0});try{const h=JSON.parse(c);if("error"in h){const p=JSON.parse(JSON.stringify(h.error)),m=p.status,E=p.code,y=`got status: ${m}. ${JSON.stringify(h)}`;if(E>=400&&E<600)throw new Pr({message:y,status:E})}}catch(h){if(h.name==="ApiError")throw h}s+=c;let f=s.match(hu);for(;f;){const h=f[1];try{const p=new Response(h,{headers:e==null?void 0:e.headers,status:e==null?void 0:e.status,statusText:e==null?void 0:e.statusText});yield yield mt(new Ms(p)),s=s.slice(f[0].length),f=s.match(hu)}catch(p){throw new Error(`exception parsing stream chunk ${h}. ${p}`)}}}}finally{o.releaseLock()}})}async apiCall(e,t){return fetch(e,t).catch(i=>{throw new Error(`exception ${i} sending request`)})}getDefaultHeaders(){const e={},t=Yg+" "+this.clientOptions.userAgentExtra;return e[$g]=t,e[Is]=t,e[Wg]="application/json",e}async getHeadersInternal(e,t){const i=new Headers;if(e&&e.headers){for(const[o,r]of Object.entries(e.headers))i.append(o,r);e.timeout&&e.timeout>0&&i.append(qg,String(Math.ceil(e.timeout/1e3)))}return await this.clientOptions.auth.addAuthHeaders(i,t),i}getFileName(e){var t;let i="";return typeof e=="string"&&(i=e.replace(/[/\\]+$/,""),i=(t=i.split(/[/\\]/).pop())!==null&&t!==void 0?t:""),i}async uploadFile(e,t){var i;const o={};t!=null&&(o.mimeType=t.mimeType,o.name=t.name,o.displayName=t.displayName),o.name&&!o.name.startsWith("files/")&&(o.name=`files/${o.name}`);const r=this.clientOptions.uploader,s=await r.stat(e);o.sizeBytes=String(s.size);const a=(i=t==null?void 0:t.mimeType)!==null&&i!==void 0?i:s.type;if(a===void 0||a==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");o.mimeType=a;const u={file:o},c=this.getFileName(e),f=Te("upload/v1beta/files",u._url),h=await this.fetchUploadUrl(f,o.sizeBytes,o.mimeType,c,u,t==null?void 0:t.httpOptions);return r.upload(e,h,this)}async uploadFileToFileSearchStore(e,t,i){var o;const r=this.clientOptions.uploader,s=await r.stat(t),a=String(s.size),u=(o=i==null?void 0:i.mimeType)!==null&&o!==void 0?o:s.type;if(u===void 0||u==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");const c=`upload/v1beta/${e}:uploadToFileSearchStore`,f=this.getFileName(t),h={};i!=null&&Qc(i,h);const p=await this.fetchUploadUrl(c,a,u,f,h,i==null?void 0:i.httpOptions);return r.uploadToFileSearchStore(t,p,this)}async downloadFile(e){await this.clientOptions.downloader.download(e,this)}async fetchUploadUrl(e,t,i,o,r,s){var a;let u={};s?u=s:u={apiVersion:"",headers:Object.assign({"Content-Type":"application/json","X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${t}`,"X-Goog-Upload-Header-Content-Type":`${i}`},o?{"X-Goog-Upload-File-Name":o}:{})};const c=await this.request({path:e,body:JSON.stringify(r),httpMethod:"POST",httpOptions:u});if(!c||!(c!=null&&c.headers))throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");const f=(a=c==null?void 0:c.headers)===null||a===void 0?void 0:a["x-goog-upload-url"];if(f===void 0)throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");return f}}async function pu(n){var e;if(n===void 0)throw new Error("response is undefined");if(!n.ok){const t=n.status;let i;!((e=n.headers.get("content-type"))===null||e===void 0)&&e.includes("application/json")?i=await n.json():i={error:{message:await n.text(),code:n.status,status:n.statusText}};const o=JSON.stringify(i);throw t>=400&&t<600?new Pr({message:o,status:t}):new Error(o)}}function Qg(n,e){if(!e||Object.keys(e).length===0)return;if(n.body instanceof Blob){console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");return}let t={};if(typeof n.body=="string"&&n.body.length>0)try{const r=JSON.parse(n.body);if(typeof r=="object"&&r!==null&&!Array.isArray(r))t=r;else{console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");return}}catch{console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");return}function i(r,s){const a=Object.assign({},r);for(const u in s)if(Object.prototype.hasOwnProperty.call(s,u)){const c=s[u],f=a[u];c&&typeof c=="object"&&!Array.isArray(c)&&f&&typeof f=="object"&&!Array.isArray(f)?a[u]=i(f,c):(f&&c&&typeof f!=typeof c&&console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${u}". Original type: ${typeof f}, New type: ${typeof c}. Overwriting.`),a[u]=c)}return a}const o=i(t,e);n.body=JSON.stringify(o)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const jg="mcp_used/unknown";let e_=!1;function jc(n){for(const e of n)if(t_(e)||typeof e=="object"&&"inputSchema"in e)return!0;return e_}function ed(n){var e;const t=(e=n[Is])!==null&&e!==void 0?e:"";n[Is]=(t+` ${jg}`).trimStart()}function t_(n){return n!==null&&typeof n=="object"&&n instanceof wa}function n_(n,e=100){return Fi(this,arguments,function*(){let i,o=0;for(;o<e;){const r=yield mt(n.listTools({cursor:i}));for(const s of r.tools)yield yield mt(s),o++;if(!r.nextCursor)break;i=r.nextCursor}})}class wa{constructor(e=[],t){this.mcpTools=[],this.functionNameToMcpClient={},this.mcpClients=e,this.config=t}static create(e,t){return new wa(e,t)}async initialize(){var e,t,i,o;if(this.mcpTools.length>0)return;const r={},s=[];for(const f of this.mcpClients)try{for(var a=!0,u=(t=void 0,po(n_(f))),c;c=await u.next(),e=c.done,!e;a=!0){o=c.value,a=!1;const h=o;s.push(h);const p=h.name;if(r[p])throw new Error(`Duplicate function name ${p} found in MCP tools. Please ensure function names are unique.`);r[p]=f}}catch(h){t={error:h}}finally{try{!a&&!e&&(i=u.return)&&await i.call(u)}finally{if(t)throw t.error}}this.mcpTools=s,this.functionNameToMcpClient=r}async tool(){return await this.initialize(),Uf(this.mcpTools,this.config)}async callTool(e){await this.initialize();const t=[];for(const i of e)if(i.name in this.functionNameToMcpClient){const o=this.functionNameToMcpClient[i.name];let r;this.config.timeout&&(r={timeout:this.config.timeout});const s=await o.callTool({name:i.name,arguments:i.args},void 0,r);t.push({functionResponse:{name:i.name,response:s.isError?{error:s}:s}})}return t}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function i_(n,e,t){const i=new Cf;let o;t.data instanceof Blob?o=JSON.parse(await t.data.text()):o=JSON.parse(t.data),Object.assign(i,o),e(i)}class o_{constructor(e,t,i){this.apiClient=e,this.auth=t,this.webSocketFactory=i}async connect(e){var t,i;if(this.apiClient.isVertexAI())throw new Error("Live music is not supported for Vertex AI.");console.warn("Live music generation is experimental and may change in future versions.");const o=this.apiClient.getWebsocketBaseUrl(),r=this.apiClient.getApiVersion(),s=a_(this.apiClient.getDefaultHeaders()),a=this.apiClient.getApiKey(),u=`${o}/ws/google.ai.generativelanguage.${r}.GenerativeService.BidiGenerateMusic?key=${a}`;let c=()=>{};const f=new Promise(C=>{c=C}),h=e.callbacks,p=function(){c({})},m=this.apiClient,E={onopen:p,onmessage:C=>{i_(m,h.onmessage,C)},onerror:(t=h==null?void 0:h.onerror)!==null&&t!==void 0?t:function(C){},onclose:(i=h==null?void 0:h.onclose)!==null&&i!==void 0?i:function(C){}},y=this.webSocketFactory.create(u,s_(s),E);y.connect(),await f;const w={setup:{model:at(this.apiClient,e.model)}};return y.send(JSON.stringify(w)),new r_(y,this.apiClient)}}class r_{constructor(e,t){this.conn=e,this.apiClient=t}async setWeightedPrompts(e){if(!e.weightedPrompts||Object.keys(e.weightedPrompts).length===0)throw new Error("Weighted prompts must be set and contain at least one entry.");const t=bp(e);this.conn.send(JSON.stringify({clientContent:t}))}async setMusicGenerationConfig(e){e.musicGenerationConfig||(e.musicGenerationConfig={});const t=Pp(e);this.conn.send(JSON.stringify(t))}sendPlaybackControl(e){const t={playbackControl:e};this.conn.send(JSON.stringify(t))}play(){this.sendPlaybackControl(Di.PLAY)}pause(){this.sendPlaybackControl(Di.PAUSE)}stop(){this.sendPlaybackControl(Di.STOP)}resetContext(){this.sendPlaybackControl(Di.RESET_CONTEXT)}close(){this.conn.close()}}function s_(n){const e={};return n.forEach((t,i)=>{e[i]=t}),e}function a_(n){const e=new Headers;for(const[t,i]of Object.entries(n))e.append(t,i);return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const l_="FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";async function u_(n,e,t){const i=new Af;let o;t.data instanceof Blob?o=await t.data.text():t.data instanceof ArrayBuffer?o=new TextDecoder().decode(t.data):o=t.data;const r=JSON.parse(o);if(n.isVertexAI()){const s=Up(r);Object.assign(i,s)}else Object.assign(i,r);e(i)}class c_{constructor(e,t,i){this.apiClient=e,this.auth=t,this.webSocketFactory=i,this.music=new o_(this.apiClient,this.auth,this.webSocketFactory)}async connect(e){var t,i,o,r,s,a;if(e.config&&e.config.httpOptions)throw new Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");const u=this.apiClient.getWebsocketBaseUrl(),c=this.apiClient.getApiVersion();let f;const h=this.apiClient.getHeaders();e.config&&e.config.tools&&jc(e.config.tools)&&ed(h);const p=p_(h);if(this.apiClient.isVertexAI())f=`${u}/ws/google.cloud.aiplatform.${c}.LlmBidiService/BidiGenerateContent`,await this.auth.addAuthHeaders(p,f);else{const A=this.apiClient.getApiKey();let T="BidiGenerateContent",B="key";A!=null&&A.startsWith("auth_tokens/")&&(console.warn("Warning: Ephemeral token support is experimental and may change in future versions."),c!=="v1alpha"&&console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."),T="BidiGenerateContentConstrained",B="access_token"),f=`${u}/ws/google.ai.generativelanguage.${c}.GenerativeService.${T}?${B}=${A}`}let m=()=>{};const E=new Promise(A=>{m=A}),y=e.callbacks,S=function(){var A;(A=y==null?void 0:y.onopen)===null||A===void 0||A.call(y),m({})},g=this.apiClient,w={onopen:S,onmessage:A=>{u_(g,y.onmessage,A)},onerror:(t=y==null?void 0:y.onerror)!==null&&t!==void 0?t:function(A){},onclose:(i=y==null?void 0:y.onclose)!==null&&i!==void 0?i:function(A){}},C=this.webSocketFactory.create(f,h_(p),w);C.connect(),await E;let M=at(this.apiClient,e.model);if(this.apiClient.isVertexAI()&&M.startsWith("publishers/")){const A=this.apiClient.getProject(),T=this.apiClient.getLocation();M=`projects/${A}/locations/${T}/`+M}let O={};this.apiClient.isVertexAI()&&((o=e.config)===null||o===void 0?void 0:o.responseModalities)===void 0&&(e.config===void 0?e.config={responseModalities:[vo.AUDIO]}:e.config.responseModalities=[vo.AUDIO]),!((r=e.config)===null||r===void 0)&&r.generationConfig&&console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");const F=(a=(s=e.config)===null||s===void 0?void 0:s.tools)!==null&&a!==void 0?a:[],N=[];for(const A of F)if(this.isCallableTool(A)){const T=A;N.push(await T.tool())}else N.push(A);N.length>0&&(e.config.tools=N);const H={model:M,config:e.config,callbacks:e.callbacks};return this.apiClient.isVertexAI()?O=Ip(this.apiClient,H):O=wp(this.apiClient,H),delete O.config,C.send(JSON.stringify(O)),new f_(C,this.apiClient)}isCallableTool(e){return"callTool"in e&&typeof e.callTool=="function"}}const d_={turnComplete:!0};class f_{constructor(e,t){this.conn=e,this.apiClient=t}tLiveClientContent(e,t){if(t.turns!==null&&t.turns!==void 0){let i=[];try{i=jt(t.turns),e.isVertexAI()||(i=i.map(o=>br(o)))}catch{throw new Error(`Failed to parse client content "turns", type: '${typeof t.turns}'`)}return{clientContent:{turns:i,turnComplete:t.turnComplete}}}return{clientContent:{turnComplete:t.turnComplete}}}tLiveClienttToolResponse(e,t){let i=[];if(t.functionResponses==null)throw new Error("functionResponses is required.");if(Array.isArray(t.functionResponses)?i=t.functionResponses:i=[t.functionResponses],i.length===0)throw new Error("functionResponses is required.");for(const r of i){if(typeof r!="object"||r===null||!("name"in r)||!("response"in r))throw new Error(`Could not parse function response, type '${typeof r}'.`);if(!e.isVertexAI()&&!("id"in r))throw new Error(l_)}return{toolResponse:{functionResponses:i}}}sendClientContent(e){e=Object.assign(Object.assign({},d_),e);const t=this.tLiveClientContent(this.apiClient,e);this.conn.send(JSON.stringify(t))}sendRealtimeInput(e){let t={};this.apiClient.isVertexAI()?t={realtimeInput:Np(e)}:t={realtimeInput:Dp(e)},this.conn.send(JSON.stringify(t))}sendToolResponse(e){if(e.functionResponses==null)throw new Error("Tool response parameters are required.");const t=this.tLiveClienttToolResponse(this.apiClient,e);this.conn.send(JSON.stringify(t))}close(){this.conn.close()}}function h_(n){const e={};return n.forEach((t,i)=>{e[i]=t}),e}function p_(n){const e=new Headers;for(const[t,i]of Object.entries(n))e.append(t,i);return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const mu=10;function gu(n){var e,t,i;if(!((e=n==null?void 0:n.automaticFunctionCalling)===null||e===void 0)&&e.disable)return!0;let o=!1;for(const s of(t=n==null?void 0:n.tools)!==null&&t!==void 0?t:[])if(Bi(s)){o=!0;break}if(!o)return!0;const r=(i=n==null?void 0:n.automaticFunctionCalling)===null||i===void 0?void 0:i.maximumRemoteCalls;return r&&(r<0||!Number.isInteger(r))||r==0?(console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:",r),!0):!1}function Bi(n){return"callTool"in n&&typeof n.callTool=="function"}function m_(n){var e,t,i;return(i=(t=(e=n.config)===null||e===void 0?void 0:e.tools)===null||t===void 0?void 0:t.some(o=>Bi(o)))!==null&&i!==void 0?i:!1}function _u(n){var e;const t=[];return!((e=n==null?void 0:n.config)===null||e===void 0)&&e.tools&&n.config.tools.forEach((i,o)=>{if(Bi(i))return;const r=i;r.functionDeclarations&&r.functionDeclarations.length>0&&t.push(o)}),t}function vu(n){var e;return!(!((e=n==null?void 0:n.automaticFunctionCalling)===null||e===void 0)&&e.ignoreCallHistory)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class g_ extends Dn{constructor(e){super(),this.apiClient=e,this.generateContent=async t=>{var i,o,r,s,a;const u=await this.processParamsMaybeAddMcpUsage(t);if(this.maybeMoveToResponseJsonSchem(t),!m_(t)||gu(t.config))return await this.generateContentInternal(u);const c=_u(t);if(c.length>0){const y=c.map(S=>`tools[${S}]`).join(", ");throw new Error(`Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations is not yet supported. Incompatible tools found at ${y}.`)}let f,h;const p=jt(u.contents),m=(r=(o=(i=u.config)===null||i===void 0?void 0:i.automaticFunctionCalling)===null||o===void 0?void 0:o.maximumRemoteCalls)!==null&&r!==void 0?r:mu;let E=0;for(;E<m&&(f=await this.generateContentInternal(u),!(!f.functionCalls||f.functionCalls.length===0));){const y=f.candidates[0].content,S=[];for(const g of(a=(s=t.config)===null||s===void 0?void 0:s.tools)!==null&&a!==void 0?a:[])if(Bi(g)){const C=await g.callTool(f.functionCalls);S.push(...C)}E++,h={role:"user",parts:S},u.contents=jt(u.contents),u.contents.push(y),u.contents.push(h),vu(u.config)&&(p.push(y),p.push(h))}return vu(u.config)&&(f.automaticFunctionCallingHistory=p),f},this.generateContentStream=async t=>{var i,o,r,s,a;if(this.maybeMoveToResponseJsonSchem(t),gu(t.config)){const h=await this.processParamsMaybeAddMcpUsage(t);return await this.generateContentStreamInternal(h)}const u=_u(t);if(u.length>0){const h=u.map(p=>`tools[${p}]`).join(", ");throw new Error(`Incompatible tools found at ${h}. Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations" is not yet supported.`)}const c=(r=(o=(i=t==null?void 0:t.config)===null||i===void 0?void 0:i.toolConfig)===null||o===void 0?void 0:o.functionCallingConfig)===null||r===void 0?void 0:r.streamFunctionCallArguments,f=(a=(s=t==null?void 0:t.config)===null||s===void 0?void 0:s.automaticFunctionCalling)===null||a===void 0?void 0:a.disable;if(c&&!f)throw new Error("Running in streaming mode with 'streamFunctionCallArguments' enabled, this feature is not compatible with automatic function calling (AFC). Please set 'config.automaticFunctionCalling.disable' to true to disable AFC or leave 'config.toolConfig.functionCallingConfig.streamFunctionCallArguments' to be undefined or set to false to disable streaming function call arguments feature.");return await this.processAfcStream(t)},this.generateImages=async t=>await this.generateImagesInternal(t).then(i=>{var o;let r;const s=[];if(i!=null&&i.generatedImages)for(const u of i.generatedImages)u&&(u!=null&&u.safetyAttributes)&&((o=u==null?void 0:u.safetyAttributes)===null||o===void 0?void 0:o.contentType)==="Positive Prompt"?r=u==null?void 0:u.safetyAttributes:s.push(u);let a;return r?a={generatedImages:s,positivePromptSafetyAttributes:r,sdkHttpResponse:i.sdkHttpResponse}:a={generatedImages:s,sdkHttpResponse:i.sdkHttpResponse},a}),this.list=async t=>{var i;const s={config:Object.assign(Object.assign({},{queryBase:!0}),t==null?void 0:t.config)};if(this.apiClient.isVertexAI()&&!s.config.queryBase){if(!((i=s.config)===null||i===void 0)&&i.filter)throw new Error("Filtering tuned models list for Vertex AI is not currently supported");s.config.filter="labels.tune-type:*"}return new pi(Pn.PAGED_ITEM_MODELS,a=>this.listInternal(a),await this.listInternal(s),s)},this.editImage=async t=>{const i={model:t.model,prompt:t.prompt,referenceImages:[],config:t.config};return t.referenceImages&&t.referenceImages&&(i.referenceImages=t.referenceImages.map(o=>o.toReferenceImageAPI())),await this.editImageInternal(i)},this.upscaleImage=async t=>{let i={numberOfImages:1,mode:"upscale"};t.config&&(i=Object.assign(Object.assign({},i),t.config));const o={model:t.model,image:t.image,upscaleFactor:t.upscaleFactor,config:i};return await this.upscaleImageInternal(o)},this.generateVideos=async t=>{var i,o,r,s,a,u;if((t.prompt||t.image||t.video)&&t.source)throw new Error("Source and prompt/image/video are mutually exclusive. Please only use source.");return this.apiClient.isVertexAI()||(!((i=t.video)===null||i===void 0)&&i.uri&&(!((o=t.video)===null||o===void 0)&&o.videoBytes)?t.video={uri:t.video.uri,mimeType:t.video.mimeType}:!((s=(r=t.source)===null||r===void 0?void 0:r.video)===null||s===void 0)&&s.uri&&(!((u=(a=t.source)===null||a===void 0?void 0:a.video)===null||u===void 0)&&u.videoBytes)&&(t.source.video={uri:t.source.video.uri,mimeType:t.source.video.mimeType})),await this.generateVideosInternal(t)}}maybeMoveToResponseJsonSchem(e){e.config&&e.config.responseSchema&&(e.config.responseJsonSchema||Object.keys(e.config.responseSchema).includes("$schema")&&(e.config.responseJsonSchema=e.config.responseSchema,delete e.config.responseSchema))}async processParamsMaybeAddMcpUsage(e){var t,i,o;const r=(t=e.config)===null||t===void 0?void 0:t.tools;if(!r)return e;const s=await Promise.all(r.map(async u=>Bi(u)?await u.tool():u)),a={model:e.model,contents:e.contents,config:Object.assign(Object.assign({},e.config),{tools:s})};if(a.config.tools=s,e.config&&e.config.tools&&jc(e.config.tools)){const u=(o=(i=e.config.httpOptions)===null||i===void 0?void 0:i.headers)!==null&&o!==void 0?o:{};let c=Object.assign({},u);Object.keys(c).length===0&&(c=this.apiClient.getDefaultHeaders()),ed(c),a.config.httpOptions=Object.assign(Object.assign({},e.config.httpOptions),{headers:c})}return a}async initAfcToolsMap(e){var t,i,o;const r=new Map;for(const s of(i=(t=e.config)===null||t===void 0?void 0:t.tools)!==null&&i!==void 0?i:[])if(Bi(s)){const a=s,u=await a.tool();for(const c of(o=u.functionDeclarations)!==null&&o!==void 0?o:[]){if(!c.name)throw new Error("Function declaration name is required.");if(r.has(c.name))throw new Error(`Duplicate tool declaration name: ${c.name}`);r.set(c.name,a)}}return r}async processAfcStream(e){var t,i,o;const r=(o=(i=(t=e.config)===null||t===void 0?void 0:t.automaticFunctionCalling)===null||i===void 0?void 0:i.maximumRemoteCalls)!==null&&o!==void 0?o:mu;let s=!1,a=0;const u=await this.initAfcToolsMap(e);return(function(c,f,h){var p,m;return Fi(this,arguments,function*(){for(var E,y,S,g;a<r;){s&&(a++,s=!1);const O=yield mt(c.processParamsMaybeAddMcpUsage(h)),F=yield mt(c.generateContentStreamInternal(O)),N=[],H=[];try{for(var w=!0,C=(y=void 0,po(F)),M;M=yield mt(C.next()),E=M.done,!E;w=!0){g=M.value,w=!1;const A=g;if(yield yield mt(A),A.candidates&&(!((p=A.candidates[0])===null||p===void 0)&&p.content)){H.push(A.candidates[0].content);for(const T of(m=A.candidates[0].content.parts)!==null&&m!==void 0?m:[])if(a<r&&T.functionCall){if(!T.functionCall.name)throw new Error("Function call name was not returned by the model.");if(f.has(T.functionCall.name)){const B=yield mt(f.get(T.functionCall.name).callTool([T.functionCall]));N.push(...B)}else throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${f.keys()}, mising tool: ${T.functionCall.name}`)}}}}catch(A){y={error:A}}finally{try{!w&&!E&&(S=C.return)&&(yield mt(S.call(C)))}finally{if(y)throw y.error}}if(N.length>0){s=!0;const A=new ro;A.candidates=[{content:{role:"user",parts:N}}],yield yield mt(A);const T=[];T.push(...H),T.push({role:"user",parts:N});const B=jt(h.contents).concat(T);h.contents=B}else break}})})(this,u,e)}async generateContentInternal(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=cu(this.apiClient,e);return a=Te("{model}:generateContent",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=fu(f),p=new ro;return Object.assign(p,h),p})}else{const c=uu(this.apiClient,e);return a=Te("{model}:generateContent",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=du(f),p=new ro;return Object.assign(p,h),p})}}async generateContentStreamInternal(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=cu(this.apiClient,e);return a=Te("{model}:streamGenerateContent?alt=sse",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.requestStream({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}),s.then(function(h){return Fi(this,arguments,function*(){var p,m,E,y;try{for(var S=!0,g=po(h),w;w=yield mt(g.next()),p=w.done,!p;S=!0){y=w.value,S=!1;const C=y,M=fu(yield mt(C.json()));M.sdkHttpResponse={headers:C.headers};const O=new ro;Object.assign(O,M),yield yield mt(O)}}catch(C){m={error:C}}finally{try{!S&&!p&&(E=g.return)&&(yield mt(E.call(g)))}finally{if(m)throw m.error}}})})}else{const c=uu(this.apiClient,e);return a=Te("{model}:streamGenerateContent?alt=sse",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.requestStream({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}),s.then(function(h){return Fi(this,arguments,function*(){var p,m,E,y;try{for(var S=!0,g=po(h),w;w=yield mt(g.next()),p=w.done,!p;S=!0){y=w.value,S=!1;const C=y,M=du(yield mt(C.json()));M.sdkHttpResponse={headers:C.headers};const O=new ro;Object.assign(O,M),yield yield mt(O)}}catch(C){m={error:C}}finally{try{!S&&!p&&(E=g.return)&&(yield mt(E.call(g)))}finally{if(m)throw m.error}}})})}}async embedContent(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=cm(this.apiClient,e);return a=Te("{model}:predict",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=fm(f),p=new $l;return Object.assign(p,h),p})}else{const c=um(this.apiClient,e);return a=Te("{model}:batchEmbedContents",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=dm(f),p=new $l;return Object.assign(p,h),p})}}async generateImagesInternal(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=xm(this.apiClient,e);return a=Te("{model}:predict",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=Am(f),p=new Xl;return Object.assign(p,h),p})}else{const c=Tm(this.apiClient,e);return a=Te("{model}:predict",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=Mm(f),p=new Xl;return Object.assign(p,h),p})}}async editImageInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const a=rm(this.apiClient,e);return r=Te("{model}:predict",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json().then(c=>{const f=c;return f.sdkHttpResponse={headers:u.headers},f})),o.then(u=>{const c=sm(u),f=new pf;return Object.assign(f,c),f})}else throw new Error("This method is only supported by the Vertex AI.")}async upscaleImageInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const a=xg(this.apiClient,e);return r=Te("{model}:predict",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json().then(c=>{const f=c;return f.sdkHttpResponse={headers:u.headers},f})),o.then(u=>{const c=Mg(u),f=new mf;return Object.assign(f,c),f})}else throw new Error("This method is only supported by the Vertex AI.")}async recontextImage(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const a=og(this.apiClient,e);return r=Te("{model}:predict",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json()),o.then(u=>{const c=rg(u),f=new gf;return Object.assign(f,c),f})}else throw new Error("This method is only supported by the Vertex AI.")}async segmentImage(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const a=dg(this.apiClient,e);return r=Te("{model}:predict",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json()),o.then(u=>{const c=fg(u),f=new _f;return Object.assign(f,c),f})}else throw new Error("This method is only supported by the Vertex AI.")}async get(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=Vm(this.apiClient,e);return a=Te("{name}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>ws(f))}else{const c=Gm(this.apiClient,e);return a=Te("{name}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>Rs(f))}}async listInternal(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=Zm(this.apiClient,e);return a=Te("{models_url}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=jm(f),p=new Yl;return Object.assign(p,h),p})}else{const c=Km(this.apiClient,e);return a=Te("{models_url}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=Qm(f),p=new Yl;return Object.assign(p,h),p})}}async update(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=yg(this.apiClient,e);return a=Te("{model}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"PATCH",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>ws(f))}else{const c=Eg(this.apiClient,e);return a=Te("{name}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"PATCH",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>Rs(f))}}async delete(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=tm(this.apiClient,e);return a=Te("{name}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=im(f),p=new Jl;return Object.assign(p,h),p})}else{const c=em(this.apiClient,e);return a=Te("{name}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"DELETE",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=nm(f),p=new Jl;return Object.assign(p,h),p})}}async countTokens(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=Zp(this.apiClient,e);return a=Te("{model}:countTokens",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=jp(f),p=new Kl;return Object.assign(p,h),p})}else{const c=Kp(this.apiClient,e);return a=Te("{model}:countTokens",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=Qp(f),p=new Kl;return Object.assign(p,h),p})}}async computeTokens(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const a=zp(this.apiClient,e);return r=Te("{model}:computeTokens",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json().then(c=>{const f=c;return f.sdkHttpResponse={headers:u.headers},f})),o.then(u=>{const c=Wp(u),f=new vf;return Object.assign(f,c),f})}else throw new Error("This method is only supported by the Vertex AI.")}async generateVideosInternal(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=bm(this.apiClient,e);return a=Te("{model}:predictLongRunning",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>{const h=Im(f),p=new Sr;return Object.assign(p,h),p})}else{const c=Pm(this.apiClient,e);return a=Te("{model}:predictLongRunning",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>{const h=wm(f),p=new Sr;return Object.assign(p,h),p})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class __ extends Dn{constructor(e){super(),this.apiClient=e}async getVideosOperation(e){const t=e.operation,i=e.config;if(t.name===void 0||t.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const o=t.name.split("/operations/")[0];let r;i&&"httpOptions"in i&&(r=i.httpOptions);const s=await this.fetchPredictVideosOperationInternal({operationName:t.name,resourceName:o,config:{httpOptions:r}});return t._fromAPIResponse({apiResponse:s,_isVertexAI:!0})}else{const o=await this.getVideosOperationInternal({operationName:t.name,config:i});return t._fromAPIResponse({apiResponse:o,_isVertexAI:!1})}}async get(e){const t=e.operation,i=e.config;if(t.name===void 0||t.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const o=t.name.split("/operations/")[0];let r;i&&"httpOptions"in i&&(r=i.httpOptions);const s=await this.fetchPredictVideosOperationInternal({operationName:t.name,resourceName:o,config:{httpOptions:r}});return t._fromAPIResponse({apiResponse:s,_isVertexAI:!0})}else{const o=await this.getVideosOperationInternal({operationName:t.name,config:i});return t._fromAPIResponse({apiResponse:o,_isVertexAI:!1})}}async getVideosOperationInternal(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=lf(e);return a=Te("{operationName}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s}else{const c=af(e);return a=Te("{operationName}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s}}async fetchPredictVideosOperationInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const a=jd(e);return r=Te("{resourceName}:fetchPredictOperation",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json()),o}else throw new Error("This method is only supported by the Vertex AI.")}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function v_(n){const e={},t=l(n,["data"]);if(t!=null&&d(e,["data"],t),l(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=l(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function S_(n){const e={},t=l(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>w_(r))),d(e,["parts"],o)}const i=l(n,["role"]);return i!=null&&d(e,["role"],i),e}function E_(n,e,t){const i={},o=l(e,["expireTime"]);t!==void 0&&o!=null&&d(t,["expireTime"],o);const r=l(e,["newSessionExpireTime"]);t!==void 0&&r!=null&&d(t,["newSessionExpireTime"],r);const s=l(e,["uses"]);t!==void 0&&s!=null&&d(t,["uses"],s);const a=l(e,["liveConnectConstraints"]);t!==void 0&&a!=null&&d(t,["bidiGenerateContentSetup"],R_(n,a));const u=l(e,["lockAdditionalFields"]);return t!==void 0&&u!=null&&d(t,["fieldMask"],u),i}function y_(n,e){const t={},i=l(e,["config"]);return i!=null&&d(t,["config"],E_(n,i,t)),t}function T_(n){const e={};if(l(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=l(n,["fileUri"]);t!=null&&d(e,["fileUri"],t);const i=l(n,["mimeType"]);return i!=null&&d(e,["mimeType"],i),e}function x_(n){const e={},t=l(n,["id"]);t!=null&&d(e,["id"],t);const i=l(n,["args"]);i!=null&&d(e,["args"],i);const o=l(n,["name"]);if(o!=null&&d(e,["name"],o),l(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(l(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return e}function M_(n){const e={};if(l(n,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const t=l(n,["enableWidget"]);return t!=null&&d(e,["enableWidget"],t),e}function A_(n){const e={};if(l(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(l(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const t=l(n,["timeRangeFilter"]);return t!=null&&d(e,["timeRangeFilter"],t),e}function C_(n,e){const t={},i=l(n,["generationConfig"]);e!==void 0&&i!=null&&d(e,["setup","generationConfig"],i);const o=l(n,["responseModalities"]);e!==void 0&&o!=null&&d(e,["setup","generationConfig","responseModalities"],o);const r=l(n,["temperature"]);e!==void 0&&r!=null&&d(e,["setup","generationConfig","temperature"],r);const s=l(n,["topP"]);e!==void 0&&s!=null&&d(e,["setup","generationConfig","topP"],s);const a=l(n,["topK"]);e!==void 0&&a!=null&&d(e,["setup","generationConfig","topK"],a);const u=l(n,["maxOutputTokens"]);e!==void 0&&u!=null&&d(e,["setup","generationConfig","maxOutputTokens"],u);const c=l(n,["mediaResolution"]);e!==void 0&&c!=null&&d(e,["setup","generationConfig","mediaResolution"],c);const f=l(n,["seed"]);e!==void 0&&f!=null&&d(e,["setup","generationConfig","seed"],f);const h=l(n,["speechConfig"]);e!==void 0&&h!=null&&d(e,["setup","generationConfig","speechConfig"],Ra(h));const p=l(n,["thinkingConfig"]);e!==void 0&&p!=null&&d(e,["setup","generationConfig","thinkingConfig"],p);const m=l(n,["enableAffectiveDialog"]);e!==void 0&&m!=null&&d(e,["setup","generationConfig","enableAffectiveDialog"],m);const E=l(n,["systemInstruction"]);e!==void 0&&E!=null&&d(e,["setup","systemInstruction"],S_(Dt(E)));const y=l(n,["tools"]);if(e!==void 0&&y!=null){let F=Ji(y);Array.isArray(F)&&(F=F.map(N=>P_(Yi(N)))),d(e,["setup","tools"],F)}const S=l(n,["sessionResumption"]);e!==void 0&&S!=null&&d(e,["setup","sessionResumption"],I_(S));const g=l(n,["inputAudioTranscription"]);e!==void 0&&g!=null&&d(e,["setup","inputAudioTranscription"],g);const w=l(n,["outputAudioTranscription"]);e!==void 0&&w!=null&&d(e,["setup","outputAudioTranscription"],w);const C=l(n,["realtimeInputConfig"]);e!==void 0&&C!=null&&d(e,["setup","realtimeInputConfig"],C);const M=l(n,["contextWindowCompression"]);e!==void 0&&M!=null&&d(e,["setup","contextWindowCompression"],M);const O=l(n,["proactivity"]);return e!==void 0&&O!=null&&d(e,["setup","proactivity"],O),t}function R_(n,e){const t={},i=l(e,["model"]);i!=null&&d(t,["setup","model"],at(n,i));const o=l(e,["config"]);return o!=null&&d(t,["config"],C_(o,t)),t}function w_(n){const e={},t=l(n,["mediaResolution"]);t!=null&&d(e,["mediaResolution"],t);const i=l(n,["codeExecutionResult"]);i!=null&&d(e,["codeExecutionResult"],i);const o=l(n,["executableCode"]);o!=null&&d(e,["executableCode"],o);const r=l(n,["fileData"]);r!=null&&d(e,["fileData"],T_(r));const s=l(n,["functionCall"]);s!=null&&d(e,["functionCall"],x_(s));const a=l(n,["functionResponse"]);a!=null&&d(e,["functionResponse"],a);const u=l(n,["inlineData"]);u!=null&&d(e,["inlineData"],v_(u));const c=l(n,["text"]);c!=null&&d(e,["text"],c);const f=l(n,["thought"]);f!=null&&d(e,["thought"],f);const h=l(n,["thoughtSignature"]);h!=null&&d(e,["thoughtSignature"],h);const p=l(n,["videoMetadata"]);return p!=null&&d(e,["videoMetadata"],p),e}function I_(n){const e={},t=l(n,["handle"]);if(t!=null&&d(e,["handle"],t),l(n,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return e}function P_(n){const e={},t=l(n,["functionDeclarations"]);if(t!=null){let f=t;Array.isArray(f)&&(f=f.map(h=>h)),d(e,["functionDeclarations"],f)}if(l(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=l(n,["googleSearchRetrieval"]);i!=null&&d(e,["googleSearchRetrieval"],i);const o=l(n,["computerUse"]);o!=null&&d(e,["computerUse"],o);const r=l(n,["fileSearch"]);r!=null&&d(e,["fileSearch"],r);const s=l(n,["codeExecution"]);if(s!=null&&d(e,["codeExecution"],s),l(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const a=l(n,["googleMaps"]);a!=null&&d(e,["googleMaps"],M_(a));const u=l(n,["googleSearch"]);u!=null&&d(e,["googleSearch"],A_(u));const c=l(n,["urlContext"]);return c!=null&&d(e,["urlContext"],c),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function b_(n){const e=[];for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)){const i=n[t];if(typeof i=="object"&&i!=null&&Object.keys(i).length>0){const o=Object.keys(i).map(r=>`${t}.${r}`);e.push(...o)}else e.push(t)}return e.join(",")}function D_(n,e){let t=null;const i=n.bidiGenerateContentSetup;if(typeof i=="object"&&i!==null&&"setup"in i){const r=i.setup;typeof r=="object"&&r!==null?(n.bidiGenerateContentSetup=r,t=r):delete n.bidiGenerateContentSetup}else i!==void 0&&delete n.bidiGenerateContentSetup;const o=n.fieldMask;if(t){const r=b_(t);if(Array.isArray(e==null?void 0:e.lockAdditionalFields)&&(e==null?void 0:e.lockAdditionalFields.length)===0)r?n.fieldMask=r:delete n.fieldMask;else if(e!=null&&e.lockAdditionalFields&&e.lockAdditionalFields.length>0&&o!==null&&Array.isArray(o)&&o.length>0){const s=["temperature","topK","topP","maxOutputTokens","responseModalities","seed","speechConfig"];let a=[];o.length>0&&(a=o.map(c=>s.includes(c)?`generationConfig.${c}`:c));const u=[];r&&u.push(r),a.length>0&&u.push(...a),u.length>0?n.fieldMask=u.join(","):delete n.fieldMask}else delete n.fieldMask}else o!==null&&Array.isArray(o)&&o.length>0?n.fieldMask=o.join(","):delete n.fieldMask;return n}class N_ extends Dn{constructor(e){super(),this.apiClient=e}async create(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("The client.tokens.create method is only supported by the Gemini Developer API.");{const a=y_(this.apiClient,e);r=Te("auth_tokens",a._url),s=a._query,delete a.config,delete a._url,delete a._query;const u=D_(a,e.config);return o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(u),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>c)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function U_(n,e){const t={},i=l(n,["force"]);return e!==void 0&&i!=null&&d(e,["_query","force"],i),t}function L_(n){const e={},t=l(n,["name"]);t!=null&&d(e,["_url","name"],t);const i=l(n,["config"]);return i!=null&&U_(i,e),e}function F_(n){const e={},t=l(n,["name"]);return t!=null&&d(e,["_url","name"],t),e}function B_(n,e){const t={},i=l(n,["pageSize"]);e!==void 0&&i!=null&&d(e,["_query","pageSize"],i);const o=l(n,["pageToken"]);return e!==void 0&&o!=null&&d(e,["_query","pageToken"],o),t}function O_(n){const e={},t=l(n,["parent"]);t!=null&&d(e,["_url","parent"],t);const i=l(n,["config"]);return i!=null&&B_(i,e),e}function k_(n){const e={},t=l(n,["sdkHttpResponse"]);t!=null&&d(e,["sdkHttpResponse"],t);const i=l(n,["nextPageToken"]);i!=null&&d(e,["nextPageToken"],i);const o=l(n,["documents"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),d(e,["documents"],r)}return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class H_ extends Dn{constructor(e){super(),this.apiClient=e,this.list=async t=>new pi(Pn.PAGED_ITEM_DOCUMENTS,i=>this.listInternal({parent:t.parent,config:i.config}),await this.listInternal(t),t)}async get(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=F_(e);return r=Te("{name}",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json()),o.then(u=>u)}}async delete(e){var t,i;let o="",r={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const s=L_(e);o=Te("{name}",s._url),r=s._query,delete s._url,delete s._query,await this.apiClient.request({path:o,queryParams:r,body:JSON.stringify(s),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal})}}async listInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=O_(e);return r=Te("{parent}/documents",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json()),o.then(u=>{const c=k_(u),f=new Sf;return Object.assign(f,c),f})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class G_ extends Dn{constructor(e,t=new H_(e)){super(),this.apiClient=e,this.documents=t,this.list=async(i={})=>new pi(Pn.PAGED_ITEM_FILE_SEARCH_STORES,o=>this.listInternal(o),await this.listInternal(i),i)}async uploadToFileSearchStore(e){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files to a file search store.");return this.apiClient.uploadFileToFileSearchStore(e.fileSearchStoreName,e.file,e.config)}async create(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=bg(e);return r=Te("fileSearchStores",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json()),o.then(u=>u)}}async get(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=Ug(e);return r=Te("{name}",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json()),o.then(u=>u)}}async delete(e){var t,i;let o="",r={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const s=Ng(e);o=Te("{name}",s._url),r=s._query,delete s._url,delete s._query,await this.apiClient.request({path:o,queryParams:r,body:JSON.stringify(s),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal})}}async listInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=Hg(e);return r=Te("fileSearchStores",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json()),o.then(u=>{const c=Gg(u),f=new Ef;return Object.assign(f,c),f})}}async uploadToFileSearchStoreInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=Vg(e);return r=Te("upload/v1beta/{file_search_store_name}:uploadToFileSearchStore",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json()),o.then(u=>{const c=zg(u),f=new yf;return Object.assign(f,c),f})}}async importFile(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=Bg(e);return r=Te("{file_search_store_name}:importFile",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json()),o.then(u=>{const c=Fg(u),f=new Ta;return Object.assign(f,c),f})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function V_(n,e){const t={},i=l(n,["name"]);return i!=null&&d(t,["_url","name"],i),t}function z_(n,e){const t={},i=l(n,["name"]);return i!=null&&d(t,["_url","name"],i),t}function W_(n,e){const t={},i=l(n,["sdkHttpResponse"]);return i!=null&&d(t,["sdkHttpResponse"],i),t}function q_(n,e){const t={},i=l(n,["sdkHttpResponse"]);return i!=null&&d(t,["sdkHttpResponse"],i),t}function $_(n,e,t){const i={};if(l(n,["validationDataset"])!==void 0)throw new Error("validationDataset parameter is not supported in Gemini API.");const o=l(n,["tunedModelDisplayName"]);if(e!==void 0&&o!=null&&d(e,["displayName"],o),l(n,["description"])!==void 0)throw new Error("description parameter is not supported in Gemini API.");const r=l(n,["epochCount"]);e!==void 0&&r!=null&&d(e,["tuningTask","hyperparameters","epochCount"],r);const s=l(n,["learningRateMultiplier"]);if(s!=null&&d(i,["tuningTask","hyperparameters","learningRateMultiplier"],s),l(n,["exportLastCheckpointOnly"])!==void 0)throw new Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");if(l(n,["preTunedModelCheckpointId"])!==void 0)throw new Error("preTunedModelCheckpointId parameter is not supported in Gemini API.");if(l(n,["adapterSize"])!==void 0)throw new Error("adapterSize parameter is not supported in Gemini API.");const a=l(n,["batchSize"]);e!==void 0&&a!=null&&d(e,["tuningTask","hyperparameters","batchSize"],a);const u=l(n,["learningRate"]);if(e!==void 0&&u!=null&&d(e,["tuningTask","hyperparameters","learningRate"],u),l(n,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");if(l(n,["beta"])!==void 0)throw new Error("beta parameter is not supported in Gemini API.");return i}function X_(n,e,t){const i={};let o=l(t,["config","method"]);if(o===void 0&&(o="SUPERVISED_FINE_TUNING"),o==="SUPERVISED_FINE_TUNING"){const m=l(n,["validationDataset"]);e!==void 0&&m!=null&&d(e,["supervisedTuningSpec"],Su(m))}else if(o==="PREFERENCE_TUNING"){const m=l(n,["validationDataset"]);e!==void 0&&m!=null&&d(e,["preferenceOptimizationSpec"],Su(m))}const r=l(n,["tunedModelDisplayName"]);e!==void 0&&r!=null&&d(e,["tunedModelDisplayName"],r);const s=l(n,["description"]);e!==void 0&&s!=null&&d(e,["description"],s);let a=l(t,["config","method"]);if(a===void 0&&(a="SUPERVISED_FINE_TUNING"),a==="SUPERVISED_FINE_TUNING"){const m=l(n,["epochCount"]);e!==void 0&&m!=null&&d(e,["supervisedTuningSpec","hyperParameters","epochCount"],m)}else if(a==="PREFERENCE_TUNING"){const m=l(n,["epochCount"]);e!==void 0&&m!=null&&d(e,["preferenceOptimizationSpec","hyperParameters","epochCount"],m)}let u=l(t,["config","method"]);if(u===void 0&&(u="SUPERVISED_FINE_TUNING"),u==="SUPERVISED_FINE_TUNING"){const m=l(n,["learningRateMultiplier"]);e!==void 0&&m!=null&&d(e,["supervisedTuningSpec","hyperParameters","learningRateMultiplier"],m)}else if(u==="PREFERENCE_TUNING"){const m=l(n,["learningRateMultiplier"]);e!==void 0&&m!=null&&d(e,["preferenceOptimizationSpec","hyperParameters","learningRateMultiplier"],m)}let c=l(t,["config","method"]);if(c===void 0&&(c="SUPERVISED_FINE_TUNING"),c==="SUPERVISED_FINE_TUNING"){const m=l(n,["exportLastCheckpointOnly"]);e!==void 0&&m!=null&&d(e,["supervisedTuningSpec","exportLastCheckpointOnly"],m)}else if(c==="PREFERENCE_TUNING"){const m=l(n,["exportLastCheckpointOnly"]);e!==void 0&&m!=null&&d(e,["preferenceOptimizationSpec","exportLastCheckpointOnly"],m)}let f=l(t,["config","method"]);if(f===void 0&&(f="SUPERVISED_FINE_TUNING"),f==="SUPERVISED_FINE_TUNING"){const m=l(n,["adapterSize"]);e!==void 0&&m!=null&&d(e,["supervisedTuningSpec","hyperParameters","adapterSize"],m)}else if(f==="PREFERENCE_TUNING"){const m=l(n,["adapterSize"]);e!==void 0&&m!=null&&d(e,["preferenceOptimizationSpec","hyperParameters","adapterSize"],m)}if(l(n,["batchSize"])!==void 0)throw new Error("batchSize parameter is not supported in Vertex AI.");if(l(n,["learningRate"])!==void 0)throw new Error("learningRate parameter is not supported in Vertex AI.");const h=l(n,["labels"]);e!==void 0&&h!=null&&d(e,["labels"],h);const p=l(n,["beta"]);return e!==void 0&&p!=null&&d(e,["preferenceOptimizationSpec","hyperParameters","beta"],p),i}function Y_(n,e){const t={},i=l(n,["baseModel"]);i!=null&&d(t,["baseModel"],i);const o=l(n,["preTunedModel"]);o!=null&&d(t,["preTunedModel"],o);const r=l(n,["trainingDataset"]);r!=null&&rv(r);const s=l(n,["config"]);return s!=null&&$_(s,t),t}function J_(n,e){const t={},i=l(n,["baseModel"]);i!=null&&d(t,["baseModel"],i);const o=l(n,["preTunedModel"]);o!=null&&d(t,["preTunedModel"],o);const r=l(n,["trainingDataset"]);r!=null&&sv(r,t,e);const s=l(n,["config"]);return s!=null&&X_(s,t,e),t}function K_(n,e){const t={},i=l(n,["name"]);return i!=null&&d(t,["_url","name"],i),t}function Z_(n,e){const t={},i=l(n,["name"]);return i!=null&&d(t,["_url","name"],i),t}function Q_(n,e,t){const i={},o=l(n,["pageSize"]);e!==void 0&&o!=null&&d(e,["_query","pageSize"],o);const r=l(n,["pageToken"]);e!==void 0&&r!=null&&d(e,["_query","pageToken"],r);const s=l(n,["filter"]);return e!==void 0&&s!=null&&d(e,["_query","filter"],s),i}function j_(n,e,t){const i={},o=l(n,["pageSize"]);e!==void 0&&o!=null&&d(e,["_query","pageSize"],o);const r=l(n,["pageToken"]);e!==void 0&&r!=null&&d(e,["_query","pageToken"],r);const s=l(n,["filter"]);return e!==void 0&&s!=null&&d(e,["_query","filter"],s),i}function ev(n,e){const t={},i=l(n,["config"]);return i!=null&&Q_(i,t),t}function tv(n,e){const t={},i=l(n,["config"]);return i!=null&&j_(i,t),t}function nv(n,e){const t={},i=l(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=l(n,["nextPageToken"]);o!=null&&d(t,["nextPageToken"],o);const r=l(n,["tunedModels"]);if(r!=null){let s=r;Array.isArray(s)&&(s=s.map(a=>td(a))),d(t,["tuningJobs"],s)}return t}function iv(n,e){const t={},i=l(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=l(n,["nextPageToken"]);o!=null&&d(t,["nextPageToken"],o);const r=l(n,["tuningJobs"]);if(r!=null){let s=r;Array.isArray(s)&&(s=s.map(a=>Ps(a))),d(t,["tuningJobs"],s)}return t}function ov(n,e){const t={},i=l(n,["name"]);i!=null&&d(t,["model"],i);const o=l(n,["name"]);return o!=null&&d(t,["endpoint"],o),t}function rv(n,e){const t={};if(l(n,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(l(n,["vertexDatasetResource"])!==void 0)throw new Error("vertexDatasetResource parameter is not supported in Gemini API.");const i=l(n,["examples"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>r)),d(t,["examples","examples"],o)}return t}function sv(n,e,t){const i={};let o=l(t,["config","method"]);if(o===void 0&&(o="SUPERVISED_FINE_TUNING"),o==="SUPERVISED_FINE_TUNING"){const s=l(n,["gcsUri"]);e!==void 0&&s!=null&&d(e,["supervisedTuningSpec","trainingDatasetUri"],s)}else if(o==="PREFERENCE_TUNING"){const s=l(n,["gcsUri"]);e!==void 0&&s!=null&&d(e,["preferenceOptimizationSpec","trainingDatasetUri"],s)}let r=l(t,["config","method"]);if(r===void 0&&(r="SUPERVISED_FINE_TUNING"),r==="SUPERVISED_FINE_TUNING"){const s=l(n,["vertexDatasetResource"]);e!==void 0&&s!=null&&d(e,["supervisedTuningSpec","trainingDatasetUri"],s)}else if(r==="PREFERENCE_TUNING"){const s=l(n,["vertexDatasetResource"]);e!==void 0&&s!=null&&d(e,["preferenceOptimizationSpec","trainingDatasetUri"],s)}if(l(n,["examples"])!==void 0)throw new Error("examples parameter is not supported in Vertex AI.");return i}function td(n,e){const t={},i=l(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=l(n,["name"]);o!=null&&d(t,["name"],o);const r=l(n,["state"]);r!=null&&d(t,["state"],Lc(r));const s=l(n,["createTime"]);s!=null&&d(t,["createTime"],s);const a=l(n,["tuningTask","startTime"]);a!=null&&d(t,["startTime"],a);const u=l(n,["tuningTask","completeTime"]);u!=null&&d(t,["endTime"],u);const c=l(n,["updateTime"]);c!=null&&d(t,["updateTime"],c);const f=l(n,["description"]);f!=null&&d(t,["description"],f);const h=l(n,["baseModel"]);h!=null&&d(t,["baseModel"],h);const p=l(n,["_self"]);return p!=null&&d(t,["tunedModel"],ov(p)),t}function Ps(n,e){const t={},i=l(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=l(n,["name"]);o!=null&&d(t,["name"],o);const r=l(n,["state"]);r!=null&&d(t,["state"],Lc(r));const s=l(n,["createTime"]);s!=null&&d(t,["createTime"],s);const a=l(n,["startTime"]);a!=null&&d(t,["startTime"],a);const u=l(n,["endTime"]);u!=null&&d(t,["endTime"],u);const c=l(n,["updateTime"]);c!=null&&d(t,["updateTime"],c);const f=l(n,["error"]);f!=null&&d(t,["error"],f);const h=l(n,["description"]);h!=null&&d(t,["description"],h);const p=l(n,["baseModel"]);p!=null&&d(t,["baseModel"],p);const m=l(n,["tunedModel"]);m!=null&&d(t,["tunedModel"],m);const E=l(n,["preTunedModel"]);E!=null&&d(t,["preTunedModel"],E);const y=l(n,["supervisedTuningSpec"]);y!=null&&d(t,["supervisedTuningSpec"],y);const S=l(n,["preferenceOptimizationSpec"]);S!=null&&d(t,["preferenceOptimizationSpec"],S);const g=l(n,["tuningDataStats"]);g!=null&&d(t,["tuningDataStats"],g);const w=l(n,["encryptionSpec"]);w!=null&&d(t,["encryptionSpec"],w);const C=l(n,["partnerModelTuningSpec"]);C!=null&&d(t,["partnerModelTuningSpec"],C);const M=l(n,["customBaseModel"]);M!=null&&d(t,["customBaseModel"],M);const O=l(n,["experiment"]);O!=null&&d(t,["experiment"],O);const F=l(n,["labels"]);F!=null&&d(t,["labels"],F);const N=l(n,["outputUri"]);N!=null&&d(t,["outputUri"],N);const H=l(n,["pipelineJob"]);H!=null&&d(t,["pipelineJob"],H);const A=l(n,["serviceAccount"]);A!=null&&d(t,["serviceAccount"],A);const T=l(n,["tunedModelDisplayName"]);T!=null&&d(t,["tunedModelDisplayName"],T);const B=l(n,["veoTuningSpec"]);return B!=null&&d(t,["veoTuningSpec"],B),t}function av(n,e){const t={},i=l(n,["sdkHttpResponse"]);i!=null&&d(t,["sdkHttpResponse"],i);const o=l(n,["name"]);o!=null&&d(t,["name"],o);const r=l(n,["metadata"]);r!=null&&d(t,["metadata"],r);const s=l(n,["done"]);s!=null&&d(t,["done"],s);const a=l(n,["error"]);return a!=null&&d(t,["error"],a),t}function Su(n,e){const t={},i=l(n,["gcsUri"]);i!=null&&d(t,["validationDatasetUri"],i);const o=l(n,["vertexDatasetResource"]);return o!=null&&d(t,["validationDatasetUri"],o),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class lv extends Dn{constructor(e){super(),this.apiClient=e,this.list=async(t={})=>new pi(Pn.PAGED_ITEM_TUNING_JOBS,i=>this.listInternal(i),await this.listInternal(t),t),this.get=async t=>await this.getInternal(t),this.tune=async t=>{var i;if(this.apiClient.isVertexAI())if(t.baseModel.startsWith("projects/")){const o={tunedModelName:t.baseModel};!((i=t.config)===null||i===void 0)&&i.preTunedModelCheckpointId&&(o.checkpointId=t.config.preTunedModelCheckpointId);const r=Object.assign(Object.assign({},t),{preTunedModel:o});return r.baseModel=void 0,await this.tuneInternal(r)}else{const o=Object.assign({},t);return await this.tuneInternal(o)}else{const o=Object.assign({},t),r=await this.tuneMldevInternal(o);let s="";return r.metadata!==void 0&&r.metadata.tunedModel!==void 0?s=r.metadata.tunedModel:r.name!==void 0&&r.name.includes("/operations/")&&(s=r.name.split("/operations/")[0]),{name:s,state:xs.JOB_STATE_QUEUED}}}}async getInternal(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=Z_(e);return a=Te("{name}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>Ps(f))}else{const c=K_(e);return a=Te("{name}",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>td(f))}}async listInternal(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=tv(e);return a=Te("tuningJobs",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=iv(f),p=new Zl;return Object.assign(p,h),p})}else{const c=ev(e);return a=Te("tunedModels",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=nv(f),p=new Zl;return Object.assign(p,h),p})}}async cancel(e){var t,i,o,r;let s,a="",u={};if(this.apiClient.isVertexAI()){const c=z_(e);return a=Te("{name}:cancel",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=q_(f),p=new Ql;return Object.assign(p,h),p})}else{const c=V_(e);return a=Te("{name}:cancel",c._url),u=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:a,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:f.headers},p})),s.then(f=>{const h=W_(f),p=new Ql;return Object.assign(p,h),p})}}async tuneInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const a=J_(e,e);return r=Te("tuningJobs",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json().then(c=>{const f=c;return f.sdkHttpResponse={headers:u.headers},f})),o.then(u=>Ps(u))}else throw new Error("This method is only supported by the Vertex AI.")}async tuneMldevInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const a=Y_(e);return r=Te("tunedModels",a._url),s=a._query,delete a._url,delete a._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(a),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(u=>u.json().then(c=>{const f=c;return f.sdkHttpResponse={headers:u.headers},f})),o.then(u=>av(u))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class uv{async download(e,t){throw new Error("Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.")}}const cv=1024*1024*8,dv=3,fv=1e3,hv=2,yr="x-goog-upload-status";async function pv(n,e,t){var i;const o=await nd(n,e,t),r=await(o==null?void 0:o.json());if(((i=o==null?void 0:o.headers)===null||i===void 0?void 0:i[yr])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");return r.file}async function mv(n,e,t){var i;const o=await nd(n,e,t),r=await(o==null?void 0:o.json());if(((i=o==null?void 0:o.headers)===null||i===void 0?void 0:i[yr])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");const s=Ic(r),a=new xa;return Object.assign(a,s),a}async function nd(n,e,t){var i,o;let r=0,s=0,a=new Ms(new Response),u="upload";for(r=n.size;s<r;){const c=Math.min(cv,r-s),f=n.slice(s,s+c);s+c>=r&&(u+=", finalize");let h=0,p=fv;for(;h<dv&&(a=await t.request({path:"",body:f,httpMethod:"POST",httpOptions:{apiVersion:"",baseUrl:e,headers:{"X-Goog-Upload-Command":u,"X-Goog-Upload-Offset":String(s),"Content-Length":String(c)}}}),!(!((i=a==null?void 0:a.headers)===null||i===void 0)&&i[yr]));)h++,await _v(p),p=p*hv;if(s+=c,((o=a==null?void 0:a.headers)===null||o===void 0?void 0:o[yr])!=="active")break;if(r<=s)throw new Error("All content has been uploaded, but the upload status is not finalized.")}return a}async function gv(n){return{size:n.size,type:n.type}}function _v(n){return new Promise(e=>setTimeout(e,n))}class vv{async upload(e,t,i){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await pv(e,t,i)}async uploadToFileSearchStore(e,t,i){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await mv(e,t,i)}async stat(e){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await gv(e)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Sv{create(e,t,i){return new Ev(e,t,i)}}class Ev{constructor(e,t,i){this.url=e,this.headers=t,this.callbacks=i}connect(){this.ws=new WebSocket(this.url),this.ws.onopen=this.callbacks.onopen,this.ws.onerror=this.callbacks.onerror,this.ws.onclose=this.callbacks.onclose,this.ws.onmessage=this.callbacks.onmessage}send(e){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.send(e)}close(){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.close()}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Eu="x-goog-api-key";class yv{constructor(e){this.apiKey=e}async addAuthHeaders(e,t){if(e.get(Eu)===null){if(this.apiKey.startsWith("auth_tokens/"))throw new Error("Ephemeral tokens are only supported by the live API.");if(!this.apiKey)throw new Error("API key is missing. Please provide a valid API key.");e.append(Eu,this.apiKey)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Tv="gl-node/";class xv{constructor(e){var t;if(e.apiKey==null)throw new Error("An API Key must be set when running in a browser");if(e.project||e.location)throw new Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");this.vertexai=(t=e.vertexai)!==null&&t!==void 0?t:!1,this.apiKey=e.apiKey;const i=Zd(e.httpOptions,e.vertexai,void 0,void 0);i&&(e.httpOptions?e.httpOptions.baseUrl=i:e.httpOptions={baseUrl:i}),this.apiVersion=e.apiVersion,this.httpOptions=e.httpOptions;const o=new yv(this.apiKey);this.apiClient=new Zg({auth:o,apiVersion:this.apiVersion,apiKey:this.apiKey,vertexai:this.vertexai,httpOptions:this.httpOptions,userAgentExtra:Tv+"web",uploader:new vv,downloader:new uv}),this.models=new g_(this.apiClient),this.live=new c_(this.apiClient,o,new Sv),this.batches=new Rh(this.apiClient),this.chats=new lp(this.models,this.apiClient),this.caches=new rp(this.apiClient),this.files=new vp(this.apiClient),this.operations=new __(this.apiClient),this.authTokens=new N_(this.apiClient),this.tunings=new lv(this.apiClient),this.fileSearchStores=new G_(this.apiClient)}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cr=globalThis,Ia=cr.ShadowRoot&&(cr.ShadyCSS===void 0||cr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pa=Symbol(),yu=new WeakMap;let id=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Pa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ia&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=yu.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&yu.set(t,e))}return e}toString(){return this.cssText}};const Mv=n=>new id(typeof n=="string"?n:n+"",void 0,Pa),od=(n,...e)=>{const t=n.length===1?n[0]:e.reduce(((i,o,r)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[r+1]),n[0]);return new id(t,n,Pa)},Av=(n,e)=>{if(Ia)n.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const i=document.createElement("style"),o=cr.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,n.appendChild(i)}},Tu=Ia?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Mv(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Cv,defineProperty:Rv,getOwnPropertyDescriptor:wv,getOwnPropertyNames:Iv,getOwnPropertySymbols:Pv,getPrototypeOf:bv}=Object,$n=globalThis,xu=$n.trustedTypes,Dv=xu?xu.emptyScript:"",Hr=$n.reactiveElementPolyfillSupport,mo=(n,e)=>n,Tr={toAttribute(n,e){switch(e){case Boolean:n=n?Dv:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},ba=(n,e)=>!Cv(n,e),Mu={attribute:!0,type:String,converter:Tr,reflect:!1,useDefault:!1,hasChanged:ba};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$n.litPropertyMetadata??($n.litPropertyMetadata=new WeakMap);let bi=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Mu){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Rv(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:r}=wv(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){const a=o==null?void 0:o.call(this);r==null||r.call(this,s),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Mu}static _$Ei(){if(this.hasOwnProperty(mo("elementProperties")))return;const e=bv(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(mo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mo("properties"))){const t=this.properties,i=[...Iv(t),...Pv(t)];for(const o of i)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,o]of t)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const o=this._$Eu(t,i);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(Tu(o))}else e!==void 0&&t.push(Tu(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach((t=>t(this)))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Av(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach((t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach((t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var r;const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const s=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Tr).toAttribute(t,i.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){var r,s;const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=i.getPropertyOptions(o),u=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:Tr;this._$Em=o;const c=u.fromAttribute(t,a.type);this[o]=c??((s=this._$Ej)==null?void 0:s.get(o))??c,this._$Em=null}}requestUpdate(e,t,i){var o;if(e!==void 0){const r=this.constructor,s=this[e];if(i??(i=r.getPropertyOptions(e)),!((i.hasChanged??ba)(s,t)||i.useDefault&&i.reflect&&s===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},s){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,s??t??this[e]),r!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,s]of o){const{wrapped:a}=s,u=this[r];a!==!0||this._$AL.has(r)||u===void 0||this.C(r,void 0,s,u)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach((o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)})),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach((i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach((t=>this._$ET(t,this[t])))),this._$EM()}updated(e){}firstUpdated(e){}};bi.elementStyles=[],bi.shadowRootOptions={mode:"open"},bi[mo("elementProperties")]=new Map,bi[mo("finalized")]=new Map,Hr==null||Hr({ReactiveElement:bi}),($n.reactiveElementVersions??($n.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const go=globalThis,xr=go.trustedTypes,Au=xr?xr.createPolicy("lit-html",{createHTML:n=>n}):void 0,rd="$lit$",zn=`lit$${Math.random().toFixed(9).slice(2)}$`,sd="?"+zn,Nv=`<${sd}>`,fi=document,So=()=>fi.createComment(""),Eo=n=>n===null||typeof n!="object"&&typeof n!="function",Da=Array.isArray,Uv=n=>Da(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Gr=`[ 	
\f\r]`,so=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Cu=/-->/g,Ru=/>/g,jn=RegExp(`>|${Gr}(?:([^\\s"'>=/]+)(${Gr}*=${Gr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wu=/'/g,Iu=/"/g,ad=/^(?:script|style|textarea|title)$/i,Lv=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),ld=Lv(1),Gi=Symbol.for("lit-noChange"),It=Symbol.for("lit-nothing"),Pu=new WeakMap,ci=fi.createTreeWalker(fi,129);function ud(n,e){if(!Da(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Au!==void 0?Au.createHTML(e):e}const Fv=(n,e)=>{const t=n.length-1,i=[];let o,r=e===2?"<svg>":e===3?"<math>":"",s=so;for(let a=0;a<t;a++){const u=n[a];let c,f,h=-1,p=0;for(;p<u.length&&(s.lastIndex=p,f=s.exec(u),f!==null);)p=s.lastIndex,s===so?f[1]==="!--"?s=Cu:f[1]!==void 0?s=Ru:f[2]!==void 0?(ad.test(f[2])&&(o=RegExp("</"+f[2],"g")),s=jn):f[3]!==void 0&&(s=jn):s===jn?f[0]===">"?(s=o??so,h=-1):f[1]===void 0?h=-2:(h=s.lastIndex-f[2].length,c=f[1],s=f[3]===void 0?jn:f[3]==='"'?Iu:wu):s===Iu||s===wu?s=jn:s===Cu||s===Ru?s=so:(s=jn,o=void 0);const m=s===jn&&n[a+1].startsWith("/>")?" ":"";r+=s===so?u+Nv:h>=0?(i.push(c),u.slice(0,h)+rd+u.slice(h)+zn+m):u+zn+(h===-2?a:m)}return[ud(n,r+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class yo{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,s=0;const a=e.length-1,u=this.parts,[c,f]=Fv(e,t);if(this.el=yo.createElement(c,i),ci.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=ci.nextNode())!==null&&u.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(rd)){const p=f[s++],m=o.getAttribute(h).split(zn),E=/([.?@])?(.*)/.exec(p);u.push({type:1,index:r,name:E[2],strings:m,ctor:E[1]==="."?Ov:E[1]==="?"?kv:E[1]==="@"?Hv:Ur}),o.removeAttribute(h)}else h.startsWith(zn)&&(u.push({type:6,index:r}),o.removeAttribute(h));if(ad.test(o.tagName)){const h=o.textContent.split(zn),p=h.length-1;if(p>0){o.textContent=xr?xr.emptyScript:"";for(let m=0;m<p;m++)o.append(h[m],So()),ci.nextNode(),u.push({type:2,index:++r});o.append(h[p],So())}}}else if(o.nodeType===8)if(o.data===sd)u.push({type:2,index:r});else{let h=-1;for(;(h=o.data.indexOf(zn,h+1))!==-1;)u.push({type:7,index:r}),h+=zn.length-1}r++}}static createElement(e,t){const i=fi.createElement("template");return i.innerHTML=e,i}}function Vi(n,e,t=n,i){var s,a;if(e===Gi)return e;let o=i!==void 0?(s=t._$Co)==null?void 0:s[i]:t._$Cl;const r=Eo(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),r===void 0?o=void 0:(o=new r(n),o._$AT(n,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=o:t._$Cl=o),o!==void 0&&(e=Vi(n,o._$AS(n,e.values),o,i)),e}class Bv{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=((e==null?void 0:e.creationScope)??fi).importNode(t,!0);ci.currentNode=o;let r=ci.nextNode(),s=0,a=0,u=i[0];for(;u!==void 0;){if(s===u.index){let c;u.type===2?c=new Ro(r,r.nextSibling,this,e):u.type===1?c=new u.ctor(r,u.name,u.strings,this,e):u.type===6&&(c=new Gv(r,this,e)),this._$AV.push(c),u=i[++a]}s!==(u==null?void 0:u.index)&&(r=ci.nextNode(),s++)}return ci.currentNode=fi,o}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Ro{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=It,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Vi(this,e,t),Eo(e)?e===It||e==null||e===""?(this._$AH!==It&&this._$AR(),this._$AH=It):e!==this._$AH&&e!==Gi&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Uv(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==It&&Eo(this._$AH)?this._$AA.nextSibling.data=e:this.T(fi.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=yo.createElement(ud(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(t);else{const s=new Bv(o,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=Pu.get(e.strings);return t===void 0&&Pu.set(e.strings,t=new yo(e)),t}k(e){Da(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new Ro(this.O(So()),this.O(So()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Ur{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=It,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=It}_$AI(e,t=this,i,o){const r=this.strings;let s=!1;if(r===void 0)e=Vi(this,e,t,0),s=!Eo(e)||e!==this._$AH&&e!==Gi,s&&(this._$AH=e);else{const a=e;let u,c;for(e=r[0],u=0;u<r.length-1;u++)c=Vi(this,a[i+u],t,u),c===Gi&&(c=this._$AH[u]),s||(s=!Eo(c)||c!==this._$AH[u]),c===It?e=It:e!==It&&(e+=(c??"")+r[u+1]),this._$AH[u]=c}s&&!o&&this.j(e)}j(e){e===It?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ov extends Ur{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===It?void 0:e}}class kv extends Ur{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==It)}}class Hv extends Ur{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=Vi(this,e,t,0)??It)===Gi)return;const i=this._$AH,o=e===It&&i!==It||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==It&&(i===It||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Gv{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Vi(this,e)}}const Vr=go.litHtmlPolyfillSupport;Vr==null||Vr(yo,Ro),(go.litHtmlVersions??(go.litHtmlVersions=[])).push("3.3.1");const Vv=(n,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let o=i._$litPart$;if(o===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=o=new Ro(e.insertBefore(So(),r),r,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const di=globalThis;let Oi=class extends bi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Vv(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Gi}};var wc;Oi._$litElement$=!0,Oi.finalized=!0,(wc=di.litElementHydrateSupport)==null||wc.call(di,{LitElement:Oi});const zr=di.litElementPolyfillSupport;zr==null||zr({LitElement:Oi});(di.litElementVersions??(di.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cd=n=>(e,t)=>{t!==void 0?t.addInitializer((()=>{customElements.define(n,e)})):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zv={attribute:!0,type:String,converter:Tr,reflect:!1,hasChanged:ba},Wv=(n=zv,e,t)=>{const{kind:i,metadata:o}=t;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),i==="setter"&&((n=Object.create(n)).wrapped=!0),r.set(t.name,n),i==="accessor"){const{name:s}=t;return{set(a){const u=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,u,n)},init(a){return a!==void 0&&this.C(s,void 0,n,a),a}}}if(i==="setter"){const{name:s}=t;return function(a){const u=this[s];e.call(this,a),this.requestUpdate(s,u,n)}}throw Error("Unsupported decorator location: "+i)};function Na(n){return(e,t)=>typeof t=="object"?Wv(n,e,t):((i,o,r)=>{const s=o.hasOwnProperty(r);return o.constructor.createProperty(r,i),s?Object.getOwnPropertyDescriptor(o,r):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wo(n){return Na({...n,state:!0,attribute:!1})}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/function qv(n){let e="";const t=n.byteLength;for(let i=0;i<t;i++)e+=String.fromCharCode(n[i]);return btoa(e)}function $v(n){const e=atob(n),t=e.length,i=new Uint8Array(t);for(let o=0;o<t;o++)i[o]=e.charCodeAt(o);return i}function Xv(n){const e=n.length,t=new Int16Array(e);for(let i=0;i<e;i++)t[i]=n[i]*32768;return{data:qv(new Uint8Array(t.buffer)),mimeType:"audio/pcm;rate=16000"}}async function Yv(n,e,t,i){const o=e.createBuffer(i,n.length/2/i,t),r=new Int16Array(n.buffer),s=r.length,a=new Float32Array(s);for(let u=0;u<s;u++)a[u]=r[u]/32768;for(let u=0;u<i;u++){const c=a.filter((f,h)=>h%i===u);o.copyToChannel(c,u)}return o}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/class bu{constructor(e){this.bufferLength=0,this.analyser=e.context.createAnalyser(),this.analyser.fftSize=32,this.bufferLength=this.analyser.frequencyBinCount,this.dataArray=new Uint8Array(this.bufferLength),e.connect(this.analyser)}update(){this.analyser.getByteFrequencyData(this.dataArray)}get data(){return this.dataArray}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ua="176",Jv=0,Du=1,Kv=2,dd=1,Zv=2,Tn=3,Yn=0,Bt=1,xn=2,wn=0,ki=1,bs=2,Nu=3,Uu=4,Qv=5,li=100,jv=101,e0=102,t0=103,n0=104,i0=200,o0=201,r0=202,s0=203,Ds=204,Ns=205,a0=206,l0=207,u0=208,c0=209,d0=210,f0=211,h0=212,p0=213,m0=214,Us=0,Ls=1,Fs=2,zi=3,Bs=4,Os=5,ks=6,Hs=7,fd=0,g0=1,_0=2,Xn=0,v0=1,S0=2,E0=3,y0=4,T0=5,x0=6,M0=7,hd=300,Wi=301,qi=302,Mr=303,Gs=304,Lr=306,Vs=1e3,Cn=1001,zs=1002,Wt=1003,A0=1004,ko=1005,Lt=1006,Wr=1007,qn=1008,bn=1009,pd=1010,md=1011,To=1012,La=1013,hi=1014,Kt=1015,zt=1016,Fa=1017,Ba=1018,xo=1020,gd=35902,_d=1021,vd=1022,Zt=1023,Mo=1026,Ao=1027,Oa=1028,ka=1029,Sd=1030,Ha=1031,Ga=1033,dr=33776,fr=33777,hr=33778,pr=33779,Ws=35840,qs=35841,$s=35842,Xs=35843,Ys=36196,Js=37492,Ks=37496,Zs=37808,Qs=37809,js=37810,ea=37811,ta=37812,na=37813,ia=37814,oa=37815,ra=37816,sa=37817,aa=37818,la=37819,ua=37820,ca=37821,mr=36492,da=36494,fa=36495,Ed=36283,ha=36284,pa=36285,ma=36286,C0=3200,R0=3201,yd=0,w0=1,Mn="",Xt="srgb",Jn="srgb-linear",Ar="linear",dt="srgb",_i=7680,Lu=519,I0=512,P0=513,b0=514,Td=515,D0=516,N0=517,U0=518,L0=519,Fu=35044,ga="300 es",Rn=2e3,Cr=2001;class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const r=o.indexOf(t);r!==-1&&o.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let r=0,s=o.length;r<s;r++)o[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qr=Math.PI/180,_a=180/Math.PI;function Io(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function tt(n,e,t){return Math.max(e,Math.min(t,n))}function F0(n,e){return(n%e+e)%e}function $r(n,e,t){return(1-t)*n+t*e}function ao(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*o+e.x,this.y=r*o+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,o,r,s,a,u,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,r,s,a,u,c)}set(e,t,i,o,r,s,a,u,c){const f=this.elements;return f[0]=e,f[1]=o,f[2]=a,f[3]=t,f[4]=r,f[5]=u,f[6]=i,f[7]=s,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,r=this.elements,s=i[0],a=i[3],u=i[6],c=i[1],f=i[4],h=i[7],p=i[2],m=i[5],E=i[8],y=o[0],S=o[3],g=o[6],w=o[1],C=o[4],M=o[7],O=o[2],F=o[5],N=o[8];return r[0]=s*y+a*w+u*O,r[3]=s*S+a*C+u*F,r[6]=s*g+a*M+u*N,r[1]=c*y+f*w+h*O,r[4]=c*S+f*C+h*F,r[7]=c*g+f*M+h*N,r[2]=p*y+m*w+E*O,r[5]=p*S+m*C+E*F,r[8]=p*g+m*M+E*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],r=e[3],s=e[4],a=e[5],u=e[6],c=e[7],f=e[8];return t*s*f-t*a*c-i*r*f+i*a*u+o*r*c-o*s*u}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],r=e[3],s=e[4],a=e[5],u=e[6],c=e[7],f=e[8],h=f*s-a*c,p=a*u-f*r,m=c*r-s*u,E=t*h+i*p+o*m;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/E;return e[0]=h*y,e[1]=(o*c-f*i)*y,e[2]=(a*i-o*s)*y,e[3]=p*y,e[4]=(f*t-o*u)*y,e[5]=(o*r-a*t)*y,e[6]=m*y,e[7]=(i*u-c*t)*y,e[8]=(s*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,r,s,a){const u=Math.cos(r),c=Math.sin(r);return this.set(i*u,i*c,-i*(u*s+c*a)+s+e,-o*c,o*u,-o*(-c*s+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xr.makeScale(e,t)),this}rotate(e){return this.premultiply(Xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new Je;function xd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function B0(){const n=Rr("canvas");return n.style.display="block",n}const Bu={};function gr(n){n in Bu||(Bu[n]=!0,console.warn(n))}function O0(n,e,t){return new Promise(function(i,o){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function k0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function H0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ou=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ku=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function G0(){const n={enabled:!0,workingColorSpace:Jn,spaces:{},convert:function(o,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===dt&&(o.r=In(o.r),o.g=In(o.g),o.b=In(o.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(o.applyMatrix3(this.spaces[r].toXYZ),o.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===dt&&(o.r=Hi(o.r),o.g=Hi(o.g),o.b=Hi(o.b))),o},fromWorkingColorSpace:function(o,r){return this.convert(o,this.workingColorSpace,r)},toWorkingColorSpace:function(o,r){return this.convert(o,r,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Mn?Ar:this.spaces[o].transfer},getLuminanceCoefficients:function(o,r=this.workingColorSpace){return o.fromArray(this.spaces[r].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,r,s){return o.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Jn]:{primaries:e,whitePoint:i,transfer:Ar,toXYZ:Ou,fromXYZ:ku,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Ou,fromXYZ:ku,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}const st=G0();function In(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vi;class V0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vi===void 0&&(vi=Rr("canvas")),vi.width=e.width,vi.height=e.height;const o=vi.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=vi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),r=o.data;for(let s=0;s<r.length;s++)r[s]=In(r[s]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(In(t[i]/255)*255):t[i]=In(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z0=0;class Va{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let r;if(Array.isArray(o)){r=[];for(let s=0,a=o.length;s<a;s++)o[s].isDataTexture?r.push(Yr(o[s].image)):r.push(Yr(o[s]))}else r=Yr(o);i.url=r}return t||(e.images[this.uuid]=i),i}}function Yr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?V0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let W0=0;class Ot extends Zi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Cn,o=Cn,r=Lt,s=qn,a=Zt,u=bn,c=Ot.DEFAULT_ANISOTROPY,f=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Io(),this.name="",this.source=new Va(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=hd;Ot.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,o=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*o+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*o+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*o+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*o+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,r;const u=e.elements,c=u[0],f=u[4],h=u[8],p=u[1],m=u[5],E=u[9],y=u[2],S=u[6],g=u[10];if(Math.abs(f-p)<.01&&Math.abs(h-y)<.01&&Math.abs(E-S)<.01){if(Math.abs(f+p)<.1&&Math.abs(h+y)<.1&&Math.abs(E+S)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,M=(m+1)/2,O=(g+1)/2,F=(f+p)/4,N=(h+y)/4,H=(E+S)/4;return C>M&&C>O?C<.01?(i=0,o=.707106781,r=.707106781):(i=Math.sqrt(C),o=F/i,r=N/i):M>O?M<.01?(i=.707106781,o=0,r=.707106781):(o=Math.sqrt(M),i=F/o,r=H/o):O<.01?(i=.707106781,o=.707106781,r=0):(r=Math.sqrt(O),i=N/r,o=H/r),this.set(i,o,r,t),this}let w=Math.sqrt((S-E)*(S-E)+(h-y)*(h-y)+(p-f)*(p-f));return Math.abs(w)<.001&&(w=1),this.x=(S-E)/w,this.y=(h-y)/w,this.z=(p-f)/w,this.w=Math.acos((c+m+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q0 extends Zi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth?i.depth:1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const o={width:e,height:t,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const r=new Ot(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,r=this.textures.length;o<r;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Va(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends q0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Md extends Ot{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $0 extends Ot{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qi{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,r,s,a){let u=i[o+0],c=i[o+1],f=i[o+2],h=i[o+3];const p=r[s+0],m=r[s+1],E=r[s+2],y=r[s+3];if(a===0){e[t+0]=u,e[t+1]=c,e[t+2]=f,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=E,e[t+3]=y;return}if(h!==y||u!==p||c!==m||f!==E){let S=1-a;const g=u*p+c*m+f*E+h*y,w=g>=0?1:-1,C=1-g*g;if(C>Number.EPSILON){const O=Math.sqrt(C),F=Math.atan2(O,g*w);S=Math.sin(S*F)/O,a=Math.sin(a*F)/O}const M=a*w;if(u=u*S+p*M,c=c*S+m*M,f=f*S+E*M,h=h*S+y*M,S===1-a){const O=1/Math.sqrt(u*u+c*c+f*f+h*h);u*=O,c*=O,f*=O,h*=O}}e[t]=u,e[t+1]=c,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,o,r,s){const a=i[o],u=i[o+1],c=i[o+2],f=i[o+3],h=r[s],p=r[s+1],m=r[s+2],E=r[s+3];return e[t]=a*E+f*h+u*m-c*p,e[t+1]=u*E+f*p+c*h-a*m,e[t+2]=c*E+f*m+a*p-u*h,e[t+3]=f*E-a*h-u*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,r=e._z,s=e._order,a=Math.cos,u=Math.sin,c=a(i/2),f=a(o/2),h=a(r/2),p=u(i/2),m=u(o/2),E=u(r/2);switch(s){case"XYZ":this._x=p*f*h+c*m*E,this._y=c*m*h-p*f*E,this._z=c*f*E+p*m*h,this._w=c*f*h-p*m*E;break;case"YXZ":this._x=p*f*h+c*m*E,this._y=c*m*h-p*f*E,this._z=c*f*E-p*m*h,this._w=c*f*h+p*m*E;break;case"ZXY":this._x=p*f*h-c*m*E,this._y=c*m*h+p*f*E,this._z=c*f*E+p*m*h,this._w=c*f*h-p*m*E;break;case"ZYX":this._x=p*f*h-c*m*E,this._y=c*m*h+p*f*E,this._z=c*f*E-p*m*h,this._w=c*f*h+p*m*E;break;case"YZX":this._x=p*f*h+c*m*E,this._y=c*m*h+p*f*E,this._z=c*f*E-p*m*h,this._w=c*f*h-p*m*E;break;case"XZY":this._x=p*f*h-c*m*E,this._y=c*m*h-p*f*E,this._z=c*f*E+p*m*h,this._w=c*f*h+p*m*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],r=t[8],s=t[1],a=t[5],u=t[9],c=t[2],f=t[6],h=t[10],p=i+a+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(f-u)*m,this._y=(r-c)*m,this._z=(s-o)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-u)/m,this._x=.25*m,this._y=(o+s)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(o+s)/m,this._y=.25*m,this._z=(u+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(s-o)/m,this._x=(r+c)/m,this._y=(u+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,r=e._z,s=e._w,a=t._x,u=t._y,c=t._z,f=t._w;return this._x=i*f+s*a+o*c-r*u,this._y=o*f+s*u+r*a-i*c,this._z=r*f+s*c+i*u-o*a,this._w=s*f-i*a-o*u-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,r=this._z,s=this._w;let a=s*e._w+i*e._x+o*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=o,this._z=r,this;const u=1-a*a;if(u<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*i+t*this._x,this._y=m*o+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(u),f=Math.atan2(c,a),h=Math.sin((1-t)*f)/c,p=Math.sin(t*f)/c;return this._w=s*h+this._w*p,this._x=i*h+this._x*p,this._y=o*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*o,this.y=r[1]*t+r[4]*i+r[7]*o,this.z=r[2]*t+r[5]*i+r[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*o+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*o+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*o+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*o+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,r=e.x,s=e.y,a=e.z,u=e.w,c=2*(s*o-a*i),f=2*(a*t-r*o),h=2*(r*i-s*t);return this.x=t+u*c+s*h-a*f,this.y=i+u*f+a*c-r*h,this.z=o+u*h+r*f-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*o,this.y=r[1]*t+r[5]*i+r[9]*o,this.z=r[2]*t+r[6]*i+r[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,r=e.z,s=t.x,a=t.y,u=t.z;return this.x=o*u-r*a,this.y=r*s-i*u,this.z=i*a-o*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jr.copy(this).projectOnVector(e),this.sub(Jr)}reflect(e){return this.sub(Jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new $,Hu=new Qi;class Po{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,nn):nn.fromBufferAttribute(r,s),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ho.copy(i.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}const o=e.children;for(let r=0,s=o.length;r<s;r++)this.expandByObject(o[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),Go.subVectors(this.max,lo),Si.subVectors(e.a,lo),Ei.subVectors(e.b,lo),yi.subVectors(e.c,lo),Fn.subVectors(Ei,Si),Bn.subVectors(yi,Ei),ei.subVectors(Si,yi);let t=[0,-Fn.z,Fn.y,0,-Bn.z,Bn.y,0,-ei.z,ei.y,Fn.z,0,-Fn.x,Bn.z,0,-Bn.x,ei.z,0,-ei.x,-Fn.y,Fn.x,0,-Bn.y,Bn.x,0,-ei.y,ei.x,0];return!Kr(t,Si,Ei,yi,Go)||(t=[1,0,0,0,1,0,0,0,1],!Kr(t,Si,Ei,yi,Go))?!1:(Vo.crossVectors(Fn,Bn),t=[Vo.x,Vo.y,Vo.z],Kr(t,Si,Ei,yi,Go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gn=[new $,new $,new $,new $,new $,new $,new $,new $],nn=new $,Ho=new Po,Si=new $,Ei=new $,yi=new $,Fn=new $,Bn=new $,ei=new $,lo=new $,Go=new $,Vo=new $,ti=new $;function Kr(n,e,t,i,o){for(let r=0,s=n.length-3;r<=s;r+=3){ti.fromArray(n,r);const a=o.x*Math.abs(ti.x)+o.y*Math.abs(ti.y)+o.z*Math.abs(ti.z),u=e.dot(ti),c=t.dot(ti),f=i.dot(ti);if(Math.max(-Math.max(u,c,f),Math.min(u,c,f))>a)return!1}return!0}const X0=new Po,uo=new $,Zr=new $;class za{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):X0.setFromPoints(e).getCenter(i);let o=0;for(let r=0,s=e.length;r<s;r++)o=Math.max(o,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);const t=uo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(uo,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(Zr)),this.expandByPoint(uo.copy(e.center).sub(Zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new $,Qr=new $,zo=new $,On=new $,jr=new $,Wo=new $,es=new $;class Y0{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Qr.copy(e).add(t).multiplyScalar(.5),zo.copy(t).sub(e).normalize(),On.copy(this.origin).sub(Qr);const r=e.distanceTo(t)*.5,s=-this.direction.dot(zo),a=On.dot(this.direction),u=-On.dot(zo),c=On.lengthSq(),f=Math.abs(1-s*s);let h,p,m,E;if(f>0)if(h=s*u-a,p=s*a-u,E=r*f,h>=0)if(p>=-E)if(p<=E){const y=1/f;h*=y,p*=y,m=h*(h+s*p+2*a)+p*(s*h+p+2*u)+c}else p=r,h=Math.max(0,-(s*p+a)),m=-h*h+p*(p+2*u)+c;else p=-r,h=Math.max(0,-(s*p+a)),m=-h*h+p*(p+2*u)+c;else p<=-E?(h=Math.max(0,-(-s*r+a)),p=h>0?-r:Math.min(Math.max(-r,-u),r),m=-h*h+p*(p+2*u)+c):p<=E?(h=0,p=Math.min(Math.max(-r,-u),r),m=p*(p+2*u)+c):(h=Math.max(0,-(s*r+a)),p=h>0?r:Math.min(Math.max(-r,-u),r),m=-h*h+p*(p+2*u)+c);else p=s>0?-r:r,h=Math.max(0,-(s*p+a)),m=-h*h+p*(p+2*u)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),o&&o.copy(Qr).addScaledVector(zo,p),m}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const i=_n.dot(this.direction),o=_n.dot(_n)-i*i,r=e.radius*e.radius;if(o>r)return null;const s=Math.sqrt(r-o),a=i-s,u=i+s;return u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,r,s,a,u;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,o=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,o=(e.min.x-p.x)*c),f>=0?(r=(e.min.y-p.y)*f,s=(e.max.y-p.y)*f):(r=(e.max.y-p.y)*f,s=(e.min.y-p.y)*f),i>s||r>o||((r>i||isNaN(i))&&(i=r),(s<o||isNaN(o))&&(o=s),h>=0?(a=(e.min.z-p.z)*h,u=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,u=(e.min.z-p.z)*h),i>u||a>o)||((a>i||i!==i)&&(i=a),(u<o||o!==o)&&(o=u),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,i,o,r){jr.subVectors(t,e),Wo.subVectors(i,e),es.crossVectors(jr,Wo);let s=this.direction.dot(es),a;if(s>0){if(o)return null;a=1}else if(s<0)a=-1,s=-s;else return null;On.subVectors(this.origin,e);const u=a*this.direction.dot(Wo.crossVectors(On,Wo));if(u<0)return null;const c=a*this.direction.dot(jr.cross(On));if(c<0||u+c>s)return null;const f=-a*On.dot(es);return f<0?null:this.at(f/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,o,r,s,a,u,c,f,h,p,m,E,y,S){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,r,s,a,u,c,f,h,p,m,E,y,S)}set(e,t,i,o,r,s,a,u,c,f,h,p,m,E,y,S){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=o,g[1]=r,g[5]=s,g[9]=a,g[13]=u,g[2]=c,g[6]=f,g[10]=h,g[14]=p,g[3]=m,g[7]=E,g[11]=y,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),s=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,r=e.z,s=Math.cos(i),a=Math.sin(i),u=Math.cos(o),c=Math.sin(o),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const p=s*f,m=s*h,E=a*f,y=a*h;t[0]=u*f,t[4]=-u*h,t[8]=c,t[1]=m+E*c,t[5]=p-y*c,t[9]=-a*u,t[2]=y-p*c,t[6]=E+m*c,t[10]=s*u}else if(e.order==="YXZ"){const p=u*f,m=u*h,E=c*f,y=c*h;t[0]=p+y*a,t[4]=E*a-m,t[8]=s*c,t[1]=s*h,t[5]=s*f,t[9]=-a,t[2]=m*a-E,t[6]=y+p*a,t[10]=s*u}else if(e.order==="ZXY"){const p=u*f,m=u*h,E=c*f,y=c*h;t[0]=p-y*a,t[4]=-s*h,t[8]=E+m*a,t[1]=m+E*a,t[5]=s*f,t[9]=y-p*a,t[2]=-s*c,t[6]=a,t[10]=s*u}else if(e.order==="ZYX"){const p=s*f,m=s*h,E=a*f,y=a*h;t[0]=u*f,t[4]=E*c-m,t[8]=p*c+y,t[1]=u*h,t[5]=y*c+p,t[9]=m*c-E,t[2]=-c,t[6]=a*u,t[10]=s*u}else if(e.order==="YZX"){const p=s*u,m=s*c,E=a*u,y=a*c;t[0]=u*f,t[4]=y-p*h,t[8]=E*h+m,t[1]=h,t[5]=s*f,t[9]=-a*f,t[2]=-c*f,t[6]=m*h+E,t[10]=p-y*h}else if(e.order==="XZY"){const p=s*u,m=s*c,E=a*u,y=a*c;t[0]=u*f,t[4]=-h,t[8]=c*f,t[1]=p*h+y,t[5]=s*f,t[9]=m*h-E,t[2]=E*h-m,t[6]=a*f,t[10]=y*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J0,e,K0)}lookAt(e,t,i){const o=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),kn.crossVectors(i,Gt),kn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),kn.crossVectors(i,Gt)),kn.normalize(),qo.crossVectors(Gt,kn),o[0]=kn.x,o[4]=qo.x,o[8]=Gt.x,o[1]=kn.y,o[5]=qo.y,o[9]=Gt.y,o[2]=kn.z,o[6]=qo.z,o[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,r=this.elements,s=i[0],a=i[4],u=i[8],c=i[12],f=i[1],h=i[5],p=i[9],m=i[13],E=i[2],y=i[6],S=i[10],g=i[14],w=i[3],C=i[7],M=i[11],O=i[15],F=o[0],N=o[4],H=o[8],A=o[12],T=o[1],B=o[5],q=o[9],Y=o[13],ie=o[2],le=o[6],j=o[10],se=o[14],Q=o[3],ge=o[7],ve=o[11],Pe=o[15];return r[0]=s*F+a*T+u*ie+c*Q,r[4]=s*N+a*B+u*le+c*ge,r[8]=s*H+a*q+u*j+c*ve,r[12]=s*A+a*Y+u*se+c*Pe,r[1]=f*F+h*T+p*ie+m*Q,r[5]=f*N+h*B+p*le+m*ge,r[9]=f*H+h*q+p*j+m*ve,r[13]=f*A+h*Y+p*se+m*Pe,r[2]=E*F+y*T+S*ie+g*Q,r[6]=E*N+y*B+S*le+g*ge,r[10]=E*H+y*q+S*j+g*ve,r[14]=E*A+y*Y+S*se+g*Pe,r[3]=w*F+C*T+M*ie+O*Q,r[7]=w*N+C*B+M*le+O*ge,r[11]=w*H+C*q+M*j+O*ve,r[15]=w*A+C*Y+M*se+O*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],r=e[12],s=e[1],a=e[5],u=e[9],c=e[13],f=e[2],h=e[6],p=e[10],m=e[14],E=e[3],y=e[7],S=e[11],g=e[15];return E*(+r*u*h-o*c*h-r*a*p+i*c*p+o*a*m-i*u*m)+y*(+t*u*m-t*c*p+r*s*p-o*s*m+o*c*f-r*u*f)+S*(+t*c*h-t*a*m-r*s*h+i*s*m+r*a*f-i*c*f)+g*(-o*a*f-t*u*h+t*a*p+o*s*h-i*s*p+i*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],r=e[3],s=e[4],a=e[5],u=e[6],c=e[7],f=e[8],h=e[9],p=e[10],m=e[11],E=e[12],y=e[13],S=e[14],g=e[15],w=h*S*c-y*p*c+y*u*m-a*S*m-h*u*g+a*p*g,C=E*p*c-f*S*c-E*u*m+s*S*m+f*u*g-s*p*g,M=f*y*c-E*h*c+E*a*m-s*y*m-f*a*g+s*h*g,O=E*h*u-f*y*u-E*a*p+s*y*p+f*a*S-s*h*S,F=t*w+i*C+o*M+r*O;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return e[0]=w*N,e[1]=(y*p*r-h*S*r-y*o*m+i*S*m+h*o*g-i*p*g)*N,e[2]=(a*S*r-y*u*r+y*o*c-i*S*c-a*o*g+i*u*g)*N,e[3]=(h*u*r-a*p*r-h*o*c+i*p*c+a*o*m-i*u*m)*N,e[4]=C*N,e[5]=(f*S*r-E*p*r+E*o*m-t*S*m-f*o*g+t*p*g)*N,e[6]=(E*u*r-s*S*r-E*o*c+t*S*c+s*o*g-t*u*g)*N,e[7]=(s*p*r-f*u*r+f*o*c-t*p*c-s*o*m+t*u*m)*N,e[8]=M*N,e[9]=(E*h*r-f*y*r-E*i*m+t*y*m+f*i*g-t*h*g)*N,e[10]=(s*y*r-E*a*r+E*i*c-t*y*c-s*i*g+t*a*g)*N,e[11]=(f*a*r-s*h*r-f*i*c+t*h*c+s*i*m-t*a*m)*N,e[12]=O*N,e[13]=(f*y*o-E*h*o+E*i*p-t*y*p-f*i*S+t*h*S)*N,e[14]=(E*a*o-s*y*o-E*i*u+t*y*u+s*i*S-t*a*S)*N,e[15]=(s*h*o-f*a*o+f*i*u-t*h*u-s*i*p+t*a*p)*N,this}scale(e){const t=this.elements,i=e.x,o=e.y,r=e.z;return t[0]*=i,t[4]*=o,t[8]*=r,t[1]*=i,t[5]*=o,t[9]*=r,t[2]*=i,t[6]*=o,t[10]*=r,t[3]*=i,t[7]*=o,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),r=1-i,s=e.x,a=e.y,u=e.z,c=r*s,f=r*a;return this.set(c*s+i,c*a-o*u,c*u+o*a,0,c*a+o*u,f*a+i,f*u-o*s,0,c*u-o*a,f*u+o*s,r*u*u+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,r,s){return this.set(1,i,r,0,e,1,s,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,r=t._x,s=t._y,a=t._z,u=t._w,c=r+r,f=s+s,h=a+a,p=r*c,m=r*f,E=r*h,y=s*f,S=s*h,g=a*h,w=u*c,C=u*f,M=u*h,O=i.x,F=i.y,N=i.z;return o[0]=(1-(y+g))*O,o[1]=(m+M)*O,o[2]=(E-C)*O,o[3]=0,o[4]=(m-M)*F,o[5]=(1-(p+g))*F,o[6]=(S+w)*F,o[7]=0,o[8]=(E+C)*N,o[9]=(S-w)*N,o[10]=(1-(p+y))*N,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let r=Ti.set(o[0],o[1],o[2]).length();const s=Ti.set(o[4],o[5],o[6]).length(),a=Ti.set(o[8],o[9],o[10]).length();this.determinant()<0&&(r=-r),e.x=o[12],e.y=o[13],e.z=o[14],on.copy(this);const c=1/r,f=1/s,h=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=f,on.elements[5]*=f,on.elements[6]*=f,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,t.setFromRotationMatrix(on),i.x=r,i.y=s,i.z=a,this}makePerspective(e,t,i,o,r,s,a=Rn){const u=this.elements,c=2*r/(t-e),f=2*r/(i-o),h=(t+e)/(t-e),p=(i+o)/(i-o);let m,E;if(a===Rn)m=-(s+r)/(s-r),E=-2*s*r/(s-r);else if(a===Cr)m=-s/(s-r),E=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,o,r,s,a=Rn){const u=this.elements,c=1/(t-e),f=1/(i-o),h=1/(s-r),p=(t+e)*c,m=(i+o)*f;let E,y;if(a===Rn)E=(s+r)*h,y=-2*h;else if(a===Cr)E=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=2*c,u[4]=0,u[8]=0,u[12]=-p,u[1]=0,u[5]=2*f,u[9]=0,u[13]=-m,u[2]=0,u[6]=0,u[10]=y,u[14]=-E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ti=new $,on=new yt,J0=new $(0,0,0),K0=new $(1,1,1),kn=new $,qo=new $,Gt=new $,Gu=new yt,Vu=new Qi;class cn{constructor(e=0,t=0,i=0,o=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,r=o[0],s=o[4],a=o[8],u=o[1],c=o[5],f=o[9],h=o[2],p=o[6],m=o[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-tt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class Ad{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Z0=0;const zu=new $,xi=new Qi,vn=new yt,$o=new $,co=new $,Q0=new $,j0=new Qi,Wu=new $(1,0,0),qu=new $(0,1,0),$u=new $(0,0,1),Xu={type:"added"},eS={type:"removed"},Mi={type:"childadded",child:null},ts={type:"childremoved",child:null};class qt extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new $,t=new cn,i=new Qi,o=new $(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new yt},normalMatrix:{value:new Je}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ad,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(Wu,e)}rotateY(e){return this.rotateOnAxis(qu,e)}rotateZ(e){return this.rotateOnAxis($u,e)}translateOnAxis(e,t){return zu.copy(e).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wu,e)}translateY(e){return this.translateOnAxis(qu,e)}translateZ(e){return this.translateOnAxis($u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$o.copy(e):$o.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(co,$o,this.up):vn.lookAt($o,co,this.up),this.quaternion.setFromRotationMatrix(vn),o&&(vn.extractRotation(o.matrixWorld),xi.setFromRotationMatrix(vn),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xu),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eS),ts.child=e,this.dispatchEvent(ts),ts.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xu),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let r=0,s=o.length;r<s;r++)o[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,Q0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,j0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let r=0,s=o.length;r<s;r++)o[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),o.instanceInfo=this._instanceInfo.map(a=>({...a})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let c=0,f=u.length;c<f;c++){const h=u[c];r(e.shapes,h)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(r(e.materials,this.material[u]));o.material=a}else o.material=r(e.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];o.animations.push(r(e.animations,u))}}if(t){const a=s(e.geometries),u=s(e.materials),c=s(e.textures),f=s(e.images),h=s(e.shapes),p=s(e.skeletons),m=s(e.animations),E=s(e.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),E.length>0&&(i.nodes=E)}return i.object=o,i;function s(a){const u=[];for(const c in a){const f=a[c];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}qt.DEFAULT_UP=new $(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new $,Sn=new $,ns=new $,En=new $,Ai=new $,Ci=new $,Yu=new $,is=new $,os=new $,rs=new $,ss=new vt,as=new vt,ls=new vt;class ln{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),rn.subVectors(e,t),o.cross(rn);const r=o.lengthSq();return r>0?o.multiplyScalar(1/Math.sqrt(r)):o.set(0,0,0)}static getBarycoord(e,t,i,o,r){rn.subVectors(o,t),Sn.subVectors(i,t),ns.subVectors(e,t);const s=rn.dot(rn),a=rn.dot(Sn),u=rn.dot(ns),c=Sn.dot(Sn),f=Sn.dot(ns),h=s*c-a*a;if(h===0)return r.set(0,0,0),null;const p=1/h,m=(c*u-a*f)*p,E=(s*f-a*u)*p;return r.set(1-m-E,E,m)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,i,o,r,s,a,u){return this.getBarycoord(e,t,i,o,En)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,En.x),u.addScaledVector(s,En.y),u.addScaledVector(a,En.z),u)}static getInterpolatedAttribute(e,t,i,o,r,s){return ss.setScalar(0),as.setScalar(0),ls.setScalar(0),ss.fromBufferAttribute(e,t),as.fromBufferAttribute(e,i),ls.fromBufferAttribute(e,o),s.setScalar(0),s.addScaledVector(ss,r.x),s.addScaledVector(as,r.y),s.addScaledVector(ls,r.z),s}static isFrontFacing(e,t,i,o){return rn.subVectors(i,t),Sn.subVectors(e,t),rn.cross(Sn).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,o,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,r=this.c;let s,a;Ai.subVectors(o,i),Ci.subVectors(r,i),is.subVectors(e,i);const u=Ai.dot(is),c=Ci.dot(is);if(u<=0&&c<=0)return t.copy(i);os.subVectors(e,o);const f=Ai.dot(os),h=Ci.dot(os);if(f>=0&&h<=f)return t.copy(o);const p=u*h-f*c;if(p<=0&&u>=0&&f<=0)return s=u/(u-f),t.copy(i).addScaledVector(Ai,s);rs.subVectors(e,r);const m=Ai.dot(rs),E=Ci.dot(rs);if(E>=0&&m<=E)return t.copy(r);const y=m*c-u*E;if(y<=0&&c>=0&&E<=0)return a=c/(c-E),t.copy(i).addScaledVector(Ci,a);const S=f*E-m*h;if(S<=0&&h-f>=0&&m-E>=0)return Yu.subVectors(r,o),a=(h-f)/(h-f+(m-E)),t.copy(o).addScaledVector(Yu,a);const g=1/(S+y+p);return s=y*g,a=p*g,t.copy(i).addScaledVector(Ai,s).addScaledVector(Ci,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function us(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=st.workingColorSpace){if(e=F0(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=us(s,r,e+1/3),this.g=us(s,r,e),this.b=us(s,r,e-1/3)}return st.toWorkingColorSpace(this,o),this}setStyle(e,t=Xt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=o[1],a=o[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=o[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=Cd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return st.fromWorkingColorSpace(bt.copy(this),e),Math.round(tt(bt.r*255,0,255))*65536+Math.round(tt(bt.g*255,0,255))*256+Math.round(tt(bt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(bt.copy(this),t);const i=bt.r,o=bt.g,r=bt.b,s=Math.max(i,o,r),a=Math.min(i,o,r);let u,c;const f=(a+s)/2;if(a===s)u=0,c=0;else{const h=s-a;switch(c=f<=.5?h/(s+a):h/(2-s-a),s){case i:u=(o-r)/h+(o<r?6:0);break;case o:u=(r-i)/h+2;break;case r:u=(i-o)/h+4;break}u/=6}return e.h=u,e.s=c,e.l=f,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Xt){st.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,i=bt.g,o=bt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Xo);const i=$r(Hn.h,Xo.h,t),o=$r(Hn.s,Xo.s,t),r=$r(Hn.l,Xo.l,t);return this.setHSL(i,o,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*o,this.g=r[1]*t+r[4]*i+r[7]*o,this.b=r[2]*t+r[5]*i+r[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new ot;ot.NAMES=Cd;let tS=0;class bo extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=ki,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ds,this.blendDst=Ns,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(i.blending=this.blending),this.side!==Yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ds&&(i.blendSrc=this.blendSrc),this.blendDst!==Ns&&(i.blendDst=this.blendDst),this.blendEquation!==li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(r){const s=[];for(const a in r){const u=r[a];delete u.metadata,s.push(u)}return s}if(t){const r=o(e.textures),s=o(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let r=0;r!==o;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wa extends bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const An=nS();function nS(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),o=new Uint32Array(512);for(let u=0;u<256;++u){const c=u-127;c<-27?(i[u]=0,i[u|256]=32768,o[u]=24,o[u|256]=24):c<-14?(i[u]=1024>>-c-14,i[u|256]=1024>>-c-14|32768,o[u]=-c-1,o[u|256]=-c-1):c<=15?(i[u]=c+15<<10,i[u|256]=c+15<<10|32768,o[u]=13,o[u|256]=13):c<128?(i[u]=31744,i[u|256]=64512,o[u]=24,o[u|256]=24):(i[u]=31744,i[u|256]=64512,o[u]=13,o[u|256]=13)}const r=new Uint32Array(2048),s=new Uint32Array(64),a=new Uint32Array(64);for(let u=1;u<1024;++u){let c=u<<13,f=0;for(;(c&8388608)===0;)c<<=1,f-=8388608;c&=-8388609,f+=947912704,r[u]=c|f}for(let u=1024;u<2048;++u)r[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)s[u]=u<<23;s[31]=1199570944,s[32]=2147483648;for(let u=33;u<63;++u)s[u]=2147483648+(u-32<<23);s[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(a[u]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:o,mantissaTable:r,exponentTable:s,offsetTable:a}}function iS(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=tt(n,-65504,65504),An.floatView[0]=n;const e=An.uint32View[0],t=e>>23&511;return An.baseTable[t]+((e&8388607)>>An.shiftTable[t])}function oS(n){const e=n>>10;return An.uint32View[0]=An.mantissaTable[An.offsetTable[e]+(n&1023)]+An.exponentTable[e],An.floatView[0]}class Ju{static toHalfFloat(e){return iS(e)}static fromHalfFloat(e){return oS(e)}}const Et=new $,Yo=new We;let rS=0;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fu,this.updateRanges=[],this.gpuType=Kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,r=this.itemSize;o<r;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yo.fromBufferAttribute(this,t),Yo.applyMatrix3(e),this.setXY(t,Yo.x,Yo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ao(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ao(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ao(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ao(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ao(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),o=kt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),o=kt(o,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fu&&(e.usage=this.usage),e}}class Rd extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wd extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class en extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sS=0;const $t=new yt,cs=new qt,Ri=new $,Vt=new Po,fo=new Po,wt=new $;class Un extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xd(e)?wd:Rd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,i){return $t.makeTranslation(e,t,i),this.applyMatrix4($t),this}scale(e,t,i){return $t.makeScale(e,t,i),this.applyMatrix4($t),this}lookAt(e){return cs.lookAt(e),cs.updateMatrix(),this.applyMatrix4(cs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,r=e.length;o<r;o++){const s=e[o];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new en(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const r=e[o];t.setXYZ(o,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const r=t[i];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(Vt.min,fo.min),Vt.expandByPoint(wt),wt.addVectors(Vt.max,fo.max),Vt.expandByPoint(wt)):(Vt.expandByPoint(fo.min),Vt.expandByPoint(fo.max))}Vt.getCenter(i);let o=0;for(let r=0,s=e.count;r<s;r++)wt.fromBufferAttribute(e,r),o=Math.max(o,i.distanceToSquared(wt));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],u=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)wt.fromBufferAttribute(a,c),u&&(Ri.fromBufferAttribute(e,c),wt.add(Ri)),o=Math.max(o,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],u=[];for(let H=0;H<i.count;H++)a[H]=new $,u[H]=new $;const c=new $,f=new $,h=new $,p=new We,m=new We,E=new We,y=new $,S=new $;function g(H,A,T){c.fromBufferAttribute(i,H),f.fromBufferAttribute(i,A),h.fromBufferAttribute(i,T),p.fromBufferAttribute(r,H),m.fromBufferAttribute(r,A),E.fromBufferAttribute(r,T),f.sub(c),h.sub(c),m.sub(p),E.sub(p);const B=1/(m.x*E.y-E.x*m.y);isFinite(B)&&(y.copy(f).multiplyScalar(E.y).addScaledVector(h,-m.y).multiplyScalar(B),S.copy(h).multiplyScalar(m.x).addScaledVector(f,-E.x).multiplyScalar(B),a[H].add(y),a[A].add(y),a[T].add(y),u[H].add(S),u[A].add(S),u[T].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let H=0,A=w.length;H<A;++H){const T=w[H],B=T.start,q=T.count;for(let Y=B,ie=B+q;Y<ie;Y+=3)g(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const C=new $,M=new $,O=new $,F=new $;function N(H){O.fromBufferAttribute(o,H),F.copy(O);const A=a[H];C.copy(A),C.sub(O.multiplyScalar(O.dot(A))).normalize(),M.crossVectors(F,A);const B=M.dot(u[H])<0?-1:1;s.setXYZW(H,C.x,C.y,C.z,B)}for(let H=0,A=w.length;H<A;++H){const T=w[H],B=T.start,q=T.count;for(let Y=B,ie=B+q;Y<ie;Y+=3)N(e.getX(Y+0)),N(e.getX(Y+1)),N(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const o=new $,r=new $,s=new $,a=new $,u=new $,c=new $,f=new $,h=new $;if(e)for(let p=0,m=e.count;p<m;p+=3){const E=e.getX(p+0),y=e.getX(p+1),S=e.getX(p+2);o.fromBufferAttribute(t,E),r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,S),f.subVectors(s,r),h.subVectors(o,r),f.cross(h),a.fromBufferAttribute(i,E),u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,S),a.add(f),u.add(f),c.add(f),i.setXYZ(E,a.x,a.y,a.z),i.setXYZ(y,u.x,u.y,u.z),i.setXYZ(S,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)o.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),f.subVectors(s,r),h.subVectors(o,r),f.cross(h),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,u){const c=a.array,f=a.itemSize,h=a.normalized,p=new c.constructor(u.length*f);let m=0,E=0;for(let y=0,S=u.length;y<S;y++){a.isInterleavedBufferAttribute?m=u[y]*a.data.stride+a.offset:m=u[y]*f;for(let g=0;g<f;g++)p[E++]=c[m++]}return new hn(p,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,i=this.index.array,o=this.attributes;for(const a in o){const u=o[a],c=e(u,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const u=[],c=r[a];for(let f=0,h=c.length;f<h;f++){const p=c[f],m=e(p,i);u.push(m)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,u=s.length;a<u;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const u in i){const c=i[u];e.data.attributes[u]=c.toJSON(e.data)}const o={};let r=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],f=[];for(let h=0,p=c.length;h<p;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(o[u]=f,r=!0)}r&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const c in o){const f=o[c];this.setAttribute(c,f.clone(t))}const r=e.morphAttributes;for(const c in r){const f=[],h=r[c];for(let p=0,m=h.length;p<m;p++)f.push(h[p].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,f=s.length;c<f;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ku=new yt,ni=new Y0,Jo=new za,Zu=new $,Ko=new $,Zo=new $,Qo=new $,ds=new $,jo=new $,Qu=new $,er=new $;class Qt extends qt{constructor(e=new Un,t=new Wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=o.length;r<s;r++){const a=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const a=this.morphTargetInfluences;if(r&&a){jo.set(0,0,0);for(let u=0,c=r.length;u<c;u++){const f=a[u],h=r[u];f!==0&&(ds.fromBufferAttribute(h,e),s?jo.addScaledVector(ds,f):jo.addScaledVector(ds.sub(t),f))}t.add(jo)}return t}raycast(e,t){const i=this.geometry,o=this.material,r=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(r),ni.copy(e.ray).recast(e.near),!(Jo.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Jo,Zu)===null||ni.origin.distanceToSquared(Zu)>(e.far-e.near)**2))&&(Ku.copy(r).invert(),ni.copy(e.ray).applyMatrix4(Ku),!(i.boundingBox!==null&&ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,i){let o;const r=this.geometry,s=this.material,a=r.index,u=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(s))for(let E=0,y=p.length;E<y;E++){const S=p[E],g=s[S.materialIndex],w=Math.max(S.start,m.start),C=Math.min(a.count,Math.min(S.start+S.count,m.start+m.count));for(let M=w,O=C;M<O;M+=3){const F=a.getX(M),N=a.getX(M+1),H=a.getX(M+2);o=tr(this,g,e,i,c,f,h,F,N,H),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let S=E,g=y;S<g;S+=3){const w=a.getX(S),C=a.getX(S+1),M=a.getX(S+2);o=tr(this,s,e,i,c,f,h,w,C,M),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(u!==void 0)if(Array.isArray(s))for(let E=0,y=p.length;E<y;E++){const S=p[E],g=s[S.materialIndex],w=Math.max(S.start,m.start),C=Math.min(u.count,Math.min(S.start+S.count,m.start+m.count));for(let M=w,O=C;M<O;M+=3){const F=M,N=M+1,H=M+2;o=tr(this,g,e,i,c,f,h,F,N,H),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,m.start),y=Math.min(u.count,m.start+m.count);for(let S=E,g=y;S<g;S+=3){const w=S,C=S+1,M=S+2;o=tr(this,s,e,i,c,f,h,w,C,M),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function aS(n,e,t,i,o,r,s,a){let u;if(e.side===Bt?u=i.intersectTriangle(s,r,o,!0,a):u=i.intersectTriangle(o,r,s,e.side===Yn,a),u===null)return null;er.copy(a),er.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(er);return c<t.near||c>t.far?null:{distance:c,point:er.clone(),object:n}}function tr(n,e,t,i,o,r,s,a,u,c){n.getVertexPosition(a,Ko),n.getVertexPosition(u,Zo),n.getVertexPosition(c,Qo);const f=aS(n,e,t,i,Ko,Zo,Qo,Qu);if(f){const h=new $;ln.getBarycoord(Qu,Ko,Zo,Qo,h),o&&(f.uv=ln.getInterpolatedAttribute(o,a,u,c,h,new We)),r&&(f.uv1=ln.getInterpolatedAttribute(r,a,u,c,h,new We)),s&&(f.normal=ln.getInterpolatedAttribute(s,a,u,c,h,new $),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const p={a,b:u,c,normal:new $,materialIndex:0};ln.getNormal(Ko,Zo,Qo,p.normal),f.face=p,f.barycoord=h}return f}class Do extends Un{constructor(e=1,t=1,i=1,o=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:r,depthSegments:s};const a=this;o=Math.floor(o),r=Math.floor(r),s=Math.floor(s);const u=[],c=[],f=[],h=[];let p=0,m=0;E("z","y","x",-1,-1,i,t,e,s,r,0),E("z","y","x",1,-1,i,t,-e,s,r,1),E("x","z","y",1,1,e,i,t,o,s,2),E("x","z","y",1,-1,e,i,-t,o,s,3),E("x","y","z",1,-1,e,t,i,o,r,4),E("x","y","z",-1,-1,e,t,-i,o,r,5),this.setIndex(u),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(f,3)),this.setAttribute("uv",new en(h,2));function E(y,S,g,w,C,M,O,F,N,H,A){const T=M/N,B=O/H,q=M/2,Y=O/2,ie=F/2,le=N+1,j=H+1;let se=0,Q=0;const ge=new $;for(let ve=0;ve<j;ve++){const Pe=ve*B-Y;for(let Ge=0;Ge<le;Ge++){const Qe=Ge*T-q;ge[y]=Qe*w,ge[S]=Pe*C,ge[g]=ie,c.push(ge.x,ge.y,ge.z),ge[y]=0,ge[S]=0,ge[g]=F>0?1:-1,f.push(ge.x,ge.y,ge.z),h.push(Ge/N),h.push(1-ve/H),se+=1}}for(let ve=0;ve<H;ve++)for(let Pe=0;Pe<N;Pe++){const Ge=p+Pe+le*ve,Qe=p+Pe+le*(ve+1),ee=p+(Pe+1)+le*(ve+1),pe=p+(Pe+1)+le*ve;u.push(Ge,Qe,pe),u.push(Qe,ee,pe),Q+=6}a.addGroup(m,Q,A),m+=Q,p+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const o=n[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=$i(n[t]);for(const o in i)e[o]=i[o]}return e}function lS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Id(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const wr={clone:$i,merge:Ut};var uS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ft extends bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uS,this.fragmentShader=cS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=lS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const s=this.uniforms[o].value;s&&s.isTexture?t.uniforms[o]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[o]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[o]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[o]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[o]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[o]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[o]={type:"m4",value:s.toArray()}:t.uniforms[o]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Pd extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new $,ju=new We,ec=new We;class Yt extends Pd{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,ju,ec),t.subVectors(ec,ju)}setViewOffset(e,t,i,o,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qr*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,r=-.5*o;const s=this.view;if(this.view!==null&&this.view.enabled){const u=s.fullWidth,c=s.fullHeight;r+=s.offsetX*o/u,t-=s.offsetY*i/c,o*=s.width/u,i*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wi=-90,Ii=1;class dS extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yt(wi,Ii,e,t);o.layers=this.layers,this.add(o);const r=new Yt(wi,Ii,e,t);r.layers=this.layers,this.add(r);const s=new Yt(wi,Ii,e,t);s.layers=this.layers,this.add(s);const a=new Yt(wi,Ii,e,t);a.layers=this.layers,this.add(a);const u=new Yt(wi,Ii,e,t);u.layers=this.layers,this.add(u);const c=new Yt(wi,Ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,r,s,a,u]=t;for(const c of t)this.remove(c);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,u,c,f]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,r),e.setRenderTarget(i,1,o),e.render(t,s),e.setRenderTarget(i,2,o),e.render(t,a),e.setRenderTarget(i,3,o),e.render(t,u),e.setRenderTarget(i,4,o),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,o),e.render(t,f),e.setRenderTarget(h,p,m),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class bd extends Ot{constructor(e=[],t=Wi,i,o,r,s,a,u,c,f){super(e,t,i,o,r,s,a,u,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fS extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new bd(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Do(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:$i(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:wn});r.uniforms.tEquirect.value=t;const s=new Qt(o,r),a=t.minFilter;return t.minFilter===qn&&(t.minFilter=Lt),new dS(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,o);e.setRenderTarget(r)}}class nr extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hS={type:"move"};class fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,r=null,s=null;const a=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const S=t.getJointPose(y,i),g=this._getHandJoint(c,y);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=f.position.distanceTo(h.position),m=.02,E=.005;c.inputState.pinching&&p>m+E?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-E&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&r!==null&&(o=r),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hS)))}return a!==null&&(a.visible=o!==null),u!==null&&(u.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new nr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class pS extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mS extends Ot{constructor(e=null,t=1,i=1,o,r,s,a,u,c=Wt,f=Wt,h,p){super(null,s,a,u,c,f,o,r,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hs=new $,gS=new $,_S=new Je;class si{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=hs.subVectors(i,t).cross(gS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(hs),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/o;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_S.getNormalMatrix(e),o=this.coplanarPoint(hs).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new za,ir=new $;class Dd{constructor(e=new si,t=new si,i=new si,o=new si,r=new si,s=new si){this.planes=[e,t,i,o,r,s]}set(e,t,i,o,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(o),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn){const i=this.planes,o=e.elements,r=o[0],s=o[1],a=o[2],u=o[3],c=o[4],f=o[5],h=o[6],p=o[7],m=o[8],E=o[9],y=o[10],S=o[11],g=o[12],w=o[13],C=o[14],M=o[15];if(i[0].setComponents(u-r,p-c,S-m,M-g).normalize(),i[1].setComponents(u+r,p+c,S+m,M+g).normalize(),i[2].setComponents(u+s,p+f,S+E,M+w).normalize(),i[3].setComponents(u-s,p-f,S-E,M-w).normalize(),i[4].setComponents(u-a,p-h,S-y,M-C).normalize(),t===Rn)i[5].setComponents(u+a,p+h,S+y,M+C).normalize();else if(t===Cr)i[5].setComponents(a,h,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(ir.x=o.normal.x>0?e.max.x:e.min.x,ir.y=o.normal.y>0?e.max.y:e.min.y,ir.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nd extends Ot{constructor(e,t,i=hi,o,r,s,a=Wt,u=Wt,c,f=Mo){if(f!==Mo&&f!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,r,s,a,u,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Va(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qa extends Un{constructor(e=[],t=[],i=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:o};const r=[],s=[];a(o),c(i),f(),this.setAttribute("position",new en(r,3)),this.setAttribute("normal",new en(r.slice(),3)),this.setAttribute("uv",new en(s,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const C=new $,M=new $,O=new $;for(let F=0;F<t.length;F+=3)m(t[F+0],C),m(t[F+1],M),m(t[F+2],O),u(C,M,O,w)}function u(w,C,M,O){const F=O+1,N=[];for(let H=0;H<=F;H++){N[H]=[];const A=w.clone().lerp(M,H/F),T=C.clone().lerp(M,H/F),B=F-H;for(let q=0;q<=B;q++)q===0&&H===F?N[H][q]=A:N[H][q]=A.clone().lerp(T,q/B)}for(let H=0;H<F;H++)for(let A=0;A<2*(F-H)-1;A++){const T=Math.floor(A/2);A%2===0?(p(N[H][T+1]),p(N[H+1][T]),p(N[H][T])):(p(N[H][T+1]),p(N[H+1][T+1]),p(N[H+1][T]))}}function c(w){const C=new $;for(let M=0;M<r.length;M+=3)C.x=r[M+0],C.y=r[M+1],C.z=r[M+2],C.normalize().multiplyScalar(w),r[M+0]=C.x,r[M+1]=C.y,r[M+2]=C.z}function f(){const w=new $;for(let C=0;C<r.length;C+=3){w.x=r[C+0],w.y=r[C+1],w.z=r[C+2];const M=S(w)/2/Math.PI+.5,O=g(w)/Math.PI+.5;s.push(M,1-O)}E(),h()}function h(){for(let w=0;w<s.length;w+=6){const C=s[w+0],M=s[w+2],O=s[w+4],F=Math.max(C,M,O),N=Math.min(C,M,O);F>.9&&N<.1&&(C<.2&&(s[w+0]+=1),M<.2&&(s[w+2]+=1),O<.2&&(s[w+4]+=1))}}function p(w){r.push(w.x,w.y,w.z)}function m(w,C){const M=w*3;C.x=e[M+0],C.y=e[M+1],C.z=e[M+2]}function E(){const w=new $,C=new $,M=new $,O=new $,F=new We,N=new We,H=new We;for(let A=0,T=0;A<r.length;A+=9,T+=6){w.set(r[A+0],r[A+1],r[A+2]),C.set(r[A+3],r[A+4],r[A+5]),M.set(r[A+6],r[A+7],r[A+8]),F.set(s[T+0],s[T+1]),N.set(s[T+2],s[T+3]),H.set(s[T+4],s[T+5]),O.copy(w).add(C).add(M).divideScalar(3);const B=S(O);y(F,T+0,w,B),y(N,T+2,C,B),y(H,T+4,M,B)}}function y(w,C,M,O){O<0&&w.x===1&&(s[C]=w.x-1),M.x===0&&M.z===0&&(s[C]=O/2/Math.PI+.5)}function S(w){return Math.atan2(w.z,-w.x)}function g(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.vertices,e.indices,e.radius,e.details)}}class Ir extends qa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,o=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ir(e.radius,e.detail)}}class Fr extends Un{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const r=e/2,s=t/2,a=Math.floor(i),u=Math.floor(o),c=a+1,f=u+1,h=e/a,p=t/u,m=[],E=[],y=[],S=[];for(let g=0;g<f;g++){const w=g*p-s;for(let C=0;C<c;C++){const M=C*h-r;E.push(M,-w,0),y.push(0,0,1),S.push(C/a),S.push(1-g/u)}}for(let g=0;g<u;g++)for(let w=0;w<a;w++){const C=w+c*g,M=w+c*(g+1),O=w+1+c*(g+1),F=w+1+c*g;m.push(C,M,F),m.push(M,O,F)}this.setIndex(m),this.setAttribute("position",new en(E,3)),this.setAttribute("normal",new en(y,3)),this.setAttribute("uv",new en(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.widthSegments,e.heightSegments)}}class vS extends Ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class SS extends bo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yd,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ES extends bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yS extends bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class TS{constructor(e,t,i){const o=this;let r=!1,s=0,a=0,u;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(f){a++,r===!1&&o.onStart!==void 0&&o.onStart(f,s,a),r=!0},this.itemEnd=function(f){s++,o.onProgress!==void 0&&o.onProgress(f,s,a),s===a&&(r=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(f){o.onError!==void 0&&o.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){const h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,p=c.length;h<p;h+=2){const m=c[h],E=c[h+1];if(m.global&&(m.lastIndex=0),m.test(f))return E}return null}}}const xS=new TS;class $a{constructor(e){this.manager=e!==void 0?e:xS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,r){i.load(e,o,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$a.DEFAULT_MATERIAL_NAME="__DEFAULT";const yn={};class MS extends Error{constructor(e,t){super(e),this.response=t}}class AS extends $a{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=tc.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(yn[e]!==void 0){yn[e].push({onLoad:t,onProgress:i,onError:o});return}yn[e]=[],yn[e].push({onLoad:t,onProgress:i,onError:o});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,u=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=yn[e],h=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=p?parseInt(p):0,E=m!==0;let y=0;const S=new ReadableStream({start(g){w();function w(){h.read().then(({done:C,value:M})=>{if(C)g.close();else{y+=M.byteLength;const O=new ProgressEvent("progress",{lengthComputable:E,loaded:y,total:m});for(let F=0,N=f.length;F<N;F++){const H=f[F];H.onProgress&&H.onProgress(O)}g.enqueue(M),w()}},C=>{g.error(C)})}}});return new Response(S)}else throw new MS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(u){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),p=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(p);return c.arrayBuffer().then(E=>m.decode(E))}}}).then(c=>{tc.add(e,c);const f=yn[e];delete yn[e];for(let h=0,p=f.length;h<p;h++){const m=f[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const f=yn[e];if(f===void 0)throw this.manager.itemError(e),c;delete yn[e];for(let h=0,p=f.length;h<p;h++){const m=f[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class CS extends $a{constructor(e){super(e)}load(e,t,i,o){const r=this,s=new mS,a=new AS(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(u){let c;try{c=r.parse(u)}catch(f){if(o!==void 0)o(f);else{console.error(f);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:Cn,s.wrapT=c.wrapT!==void 0?c.wrapT:Cn,s.magFilter=c.magFilter!==void 0?c.magFilter:Lt,s.minFilter=c.minFilter!==void 0?c.minFilter:Lt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(s.colorSpace=c.colorSpace),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=qn),c.mipmapCount===1&&(s.minFilter=Lt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},i,o),s}}class Ud extends Pd{constructor(e=-1,t=1,i=1,o=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let r=i-e,s=i+e,a=o+t,u=o-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=f*this.view.offsetY,u=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class RS extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nc(){return performance.now()}function ic(n,e,t,i){const o=IS(i);switch(t){case _d:return n*e;case Oa:return n*e/o.components*o.byteLength;case ka:return n*e/o.components*o.byteLength;case Sd:return n*e*2/o.components*o.byteLength;case Ha:return n*e*2/o.components*o.byteLength;case vd:return n*e*3/o.components*o.byteLength;case Zt:return n*e*4/o.components*o.byteLength;case Ga:return n*e*4/o.components*o.byteLength;case dr:case fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hr:case pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qs:case Xs:return Math.max(n,16)*Math.max(e,8)/4;case Ws:case $s:return Math.max(n,8)*Math.max(e,8)/2;case Ys:case Js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qs:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case js:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ea:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ta:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case na:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ia:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case oa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ra:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case aa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case la:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ua:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ca:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mr:case da:case fa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ed:case ha:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pa:case ma:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function IS(n){switch(n){case bn:case pd:return{byteLength:1,components:1};case To:case md:case zt:return{byteLength:2,components:1};case Fa:case Ba:return{byteLength:2,components:4};case hi:case La:case Kt:return{byteLength:4,components:1};case gd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ua);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ld(){let n=null,e=!1,t=null,i=null;function o(r,s){t(r,s),i=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function PS(n){const e=new WeakMap;function t(a,u){const c=a.array,f=a.usage,h=c.byteLength,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,u,c){const f=u.array,h=u.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,f);else{h.sort((m,E)=>m.start-E.start);let p=0;for(let m=1;m<h.length;m++){const E=h[p],y=h[m];y.start<=E.start+E.count+1?E.count=Math.max(E.count,y.start+y.count-E.start):(++p,h[p]=y)}h.length=p+1;for(let m=0,E=h.length;m<E;m++){const y=h[m];n.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}u.clearUpdateRanges()}u.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);u&&(n.deleteBuffer(u.buffer),e.delete(a))}function s(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,u));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,u),c.version=a.version}}return{get:o,remove:r,update:s}}var bS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,NS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,US=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,HS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,WS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aE="gl_FragColor = linearToOutputTexel( gl_FragColor );",lE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_E=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ME=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,PE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$E=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,XE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,JE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ry=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,my=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_y=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ey=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ty=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,My=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ay=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Iy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,by=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,By=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Oy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ky=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:bS,alphahash_pars_fragment:DS,alphamap_fragment:NS,alphamap_pars_fragment:US,alphatest_fragment:LS,alphatest_pars_fragment:FS,aomap_fragment:BS,aomap_pars_fragment:OS,batching_pars_vertex:kS,batching_vertex:HS,begin_vertex:GS,beginnormal_vertex:VS,bsdfs:zS,iridescence_fragment:WS,bumpmap_pars_fragment:qS,clipping_planes_fragment:$S,clipping_planes_pars_fragment:XS,clipping_planes_pars_vertex:YS,clipping_planes_vertex:JS,color_fragment:KS,color_pars_fragment:ZS,color_pars_vertex:QS,color_vertex:jS,common:eE,cube_uv_reflection_fragment:tE,defaultnormal_vertex:nE,displacementmap_pars_vertex:iE,displacementmap_vertex:oE,emissivemap_fragment:rE,emissivemap_pars_fragment:sE,colorspace_fragment:aE,colorspace_pars_fragment:lE,envmap_fragment:uE,envmap_common_pars_fragment:cE,envmap_pars_fragment:dE,envmap_pars_vertex:fE,envmap_physical_pars_fragment:xE,envmap_vertex:hE,fog_vertex:pE,fog_pars_vertex:mE,fog_fragment:gE,fog_pars_fragment:_E,gradientmap_pars_fragment:vE,lightmap_pars_fragment:SE,lights_lambert_fragment:EE,lights_lambert_pars_fragment:yE,lights_pars_begin:TE,lights_toon_fragment:ME,lights_toon_pars_fragment:AE,lights_phong_fragment:CE,lights_phong_pars_fragment:RE,lights_physical_fragment:wE,lights_physical_pars_fragment:IE,lights_fragment_begin:PE,lights_fragment_maps:bE,lights_fragment_end:DE,logdepthbuf_fragment:NE,logdepthbuf_pars_fragment:UE,logdepthbuf_pars_vertex:LE,logdepthbuf_vertex:FE,map_fragment:BE,map_pars_fragment:OE,map_particle_fragment:kE,map_particle_pars_fragment:HE,metalnessmap_fragment:GE,metalnessmap_pars_fragment:VE,morphinstance_vertex:zE,morphcolor_vertex:WE,morphnormal_vertex:qE,morphtarget_pars_vertex:$E,morphtarget_vertex:XE,normal_fragment_begin:YE,normal_fragment_maps:JE,normal_pars_fragment:KE,normal_pars_vertex:ZE,normal_vertex:QE,normalmap_pars_fragment:jE,clearcoat_normal_fragment_begin:ey,clearcoat_normal_fragment_maps:ty,clearcoat_pars_fragment:ny,iridescence_pars_fragment:iy,opaque_fragment:oy,packing:ry,premultiplied_alpha_fragment:sy,project_vertex:ay,dithering_fragment:ly,dithering_pars_fragment:uy,roughnessmap_fragment:cy,roughnessmap_pars_fragment:dy,shadowmap_pars_fragment:fy,shadowmap_pars_vertex:hy,shadowmap_vertex:py,shadowmask_pars_fragment:my,skinbase_vertex:gy,skinning_pars_vertex:_y,skinning_vertex:vy,skinnormal_vertex:Sy,specularmap_fragment:Ey,specularmap_pars_fragment:yy,tonemapping_fragment:Ty,tonemapping_pars_fragment:xy,transmission_fragment:My,transmission_pars_fragment:Ay,uv_pars_fragment:Cy,uv_pars_vertex:Ry,uv_vertex:wy,worldpos_vertex:Iy,background_vert:Py,background_frag:by,backgroundCube_vert:Dy,backgroundCube_frag:Ny,cube_vert:Uy,cube_frag:Ly,depth_vert:Fy,depth_frag:By,distanceRGBA_vert:Oy,distanceRGBA_frag:ky,equirect_vert:Hy,equirect_frag:Gy,linedashed_vert:Vy,linedashed_frag:zy,meshbasic_vert:Wy,meshbasic_frag:qy,meshlambert_vert:$y,meshlambert_frag:Xy,meshmatcap_vert:Yy,meshmatcap_frag:Jy,meshnormal_vert:Ky,meshnormal_frag:Zy,meshphong_vert:Qy,meshphong_frag:jy,meshphysical_vert:eT,meshphysical_frag:tT,meshtoon_vert:nT,meshtoon_frag:iT,points_vert:oT,points_frag:rT,shadow_vert:sT,shadow_frag:aT,sprite_vert:lT,sprite_frag:uT},Se={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},fn={basic:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Ut([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Ut([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Ut([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Ut([Se.points,Se.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Ut([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Ut([Se.common,Se.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Ut([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Ut([Se.sprite,Se.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Ut([Se.common,Se.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Ut([Se.lights,Se.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};fn.physical={uniforms:Ut([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const or={r:0,b:0,g:0},oi=new cn,cT=new yt;function dT(n,e,t,i,o,r,s){const a=new ot(0);let u=r===!0?0:1,c,f,h=null,p=0,m=null;function E(C){let M=C.isScene===!0?C.background:null;return M&&M.isTexture&&(M=(C.backgroundBlurriness>0?t:e).get(M)),M}function y(C){let M=!1;const O=E(C);O===null?g(a,u):O&&O.isColor&&(g(O,1),M=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,s):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(C,M){const O=E(M);O&&(O.isCubeTexture||O.mapping===Lr)?(f===void 0&&(f=new Qt(new Do(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:$i(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(F,N,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(f)),oi.copy(M.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),f.material.uniforms.envMap.value=O,f.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(cT.makeRotationFromEuler(oi)),f.material.toneMapped=st.getTransfer(O.colorSpace)!==dt,(h!==O||p!==O.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,h=O,p=O.version,m=n.toneMapping),f.layers.enableAll(),C.unshift(f,f.geometry,f.material,0,0,null)):O&&O.isTexture&&(c===void 0&&(c=new Qt(new Fr(2,2),new Ft({name:"BackgroundMaterial",uniforms:$i(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(c)),c.material.uniforms.t2D.value=O,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=st.getTransfer(O.colorSpace)!==dt,O.matrixAutoUpdate===!0&&O.updateMatrix(),c.material.uniforms.uvTransform.value.copy(O.matrix),(h!==O||p!==O.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=O,p=O.version,m=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function g(C,M){C.getRGB(or,Id(n)),i.buffers.color.setClear(or.r,or.g,or.b,M,s)}function w(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,M=1){a.set(C),u=M,g(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(C){u=C,g(a,u)},render:y,addToRenderList:S,dispose:w}}function fT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=p(null);let r=o,s=!1;function a(T,B,q,Y,ie){let le=!1;const j=h(Y,q,B);r!==j&&(r=j,c(r.object)),le=m(T,Y,q,ie),le&&E(T,Y,q,ie),ie!==null&&e.update(ie,n.ELEMENT_ARRAY_BUFFER),(le||s)&&(s=!1,M(T,B,q,Y),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function u(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function f(T){return n.deleteVertexArray(T)}function h(T,B,q){const Y=q.wireframe===!0;let ie=i[T.id];ie===void 0&&(ie={},i[T.id]=ie);let le=ie[B.id];le===void 0&&(le={},ie[B.id]=le);let j=le[Y];return j===void 0&&(j=p(u()),le[Y]=j),j}function p(T){const B=[],q=[],Y=[];for(let ie=0;ie<t;ie++)B[ie]=0,q[ie]=0,Y[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:Y,object:T,attributes:{},index:null}}function m(T,B,q,Y){const ie=r.attributes,le=B.attributes;let j=0;const se=q.getAttributes();for(const Q in se)if(se[Q].location>=0){const ve=ie[Q];let Pe=le[Q];if(Pe===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(Pe=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(Pe=T.instanceColor)),ve===void 0||ve.attribute!==Pe||Pe&&ve.data!==Pe.data)return!0;j++}return r.attributesNum!==j||r.index!==Y}function E(T,B,q,Y){const ie={},le=B.attributes;let j=0;const se=q.getAttributes();for(const Q in se)if(se[Q].location>=0){let ve=le[Q];ve===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(ve=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(ve=T.instanceColor));const Pe={};Pe.attribute=ve,ve&&ve.data&&(Pe.data=ve.data),ie[Q]=Pe,j++}r.attributes=ie,r.attributesNum=j,r.index=Y}function y(){const T=r.newAttributes;for(let B=0,q=T.length;B<q;B++)T[B]=0}function S(T){g(T,0)}function g(T,B){const q=r.newAttributes,Y=r.enabledAttributes,ie=r.attributeDivisors;q[T]=1,Y[T]===0&&(n.enableVertexAttribArray(T),Y[T]=1),ie[T]!==B&&(n.vertexAttribDivisor(T,B),ie[T]=B)}function w(){const T=r.newAttributes,B=r.enabledAttributes;for(let q=0,Y=B.length;q<Y;q++)B[q]!==T[q]&&(n.disableVertexAttribArray(q),B[q]=0)}function C(T,B,q,Y,ie,le,j){j===!0?n.vertexAttribIPointer(T,B,q,ie,le):n.vertexAttribPointer(T,B,q,Y,ie,le)}function M(T,B,q,Y){y();const ie=Y.attributes,le=q.getAttributes(),j=B.defaultAttributeValues;for(const se in le){const Q=le[se];if(Q.location>=0){let ge=ie[se];if(ge===void 0&&(se==="instanceMatrix"&&T.instanceMatrix&&(ge=T.instanceMatrix),se==="instanceColor"&&T.instanceColor&&(ge=T.instanceColor)),ge!==void 0){const ve=ge.normalized,Pe=ge.itemSize,Ge=e.get(ge);if(Ge===void 0)continue;const Qe=Ge.buffer,ee=Ge.type,pe=Ge.bytesPerElement,me=ee===n.INT||ee===n.UNSIGNED_INT||ge.gpuType===La;if(ge.isInterleavedBufferAttribute){const _e=ge.data,be=_e.stride,je=ge.offset;if(_e.isInstancedInterleavedBuffer){for(let Ve=0;Ve<Q.locationSize;Ve++)g(Q.location+Ve,_e.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ve=0;Ve<Q.locationSize;Ve++)S(Q.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let Ve=0;Ve<Q.locationSize;Ve++)C(Q.location+Ve,Pe/Q.locationSize,ee,ve,be*pe,(je+Pe/Q.locationSize*Ve)*pe,me)}else{if(ge.isInstancedBufferAttribute){for(let _e=0;_e<Q.locationSize;_e++)g(Q.location+_e,ge.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let _e=0;_e<Q.locationSize;_e++)S(Q.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let _e=0;_e<Q.locationSize;_e++)C(Q.location+_e,Pe/Q.locationSize,ee,ve,Pe*pe,Pe/Q.locationSize*_e*pe,me)}}else if(j!==void 0){const ve=j[se];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(Q.location,ve);break;case 3:n.vertexAttrib3fv(Q.location,ve);break;case 4:n.vertexAttrib4fv(Q.location,ve);break;default:n.vertexAttrib1fv(Q.location,ve)}}}}w()}function O(){H();for(const T in i){const B=i[T];for(const q in B){const Y=B[q];for(const ie in Y)f(Y[ie].object),delete Y[ie];delete B[q]}delete i[T]}}function F(T){if(i[T.id]===void 0)return;const B=i[T.id];for(const q in B){const Y=B[q];for(const ie in Y)f(Y[ie].object),delete Y[ie];delete B[q]}delete i[T.id]}function N(T){for(const B in i){const q=i[B];if(q[T.id]===void 0)continue;const Y=q[T.id];for(const ie in Y)f(Y[ie].object),delete Y[ie];delete q[T.id]}}function H(){A(),s=!0,r!==o&&(r=o,c(r.object))}function A(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:H,resetDefaultState:A,dispose:O,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:S,disableUnusedAttributes:w}}function hT(n,e,t){let i;function o(c){i=c}function r(c,f){n.drawArrays(i,c,f),t.update(f,i,1)}function s(c,f,h){h!==0&&(n.drawArraysInstanced(i,c,f,h),t.update(f,i,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let m=0;for(let E=0;E<h;E++)m+=f[E];t.update(m,i,1)}function u(c,f,h,p){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let E=0;E<c.length;E++)s(c[E],f[E],p[E]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,p,0,h);let E=0;for(let y=0;y<h;y++)E+=f[y]*p[y];t.update(E,i,1)}}this.setMode=o,this.render=r,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=u}function pT(n,e,t,i){let o;function r(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function s(N){return!(N!==Zt&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const H=N===zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==bn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Kt&&!H)}function u(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=u(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=E>0,F=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:E,maxTextureSize:y,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:M,vertexTextures:O,maxSamples:F}}function mT(n){const e=this;let t=null,i=0,o=!1,r=!1;const s=new si,a=new Je,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||i!==0||o;return o=p,i=h.length,m},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){t=f(h,p,0)},this.setState=function(h,p,m){const E=h.clippingPlanes,y=h.clipIntersection,S=h.clipShadows,g=n.get(h);if(!o||E===null||E.length===0||r&&!S)r?f(null):c();else{const w=r?0:i,C=w*4;let M=g.clippingState||null;u.value=M,M=f(E,p,C,m);for(let O=0;O!==C;++O)M[O]=t[O];g.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,p,m,E){const y=h!==null?h.length:0;let S=null;if(y!==0){if(S=u.value,E!==!0||S===null){const g=m+y*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(S===null||S.length<g)&&(S=new Float32Array(g));for(let C=0,M=m;C!==y;++C,M+=4)s.copy(h[C]).applyMatrix4(w,a),s.normal.toArray(S,M),S[M+3]=s.constant}u.value=S,u.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,S}}function gT(n){let e=new WeakMap;function t(s,a){return a===Mr?s.mapping=Wi:a===Gs&&(s.mapping=qi),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Mr||a===Gs)if(e.has(s)){const u=e.get(s).texture;return t(u,s.mapping)}else{const u=s.image;if(u&&u.height>0){const c=new fS(u.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",o),t(c.texture,s.mapping)}else return null}}return s}function o(s){const a=s.target;a.removeEventListener("dispose",o);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ni=4,oc=[.125,.215,.35,.446,.526,.582],ui=20,ps=new Ud,rc=new ot;let ms=null,gs=0,_s=0,vs=!1;const ai=(1+Math.sqrt(5))/2,Pi=1/ai,sc=[new $(-ai,Pi,0),new $(ai,Pi,0),new $(-Pi,0,ai),new $(Pi,0,ai),new $(0,ai,-Pi),new $(0,ai,Pi),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],_T=new $;class va{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100,r={}){const{size:s=256,position:a=_T}=r;ms=this._renderer.getRenderTarget(),gs=this._renderer.getActiveCubeFace(),_s=this._renderer.getActiveMipmapLevel(),vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,i,o,u,a),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ms,gs,_s),this._renderer.xr.enabled=vs,e.scissorTest=!1,rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ms=this._renderer.getRenderTarget(),gs=this._renderer.getActiveCubeFace(),_s=this._renderer.getActiveMipmapLevel(),vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:zt,format:Zt,colorSpace:Jn,depthBuffer:!1},o=ac(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ac(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vT(r)),this._blurMaterial=ST(r,e,t)}return o}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,ps)}_sceneToCubeUV(e,t,i,o,r){const u=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(rc),h.toneMapping=Xn,h.autoClear=!1;const E=new Wa({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),y=new Qt(new Do,E);let S=!1;const g=e.background;g?g.isColor&&(E.color.copy(g),e.background=null,S=!0):(E.color.copy(rc),S=!0);for(let w=0;w<6;w++){const C=w%3;C===0?(u.up.set(0,c[w],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+f[w],r.y,r.z)):C===1?(u.up.set(0,0,c[w]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+f[w],r.z)):(u.up.set(0,c[w],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+f[w]));const M=this._cubeSize;rr(o,C*M,w>2?M:0,M,M),h.setRenderTarget(o),S&&h.render(y,u),h.render(e,u)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Wi||e.mapping===qi;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lc());const r=o?this._cubemapMaterial:this._equirectMaterial,s=new Qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const u=this._cubeSize;rr(t,0,0,3*u,2*u),i.setRenderTarget(t),i.render(s,ps)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let r=1;r<o;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sc[(o-r-1)%sc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,o,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,o,"latitudinal",r),this._halfBlur(s,e,i,i,o,"longitudinal",r)}_halfBlur(e,t,i,o,r,s,a){const u=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Qt(this._lodPlanes[o],c),p=c.uniforms,m=this._sizeLods[i]-1,E=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ui-1),y=r/E,S=isFinite(r)?1+Math.floor(f*y):ui;S>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ui}`);const g=[];let w=0;for(let N=0;N<ui;++N){const H=N/y,A=Math.exp(-H*H/2);g.push(A),N===0?w+=A:N<S&&(w+=2*A)}for(let N=0;N<g.length;N++)g[N]=g[N]/w;p.envMap.value=e.texture,p.samples.value=S,p.weights.value=g,p.latitudinal.value=s==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:C}=this;p.dTheta.value=E,p.mipInt.value=C-i;const M=this._sizeLods[o],O=3*M*(o>C-Ni?o-C+Ni:0),F=4*(this._cubeSize-M);rr(t,O,F,3*M,2*M),u.setRenderTarget(t),u.render(h,ps)}}function vT(n){const e=[],t=[],i=[];let o=n;const r=n-Ni+1+oc.length;for(let s=0;s<r;s++){const a=Math.pow(2,o);t.push(a);let u=1/a;s>n-Ni?u=oc[s-n+Ni-1]:s===0&&(u=0),i.push(u);const c=1/(a-2),f=-c,h=1+c,p=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,E=6,y=3,S=2,g=1,w=new Float32Array(y*E*m),C=new Float32Array(S*E*m),M=new Float32Array(g*E*m);for(let F=0;F<m;F++){const N=F%3*2/3-1,H=F>2?0:-1,A=[N,H,0,N+2/3,H,0,N+2/3,H+1,0,N,H,0,N+2/3,H+1,0,N,H+1,0];w.set(A,y*E*F),C.set(p,S*E*F);const T=[F,F,F,F,F,F];M.set(T,g*E*F)}const O=new Un;O.setAttribute("position",new hn(w,y)),O.setAttribute("uv",new hn(C,S)),O.setAttribute("faceIndex",new hn(M,g)),e.push(O),o>Ni&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ac(n,e,t){const i=new un(n,e,t);return i.texture.mapping=Lr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rr(n,e,t,i,o){n.viewport.set(e,t,i,o),n.scissor.set(e,t,i,o)}function ST(n,e,t){const i=new Float32Array(ui),o=new $(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function lc(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function uc(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Xa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ET(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const u=a.mapping,c=u===Mr||u===Gs,f=u===Wi||u===qi;if(c||f){let h=e.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new va(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||f&&m&&o(m)?(t===null&&(t=new va(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function o(a){let u=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&u++;return u===c}function r(a){const u=a.target;u.removeEventListener("dispose",r);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function yT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&gr("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function TT(n,e,t,i){const o={},r=new WeakMap;function s(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const E in p.attributes)e.remove(p.attributes[E]);p.removeEventListener("dispose",s),delete o[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return o[p.id]===!0||(p.addEventListener("dispose",s),o[p.id]=!0,t.memory.geometries++),p}function u(h){const p=h.attributes;for(const m in p)e.update(p[m],n.ARRAY_BUFFER)}function c(h){const p=[],m=h.index,E=h.attributes.position;let y=0;if(m!==null){const w=m.array;y=m.version;for(let C=0,M=w.length;C<M;C+=3){const O=w[C+0],F=w[C+1],N=w[C+2];p.push(O,F,F,N,N,O)}}else if(E!==void 0){const w=E.array;y=E.version;for(let C=0,M=w.length/3-1;C<M;C+=3){const O=C+0,F=C+1,N=C+2;p.push(O,F,F,N,N,O)}}else return;const S=new(xd(p)?wd:Rd)(p,1);S.version=y;const g=r.get(h);g&&e.remove(g),r.set(h,S)}function f(h){const p=r.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:u,getWireframeAttribute:f}}function xT(n,e,t){let i;function o(p){i=p}let r,s;function a(p){r=p.type,s=p.bytesPerElement}function u(p,m){n.drawElements(i,m,r,p*s),t.update(m,i,1)}function c(p,m,E){E!==0&&(n.drawElementsInstanced(i,m,r,p*s,E),t.update(m,i,E))}function f(p,m,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,E);let S=0;for(let g=0;g<E;g++)S+=m[g];t.update(S,i,1)}function h(p,m,E,y){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<p.length;g++)c(p[g]/s,m[g],y[g]);else{S.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,y,0,E);let g=0;for(let w=0;w<E;w++)g+=m[w]*y[w];t.update(g,i,1)}}this.setMode=o,this.setIndex=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function MT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function AT(n,e,t){const i=new WeakMap,o=new vt;function r(s,a,u){const c=s.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let p=i.get(a);if(p===void 0||p.count!==h){let T=function(){H.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var m=T;p!==void 0&&p.texture.dispose();const E=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let M=0;E===!0&&(M=1),y===!0&&(M=2),S===!0&&(M=3);let O=a.attributes.position.count*M,F=1;O>e.maxTextureSize&&(F=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const N=new Float32Array(O*F*4*h),H=new Md(N,O,F,h);H.type=Kt,H.needsUpdate=!0;const A=M*4;for(let B=0;B<h;B++){const q=g[B],Y=w[B],ie=C[B],le=O*F*4*B;for(let j=0;j<q.count;j++){const se=j*A;E===!0&&(o.fromBufferAttribute(q,j),N[le+se+0]=o.x,N[le+se+1]=o.y,N[le+se+2]=o.z,N[le+se+3]=0),y===!0&&(o.fromBufferAttribute(Y,j),N[le+se+4]=o.x,N[le+se+5]=o.y,N[le+se+6]=o.z,N[le+se+7]=0),S===!0&&(o.fromBufferAttribute(ie,j),N[le+se+8]=o.x,N[le+se+9]=o.y,N[le+se+10]=o.z,N[le+se+11]=ie.itemSize===4?o.w:1)}}p={count:h,texture:H,size:new We(O,F)},i.set(a,p),a.addEventListener("dispose",T)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let E=0;for(let S=0;S<c.length;S++)E+=c[S];const y=a.morphTargetsRelative?1:1-E;u.getUniforms().setValue(n,"morphTargetBaseInfluence",y),u.getUniforms().setValue(n,"morphTargetInfluences",c)}u.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function CT(n,e,t,i){let o=new WeakMap;function r(u){const c=i.render.frame,f=u.geometry,h=e.get(u,f);if(o.get(h)!==c&&(e.update(h),o.set(h,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),o.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),o.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;o.get(p)!==c&&(p.update(),o.set(p,c))}return h}function s(){o=new WeakMap}function a(u){const c=u.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const Fd=new Ot,cc=new Nd(1,1),Bd=new Md,Od=new $0,kd=new bd,dc=[],fc=[],hc=new Float32Array(16),pc=new Float32Array(9),mc=new Float32Array(4);function ji(n,e,t){const i=n[0];if(i<=0||i>0)return n;const o=e*t;let r=dc[o];if(r===void 0&&(r=new Float32Array(o),dc[o]=r),e!==0){i.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(r,a)}return r}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Br(n,e){let t=fc[e];t===void 0&&(t=new Int32Array(e),fc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function RT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function IT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function PT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function bT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Mt(t,i))return;mc.set(i),n.uniformMatrix2fv(this.addr,!1,mc),At(t,i)}}function DT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Mt(t,i))return;pc.set(i),n.uniformMatrix3fv(this.addr,!1,pc),At(t,i)}}function NT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Mt(t,i))return;hc.set(i),n.uniformMatrix4fv(this.addr,!1,hc),At(t,i)}}function UT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function LT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function FT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function BT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function OT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function HT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function GT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function VT(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let r;this.type===n.SAMPLER_2D_SHADOW?(cc.compareFunction=Td,r=cc):r=Fd,t.setTexture2D(e||r,o)}function zT(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||Od,o)}function WT(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||kd,o)}function qT(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||Bd,o)}function $T(n){switch(n){case 5126:return RT;case 35664:return wT;case 35665:return IT;case 35666:return PT;case 35674:return bT;case 35675:return DT;case 35676:return NT;case 5124:case 35670:return UT;case 35667:case 35671:return LT;case 35668:case 35672:return FT;case 35669:case 35673:return BT;case 5125:return OT;case 36294:return kT;case 36295:return HT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return qT}}function XT(n,e){n.uniform1fv(this.addr,e)}function YT(n,e){const t=ji(e,this.size,2);n.uniform2fv(this.addr,t)}function JT(n,e){const t=ji(e,this.size,3);n.uniform3fv(this.addr,t)}function KT(n,e){const t=ji(e,this.size,4);n.uniform4fv(this.addr,t)}function ZT(n,e){const t=ji(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function QT(n,e){const t=ji(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jT(n,e){const t=ji(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ex(n,e){n.uniform1iv(this.addr,e)}function tx(n,e){n.uniform2iv(this.addr,e)}function nx(n,e){n.uniform3iv(this.addr,e)}function ix(n,e){n.uniform4iv(this.addr,e)}function ox(n,e){n.uniform1uiv(this.addr,e)}function rx(n,e){n.uniform2uiv(this.addr,e)}function sx(n,e){n.uniform3uiv(this.addr,e)}function ax(n,e){n.uniform4uiv(this.addr,e)}function lx(n,e,t){const i=this.cache,o=e.length,r=Br(t,o);Mt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let s=0;s!==o;++s)t.setTexture2D(e[s]||Fd,r[s])}function ux(n,e,t){const i=this.cache,o=e.length,r=Br(t,o);Mt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let s=0;s!==o;++s)t.setTexture3D(e[s]||Od,r[s])}function cx(n,e,t){const i=this.cache,o=e.length,r=Br(t,o);Mt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let s=0;s!==o;++s)t.setTextureCube(e[s]||kd,r[s])}function dx(n,e,t){const i=this.cache,o=e.length,r=Br(t,o);Mt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let s=0;s!==o;++s)t.setTexture2DArray(e[s]||Bd,r[s])}function fx(n){switch(n){case 5126:return XT;case 35664:return YT;case 35665:return JT;case 35666:return KT;case 35674:return ZT;case 35675:return QT;case 35676:return jT;case 5124:case 35670:return ex;case 35667:case 35671:return tx;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return ox;case 36294:return rx;case 36295:return sx;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return dx}}class hx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$T(t.type)}}class px{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fx(t.type)}}class mx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let r=0,s=o.length;r!==s;++r){const a=o[r];a.setValue(e,t[a.id],i)}}}const Ss=/(\w+)(\])?(\[|\.)?/g;function gc(n,e){n.seq.push(e),n.map[e.id]=e}function gx(n,e,t){const i=n.name,o=i.length;for(Ss.lastIndex=0;;){const r=Ss.exec(i),s=Ss.lastIndex;let a=r[1];const u=r[2]==="]",c=r[3];if(u&&(a=a|0),c===void 0||c==="["&&s+2===o){gc(t,c===void 0?new hx(a,n,e):new px(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new mx(a),gc(t,h)),t=h}}}class _r{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const r=e.getActiveUniform(t,o),s=e.getUniformLocation(t,r.name);gx(r,s,this)}}setValue(e,t,i,o){const r=this.map[t];r!==void 0&&r.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let r=0,s=t.length;r!==s;++r){const a=t[r],u=i[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,r=e.length;o!==r;++o){const s=e[o];s.id in t&&i.push(s)}return i}}function _c(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _x=37297;let vx=0;function Sx(n,e){const t=n.split(`
`),i=[],o=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=o;s<r;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}const vc=new Je;function Ex(n){st._getMatrix(vc,st.workingColorSpace,n);const e=`mat3( ${vc.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case Ar:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(i&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+o+`

`+Sx(n.getShaderSource(e),s)}else return o}function yx(n,e){const t=Ex(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Tx(n,e){let t;switch(e){case v0:t="Linear";break;case S0:t="Reinhard";break;case E0:t="Cineon";break;case y0:t="ACESFilmic";break;case x0:t="AgX";break;case M0:t="Neutral";break;case T0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sr=new $;function xx(){st.getLuminanceCoefficients(sr);const n=sr.x.toFixed(4),e=sr.y.toFixed(4),t=sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function Ax(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Cx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const r=n.getActiveAttrib(e,o),s=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function ho(n){return n!==""}function Ec(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(n){return n.replace(Rx,Ix)}const wx=new Map;function Ix(n,e){let t=Ze[e];if(t===void 0){const i=wx.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sa(t)}const Px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(n){return n.replace(Px,bx)}function bx(n,e,t,i){let o="";for(let r=parseInt(e);r<parseInt(t);r++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return o}function xc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function Nx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wi:case qi:e="ENVMAP_TYPE_CUBE";break;case Lr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ux(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qi:e="ENVMAP_MODE_REFRACTION";break}return e}function Lx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fd:e="ENVMAP_BLENDING_MULTIPLY";break;case g0:e="ENVMAP_BLENDING_MIX";break;case _0:e="ENVMAP_BLENDING_ADD";break}return e}function Fx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Bx(n,e,t,i){const o=n.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const u=Dx(t),c=Nx(t),f=Ux(t),h=Lx(t),p=Fx(t),m=Mx(t),E=Ax(r),y=o.createProgram();let S,g,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ho).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ho).join(`
`),g.length>0&&(g+=`
`)):(S=[xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),g=[xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Xn?Tx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,yx("linearToOutputTexel",t.outputColorSpace),xx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ho).join(`
`)),s=Sa(s),s=Ec(s,t),s=yc(s,t),a=Sa(a),a=Ec(a,t),a=yc(a,t),s=Tc(s),a=Tc(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,S=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",t.glslVersion===ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const C=w+S+s,M=w+g+a,O=_c(o,o.VERTEX_SHADER,C),F=_c(o,o.FRAGMENT_SHADER,M);o.attachShader(y,O),o.attachShader(y,F),t.index0AttributeName!==void 0?o.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y);function N(B){if(n.debug.checkShaderErrors){const q=o.getProgramInfoLog(y).trim(),Y=o.getShaderInfoLog(O).trim(),ie=o.getShaderInfoLog(F).trim();let le=!0,j=!0;if(o.getProgramParameter(y,o.LINK_STATUS)===!1)if(le=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,y,O,F);else{const se=Sc(o,O,"vertex"),Q=Sc(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+q+`
`+se+`
`+Q)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Y===""||ie==="")&&(j=!1);j&&(B.diagnostics={runnable:le,programLog:q,vertexShader:{log:Y,prefix:S},fragmentShader:{log:ie,prefix:g}})}o.deleteShader(O),o.deleteShader(F),H=new _r(o,y),A=Cx(o,y)}let H;this.getUniforms=function(){return H===void 0&&N(this),H};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=o.getProgramParameter(y,_x)),T},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=O,this.fragmentShader=F,this}let Ox=0;class kx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(o)===!1&&(s.add(o),o.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Hx(e),t.set(e,i)),i}}class Hx{constructor(e){this.id=Ox++,this.code=e,this.usedTimes=0}}function Gx(n,e,t,i,o,r,s){const a=new Ad,u=new kx,c=new Set,f=[],h=o.logarithmicDepthBuffer,p=o.vertexTextures;let m=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(A){return c.add(A),A===0?"uv":`uv${A}`}function S(A,T,B,q,Y){const ie=q.fog,le=Y.geometry,j=A.isMeshStandardMaterial?q.environment:null,se=(A.isMeshStandardMaterial?t:e).get(A.envMap||j),Q=se&&se.mapping===Lr?se.image.height:null,ge=E[A.type];A.precision!==null&&(m=o.getMaxPrecision(A.precision),m!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const ve=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Pe=ve!==void 0?ve.length:0;let Ge=0;le.morphAttributes.position!==void 0&&(Ge=1),le.morphAttributes.normal!==void 0&&(Ge=2),le.morphAttributes.color!==void 0&&(Ge=3);let Qe,ee,pe,me;if(ge){const lt=fn[ge];Qe=lt.vertexShader,ee=lt.fragmentShader}else Qe=A.vertexShader,ee=A.fragmentShader,u.update(A),pe=u.getVertexShaderID(A),me=u.getFragmentShaderID(A);const _e=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),je=Y.isInstancedMesh===!0,Ve=Y.isBatchedMesh===!0,ft=!!A.map,ct=!!A.matcap,Ke=!!se,k=!!A.aoMap,Nt=!!A.lightMap,nt=!!A.bumpMap,et=!!A.normalMap,Fe=!!A.displacementMap,ht=!!A.emissiveMap,Ue=!!A.metalnessMap,b=!!A.roughnessMap,x=A.anisotropy>0,X=A.clearcoat>0,oe=A.dispersion>0,ce=A.iridescence>0,te=A.sheen>0,De=A.transmission>0,Ee=x&&!!A.anisotropyMap,Be=X&&!!A.clearcoatMap,ze=X&&!!A.clearcoatNormalMap,fe=X&&!!A.clearcoatRoughnessMap,Ae=ce&&!!A.iridescenceMap,Ie=ce&&!!A.iridescenceThicknessMap,Ne=te&&!!A.sheenColorMap,Me=te&&!!A.sheenRoughnessMap,qe=!!A.specularMap,Oe=!!A.specularColorMap,$e=!!A.specularIntensityMap,V=De&&!!A.transmissionMap,J=De&&!!A.thicknessMap,Z=!!A.gradientMap,ae=!!A.alphaMap,xe=A.alphaTest>0,ye=!!A.alphaHash,Xe=!!A.extensions;let _t=Xn;A.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(_t=n.toneMapping);const Ct={shaderID:ge,shaderType:A.type,shaderName:A.name,vertexShader:Qe,fragmentShader:ee,defines:A.defines,customVertexShaderID:pe,customFragmentShaderID:me,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:Ve,batchingColor:Ve&&Y._colorsTexture!==null,instancing:je,instancingColor:je&&Y.instanceColor!==null,instancingMorph:je&&Y.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Jn,alphaToCoverage:!!A.alphaToCoverage,map:ft,matcap:ct,envMap:Ke,envMapMode:Ke&&se.mapping,envMapCubeUVHeight:Q,aoMap:k,lightMap:Nt,bumpMap:nt,normalMap:et,displacementMap:p&&Fe,emissiveMap:ht,normalMapObjectSpace:et&&A.normalMapType===w0,normalMapTangentSpace:et&&A.normalMapType===yd,metalnessMap:Ue,roughnessMap:b,anisotropy:x,anisotropyMap:Ee,clearcoat:X,clearcoatMap:Be,clearcoatNormalMap:ze,clearcoatRoughnessMap:fe,dispersion:oe,iridescence:ce,iridescenceMap:Ae,iridescenceThicknessMap:Ie,sheen:te,sheenColorMap:Ne,sheenRoughnessMap:Me,specularMap:qe,specularColorMap:Oe,specularIntensityMap:$e,transmission:De,transmissionMap:V,thicknessMap:J,gradientMap:Z,opaque:A.transparent===!1&&A.blending===ki&&A.alphaToCoverage===!1,alphaMap:ae,alphaTest:xe,alphaHash:ye,combine:A.combine,mapUv:ft&&y(A.map.channel),aoMapUv:k&&y(A.aoMap.channel),lightMapUv:Nt&&y(A.lightMap.channel),bumpMapUv:nt&&y(A.bumpMap.channel),normalMapUv:et&&y(A.normalMap.channel),displacementMapUv:Fe&&y(A.displacementMap.channel),emissiveMapUv:ht&&y(A.emissiveMap.channel),metalnessMapUv:Ue&&y(A.metalnessMap.channel),roughnessMapUv:b&&y(A.roughnessMap.channel),anisotropyMapUv:Ee&&y(A.anisotropyMap.channel),clearcoatMapUv:Be&&y(A.clearcoatMap.channel),clearcoatNormalMapUv:ze&&y(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&y(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&y(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&y(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&y(A.sheenColorMap.channel),sheenRoughnessMapUv:Me&&y(A.sheenRoughnessMap.channel),specularMapUv:qe&&y(A.specularMap.channel),specularColorMapUv:Oe&&y(A.specularColorMap.channel),specularIntensityMapUv:$e&&y(A.specularIntensityMap.channel),transmissionMapUv:V&&y(A.transmissionMap.channel),thicknessMapUv:J&&y(A.thicknessMap.channel),alphaMapUv:ae&&y(A.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(et||x),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!le.attributes.uv&&(ft||ae),fog:!!ie,useFog:A.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:be,skinning:Y.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ge,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,decodeVideoTexture:ft&&A.map.isVideoTexture===!0&&st.getTransfer(A.map.colorSpace)===dt,decodeVideoTextureEmissive:ht&&A.emissiveMap.isVideoTexture===!0&&st.getTransfer(A.emissiveMap.colorSpace)===dt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===xn,flipSided:A.side===Bt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Xe&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&A.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function g(A){const T=[];if(A.shaderID?T.push(A.shaderID):(T.push(A.customVertexShaderID),T.push(A.customFragmentShaderID)),A.defines!==void 0)for(const B in A.defines)T.push(B),T.push(A.defines[B]);return A.isRawShaderMaterial===!1&&(w(T,A),C(T,A),T.push(n.outputColorSpace)),T.push(A.customProgramCacheKey),T.join()}function w(A,T){A.push(T.precision),A.push(T.outputColorSpace),A.push(T.envMapMode),A.push(T.envMapCubeUVHeight),A.push(T.mapUv),A.push(T.alphaMapUv),A.push(T.lightMapUv),A.push(T.aoMapUv),A.push(T.bumpMapUv),A.push(T.normalMapUv),A.push(T.displacementMapUv),A.push(T.emissiveMapUv),A.push(T.metalnessMapUv),A.push(T.roughnessMapUv),A.push(T.anisotropyMapUv),A.push(T.clearcoatMapUv),A.push(T.clearcoatNormalMapUv),A.push(T.clearcoatRoughnessMapUv),A.push(T.iridescenceMapUv),A.push(T.iridescenceThicknessMapUv),A.push(T.sheenColorMapUv),A.push(T.sheenRoughnessMapUv),A.push(T.specularMapUv),A.push(T.specularColorMapUv),A.push(T.specularIntensityMapUv),A.push(T.transmissionMapUv),A.push(T.thicknessMapUv),A.push(T.combine),A.push(T.fogExp2),A.push(T.sizeAttenuation),A.push(T.morphTargetsCount),A.push(T.morphAttributeCount),A.push(T.numDirLights),A.push(T.numPointLights),A.push(T.numSpotLights),A.push(T.numSpotLightMaps),A.push(T.numHemiLights),A.push(T.numRectAreaLights),A.push(T.numDirLightShadows),A.push(T.numPointLightShadows),A.push(T.numSpotLightShadows),A.push(T.numSpotLightShadowsWithMaps),A.push(T.numLightProbes),A.push(T.shadowMapType),A.push(T.toneMapping),A.push(T.numClippingPlanes),A.push(T.numClipIntersection),A.push(T.depthPacking)}function C(A,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),A.push(a.mask)}function M(A){const T=E[A.type];let B;if(T){const q=fn[T];B=wr.clone(q.uniforms)}else B=A.uniforms;return B}function O(A,T){let B;for(let q=0,Y=f.length;q<Y;q++){const ie=f[q];if(ie.cacheKey===T){B=ie,++B.usedTimes;break}}return B===void 0&&(B=new Bx(n,T,A,r),f.push(B)),B}function F(A){if(--A.usedTimes===0){const T=f.indexOf(A);f[T]=f[f.length-1],f.pop(),A.destroy()}}function N(A){u.remove(A)}function H(){u.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:M,acquireProgram:O,releaseProgram:F,releaseShaderCache:N,programs:f,dispose:H}}function Vx(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function i(s){n.delete(s)}function o(s,a,u){n.get(s)[a]=u}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:r}}function zx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Mc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ac(){const n=[];let e=0;const t=[],i=[],o=[];function r(){e=0,t.length=0,i.length=0,o.length=0}function s(h,p,m,E,y,S){let g=n[e];return g===void 0?(g={id:h.id,object:h,geometry:p,material:m,groupOrder:E,renderOrder:h.renderOrder,z:y,group:S},n[e]=g):(g.id=h.id,g.object=h,g.geometry=p,g.material=m,g.groupOrder=E,g.renderOrder=h.renderOrder,g.z=y,g.group=S),e++,g}function a(h,p,m,E,y,S){const g=s(h,p,m,E,y,S);m.transmission>0?i.push(g):m.transparent===!0?o.push(g):t.push(g)}function u(h,p,m,E,y,S){const g=s(h,p,m,E,y,S);m.transmission>0?i.unshift(g):m.transparent===!0?o.unshift(g):t.unshift(g)}function c(h,p){t.length>1&&t.sort(h||zx),i.length>1&&i.sort(p||Mc),o.length>1&&o.sort(p||Mc)}function f(){for(let h=e,p=n.length;h<p;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:o,init:r,push:a,unshift:u,finish:f,sort:c}}function Wx(){let n=new WeakMap;function e(i,o){const r=n.get(i);let s;return r===void 0?(s=new Ac,n.set(i,[s])):o>=r.length?(s=new Ac,r.push(s)):s=r[o],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function qx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new ot};break;case"SpotLight":t={position:new $,direction:new $,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function $x(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Xx=0;function Yx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Jx(n){const e=new qx,t=$x(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const o=new $,r=new yt,s=new yt;function a(c){let f=0,h=0,p=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let m=0,E=0,y=0,S=0,g=0,w=0,C=0,M=0,O=0,F=0,N=0;c.sort(Yx);for(let A=0,T=c.length;A<T;A++){const B=c[A],q=B.color,Y=B.intensity,ie=B.distance,le=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=q.r*Y,h+=q.g*Y,p+=q.b*Y;else if(B.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(B.sh.coefficients[j],Y);N++}else if(B.isDirectionalLight){const j=e.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const se=B.shadow,Q=t.get(B);Q.shadowIntensity=se.intensity,Q.shadowBias=se.bias,Q.shadowNormalBias=se.normalBias,Q.shadowRadius=se.radius,Q.shadowMapSize=se.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=le,i.directionalShadowMatrix[m]=B.shadow.matrix,w++}i.directional[m]=j,m++}else if(B.isSpotLight){const j=e.get(B);j.position.setFromMatrixPosition(B.matrixWorld),j.color.copy(q).multiplyScalar(Y),j.distance=ie,j.coneCos=Math.cos(B.angle),j.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),j.decay=B.decay,i.spot[y]=j;const se=B.shadow;if(B.map&&(i.spotLightMap[O]=B.map,O++,se.updateMatrices(B),B.castShadow&&F++),i.spotLightMatrix[y]=se.matrix,B.castShadow){const Q=t.get(B);Q.shadowIntensity=se.intensity,Q.shadowBias=se.bias,Q.shadowNormalBias=se.normalBias,Q.shadowRadius=se.radius,Q.shadowMapSize=se.mapSize,i.spotShadow[y]=Q,i.spotShadowMap[y]=le,M++}y++}else if(B.isRectAreaLight){const j=e.get(B);j.color.copy(q).multiplyScalar(Y),j.halfWidth.set(B.width*.5,0,0),j.halfHeight.set(0,B.height*.5,0),i.rectArea[S]=j,S++}else if(B.isPointLight){const j=e.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity),j.distance=B.distance,j.decay=B.decay,B.castShadow){const se=B.shadow,Q=t.get(B);Q.shadowIntensity=se.intensity,Q.shadowBias=se.bias,Q.shadowNormalBias=se.normalBias,Q.shadowRadius=se.radius,Q.shadowMapSize=se.mapSize,Q.shadowCameraNear=se.camera.near,Q.shadowCameraFar=se.camera.far,i.pointShadow[E]=Q,i.pointShadowMap[E]=le,i.pointShadowMatrix[E]=B.shadow.matrix,C++}i.point[E]=j,E++}else if(B.isHemisphereLight){const j=e.get(B);j.skyColor.copy(B.color).multiplyScalar(Y),j.groundColor.copy(B.groundColor).multiplyScalar(Y),i.hemi[g]=j,g++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=p;const H=i.hash;(H.directionalLength!==m||H.pointLength!==E||H.spotLength!==y||H.rectAreaLength!==S||H.hemiLength!==g||H.numDirectionalShadows!==w||H.numPointShadows!==C||H.numSpotShadows!==M||H.numSpotMaps!==O||H.numLightProbes!==N)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=S,i.point.length=E,i.hemi.length=g,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=M+O-F,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=N,H.directionalLength=m,H.pointLength=E,H.spotLength=y,H.rectAreaLength=S,H.hemiLength=g,H.numDirectionalShadows=w,H.numPointShadows=C,H.numSpotShadows=M,H.numSpotMaps=O,H.numLightProbes=N,i.version=Xx++)}function u(c,f){let h=0,p=0,m=0,E=0,y=0;const S=f.matrixWorldInverse;for(let g=0,w=c.length;g<w;g++){const C=c[g];if(C.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(S),h++}else if(C.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(S),M.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(S),m++}else if(C.isRectAreaLight){const M=i.rectArea[E];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(S),s.identity(),r.copy(C.matrixWorld),r.premultiply(S),s.extractRotation(r),M.halfWidth.set(C.width*.5,0,0),M.halfHeight.set(0,C.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),E++}else if(C.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(S),p++}else if(C.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(C.matrixWorld),M.direction.transformDirection(S),y++}}}return{setup:a,setupView:u,state:i}}function Cc(n){const e=new Jx(n),t=[],i=[];function o(f){c.camera=f,t.length=0,i.length=0}function r(f){t.push(f)}function s(f){i.push(f)}function a(){e.setup(t)}function u(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:c,setupLights:a,setupLightsView:u,pushLight:r,pushShadow:s}}function Kx(n){let e=new WeakMap;function t(o,r=0){const s=e.get(o);let a;return s===void 0?(a=new Cc(n),e.set(o,[a])):r>=s.length?(a=new Cc(n),s.push(a)):a=s[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jx(n,e,t){let i=new Dd;const o=new We,r=new We,s=new vt,a=new ES({depthPacking:R0}),u=new yS,c={},f=t.maxTextureSize,h={[Yn]:Bt,[Bt]:Yn,[xn]:xn},p=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Zx,fragmentShader:Qx}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const E=new Un;E.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Qt(E,p),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dd;let g=this.type;this.render=function(F,N,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const A=n.getRenderTarget(),T=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),q=n.state;q.setBlending(wn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Y=g!==Tn&&this.type===Tn,ie=g===Tn&&this.type!==Tn;for(let le=0,j=F.length;le<j;le++){const se=F[le],Q=se.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;o.copy(Q.mapSize);const ge=Q.getFrameExtents();if(o.multiply(ge),r.copy(Q.mapSize),(o.x>f||o.y>f)&&(o.x>f&&(r.x=Math.floor(f/ge.x),o.x=r.x*ge.x,Q.mapSize.x=r.x),o.y>f&&(r.y=Math.floor(f/ge.y),o.y=r.y*ge.y,Q.mapSize.y=r.y)),Q.map===null||Y===!0||ie===!0){const Pe=this.type!==Tn?{minFilter:Wt,magFilter:Wt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new un(o.x,o.y,Pe),Q.map.texture.name=se.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();const ve=Q.getViewportCount();for(let Pe=0;Pe<ve;Pe++){const Ge=Q.getViewport(Pe);s.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),q.viewport(s),Q.updateMatrices(se,Pe),i=Q.getFrustum(),M(N,H,Q.camera,se,this.type)}Q.isPointLightShadow!==!0&&this.type===Tn&&w(Q,H),Q.needsUpdate=!1}g=this.type,S.needsUpdate=!1,n.setRenderTarget(A,T,B)};function w(F,N){const H=e.update(y);p.defines.VSM_SAMPLES!==F.blurSamples&&(p.defines.VSM_SAMPLES=F.blurSamples,m.defines.VSM_SAMPLES=F.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new un(o.x,o.y)),p.uniforms.shadow_pass.value=F.map.texture,p.uniforms.resolution.value=F.mapSize,p.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(N,null,H,p,y,null),m.uniforms.shadow_pass.value=F.mapPass.texture,m.uniforms.resolution.value=F.mapSize,m.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(N,null,H,m,y,null)}function C(F,N,H,A){let T=null;const B=H.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)T=B;else if(T=H.isPointLight===!0?u:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const q=T.uuid,Y=N.uuid;let ie=c[q];ie===void 0&&(ie={},c[q]=ie);let le=ie[Y];le===void 0&&(le=T.clone(),ie[Y]=le,N.addEventListener("dispose",O)),T=le}if(T.visible=N.visible,T.wireframe=N.wireframe,A===Tn?T.side=N.shadowSide!==null?N.shadowSide:N.side:T.side=N.shadowSide!==null?N.shadowSide:h[N.side],T.alphaMap=N.alphaMap,T.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,T.map=N.map,T.clipShadows=N.clipShadows,T.clippingPlanes=N.clippingPlanes,T.clipIntersection=N.clipIntersection,T.displacementMap=N.displacementMap,T.displacementScale=N.displacementScale,T.displacementBias=N.displacementBias,T.wireframeLinewidth=N.wireframeLinewidth,T.linewidth=N.linewidth,H.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const q=n.properties.get(T);q.light=H}return T}function M(F,N,H,A,T){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&T===Tn)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,F.matrixWorld);const Y=e.update(F),ie=F.material;if(Array.isArray(ie)){const le=Y.groups;for(let j=0,se=le.length;j<se;j++){const Q=le[j],ge=ie[Q.materialIndex];if(ge&&ge.visible){const ve=C(F,ge,A,T);F.onBeforeShadow(n,F,N,H,Y,ve,Q),n.renderBufferDirect(H,null,Y,ve,F,Q),F.onAfterShadow(n,F,N,H,Y,ve,Q)}}}else if(ie.visible){const le=C(F,ie,A,T);F.onBeforeShadow(n,F,N,H,Y,le,null),n.renderBufferDirect(H,null,Y,le,F,null),F.onAfterShadow(n,F,N,H,Y,le,null)}}const q=F.children;for(let Y=0,ie=q.length;Y<ie;Y++)M(q[Y],N,H,A,T)}function O(F){F.target.removeEventListener("dispose",O);for(const H in c){const A=c[H],T=F.target.uuid;T in A&&(A[T].dispose(),delete A[T])}}}const eM={[Us]:Ls,[Fs]:ks,[Bs]:Hs,[zi]:Os,[Ls]:Us,[ks]:Fs,[Hs]:Bs,[Os]:zi};function tM(n,e){function t(){let V=!1;const J=new vt;let Z=null;const ae=new vt(0,0,0,0);return{setMask:function(xe){Z!==xe&&!V&&(n.colorMask(xe,xe,xe,xe),Z=xe)},setLocked:function(xe){V=xe},setClear:function(xe,ye,Xe,_t,Ct){Ct===!0&&(xe*=_t,ye*=_t,Xe*=_t),J.set(xe,ye,Xe,_t),ae.equals(J)===!1&&(n.clearColor(xe,ye,Xe,_t),ae.copy(J))},reset:function(){V=!1,Z=null,ae.set(-1,0,0,0)}}}function i(){let V=!1,J=!1,Z=null,ae=null,xe=null;return{setReversed:function(ye){if(J!==ye){const Xe=e.get("EXT_clip_control");ye?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),J=ye;const _t=xe;xe=null,this.setClear(_t)}},getReversed:function(){return J},setTest:function(ye){ye?_e(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(ye){Z!==ye&&!V&&(n.depthMask(ye),Z=ye)},setFunc:function(ye){if(J&&(ye=eM[ye]),ae!==ye){switch(ye){case Us:n.depthFunc(n.NEVER);break;case Ls:n.depthFunc(n.ALWAYS);break;case Fs:n.depthFunc(n.LESS);break;case zi:n.depthFunc(n.LEQUAL);break;case Bs:n.depthFunc(n.EQUAL);break;case Os:n.depthFunc(n.GEQUAL);break;case ks:n.depthFunc(n.GREATER);break;case Hs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=ye}},setLocked:function(ye){V=ye},setClear:function(ye){xe!==ye&&(J&&(ye=1-ye),n.clearDepth(ye),xe=ye)},reset:function(){V=!1,Z=null,ae=null,xe=null,J=!1}}}function o(){let V=!1,J=null,Z=null,ae=null,xe=null,ye=null,Xe=null,_t=null,Ct=null;return{setTest:function(lt){V||(lt?_e(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(lt){J!==lt&&!V&&(n.stencilMask(lt),J=lt)},setFunc:function(lt,Ht,tn){(Z!==lt||ae!==Ht||xe!==tn)&&(n.stencilFunc(lt,Ht,tn),Z=lt,ae=Ht,xe=tn)},setOp:function(lt,Ht,tn){(ye!==lt||Xe!==Ht||_t!==tn)&&(n.stencilOp(lt,Ht,tn),ye=lt,Xe=Ht,_t=tn)},setLocked:function(lt){V=lt},setClear:function(lt){Ct!==lt&&(n.clearStencil(lt),Ct=lt)},reset:function(){V=!1,J=null,Z=null,ae=null,xe=null,ye=null,Xe=null,_t=null,Ct=null}}}const r=new t,s=new i,a=new o,u=new WeakMap,c=new WeakMap;let f={},h={},p=new WeakMap,m=[],E=null,y=!1,S=null,g=null,w=null,C=null,M=null,O=null,F=null,N=new ot(0,0,0),H=0,A=!1,T=null,B=null,q=null,Y=null,ie=null;const le=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,se=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=se>=1):Q.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=se>=2);let ge=null,ve={};const Pe=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),Qe=new vt().fromArray(Pe),ee=new vt().fromArray(Ge);function pe(V,J,Z,ae){const xe=new Uint8Array(4),ye=n.createTexture();n.bindTexture(V,ye),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<Z;Xe++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(J,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(J+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return ye}const me={};me[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),_e(n.DEPTH_TEST),s.setFunc(zi),nt(!1),et(Du),_e(n.CULL_FACE),k(wn);function _e(V){f[V]!==!0&&(n.enable(V),f[V]=!0)}function be(V){f[V]!==!1&&(n.disable(V),f[V]=!1)}function je(V,J){return h[V]!==J?(n.bindFramebuffer(V,J),h[V]=J,V===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=J),V===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=J),!0):!1}function Ve(V,J){let Z=m,ae=!1;if(V){Z=p.get(J),Z===void 0&&(Z=[],p.set(J,Z));const xe=V.textures;if(Z.length!==xe.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,Xe=xe.length;ye<Xe;ye++)Z[ye]=n.COLOR_ATTACHMENT0+ye;Z.length=xe.length,ae=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ae=!0);ae&&n.drawBuffers(Z)}function ft(V){return E!==V?(n.useProgram(V),E=V,!0):!1}const ct={[li]:n.FUNC_ADD,[jv]:n.FUNC_SUBTRACT,[e0]:n.FUNC_REVERSE_SUBTRACT};ct[t0]=n.MIN,ct[n0]=n.MAX;const Ke={[i0]:n.ZERO,[o0]:n.ONE,[r0]:n.SRC_COLOR,[Ds]:n.SRC_ALPHA,[d0]:n.SRC_ALPHA_SATURATE,[u0]:n.DST_COLOR,[a0]:n.DST_ALPHA,[s0]:n.ONE_MINUS_SRC_COLOR,[Ns]:n.ONE_MINUS_SRC_ALPHA,[c0]:n.ONE_MINUS_DST_COLOR,[l0]:n.ONE_MINUS_DST_ALPHA,[f0]:n.CONSTANT_COLOR,[h0]:n.ONE_MINUS_CONSTANT_COLOR,[p0]:n.CONSTANT_ALPHA,[m0]:n.ONE_MINUS_CONSTANT_ALPHA};function k(V,J,Z,ae,xe,ye,Xe,_t,Ct,lt){if(V===wn){y===!0&&(be(n.BLEND),y=!1);return}if(y===!1&&(_e(n.BLEND),y=!0),V!==Qv){if(V!==S||lt!==A){if((g!==li||M!==li)&&(n.blendEquation(n.FUNC_ADD),g=li,M=li),lt)switch(V){case ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bs:n.blendFunc(n.ONE,n.ONE);break;case Nu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bs:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Nu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}w=null,C=null,O=null,F=null,N.set(0,0,0),H=0,S=V,A=lt}return}xe=xe||J,ye=ye||Z,Xe=Xe||ae,(J!==g||xe!==M)&&(n.blendEquationSeparate(ct[J],ct[xe]),g=J,M=xe),(Z!==w||ae!==C||ye!==O||Xe!==F)&&(n.blendFuncSeparate(Ke[Z],Ke[ae],Ke[ye],Ke[Xe]),w=Z,C=ae,O=ye,F=Xe),(_t.equals(N)===!1||Ct!==H)&&(n.blendColor(_t.r,_t.g,_t.b,Ct),N.copy(_t),H=Ct),S=V,A=!1}function Nt(V,J){V.side===xn?be(n.CULL_FACE):_e(n.CULL_FACE);let Z=V.side===Bt;J&&(Z=!Z),nt(Z),V.blending===ki&&V.transparent===!1?k(wn):k(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),s.setFunc(V.depthFunc),s.setTest(V.depthTest),s.setMask(V.depthWrite),r.setMask(V.colorWrite);const ae=V.stencilWrite;a.setTest(ae),ae&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ht(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(V){T!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),T=V)}function et(V){V!==Jv?(_e(n.CULL_FACE),V!==B&&(V===Du?n.cullFace(n.BACK):V===Kv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),B=V}function Fe(V){V!==q&&(j&&n.lineWidth(V),q=V)}function ht(V,J,Z){V?(_e(n.POLYGON_OFFSET_FILL),(Y!==J||ie!==Z)&&(n.polygonOffset(J,Z),Y=J,ie=Z)):be(n.POLYGON_OFFSET_FILL)}function Ue(V){V?_e(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function b(V){V===void 0&&(V=n.TEXTURE0+le-1),ge!==V&&(n.activeTexture(V),ge=V)}function x(V,J,Z){Z===void 0&&(ge===null?Z=n.TEXTURE0+le-1:Z=ge);let ae=ve[Z];ae===void 0&&(ae={type:void 0,texture:void 0},ve[Z]=ae),(ae.type!==V||ae.texture!==J)&&(ge!==Z&&(n.activeTexture(Z),ge=Z),n.bindTexture(V,J||me[V]),ae.type=V,ae.texture=J)}function X(){const V=ve[ge];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function oe(){try{n.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{n.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function te(){try{n.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{n.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{n.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(){try{n.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(){try{n.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{n.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{n.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ie(){try{n.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(V){Qe.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Qe.copy(V))}function Me(V){ee.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),ee.copy(V))}function qe(V,J){let Z=c.get(J);Z===void 0&&(Z=new WeakMap,c.set(J,Z));let ae=Z.get(V);ae===void 0&&(ae=n.getUniformBlockIndex(J,V.name),Z.set(V,ae))}function Oe(V,J){const ae=c.get(J).get(V);u.get(J)!==ae&&(n.uniformBlockBinding(J,ae,V.__bindingPointIndex),u.set(J,ae))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ge=null,ve={},h={},p=new WeakMap,m=[],E=null,y=!1,S=null,g=null,w=null,C=null,M=null,O=null,F=null,N=new ot(0,0,0),H=0,A=!1,T=null,B=null,q=null,Y=null,ie=null,Qe.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:_e,disable:be,bindFramebuffer:je,drawBuffers:Ve,useProgram:ft,setBlending:k,setMaterial:Nt,setFlipSided:nt,setCullFace:et,setLineWidth:Fe,setPolygonOffset:ht,setScissorTest:Ue,activeTexture:b,bindTexture:x,unbindTexture:X,compressedTexImage2D:oe,compressedTexImage3D:ce,texImage2D:Ae,texImage3D:Ie,updateUBOMapping:qe,uniformBlockBinding:Oe,texStorage2D:ze,texStorage3D:fe,texSubImage2D:te,texSubImage3D:De,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Be,scissor:Ne,viewport:Me,reset:$e}}function nM(n,e,t,i,o,r,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,f=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(b,x){return m?new OffscreenCanvas(b,x):Rr("canvas")}function y(b,x,X){let oe=1;const ce=Ue(b);if((ce.width>X||ce.height>X)&&(oe=X/Math.max(ce.width,ce.height)),oe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const te=Math.floor(oe*ce.width),De=Math.floor(oe*ce.height);h===void 0&&(h=E(te,De));const Ee=x?E(te,De):h;return Ee.width=te,Ee.height=De,Ee.getContext("2d").drawImage(b,0,0,te,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+te+"x"+De+")."),Ee}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),b;return b}function S(b){return b.generateMipmaps}function g(b){n.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(b,x,X,oe,ce=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let te=x;if(x===n.RED&&(X===n.FLOAT&&(te=n.R32F),X===n.HALF_FLOAT&&(te=n.R16F),X===n.UNSIGNED_BYTE&&(te=n.R8)),x===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(te=n.R8UI),X===n.UNSIGNED_SHORT&&(te=n.R16UI),X===n.UNSIGNED_INT&&(te=n.R32UI),X===n.BYTE&&(te=n.R8I),X===n.SHORT&&(te=n.R16I),X===n.INT&&(te=n.R32I)),x===n.RG&&(X===n.FLOAT&&(te=n.RG32F),X===n.HALF_FLOAT&&(te=n.RG16F),X===n.UNSIGNED_BYTE&&(te=n.RG8)),x===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(te=n.RG8UI),X===n.UNSIGNED_SHORT&&(te=n.RG16UI),X===n.UNSIGNED_INT&&(te=n.RG32UI),X===n.BYTE&&(te=n.RG8I),X===n.SHORT&&(te=n.RG16I),X===n.INT&&(te=n.RG32I)),x===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(te=n.RGB8UI),X===n.UNSIGNED_SHORT&&(te=n.RGB16UI),X===n.UNSIGNED_INT&&(te=n.RGB32UI),X===n.BYTE&&(te=n.RGB8I),X===n.SHORT&&(te=n.RGB16I),X===n.INT&&(te=n.RGB32I)),x===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),X===n.UNSIGNED_INT&&(te=n.RGBA32UI),X===n.BYTE&&(te=n.RGBA8I),X===n.SHORT&&(te=n.RGBA16I),X===n.INT&&(te=n.RGBA32I)),x===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),x===n.RGBA){const De=ce?Ar:st.getTransfer(oe);X===n.FLOAT&&(te=n.RGBA32F),X===n.HALF_FLOAT&&(te=n.RGBA16F),X===n.UNSIGNED_BYTE&&(te=De===dt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function M(b,x){let X;return b?x===null||x===hi||x===xo?X=n.DEPTH24_STENCIL8:x===Kt?X=n.DEPTH32F_STENCIL8:x===To&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hi||x===xo?X=n.DEPTH_COMPONENT24:x===Kt?X=n.DEPTH_COMPONENT32F:x===To&&(X=n.DEPTH_COMPONENT16),X}function O(b,x){return S(b)===!0||b.isFramebufferTexture&&b.minFilter!==Wt&&b.minFilter!==Lt?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function F(b){const x=b.target;x.removeEventListener("dispose",F),H(x),x.isVideoTexture&&f.delete(x)}function N(b){const x=b.target;x.removeEventListener("dispose",N),T(x)}function H(b){const x=i.get(b);if(x.__webglInit===void 0)return;const X=b.source,oe=p.get(X);if(oe){const ce=oe[x.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&A(b),Object.keys(oe).length===0&&p.delete(X)}i.remove(b)}function A(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const X=b.source,oe=p.get(X);delete oe[x.__cacheKey],s.memory.textures--}function T(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(x.__webglFramebuffer[oe]))for(let ce=0;ce<x.__webglFramebuffer[oe].length;ce++)n.deleteFramebuffer(x.__webglFramebuffer[oe][ce]);else n.deleteFramebuffer(x.__webglFramebuffer[oe]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[oe])}else{if(Array.isArray(x.__webglFramebuffer))for(let oe=0;oe<x.__webglFramebuffer.length;oe++)n.deleteFramebuffer(x.__webglFramebuffer[oe]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let oe=0;oe<x.__webglColorRenderbuffer.length;oe++)x.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[oe]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const X=b.textures;for(let oe=0,ce=X.length;oe<ce;oe++){const te=i.get(X[oe]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),s.memory.textures--),i.remove(X[oe])}i.remove(b)}let B=0;function q(){B=0}function Y(){const b=B;return b>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+o.maxTextures),B+=1,b}function ie(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function le(b,x){const X=i.get(b);if(b.isVideoTexture&&Fe(b),b.isRenderTargetTexture===!1&&b.version>0&&X.__version!==b.version){const oe=b.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(X,b,x);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+x)}function j(b,x){const X=i.get(b);if(b.version>0&&X.__version!==b.version){ee(X,b,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+x)}function se(b,x){const X=i.get(b);if(b.version>0&&X.__version!==b.version){ee(X,b,x);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+x)}function Q(b,x){const X=i.get(b);if(b.version>0&&X.__version!==b.version){pe(X,b,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+x)}const ge={[Vs]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[zs]:n.MIRRORED_REPEAT},ve={[Wt]:n.NEAREST,[A0]:n.NEAREST_MIPMAP_NEAREST,[ko]:n.NEAREST_MIPMAP_LINEAR,[Lt]:n.LINEAR,[Wr]:n.LINEAR_MIPMAP_NEAREST,[qn]:n.LINEAR_MIPMAP_LINEAR},Pe={[I0]:n.NEVER,[L0]:n.ALWAYS,[P0]:n.LESS,[Td]:n.LEQUAL,[b0]:n.EQUAL,[U0]:n.GEQUAL,[D0]:n.GREATER,[N0]:n.NOTEQUAL};function Ge(b,x){if(x.type===Kt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Lt||x.magFilter===Wr||x.magFilter===ko||x.magFilter===qn||x.minFilter===Lt||x.minFilter===Wr||x.minFilter===ko||x.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ge[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ge[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ge[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ve[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ve[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Pe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Wt||x.minFilter!==ko&&x.minFilter!==qn||x.type===Kt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,o.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Qe(b,x){let X=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",F));const oe=x.source;let ce=p.get(oe);ce===void 0&&(ce={},p.set(oe,ce));const te=ie(x);if(te!==b.__cacheKey){ce[te]===void 0&&(ce[te]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,X=!0),ce[te].usedTimes++;const De=ce[b.__cacheKey];De!==void 0&&(ce[b.__cacheKey].usedTimes--,De.usedTimes===0&&A(x)),b.__cacheKey=te,b.__webglTexture=ce[te].texture}return X}function ee(b,x,X){let oe=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(oe=n.TEXTURE_3D);const ce=Qe(b,x),te=x.source;t.bindTexture(oe,b.__webglTexture,n.TEXTURE0+X);const De=i.get(te);if(te.version!==De.__version||ce===!0){t.activeTexture(n.TEXTURE0+X);const Ee=st.getPrimaries(st.workingColorSpace),Be=x.colorSpace===Mn?null:st.getPrimaries(x.colorSpace),ze=x.colorSpace===Mn||Ee===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let fe=y(x.image,!1,o.maxTextureSize);fe=ht(x,fe);const Ae=r.convert(x.format,x.colorSpace),Ie=r.convert(x.type);let Ne=C(x.internalFormat,Ae,Ie,x.colorSpace,x.isVideoTexture);Ge(oe,x);let Me;const qe=x.mipmaps,Oe=x.isVideoTexture!==!0,$e=De.__version===void 0||ce===!0,V=te.dataReady,J=O(x,fe);if(x.isDepthTexture)Ne=M(x.format===Ao,x.type),$e&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,Ne,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Ae,Ie,null));else if(x.isDataTexture)if(qe.length>0){Oe&&$e&&t.texStorage2D(n.TEXTURE_2D,J,Ne,qe[0].width,qe[0].height);for(let Z=0,ae=qe.length;Z<ae;Z++)Me=qe[Z],Oe?V&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Me.width,Me.height,Ae,Ie,Me.data):t.texImage2D(n.TEXTURE_2D,Z,Ne,Me.width,Me.height,0,Ae,Ie,Me.data);x.generateMipmaps=!1}else Oe?($e&&t.texStorage2D(n.TEXTURE_2D,J,Ne,fe.width,fe.height),V&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,Ae,Ie,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Ae,Ie,fe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Oe&&$e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,Ne,qe[0].width,qe[0].height,fe.depth);for(let Z=0,ae=qe.length;Z<ae;Z++)if(Me=qe[Z],x.format!==Zt)if(Ae!==null)if(Oe){if(V)if(x.layerUpdates.size>0){const xe=ic(Me.width,Me.height,x.format,x.type);for(const ye of x.layerUpdates){const Xe=Me.data.subarray(ye*xe/Me.data.BYTES_PER_ELEMENT,(ye+1)*xe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,ye,Me.width,Me.height,1,Ae,Xe)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Me.width,Me.height,fe.depth,Ae,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Ne,Me.width,Me.height,fe.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?V&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Me.width,Me.height,fe.depth,Ae,Ie,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,Ne,Me.width,Me.height,fe.depth,0,Ae,Ie,Me.data)}else{Oe&&$e&&t.texStorage2D(n.TEXTURE_2D,J,Ne,qe[0].width,qe[0].height);for(let Z=0,ae=qe.length;Z<ae;Z++)Me=qe[Z],x.format!==Zt?Ae!==null?Oe?V&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,Me.width,Me.height,Ae,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,Ne,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?V&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Me.width,Me.height,Ae,Ie,Me.data):t.texImage2D(n.TEXTURE_2D,Z,Ne,Me.width,Me.height,0,Ae,Ie,Me.data)}else if(x.isDataArrayTexture)if(Oe){if($e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,Ne,fe.width,fe.height,fe.depth),V)if(x.layerUpdates.size>0){const Z=ic(fe.width,fe.height,x.format,x.type);for(const ae of x.layerUpdates){const xe=fe.data.subarray(ae*Z/fe.data.BYTES_PER_ELEMENT,(ae+1)*Z/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,fe.width,fe.height,1,Ae,Ie,xe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ae,Ie,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,fe.width,fe.height,fe.depth,0,Ae,Ie,fe.data);else if(x.isData3DTexture)Oe?($e&&t.texStorage3D(n.TEXTURE_3D,J,Ne,fe.width,fe.height,fe.depth),V&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ae,Ie,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,fe.width,fe.height,fe.depth,0,Ae,Ie,fe.data);else if(x.isFramebufferTexture){if($e)if(Oe)t.texStorage2D(n.TEXTURE_2D,J,Ne,fe.width,fe.height);else{let Z=fe.width,ae=fe.height;for(let xe=0;xe<J;xe++)t.texImage2D(n.TEXTURE_2D,xe,Ne,Z,ae,0,Ae,Ie,null),Z>>=1,ae>>=1}}else if(qe.length>0){if(Oe&&$e){const Z=Ue(qe[0]);t.texStorage2D(n.TEXTURE_2D,J,Ne,Z.width,Z.height)}for(let Z=0,ae=qe.length;Z<ae;Z++)Me=qe[Z],Oe?V&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Ae,Ie,Me):t.texImage2D(n.TEXTURE_2D,Z,Ne,Ae,Ie,Me);x.generateMipmaps=!1}else if(Oe){if($e){const Z=Ue(fe);t.texStorage2D(n.TEXTURE_2D,J,Ne,Z.width,Z.height)}V&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Ie,fe)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Ae,Ie,fe);S(x)&&g(oe),De.__version=te.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function pe(b,x,X){if(x.image.length!==6)return;const oe=Qe(b,x),ce=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+X);const te=i.get(ce);if(ce.version!==te.__version||oe===!0){t.activeTexture(n.TEXTURE0+X);const De=st.getPrimaries(st.workingColorSpace),Ee=x.colorSpace===Mn?null:st.getPrimaries(x.colorSpace),Be=x.colorSpace===Mn||De===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const ze=x.isCompressedTexture||x.image[0].isCompressedTexture,fe=x.image[0]&&x.image[0].isDataTexture,Ae=[];for(let ae=0;ae<6;ae++)!ze&&!fe?Ae[ae]=y(x.image[ae],!0,o.maxCubemapSize):Ae[ae]=fe?x.image[ae].image:x.image[ae],Ae[ae]=ht(x,Ae[ae]);const Ie=Ae[0],Ne=r.convert(x.format,x.colorSpace),Me=r.convert(x.type),qe=C(x.internalFormat,Ne,Me,x.colorSpace),Oe=x.isVideoTexture!==!0,$e=te.__version===void 0||oe===!0,V=ce.dataReady;let J=O(x,Ie);Ge(n.TEXTURE_CUBE_MAP,x);let Z;if(ze){Oe&&$e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,J,qe,Ie.width,Ie.height);for(let ae=0;ae<6;ae++){Z=Ae[ae].mipmaps;for(let xe=0;xe<Z.length;xe++){const ye=Z[xe];x.format!==Zt?Ne!==null?Oe?V&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,0,0,ye.width,ye.height,Ne,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,qe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,0,0,ye.width,ye.height,Ne,Me,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,qe,ye.width,ye.height,0,Ne,Me,ye.data)}}}else{if(Z=x.mipmaps,Oe&&$e){Z.length>0&&J++;const ae=Ue(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,J,qe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(fe){Oe?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ae[ae].width,Ae[ae].height,Ne,Me,Ae[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,qe,Ae[ae].width,Ae[ae].height,0,Ne,Me,Ae[ae].data);for(let xe=0;xe<Z.length;xe++){const Xe=Z[xe].image[ae].image;Oe?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,0,0,Xe.width,Xe.height,Ne,Me,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,qe,Xe.width,Xe.height,0,Ne,Me,Xe.data)}}else{Oe?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ne,Me,Ae[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,qe,Ne,Me,Ae[ae]);for(let xe=0;xe<Z.length;xe++){const ye=Z[xe];Oe?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,0,0,Ne,Me,ye.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,qe,Ne,Me,ye.image[ae])}}}S(x)&&g(n.TEXTURE_CUBE_MAP),te.__version=ce.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function me(b,x,X,oe,ce,te){const De=r.convert(X.format,X.colorSpace),Ee=r.convert(X.type),Be=C(X.internalFormat,De,Ee,X.colorSpace),ze=i.get(x),fe=i.get(X);if(fe.__renderTarget=x,!ze.__hasExternalTextures){const Ae=Math.max(1,x.width>>te),Ie=Math.max(1,x.height>>te);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,te,Be,Ae,Ie,x.depth,0,De,Ee,null):t.texImage2D(ce,te,Be,Ae,Ie,0,De,Ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),et(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ce,fe.__webglTexture,0,nt(x)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,ce,fe.__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(b,x,X){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const oe=x.depthTexture,ce=oe&&oe.isDepthTexture?oe.type:null,te=M(x.stencilBuffer,ce),De=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=nt(x);et(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,te,x.width,x.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,te,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,te,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,b)}else{const oe=x.textures;for(let ce=0;ce<oe.length;ce++){const te=oe[ce],De=r.convert(te.format,te.colorSpace),Ee=r.convert(te.type),Be=C(te.internalFormat,De,Ee,te.colorSpace),ze=nt(x);X&&et(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Be,x.width,x.height):et(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,Be,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Be,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=i.get(x.depthTexture);oe.__renderTarget=x,(!oe.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),le(x.depthTexture,0);const ce=oe.__webglTexture,te=nt(x);if(x.depthTexture.format===Mo)et(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(x.depthTexture.format===Ao)et(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function je(b){const x=i.get(b),X=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const oe=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),oe){const ce=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,oe.removeEventListener("dispose",ce)};oe.addEventListener("dispose",ce),x.__depthDisposeCallback=ce}x.__boundDepthTexture=oe}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const oe=b.texture.mipmaps;oe&&oe.length>0?be(x.__webglFramebuffer[0],b):be(x.__webglFramebuffer,b)}else if(X){x.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[oe]),x.__webglDepthbuffer[oe]===void 0)x.__webglDepthbuffer[oe]=n.createRenderbuffer(),_e(x.__webglDepthbuffer[oe],b,!1);else{const ce=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,te)}}else{const oe=b.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),_e(x.__webglDepthbuffer,b,!1);else{const ce=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,te)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(b,x,X){const oe=i.get(b);x!==void 0&&me(oe.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&je(b)}function ft(b){const x=b.texture,X=i.get(b),oe=i.get(x);b.addEventListener("dispose",N);const ce=b.textures,te=b.isWebGLCubeRenderTarget===!0,De=ce.length>1;if(De||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=x.version,s.memory.textures++),te){X.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer[Ee]=[];for(let Be=0;Be<x.mipmaps.length;Be++)X.__webglFramebuffer[Ee][Be]=n.createFramebuffer()}else X.__webglFramebuffer[Ee]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer=[];for(let Ee=0;Ee<x.mipmaps.length;Ee++)X.__webglFramebuffer[Ee]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(De)for(let Ee=0,Be=ce.length;Ee<Be;Ee++){const ze=i.get(ce[Ee]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),s.memory.textures++)}if(b.samples>0&&et(b)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ce.length;Ee++){const Be=ce[Ee];X.__webglColorRenderbuffer[Ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[Ee]);const ze=r.convert(Be.format,Be.colorSpace),fe=r.convert(Be.type),Ae=C(Be.internalFormat,ze,fe,Be.colorSpace,b.isXRRenderTarget===!0),Ie=nt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Ae,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,X.__webglColorRenderbuffer[Ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(X.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,x);for(let Ee=0;Ee<6;Ee++)if(x.mipmaps&&x.mipmaps.length>0)for(let Be=0;Be<x.mipmaps.length;Be++)me(X.__webglFramebuffer[Ee][Be],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Be);else me(X.__webglFramebuffer[Ee],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);S(x)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let Ee=0,Be=ce.length;Ee<Be;Ee++){const ze=ce[Ee],fe=i.get(ze);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),Ge(n.TEXTURE_2D,ze),me(X.__webglFramebuffer,b,ze,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,0),S(ze)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let Ee=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ee=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,oe.__webglTexture),Ge(Ee,x),x.mipmaps&&x.mipmaps.length>0)for(let Be=0;Be<x.mipmaps.length;Be++)me(X.__webglFramebuffer[Be],b,x,n.COLOR_ATTACHMENT0,Ee,Be);else me(X.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,Ee,0);S(x)&&g(Ee),t.unbindTexture()}b.depthBuffer&&je(b)}function ct(b){const x=b.textures;for(let X=0,oe=x.length;X<oe;X++){const ce=x[X];if(S(ce)){const te=w(b),De=i.get(ce).__webglTexture;t.bindTexture(te,De),g(te),t.unbindTexture()}}}const Ke=[],k=[];function Nt(b){if(b.samples>0){if(et(b)===!1){const x=b.textures,X=b.width,oe=b.height;let ce=n.COLOR_BUFFER_BIT;const te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(b),Ee=x.length>1;if(Ee)for(let ze=0;ze<x.length;ze++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Be=b.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let ze=0;ze<x.length;ze++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),Ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[ze]);const fe=i.get(x[ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,X,oe,0,0,X,oe,ce,n.NEAREST),u===!0&&(Ke.length=0,k.length=0,Ke.push(n.COLOR_ATTACHMENT0+ze),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ke.push(te),k.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,k)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ee)for(let ze=0;ze<x.length;ze++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,De.__webglColorRenderbuffer[ze]);const fe=i.get(x[ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&u){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function nt(b){return Math.min(o.maxSamples,b.samples)}function et(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Fe(b){const x=s.render.frame;f.get(b)!==x&&(f.set(b,x),b.update())}function ht(b,x){const X=b.colorSpace,oe=b.format,ce=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||X!==Jn&&X!==Mn&&(st.getTransfer(X)===dt?(oe!==Zt||ce!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),x}function Ue(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=le,this.setTexture2DArray=j,this.setTexture3D=se,this.setTextureCube=Q,this.rebindTextures=Ve,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=me,this.useMultisampledRTT=et}function iM(n,e){function t(i,o=Mn){let r;const s=st.getTransfer(o);if(i===bn)return n.UNSIGNED_BYTE;if(i===Fa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ba)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pd)return n.BYTE;if(i===md)return n.SHORT;if(i===To)return n.UNSIGNED_SHORT;if(i===La)return n.INT;if(i===hi)return n.UNSIGNED_INT;if(i===Kt)return n.FLOAT;if(i===zt)return n.HALF_FLOAT;if(i===_d)return n.ALPHA;if(i===vd)return n.RGB;if(i===Zt)return n.RGBA;if(i===Mo)return n.DEPTH_COMPONENT;if(i===Ao)return n.DEPTH_STENCIL;if(i===Oa)return n.RED;if(i===ka)return n.RED_INTEGER;if(i===Sd)return n.RG;if(i===Ha)return n.RG_INTEGER;if(i===Ga)return n.RGBA_INTEGER;if(i===dr||i===fr||i===hr||i===pr)if(s===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ws||i===qs||i===$s||i===Xs)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ws)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qs)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$s)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xs)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ys||i===Js||i===Ks)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ys||i===Js)return s===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ks)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zs||i===Qs||i===js||i===ea||i===ta||i===na||i===ia||i===oa||i===ra||i===sa||i===aa||i===la||i===ua||i===ca)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zs)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qs)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===js)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ea)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ta)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===na)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ia)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oa)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ra)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sa)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===aa)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===la)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ua)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ca)return s===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mr||i===da||i===fa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===mr)return s===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ed||i===ha||i===pa||i===ma)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===mr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const oM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new Ot,r=e.properties.get(o);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ft({vertexShader:oM,fragmentShader:rM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new Fr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aM extends Zi{constructor(e,t){super();const i=this;let o=null,r=1,s=null,a="local-floor",u=1,c=null,f=null,h=null,p=null,m=null,E=null;const y=new sM,S=t.getContextAttributes();let g=null,w=null;const C=[],M=[],O=new We;let F=null;const N=new Yt;N.viewport=new vt;const H=new Yt;H.viewport=new vt;const A=[N,H],T=new RS;let B=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let pe=C[ee];return pe===void 0&&(pe=new fs,C[ee]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ee){let pe=C[ee];return pe===void 0&&(pe=new fs,C[ee]=pe),pe.getGripSpace()},this.getHand=function(ee){let pe=C[ee];return pe===void 0&&(pe=new fs,C[ee]=pe),pe.getHandSpace()};function Y(ee){const pe=M.indexOf(ee.inputSource);if(pe===-1)return;const me=C[pe];me!==void 0&&(me.update(ee.inputSource,ee.frame,c||s),me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ie(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",le);for(let ee=0;ee<C.length;ee++){const pe=M[ee];pe!==null&&(M[ee]=null,C[ee].disconnect(pe))}B=null,q=null,y.reset(),e.setRenderTarget(g),m=null,p=null,h=null,o=null,w=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(g=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",le),S.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(O),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,_e=null,be=null;S.depth&&(be=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=S.stencil?Ao:Mo,_e=S.stencil?xo:hi);const je={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};h=new XRWebGLBinding(o,t),p=h.createProjectionLayer(je),o.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new un(p.textureWidth,p.textureHeight,{format:Zt,type:bn,depthTexture:new Nd(p.textureWidth,p.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new un(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(u),c=null,s=await o.requestReferenceSpace(a),Qe.setContext(o),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function le(ee){for(let pe=0;pe<ee.removed.length;pe++){const me=ee.removed[pe],_e=M.indexOf(me);_e>=0&&(M[_e]=null,C[_e].disconnect(me))}for(let pe=0;pe<ee.added.length;pe++){const me=ee.added[pe];let _e=M.indexOf(me);if(_e===-1){for(let je=0;je<C.length;je++)if(je>=M.length){M.push(me),_e=je;break}else if(M[je]===null){M[je]=me,_e=je;break}if(_e===-1)break}const be=C[_e];be&&be.connect(me)}}const j=new $,se=new $;function Q(ee,pe,me){j.setFromMatrixPosition(pe.matrixWorld),se.setFromMatrixPosition(me.matrixWorld);const _e=j.distanceTo(se),be=pe.projectionMatrix.elements,je=me.projectionMatrix.elements,Ve=be[14]/(be[10]-1),ft=be[14]/(be[10]+1),ct=(be[9]+1)/be[5],Ke=(be[9]-1)/be[5],k=(be[8]-1)/be[0],Nt=(je[8]+1)/je[0],nt=Ve*k,et=Ve*Nt,Fe=_e/(-k+Nt),ht=Fe*-k;if(pe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ht),ee.translateZ(Fe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),be[10]===-1)ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ue=Ve+Fe,b=ft+Fe,x=nt-ht,X=et+(_e-ht),oe=ct*ft/b*Ue,ce=Ke*ft/b*Ue;ee.projectionMatrix.makePerspective(x,X,oe,ce,Ue,b),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ge(ee,pe){pe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(pe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let pe=ee.near,me=ee.far;y.texture!==null&&(y.depthNear>0&&(pe=y.depthNear),y.depthFar>0&&(me=y.depthFar)),T.near=H.near=N.near=pe,T.far=H.far=N.far=me,(B!==T.near||q!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),B=T.near,q=T.far),N.layers.mask=ee.layers.mask|2,H.layers.mask=ee.layers.mask|4,T.layers.mask=N.layers.mask|H.layers.mask;const _e=ee.parent,be=T.cameras;ge(T,_e);for(let je=0;je<be.length;je++)ge(be[je],_e);be.length===2?Q(T,N,H):T.projectionMatrix.copy(N.projectionMatrix),ve(ee,T,_e)};function ve(ee,pe,me){me===null?ee.matrix.copy(pe.matrixWorld):(ee.matrix.copy(me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(pe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=_a*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&m===null))return u},this.setFoveation=function(ee){u=ee,p!==null&&(p.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(T)};let Pe=null;function Ge(ee,pe){if(f=pe.getViewerPose(c||s),E=pe,f!==null){const me=f.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let _e=!1;me.length!==T.cameras.length&&(T.cameras.length=0,_e=!0);for(let Ve=0;Ve<me.length;Ve++){const ft=me[Ve];let ct=null;if(m!==null)ct=m.getViewport(ft);else{const k=h.getViewSubImage(p,ft);ct=k.viewport,Ve===0&&(e.setRenderTargetTextures(w,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(w))}let Ke=A[Ve];Ke===void 0&&(Ke=new Yt,Ke.layers.enable(Ve),Ke.viewport=new vt,A[Ve]=Ke),Ke.matrix.fromArray(ft.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(ft.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(ct.x,ct.y,ct.width,ct.height),Ve===0&&(T.matrix.copy(Ke.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),_e===!0&&T.cameras.push(Ke)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&h){const Ve=h.getDepthInformation(me[0]);Ve&&Ve.isValid&&Ve.texture&&y.init(e,Ve,o.renderState)}}for(let me=0;me<C.length;me++){const _e=M[me],be=C[me];_e!==null&&be!==void 0&&be.update(_e,pe,c||s)}Pe&&Pe(ee,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),E=null}const Qe=new Ld;Qe.setAnimationLoop(Ge),this.setAnimationLoop=function(ee){Pe=ee},this.dispose=function(){}}}const ri=new cn,lM=new yt;function uM(n,e){function t(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function i(S,g){g.color.getRGB(S.fogColor.value,Id(n)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function o(S,g,w,C,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(S,g):g.isMeshToonMaterial?(r(S,g),h(S,g)):g.isMeshPhongMaterial?(r(S,g),f(S,g)):g.isMeshStandardMaterial?(r(S,g),p(S,g),g.isMeshPhysicalMaterial&&m(S,g,M)):g.isMeshMatcapMaterial?(r(S,g),E(S,g)):g.isMeshDepthMaterial?r(S,g):g.isMeshDistanceMaterial?(r(S,g),y(S,g)):g.isMeshNormalMaterial?r(S,g):g.isLineBasicMaterial?(s(S,g),g.isLineDashedMaterial&&a(S,g)):g.isPointsMaterial?u(S,g,w,C):g.isSpriteMaterial?c(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,t(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,t(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Bt&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,t(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Bt&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,t(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,t(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const w=e.get(g),C=w.envMap,M=w.envMapRotation;C&&(S.envMap.value=C,ri.copy(M),ri.x*=-1,ri.y*=-1,ri.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),S.envMapRotation.value.setFromMatrix4(lM.makeRotationFromEuler(ri)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,S.aoMapTransform))}function s(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,t(g.map,S.mapTransform))}function a(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function u(S,g,w,C){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*w,S.scale.value=C*.5,g.map&&(S.map.value=g.map,t(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function c(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,t(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function f(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function h(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function p(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function m(S,g,w){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bt&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,g){g.matcap&&(S.matcap.value=g.matcap)}function y(S,g){const w=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function cM(n,e,t,i){let o={},r={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(w,C){const M=C.program;i.uniformBlockBinding(w,M)}function c(w,C){let M=o[w.id];M===void 0&&(E(w),M=f(w),o[w.id]=M,w.addEventListener("dispose",S));const O=C.program;i.updateUBOMapping(w,O);const F=e.render.frame;r[w.id]!==F&&(p(w),r[w.id]=F)}function f(w){const C=h();w.__bindingPointIndex=C;const M=n.createBuffer(),O=w.__size,F=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,O,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,M),M}function h(){for(let w=0;w<a;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const C=o[w.id],M=w.uniforms,O=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let F=0,N=M.length;F<N;F++){const H=Array.isArray(M[F])?M[F]:[M[F]];for(let A=0,T=H.length;A<T;A++){const B=H[A];if(m(B,F,A,O)===!0){const q=B.__offset,Y=Array.isArray(B.value)?B.value:[B.value];let ie=0;for(let le=0;le<Y.length;le++){const j=Y[le],se=y(j);typeof j=="number"||typeof j=="boolean"?(B.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,q+ie,B.__data)):j.isMatrix3?(B.__data[0]=j.elements[0],B.__data[1]=j.elements[1],B.__data[2]=j.elements[2],B.__data[3]=0,B.__data[4]=j.elements[3],B.__data[5]=j.elements[4],B.__data[6]=j.elements[5],B.__data[7]=0,B.__data[8]=j.elements[6],B.__data[9]=j.elements[7],B.__data[10]=j.elements[8],B.__data[11]=0):(j.toArray(B.__data,ie),ie+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,C,M,O){const F=w.value,N=C+"_"+M;if(O[N]===void 0)return typeof F=="number"||typeof F=="boolean"?O[N]=F:O[N]=F.clone(),!0;{const H=O[N];if(typeof F=="number"||typeof F=="boolean"){if(H!==F)return O[N]=F,!0}else if(H.equals(F)===!1)return H.copy(F),!0}return!1}function E(w){const C=w.uniforms;let M=0;const O=16;for(let N=0,H=C.length;N<H;N++){const A=Array.isArray(C[N])?C[N]:[C[N]];for(let T=0,B=A.length;T<B;T++){const q=A[T],Y=Array.isArray(q.value)?q.value:[q.value];for(let ie=0,le=Y.length;ie<le;ie++){const j=Y[ie],se=y(j),Q=M%O,ge=Q%se.boundary,ve=Q+ge;M+=ge,ve!==0&&O-ve<se.storage&&(M+=O-ve),q.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=M,M+=se.storage}}}const F=M%O;return F>0&&(M+=O-F),w.__size=M,w.__cache={},this}function y(w){const C={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(C.boundary=4,C.storage=4):w.isVector2?(C.boundary=8,C.storage=8):w.isVector3||w.isColor?(C.boundary=16,C.storage=12):w.isVector4?(C.boundary=16,C.storage=16):w.isMatrix3?(C.boundary=48,C.storage=48):w.isMatrix4?(C.boundary=64,C.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),C}function S(w){const C=w.target;C.removeEventListener("dispose",S);const M=s.indexOf(C.__bindingPointIndex);s.splice(M,1),n.deleteBuffer(o[C.id]),delete o[C.id],delete r[C.id]}function g(){for(const w in o)n.deleteBuffer(o[w]);s=[],o={},r={}}return{bind:u,update:c,dispose:g}}class dM{constructor(e={}){const{canvas:t=B0(),context:i=null,depth:o=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const E=new Uint32Array(4),y=new Int32Array(4);let S=null,g=null;const w=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let O=!1;this._outputColorSpace=Xt;let F=0,N=0,H=null,A=-1,T=null;const B=new vt,q=new vt;let Y=null;const ie=new ot(0);let le=0,j=t.width,se=t.height,Q=1,ge=null,ve=null;const Pe=new vt(0,0,j,se),Ge=new vt(0,0,j,se);let Qe=!1;const ee=new Dd;let pe=!1,me=!1;const _e=new yt,be=new yt,je=new $,Ve=new vt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Ke(){return H===null?Q:1}let k=i;function Nt(v,I){return t.getContext(v,I)}try{const v={alpha:!0,depth:o,stencil:r,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ua}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ye,!1),k===null){const I="webgl2";if(k=Nt(I,v),k===null)throw Nt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let nt,et,Fe,ht,Ue,b,x,X,oe,ce,te,De,Ee,Be,ze,fe,Ae,Ie,Ne,Me,qe,Oe,$e,V;function J(){nt=new yT(k),nt.init(),Oe=new iM(k,nt),et=new pT(k,nt,e,Oe),Fe=new tM(k,nt),et.reverseDepthBuffer&&p&&Fe.buffers.depth.setReversed(!0),ht=new MT(k),Ue=new Vx,b=new nM(k,nt,Fe,Ue,et,Oe,ht),x=new gT(M),X=new ET(M),oe=new PS(k),$e=new fT(k,oe),ce=new TT(k,oe,ht,$e),te=new CT(k,ce,oe,ht),Ne=new AT(k,et,b),fe=new mT(Ue),De=new Gx(M,x,X,nt,et,$e,fe),Ee=new uM(M,Ue),Be=new Wx,ze=new Kx(nt),Ie=new dT(M,x,X,Fe,te,m,u),Ae=new jx(M,te,et),V=new cM(k,ht,et,Fe),Me=new hT(k,nt,ht),qe=new xT(k,nt,ht),ht.programs=De.programs,M.capabilities=et,M.extensions=nt,M.properties=Ue,M.renderLists=Be,M.shadowMap=Ae,M.state=Fe,M.info=ht}J();const Z=new aM(M,k);this.xr=Z,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const v=nt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=nt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(v){v!==void 0&&(Q=v,this.setSize(j,se,!1))},this.getSize=function(v){return v.set(j,se)},this.setSize=function(v,I,P=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=v,se=I,t.width=Math.floor(v*Q),t.height=Math.floor(I*Q),P===!0&&(t.style.width=v+"px",t.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(j*Q,se*Q).floor()},this.setDrawingBufferSize=function(v,I,P){j=v,se=I,Q=P,t.width=Math.floor(v*P),t.height=Math.floor(I*P),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(B)},this.getViewport=function(v){return v.copy(Pe)},this.setViewport=function(v,I,P,L){v.isVector4?Pe.set(v.x,v.y,v.z,v.w):Pe.set(v,I,P,L),Fe.viewport(B.copy(Pe).multiplyScalar(Q).round())},this.getScissor=function(v){return v.copy(Ge)},this.setScissor=function(v,I,P,L){v.isVector4?Ge.set(v.x,v.y,v.z,v.w):Ge.set(v,I,P,L),Fe.scissor(q.copy(Ge).multiplyScalar(Q).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(v){Fe.setScissorTest(Qe=v)},this.setOpaqueSort=function(v){ge=v},this.setTransparentSort=function(v){ve=v},this.getClearColor=function(v){return v.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,P=!0){let L=0;if(v){let D=!1;if(H!==null){const G=H.texture.format;D=G===Ga||G===Ha||G===ka}if(D){const G=H.texture.type,z=G===bn||G===hi||G===To||G===xo||G===Fa||G===Ba,W=Ie.getClearColor(),K=Ie.getClearAlpha(),re=W.r,ne=W.g,ue=W.b;z?(E[0]=re,E[1]=ne,E[2]=ue,E[3]=K,k.clearBufferuiv(k.COLOR,0,E)):(y[0]=re,y[1]=ne,y[2]=ue,y[3]=K,k.clearBufferiv(k.COLOR,0,y))}else L|=k.COLOR_BUFFER_BIT}I&&(L|=k.DEPTH_BUFFER_BIT),P&&(L|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Ie.dispose(),Be.dispose(),ze.dispose(),Ue.dispose(),x.dispose(),X.dispose(),te.dispose(),$e.dispose(),V.dispose(),De.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Lo),Z.removeEventListener("sessionend",Fo),pn.stop()};function ae(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const v=ht.autoReset,I=Ae.enabled,P=Ae.autoUpdate,L=Ae.needsUpdate,D=Ae.type;J(),ht.autoReset=v,Ae.enabled=I,Ae.autoUpdate=P,Ae.needsUpdate=L,Ae.type=D}function ye(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Xe(v){const I=v.target;I.removeEventListener("dispose",Xe),_t(I)}function _t(v){Ct(v),Ue.remove(v)}function Ct(v){const I=Ue.get(v).programs;I!==void 0&&(I.forEach(function(P){De.releaseProgram(P)}),v.isShaderMaterial&&De.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,P,L,D,G){I===null&&(I=ft);const z=D.isMesh&&D.matrixWorld.determinant()<0,W=Or(v,I,P,L,D);Fe.setMaterial(L,z);let K=P.index,re=1;if(L.wireframe===!0){if(K=ce.getWireframeAttribute(P),K===void 0)return;re=2}const ne=P.drawRange,ue=P.attributes.position;let de=ne.start*re,he=(ne.start+ne.count)*re;G!==null&&(de=Math.max(de,G.start*re),he=Math.min(he,(G.start+G.count)*re)),K!==null?(de=Math.max(de,0),he=Math.min(he,K.count)):ue!=null&&(de=Math.max(de,0),he=Math.min(he,ue.count));const Re=he-de;if(Re<0||Re===1/0)return;$e.setup(D,L,W,P,K);let ke,Le=Me;if(K!==null&&(ke=oe.get(K),Le=qe,Le.setIndex(ke)),D.isMesh)L.wireframe===!0?(Fe.setLineWidth(L.wireframeLinewidth*Ke()),Le.setMode(k.LINES)):Le.setMode(k.TRIANGLES);else if(D.isLine){let Ce=L.linewidth;Ce===void 0&&(Ce=1),Fe.setLineWidth(Ce*Ke()),D.isLineSegments?Le.setMode(k.LINES):D.isLineLoop?Le.setMode(k.LINE_LOOP):Le.setMode(k.LINE_STRIP)}else D.isPoints?Le.setMode(k.POINTS):D.isSprite&&Le.setMode(k.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Le.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))Le.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Ce=D._multiDrawStarts,Ye=D._multiDrawCounts,we=D._multiDrawCount,ut=K?oe.get(K).bytesPerElement:1,Tt=Ue.get(L).currentProgram.getUniforms();for(let rt=0;rt<we;rt++)Tt.setValue(k,"_gl_DrawID",rt),Le.render(Ce[rt]/ut,Ye[rt])}else if(D.isInstancedMesh)Le.renderInstances(de,Re,D.count);else if(P.isInstancedBufferGeometry){const Ce=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,Ye=Math.min(P.instanceCount,Ce);Le.renderInstances(de,Re,Ye)}else Le.render(de,Re)};function lt(v,I,P){v.transparent===!0&&v.side===xn&&v.forceSinglePass===!1?(v.side=Bt,v.needsUpdate=!0,gi(v,I,P),v.side=Yn,v.needsUpdate=!0,gi(v,I,P),v.side=xn):gi(v,I,P)}this.compile=function(v,I,P=null){P===null&&(P=v),g=ze.get(P),g.init(I),C.push(g),P.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(g.pushLight(D),D.castShadow&&g.pushShadow(D))}),v!==P&&v.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(g.pushLight(D),D.castShadow&&g.pushShadow(D))}),g.setupLights();const L=new Set;return v.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const G=D.material;if(G)if(Array.isArray(G))for(let z=0;z<G.length;z++){const W=G[z];lt(W,P,D),L.add(W)}else lt(G,P,D),L.add(G)}),g=C.pop(),L},this.compileAsync=function(v,I,P=null){const L=this.compile(v,I,P);return new Promise(D=>{function G(){if(L.forEach(function(z){Ue.get(z).currentProgram.isReady()&&L.delete(z)}),L.size===0){D(v);return}setTimeout(G,10)}nt.get("KHR_parallel_shader_compile")!==null?G():setTimeout(G,10)})};let Ht=null;function tn(v){Ht&&Ht(v)}function Lo(){pn.stop()}function Fo(){pn.start()}const pn=new Ld;pn.setAnimationLoop(tn),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(v){Ht=v,Z.setAnimationLoop(v),v===null?pn.stop():pn.start()},Z.addEventListener("sessionstart",Lo),Z.addEventListener("sessionend",Fo),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(I),I=Z.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,I,H),g=ze.get(v,C.length),g.init(I),C.push(g),be.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ee.setFromProjectionMatrix(be),me=this.localClippingEnabled,pe=fe.init(this.clippingPlanes,me),S=Be.get(v,w.length),S.init(),w.push(S),Z.enabled===!0&&Z.isPresenting===!0){const G=M.xr.getDepthSensingMesh();G!==null&&to(G,I,-1/0,M.sortObjects)}to(v,I,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(ge,ve),ct=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,ct&&Ie.addToRenderList(S,v),this.info.render.frame++,pe===!0&&fe.beginShadows();const P=g.state.shadowsArray;Ae.render(P,v,I),pe===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const L=S.opaque,D=S.transmissive;if(g.setupLights(),I.isArrayCamera){const G=I.cameras;if(D.length>0)for(let z=0,W=G.length;z<W;z++){const K=G[z];Bo(L,D,v,K)}ct&&Ie.render(v);for(let z=0,W=G.length;z<W;z++){const K=G[z];no(S,v,K,K.viewport)}}else D.length>0&&Bo(L,D,v,I),ct&&Ie.render(v),no(S,v,I);H!==null&&N===0&&(b.updateMultisampleRenderTarget(H),b.updateRenderTargetMipmap(H)),v.isScene===!0&&v.onAfterRender(M,v,I),$e.resetDefaultState(),A=-1,T=null,C.pop(),C.length>0?(g=C[C.length-1],pe===!0&&fe.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function to(v,I,P,L){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)P=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)g.pushLight(v),v.castShadow&&g.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ee.intersectsSprite(v)){L&&Ve.setFromMatrixPosition(v.matrixWorld).applyMatrix4(be);const z=te.update(v),W=v.material;W.visible&&S.push(v,z,W,P,Ve.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ee.intersectsObject(v))){const z=te.update(v),W=v.material;if(L&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ve.copy(v.boundingSphere.center)):(z.boundingSphere===null&&z.computeBoundingSphere(),Ve.copy(z.boundingSphere.center)),Ve.applyMatrix4(v.matrixWorld).applyMatrix4(be)),Array.isArray(W)){const K=z.groups;for(let re=0,ne=K.length;re<ne;re++){const ue=K[re],de=W[ue.materialIndex];de&&de.visible&&S.push(v,z,de,P,Ve.z,ue)}}else W.visible&&S.push(v,z,W,P,Ve.z,null)}}const G=v.children;for(let z=0,W=G.length;z<W;z++)to(G[z],I,P,L)}function no(v,I,P,L){const D=v.opaque,G=v.transmissive,z=v.transparent;g.setupLightsView(P),pe===!0&&fe.setGlobalState(M.clippingPlanes,P),L&&Fe.viewport(B.copy(L)),D.length>0&&mi(D,I,P),G.length>0&&mi(G,I,P),z.length>0&&mi(z,I,P),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Bo(v,I,P,L){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[L.id]===void 0&&(g.state.transmissionRenderTarget[L.id]=new un(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?zt:bn,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const G=g.state.transmissionRenderTarget[L.id],z=L.viewport||B;G.setSize(z.z*M.transmissionResolutionScale,z.w*M.transmissionResolutionScale);const W=M.getRenderTarget();M.setRenderTarget(G),M.getClearColor(ie),le=M.getClearAlpha(),le<1&&M.setClearColor(16777215,.5),M.clear(),ct&&Ie.render(P);const K=M.toneMapping;M.toneMapping=Xn;const re=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),g.setupLightsView(L),pe===!0&&fe.setGlobalState(M.clippingPlanes,L),mi(v,P,L),b.updateMultisampleRenderTarget(G),b.updateRenderTargetMipmap(G),nt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let ue=0,de=I.length;ue<de;ue++){const he=I[ue],Re=he.object,ke=he.geometry,Le=he.material,Ce=he.group;if(Le.side===xn&&Re.layers.test(L.layers)){const Ye=Le.side;Le.side=Bt,Le.needsUpdate=!0,Oo(Re,P,L,ke,Le,Ce),Le.side=Ye,Le.needsUpdate=!0,ne=!0}}ne===!0&&(b.updateMultisampleRenderTarget(G),b.updateRenderTargetMipmap(G))}M.setRenderTarget(W),M.setClearColor(ie,le),re!==void 0&&(L.viewport=re),M.toneMapping=K}function mi(v,I,P){const L=I.isScene===!0?I.overrideMaterial:null;for(let D=0,G=v.length;D<G;D++){const z=v[D],W=z.object,K=z.geometry,re=z.group;let ne=z.material;ne.allowOverride===!0&&L!==null&&(ne=L),W.layers.test(P.layers)&&Oo(W,I,P,K,ne,re)}}function Oo(v,I,P,L,D,G){v.onBeforeRender(M,I,P,L,D,G),v.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),D.onBeforeRender(M,I,P,L,v,G),D.transparent===!0&&D.side===xn&&D.forceSinglePass===!1?(D.side=Bt,D.needsUpdate=!0,M.renderBufferDirect(P,I,L,D,v,G),D.side=Yn,D.needsUpdate=!0,M.renderBufferDirect(P,I,L,D,v,G),D.side=xn):M.renderBufferDirect(P,I,L,D,v,G),v.onAfterRender(M,I,P,L,D,G)}function gi(v,I,P){I.isScene!==!0&&(I=ft);const L=Ue.get(v),D=g.state.lights,G=g.state.shadowsArray,z=D.state.version,W=De.getParameters(v,D.state,G,I,P),K=De.getProgramCacheKey(W);let re=L.programs;L.environment=v.isMeshStandardMaterial?I.environment:null,L.fog=I.fog,L.envMap=(v.isMeshStandardMaterial?X:x).get(v.envMap||L.environment),L.envMapRotation=L.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,re===void 0&&(v.addEventListener("dispose",Xe),re=new Map,L.programs=re);let ne=re.get(K);if(ne!==void 0){if(L.currentProgram===ne&&L.lightsStateVersion===z)return oo(v,W),ne}else W.uniforms=De.getUniforms(v),v.onBeforeCompile(W,M),ne=De.acquireProgram(W,K),re.set(K,ne),L.uniforms=W.uniforms;const ue=L.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ue.clippingPlanes=fe.uniform),oo(v,W),L.needsLights=Ln(v),L.lightsStateVersion=z,L.needsLights&&(ue.ambientLightColor.value=D.state.ambient,ue.lightProbe.value=D.state.probe,ue.directionalLights.value=D.state.directional,ue.directionalLightShadows.value=D.state.directionalShadow,ue.spotLights.value=D.state.spot,ue.spotLightShadows.value=D.state.spotShadow,ue.rectAreaLights.value=D.state.rectArea,ue.ltc_1.value=D.state.rectAreaLTC1,ue.ltc_2.value=D.state.rectAreaLTC2,ue.pointLights.value=D.state.point,ue.pointLightShadows.value=D.state.pointShadow,ue.hemisphereLights.value=D.state.hemi,ue.directionalShadowMap.value=D.state.directionalShadowMap,ue.directionalShadowMatrix.value=D.state.directionalShadowMatrix,ue.spotShadowMap.value=D.state.spotShadowMap,ue.spotLightMatrix.value=D.state.spotLightMatrix,ue.spotLightMap.value=D.state.spotLightMap,ue.pointShadowMap.value=D.state.pointShadowMap,ue.pointShadowMatrix.value=D.state.pointShadowMatrix),L.currentProgram=ne,L.uniformsList=null,ne}function io(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=_r.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function oo(v,I){const P=Ue.get(v);P.outputColorSpace=I.outputColorSpace,P.batching=I.batching,P.batchingColor=I.batchingColor,P.instancing=I.instancing,P.instancingColor=I.instancingColor,P.instancingMorph=I.instancingMorph,P.skinning=I.skinning,P.morphTargets=I.morphTargets,P.morphNormals=I.morphNormals,P.morphColors=I.morphColors,P.morphTargetsCount=I.morphTargetsCount,P.numClippingPlanes=I.numClippingPlanes,P.numIntersection=I.numClipIntersection,P.vertexAlphas=I.vertexAlphas,P.vertexTangents=I.vertexTangents,P.toneMapping=I.toneMapping}function Or(v,I,P,L,D){I.isScene!==!0&&(I=ft),b.resetTextureUnits();const G=I.fog,z=L.isMeshStandardMaterial?I.environment:null,W=H===null?M.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Jn,K=(L.isMeshStandardMaterial?X:x).get(L.envMap||z),re=L.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,ne=!!P.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),ue=!!P.morphAttributes.position,de=!!P.morphAttributes.normal,he=!!P.morphAttributes.color;let Re=Xn;L.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Re=M.toneMapping);const ke=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Le=ke!==void 0?ke.length:0,Ce=Ue.get(L),Ye=g.state.lights;if(pe===!0&&(me===!0||v!==T)){const pt=v===T&&L.id===A;fe.setState(L,v,pt)}let we=!1;L.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Ye.state.version||Ce.outputColorSpace!==W||D.isBatchedMesh&&Ce.batching===!1||!D.isBatchedMesh&&Ce.batching===!0||D.isBatchedMesh&&Ce.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Ce.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Ce.instancing===!1||!D.isInstancedMesh&&Ce.instancing===!0||D.isSkinnedMesh&&Ce.skinning===!1||!D.isSkinnedMesh&&Ce.skinning===!0||D.isInstancedMesh&&Ce.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Ce.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Ce.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Ce.instancingMorph===!1&&D.morphTexture!==null||Ce.envMap!==K||L.fog===!0&&Ce.fog!==G||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==fe.numPlanes||Ce.numIntersection!==fe.numIntersection)||Ce.vertexAlphas!==re||Ce.vertexTangents!==ne||Ce.morphTargets!==ue||Ce.morphNormals!==de||Ce.morphColors!==he||Ce.toneMapping!==Re||Ce.morphTargetsCount!==Le)&&(we=!0):(we=!0,Ce.__version=L.version);let ut=Ce.currentProgram;we===!0&&(ut=gi(L,I,D));let Tt=!1,rt=!1,it=!1;const He=ut.getUniforms(),St=Ce.uniforms;if(Fe.useProgram(ut.program)&&(Tt=!0,rt=!0,it=!0),L.id!==A&&(A=L.id,rt=!0),Tt||T!==v){Fe.buffers.depth.getReversed()?(_e.copy(v.projectionMatrix),k0(_e),H0(_e),He.setValue(k,"projectionMatrix",_e)):He.setValue(k,"projectionMatrix",v.projectionMatrix),He.setValue(k,"viewMatrix",v.matrixWorldInverse);const xt=He.map.cameraPosition;xt!==void 0&&xt.setValue(k,je.setFromMatrixPosition(v.matrixWorld)),et.logarithmicDepthBuffer&&He.setValue(k,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&He.setValue(k,"isOrthographic",v.isOrthographicCamera===!0),T!==v&&(T=v,rt=!0,it=!0)}if(D.isSkinnedMesh){He.setOptional(k,D,"bindMatrix"),He.setOptional(k,D,"bindMatrixInverse");const pt=D.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),He.setValue(k,"boneTexture",pt.boneTexture,b))}D.isBatchedMesh&&(He.setOptional(k,D,"batchingTexture"),He.setValue(k,"batchingTexture",D._matricesTexture,b),He.setOptional(k,D,"batchingIdTexture"),He.setValue(k,"batchingIdTexture",D._indirectTexture,b),He.setOptional(k,D,"batchingColorTexture"),D._colorsTexture!==null&&He.setValue(k,"batchingColorTexture",D._colorsTexture,b));const Rt=P.morphAttributes;if((Rt.position!==void 0||Rt.normal!==void 0||Rt.color!==void 0)&&Ne.update(D,P,ut),(rt||Ce.receiveShadow!==D.receiveShadow)&&(Ce.receiveShadow=D.receiveShadow,He.setValue(k,"receiveShadow",D.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(St.envMap.value=K,St.flipEnvMap.value=K.isCubeTexture&&K.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&I.environment!==null&&(St.envMapIntensity.value=I.environmentIntensity),rt&&(He.setValue(k,"toneMappingExposure",M.toneMappingExposure),Ce.needsLights&&mn(St,it),G&&L.fog===!0&&Ee.refreshFogUniforms(St,G),Ee.refreshMaterialUniforms(St,L,Q,se,g.state.transmissionRenderTarget[v.id]),_r.upload(k,io(Ce),St,b)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(_r.upload(k,io(Ce),St,b),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&He.setValue(k,"center",D.center),He.setValue(k,"modelViewMatrix",D.modelViewMatrix),He.setValue(k,"normalMatrix",D.normalMatrix),He.setValue(k,"modelMatrix",D.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const pt=L.uniformsGroups;for(let xt=0,kr=pt.length;xt<kr;xt++){const Qn=pt[xt];V.update(Qn,ut),V.bind(Qn,ut)}}return ut}function mn(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function Ln(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(v,I,P){const L=Ue.get(v);L.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,L.__autoAllocateDepthBuffer===!1&&(L.__useRenderToTexture=!1),Ue.get(v.texture).__webglTexture=I,Ue.get(v.depthTexture).__webglTexture=L.__autoAllocateDepthBuffer?void 0:P,L.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const P=Ue.get(v);P.__webglFramebuffer=I,P.__useDefaultFramebuffer=I===void 0};const _=k.createFramebuffer();this.setRenderTarget=function(v,I=0,P=0){H=v,F=I,N=P;let L=!0,D=null,G=!1,z=!1;if(v){const K=Ue.get(v);if(K.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(k.FRAMEBUFFER,null),L=!1;else if(K.__webglFramebuffer===void 0)b.setupRenderTarget(v);else if(K.__hasExternalTextures)b.rebindTextures(v,Ue.get(v.texture).__webglTexture,Ue.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const ue=v.depthTexture;if(K.__boundDepthTexture!==ue){if(ue!==null&&Ue.has(ue)&&(v.width!==ue.image.width||v.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(v)}}const re=v.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(z=!0);const ne=Ue.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ne[I])?D=ne[I][P]:D=ne[I],G=!0):v.samples>0&&b.useMultisampledRTT(v)===!1?D=Ue.get(v).__webglMultisampledFramebuffer:Array.isArray(ne)?D=ne[P]:D=ne,B.copy(v.viewport),q.copy(v.scissor),Y=v.scissorTest}else B.copy(Pe).multiplyScalar(Q).floor(),q.copy(Ge).multiplyScalar(Q).floor(),Y=Qe;if(P!==0&&(D=_),Fe.bindFramebuffer(k.FRAMEBUFFER,D)&&L&&Fe.drawBuffers(v,D),Fe.viewport(B),Fe.scissor(q),Fe.setScissorTest(Y),G){const K=Ue.get(v.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+I,K.__webglTexture,P)}else if(z){const K=Ue.get(v.texture),re=I;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,K.__webglTexture,P,re)}else if(v!==null&&P!==0){const K=Ue.get(v.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,K.__webglTexture,P)}A=-1},this.readRenderTargetPixels=function(v,I,P,L,D,G,z){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let W=Ue.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&z!==void 0&&(W=W[z]),W){Fe.bindFramebuffer(k.FRAMEBUFFER,W);try{const K=v.texture,re=K.format,ne=K.type;if(!et.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-L&&P>=0&&P<=v.height-D&&k.readPixels(I,P,L,D,Oe.convert(re),Oe.convert(ne),G)}finally{const K=H!==null?Ue.get(H).__webglFramebuffer:null;Fe.bindFramebuffer(k.FRAMEBUFFER,K)}}},this.readRenderTargetPixelsAsync=async function(v,I,P,L,D,G,z){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let W=Ue.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&z!==void 0&&(W=W[z]),W)if(I>=0&&I<=v.width-L&&P>=0&&P<=v.height-D){Fe.bindFramebuffer(k.FRAMEBUFFER,W);const K=v.texture,re=K.format,ne=K.type;if(!et.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ue),k.bufferData(k.PIXEL_PACK_BUFFER,G.byteLength,k.STREAM_READ),k.readPixels(I,P,L,D,Oe.convert(re),Oe.convert(ne),0);const de=H!==null?Ue.get(H).__webglFramebuffer:null;Fe.bindFramebuffer(k.FRAMEBUFFER,de);const he=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await O0(k,he,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ue),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,G),k.deleteBuffer(ue),k.deleteSync(he),G}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,P=0){const L=Math.pow(2,-P),D=Math.floor(v.image.width*L),G=Math.floor(v.image.height*L),z=I!==null?I.x:0,W=I!==null?I.y:0;b.setTexture2D(v,0),k.copyTexSubImage2D(k.TEXTURE_2D,P,0,0,z,W,D,G),Fe.unbindTexture()};const R=k.createFramebuffer(),U=k.createFramebuffer();this.copyTextureToTexture=function(v,I,P=null,L=null,D=0,G=null){G===null&&(D!==0?(gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),G=D,D=0):G=0);let z,W,K,re,ne,ue,de,he,Re;const ke=v.isCompressedTexture?v.mipmaps[G]:v.image;if(P!==null)z=P.max.x-P.min.x,W=P.max.y-P.min.y,K=P.isBox3?P.max.z-P.min.z:1,re=P.min.x,ne=P.min.y,ue=P.isBox3?P.min.z:0;else{const Rt=Math.pow(2,-D);z=Math.floor(ke.width*Rt),W=Math.floor(ke.height*Rt),v.isDataArrayTexture?K=ke.depth:v.isData3DTexture?K=Math.floor(ke.depth*Rt):K=1,re=0,ne=0,ue=0}L!==null?(de=L.x,he=L.y,Re=L.z):(de=0,he=0,Re=0);const Le=Oe.convert(I.format),Ce=Oe.convert(I.type);let Ye;I.isData3DTexture?(b.setTexture3D(I,0),Ye=k.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(b.setTexture2DArray(I,0),Ye=k.TEXTURE_2D_ARRAY):(b.setTexture2D(I,0),Ye=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,I.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,I.unpackAlignment);const we=k.getParameter(k.UNPACK_ROW_LENGTH),ut=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Tt=k.getParameter(k.UNPACK_SKIP_PIXELS),rt=k.getParameter(k.UNPACK_SKIP_ROWS),it=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ke.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ke.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,re),k.pixelStorei(k.UNPACK_SKIP_ROWS,ne),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ue);const He=v.isDataArrayTexture||v.isData3DTexture,St=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const Rt=Ue.get(v),pt=Ue.get(I),xt=Ue.get(Rt.__renderTarget),kr=Ue.get(pt.__renderTarget);Fe.bindFramebuffer(k.READ_FRAMEBUFFER,xt.__webglFramebuffer),Fe.bindFramebuffer(k.DRAW_FRAMEBUFFER,kr.__webglFramebuffer);for(let Qn=0;Qn<K;Qn++)He&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ue.get(v).__webglTexture,D,ue+Qn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ue.get(I).__webglTexture,G,Re+Qn)),k.blitFramebuffer(re,ne,z,W,de,he,z,W,k.DEPTH_BUFFER_BIT,k.NEAREST);Fe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(D!==0||v.isRenderTargetTexture||Ue.has(v)){const Rt=Ue.get(v),pt=Ue.get(I);Fe.bindFramebuffer(k.READ_FRAMEBUFFER,R),Fe.bindFramebuffer(k.DRAW_FRAMEBUFFER,U);for(let xt=0;xt<K;xt++)He?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Rt.__webglTexture,D,ue+xt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Rt.__webglTexture,D),St?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,pt.__webglTexture,G,Re+xt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pt.__webglTexture,G),D!==0?k.blitFramebuffer(re,ne,z,W,de,he,z,W,k.COLOR_BUFFER_BIT,k.NEAREST):St?k.copyTexSubImage3D(Ye,G,de,he,Re+xt,re,ne,z,W):k.copyTexSubImage2D(Ye,G,de,he,re,ne,z,W);Fe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else St?v.isDataTexture||v.isData3DTexture?k.texSubImage3D(Ye,G,de,he,Re,z,W,K,Le,Ce,ke.data):I.isCompressedArrayTexture?k.compressedTexSubImage3D(Ye,G,de,he,Re,z,W,K,Le,ke.data):k.texSubImage3D(Ye,G,de,he,Re,z,W,K,Le,Ce,ke):v.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,G,de,he,z,W,Le,Ce,ke.data):v.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,G,de,he,ke.width,ke.height,Le,ke.data):k.texSubImage2D(k.TEXTURE_2D,G,de,he,z,W,Le,Ce,ke);k.pixelStorei(k.UNPACK_ROW_LENGTH,we),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ut),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Tt),k.pixelStorei(k.UNPACK_SKIP_ROWS,rt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,it),G===0&&I.generateMipmaps&&k.generateMipmap(Ye),Fe.unbindTexture()},this.copyTextureToTexture3D=function(v,I,P=null,L=null,D=0){return gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,I,P,L,D)},this.initRenderTarget=function(v){Ue.get(v).__webglFramebuffer===void 0&&b.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?b.setTextureCube(v,0):v.isData3DTexture?b.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?b.setTexture2DArray(v,0):b.setTexture2D(v,0),Fe.unbindTexture()},this.resetState=function(){F=0,N=0,H=null,Fe.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Jt=Uint8Array,Ui=Uint16Array,fM=Int32Array,Hd=new Jt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Gd=new Jt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),hM=new Jt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Vd=function(n,e){for(var t=new Ui(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var o=new fM(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)o[r]=r-t[i]<<5|i;return{b:t,r:o}},zd=Vd(Hd,2),Wd=zd.b,pM=zd.r;Wd[28]=258,pM[258]=28;var mM=Vd(Gd,0),gM=mM.b,Ea=new Ui(32768);for(var gt=0;gt<32768;++gt){var Vn=(gt&43690)>>1|(gt&21845)<<1;Vn=(Vn&52428)>>2|(Vn&13107)<<2,Vn=(Vn&61680)>>4|(Vn&3855)<<4,Ea[gt]=((Vn&65280)>>8|(Vn&255)<<8)>>1}var _o=(function(n,e,t){for(var i=n.length,o=0,r=new Ui(e);o<i;++o)n[o]&&++r[n[o]-1];var s=new Ui(e);for(o=1;o<e;++o)s[o]=s[o-1]+r[o-1]<<1;var a;if(t){a=new Ui(1<<e);var u=15-e;for(o=0;o<i;++o)if(n[o])for(var c=o<<4|n[o],f=e-n[o],h=s[n[o]-1]++<<f,p=h|(1<<f)-1;h<=p;++h)a[Ea[h]>>u]=c}else for(a=new Ui(i),o=0;o<i;++o)n[o]&&(a[o]=Ea[s[n[o]-1]++]>>15-n[o]);return a}),No=new Jt(288);for(var gt=0;gt<144;++gt)No[gt]=8;for(var gt=144;gt<256;++gt)No[gt]=9;for(var gt=256;gt<280;++gt)No[gt]=7;for(var gt=280;gt<288;++gt)No[gt]=8;var qd=new Jt(32);for(var gt=0;gt<32;++gt)qd[gt]=5;var _M=_o(No,9,1),vM=_o(qd,5,1),Es=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},sn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},ys=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},SM=function(n){return(n+7)/8|0},EM=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new Jt(n.subarray(e,t))},yM=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],an=function(n,e,t){var i=new Error(e||yM[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,an),!t)throw i;return i},TM=function(n,e,t,i){var o=n.length,r=0;if(!o||e.f&&!e.l)return t||new Jt(0);var s=!t,a=s||e.i!=2,u=e.i;s&&(t=new Jt(o*3));var c=function(ft){var ct=t.length;if(ft>ct){var Ke=new Jt(Math.max(ct*2,ft));Ke.set(t),t=Ke}},f=e.f||0,h=e.p||0,p=e.b||0,m=e.l,E=e.d,y=e.m,S=e.n,g=o*8;do{if(!m){f=sn(n,h,1);var w=sn(n,h+1,3);if(h+=3,w)if(w==1)m=_M,E=vM,y=9,S=5;else if(w==2){var F=sn(n,h,31)+257,N=sn(n,h+10,15)+4,H=F+sn(n,h+5,31)+1;h+=14;for(var A=new Jt(H),T=new Jt(19),B=0;B<N;++B)T[hM[B]]=sn(n,h+B*3,7);h+=N*3;for(var q=Es(T),Y=(1<<q)-1,ie=_o(T,q,1),B=0;B<H;){var le=ie[sn(n,h,Y)];h+=le&15;var C=le>>4;if(C<16)A[B++]=C;else{var j=0,se=0;for(C==16?(se=3+sn(n,h,3),h+=2,j=A[B-1]):C==17?(se=3+sn(n,h,7),h+=3):C==18&&(se=11+sn(n,h,127),h+=7);se--;)A[B++]=j}}var Q=A.subarray(0,F),ge=A.subarray(F);y=Es(Q),S=Es(ge),m=_o(Q,y,1),E=_o(ge,S,1)}else an(1);else{var C=SM(h)+4,M=n[C-4]|n[C-3]<<8,O=C+M;if(O>o){u&&an(0);break}a&&c(p+M),t.set(n.subarray(C,O),p),e.b=p+=M,e.p=h=O*8,e.f=f;continue}if(h>g){u&&an(0);break}}a&&c(p+131072);for(var ve=(1<<y)-1,Pe=(1<<S)-1,Ge=h;;Ge=h){var j=m[ys(n,h)&ve],Qe=j>>4;if(h+=j&15,h>g){u&&an(0);break}if(j||an(2),Qe<256)t[p++]=Qe;else if(Qe==256){Ge=h,m=null;break}else{var ee=Qe-254;if(Qe>264){var B=Qe-257,pe=Hd[B];ee=sn(n,h,(1<<pe)-1)+Wd[B],h+=pe}var me=E[ys(n,h)&Pe],_e=me>>4;me||an(3),h+=me&15;var ge=gM[_e];if(_e>3){var pe=Gd[_e];ge+=ys(n,h)&(1<<pe)-1,h+=pe}if(h>g){u&&an(0);break}a&&c(p+131072);var be=p+ee;if(p<ge){var je=r-ge,Ve=Math.min(ge,be);for(je+p<0&&an(3);p<Ve;++p)t[p]=i[je+p]}for(;p<be;++p)t[p]=t[p-ge]}}e.l=m,e.p=Ge,e.b=p,e.f=f,m&&(f=1,e.m=y,e.d=E,e.n=S)}while(!f);return p!=t.length&&s?EM(t,0,p):t.subarray(0,p)},xM=new Jt(0),MM=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&an(6,"invalid zlib data"),(n[1]>>5&1)==1&&an(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function ar(n,e){return TM(n.subarray(MM(n),-4),{i:2},e,e)}var AM=typeof TextDecoder<"u"&&new TextDecoder,CM=0;try{AM.decode(xM,{stream:!0}),CM=1}catch{}class RM extends CS{constructor(e){super(e),this.type=zt}parse(e){const A=Math.pow(2.7182818,2.2);function T(_,R){let U=0;for(let I=0;I<65536;++I)(I==0||_[I>>3]&1<<(I&7))&&(R[U++]=I);const v=U-1;for(;U<65536;)R[U++]=0;return v}function B(_){for(let R=0;R<16384;R++)_[R]={},_[R].len=0,_[R].lit=0,_[R].p=null}const q={l:0,c:0,lc:0};function Y(_,R,U,v,I){for(;U<_;)R=R<<8|Me(v,I),U+=8;U-=_,q.l=R>>U&(1<<_)-1,q.c=R,q.lc=U}const ie=new Array(59);function le(_){for(let U=0;U<=58;++U)ie[U]=0;for(let U=0;U<65537;++U)ie[_[U]]+=1;let R=0;for(let U=58;U>0;--U){const v=R+ie[U]>>1;ie[U]=R,R=v}for(let U=0;U<65537;++U){const v=_[U];v>0&&(_[U]=v|ie[v]++<<6)}}function j(_,R,U,v,I,P){const L=R;let D=0,G=0;for(;v<=I;v++){if(L.value-R.value>U)return!1;Y(6,D,G,_,L);const z=q.l;if(D=q.c,G=q.lc,P[v]=z,z==63){if(L.value-R.value>U)throw new Error("Something wrong with hufUnpackEncTable");Y(8,D,G,_,L);let W=q.l+6;if(D=q.c,G=q.lc,v+W>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;W--;)P[v++]=0;v--}else if(z>=59){let W=z-59+2;if(v+W>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;W--;)P[v++]=0;v--}}le(P)}function se(_){return _&63}function Q(_){return _>>6}function ge(_,R,U,v){for(;R<=U;R++){const I=Q(_[R]),P=se(_[R]);if(I>>P)throw new Error("Invalid table entry");if(P>14){const L=v[I>>P-14];if(L.len)throw new Error("Invalid table entry");if(L.lit++,L.p){const D=L.p;L.p=new Array(L.lit);for(let G=0;G<L.lit-1;++G)L.p[G]=D[G]}else L.p=new Array(1);L.p[L.lit-1]=R}else if(P){let L=0;for(let D=1<<14-P;D>0;D--){const G=v[(I<<14-P)+L];if(G.len||G.p)throw new Error("Invalid table entry");G.len=P,G.lit=R,L++}}}return!0}const ve={c:0,lc:0};function Pe(_,R,U,v){_=_<<8|Me(U,v),R+=8,ve.c=_,ve.lc=R}const Ge={c:0,lc:0};function Qe(_,R,U,v,I,P,L,D,G){if(_==R){v<8&&(Pe(U,v,I,P),U=ve.c,v=ve.lc),v-=8;let z=U>>v;if(z=new Uint8Array([z])[0],D.value+z>G)return!1;const W=L[D.value-1];for(;z-- >0;)L[D.value++]=W}else if(D.value<G)L[D.value++]=_;else return!1;Ge.c=U,Ge.lc=v}function ee(_){return _&65535}function pe(_){const R=ee(_);return R>32767?R-65536:R}const me={a:0,b:0};function _e(_,R){const U=pe(_),I=pe(R),P=U+(I&1)+(I>>1),L=P,D=P-I;me.a=L,me.b=D}function be(_,R){const U=ee(_),v=ee(R),I=U-(v>>1)&65535,P=v+I-32768&65535;me.a=P,me.b=I}function je(_,R,U,v,I,P,L){const D=L<16384,G=U>I?I:U;let z=1,W,K;for(;z<=G;)z<<=1;for(z>>=1,W=z,z>>=1;z>=1;){K=0;const re=K+P*(I-W),ne=P*z,ue=P*W,de=v*z,he=v*W;let Re,ke,Le,Ce;for(;K<=re;K+=ue){let Ye=K;const we=K+v*(U-W);for(;Ye<=we;Ye+=he){const ut=Ye+de,Tt=Ye+ne,rt=Tt+de;D?(_e(_[Ye+R],_[Tt+R]),Re=me.a,Le=me.b,_e(_[ut+R],_[rt+R]),ke=me.a,Ce=me.b,_e(Re,ke),_[Ye+R]=me.a,_[ut+R]=me.b,_e(Le,Ce),_[Tt+R]=me.a,_[rt+R]=me.b):(be(_[Ye+R],_[Tt+R]),Re=me.a,Le=me.b,be(_[ut+R],_[rt+R]),ke=me.a,Ce=me.b,be(Re,ke),_[Ye+R]=me.a,_[ut+R]=me.b,be(Le,Ce),_[Tt+R]=me.a,_[rt+R]=me.b)}if(U&z){const ut=Ye+ne;D?_e(_[Ye+R],_[ut+R]):be(_[Ye+R],_[ut+R]),Re=me.a,_[ut+R]=me.b,_[Ye+R]=Re}}if(I&z){let Ye=K;const we=K+v*(U-W);for(;Ye<=we;Ye+=he){const ut=Ye+de;D?_e(_[Ye+R],_[ut+R]):be(_[Ye+R],_[ut+R]),Re=me.a,_[ut+R]=me.b,_[Ye+R]=Re}}W=z,z>>=1}return K}function Ve(_,R,U,v,I,P,L,D,G){let z=0,W=0;const K=L,re=Math.trunc(v.value+(I+7)/8);for(;v.value<re;)for(Pe(z,W,U,v),z=ve.c,W=ve.lc;W>=14;){const ue=z>>W-14&16383,de=R[ue];if(de.len)W-=de.len,Qe(de.lit,P,z,W,U,v,D,G,K),z=Ge.c,W=Ge.lc;else{if(!de.p)throw new Error("hufDecode issues");let he;for(he=0;he<de.lit;he++){const Re=se(_[de.p[he]]);for(;W<Re&&v.value<re;)Pe(z,W,U,v),z=ve.c,W=ve.lc;if(W>=Re&&Q(_[de.p[he]])==(z>>W-Re&(1<<Re)-1)){W-=Re,Qe(de.p[he],P,z,W,U,v,D,G,K),z=Ge.c,W=Ge.lc;break}}if(he==de.lit)throw new Error("hufDecode issues")}}const ne=8-I&7;for(z>>=ne,W-=ne;W>0;){const ue=R[z<<14-W&16383];if(ue.len)W-=ue.len,Qe(ue.lit,P,z,W,U,v,D,G,K),z=Ge.c,W=Ge.lc;else throw new Error("hufDecode issues")}return!0}function ft(_,R,U,v,I,P){const L={value:0},D=U.value,G=Ne(R,U),z=Ne(R,U);U.value+=4;const W=Ne(R,U);if(U.value+=4,G<0||G>=65537||z<0||z>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const K=new Array(65537),re=new Array(16384);B(re);const ne=v-(U.value-D);if(j(_,U,ne,G,z,K),W>8*(v-(U.value-D)))throw new Error("Something wrong with hufUncompress");ge(K,G,z,re),Ve(K,re,_,U,W,z,P,I,L)}function ct(_,R,U){for(let v=0;v<U;++v)R[v]=_[R[v]]}function Ke(_){for(let R=1;R<_.length;R++){const U=_[R-1]+_[R]-128;_[R]=U}}function k(_,R){let U=0,v=Math.floor((_.length+1)/2),I=0;const P=_.length-1;for(;!(I>P||(R[I++]=_[U++],I>P));)R[I++]=_[v++]}function Nt(_){let R=_.byteLength;const U=new Array;let v=0;const I=new DataView(_);for(;R>0;){const P=I.getInt8(v++);if(P<0){const L=-P;R-=L+1;for(let D=0;D<L;D++)U.push(I.getUint8(v++))}else{const L=P;R-=2;const D=I.getUint8(v++);for(let G=0;G<L+1;G++)U.push(D)}}return U}function nt(_,R,U,v,I,P){let L=new DataView(P.buffer);const D=U[_.idx[0]].width,G=U[_.idx[0]].height,z=3,W=Math.floor(D/8),K=Math.ceil(D/8),re=Math.ceil(G/8),ne=D-(K-1)*8,ue=G-(re-1)*8,de={value:0},he=new Array(z),Re=new Array(z),ke=new Array(z),Le=new Array(z),Ce=new Array(z);for(let we=0;we<z;++we)Ce[we]=R[_.idx[we]],he[we]=we<1?0:he[we-1]+K*re,Re[we]=new Float32Array(64),ke[we]=new Uint16Array(64),Le[we]=new Uint16Array(K*64);for(let we=0;we<re;++we){let ut=8;we==re-1&&(ut=ue);let Tt=8;for(let it=0;it<K;++it){it==K-1&&(Tt=ne);for(let He=0;He<z;++He)ke[He].fill(0),ke[He][0]=I[he[He]++],et(de,v,ke[He]),Fe(ke[He],Re[He]),ht(Re[He]);Ue(Re);for(let He=0;He<z;++He)b(Re[He],Le[He],it*64)}let rt=0;for(let it=0;it<z;++it){const He=U[_.idx[it]].type;for(let St=8*we;St<8*we+ut;++St){rt=Ce[it][St];for(let Rt=0;Rt<W;++Rt){const pt=Rt*64+(St&7)*8;L.setUint16(rt+0*He,Le[it][pt+0],!0),L.setUint16(rt+2*He,Le[it][pt+1],!0),L.setUint16(rt+4*He,Le[it][pt+2],!0),L.setUint16(rt+6*He,Le[it][pt+3],!0),L.setUint16(rt+8*He,Le[it][pt+4],!0),L.setUint16(rt+10*He,Le[it][pt+5],!0),L.setUint16(rt+12*He,Le[it][pt+6],!0),L.setUint16(rt+14*He,Le[it][pt+7],!0),rt+=16*He}}if(W!=K)for(let St=8*we;St<8*we+ut;++St){const Rt=Ce[it][St]+8*W*2*He,pt=W*64+(St&7)*8;for(let xt=0;xt<Tt;++xt)L.setUint16(Rt+xt*2*He,Le[it][pt+xt],!0)}}}const Ye=new Uint16Array(D);L=new DataView(P.buffer);for(let we=0;we<z;++we){U[_.idx[we]].decoded=!0;const ut=U[_.idx[we]].type;if(U[we].type==2)for(let Tt=0;Tt<G;++Tt){const rt=Ce[we][Tt];for(let it=0;it<D;++it)Ye[it]=L.getUint16(rt+it*2*ut,!0);for(let it=0;it<D;++it)L.setFloat32(rt+it*2*ut,J(Ye[it]),!0)}}}function et(_,R,U){let v,I=1;for(;I<64;)v=R[_.value],v==65280?I=64:v>>8==255?I+=v&255:(U[I]=v,I++),_.value++}function Fe(_,R){R[0]=J(_[0]),R[1]=J(_[1]),R[2]=J(_[5]),R[3]=J(_[6]),R[4]=J(_[14]),R[5]=J(_[15]),R[6]=J(_[27]),R[7]=J(_[28]),R[8]=J(_[2]),R[9]=J(_[4]),R[10]=J(_[7]),R[11]=J(_[13]),R[12]=J(_[16]),R[13]=J(_[26]),R[14]=J(_[29]),R[15]=J(_[42]),R[16]=J(_[3]),R[17]=J(_[8]),R[18]=J(_[12]),R[19]=J(_[17]),R[20]=J(_[25]),R[21]=J(_[30]),R[22]=J(_[41]),R[23]=J(_[43]),R[24]=J(_[9]),R[25]=J(_[11]),R[26]=J(_[18]),R[27]=J(_[24]),R[28]=J(_[31]),R[29]=J(_[40]),R[30]=J(_[44]),R[31]=J(_[53]),R[32]=J(_[10]),R[33]=J(_[19]),R[34]=J(_[23]),R[35]=J(_[32]),R[36]=J(_[39]),R[37]=J(_[45]),R[38]=J(_[52]),R[39]=J(_[54]),R[40]=J(_[20]),R[41]=J(_[22]),R[42]=J(_[33]),R[43]=J(_[38]),R[44]=J(_[46]),R[45]=J(_[51]),R[46]=J(_[55]),R[47]=J(_[60]),R[48]=J(_[21]),R[49]=J(_[34]),R[50]=J(_[37]),R[51]=J(_[47]),R[52]=J(_[50]),R[53]=J(_[56]),R[54]=J(_[59]),R[55]=J(_[61]),R[56]=J(_[35]),R[57]=J(_[36]),R[58]=J(_[48]),R[59]=J(_[49]),R[60]=J(_[57]),R[61]=J(_[58]),R[62]=J(_[62]),R[63]=J(_[63])}function ht(_){const R=.5*Math.cos(.7853975),U=.5*Math.cos(3.14159/16),v=.5*Math.cos(3.14159/8),I=.5*Math.cos(3*3.14159/16),P=.5*Math.cos(5*3.14159/16),L=.5*Math.cos(3*3.14159/8),D=.5*Math.cos(7*3.14159/16),G=new Array(4),z=new Array(4),W=new Array(4),K=new Array(4);for(let re=0;re<8;++re){const ne=re*8;G[0]=v*_[ne+2],G[1]=L*_[ne+2],G[2]=v*_[ne+6],G[3]=L*_[ne+6],z[0]=U*_[ne+1]+I*_[ne+3]+P*_[ne+5]+D*_[ne+7],z[1]=I*_[ne+1]-D*_[ne+3]-U*_[ne+5]-P*_[ne+7],z[2]=P*_[ne+1]-U*_[ne+3]+D*_[ne+5]+I*_[ne+7],z[3]=D*_[ne+1]-P*_[ne+3]+I*_[ne+5]-U*_[ne+7],W[0]=R*(_[ne+0]+_[ne+4]),W[3]=R*(_[ne+0]-_[ne+4]),W[1]=G[0]+G[3],W[2]=G[1]-G[2],K[0]=W[0]+W[1],K[1]=W[3]+W[2],K[2]=W[3]-W[2],K[3]=W[0]-W[1],_[ne+0]=K[0]+z[0],_[ne+1]=K[1]+z[1],_[ne+2]=K[2]+z[2],_[ne+3]=K[3]+z[3],_[ne+4]=K[3]-z[3],_[ne+5]=K[2]-z[2],_[ne+6]=K[1]-z[1],_[ne+7]=K[0]-z[0]}for(let re=0;re<8;++re)G[0]=v*_[16+re],G[1]=L*_[16+re],G[2]=v*_[48+re],G[3]=L*_[48+re],z[0]=U*_[8+re]+I*_[24+re]+P*_[40+re]+D*_[56+re],z[1]=I*_[8+re]-D*_[24+re]-U*_[40+re]-P*_[56+re],z[2]=P*_[8+re]-U*_[24+re]+D*_[40+re]+I*_[56+re],z[3]=D*_[8+re]-P*_[24+re]+I*_[40+re]-U*_[56+re],W[0]=R*(_[re]+_[32+re]),W[3]=R*(_[re]-_[32+re]),W[1]=G[0]+G[3],W[2]=G[1]-G[2],K[0]=W[0]+W[1],K[1]=W[3]+W[2],K[2]=W[3]-W[2],K[3]=W[0]-W[1],_[0+re]=K[0]+z[0],_[8+re]=K[1]+z[1],_[16+re]=K[2]+z[2],_[24+re]=K[3]+z[3],_[32+re]=K[3]-z[3],_[40+re]=K[2]-z[2],_[48+re]=K[1]-z[1],_[56+re]=K[0]-z[0]}function Ue(_){for(let R=0;R<64;++R){const U=_[0][R],v=_[1][R],I=_[2][R];_[0][R]=U+1.5747*I,_[1][R]=U-.1873*v-.4682*I,_[2][R]=U+1.8556*v}}function b(_,R,U){for(let v=0;v<64;++v)R[U+v]=Ju.toHalfFloat(x(_[v]))}function x(_){return _<=1?Math.sign(_)*Math.pow(Math.abs(_),2.2):Math.sign(_)*Math.pow(A,Math.abs(_)-1)}function X(_){return new DataView(_.array.buffer,_.offset.value,_.size)}function oe(_){const R=_.viewer.buffer.slice(_.offset.value,_.offset.value+_.size),U=new Uint8Array(Nt(R)),v=new Uint8Array(U.length);return Ke(U),k(U,v),new DataView(v.buffer)}function ce(_){const R=_.array.slice(_.offset.value,_.offset.value+_.size),U=ar(R),v=new Uint8Array(U.length);return Ke(U),k(U,v),new DataView(v.buffer)}function te(_){const R=_.viewer,U={value:_.offset.value},v=new Uint16Array(_.columns*_.lines*(_.inputChannels.length*_.type)),I=new Uint8Array(8192);let P=0;const L=new Array(_.inputChannels.length);for(let ue=0,de=_.inputChannels.length;ue<de;ue++)L[ue]={},L[ue].start=P,L[ue].end=L[ue].start,L[ue].nx=_.columns,L[ue].ny=_.lines,L[ue].size=_.type,P+=L[ue].nx*L[ue].ny*L[ue].size;const D=Z(R,U),G=Z(R,U);if(G>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(D<=G)for(let ue=0;ue<G-D+1;ue++)I[ue+D]=qe(R,U);const z=new Uint16Array(65536),W=T(I,z),K=Ne(R,U);ft(_.array,R,U,K,v,P);for(let ue=0;ue<_.inputChannels.length;++ue){const de=L[ue];for(let he=0;he<L[ue].size;++he)je(v,de.start+he,de.nx,de.size,de.ny,de.nx*de.size,W)}ct(z,v,P);let re=0;const ne=new Uint8Array(v.buffer.byteLength);for(let ue=0;ue<_.lines;ue++)for(let de=0;de<_.inputChannels.length;de++){const he=L[de],Re=he.nx*he.size,ke=new Uint8Array(v.buffer,he.end*2,Re*2);ne.set(ke,re),re+=Re*2,he.end+=Re}return new DataView(ne.buffer)}function De(_){const R=_.array.slice(_.offset.value,_.offset.value+_.size),U=ar(R),v=_.inputChannels.length*_.lines*_.columns*_.totalBytes,I=new ArrayBuffer(v),P=new DataView(I);let L=0,D=0;const G=new Array(4);for(let z=0;z<_.lines;z++)for(let W=0;W<_.inputChannels.length;W++){let K=0;switch(_.inputChannels[W].pixelType){case 1:G[0]=L,G[1]=G[0]+_.columns,L=G[1]+_.columns;for(let ne=0;ne<_.columns;++ne){const ue=U[G[0]++]<<8|U[G[1]++];K+=ue,P.setUint16(D,K,!0),D+=2}break;case 2:G[0]=L,G[1]=G[0]+_.columns,G[2]=G[1]+_.columns,L=G[2]+_.columns;for(let ne=0;ne<_.columns;++ne){const ue=U[G[0]++]<<24|U[G[1]++]<<16|U[G[2]++]<<8;K+=ue,P.setUint32(D,K,!0),D+=4}break}}return P}function Ee(_){const R=_.viewer,U={value:_.offset.value},v=new Uint8Array(_.columns*_.lines*(_.inputChannels.length*_.type*2)),I={version:Oe(R,U),unknownUncompressedSize:Oe(R,U),unknownCompressedSize:Oe(R,U),acCompressedSize:Oe(R,U),dcCompressedSize:Oe(R,U),rleCompressedSize:Oe(R,U),rleUncompressedSize:Oe(R,U),rleRawSize:Oe(R,U),totalAcUncompressedCount:Oe(R,U),totalDcUncompressedCount:Oe(R,U),acCompression:Oe(R,U)};if(I.version<2)throw new Error("EXRLoader.parse: "+mn.compression+" version "+I.version+" is unsupported");const P=new Array;let L=Z(R,U)-2;for(;L>0;){const de=Be(R.buffer,U),he=qe(R,U),Re=he>>2&3,ke=(he>>4)-1,Le=new Int8Array([ke])[0],Ce=qe(R,U);P.push({name:de,index:Le,type:Ce,compression:Re}),L-=de.length+3}const D=mn.channels,G=new Array(_.inputChannels.length);for(let de=0;de<_.inputChannels.length;++de){const he=G[de]={},Re=D[de];he.name=Re.name,he.compression=0,he.decoded=!1,he.type=Re.pixelType,he.pLinear=Re.pLinear,he.width=_.columns,he.height=_.lines}const z={idx:new Array(3)};for(let de=0;de<_.inputChannels.length;++de){const he=G[de];for(let Re=0;Re<P.length;++Re){const ke=P[Re];he.name==ke.name&&(he.compression=ke.compression,ke.index>=0&&(z.idx[ke.index]=de),he.offset=de)}}let W,K,re;if(I.acCompressedSize>0)switch(I.acCompression){case 0:W=new Uint16Array(I.totalAcUncompressedCount),ft(_.array,R,U,I.acCompressedSize,W,I.totalAcUncompressedCount);break;case 1:const de=_.array.slice(U.value,U.value+I.totalAcUncompressedCount),he=ar(de);W=new Uint16Array(he.buffer),U.value+=I.totalAcUncompressedCount;break}if(I.dcCompressedSize>0){const de={array:_.array,offset:U,size:I.dcCompressedSize};K=new Uint16Array(ce(de).buffer),U.value+=I.dcCompressedSize}if(I.rleRawSize>0){const de=_.array.slice(U.value,U.value+I.rleCompressedSize),he=ar(de);re=Nt(he.buffer),U.value+=I.rleCompressedSize}let ne=0;const ue=new Array(G.length);for(let de=0;de<ue.length;++de)ue[de]=new Array;for(let de=0;de<_.lines;++de)for(let he=0;he<G.length;++he)ue[he].push(ne),ne+=G[he].width*_.type*2;nt(z,ue,G,W,K,v);for(let de=0;de<G.length;++de){const he=G[de];if(!he.decoded)switch(he.compression){case 2:let Re=0,ke=0;for(let Le=0;Le<_.lines;++Le){let Ce=ue[de][Re];for(let Ye=0;Ye<he.width;++Ye){for(let we=0;we<2*he.type;++we)v[Ce++]=re[ke+we*he.width*he.height];ke++}Re++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(v.buffer)}function Be(_,R){const U=new Uint8Array(_);let v=0;for(;U[R.value+v]!=0;)v+=1;const I=new TextDecoder().decode(U.slice(R.value,R.value+v));return R.value=R.value+v+1,I}function ze(_,R,U){const v=new TextDecoder().decode(new Uint8Array(_).slice(R.value,R.value+U));return R.value=R.value+U,v}function fe(_,R){const U=Ie(_,R),v=Ne(_,R);return[U,v]}function Ae(_,R){const U=Ne(_,R),v=Ne(_,R);return[U,v]}function Ie(_,R){const U=_.getInt32(R.value,!0);return R.value=R.value+4,U}function Ne(_,R){const U=_.getUint32(R.value,!0);return R.value=R.value+4,U}function Me(_,R){const U=_[R.value];return R.value=R.value+1,U}function qe(_,R){const U=_.getUint8(R.value);return R.value=R.value+1,U}const Oe=function(_,R){let U;return"getBigInt64"in DataView.prototype?U=Number(_.getBigInt64(R.value,!0)):U=_.getUint32(R.value+4,!0)+Number(_.getUint32(R.value,!0)<<32),R.value+=8,U};function $e(_,R){const U=_.getFloat32(R.value,!0);return R.value+=4,U}function V(_,R){return Ju.toHalfFloat($e(_,R))}function J(_){const R=(_&31744)>>10,U=_&1023;return(_>>15?-1:1)*(R?R===31?U?NaN:1/0:Math.pow(2,R-15)*(1+U/1024):6103515625e-14*(U/1024))}function Z(_,R){const U=_.getUint16(R.value,!0);return R.value+=2,U}function ae(_,R){return J(Z(_,R))}function xe(_,R,U,v){const I=U.value,P=[];for(;U.value<I+v-1;){const L=Be(R,U),D=Ie(_,U),G=qe(_,U);U.value+=3;const z=Ie(_,U),W=Ie(_,U);P.push({name:L,pixelType:D,pLinear:G,xSampling:z,ySampling:W})}return U.value+=1,P}function ye(_,R){const U=$e(_,R),v=$e(_,R),I=$e(_,R),P=$e(_,R),L=$e(_,R),D=$e(_,R),G=$e(_,R),z=$e(_,R);return{redX:U,redY:v,greenX:I,greenY:P,blueX:L,blueY:D,whiteX:G,whiteY:z}}function Xe(_,R){const U=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],v=qe(_,R);return U[v]}function _t(_,R){const U=Ie(_,R),v=Ie(_,R),I=Ie(_,R),P=Ie(_,R);return{xMin:U,yMin:v,xMax:I,yMax:P}}function Ct(_,R){const U=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],v=qe(_,R);return U[v]}function lt(_,R){const U=["ENVMAP_LATLONG","ENVMAP_CUBE"],v=qe(_,R);return U[v]}function Ht(_,R){const U=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],v=["ROUND_DOWN","ROUND_UP"],I=Ne(_,R),P=Ne(_,R),L=qe(_,R);return{xSize:I,ySize:P,levelMode:U[L&15],roundingMode:v[L>>4]}}function tn(_,R){const U=$e(_,R),v=$e(_,R);return[U,v]}function Lo(_,R){const U=$e(_,R),v=$e(_,R),I=$e(_,R);return[U,v,I]}function Fo(_,R,U,v,I){if(v==="string"||v==="stringvector"||v==="iccProfile")return ze(R,U,I);if(v==="chlist")return xe(_,R,U,I);if(v==="chromaticities")return ye(_,U);if(v==="compression")return Xe(_,U);if(v==="box2i")return _t(_,U);if(v==="envmap")return lt(_,U);if(v==="tiledesc")return Ht(_,U);if(v==="lineOrder")return Ct(_,U);if(v==="float")return $e(_,U);if(v==="v2f")return tn(_,U);if(v==="v3f")return Lo(_,U);if(v==="int")return Ie(_,U);if(v==="rational")return fe(_,U);if(v==="timecode")return Ae(_,U);if(v==="preview")return U.value+=I,"skipped";U.value+=I}function pn(_,R){const U=Math.log2(_);return R=="ROUND_DOWN"?Math.floor(U):Math.ceil(U)}function to(_,R,U){let v=0;switch(_.levelMode){case"ONE_LEVEL":v=1;break;case"MIPMAP_LEVELS":v=pn(Math.max(R,U),_.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return v}function no(_,R,U,v){const I=new Array(_);for(let P=0;P<_;P++){const L=1<<P;let D=R/L|0;v=="ROUND_UP"&&D*L<R&&(D+=1);const G=Math.max(D,1);I[P]=(G+U-1)/U|0}return I}function Bo(){const _=this,R=_.offset,U={value:0};for(let v=0;v<_.tileCount;v++){const I=Ie(_.viewer,R),P=Ie(_.viewer,R);R.value+=8,_.size=Ne(_.viewer,R);const L=I*_.blockWidth,D=P*_.blockHeight;_.columns=L+_.blockWidth>_.width?_.width-L:_.blockWidth,_.lines=D+_.blockHeight>_.height?_.height-D:_.blockHeight;const G=_.columns*_.totalBytes,W=_.size<_.lines*G?_.uncompress(_):X(_);R.value+=_.size;for(let K=0;K<_.lines;K++){const re=K*_.columns*_.totalBytes;for(let ne=0;ne<_.inputChannels.length;ne++){const ue=mn.channels[ne].name,de=_.channelByteOffsets[ue]*_.columns,he=_.decodeChannels[ue];if(he===void 0)continue;U.value=re+de;const Re=(_.height-(1+D+K))*_.outLineWidth;for(let ke=0;ke<_.columns;ke++){const Le=Re+(ke+L)*_.outputChannels+he;_.byteArray[Le]=_.getter(W,U)}}}}}function mi(){const _=this,R=_.offset,U={value:0};for(let v=0;v<_.height/_.blockHeight;v++){const I=Ie(_.viewer,R)-mn.dataWindow.yMin;_.size=Ne(_.viewer,R),_.lines=I+_.blockHeight>_.height?_.height-I:_.blockHeight;const P=_.columns*_.totalBytes,D=_.size<_.lines*P?_.uncompress(_):X(_);R.value+=_.size;for(let G=0;G<_.blockHeight;G++){const z=v*_.blockHeight,W=G+_.scanOrder(z);if(W>=_.height)continue;const K=G*P,re=(_.height-1-W)*_.outLineWidth;for(let ne=0;ne<_.inputChannels.length;ne++){const ue=mn.channels[ne].name,de=_.channelByteOffsets[ue]*_.columns,he=_.decodeChannels[ue];if(he!==void 0){U.value=K+de;for(let Re=0;Re<_.columns;Re++){const ke=re+Re*_.outputChannels+he;_.byteArray[ke]=_.getter(D,U)}}}}}}function Oo(_,R,U){const v={};if(_.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");v.version=_.getUint8(4);const I=_.getUint8(5);v.spec={singleTile:!!(I&2),longName:!!(I&4),deepFormat:!!(I&8),multiPart:!!(I&16)},U.value=8;let P=!0;for(;P;){const L=Be(R,U);if(L==="")P=!1;else{const D=Be(R,U),G=Ne(_,U),z=Fo(_,R,U,D,G);z===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${D}'.`):v[L]=z}}if((I&-7)!=0)throw console.error("THREE.EXRHeader:",v),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return v}function gi(_,R,U,v,I){const P={size:0,viewer:R,array:U,offset:v,width:_.dataWindow.xMax-_.dataWindow.xMin+1,height:_.dataWindow.yMax-_.dataWindow.yMin+1,inputChannels:_.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Jn};switch(_.compression){case"NO_COMPRESSION":P.blockHeight=1,P.uncompress=X;break;case"RLE_COMPRESSION":P.blockHeight=1,P.uncompress=oe;break;case"ZIPS_COMPRESSION":P.blockHeight=1,P.uncompress=ce;break;case"ZIP_COMPRESSION":P.blockHeight=16,P.uncompress=ce;break;case"PIZ_COMPRESSION":P.blockHeight=32,P.uncompress=te;break;case"PXR24_COMPRESSION":P.blockHeight=16,P.uncompress=De;break;case"DWAA_COMPRESSION":P.blockHeight=32,P.uncompress=Ee;break;case"DWAB_COMPRESSION":P.blockHeight=256,P.uncompress=Ee;break;default:throw new Error("EXRLoader.parse: "+_.compression+" is unsupported")}const L={};for(const W of _.channels)switch(W.name){case"Y":case"R":case"G":case"B":case"A":L[W.name]=!0,P.type=W.pixelType}let D=!1;if(L.R&&L.G&&L.B)D=!L.A,P.outputChannels=4,P.decodeChannels={R:0,G:1,B:2,A:3};else if(L.Y)P.outputChannels=1,P.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(P.type==1)switch(I){case Kt:P.getter=ae;break;case zt:P.getter=Z;break}else if(P.type==2)switch(I){case Kt:P.getter=$e;break;case zt:P.getter=V}else throw new Error("EXRLoader.parse: unsupported pixelType "+P.type+" for "+_.compression+".");P.columns=P.width;const G=P.width*P.height*P.outputChannels;switch(I){case Kt:P.byteArray=new Float32Array(G),D&&P.byteArray.fill(1,0,G);break;case zt:P.byteArray=new Uint16Array(G),D&&P.byteArray.fill(15360,0,G);break;default:console.error("THREE.EXRLoader: unsupported type: ",I);break}let z=0;for(const W of _.channels)P.decodeChannels[W.name]!==void 0&&(P.channelByteOffsets[W.name]=z),z+=W.pixelType*2;if(P.totalBytes=z,P.outLineWidth=P.width*P.outputChannels,_.lineOrder==="INCREASING_Y"?P.scanOrder=W=>W:P.scanOrder=W=>P.height-1-W,P.outputChannels==4?(P.format=Zt,P.colorSpace=Jn):(P.format=Oa,P.colorSpace=Mn),_.spec.singleTile){P.blockHeight=_.tiles.ySize,P.blockWidth=_.tiles.xSize;const W=to(_.tiles,P.width,P.height),K=no(W,P.width,_.tiles.xSize,_.tiles.roundingMode),re=no(W,P.height,_.tiles.ySize,_.tiles.roundingMode);P.tileCount=K[0]*re[0];for(let ne=0;ne<W;ne++)for(let ue=0;ue<re[ne];ue++)for(let de=0;de<K[ne];de++)Oe(R,v);P.decode=Bo.bind(P)}else{P.blockWidth=P.width;const W=Math.ceil(P.height/P.blockHeight);for(let K=0;K<W;K++)Oe(R,v);P.decode=mi.bind(P)}return P}const io={value:0},oo=new DataView(e),Or=new Uint8Array(e),mn=Oo(oo,e,io),Ln=gi(mn,oo,Or,io,this.type);return Ln.decode(),{header:mn,width:Ln.width,height:Ln.height,data:Ln.byteArray,format:Ln.format,colorSpace:Ln.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,i,o){function r(s,a){s.colorSpace=a.colorSpace,s.minFilter=Lt,s.magFilter=Lt,s.generateMipmaps=!1,s.flipY=!1,t&&t(s,a)}return super.load(e,r,i,o)}}const vr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Uo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const wM=new Ud(-1,1,1,-1,0,1);class IM extends Un{constructor(){super(),this.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new en([0,2,0,0,2,0],2))}}const PM=new IM;class $d{constructor(e){this._mesh=new Qt(PM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Xd extends Uo{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wr.clone(e.uniforms),this.material=new Ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $d(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Rc extends Uo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const o=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),r.buffers.stencil.setFunc(o.ALWAYS,s,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(o.EQUAL,1,4294967295),r.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),r.buffers.stencil.setLocked(!0)}}class bM extends Uo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class DM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new We);this._width=i.width,this._height=i.height,t=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xd(vr),this.copyPass.material.blending=wn,this.clock=new wS}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let o=0,r=this.passes.length;o<r;o++){const s=this.passes[o];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const a=this.renderer.getContext(),u=this.renderer.state.buffers.stencil;u.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),u.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Rc!==void 0&&(s instanceof Rc?i=!0:s instanceof bM&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new We);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(i,o),this.renderTarget2.setSize(i,o);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class NM extends Uo{constructor(e,t,i=null,o=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=o,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(e,t,i){const o=e.autoClear;e.autoClear=!1;let r,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=o}}const UM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Xi extends Uo{constructor(e,t=1,i,o){super(),this.strength=t,this.radius=i,this.threshold=o,this.resolution=e!==void 0?new We(e.x,e.y):new We(256,256),this.clearColor=new ot(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new un(r,s,{type:zt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new un(r,s,{type:zt});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new un(r,s,{type:zt});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),s=Math.round(s/2)}const a=UM;this.highPassUniforms=wr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ft({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const u=[3,5,7,9,11];r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(u[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new We(1/r,1/s),r=Math.round(r/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=wr.clone(vr.uniforms),this.blendMaterial=new Ft({uniforms:this.copyUniforms,vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader,blending:bs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ot,this._oldClearAlpha=1,this._basic=new Wa,this._fsQuad=new $d(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),o=Math.round(t/2);this.renderTargetBright.setSize(i,o);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,o),this.renderTargetsVertical[r].setSize(i,o),this.separableBlurMaterials[r].uniforms.invSize.value=new We(1/i,1/o),i=Math.round(i/2),o=Math.round(o/2)}render(e,t,i,o,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let u=0;u<this.nMips;u++)this._fsQuad.material=this.separableBlurMaterials[u],this.separableBlurMaterials[u].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[u].uniforms.direction.value=Xi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[u]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[u].uniforms.colorTexture.value=this.renderTargetsHorizontal[u].texture,this.separableBlurMaterials[u].uniforms.direction.value=Xi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[u]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[u];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new We(.5,.5)},direction:{value:new We(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Xi.BlurDirectionX=new We(1,0);Xi.BlurDirectionY=new We(0,1);const LM={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new We(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/const FM=`precision highp float;

in vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`,BM=`precision highp float;

out vec4 fragmentColor;

uniform vec2 resolution;
uniform float rand;

void main() {
  float aspectRatio = resolution.x / resolution.y; 
  vec2 vUv = gl_FragCoord.xy / resolution;
  float noise = (fract(sin(dot(vUv, vec2(12.9898 + rand,78.233)*2.0)) * 43758.5453));

  vUv -= .5;
  vUv.x *= aspectRatio;

  float factor = 4.;
  float d = factor * length(vUv);
  vec3 from = vec3(3.) / 255.;
  vec3 to = vec3(16., 12., 20.) / 2550.;

  fragmentColor = vec4(mix(from, to, d) + .005 * noise, 1.);
}
`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/const OM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
  varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

uniform float time;

uniform vec4 inputData;
uniform vec4 outputData;

vec3 calc( vec3 pos ) {

  vec3 dir = normalize( pos );
  vec3 p = dir + vec3( time, 0., 0. );
  return pos +
    1. * inputData.x * inputData.y * dir * (.5 + .5 * sin(inputData.z * pos.x + time)) +
    1. * outputData.x * outputData.y * dir * (.5 + .5 * sin(outputData.z * pos.y + time))
  ;
}

vec3 spherical( float r, float theta, float phi ) {
  return r * vec3(
    cos( theta ) * cos( phi ),
    sin( theta ) * cos( phi ),
    sin( phi )
  );
}

void main() {
  #include <uv_vertex>
  #include <color_vertex>
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>

  float inc = 0.001;

  float r = length( position );
  float theta = ( uv.x + 0.5 ) * 2. * PI;
  float phi = -( uv.y + 0.5 ) * PI;

  vec3 np = calc( spherical( r, theta, phi )  );

  vec3 tangent = normalize( calc( spherical( r, theta + inc, phi ) ) - np );
  vec3 bitangent = normalize( calc( spherical( r, theta, phi + inc ) ) - np );
  transformedNormal = -normalMatrix * normalize( cross( tangent, bitangent ) );

  vNormal = normalize( transformedNormal );

  transformed = np;

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  vViewPosition = - mvPosition.xyz;
  #include <worldpos_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>
  #ifdef USE_TRANSMISSION
    vWorldPosition = worldPosition.xyz;
  #endif
}`;var kM=Object.defineProperty,HM=Object.getOwnPropertyDescriptor,Ya=(n,e,t,i)=>{for(var o=i>1?void 0:i?HM(e,t):e,r=n.length-1,s;r>=0;r--)(s=n[r])&&(o=(i?s(e,t,o):s(o))||o);return i&&o&&kM(e,t,o),o};let Co=class extends Oi{constructor(){super(...arguments),this.prevTime=0,this.rotation=new $(0,0,0)}set outputNode(n){this._outputNode=n,this.outputAnalyser=new bu(this._outputNode)}get outputNode(){return this._outputNode}set inputNode(n){this._inputNode=n,this.inputAnalyser=new bu(this._inputNode)}get inputNode(){return this._inputNode}connectedCallback(){super.connectedCallback()}init(){const n=new pS;n.background=new ot(1051668);const e=new Qt(new Ir(10,5),new vS({uniforms:{resolution:{value:new We(1,1)},rand:{value:0}},vertexShader:FM,fragmentShader:BM,glslVersion:ga}));e.material.side=Bt,n.add(e),this.backdrop=e;const t=new Yt(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.set(2,-2,5),this.camera=t;const i=new dM({canvas:this.canvas,antialias:!1});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(window.devicePixelRatio/1);const o=new Ir(1,10);new RM().load("piz_compressed.exr",m=>{m.mapping=Mr;const E=r.fromEquirectangular(m);s.envMap=E.texture,a.visible=!0});const r=new va(i);r.compileEquirectangularShader();const s=new SS({color:16,metalness:.5,roughness:.1,emissive:16,emissiveIntensity:1.5});s.onBeforeCompile=m=>{m.uniforms.time={value:0},m.uniforms.inputData={value:new vt},m.uniforms.outputData={value:new vt},s.userData.shader=m,m.vertexShader=OM};const a=new Qt(o,s);n.add(a),a.visible=!1,this.sphere=a;const u=new NM(n,t),c=new Xi(new We(window.innerWidth,window.innerHeight),5,.5,0),f=new Xd(LM),h=new DM(i);h.addPass(u),h.addPass(c),this.composer=h;function p(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix();const m=i.getPixelRatio(),E=window.innerWidth,y=window.innerHeight;e.material.uniforms.resolution.value.set(E*m,y*m),i.setSize(E,y),h.setSize(E,y),f.material.uniforms.resolution.value.set(1/(E*m),1/(y*m))}window.addEventListener("resize",p),p(),this.animation()}animation(){requestAnimationFrame(()=>this.animation()),this.inputAnalyser.update(),this.outputAnalyser.update();const n=performance.now(),e=(n-this.prevTime)/(1e3/60);this.prevTime=n;const t=this.backdrop.material,i=this.sphere.material;if(t.uniforms.rand.value=Math.random()*1e4,i.userData.shader){this.sphere.scale.setScalar(1+.2*this.outputAnalyser.data[1]/255);const o=.001;this.rotation.x+=e*o*.5*this.outputAnalyser.data[1]/255,this.rotation.z+=e*o*.5*this.inputAnalyser.data[1]/255,this.rotation.y+=e*o*.25*this.inputAnalyser.data[2]/255,this.rotation.y+=e*o*.25*this.outputAnalyser.data[2]/255;const r=new cn(this.rotation.x,this.rotation.y,this.rotation.z),s=new Qi().setFromEuler(r),a=new $(0,0,5);a.applyQuaternion(s),this.camera.position.copy(a),this.camera.lookAt(this.sphere.position),i.userData.shader.uniforms.time.value+=e*.1*this.outputAnalyser.data[0]/255,i.userData.shader.uniforms.inputData.value.set(1*this.inputAnalyser.data[0]/255,.1*this.inputAnalyser.data[1]/255,10*this.inputAnalyser.data[2]/255,0),i.userData.shader.uniforms.outputData.value.set(2*this.outputAnalyser.data[0]/255,.1*this.outputAnalyser.data[1]/255,10*this.outputAnalyser.data[2]/255,0)}this.composer.render()}firstUpdated(){this.canvas=this.shadowRoot.querySelector("canvas"),this.init()}render(){return ld`<canvas></canvas>`}};Co.styles=od`
    canvas {
      width: 100% !important;
      height: 100% !important;
      position: absolute;
      inset: 0;
      image-rendering: pixelated;
    }
  `;Ya([Na()],Co.prototype,"outputNode",1);Ya([Na()],Co.prototype,"inputNode",1);Co=Ya([cd("gdm-live-audio-visuals-3d")],Co);var GM=Object.defineProperty,VM=Object.getOwnPropertyDescriptor,eo=(n,e,t,i)=>{for(var o=i>1?void 0:i?VM(e,t):e,r=n.length-1,s;r>=0;r--)(s=n[r])&&(o=(i?s(e,t,o):s(o))||o);return i&&o&&GM(e,t,o),o};let Kn=class extends Oi{constructor(){super(),this.isRecording=!1,this.status="",this.error="",this.inputAudioContext=new(window.AudioContext||window.webkitAudioContext)({sampleRate:16e3}),this.outputAudioContext=new(window.AudioContext||window.webkitAudioContext)({sampleRate:24e3}),this.inputNode=this.inputAudioContext.createGain(),this.outputNode=this.outputAudioContext.createGain(),this.nextStartTime=0,this.sources=new Set,this.initClient()}initAudio(){this.nextStartTime=this.outputAudioContext.currentTime}async initClient(){this.initAudio(),this.client=new xv({apiKey:void 0}),this.outputNode.connect(this.outputAudioContext.destination),this.initSession()}async initSession(){const n="gemini-2.5-flash-native-audio-preview-09-2025";try{this.session=await this.client.live.connect({model:n,callbacks:{onopen:()=>{this.updateStatus("Opened")},onmessage:async e=>{var o,r,s,a;const t=(s=(r=(o=e.serverContent)==null?void 0:o.modelTurn)==null?void 0:r.parts[0])==null?void 0:s.inlineData;if(t){this.nextStartTime=Math.max(this.nextStartTime,this.outputAudioContext.currentTime);const u=await Yv($v(t.data),this.outputAudioContext,24e3,1),c=this.outputAudioContext.createBufferSource();c.buffer=u,c.connect(this.outputNode),c.addEventListener("ended",()=>{this.sources.delete(c)}),c.start(this.nextStartTime),this.nextStartTime=this.nextStartTime+u.duration,this.sources.add(c)}if((a=e.serverContent)==null?void 0:a.interrupted){for(const u of this.sources.values())u.stop(),this.sources.delete(u);this.nextStartTime=0}},onerror:e=>{this.updateError(e.message)},onclose:e=>{this.updateStatus("Close:"+e.reason)}},config:{responseModalities:[vo.AUDIO],speechConfig:{voiceConfig:{prebuiltVoiceConfig:{voiceName:"Orus"}}}}})}catch(e){console.error(e)}}updateStatus(n){this.status=n}updateError(n){this.error=n}async startRecording(){if(!this.isRecording){this.inputAudioContext.resume(),this.updateStatus("Requesting microphone access...");try{this.mediaStream=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1}),this.updateStatus("Microphone access granted. Starting capture..."),this.sourceNode=this.inputAudioContext.createMediaStreamSource(this.mediaStream),this.sourceNode.connect(this.inputNode);const n=256;this.scriptProcessorNode=this.inputAudioContext.createScriptProcessor(n,1,1),this.scriptProcessorNode.onaudioprocess=e=>{if(!this.isRecording)return;const i=e.inputBuffer.getChannelData(0);this.session.sendRealtimeInput({media:Xv(i)})},this.sourceNode.connect(this.scriptProcessorNode),this.scriptProcessorNode.connect(this.inputAudioContext.destination),this.isRecording=!0,this.updateStatus("🔴 Recording... Capturing PCM chunks.")}catch(n){console.error("Error starting recording:",n),this.updateStatus(`Error: ${n.message}`),this.stopRecording()}}}stopRecording(){!this.isRecording&&!this.mediaStream&&!this.inputAudioContext||(this.updateStatus("Stopping recording..."),this.isRecording=!1,this.scriptProcessorNode&&this.sourceNode&&this.inputAudioContext&&(this.scriptProcessorNode.disconnect(),this.sourceNode.disconnect()),this.scriptProcessorNode=null,this.sourceNode=null,this.mediaStream&&(this.mediaStream.getTracks().forEach(n=>n.stop()),this.mediaStream=null),this.updateStatus("Recording stopped. Click Start to begin again."))}reset(){var n;(n=this.session)==null||n.close(),this.initSession(),this.updateStatus("Session cleared.")}render(){return ld`
      <div>
        <div class="controls">
          <button
            id="resetButton"
            @click=${this.reset}
            ?disabled=${this.isRecording}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#ffffff">
              <path
                d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" />
            </svg>
          </button>
          <button
            id="startButton"
            @click=${this.startRecording}
            ?disabled=${this.isRecording}>
            <svg
              viewBox="0 0 100 100"
              width="32px"
              height="32px"
              fill="#c80000"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" />
            </svg>
          </button>
          <button
            id="stopButton"
            @click=${this.stopRecording}
            ?disabled=${!this.isRecording}>
            <svg
              viewBox="0 0 100 100"
              width="32px"
              height="32px"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="100" height="100" rx="15" />
            </svg>
          </button>
        </div>

        <div id="status"> ${this.error} </div>
        <gdm-live-audio-visuals-3d
          .inputNode=${this.inputNode}
          .outputNode=${this.outputNode}></gdm-live-audio-visuals-3d>
      </div>
    `}};Kn.styles=od`
    #status {
      position: absolute;
      bottom: 5vh;
      left: 0;
      right: 0;
      z-index: 10;
      text-align: center;
    }

    .controls {
      z-index: 10;
      position: absolute;
      bottom: 10vh;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 10px;

      button {
        outline: none;
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.1);
        width: 64px;
        height: 64px;
        cursor: pointer;
        font-size: 24px;
        padding: 0;
        margin: 0;

        &:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      }

      button[disabled] {
        display: none;
      }
    }
  `;eo([wo()],Kn.prototype,"isRecording",2);eo([wo()],Kn.prototype,"status",2);eo([wo()],Kn.prototype,"error",2);eo([wo()],Kn.prototype,"inputNode",2);eo([wo()],Kn.prototype,"outputNode",2);Kn=eo([cd("gdm-live-audio")],Kn);
