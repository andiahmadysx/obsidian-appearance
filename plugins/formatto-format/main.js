'use strict';

var obsidian = require('obsidian');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var commands$3 = {
	"Format Document": "Dokument formatieren"
};
var editorMenu$3 = {
	"Format Document": "Dokument formatieren"
};
var noticeMessages$3 = {
	"Document Formatted!": "",
	"Document is already formatted!": "",
	"No open document is found.": "",
	"You can only format in editing mode.": "",
	"Please enter a valid number.\nIt must be at least 0.": "",
	"Please enter a valid number.\nIt must be a whole number.": ""
};
var optionWarnings$3 = {
	"Gap value must be a whole number and it needs to be at least 0.": ""
};
var placeholders$3 = {
	"(Default)": ""
};
var optionSections$3 = {
	"Heading gaps": "",
	"Other gaps": "",
	"Format options": "",
	"Other options": ""
};
var headingGaps$3 = {
	"Before top level headings": "",
	"Decides gaps before top level headings.": "",
	"Before first sub heading": "",
	"Decides child heading gaps right before parent headings.": "",
	"Before sub headings": "",
	"Decides gaps before headings that are not in the top level.": ""
};
var otherGaps$3 = {
	"After properties": "",
	"Decides the gap after the property section.": "",
	"Before contents": "",
	"Decides gaps before content sections. (ex: Text before headings)": "",
	"Before contents after code blocks": "",
	"Decides gaps before 'contents that are after code blocks.'": "",
	"Before code blocks": "",
	"Decides gaps before code blocks.": "",
	"Before code blocks after headings": "",
	"Decides gaps before 'code blocks that are after headings.'": ""
};
var formatOptions$3 = {
	"Newline at the end of a document": "",
	"Inserts a newline at the end of a document.": ""
};
var otherOptions$3 = {
	"Notify when no change is needed": "",
	"Displays a different message when no change is needed.": "",
	"Show more detailed error messages": "",
	"Displays additional information when parsing fails.": ""
};
var wasm$4 = {
	parsing: {
		"Failed to parse the document. [Line: {LINE_NUMBER}]": "",
		"Failed to parse the document.": ""
	},
	formatting: {
		"Failed to read options. Some of them are possibly not positive number values.": ""
	}
};
var de = {
	commands: commands$3,
	editorMenu: editorMenu$3,
	noticeMessages: noticeMessages$3,
	optionWarnings: optionWarnings$3,
	placeholders: placeholders$3,
	optionSections: optionSections$3,
	headingGaps: headingGaps$3,
	otherGaps: otherGaps$3,
	formatOptions: formatOptions$3,
	otherOptions: otherOptions$3,
	wasm: wasm$4
};

var commands$2 = {
	"Format Document": "Format Document"
};
var editorMenu$2 = {
	"Format Document": "Format Document"
};
var noticeMessages$2 = {
	"Document Formatted!": "Document Formatted!",
	"Document is already formatted!": "Document is already formatted!",
	"No open document is found.": "No open document is found.",
	"You can only format in editing mode.": "You can only format in editing mode.",
	"Please enter a valid number.\nIt must be at least 0.": "Please enter a valid number.\nIt must be at least 0.",
	"Please enter a valid number.\nIt must be a whole number.": "Please enter a valid number.\nIt must be a whole number."
};
var optionWarnings$2 = {
	"Gap value must be a whole number and it needs to be at least 0.": "Gap value must be a whole number and it needs to be at least 0."
};
var placeholders$2 = {
	"(Default)": "(Default)"
};
var optionSections$2 = {
	"Heading gaps": "Heading gaps",
	"Other gaps": "Other gaps",
	"Format options": "Format options",
	"Other options": "Other options"
};
var headingGaps$2 = {
	"Before top level headings": "Before top level headings",
	"Decides gaps before top level headings.": "Decides gaps before top level headings.",
	"Before first sub heading": "Before first sub heading",
	"Decides child heading gaps right before parent headings.": "Decides child heading gaps right before parent headings.",
	"Before sub headings": "Before sub headings",
	"Decides gaps before headings that are not in the top level.": "Decides gaps before headings that are not in the top level."
};
var otherGaps$2 = {
	"After properties": "After properties",
	"Decides the gap after the property section.": "Decides the gap after the property section.",
	"Before contents": "Before contents",
	"Decides gaps before content sections. (ex: Text before headings)": "Decides gaps before content sections. (ex: Text before headings)",
	"Before contents after code blocks": "Before contents after code blocks",
	"Decides gaps before 'contents that are after code blocks.'": "Decides gaps before 'contents that are after code blocks.'",
	"Before code blocks": "Before code blocks",
	"Decides gaps before code blocks.": "Decides gaps before code blocks.",
	"Before code blocks after headings": "Before code blocks after headings",
	"Decides gaps before 'code blocks that are after headings.'": "Decides gaps before 'code blocks that are after headings.'"
};
var formatOptions$2 = {
	"Newline at the end of a document": "Newline at the end of a document",
	"Inserts a newline at the end of a document.": "Inserts a newline at the end of a document."
};
var otherOptions$2 = {
	"Notify when no change is needed": "Notify when no change is needed",
	"Displays a different message when no change is needed.": "Displays a different message when no change is needed.",
	"Show more detailed error messages": "Show more detailed error messages",
	"Displays additional information when parsing fails.": "Displays additional information when parsing fails."
};
var wasm$3 = {
	parsing: {
		"Failed to parse the document. [Line: {LINE_NUMBER}]": "Failed to parse the document. [Line: {LINE_NUMBER}]",
		"Failed to parse the document.": "Failed to parse the document."
	},
	formatting: {
		"Failed to read options. Some of them are possibly not positive number values.": "Failed to read options. Some of them are possibly not positive number values."
	}
};
var en = {
	commands: commands$2,
	editorMenu: editorMenu$2,
	noticeMessages: noticeMessages$2,
	optionWarnings: optionWarnings$2,
	placeholders: placeholders$2,
	optionSections: optionSections$2,
	headingGaps: headingGaps$2,
	otherGaps: otherGaps$2,
	formatOptions: formatOptions$2,
	otherOptions: otherOptions$2,
	wasm: wasm$3
};

var commands$1 = {
	"Format Document": "Dokumentum formázása"
};
var editorMenu$1 = {
	"Format Document": "Dokumentum formázása"
};
var noticeMessages$1 = {
	"Document Formatted!": "A dokumentum meg lett formázva!",
	"Document is already formatted!": "A dokumentum már meg van formázva!",
	"No open document is found.": "Nem található megnyitott dokumentum.",
	"You can only format in editing mode.": "A formázás csakis a szerkesztői módban lehetséges. ",
	"Please enter a valid number.\nIt must be at least 0.": "Kérlek egy megfelelő számot írjál be.\nLegalább 0 legyen.",
	"Please enter a valid number.\nIt must be a whole number.": "Kérlek egy megfelelő számot írjál be.\nEgész szám legyen."
};
var optionWarnings$1 = {
	"Gap value must be a whole number and it needs to be at least 0.": ""
};
var placeholders$1 = {
	"(Default)": "(Alapértelmezett)"
};
var optionSections$1 = {
	"Heading gaps": "Fejléc hézagok",
	"Other gaps": "Egyéb hézagok",
	"Format options": "Formázási opciók",
	"Other options": "Egyéb opciók"
};
var headingGaps$1 = {
	"Before top level headings": "Fő címsorok előtt",
	"Decides gaps before top level headings.": "Meghatározza a hézag nagyságát a fő címsorok előtt.",
	"Before first sub heading": "Az első alcím előtt",
	"Decides child heading gaps right before parent headings.": "Meghatározza a gyerekcím hézagát közvetlenül a szülőcím előtt.",
	"Before sub headings": "Alcímek előtt",
	"Decides gaps before headings that are not in the top level.": "Meghatározza a nem fő címsorok előtti részeket"
};
var otherGaps$1 = {
	"After properties": "Tulajdonságok után",
	"Decides the gap after the property section.": "Meghatározza a hézagot a tulajdonságok szekció után.",
	"Before contents": "Tartalmak előtt",
	"Decides gaps before content sections. (ex: Text before headings)": "Meghatározza a hézagot a tartalmak előtt. (pl.: Szövegrész a címsorok előtt)",
	"Before contents after code blocks": "Tartalmak előtti kód részek",
	"Decides gaps before 'contents that are after code blocks.'": "Meghatározza azon tartalmi hézagokat, melyek kód részek előtt vannak.",
	"Before code blocks": "Kód részek előtt",
	"Decides gaps before code blocks.": "Meghatározza a hézagot kód részek előtt.",
	"Before code blocks after headings": "Kód részek előtt, a címsorok előtt",
	"Decides gaps before 'code blocks that are after headings.'": "Meghatározza azon kód részi hézagokat, melyek címsorok után vannak."
};
var formatOptions$1 = {
	"Newline at the end of a document": "Új sor a dokumentum végére.",
	"Inserts a newline at the end of a document.": "Beszúr egy új sort a dokumentum végére."
};
var otherOptions$1 = {
	"Notify when no change is needed": "Értesítsen, hogyha nem szükséges változás",
	"Displays a different message when no change is needed.": "Eltérő üzenetet mutat, hogyha nem történt változás",
	"Show more detailed error messages": "Mutasson részletesebb hiba üzeneteket",
	"Displays additional information when parsing fails.": "Plusz információt mutat, amikor az átírás közben hiba történik."
};
var wasm$2 = {
	parsing: {
		"Failed to parse the document. [Line: {LINE_NUMBER}]": "",
		"Failed to parse the document.": ""
	},
	formatting: {
		"Failed to read options. Some of them are possibly not positive number values.": ""
	}
};
var hu = {
	commands: commands$1,
	editorMenu: editorMenu$1,
	noticeMessages: noticeMessages$1,
	optionWarnings: optionWarnings$1,
	placeholders: placeholders$1,
	optionSections: optionSections$1,
	headingGaps: headingGaps$1,
	otherGaps: otherGaps$1,
	formatOptions: formatOptions$1,
	otherOptions: otherOptions$1,
	wasm: wasm$2
};

var commands = {
	"Format Document": "문서 포맷하기"
};
var editorMenu = {
	"Format Document": "문서 포맷하기"
};
var noticeMessages = {
	"Document Formatted!": "포맷 완료!",
	"Document is already formatted!": "문서가 이미 포맷돼 있습니다.",
	"No open document is found.": "열려 있는 문서를 찾지 못했습니다.",
	"You can only format in editing mode.": "편집 모드에서만 포맷할수 있습니다.",
	"Please enter a valid number.\nIt must be at least 0.": "유효한 숫자를 입력해주세요.\n0 이상만 입력할수 있습니다.",
	"Please enter a valid number.\nIt must be a whole number.": "유효한 숫자를 입력해주세요.\n자연수만 입력할 수 있습니다."
};
var optionWarnings = {
	"Gap value must be a whole number and it needs to be at least 0.": "여백 옵션의 값은 반드시 자연수이고 0 이상이어야 합니다."
};
var placeholders = {
	"(Default)": "(기본값)"
};
var optionSections = {
	"Heading gaps": "제목 여백",
	"Other gaps": "기타 여백",
	"Format options": "포맷 옵션",
	"Other options": "기타 옵션"
};
var headingGaps = {
	"Before top level headings": "최상위 제목 앞",
	"Decides gaps before top level headings.": "최상위 제목들의 앞 여백을 결정합니다.",
	"Before first sub heading": "첫 번째 하위 제목 앞",
	"Decides child heading gaps right before parent headings.": "부모 제목 바로 뒤 자식 제목의 여백을 결정합니다.",
	"Before sub headings": "하위 제목 앞",
	"Decides gaps before headings that are not in the top level.": "최상위 제목이 아닌 제목들의 앞 여백을 결정합니다."
};
var otherGaps = {
	"After properties": "속성 영역 뒤",
	"Decides the gap after the property section.": "속성 영역 뒤 여백을 결정합니다.",
	"Before contents": "내용 영역 앞",
	"Decides gaps before content sections. (ex: Text before headings)": "내용 영역들의 앞 여백을 결정합니다. (예: 제목 앞 텍스트)",
	"Before contents after code blocks": "코드 블럭 뒤 내용 영역 앞",
	"Decides gaps before 'contents that are after code blocks.'": "'코드 블럭 뒤에 있는 내용 영역들'의 앞 여백을 결정합니다.",
	"Before code blocks": "코드 블럭 앞",
	"Decides gaps before code blocks.": "코드 블럭들의 앞 여백을 결정합니다.",
	"Before code blocks after headings": "제목 뒤 코드 블럭 앞",
	"Decides gaps before 'code blocks that are after headings.'": "'제목 뒤에 있는 코드 블럭들'의 앞 여백을 결정합니다."
};
var formatOptions = {
	"Newline at the end of a document": "문서 끝에 새 줄 추가하기",
	"Inserts a newline at the end of a document.": "문서 끝에 새 줄을 추가합니다."
};
var otherOptions = {
	"Notify when no change is needed": "변경할 사항이 없을 때 알려주기",
	"Displays a different message when no change is needed.": "변경할 사항이 없으면 다른 메세지를 표시합니다.",
	"Show more detailed error messages": "더 상세한 에러 메세지 표시하기",
	"Displays additional information when parsing fails.": "문서를 읽지 못했을 때 추가 정보를 표시합니다."
};
var wasm$1 = {
	parsing: {
		"Failed to parse the document. [Line: {LINE_NUMBER}]": "문서를 읽지 못했습니다. [줄: {LINE_NUMBER}]",
		"Failed to parse the document.": "문서를 읽지 못했습니다."
	},
	formatting: {
		"Failed to read options. Some of them are possibly not positive number values.": "설정을 읽지 못했습니다. 양수가 아닌 값이 있을수도 있습니다."
	}
};
var ko = {
	commands: commands,
	editorMenu: editorMenu,
	noticeMessages: noticeMessages,
	optionWarnings: optionWarnings,
	placeholders: placeholders,
	optionSections: optionSections,
	headingGaps: headingGaps,
	otherGaps: otherGaps,
	formatOptions: formatOptions,
	otherOptions: otherOptions,
	wasm: wasm$1
};

const detectedLanguage = window.localStorage.getItem("language");
const LOCALE_CATEGORY = {
    COMMANDS: "commands",
    EDITOR_MENU: "editorMenu",
    NOTICE_MESSAGES: "noticeMessages",
    OPTION_WARNINGS: "optionWarnings",
    PLACEHOLDERS: "placeholders",
    OPTION_SECTIONS: "optionSections",
    HEADING_GAPS: "headingGaps",
    OTHER_GAPS: "otherGaps",
    FORMAT_OPTIONS: "formatOptions",
    OTHER_OPTIONS: "otherOptions",
};
const locales = {
    en: en,
    de: de,
    hu: hu,
    ko: ko,
};
/** @example getLocale(LOCALE_CATEGORY.COMMANDS, "Format Document") */
const getLocale = (category, key) => {
    var _a;
    const usingLocale = (_a = locales[detectedLanguage]) !== null && _a !== void 0 ? _a : locales.en;
    const message = usingLocale[category][key];
    if (message === "") {
        const usingLocale = locales.en;
        return usingLocale[category][key];
    }
    return usingLocale[category][key];
};
/** Returns the "wasm" object in the locale file. */
const getWasmLocale = () => {
    var _a;
    const usingLocale = (_a = locales[detectedLanguage]) !== null && _a !== void 0 ? _a : locales.en;
    return usingLocale.wasm;
};

class FormattoCommands {
    constructor(plugin) {
        this.plugin = plugin;
    }
    registerCommands() {
        this.getCommandsArr().forEach((item) => {
            this.plugin.addCommand(item);
        });
    }
    getCommandsArr() {
        return [
            {
                id: "formatto-logo",
                name: getLocale(LOCALE_CATEGORY.COMMANDS, "Format Document"),
                icon: "formatto-logo",
                editorCallback: (editor) => {
                    this.plugin.utils.formatDocument(editor);
                },
            },
        ];
    }
}

class FormattoEditorMenu {
    constructor(plugin) {
        this.plugin = plugin;
    }
    registerEditorMenus() {
        this.getEventsArr().forEach((item) => {
            this.plugin.registerEvent(item);
        });
    }
    getEventsArr() {
        return [
            this.plugin.app.workspace.on("editor-menu", (menu, editor) => {
                menu.addItem((item) => item
                    .setTitle(getLocale(LOCALE_CATEGORY.EDITOR_MENU, "Format Document"))
                    .setIcon("formatto-logo")
                    .onClick(() => {
                    this.plugin.utils.formatDocument(editor);
                }));
            }),
        ];
    }
}

var formattoLogo = "<svg class=\"formatto__custom-icons\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"2\" y=\"2\" width=\"6.65444\" height=\"3.02\" rx=\"0.5\" />\n<rect x=\"2\" y=\"6.31047\" width=\"12.0693\" height=\"3.44838\" rx=\"0.5\" />\n<rect x=\"10.621\" y=\"2\" width=\"3.44838\" height=\"6.03466\" rx=\"0.5\" />\n<rect x=\"2.03467\" y=\"11\" width=\"6.98996\" height=\"3.01966\" rx=\"0.5\" />\n</svg>";

class FormattoIcons {
    constructor() {
        this.icons = [{ iconId: "formatto-logo", svg: formattoLogo }];
        this.registerIcons = () => {
            this.icons.forEach(({ iconId, svg }) => {
                obsidian.addIcon(iconId, svg);
            });
        };
    }
}

class FormattoRibbonIcons {
    constructor(plugin) {
        this.registerRibbonIcons = () => {
            this.plugin.addRibbonIcon("formatto-logo", "Format Document", () => {
                var _a;
                const editor = (_a = this.plugin.app.workspace.activeEditor) === null || _a === void 0 ? void 0 : _a.editor;
                const activeView = this.plugin.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
                if (!editor) {
                    new obsidian.Notice(getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "No open document is found."));
                    return;
                }
                if (activeView.getMode() !== "source") {
                    new obsidian.Notice(getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "You can only format in editing mode."));
                    return;
                }
                this.plugin.utils.formatDocument(editor);
            });
        };
        this.plugin = plugin;
    }
}

let wasm;

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let WASM_VECTOR_LEN = 0;

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available') } } );

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

let cachedFloat64Memory0 = null;

function getFloat64Memory0() {
    if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64Memory0;
}

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); }
function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}
/**
* This function will be called from the TypeScript side.
* @param {string} input
* @param {any} js_options
* @param {any} js_locales
* @returns {string}
*/
function format_document(input, js_options, js_locales) {
    let deferred2_0;
    let deferred2_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.format_document(retptr, ptr0, len0, addHeapObject(js_options), addHeapObject(js_locales));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred2_0 = r0;
        deferred2_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_error_55f05d797f6dc360 = function(arg0, arg1) {
        console.error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        const ret = getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbindgen_in = function(arg0, arg1) {
        const ret = getObject(arg0) in getObject(arg1);
        return ret;
    };
    imports.wbg.__wbindgen_boolean_get = function(arg0) {
        const v = getObject(arg0);
        const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
        return ret;
    };
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof(obj) === 'string' ? obj : undefined;
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbindgen_is_object = function(arg0) {
        const val = getObject(arg0);
        const ret = typeof(val) === 'object' && val !== null;
        return ret;
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        const ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_jsval_loose_eq = function(arg0, arg1) {
        const ret = getObject(arg0) == getObject(arg1);
        return ret;
    };
    imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof(obj) === 'number' ? obj : undefined;
        getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    };
    imports.wbg.__wbg_String_b9412f8799faab3e = function(arg0, arg1) {
        const ret = String(getObject(arg1));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getwithrefkey_edc2c8960f0f1191 = function(arg0, arg1) {
        const ret = getObject(arg0)[getObject(arg1)];
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_instanceof_ArrayBuffer_836825be07d4c9d2 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof ArrayBuffer;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_buffer_12d079cc21e14bdb = function(arg0) {
        const ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_63b92bc8671ed464 = function(arg0) {
        const ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_a47bac70306a19a7 = function(arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbg_length_c20a40f15020d68a = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_instanceof_Uint8Array_2b3bbecd033d19f6 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Uint8Array;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
        const ret = debugString(getObject(arg1));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_memory = function() {
        const ret = wasm.memory;
        return addHeapObject(ret);
    };

    return imports;
}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedFloat64Memory0 = null;
    cachedInt32Memory0 = null;
    cachedUint8Memory0 = null;


    return wasm;
}

async function __wbg_init(input) {
    if (wasm !== undefined) return wasm;

    if (typeof input === 'undefined') {
        input = new URL('formatto_wasm_bg.wasm', (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.src || new URL('main.js', document.baseURI).href)));
    }
    const imports = __wbg_get_imports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    const { instance, module } = await __wbg_load(await input, imports);

    return __wbg_finalize_init(instance, module);
}

/*
  Type Declarations
*/
/*
  Fallback Option Values
*/
const FALLBACK_HEADING_GAPS = {
    beforeTopLevelHeadings: "3",
    beforeFirstSubHeading: "1",
    beforeSubHeadings: "2",
};
const FALLBACK_OTHER_GAPS = {
    afterProperties: "2",
    beforeContents: "0",
    beforeContentsAfterCodeBlocks: "1",
    beforeCodeBlocks: "1",
    beforeCodeBlocksAfterHeadings: "0",
};
const FALLBACK_FORMAT_OPTIONS = {
    insertNewline: true,
};
const FALLBACK_OTHER_OPTIONS = {
    notifyWhenUnchanged: true,
    showMoreDetailedErrorMessages: false,
};
const FALLBACK_OPTIONS = {
    headingGaps: FALLBACK_HEADING_GAPS,
    otherGaps: FALLBACK_OTHER_GAPS,
    formatOptions: FALLBACK_FORMAT_OPTIONS,
    otherOptions: FALLBACK_OTHER_OPTIONS,
};
/*
  Default Option Values
*/
const EMPTY_HEADING_GAPS = {
    beforeTopLevelHeadings: "",
    beforeFirstSubHeading: "",
    beforeSubHeadings: "",
};
const EMPTY_OTHER_GAPS = {
    afterProperties: "",
    beforeContents: "",
    beforeContentsAfterCodeBlocks: "",
    beforeCodeBlocks: "",
    beforeCodeBlocksAfterHeadings: "",
};
const DEFAULT_OPTIONS = {
    headingGaps: EMPTY_HEADING_GAPS,
    otherGaps: EMPTY_OTHER_GAPS,
    formatOptions: FALLBACK_FORMAT_OPTIONS,
    otherOptions: FALLBACK_OTHER_OPTIONS,
};

class FormattoUtils {
    constructor(plugin) {
        this.plugin = plugin;
    }
    formatDocument(editor) {
        const copiedOptions = JSON.parse(JSON.stringify(this.plugin.settings));
        this.handleEmptyOptions(copiedOptions);
        this.cursorPosition = editor.getCursor();
        this.originalDocument = editor.getValue();
        try {
            this.formattedDocument = format_document(this.originalDocument, copiedOptions, JSON.stringify(getWasmLocale()));
            this.displayMessage();
        }
        catch (error) {
            new obsidian.Notice(error);
        }
        if (!this.formattedDocument)
            return;
        if (this.formattedDocument !== this.originalDocument) {
            editor.setValue(this.formattedDocument);
            editor.setSelection(this.cursorPosition, this.cursorPosition);
        }
        this.clearVariables();
    }
    displayMessage() {
        if (this.plugin.settings.otherOptions.notifyWhenUnchanged &&
            this.formattedDocument === this.originalDocument) {
            new obsidian.Notice(getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "Document is already formatted!"));
        }
        else {
            new obsidian.Notice(getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "Document Formatted!"));
        }
    }
    handleEmptyOptions(copiedOptions) {
        for (const sectionKey of Object.keys(copiedOptions)) {
            for (const optionKey of Object.keys(copiedOptions[sectionKey])) {
                if (copiedOptions[sectionKey][optionKey] === "") {
                    copiedOptions[sectionKey][optionKey] =
                        FALLBACK_OPTIONS[sectionKey][optionKey];
                }
            }
        }
    }
    clearVariables() {
        this.cursorPosition = undefined;
        this.originalDocument = undefined;
        this.formattedDocument = undefined;
    }
}

class FormattoOptionTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.noticeMessages = {
            invalidNumberMessage: getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "Please enter a valid number.\nIt must be at least 0."),
            notWholeNumberMessage: getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "Please enter a valid number.\nIt must be a whole number."),
        };
        this.plugin = plugin;
    }
    checkDecimal(value) {
        return value !== "0" && value !== "1" && parseFloat(value) % 1 !== 0;
    }
    putDefaultIndicator(value) {
        return `${value} ${getLocale(LOCALE_CATEGORY.PLACEHOLDERS, "(Default)")}`;
    }
    display() {
        const { containerEl } = this;
        containerEl.empty();
        const debounceMsg = obsidian.debounce((value) => {
            if (value !== "") {
                // Check if the value is a valid number
                if (isNaN(parseInt(value)) || parseInt(value) < 0) {
                    new obsidian.Notice(this.noticeMessages.invalidNumberMessage);
                    return;
                }
                // Check if the value is a whole number
                if (this.checkDecimal(value)) {
                    new obsidian.Notice(this.noticeMessages.notWholeNumberMessage);
                    return;
                }
            }
        }, 1000, true);
        containerEl.createDiv({}, (div) => {
            div.innerHTML = `<div style="color: var(--text-accent)">
                ${getLocale(LOCALE_CATEGORY.OPTION_WARNINGS, "Gap value must be a whole number and it needs to be at least 0.")}
            </div>`;
            div.className = "setting-item setting-item-description";
        });
        // Heading Gaps
        containerEl.createEl("h2", {
            text: getLocale(LOCALE_CATEGORY.OPTION_SECTIONS, "Heading gaps"),
        });
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Before top level headings"))
            .setDesc(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Decides gaps before top level headings."))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_OPTIONS.headingGaps.beforeTopLevelHeadings))
            .setValue(this.plugin.settings.headingGaps.beforeTopLevelHeadings)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.headingGaps.beforeTopLevelHeadings =
                value;
            yield this.plugin.saveOptions();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Before first sub heading"))
            .setDesc(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Decides child heading gaps right before parent headings."))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_OPTIONS.headingGaps.beforeFirstSubHeading))
            .setValue(this.plugin.settings.headingGaps.beforeFirstSubHeading)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.headingGaps.beforeFirstSubHeading =
                value;
            yield this.plugin.saveOptions();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Before sub headings"))
            .setDesc(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Decides gaps before headings that are not in the top level."))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_OPTIONS.headingGaps.beforeSubHeadings))
            .setValue(this.plugin.settings.headingGaps.beforeSubHeadings)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.headingGaps.beforeSubHeadings =
                value;
            yield this.plugin.saveOptions();
        })));
        // Other Gaps
        containerEl.createEl("h2", {
            text: getLocale(LOCALE_CATEGORY.OPTION_SECTIONS, "Other gaps"),
        });
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "After properties"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Decides the gap after the property section."))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_OPTIONS.otherGaps.afterProperties))
            .setValue(this.plugin.settings.otherGaps.afterProperties)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.otherGaps.afterProperties = value;
            yield this.plugin.saveOptions();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Before contents"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Decides gaps before content sections. (ex: Text before headings)"))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_OPTIONS.otherGaps.beforeContents))
            .setValue(this.plugin.settings.otherGaps.beforeContents)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.otherGaps.beforeContents = value;
            yield this.plugin.saveOptions();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Before contents after code blocks"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Decides gaps before 'contents that are after code blocks.'"))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_OPTIONS.otherGaps
            .beforeContentsAfterCodeBlocks))
            .setValue(this.plugin.settings.otherGaps
            .beforeContentsAfterCodeBlocks)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.otherGaps.beforeContentsAfterCodeBlocks =
                value;
            yield this.plugin.saveOptions();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Before code blocks"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Decides gaps before code blocks."))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_OPTIONS.otherGaps.beforeCodeBlocks))
            .setValue(this.plugin.settings.otherGaps.beforeCodeBlocks)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.otherGaps.beforeCodeBlocks = value;
            yield this.plugin.saveOptions();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Before code blocks after headings"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Decides gaps before 'code blocks that are after headings.'"))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_OPTIONS.otherGaps
            .beforeCodeBlocksAfterHeadings))
            .setValue(this.plugin.settings.otherGaps
            .beforeCodeBlocksAfterHeadings)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.otherGaps.beforeCodeBlocksAfterHeadings =
                value;
            yield this.plugin.saveOptions();
        })));
        // Format Options
        containerEl.createEl("h2", {
            text: getLocale(LOCALE_CATEGORY.OPTION_SECTIONS, "Format options"),
        });
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.FORMAT_OPTIONS, "Newline at the end of a document"))
            .setDesc(getLocale(LOCALE_CATEGORY.FORMAT_OPTIONS, "Inserts a newline at the end of a document."))
            .addToggle((text) => text
            .setValue(this.plugin.settings.formatOptions.insertNewline)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.formatOptions.insertNewline =
                value;
            yield this.plugin.saveOptions();
        })));
        // Other Options
        containerEl.createEl("h2", {
            text: getLocale(LOCALE_CATEGORY.OPTION_SECTIONS, "Other options"),
        });
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_OPTIONS, "Notify when no change is needed"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_OPTIONS, "Displays a different message when no change is needed."))
            .addToggle((text) => text
            .setValue(this.plugin.settings.otherOptions.notifyWhenUnchanged)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.otherOptions.notifyWhenUnchanged =
                value;
            yield this.plugin.saveOptions();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_OPTIONS, "Show more detailed error messages"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_OPTIONS, "Displays additional information when parsing fails."))
            .addToggle((text) => text
            .setValue(this.plugin.settings.otherOptions
            .showMoreDetailedErrorMessages)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.otherOptions.showMoreDetailedErrorMessages =
                value;
            yield this.plugin.saveOptions();
        })));
    }
}

function _loadWasmModule (sync, filepath, src, imports) {
  function _instantiateOrCompile(source, imports, stream) {
    var instantiateFunc = stream ? WebAssembly.instantiateStreaming : WebAssembly.instantiate;
    var compileFunc = stream ? WebAssembly.compileStreaming : WebAssembly.compile;

    if (imports) {
      return instantiateFunc(source, imports)
    } else {
      return compileFunc(source)
    }
  }

  
var buf = null;
var isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

if (isNode) {
  
buf = Buffer.from(src, 'base64');

} else {
  
var raw = globalThis.atob(src);
var rawLength = raw.length;
buf = new Uint8Array(new ArrayBuffer(rawLength));
for(var i = 0; i < rawLength; i++) {
   buf[i] = raw.charCodeAt(i);
}

}


  {
    return _instantiateOrCompile(buf, imports, false)
  }
}

function formatto_wasm(imports){return _loadWasmModule(0, null, 'AGFzbQEAAAABwAEaYAJ/fwF/YAJ/fwBgA39/fwF/YAN/f38AYAF/AGABfwF/YAR/f39/AGAFf39/f38AYAR/f39/AX9gAAF/YAV/f39+fwBgBn9/f39/fwBgBX9/f39/AX9gBn9/f39/fwF/YAd/f39/f39/AGAJf39/f39/fn5+AGAHf39/f39/fwF/YAN+f38Bf2AEf39/fgBgAABgBX9/fn9/AGAEf35/fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwAC7QUXA3diZxxfX3diZ19lcnJvcl81NWYwNWQ3OTdmNmRjMzYwAAEDd2JnGl9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmAAQDd2JnF19fd2JpbmRnZW5faXNfdW5kZWZpbmVkAAUDd2JnDV9fd2JpbmRnZW5faW4AAAN3YmcWX193YmluZGdlbl9ib29sZWFuX2dldAAFA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAQN3YmcUX193YmluZGdlbl9pc19vYmplY3QABQN3YmcbX193YmluZGdlbl9vYmplY3RfY2xvbmVfcmVmAAUDd2JnGV9fd2JpbmRnZW5fanN2YWxfbG9vc2VfZXEAAAN3YmcVX193YmluZGdlbl9udW1iZXJfZ2V0AAEDd2JnHV9fd2JnX1N0cmluZ19iOTQxMmY4Nzk5ZmFhYjNlAAEDd2JnFF9fd2JpbmRnZW5fZXJyb3JfbmV3AAADd2JnFV9fd2JpbmRnZW5fc3RyaW5nX25ldwAAA3diZyRfX3diZ19nZXR3aXRocmVma2V5X2VkYzJjODk2MGYwZjExOTEAAAN3YmctX193YmdfaW5zdGFuY2VvZl9BcnJheUJ1ZmZlcl84MzY4MjViZTA3ZDRjOWQyAAUDd2JnHV9fd2JnX2J1ZmZlcl8xMmQwNzljYzIxZTE0YmRiAAUDd2JnGl9fd2JnX25ld182M2I5MmJjODY3MWVkNDY0AAUDd2JnGl9fd2JnX3NldF9hNDdiYWM3MDMwNmExOWE3AAMDd2JnHV9fd2JnX2xlbmd0aF9jMjBhNDBmMTUwMjBkNjhhAAUDd2JnLF9fd2JnX2luc3RhbmNlb2ZfVWludDhBcnJheV8yYjNiYmVjZDAzM2QxOWY2AAUDd2JnF19fd2JpbmRnZW5fZGVidWdf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IgRBCWsiCUEXS0EBIAl0QZOAgARxRXINAiABIAJBAWoiAjYCFCACIAVHDQALIAUhAgsgA0EFNgJYIANBGGogAUEMaiAFIAJBAWoiASABIAVLGxA1IANB2ABqIAMoAhggAygCHBCMASEBIABBBjoAACAAIAE2AgQMAQsCQAJAAkACQAJ/AkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIARB5QBNBEAgBEEiRg0GIARBLUYNBSAEQdsARw0BIAEgAS0AGEEBayIEOgAYIARB/wFxDQcgA0EYNgJYIANBCGogBiAFIAJBAWoiASABIAVLGxA1IANB2ABqIAMoAgggAygCDBCMASEBIABBBjoAACAAIAE2AgQMFQsgBEHzAE0EQCAEQeYARg0EIARB7gBHDQEgASACQQFqNgIUIAFB0LfAAEEDEF0iAUUNAiAAQQY6AAAgACABNgIEDBULIARB9ABGDQIgBEH7AEYNBwsgBEEwa0H/AXFBCkkNByADQQo2AlggAyAGIAUgAkEBaiICIAIgBUsbEDUgAyADQdgAaiADKAIAIAMoAgQQjAE2AiQMEAsgA0EAOgAgIAAgAykDIDcDACAAQQhqIANBKGopAwA3AwAgAEEQaiADQTBqKQMANwMADBILIAEgAkEBajYCFCABQdO3wABBAxBdIgEEQCAAQQY6AAAgACABNgIEDBILIANBgQI7ASAgACADKQMgNwMAIABBCGogA0EoaikDADcDACAAQRBqIANBMGopAwA3AwAMEQsgASACQQFqNgIUIAFB1rfAAEEEEF0iAQRAIABBBjoAACAAIAE2AgQMEQsgA0EBOwEgIAAgAykDIDcDACAAQQhqIANBKGopAwA3AwAgAEEQaiADQTBqKQMANwMADBALIAEgAkEBajYCFCADQThqIAFBABAvIAMpAzhCA1ENBCADQSBqIANBOGoQbyADLQAgQQZHBEAgACADKQMgNwMAIABBEGogA0EwaikDADcDACAAQQhqIANBKGopAwA3AwAMEAsgAygCJCABEIcBIQEgAEEGOgAAIAAgATYCBAwPCyABQQA2AgggASACQQFqNgIUIANB2ABqIAYgARAxIAMoAlwhBCADKAJYIgVBAkYNBCADKAJgIQIgBUUEQCADQSBqIQVBACEGAkAgAkUEQEEBIQcMAQsgAkEATgRAQYGNwQAtAAAaQQEhBiACQQEQzQEiBw0BCyAGIAIQwgEACyAHIAQgAhD9ASEEIAUgAjYCDCAFIAQ2AgggBSACNgIEIAVBAzoAACADLQAgQQZGDQwgACADKQMgNwMAIABBEGogA0EwaikDADcDACAAQQhqIANBKGopAwA3AwAMDwsgAkUEQEEBIQEMDgtBACEGIAJBAE4EQEGBjcEALQAAGkEBIQYgAkEBEM0BIgENDgsgBiACEMIBAAsgASACQQFqNgIUIANBAToAgAEgAyABNgJ8IANBADYCjAEgA0KAgICAgAE3AoQBIANB2ABqIANB/ABqECUgAy0AWCIFQQdGDQQgA0HYAGpBAXIiB0EIaiEMIAdBD2ohDgJAA0AgBUH/AXFBBkYNASADKAKMASIJIAMoAoQBRgRAIwBBEGsiBiQAIAZBCGohCyADQYQBaiICIQQgAigCACEIIwBBIGsiAiQAAn9BACAIIAhBAWoiCksNABpBBCAEKAIAIghBAXQiDSAKIAogDUkbIgogCkEETRsiDUEYbCEPIApB1qrVKklBA3QhCiACIAgEfyACIAhBGGw2AhwgAiAEKAIENgIUQQgFQQALNgIYIAJBCGogCiAPIAJBFGoQaiACKAIIRQRAIAIoAgwhCCAEIA02AgAgBCAINgIEQYGAgIB4DAELIAIoAhAhBCACKAIMCyEIIAsgBDYCBCALIAg2AgAgAkEgaiQAIAYoAggiAkGBgICAeEcEQCACIAYoAgwQwgEACyAGQRBqJAALIAMoAogBIAlBGGxqIgIgBykAADcAASACIAU6AAAgAkEJaiAMKQAANwAAIAJBEGogDikAADcAACADIAlBAWo2AowBIANB2ABqIANB/ABqECUgAy0AWCIFQQdHDQALIAMoAlwhBiADKAKMASIFRQ0IIAMoAogBIQIDQCACEHUgAkEYaiECIAVBAWsiBQ0ACwwICyADKAKEASEGIAMpAogBIRBBACELQQQMCAsgASABLQAYQQFrIgQ6ABggBEH/AXFFDQUgASACQQFqNgIUIANB2ABqIQUjAEHAAWsiAiQAIAJBAToABCACIAE2AgAgAkEIaiACECICQAJAAkACQCACKAIIIgRBgICAgHhrDgIBAAILIAUgAigCDDYCBCAFQQY6AAAMAgsgBUEANgIMIAVBADYCBCAFQQU6AAAMAQsgAikCDCEQIAJBADYCHCACQQA2AhQgAiAQNwKMASACIAQ2AogBIAJBoAFqIAIQpgECQCACLQCgAUEGRwRAIAJBMGogAkGwAWoiCSkDADcDACACQShqIAJBqAFqIgspAwA3AwAgAiACKQOgATcDICACQThqIAJBFGogAkGIAWogAkEgahBYIAItADhBBkcEQCACQThqEHULIAJBPGohBCACQaQBaiEGA0ACQCACQfwAaiACECICQAJAAkACQCACKAJ8IgdBgICAgHhrDgIEAAELIAIoAoABIQQMAQsgAikCgAEhECACKAKAASACQYgBaiACEKYBIAItAIgBQQZHDQEgAigCjAEhBCAHRQ0AIAdBARDeAQsgBUEGOgAAIAUgBDYCBAwECyAGIAIpA4gBNwIAIAZBEGogAkGYAWopAwA3AgAgBkEIaiACQZABaikDADcCACACQUBrIAspAgA3AwAgAkHIAGogCSkCADcDACACQdAAaiACQbgBaigCADYCACACIAIpAqABNwM4IAIgBzYCVCACIBA+AlggAiAQQiCIPgJcIAJB8ABqIARBEGopAgA3AwAgAkHoAGogBEEIaikCADcDACACIAQpAgA3A2AgAkGgAWogAkEUaiACQdQAaiACQeAAahBYIAItAKABQQZGDQEgAkGgAWoQdQwBCwsgAkGrAWogAkEcaigCADYAACAFQQU6AAAgAiACKQIUNwCjASAFIAIpAKABNwABIAVBCGogAkGnAWopAAA3AAAMAgsgBSACKAKkATYCBCAFQQY6AAAgBEUNACAQpyAEQQEQ3gELIAJBFGoQdgsgAkHAAWokACABIAEtABhBAWo6ABgjAEEwayIEJAACfyABKAIUIgIgASgCECIFSQRAIAFBDGohByABKAIMIQkDQAJAAkACQAJAIAIgCWotAAAiBkEMTQRAIAZBCWtBAkkNBAwBCyAGQR9NBEAgBkENRw0BDAQLIAZBIEYNAyAGQf0ARg0BIAZBLEYNAgsgBEEWNgIkIARBCGogByAFIAJBAWoiAiACIAVLGxA1IARBJGogBCgCCCAEKAIMEIwBDAULIAEgAkEBajYCFEEADAQLIARBFTYCJCAEQRhqIAcgBSACQQFqIgIgAiAFSxsQNSAEQSRqIAQoAhggBCgCHBCMAQwDCyABIAJBAWoiAjYCFCACIAVHDQALIAUhAgsg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EP0BIAc2AqABIApBoAFqJAALrQsBBX8jAEEQayIDJAACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAEOKAYBAQEBAQEBAQIEAQEDAQEBAQEBAQEBAQEBAQEBAQEBAQEIAQEBAQcACyABQdwARg0ECyACQQFxRSABQYAGSXINBwJ/IAFBC3QhAkEhIQVBISEGAkADQCACIAVBAXYgBGoiBUECdEH8g8EAaigCAEELdCIHRwRAIAUgBiACIAdJGyIGIAVBAWogBCACIAdLGyIEayEFIAQgBkkNAQwCCwsgBUEBaiEECwJ/AkAgBEEgTQRAIARBAnQiAkH8g8EAaigCAEHXBSEGAkAgBEEgRg0AIAJBgITBAGoiAkUNACACKAIAQRV2IQYLQRV2IQIgBA0BQQAMAgsgBEEhQciBwQAQfQALIARBAnRB+IPBAGooAgBB////AHELIQQCQAJAIAYgAkF/c2pFDQAgASAEayEHQdcFIAIgAkHXBU0bIQUgBkEBayEGQQAhBANAIAIgBUYNAiAEIAJBgIXBAGotAABqIgQgB0sNASAGIAJBAWoiAkcNAAsgBiECCyACQQFxDAELIAVB1wVB2IHBABB9AAtFDQcgA0EIakEAOgAAIANBADsBBiADQf0AOgAPIAMgAUEPcUG26sAAai0AADoADiADIAFBBHZBD3FBturAAGotAAA6AA0gAyABQQh2QQ9xQbbqwABqLQAAOgAMIAMgAUEMdkEPcUG26sAAai0AADoACyADIAFBEHZBD3FBturAAGotAAA6AAogAyABQRR2QQ9xQbbqwABqLQAAOgAJIAFBAXJnQQJ2QQJrIgFBC08NCCADQQZqIAFqIgJBlILBAC8AADsAACACQQJqQZaCwQAtAAA6AAAgACADKQEGNwAAIABBCGogA0EOai8BADsAACAAQQo6AAsgACABOgAKDAsLIABBgAQ7AQogAEIANwECIABB3OgBOwEADAoLIABBgAQ7AQogAEIANwECIABB3OQBOwEADAkLIABBgAQ7AQogAEIANwECIABB3NwBOwEADAgLIABBgAQ7AQogAEIANwECIABB3LgBOwEADAcLIABBgAQ7AQogAEIANwECIABB3OAAOwEADAYLIAJBgAJxRQ0BIABBgAQ7AQogAEIANwECIABB3M4AOwEADAULIAJBgIAEcQ0D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ajYCACADIAIQmQEACzgBAX8gASgCACABQQA2AgAEQCABKAIEIgFBhAFPBEAgARABCyAAQQA2AgAPC0HUjsAAQRUQ9AEAC3QBAn8CQAJAAkACQCAALQAADgUBAQECAwALIABBBGoQdgsPCyAAQQRqEL4BDwsgAEEEaiIAKAIIIgIEQCAAKAIEIQEDQCABEHUgAUEYaiEBIAJBAWsiAg0ACwsgACgCACIBBEAgACgCBCABQRhsQQgQ3gELCzkAAkACfyACQYCAxABHBEBBASAAIAIgASgCEBEAAA0BGgsgAw0BQQALDwsgACADIAQgASgCDBECAAuqAgECfyMAQSBrIgIkACACQQE7ARwgAiABNgIYIAIgADYCFCACQYTswAA2AhAgAkEBNgIMIwBBEGsiASQAIAJBDGoiACgCCCICRQRAQYTKwAAQ4wEACyABIAAoAgw2AgwgASAANgIIIAEgAjYCBCMAQRBrIgAkACABQQRqIgEoAgAiAigCDCEDAkACQAJAAkAgAigCBA4CAAECCyADDQFBASECQQAhAwwCCyADDQAgAigCACICKAIEIQMgAigCACECDAELIAAgAjYCDCAAQYCAgIB4NgIAIABByMrAACABKAIEIgAoAgggASgCCCAALQAQIAAtABEQXgALIAAgAzYCBCAAIAI2AgAgAEG0ysAAIAEoAgQiACgCCCABKAIIIAAtABAgAC0AERBeAAuVdgMbfiV/AXwgASgCHEEBcSEdIAArAwAhQgJAIAEoAggEQAJ/IAEhKyABKAIMIS5BACEBIwBB8AhrIiUkACBCvSEFAn9BAiBCIEJiDQAaIAVC/////////weDIgJCgICAgICAgAiEIAVCAYZC/v///////w+DIAVCNIinQf8PcSIBGyIHQgGDIQQgBUKAgICAgICA+P8AgyEDAkACQCACUARAQQMgA0KAgICAgICA+P8AUQ0DGiADUEUNAUEEDAMLIANQDQELQoCAgICAgIAgIAdCAYYgB0KAgICAgICACFEiABshB0ICQgEgABshA0HLd0HMdyAAGyABaiEBIARQDAELIAFBswhrIQFCASEDIARQCyEAICUgATsB6AggJSADNwPgCCAlQgE3A9gIICUgBzcD0AggJSAAOgDqCAJ/IABBAkYEQEEBITVBAAwBCyAdRQRAQdvnwABBASAFQgBTGyE1IAVCP4inDAELQdvnwABB3OfAACAFQgBTGyE1QQELISwCQAJ/AkACQAJAAkACQEEDIABBAmtB/wFxIgAgAEEDTxtBAWsOAwECAwALICVBAzYCmAggJUHd58AANgKUCCAlQQI7AZAIQQEhACAlQZAIagwECyAlQQM2ApgIICVB4OfAADYClAggJUECOwGQCEEBIQAgJUGQCGoMAwtBAiEAICVBAjsBkAggLkUNASAlQaAIaiAuNgIAICVBADsBnAggJUECNgKYCCAlQdnnwAA2ApQIICVBkAhqDAILQXRBBSABwSIAQQBIGyAAbCIAQcD9AEkEQCAlQZAIaiEnICVBEGohKCAAQQR2QRVqISNBgIB+QQAgLmsgLkGAgAJPGyExAkACQAJ/AkACQAJAAkAgJUHQCGoiACkDACICUEUEQCACQoCAgICAgICAIFoNASAjRQ0CQaB/IAAvARgiAEEgayAAIAJCgICAgBBUIgEbIgBBEGsgACACQiCGIAIgARsiAkKAgICAgIDAAFQiARsiAEEIayAAIAJCEIYgAiABGyICQoCAgICAgICAAVQiARsiAEEEayAAIAJCCIYgAiABGyICQoCAgICAgICAEFQiARsiAEECayAAIAJCBIYgAiABGyICQoCAgICAgICAwABUIgAbIAJCAoYgAiAAGyICQgBZayIAa8FB0ABsQbCnBWpBzhBtIgFB0QBPDQMgAUEEdCIBQaDYwABqKQMAIghC/////w+DIgYgAiACQn+FQj+IhiIEQiCIIgJ+IgVCIIggAiAIQiCIIgJ+fCACIARC/////w+DIgR+IgJCIIh8IAVC/////w+DIAQgBn5CIIh8IAJC/////w+DfEKAgICACHxCIIh8IgJBQCAAIAFBqNjAAGovAQBqayIkQT9xrSIIiKchACABQarYwABqLwEAIR0gAkIBIAiGIgZCAX0iBYMiA1AEQCAjQQpLDQcgI0ECdEG05cAAaigCACAASw0HCyAAQZDOAE8EQCAAQcCEPUkNBSAAQYDC1y9PBEBBCEEJIABBgJTr3ANJIgEbISBBgMLXL0GAlOvcAyABGwwHC0EGQQcgAEGAreIESSIBGyEgQcCEPUGAreIEIAEbDAYLIABB5ABPBEBBAkEDIABB6AdJIgEbISBB5ABB6AcgARsMBgtBCkEBIABBCUsiIBsMBQtB89PA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QQJqICtLDQEgIEECakEwICEQgAIaDAELIDVBMToAACArBEAgNUEBakEwICsQgAIaCyAeQRFJBEAgHiA1akEwOgAAIDBBAWohMCArQQJqIR4MAQsgHkERQczVwAAQfQALIB5BEU0EQCA5IDA7AQggOSAeNgIEIDkgNTYCACABQaAKaiQADAYLIB5BEUHc1cAAEOABAAsgIEEoQciCwQAQ4AEAC0EoQShByILBABB9AAsgAEEoQciCwQAQ4AEAC0HYgsEAQRpByILBABCVAQALICZB2ABqICZBKGooAgA2AgAgJiAmKQIgNwNQCyAmICYoAlAgJigCVCAmLwFYQQAgJkEgahA7ICYoAgQhACAmKAIADAELICZBAjsBIEEBIQAgJkEBNgIoICZB4+fAADYCJCAmQSBqCyEBICYgADYCXCAmIAE2AlggJiAtNgJUICYgPDYCUCAmQdAAahApICZBgAFqJAAPCyAdQShByILBABDgAQALMQEBfyMAQRBrIgIkACACQQhqIAAgACgCCBA1IAEgAigCCCACKAIMEIwBIAJBEGokAAstAQF/IAAoAggiAQRAIAAoAgQhAANAIAAQvgEgAEEMaiEAIAFBAWsiAQ0ACwsLLgACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhDDASIADQELAAsgAAs3AQF/IwBBIGsiASQAIAFBADYCGCABQQE2AgwgAUH0g8EANgIIIAFCBDcCECABQQhqIAAQmQEACzkBAX9BASECAkAgACABEEENACABKAIUQbTqwABBAiABKAIYKAIMEQIADQAgAEEEaiABEEEhAgsgAgsyAQF/IAAoAhAiAUGEAU8EQCABEAELAkAgACgCAEUNACAAKAIEIgBBhAFJDQAgABABCwuYBAIGfwF+IwBBEGsiBSQAIAUgADYCDCAFQQxqIQcjAEEQayICJAAgAiABKAIUQdiPwABBBSABKAIYKAIMEQIAOgAMIAIgATYCCCACQQA6AA0gAkEANgIEIwBBQGoiACQAIAJBBGoiAygCACEEIAMCf0EBIAMtAAgNABogAygCBCIBKAIcIgZBBHFFBEBBASABKAIUQajuwABBr+7AACAEG0ECQQEgBBsgASgCGCgCDBECAA0BGiAHIAFB7I/AACgCABEAAAwBCyAERQRAQQEgASgCFEGw7sAAQQIg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AkEKSRs6AAAgAEEBayEAIARCEFQgBEIEiCEERQ0ACwwBC0EAIQADQCAAIANqQf8AaiAEp0EPcSICQTByIAJBN2ogAkEKSRs6AAAgAEEBayEAIARCEFQgBEIEiCEERQ0ACyAAQYABaiICQYEBTwRAIAJBgAFB0O7AABDfAQALIAFBAUHg7sAAQQIgACADakGAAWpBACAAaxAhDAELIABBgAFqIgJBgQFPBEAgAkGAAUHQ7sAAEN8BAAsgAUEBQeDuwABBAiAAIANqQYABakEAIABrECELIANBgAFqJAALCwAgACMAaiQAIwALBwAgABC+AQsOACABQbyCwABBBRDGAQsOACABQYSMwABBFBDGAQsOACABQbiKwABBEhDGAQsOACABQdyLwABBEBDGAQsOACABQdiMwABBExDGAQsOACABQciNwABBFBDGAQsLACAAKAIAIAEQbgsOACABQYiSwABBBRDGAQsOACABQbSZwABBBRDGAQuVAQEBfyAAKAIAIQIjAEEwayIAJAACfyACKAIMRQRAIAIgARBJDAELIABBLGpBODYCACAAQSRqQTg2AgAgAEEDNgIEIABBgJ7AADYCACAAQgM3AgwgACACQQxqNgIgIABBOTYCHCAAIAI2AhggACACQRBqNgIoIAAgAEEYajYCCCABKAIUIAEoAhggABAmCyAAQTBqJAALDQAgAEG8vcAAIAEQJgsNACAAQdS9wAAgARAmCwkAIAAgARAVAAsNACAAQaTBwAAgARAmCw0AIABBsM7AACABECYLDgAgAUGozsAAQQUQxgELGgAgACABQbyNwQAoAgAiAEHSACAAGxEBAAALDAAgACABKQIENwMAC+UDAQZ/IwBBEGsiAyQAAkACfwJAIAFBgAFPBEAgA0EANgIMIAFBgBBJDQEgAUGAgARJBEAgAyABQT9xQYABcjoADiADIAFBDHZB4AFyOgAMIAMgAUEGdkE/cUGAAXI6AA1BAwwDCyADIAFBP3FBgAFyOgAPIAMgAUEGdkE/cUGAAXI6AA4gAyABQQx2QT9xQYABcjoADSADIAFBEnZBB3FB8AFyOgAMQQQMAgsgACgCCCIHIAAoAgBGBEAjAEEgayICJAAgACgCACIFQQFqIgRFBEBBAEEAEMIBAAtBCCAFQQF0IgYgBCAEIAZJGyIEIARBCE0bIgRBf3NBH3Yh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L3N0ci9wYXR0ZXJuLnJzALwAEABPAAAAwwUAABQAAAC8ABAATwAAAMMFAAAhAAAAvAAQAE8AAAC3BQAAIQAAAEVycm9yAAAAvAAQAE8AAABHBAAAJAAAACMtLS1gYGAjIAoAAF0BEAABAAAARmFpbGVkIHRvIHBhcnNlIHRoZSBkb2N1bWVudC4gW0xpbmU6IHtMSU5FX05VTUJFUn1de0xJTkVfTlVNQkVSfUZhaWxlZCB0byBwYXJzZSB0aGUgZG9jdW1lbnQuc3JjL3Rvb2xzL2Zvcm1hdHRpbmcucnMKAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAaW50ZXJuYWwgZXJyb3I6IGVudGVyZWQgdW5yZWFjaGFibGUgY29kZcUBEAAXAAAArwAAABEAAAABAAAAAAAAAEZhaWxlZCB0byByZWFkIG9wdGlvbnMuIFNvbWUgb2YgdGhlbSBhcmUgcG9zc2libHkgbm90IHBvc2l0aXZlIG51bWJlciB2YWx1ZXMuAAAACgAAAAAAAAABAAAACwAAAAoAAAAAAAAAAQAAAAwAAAAKAAAAAAAAAAEAAAANAAAACgAAAAAAAAABAAAADgAAAAoAAAAAAAAAAQAAAA8AAAAKAAAAAAAAAAEAAAAQAAAACgAAAAAAAAABAAAAEQAAAGJlZm9yZVRvcExldmVsSGVhZGluZ3NiZWZvcmVGaXJzdFN1YkhlYWRpbmdiZWZvcmVTdWJIZWFkaW5nc2FmdGVyUHJvcGVydGllc2JlZm9yZUNvbnRlbnRzYmVmb3JlQ29udGVudHNBZnRlckNvZGVCbG9ja3NiZWZvcmVDb2RlQmxvY2tzYmVmb3JlQ29kZUJsb2Nrc0FmdGVySGVhZGluZ3NpbnNlcnROZXdsaW5lbm90aWZ5V2hlblVuY2hhbmdlZHNob3dNb3JlRGV0YWlsZWRFcnJvck1lc3NhZ2VzaGVhZGluZ0dhcHNvdGhlckdhcHNmb3JtYXRPcHRpb25zb3RoZXJPcHRpb25zYXR0ZW1wdCB0byBqb2luIGludG8gY29sbGVjdGlvbiB3aXRoIGxlbiA+IHVzaXplOjpNQVhtaWQgPiBsZW4AOgQQAAkAAAAvcnVzdGMvMTI5ZjNiOTk2NGFmNGQ0YTcwOWQxMzgzOTMwYWRlMTJkZmU3YzA4MS9saWJyYXJ5L2FsbG9jL3NyYy9zdHIucnNMBBAASAAAALIAAAAWAAAATAQQAEgAAACbAAAACgAAAHNyYy90b29scy9wYXJzaW5nL2hlYWRpbmdzLnJzAAAAtAQQAB0AAABmAAAADAAAAGJlZm9yZVRvcExldmVsSGVhZGluZ3NiZWZvcmVGaXJzdFN1YkhlYWRpbmdiZWZvcmVTdWJIZWFkaW5nc+QEEAAWAAAA+gQQABUAAAAPBRAAEQAAAHN0cnVjdCBIZWFkaW5nR2Fwc2FmdGVyUHJvcGVydGllc2JlZm9yZUNvbnRlbnRzYmVmb3JlQ29udGVudHNBZnRlckNvZGVCbG9ja3NiZWZvcmVDb2RlQmxvY2tzYmVmb3JlQ29kZUJsb2Nrc0FmdGVySGVhZGluZ3MAAABKBRAADwAAAFkFEAAOAAAAZwUQAB0AAACEBRAAEAAAAJQFEAAdAAAAc3RydWN0IE90aGVyR2Fwc2luc2VydE5ld2xpbmUAAADsBRAADQAAAHN0cnVjdCBGb3JtYXRPcHRpb25zbm90aWZ5V2hlblVuY2hhbmdlZHNob3dNb3JlRGV0YWlsZWRFcnJvck1lc3NhZ2VzGAYQABMAAAArBhAAHQAAAHN0cnVjdCBPdGhlck9wdGlvbnNQbHVnaW5PcHRpb25zaGVhZGluZ0dhcHNvdGhlckdhcHNmb3JtYXRPcHRpb25zb3RoZXJPcHRpb25zAAAAeAYQAAsAAACDBhAACQAAAIwGEAANAAAAmQYQAAwAAABzdHJ1Y3QgUGx1Z2luT3B0aW9ucxIAAAAEAAAABAAAABMAAAASAAAABAAAAAQAAAAUAAAAEwAAANwGEAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAEAAAABAAAABsAAAAaAAAABAAAAAQAAAAcAAAAGwAAABgHEAAdAAAAHgAAABcAAAAdAAAAGQAAAGB1bndyYXBfdGhyb3dgIGZhaWxlZGRlc2NyaXB0aW9uKCkgaXMgZGVwcmVjYXRlZDsgdXNlIERpc3BsYXltaXNzaW5nIGZpZWxkIGBgAAAAkQcQAA8AAACgBxAAAQAAAGR1cGxpY2F0ZSBmaWVsZCBgAAAAtAcQABEAAACgBxAAAQAAAEVycm9yAAAAHwAAAAQAAAAEAAAAIAAAAHNyYy90b29scy9wYXJzaW5nL2hlYWRpbmdzLnJzAAAA8AcQAB0AAACAAAAALgAAAEZhaWxlZCB0byByZWFkIGxvY2FsZSBmaWxlLnBhcnNpbmdmb3JtYXR0aW5nIQAAAAwAAAAEAAAAIgAAACMAAAAFAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQAkAAAAAAAAAAEAAAAlAAAAL3J1c3RjLzEyOWYzYjk5NjRhZjRkNGE3MDlkMTM4MzkzMGFkZTEyZGZlN2MwODEvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAKwIEABLAAAA/wkAAA4AAABFcnJvcmBgYHNyYy90b29scy9wYXJzaW5nL2hlYWRpbmdzLnJzAAAAEAkQAB0AAAAmAAAAOwAAAC9ydXN0Yy8xMjlmM2I5OTY0YWY0ZDRhNzA5ZDEzODM5MzBhZGUxMmRmZTdjMDgxL2xpYnJhcnkvY29yZS9zcmMvc3RyL3BhdHRlcm4ucnMAQAkQAE8AAAC/AQAANwAAAC9ydXN0Yy8xMjlmM2I5OTY0YWY0ZDRhNzA5ZDEzODM5MzBhZGUxMmRmZTdjMDgxL2xpYnJhcnkvY29yZS9zcmMvc3RyL3BhdHRlcm4ucnMAoAkQAE8AAADDBQAAFAAAAKAJEABPAAAAwwUAACEAAACgCRAATwAAALcFAAAhAAAAoAkQAE8AAABHBAAAJAAAACMgIwABAAAAAAAAADIKEAABAAAAY2Fubm90IGFjY2VzcyBhIFRocmVhZCBMb2NhbCBTdG9yYWdlIHZhbHVlIGR1cmluZyBvciBhZnRlciBkZXN0cnVjdGlvbgAAKQAAAAAAAAABAAAAKgAAAC9ydXN0Yy8xMjlmM2I5OTY0YWY0ZDRhNzA5ZDEzODM5MzBhZGUxMmRmZTdjMDgxL2xpYnJhcnkvc3RkL3NyYy90aHJlYWQvbG9jYWwucnMAnAoQAE8AAAAGAQAAGgAAAGludmFsaWQgdHlwZTogLCBleHBlY3RlZCAAAAD8ChAADgAAAAoLEAALAAAA//////////8oCxAAQcCWwAALzQ0BAAAAAAAAACsAAAAvaG9tZS9ydW5uZXIvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZS13YXNtLWJpbmRnZW4tMC42LjUvc3JjL2xpYi5ycwAAAEwLEABlAAAANQAAAA4AAABjbG9zdXJlIGludm9rZWQgcmVjdXJzaXZlbHkgb3IgYWZ0ZXIgYmVpbmcgZHJvcHBlZAAAOwAAAAwAAAAEAAAAPAAAAD0AAAAFAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA+AAAAAAAAAAEAAAA/AAAAL3J1c3RjLzEyOWYzYjk5NjRhZjRkNGE3MDlkMTM4MzkzMGFkZTEyZGZlN2MwODEvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAFgMEABLAAAA/wkAAA4AAABFcnJvckVPRiB3aGlsZSBwYXJzaW5nIGEgbGlzdEVPRiB3aGlsZSBwYXJzaW5nIGFuIG9iamVjdEVPRiB3aGlsZSBwYXJzaW5nIGEgc3RyaW5nRU9GIHdoaWxlIHBhcnNpbmcgYSB2YWx1ZWV4cGVjdGVkIGA6YGV4cGVjdGVkIGAsYCBvciBgXWBleHBlY3RlZCBgLGAgb3IgYH1gZXhwZWN0ZWQgaWRlbnRleHBlY3RlZCB2YWx1ZWV4cGVjdGVkIGAiYGludmFsaWQgZXNjYXBlaW52YWxpZCBudW1iZXJudW1iZXIgb3V0IG9mIHJhbmdlaW52YWxpZCB1bmljb2RlIGNvZGUgcG9pbnRjb250cm9sIGNoYXJhY3RlciAoXHUwMDAwLVx1MDAxRikgZm91bmQgd2hpbGUgcGFyc2luZyBhIHN0cmluZ2tleSBtdXN0IGJlIGEgc3RyaW5naW52YWxpZCB2YWx1ZTogZXhwZWN0ZWQga2V5IHRvIGJlIGEgbnVtYmVyIGluIHF1b3Rlc2Zsb2F0IGtleSBtdXN0IGJlIGZpbml0ZSAoZ290IE5hTiBvciArLy1pbmYpbG9uZSBsZWFkaW5nIHN1cnJvZ2F0ZSBpbiBoZXggZXNjYXBldHJhaWxpbmcgY29tbWF0cmFpbGluZyBjaGFyYWN0ZXJzdW5leHBlY3RlZCBlbmQgb2YgaGV4IGVzY2FwZXJlY3Vyc2lvbiBsaW1pdCBleGNlZWRlZCBhdCBsaW5lICBjb2x1bW4gAAABAAAAAAAAAO0OEAAJAAAA9g4QAAgAAABFcnJvcigsIGxpbmU6ICwgY29sdW1uOiApAAAAGA8QAAYAAAAeDxAACAAAACYPEAAKAAAAMA8QAAEAAAAvcnVzdGMvMTI5ZjNiOTk2NGFmNGQ0YTcwOWQxMzgzOTMwYWRlMTJkZmU3YzA4MS9saWJyYXJ5L2FsbG9jL3NyYy9jb2xsZWN0aW9ucy9idHJlZS9tYXAvZW50cnkucnNUDxAAYAAAAHEBAAA2AAAAYXNzZXJ0aW9uIGZhaWxlZDogaWR4IDwgQ0FQQUNJVFkvcnVzdGMvMTI5ZjNiOTk2NGFmNGQ0YTcwOWQxMzgzOTMwYWRlMTJkZmU3YzA4MS9saWJyYXJ5L2FsbG9jL3NyYy9jb2xsZWN0aW9ucy9idHJlZS9ub2RlLnJzYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAxAOQPEABbAAAArwIAAAkAAADkDxAAWwAAALMCAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogc3JjLmxlbigpID09IGRzdC5sZW4oKeQPEABbAAAALwcAAAUAAADkDxAAWwAAAK8EAAAjAAAA5A8QAFsAAADvBAAAJAAAAGFzc2VydGlvbiBmYWlsZWQ6IGVkZ2UuaGVpZ2h0ID09IHNlbGYubm9kZS5oZWlnaHQgLSAxAAAA5A8QAFsAAADwAwAACQAAAC9ydXN0Yy8xMjlmM2I5OTY0YWY0ZDRhNzA5ZDEzODM5MzBhZGUxMmRmZTdjMDgxL2xpYnJhcnkvYWxsb2Mvc3JjL2NvbGxlY3Rpb25zL2J0cmVlL25hdmlnYXRlLnJzADAREABfAAAAWQIAADAAAAAvcnVzdGMvMTI5ZjNiOTk2NGFmNGQ0YTcwOWQxMzgzOTMwYWRlMTJkZmU3YzA4MS9saWJyYXJ5L2FsbG9jL3NyYy9jb2xsZWN0aW9ucy9idHJlZS9uYXZpZ2F0ZS5ycwCgERAAXwAAAMcAAAAnAEGupMAAC6EV8D8AAAAAAAAkQAAAAAAAAFlAAAAAAABAj0AAAAAAAIjDQAAAAAAAavhAAAAAAICELkEAAAAA0BJjQQAAAACE15dBAAAAAGXNzUEAAAAgX6ACQgAAAOh2SDdCAAAAopQabUIAAEDlnDCiQgAAkB7EvNZCAAA0JvVrDEMAgOA3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//////////////////////////////////8KCwwNDg////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9AAAAADAAAAAQAAABBAAAAQgAAAAUAAABKAAAACAAAAAQAAABLAAAATAAAAE0AAABib29sZWFuIGBgAADsHhAACQAAAPUeEAABAAAAaW50ZWdlciBgAAAACB8QAAkAAAD1HhAAAQAAAGZsb2F0aW5nIHBvaW50IGAkHxAAEAAAAPUeEAABAAAAY2hhcmFjdGVyIGAARB8QAAsAAAD1HhAAAQAAAHN0cmluZyAAYB8QAAcAAABieXRlIGFycmF5dW5pdCB2YWx1ZU9wdGlvbiB2YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50AAEAAAAAAAAALjBhIGJvb2xlYW5hIHN0cmluZ1RyaWVkIHRvIHNocmluayB0byBhIGxhcmdlciBjYXBhY2l0eQD/HxAAJAAAAC9ydXN0Yy8xMjlmM2I5OTY0YWY0ZDRhNzA5ZDEzODM5MzBhZGUxMmRmZTdjMDgxL2xpYnJhcnkvYWxsb2Mvc3JjL3Jhd192ZWMucnMsIBAATAAAAAMCAAAJAAAASnNWYWx1ZSgpAAAAiCAQAAgAAACQIBAAAQAAAFMAAAAMAAAABAAAAFQAAABVAAAAVgAAAC9ydXN0L2RlcHMvZGxtYWxsb2MtMC4yLjYvc3JjL2RsbWFsbG9jLnJzYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPj0gc2l6ZSArIG1pbl9vdmVyaGVhZAC8IBAAKQAAAKgEAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPD0gc2l6ZSArIG1heF9vdmVyaGVhZAAAvCAQACkAAACuBAAADQAAAEFjY2Vzc0Vycm9yAAEAAAAAAAAAZW50aXR5IG5vdCBmb3VuZHBlcm1pc3Npb24gZGVuaWVkY29ubmVjdGlvbiByZWZ1c2VkY29ubmVjdGlvbiByZXNldGhvc3QgdW5yZWFjaGFibGVuZXR3b3JrIHVucmVhY2hhYmxlY29ubmVjdGlvbiBhYm9ydGVkbm90IGNvbm5lY3RlZGFkZHJlc3MgaW4gdXNlYWRkcmVzcyBub3QgYXZhaWxhYmxlbmV0d29yayBkb3duYnJva2VuIHBpcGVlbnRpdHkgYWxyZWFkeSBleGlzdHNvcGVyYXRpb24gd291bGQgYmxvY2tub3QgYSBkaXJlY3RvcnlpcyBhIGRpcmVjdG9yeWRpcmVjdG9yeSBub3QgZW1wdHlyZWFkLW9ubHkgZmlsZXN5c3RlbSBvciBzdG9yYWdlIG1lZGl1bWZpbGVzeXN0ZW0gbG9vcCBvciBpbmRpcmVjdGlvbiBsaW1pdCAoZS5nLiBzeW1saW5rIGxvb3Apc3RhbGUgbmV0d29yayBmaWxlIGhhbmRsZWludmFsaWQgaW5wdXQgcGFyYW1ldGVyaW52YWxpZCBkYXRhdGltZWQgb3V0d3JpdGUgemVyb25vIHN0b3JhZ2Ugc3BhY2VzZWVrIG9uIHVuc2Vla2FibGUgZmlsZWZpbGVzeXN0ZW0gcXVvdGEgZXhjZWVkZWRmaWxlIHRvbyBsYXJnZXJlc291cmNlIGJ1c3lleGVjdXRhYmxlIGZpbGUgYnVzeWRlYWRsb2NrY3Jvc3MtZGV2aWNlIGxpbmsgb3IgcmVuYW1ldG9vIG1hbnkgbGlua3NpbnZhbGlkIGZpbGVuYW1lYXJndW1lbnQgbGlzdCB0b28gbG9uZ29wZXJhdGlvbiBpbnRlcnJ1cHRlZHVuc3VwcG9ydGVkdW5leHBlY3RlZCBlbmQgb2YgZmlsZW91dCBvZiBtZW1vcnlvdGhlciBlcnJvcnVuY2F0ZWdvcml6ZWQgZXJyb3IgKG9zIGVycm9yICkAAAABAAAAAAAAAGUkEAALAAAAcCQQAAEAAABtZW1vcnkgYWxsb2NhdGlvbiBvZiAgYnl0ZXMgZmFpbGVkAACMJBAAFQAAAKEkEAANAAAAbGlicmFyeS9zdGQvc3JjL2FsbG9jLnJzwCQQABgAAABiAQAACQAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPoJBAAHAAA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aWJyYXJ5L2NvcmUvc3JjL251bS9mbHQyZGVjL21vZC5ycwBAMxAAIwAAALwAAAAFAAAAYXNzZXJ0aW9uIGZhaWxlZDogYnVmWzBdID4gYicwJwBAMxAAIwAAAL0AAAAFAAAAYXNzZXJ0aW9uIGZhaWxlZDogcGFydHMubGVuKCkgPj0gNAAAQDMQACMAAAC+AAAABQAAAC4wLi0rTmFOaW5mMGFzc2VydGlvbiBmYWlsZWQ6IGJ1Zi5sZW4oKSA+PSBtYXhsZW4AAABAMxAAIwAAAH8CAAANAAAAY2Fubm90IHBhcnNlIGludGVnZXIgZnJvbSBlbXB0eSBzdHJpbmdpbnZhbGlkIGRpZ2l0IGZvdW5kIGluIHN0cmluZ251bWJlciB0b28gbGFyZ2UgdG8gZml0IGluIHRhcmdldCB0eXBlbnVtYmVyIHRvbyBzbWFsbCB0byBmaXQgaW4gdGFyZ2V0IHR5cGVudW1iZXIgd291bGQgYmUgemVybyBmb3Igbm9uLXplcm8gdHlwZWZyb21fc3RyX3JhZGl4X2ludDogbXVzdCBsaWUgaW4gdGhlIHJhbmdlIGBbMiwgMzZdYCAtIGZvdW5kIAAAANE0EAA8AAAAbGlicmFyeS9jb3JlL3NyYy9mbXQvbW9kLnJzKS4uMDEyMzQ1Njc4OWFiY2RlZkJvcnJvd011dEVycm9yYWxyZWFkeSBib3Jyb3dlZDogAABUNRAAEgAAAHRvX2RpZ2l0OiByYWRpeCBpcyB0b28gaGlnaCAobWF4aW11bSAzNilwNRAAKAAAAGxpYnJhcnkvY29yZS9zcmMvY2hhci9tZXRob2RzLnJzoDUQACAAAAB/AQAADQAAAAEAAAAAAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQB0AAAAAAAAAAEAAAB1AAAAaW5kZXggb3V0IG9mIGJvdW5kczogdGhlIGxlbiBpcyAgYnV0IHRoZSBpbmRleCBpcyAAABQ2EAAgAAAANDYQABIAAAB2AAAABAAAAAQAAAB3AAAAPT0hPW1hdGNoZXNhc3NlcnRpb24gYGxlZnQgIHJpZ2h0YCBmYWlsZWQKICBsZWZ0OiAKIHJpZ2h0OiAAczYQABAAAACDNhAAFwAAAJo2EAAJAAAAIHJpZ2h0YCBmYWlsZWQ6IAogIGxlZnQ6IAAAAHM2EAAQAAAAvDYQABAAAADMNhAACQAAAJo2EAAJAAAAOiAAAAEAAAAAAAAA+DYQAAIAAAB2AAAADAAAAAQAAAB4AAAAeQAAAHoAAAAgICAgLCAsCn0gfSgoCixsaWJyYXJ5L2NvcmUvc3JjL2ZtdC9udW0ucnMAADM3EAAbAAAAaQAAABcAAAAweDAwMDEwMjAzMDQwNTA2MDcwODA5MTAxMTEyMTMxNDE1MTYxNzE4MTkyMDIxMjIyMzI0MjUyNjI3MjgyOTMwMzEzMjMzMzQzNTM2MzczODM5NDA0MTQyNDM0NDQ1NDY0NzQ4NDk1MDUxNTI1MzU0NTU1NjU3NTg1OTYwNjE2MjYzNjQ2NTY2Njc2ODY5NzA3MTcyNzM3NDc1NzY3Nzc4Nzk4MDgxODI4Mzg0ODU4Njg3ODg4OTkwOTE5MjkzOTQ5NTk2OTc5ODk5MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZhbHNldHJ1ZQAYNRAAGwAAAGYJAAAaAAAAGDUQABsAAABfCQAAIgAAAHJhbmdlIHN0YXJ0IGluZGV4ICBvdXQgb2YgcmFuZ2UgZm9yIHNsaWNlIG9mIGxlbmd0aCCUOBAAEgAAAKY4EAAiAAAAcmFuZ2UgZW5kIGluZGV4INg4EAAQAAAApjgQACIAAABzbGljZSBpbmRleCBzdGFydHMgYXQgIGJ1dCBlbmRzIGF0IAD4OBAAFgAAAA45EAANAAAAYXR0ZW1wdGVkIHRvIGluZGV4IHNsaWNlIHVwIHRvIG1heGltdW0gdXNpemUsORAALAAAAGxpYnJhcnkvY29yZS9zcmMvc3RyL3BhdHRlcm4ucnMAYDkQAB8AAABSBQAAEgAAAGA5EAAfAAAAUgUAACgAAABgORAAHwAAAEUGAAAVAAAAYDkQAB8AAABzBgAAFQAAAGA5EAAfAAAAdAYAABUAAABbLi4uXWJlZ2luIDw9IGVuZCAoIDw9ICkgd2hlbiBzbGljaW5nIGBg1TkQAA4AAADjORAABAAAAOc5EAAQAAAA9zkQAAEAAABieXRlIGluZGV4ICBpcyBub3QgYSBjaGFyIGJvdW5kYXJ5OyBpdCBpcyBpbnNpZGUg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', imports)}

/** Entry Point. */
class FormattoPlugin extends obsidian.Plugin {
    constructor() {
        super(...arguments);
        this.utils = new FormattoUtils(this);
        this.icons = new FormattoIcons();
        this.ribbonIcons = new FormattoRibbonIcons(this);
        this.editorMenus = new FormattoEditorMenu(this);
        this.commands = new FormattoCommands(this);
    }
    /** Load and Save Options */
    loadOptions() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign({}, DEFAULT_OPTIONS, yield this.loadData());
        });
    }
    saveOptions() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
    /** Runs whenever the user starts using the plugin in Obsidian. */
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadOptions();
            // Initialize WebAssembly
            yield (() => __awaiter(this, void 0, void 0, function* () {
                // @ts-expect-error: formatto_wasm should be called.
                yield __wbg_init(yield formatto_wasm());
            }))();
            this.addSettingTab(new FormattoOptionTab(this.app, this));
            this.icons.registerIcons();
            this.ribbonIcons.registerRibbonIcons();
            this.editorMenus.registerEditorMenus();
            this.commands.registerCommands();
            console.log("Plugin Loaded: Formatto\n(Some error details are going to be displayed here.)");
        });
    }
    /** Runs when the plugin is disabled. */
    onunload() {
        console.log("Plugin Unloaded: Formatto");
    }
}

module.exports = FormattoPlugin;
