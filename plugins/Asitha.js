const { cmd } = require("../command");
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, Func, fetchJson } = require("../lib/functions");
const axios = require("axios");



const _0x52090d = {
  pattern: "forward",
  desc: "forward msgs",
  alias: ['fo'],
  category: "owner",
  use: ".forward < Jid address >",
  filename: __filename
};
cmd(_0x52090d, async (_0x3d151a, _0x46cff2, _0x50efef, {
  from: _0xe944a7,
  l: _0x21adb6,
  quoted: _0x496eaf,
  body: _0x46b3a6,
  isCmd: _0x4528f0,
  command: _0x3e0a16,
  args: _0x5823ab,
  q: _0x3560c8,
  isGroup: _0x538ca0,
  sender: _0x2da80a,
  senderNumber: _0x4d7f06,
  botNumber2: _0x39a5b6,
  botNumber: _0xd13ed,
  pushname: _0x2e50a4,
  isMe: _0x505afb,
  isOwner: _0x5c4365,
  groupMetadata: _0x5d284b,
  groupName: _0x6b150a,
  participants: _0x428a33,
  groupAdmins: _0x200496,
  isBotAdmins: _0x20cea1,
  isAdmins: _0x43f953,
  reply: _0x28fe34
}) => {
  if (!_0x5c4365) {
    return _0x28fe34("*Owner Only ❌*");
  }
  if (!_0x3560c8 || !_0x50efef.quoted) {
    _0x28fe34("*give me message ❌*");
  }
  let _0x231c7e;
  let _0x299031 = {
    key: _0x46cff2.quoted?.["fakeObj"]?.["key"]
  };
  if (_0x46cff2.quoted?.["documentWithCaptionMessage"]?.["message"]?.["documentMessage"]) {
    let _0xb60b8a = _0x46cff2.quoted.documentWithCaptionMessage.message.documentMessage.mimetype;
    const _0x321462 = require("mime-types");
    let _0x5b1453 = _0x321462.extension(_0xb60b8a);
    _0x46cff2.quoted.documentWithCaptionMessage.message.documentMessage.fileName = (_0x231c7e ? _0x231c7e : _0x46cff2.quoted.documentWithCaptionMessage.message.documentMessage.caption) + '.' + _0x5b1453;
  }
  _0x299031.message = _0x46cff2.quoted;
  return _0x28fe34("*Message forwarded to:*\n\n " + _0x3560c8);
});
function _0x2e4d(_0x169b09, _0x13f5b9) {
  const _0x49803e = _0x1bbb();
  _0x2e4d = function (_0x1bbb39, _0x2e4d36) {
    _0x1bbb39 = _0x1bbb39 - 224;
    let _0x466b4d = _0x49803e[_0x1bbb39];
    return _0x466b4d;
  };
  return _0x2e4d(_0x169b09, _0x13f5b9);
}
function _0x3eb3d5(_0x17e72f) {
  function _0x22afc4(_0xed1fca) {
    if (typeof _0xed1fca === "string") {
      return function (_0x486822) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0xed1fca / _0xed1fca).length !== 1 || _0xed1fca % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x22afc4(++_0xed1fca);
  }
  try {
    if (_0x17e72f) {
      return _0x22afc4;
    } else {
      _0x22afc4(0);
    }
  } catch (_0x4fbd0e) {}
}
