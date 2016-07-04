// List of all possible keys.
KEYS = [
	'TRNS',
	'NO',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'0',
	'ENT',
	'ESC',
	'BSPC',
	'TAB',
	'SPC',
	'MINS',
	'EQL',
	'LBRC',
	'RBRC',
	'BSLS',
	'NUHS',
	'SCLN',
	'QUOT',
	'GRV',
	'COMM',
	'DOT',
	'SLSH',
	'CAPS',
	'F1',
	'F2',
	'F3',
	'F4',
	'F5',
	'F6',
	'F7',
	'F8',
	'F9',
	'F10',
	'F11',
	'F12',
	'PSCR',
	'SLCK',
	'PAUS',
	'INS',
	'HOME',
	'PGUP',
	'DEL',
	'END',
	'PGDN',
	'RGHT',
	'LEFT',
	'DOWN',
	'UP',
	'NLCK',
	'PSLS',
	'PAST',
	'PMNS',
	'PPLS',
	'PENT',
	'P1',
	'P2',
	'P3',
	'P4',
	'P5',
	'P6',
	'P7',
	'P8',
	'P9',
	'P0',
	'PDOT',
	'NUBS',
	'APP',
	'POWER',
	'PEQL',
	'F13',
	'F14',
	'F15',
	'F16',
	'F17',
	'F18',
	'F19',
	'F20',
	'F21',
	'F22',
	'F23',
	'F24',
	'EXECUTE',
	'HELP',
	'MENU',
	'SELECT',
	'STOP',
	'AGAIN',
	'UNDO',
	'CUT',
	'COPY',
	'PASTE',
	'FIND',
	'_MUTE',
	'_VOLUP',
	'_VOLDOWN',
	'LOCKING_CAPS',
	'LOCKING_NUM',
	'LOCKING_SCROLL',
	'PCMM',
	'KP_EQUAL_AS400',
	'RO',
	'KANA',
	'JYEN',
	'HENK',
	'MHEN',
	'INT6',
	'INT7',
	'INT8',
	'INT9',
	'LANG1',
	'LANG2',
	'LANG3',
	'LANG4',
	'LANG5',
	'LANG6',
	'LANG7',
	'LANG8',
	'LANG9',
	'ALT_ERASE',
	'SYSREQ',
	'CANCEL',
	'CLEAR',
	'PRIOR',
	'RETURN',
	'SEPARATOR',
	'OUT',
	'OPER',
	'CLEAR_AGAIN',
	'CRSEL',
	'EXSEL',
	'LCTL',
	'LSFT',
	'LALT',
	'LGUI',
	'RCTL',
	'RSFT',
	'RALT',
	'RGUI',
	'PWR',
	'SLEP',
	'WAKE',
	'MUTE',
	'VOLU',
	'VOLD',
	'MNXT',
	'MPRV',
	'MSTP',
	'MPLY',
	'MSEL',
	'MAIL',
	'CALC',
	'MYCM',
	'WSCH',
	'WHOM',
	'WBAK',
	'WFWD',
	'WSTP',
	'WREF',
	'WFAV',
	'MS_U',
	'MS_D',
	'MS_L',
	'MS_R',
	'BTN1',
	'BTN2',
	'BTN3',
	'BTN4',
	'BTN5',
	'WH_U',
	'WH_D',
	'WH_L',
	'WH_R',
	'ACL0',
	'ACL1',
	'ACL2',
	'FN0',
	'FN1',
	'FN2',
	'FN3',
	'FN4',
	'FN5',
	'FN6',
	'FN7',
	'FN8',
	'FN9',
	'FN10',
	'FN11',
	'FN12',
	'FN13',
	'FN14',
	'FN15',
	'FN16',
	'FN17',
	'FN18',
	'FN19',
	'FN20',
	'FN21',
	'FN22',
	'FN23',
	'FN24',
	'FN25',
	'FN26',
	'FN27',
	'FN28',
	'FN29',
	'FN30',
	'FN31'
];

SYMBOLS = {
	'':  'TRNS',
	'`': 'GRV',
	'-': 'MINS',
	'=': 'EQL',
	'[': 'LBRC',
	']': 'RBRC',
	'\\':'BSLS',
	';': 'SCLN',
	'\'':'QUOT',
	',': 'COMM',
	'.': 'DOT',
	'/': 'SLSH',
	'ENTER': 'ENT',
	'BACKSPACE': 'BSPC',
	'SPACE': 'SPC',
	'LCTRL': 'LCTL',
	'LSHIFT': 'LSFT',
	'RCTRL': 'RCTL',
	'RSHIFT': 'RSFT',
	'PRTSCR': 'PSCR',
	'SCROLL LOCK': 'SLCK',
	'PAUSE': 'PAUS',
	'INSERT': 'INS',
	'DELETE': 'DEL',
	'RIGHT': 'RGHT',
	'NUMLOCK': 'NLCK',
	'P/': 'PSLS',
	'P*': 'PAST',
	'P-': 'PMNS',
	'P+': 'PPLS',
	'P.': 'PDOT',
	'P=': 'PEQL',
	'PENTER': 'PENT',
	'POWER': 'PWR',
	'SLEEP': 'SLEP',
	'VOL DN': 'VOLD',
	'VOL UP': 'VOLU',
	'L1': 'FN0',
	'L2': 'FN1',
	'L3': 'FN2',
	'L4': 'FN3',
	'L5': 'FN4',
	'L6': 'FN5',
	'L7': 'FN6',
	'T1': 'FN7',
	'T2': 'FN8',
	'T3': 'FN9',
	'T4': 'FN10',
	'T5': 'FN11',
	'T6': 'FN12',
	'T7': 'FN13',
	'M0': 'FN14',
	'M1': 'FN15',
	'M2': 'FN16',
	'M3': 'FN17',
	'M4': 'FN18',
	'M5': 'FN19',
	'M6': 'FN20',
	'M7': 'FN21',
};

// List of all possible pins.
PINS = [
	'B0', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7',
	'C6', 'C7',
	'D0', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7',
	'E0',
	'F0', 'F1', 'F4', 'F5', 'F6', 'F7'
];

// UI key size.
UI_KEY_SIZE = 3.7;

// Config modes.
MODE_WIRE = 0;
MODE_FIRMWARE = 1;

// Macro modes.
MACRO_DOWN = 'D';
MACRO_TYPE = 'T';
MACRO_UP = 'U';
MACRO_WAIT = 'W';

// API server.
API_SERVER = 'http://163.172.161.30:5000';
