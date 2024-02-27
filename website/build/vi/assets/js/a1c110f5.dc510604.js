"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9873],{42425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=n(85893),s=n(11151);const i={id:"backend-login",title:"Login with NEAR"},r=void 0,l={id:"develop/integrate/backend-login",title:"Login with NEAR",description:"Recently NEAR has approved a new standard that, among other things, enables users to authenticate into a backend service.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.develop/integrate/backend.md",sourceDirName:"2.develop/integrate",slug:"/develop/integrate/backend-login",permalink:"/vi/develop/integrate/backend-login",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/integrate/backend.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",frontMatter:{id:"backend-login",title:"Login with NEAR"},sidebar:"build",previous:{title:"Integrating Components",permalink:"/vi/develop/integrate/frontend-components"},next:{title:"What are Primitives?",permalink:"/vi/primitives/whatareprimitives"}},c={},o=[{value:"Backend Auth with a NEAR Wallet",id:"backend-auth-with-a-near-wallet",level:2},{value:"1.  Create a Challenge",id:"1--create-a-challenge",level:3},{value:"2. Ask the User to Sign the Challenge",id:"2-ask-the-user-to-sign-the-challenge",level:3},{value:"3. Verify the Signature",id:"3-verify-the-signature",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Recently NEAR has approved a new standard that, among other things, enables users to authenticate into a backend service."}),"\n",(0,a.jsx)(t.p,{children:"The basic idea is that the user will sign a challenge with their NEAR wallet, and the backend will verify the signature. If the signature is valid, then the user is authenticated."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"backend-auth-with-a-near-wallet",children:"Backend Auth with a NEAR Wallet"}),"\n",(0,a.jsx)(t.p,{children:"Authenticating users is a common use-case for backends and web applications. This enables services to provide a personalized experience to users, and to protect sensitive data."}),"\n",(0,a.jsx)(t.p,{children:"To authenticate a user, the backend must verify that the user is who they say they are. To do so, the backend must verify that the user has access to a full-access key that is associated with their account."}),"\n",(0,a.jsx)(t.p,{children:"For this three basic steps are needed:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Create a challenge for the user to sign."}),"\n",(0,a.jsx)(t.li,{children:"Ask the user to sign the challenge with the wallet."}),"\n",(0,a.jsx)(t.li,{children:"Verify the signature corresponds to the user."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"1--create-a-challenge",children:"1.  Create a Challenge"}),"\n",(0,a.jsxs)(t.p,{children:["Assume we want to login the user into our application named ",(0,a.jsx)(t.code,{children:"application-name"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"We first need to create a challenge that the user will sign with their wallet. For this, it is recommended to use a cryptographically secure random number generator to create the challenge."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import { randomBytes } from 'crypto'\nconst challenge = randomBytes(32)\nconst message = 'Login with NEAR'\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Here we use ",(0,a.jsx)(t.a,{href:"https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback",children:"crypto.randomBytes"})," to generate a 32 byte random buffer."]})}),"\n",(0,a.jsx)(t.h3,{id:"2-ask-the-user-to-sign-the-challenge",children:"2. Ask the User to Sign the Challenge"}),"\n",(0,a.jsxs)(t.p,{children:["As of today only ",(0,a.jsx)(t.a,{href:"https://meteorwallet.app",children:"Meteor Wallet"})," supports the ",(0,a.jsx)(t.code,{children:"signMessage"})," method needed to sign the challenge. However, we expect more wallets to support this method in the future."]}),"\n",(0,a.jsx)(t.p,{children:"The message that the user needs to sign contains 4 fields:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Message: The message that the user is signing."}),"\n",(0,a.jsx)(t.li,{children:"Recipient: The recipient of the message."}),"\n",(0,a.jsx)(t.li,{children:"Nonce: The challenge that the user is signing."}),"\n",(0,a.jsx)(t.li,{children:"Callback URL: The URL that the wallet will call with the signature."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// Assuming you setup a wallet selector so far\nconst signature = wallet.signMessage({ message, recipient, nonce: challenge, callbackUrl: <server-auth-url> })\n"})}),"\n",(0,a.jsx)(t.h3,{id:"3-verify-the-signature",children:"3. Verify the Signature"}),"\n",(0,a.jsxs)(t.p,{children:["Once the user has signed the challenge, the wallet will call the ",(0,a.jsx)(t.code,{children:"callbackUrl"})," with the signature. The backend can then verify the signature."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const naj = require(\'near-api-js\')\nconst js_sha256 = require("js-sha256")\n\nexport async function authenticate({ accountId, publicKey, signature }) {\n  // A user is correctly authenticated if:\n  // - The key used to sign belongs to the user and is a Full Access Key\n  // - The object signed contains the right message and domain\n  const full_key_of_user = await verifyFullKeyBelongsToUser({ accountId, publicKey })\n  const valid_signature = verifySignature({ publicKey, signature })\n  return valid_signature && full_key_of_user\n}\n\nexport function verifySignature({ publicKey, signature }) {\n  // Reconstruct the payload that was **actually signed**\n  const payload = new Payload({ message: MESSAGE, nonce: CHALLENGE, recipient: APP, callbackUrl: cURL });\n  const borsh_payload = borsh.serialize(payloadSchema, payload);\n  const to_sign = Uint8Array.from(js_sha256.sha256.array(borsh_payload))\n\n  // Reconstruct the signature from the parameter given in the URL\n  let real_signature = Buffer.from(signature, \'base64\')\n\n  // Use the public Key to verify that the private-counterpart signed the message\n  const myPK = naj.utils.PublicKey.from(publicKey)\n  return myPK.verify(to_sign, real_signature)\n}\n\nexport async function verifyFullKeyBelongsToUser({ publicKey, accountId }) {\n  // Call the public RPC asking for all the users\' keys\n  let data = await fetch_all_user_keys({ accountId })\n\n  // if there are no keys, then the user could not sign it!\n  if (!data || !data.result || !data.result.keys) return false\n\n  // check all the keys to see if we find the used_key there\n  for (const k in data.result.keys) {\n    if (data.result.keys[k].public_key === publicKey) {\n      // Ensure the key is full access, meaning the user had to sign\n      // the transaction through the wallet\n      return data.result.keys[k].access_key.permission == "FullAccess"\n    }\n  }\n\n  return false // didn\'t find it\n}\n\n// Aux method\nasync function fetch_all_user_keys({ accountId }) {\n  const keys = await fetch(\n    "https://rpc.testnet.near.org",\n    {\n      method: \'post\',\n      headers: { \'Content-Type\': \'application/json; charset=utf-8\' },\n      body: `{"jsonrpc":"2.0", "method":"query", "params":["access_key/${accountId}", ""], "id":1}`\n    }).then(data => data.json()).then(result => result)\n  return keys\n}\n\nmodule.exports = { authenticate, verifyFullKeyBelongsToUser, verifySignature };\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var a=n(67294);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);