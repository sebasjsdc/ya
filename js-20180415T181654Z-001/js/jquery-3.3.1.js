/ *!
 * jQuery JavaScript Library v3.3.1 -ajax, -ajax / jsonp, -ajax / load, -ajax / parseXML, -ajax / script, -ajax / var / location, -ajax / var / nonce, -ajax / var / rquery , -ajax / xhr, -manipulation / _evalUrl, -event / ajax, -effects, -effects / Tween, -effects / animationSelector
 * https://jquery.com/
 *
 * Incluye Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation y otros colaboradores
 * Publicado bajo la licencia de MIT
 * https://jquery.org/license
 *
 * Fecha: 2018-01-20T17: 24Z
 * /
(función (global, fábrica) {

	"usar estricto";

	if (typeof module === "object" && typeof module.exports === "object") {

		// Para entornos CommonJS y CommonJS donde una "ventana" apropiada
		// está presente, ejecuta la fábrica y obtiene jQuery.
		// Para entornos que no tienen una `ventana` con un` documento`
		// (como Node.js), expone una fábrica como module.exports.
		// Esto acentúa la necesidad de la creación de una 'ventana' real.
		// eg var jQuery = require ("jquery") (ventana);
		// Ver ticket # 14549 para más información.
		module.exports = global.document?
			fábrica (global, verdadero):
			función (w) {
				if (! w.document) {
					lanzar nuevo Error ("jQuery requiere una ventana con un documento");
				}
				devolver la fábrica (w);
			};
	} else {
		fábrica (global);
	}

// Pase esto si la ventana aún no está definida
}) (typeof window! == "undefined"? window: this, function (window, noGlobal) {

// Edge <= 12 - 13+, Firefox <= 18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lanzar excepciones cuando el código no estricto (por ejemplo, ASP.NET 4.5) accede al modo estricto
// arguments.callee.caller (trac-13335). Pero a partir de jQuery 3.0 (2016), el modo estricto debería ser común
// suficiente para que todos esos intentos estén protegidos en un bloque try.
"usar estricto";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call (Object);

var support = {};

var isFunction = function isFunction (obj) {

      // Soporte: Chrome <= 57, Firefox <= 52
      // En algunos navegadores, typeof devuelve "función" para elementos HTML <object>
      // (es decir, `typeof document.createElement (" object ") ===" function "`).
      // No queremos clasificar * ningún * nodo DOM como una función.
      return typeof obj === "function" && typeof obj.nodeType! == "number";
  };


var isWindow = function isWindow (obj) {
		return obj! = null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		tipo: verdadero,
		src: cierto,
		noModule: cierto
	};

	function DOMEval (código, documento, nodo) {
		doc = doc || documento;

		var i,
			script = doc.createElement ("script");

		script.text = código;
		if (nodo) {
			for (i en preservedScriptAttributes) {
				if (nodo [i]) {
					script [i] = nodo [i];
				}
			}
		}
		doc.head.appendChild (script) .parentNode.removeChild (script);
	}


function toType (obj) {
	if (obj == null) {
		return obj + "";
	}

	// Soporte: Android <= 2.3 solamente (functionEx RegExp)
	return typeof obj === "objeto" || typeof obj === "función"?
		class2type [toString.call (obj)] || "objeto":
		typeof obj;
}
/ * símbolo global * /
// Definir este global en .eslintrc.json crearía un peligro de usar el global
// desprotegido en otro lugar, parece más seguro definir global solo para este módulo



var
	version = "3.3.1 -ajax, -ajax / jsonp, -ajax / load, -ajax / parseXML, -ajax / script, -ajax / var / location, -ajax / var / nonce, -ajax / var / rquery, -ajax / xhr, -manipulation / _evalUrl, -event / ajax, -effects, -effects / Tween, -effects / animationSelector ",

	// Definir una copia local de jQuery
	jQuery = function (selector, context) {

		// El objeto jQuery es en realidad solo el constructor init 'mejorado'
		// Necesito init si se llama a jQuery (solo permite lanzar el error si no está incluido)
		return new jQuery.fn.init (selector, contexto);
	},

	// Soporte: Android <= 4.0 solamente
	// Asegúrate de recortar la BOM y NBSP
	rtrim = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g;

jQuery.fn = jQuery.prototype = {

	// La versión actual de jQuery está siendo utilizada
	jquery: versión,

	constructor: jQuery,

	// La longitud predeterminada de un objeto jQuery es 0
	longitud: 0,

	toArray: function () {
		return slice.call (esto);
	},

	// Obtenga el enésimo elemento en el conjunto de elementos coincidentes O
	// Obtener todo el conjunto combinado de elementos como una matriz limpia
	get: function (num) {

		// Devuelve todos los elementos en una matriz limpia
		if (num == null) {
			return slice.call (esto);
		}

		// Devuelve solo un elemento del conjunto
		return num <0? esto [num + this.length]: this [num];
	},

	// Tome una matriz de elementos y empújelos a la pila
	// (devuelve el nuevo conjunto de elementos coincidentes)
	pushStack: function (elems) {

		// Crea un nuevo conjunto de elementos jQuery
		var ret = jQuery.merge (this.constructor (), elems);

		// Agrega el objeto viejo a la pila (como referencia)
		ret.prevObject = this;

		// Devuelve el conjunto de elementos recién formado
		return ret;
	},

	// Ejecutar una devolución de llamada para cada elemento en el conjunto combinado.
	cada uno: función (devolución de llamada) {
		return jQuery.each (esto, devolución de llamada);
	},

	mapa: función (devolución de llamada) {
		return this.pushStack (jQuery.map (this, function (elem, i) {
			return callback.call (elem, i, elem);
		}));
	},

	slice: function () {
		devuelve this.pushStack (slice.apply (this, arguments));
	},

	primero: function () {
		devuelve this.eq (0);
	},

	last: function () {
		devuelve this.eq (-1);
	},

	eq: función (i) {
		var len = this.length,
			j = + i + (i <0? len: 0);
		devuelve this.pushStack (j> = 0 && j <len? [this [j]]: []);
	},

	end: function () {
		devuelve this.prevObject || este.constructor ();
	},

	// Sólo para uso interno.
	// Se comporta como el método de una matriz, no como un método jQuery.
	empuja empuja,
	sort: arr.sort,
	empalme: arr.splice
};

jQuery.extend = jQuery.fn.extend = function () {
	var opciones, nombre, src, copy, copyIsArray, clon,
		target = argumentos [0] || {},
		i = 1,
		length = arguments.length,
		profundo = falso;

	// Manejar una situación de copia profunda
	if (tipo de destino === "booleano") {
		profundo = objetivo;

		// Saltar el booleano y el objetivo
		target = argumentos [i] || {};
		i ++;
	}

	// Manejar caso cuando el objetivo es una cadena o algo (posible en copia profunda)
	if (typeof target! == "object" &&! isFunction (target)) {
		target = {};
	}

	// Extender jQuery en sí mismo si solo se pasa un argumento
	if (i === length) {
		target = this;
		yo--;
	}

	para (; i <longitud; i ++) {

		// Solo trato con valores no nulos / indefinidos
		if ((opciones = argumentos [i])!! = null) {

			// Extender el objeto base
			para (nombre en opciones) {
				src = destino [nombre];
				copy = opciones [nombre];

				// Prevenir el ciclo sin fin
				if (target === copy) {
					continuar;
				}

				// Recurse si estamos fusionando objetos simples o matrices
				if (deep && copy && (jQuery.isPlainObject (copy) ||
					(copyIsArray = Array.isArray (copy)))) {

					if (copyIsArray) {
						copyIsArray = falso;
						clone = src && Array.isArray (src)? src: [];

					} else {
						clone = src && jQuery.isPlainObject (src)? src: {};
					}

					// Nunca muevas objetos originales, clonarlos
					target [name] = jQuery.extend (deep, clone, copy);

				// No traigas valores indefinidos
				} else if (copy! == undefined) {
					destino [nombre] = copia;
				}
			}
		}
	}

	// Devuelve el objeto modificado
	objetivo de retorno;
};

jQuery.extend ({

	// Único para cada copia de jQuery en la página
	expando: "jQuery" + (versión + Math.random ()) .replace (/ \ D / g, ""),

	// Supongamos que jQuery está listo sin el módulo listo
	isReady: cierto,

	error: function (msg) {
		lanzar nuevo Error (msg);
	},

	noop: function () {},

	isPlainObject: function (obj) {
		var proto, Ctor;

		// Detectamos negativos obvios
		// Usa toString en lugar de jQuery.type para atrapar objetos host
		if (! obj || toString.call (obj)! == "[object Object]") {
			falso retorno;
		}

		proto = getProto (obj);

		// Los objetos sin prototipo (p. Ej., `Object.create (null)`) son simples
		if (! proto) {
			devolver verdadero;
		}

		// Los objetos con prototipo son simples si fueron construidos por una función Object global
		Ctor = hasOwn.call (proto, "constructor") && proto.constructor;
		return typeof Ctor === "function" && fnToString.call (Ctor) === ObjectFunctionString;
	},

	isEmptyObject: function (obj) {

		/ * eslint-disable no-unused-vars * /
		// Ver https://github.com/eslint/eslint/issues/6125
		var nombre;

		para (nombre en obj) {
			falso retorno;
		}
		devolver verdadero;
	},

	// Evalúa un script en un contexto global
	globalEval: function (código) {
		DOMEval (código);
	},

	cada uno: función (obj, devolución de llamada) {
		longitud var, i = 0;

		if (isArrayLike (obj)) {
			longitud = obj.length;
			para (; i <longitud; i ++) {
				if (callback.call (obj [i], i, obj [i]) === falso) {
					descanso;
				}
			}
		} else {
			para (i en obj) {
				if (callback.call (obj [i], i, obj [i]) === falso) {
					descanso;
				}
			}
		}

		return obj;
	},

	// Soporte: Android <= 4.0 solamente
	recortar: función (texto) {
		devolver texto == nulo?
			"":
			(texto + "") .replace (rtrim, "");
	},

	// los resultados son solo para uso interno
	makeArray: function (arr, results) {
		var ret = resultados || [];

		if (arr! = null) {
			if (isArrayLike (Object (arr))) {
				jQuery.merge (ret,
					typeof arr === "cadena"?
					[arr]: arr
				);
			} else {
				push.call (ret, arr);
			}
		}

		return ret;
	},

	inArray: function (elem, arr, i) {
		return arr == null? -1: indexOf.call (arr, elem, i);
	},

	// Soporte: Android <= 4.0 solamente, solo PhantomJS 1
	// push.apply (_, arraylike) se lanza en el antiguo WebKit
	fusionar: función (primero, segundo) {
		var len = + second.length,
			j = 0,
			i = first.length;

		para (; j <len; j ++) {
			primero [i ++] = segundo [j];
		}

		first.length = i;

		regresar primero;
	},

	grep: function (elems, callback, invert) {
		var callbackInverse,
			matches = [],
			i = 0,
			longitud = elems.length,
			callbackExpect =! invertido;

		// Ir a través de la matriz, solo guardando los elementos
		// que pasa la función de validación
		para (; i <longitud; i ++) {
			callbackInverse =! callback (elems [i], i);
			if (callbackInverse! == callbackExpect) {
				matches.push (elems [i]);
			}
		}

		partidos de vuelta;
	},

	// arg es solo para uso interno
	mapa: función (elems, callback, arg) {
		var longitud, valor,
			i = 0,
			ret = [];

		// Ir a través de la matriz, traduciendo cada uno de los elementos a sus nuevos valores
		if (isArrayLike (elems)) {
			longitud = elems.length;
			para (; i <longitud; i ++) {
				value = callback (elems [i], i, arg);

				if (value! = null) {
					ret.push (valor);
				}
			}

		// Revisa cada tecla en el objeto,
		} else {
			para (i en elems) {
				value = callback (elems [i], i, arg);

				if (value! = null) {
					ret.push (valor);
				}
			}
		}

		// Aplanar cualquier matriz anidada
		return concat.apply ([], ret);
	},

	// Un contador GUID global para objetos
	guid: 1,

	// jQuery.support no se usa en Core pero otros proyectos adjuntan su
	// propiedades para que necesite existir.
	soporte soporte
});

if (typeof Symbol === "function") {
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

// Rellena el mapa class2type
jQuery.each ("Boolean Number String Function Array Date RegExp Object Error Symbol" .split (""),
función (i, nombre) {
	class2type ["[object" + name + "]"] = name.toLowerCase ();
});

function isArrayLike (obj) {

	// Soporte: solo iOS 8.2 real (no reproducible en el simulador)
	// verificación `in` utilizada para evitar el error JIT (gh-2145)
	// hasOwn no se usa aquí debido a falsos negativos
	// con respecto a la longitud de Nodelist en IE
	var length = !! obj && "length" en obj && obj.length,
		type = toType (obj);

	if (isFunction (obj) || isWindow (obj)) {
		falso retorno;
	}

	tipo de retorno === "matriz" || longitud === 0 ||
		typeof length === "number" && length> 0 && (length - 1) en obj;
}
var Sizzle =
/ *!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation y otros colaboradores
 * Publicado bajo la licencia de MIT
 * http://jquery.org/license
 *
 * Fecha: 2016-08-08
 * /
(función (ventana) {

var i,
	apoyo,
	Expr,
	getText,
	isXML,
	tokenize,
	compilar,
	seleccionar,
	outermostContext,
	sortInput,
	hasDuplicate,

	// documento local vars
	setDocument,
	documento,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	partidos,
	contiene,

	// Datos específicos de la instancia
	expando = "sizzle" + 1 * nueva Fecha (),
	preferredDoc = window.document,
	dirruns = 0,
	hecho = 0,
	classCache = createCache (),
	tokenCache = createCache (),
	compilerCache = createCache (),
	sortOrder = function (a, b) {
		if (a === b) {
			hasDuplicate = verdadero;
		}
		return 0;
	},

	// métodos de instancia
	hasOwn = ({}). hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use un índice reducido, ya que es más rápido que el nativo
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function (list, elem) {
		var i = 0,
			len = list.length;
		para (; i <len; i ++) {
			if (lista [i] === elem) {
				devuelve i;
			}
		}
		return -1;
	},

	booleans = "checked | selected | async | autofocus | autoplay | controls | defer | disabled | hidden | ismap | loop | multiple | open | readonly | required | scoped",

	// Expresiones regulares

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\ x20 \\ t \\ r \\ n \\ f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?: \\\\. | [\\ w-] | [^ \ 0 - \\ xa0]) +",

	// Selectores de atributos: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\ [" + whitespace + "* (" + identifier + ") (?:" + espacio en blanco +
		// Operador (captura 2)
		"* ([* ^ $ |! ~]? =)" + espacio en blanco +
		// "Los valores de los atributos deben ser identificadores CSS [captura 5] o cadenas [captura 3 o captura 4]"
		"* (?: '((?: \\\\ | | [^ \\\\']) *) '| \" ((?: \\\\ | | [^ \\\\\ "] ) *) \ "| (" + identificador + ")) |)" + espacio en blanco +
		"* \\]",

	pseudos = ":(" + identificador + ") (?: \\ ((" +
		// Para reducir el número de selectores que necesitan tokenize en el preFiltro, prefiera los argumentos:
		// 1. citado (captura 3, captura 4 o captura 5)
		"('((?: \\\\ | | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "]) *) \ ") |" +
		// 2. simple (captura 6)
		"((?: \\\. | [^ \\\\ () [\\]] |" + attributes + ") *) |" +
		// 3. cualquier cosa (captura 2)
		". *" +
		") \\) |)",

	// Espacios en blanco al final y sin escape, capturando algunos caracteres que no son de espacio en blanco que preceden al último
	rwhitespace = new RegExp (espacio en blanco + "+", "g"),
	rtrim = new RegExp ("^" + espacio en blanco + "+ | ((?: ^ | [^ \\\\]) (?: \\\\.) *)" + espacio en blanco + "+ $", "g "),

	rcomma = new RegExp ("^" + espacio en blanco + "*," + espacio en blanco + "*"),
	rcombinators = new RegExp ("^" + espacio en blanco + "* ([> + ~] |" + espacio en blanco + ")" + espacio en blanco + "*"),

	rattributeQuotes = new RegExp ("=" + espacio en blanco + "* ([^ \\] '\"] *?) "+ espacio en blanco +" * \\] "," g "),

	rpseudo = new RegExp (pseudos),
	ridentifier = new RegExp ("^" + identificador + "$"),

	matchExpr = {
		"ID": nuevo RegExp ("^ # (" + identificador + ")"),
		"CLASS": nuevo RegExp ("^ \\. (" + Identificador + ")"),
		"TAG": nuevo RegExp ("^ (" + identificador + "| [*])"),
		"ATTR": nuevo RegExp ("^" + atributos),
		"PSEUDO": nuevo RegExp ("^" + pseudos),
		"CHILD": nuevo RegExp ("^ :( solo | first | last | nth | nth-last) - (child | of-type) (?: \\ (" + whitespace +
			"* (incluso | impar | (([+ -] |) (\\ d *) n |)" + espacio en blanco + "* (?: ([+ -] |)" + espacio en blanco +
			"* (\\ d +) |)) + espacio en blanco +" * \\) |) "," i ",
		"bool": nuevo RegExp ("^ (?:" + booleans + ") $", "i"),
		// Para uso en bibliotecas que implementan .is ()
		// Utilizamos esto para la coincidencia de POS en `seleccionar`
		"needsContext": nuevo RegExp ("^" + espacio en blanco + "* [> + ~] |: (incluso | impar | eq | gt | lt | nth | primero | último) (?: \\ (" +
			espacio en blanco + "* ((?: - \\ d)? \\ d *)" + espacio en blanco + "* \\) |) (? = [^ -] | $)", "i")
	},

	rinputs = / ^ (?: input | select | textarea | botón) $ / i,
	rheader = / ^ h \ d $ / i,

	rnative = / ^ [^ {] + \ {\ s * \ [native \ w /,

	// ID de fácil identificación / recuperable o selectores TAG o CLASS
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = / [+ ~] /,

	// CSS escapa
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp ("\\\\ ([\\ da-f] {1,6}" + espacio en blanco + "? | (" + espacio en blanco + ") |.)", "ig"),
	funescape = function (_, escaped, escapadoWhitespace) {
		var high = "0x" + escaped - 0x10000;
		// NaN significa no codepoint
		// Soporte: Firefox <24
		// Solución errónea de interpretación numérica de + "0x"
		¡vuelve alto! == alto || escapadoWhitespace?
			escapado :
			alto <0?
				// punto de código BMP
				String.fromCharCode (alto + 0x10000):
				// Punto de código del plano suplementario (par sustituto)
				String.fromCharCode (alto >> 10 | 0xD800, alto y 0x3FF | 0xDC00);
	},

	// serialización del string / identificador de CSS
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = / ([\ 0- \ x1f \ x7f] | ^ -? \ d) | ^ - $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w -] / g,
	fcssescape = function (ch, asCodePoint) {
		if (asCodePoint) {

			// U + 0000 NULL se convierte en U + FFFD CARACTER DE REEMPLAZO
			if (ch === "\ 0") {
				return "\ uFFFD";
			}

			// Los caracteres de control y los números (dependiendo de la posición) se escapan como puntos de código
			return ch.slice (0, -1) + "\\" + ch.charCodeAt (ch.length - 1) .toString (16) + "";
		}

		// Otros caracteres ASCII potencialmente especiales se escapan con barra invertida
		devolver "\\" + ch;
	},

	// Utilizado para iframes
	// Ver setDocument ()
	// Al eliminar el contenedor de funciones se genera un "Permiso denegado"
	// error en IE
	unloadHandler = function () {
		setDocument ();
	},

	disabledAncestor = addCombinator (
		función (elem) {
			return elem.disabled === true && ("forma" en elem || "etiqueta" en elem);
		},
		{dir: "parentNode", luego: "legend"}
	);

// Optimizar para push.apply (_, NodeList)
tratar {
	push.apply (
		(arr = slice.call (preferredDoc.childNodes)),
		preferredDoc.childNodes
	);
	// Soporte: Android <4.0
	// Detecta que falla silenciosamente push.apply
	arr [preferredDoc.childNodes.length] .nodeType;
} catch (e) {
	push = {apply: arr.length?

		// Leverage slice si es posible
		function (target, els) {
			push_native.apply (target, slice.call (els));
		}:

		// Soporte: IE <9
		// De lo contrario, anexar directamente
		function (target, els) {
			var j = target.length,
				i = 0;
			// No puedo confiar en NodeList.length
			while ((target [j ++] = els [i ++])) {}
			target.length = j - 1;
		}
	};
}

function Sizzle (selector, contexto, resultados, semilla) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType tiene como valor predeterminado 9, ya que el contexto predeterminado es el documento
		nodeType = context? context.nodeType: 9;

	resultados = resultados || [];

	// Retorno anticipado de llamadas con selector o contexto no válido
	if (typeof selector! == "cadena" ||! selector ||
		nodeType! == 1 && nodeType! == 9 && nodeType! == 11) {

		resultados de devolución;
	}

	// Intenta atajar las operaciones de búsqueda (a diferencia de los filtros) en documentos HTML
	if (! seed) {

		if ((context? context.ownerDocument || context: preferredDoc)! == document) {
			setDocument (contexto);
		}
		contexto = contexto || documento;

		if (documentIsHTML) {

			// Si el selector es lo suficientemente simple, intente utilizar un método DOM "get * By *"
			// (excepto el contexto DocumentFragment, donde los métodos no existen)
			if (nodeType! == 11 && (match = rquickExpr.exec (selector))) {

				// selector de ID
				if ((m = match [1])) {

					// Contexto del documento
					if (nodeType === 9) {
						if ((elem = context.getElementById (m))) {

							// Soporte: IE, Opera, Webkit
							// TODO: identificar versiones
							// getElementById puede hacer coincidir elementos por nombre en lugar de ID
							if (elem.id === m) {
								results.push (elem);
								resultados de devolución;
							}
						} else {
							resultados de devolución;
						}

					// Contexto del elemento
					} else {

						// Soporte: IE, Opera, Webkit
						// TODO: identificar versiones
						// getElementById puede hacer coincidir elementos por nombre en lugar de ID
						if (newContext && (elem = newContext.getElementById (m)) &&
							contiene (contexto, elem) &&
							elem.id === m) {

							results.push (elem);
							resultados de devolución;
						}
					}

				// selector de tipo
				} else if (match [2]) {
					push.apply (results, context.getElementsByTagName (selector));
					resultados de devolución;

				// selector de clase
				} else if ((m = match [3]) && support.getElementsByClassName &&
					context.getElementsByClassName) {

					push.apply (results, context.getElementsByClassName (m));
					resultados de devolución;
				}
			}

			// Aproveche querySelectorAll
			if (support.qsa &&
				! compilerCache [selector + ""] &&
				(! rbuggyQSA ||! rbuggyQSA.test (selector))) {

				if (nodeType! == 1) {
					newContext = contexto;
					newSelector = selector;

				// qSA mira fuera del contexto del elemento, que no es lo que queremos
				// Gracias a Andrew Dupont por esta técnica alternativa
				// Soporte: IE <= 8
				// Excluir elementos de objeto
				} else if (context.nodeName.toLowerCase ()! == "objeto") {

					// Capture el ID de contexto, configurándolo primero si es necesario
					if ((nid = context.getAttribute ("id"))) {
						nid = nid.replace (rcssescape, fcssescape);
					} else {
						context.setAttribute ("id", (nid = expando));
					}

					// Prefijo cada selector en la lista
					grupos = tokenize (selector);
					i = groups.length;
					mientras yo-- ) {
						groups [i] = "#" + nid + "" + toSelector (groups [i]);
					}
					newSelector = groups.join (",");

					// Expandir contexto para selectores hermanos
					newContext = rsibling.test (selector) && testContext (context.parentNode) ||
						contexto;
				}

				if (newSelector) {
					tratar {
						push.apply (resultados,
							newContext.querySelectorAll (newSelector)
						);
						resultados de devolución;
					} catch (qsaError) {
					} finalmente {
						if (nid === expando) {
							context.removeAttribute ("id");
						}
					}
				}
			}
		}
	}

	// Todos los otros
	return select (selector.replace (rtrim, "$ 1"), contexto, resultados, semilla);
}

/ **
 * Crear cachés clave-valor de tamaño limitado
 * @returns {function (string, object)} Devuelve los datos del objeto después de almacenarlo en sí mismo con
 * nombre de propiedad la cadena (con sufijo de espacio) y (si la caché es más grande que Expr.cacheLength)
 * borrar la entrada más antigua
 * /
function createCache () {
	var keys = [];

	caché de función (clave, valor) {
		// Use (tecla + "") para evitar la colisión con las propiedades del prototipo nativo (vea el Issue # 157)
		if (keys.push (key + "")> Expr.cacheLength) {
			// Solo guarde las entradas más recientes
			eliminar caché [keys.shift ()];
		}
		return (caché [tecla + ""] = valor);
	}
	caché de retorno;
}

/ **
 * Marque una función para uso especial por Sizzle
 * @param {Function} fn La función para marcar
 * /
function markFunction (fn) {
	fn [expando] = verdadero;
	return fn;
}

/ **
 * Pruebas de soporte usando un elemento
 * @param {Función} fn Pasó el elemento creado y devuelve un resultado booleano
 * /
función assert (fn) {
	var el = document.createElement ("fieldset");

	tratar {
		volver !! fn (el);
	} catch (e) {
		falso retorno;
	} finalmente {
		// Eliminar de su padre por defecto
		if (el.parentNode) {
			el.parentNode.removeChild (el);
		}
		// liberar memoria en IE
		el = null;
	}
}

/ **
 * Agrega el mismo controlador para todos los atributos especificados
 * @param {String} attrs Lista de atributos separados por tuberías
 * @param {Function} handler El método que se aplicará
 * /
function addHandle (attrs, controlador) {
	var arr = attrs.split ("|"),
		i = arr.length;

	mientras yo-- ) {
		Expr.attrHandle [arr [i]] = controlador;
	}
}

/ **
 * Verifica el orden de los documentos de dos hermanos
 * @param {Element} a
 * @param {Element} b
 * @ devuelve {Número} Devuelve menos de 0 si a es anterior a b, es mayor que 0 si a sigue a b
 * /
function siblingCheck (a, b) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Usa IE sourceIndex si está disponible en ambos nodos
	if (diff) {
		return diff;
	}

	// Verifica si b sigue una
	if (cur) {
		while ((cur = cur.nextSibling)) {
			if (cur === b) {
				return -1;
			}
		}
	}

	devuelve un? 1: -1;
}

/ **
 * Devuelve una función para usar en pseudos para los tipos de entrada
 * @param {String} tipo
 * /
función createInputPseudo (type) {
	función de retorno (elem) {
		var name = elem.nodeName.toLowerCase ();
		return name === "input" && elem.type === type;
	};
}

/ **
 * Devuelve una función para usar en pseudos para botones
 * @param {String} tipo
 * /
function createButtonPseudo (type) {
	función de retorno (elem) {
		var name = elem.nodeName.toLowerCase ();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/ **
 * Devuelve una función para usar en pseudos para: habilitado /: deshabilitado
 * @param {booleano} deshabilitado verdadero para: deshabilitado; falso para: habilitado
 * /
función createDisabledPseudo (disabled) {

	// Conocido: deshabilitado falsos positivos: fieldset [disabled]> legend: nth-of-type (n + 2): can-disable
	función de retorno (elem) {

		// Solo ciertos elementos pueden coincidir: habilitados o deshabilitados
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ("formulario" en elem) {

			// Verificar la discapacidad heredada en elementos relevantes no desactivados:
			// * elementos asociados a formulario enumerados en un fieldset deshabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * elementos de opción en un grupo de opciones desactivadas
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Todos esos elementos tienen una propiedad "forma".
			if (elem.parentNode && elem.disabled === false) {

				// Los elementos de opción difieren a un grupo de selección padre si está presente
				if ("etiqueta" en elem) {
					if ("etiqueta" en elem.parentNode) {
						return elem.parentNode.disabled === deshabilitado;
					} else {
						return elem.disabled === deshabilitado;
					}
				}

				// Soporte: IE 6 - 11
				// Usa la propiedad de acceso directo isDisabled para verificar antecesor de conjunto de campo deshabilitado
				return elem.isDisabled === disabled ||

					// Donde no hay isDisabled, revisa manualmente
					/ * jshint -W018 * /
					elem.isDisabled! ==! disabled &&
						disabledAncestor (elem) === disabled;
			}

			return elem.disabled === deshabilitado;

		// Trata de sacar los elementos que no se pueden deshabilitar antes de confiar en la propiedad deshabilitada.
		// Algunas víctimas quedan atrapadas en nuestra red (etiqueta, leyenda, menú, pista), pero no debería
		// incluso existen en ellos, y mucho menos tienen un valor booleano.
		} else if ("etiqueta" en elem) {
			return elem.disabled === deshabilitado;
		}

		// Los elementos restantes no están: habilitados ni: deshabilitados
		falso retorno;
	};
}

/ **
 * Devuelve una función para usar en pseudos para posiciones
 * @param {Function} fn
 * /
function createPositionalPseudo (fn) {
	return markFunction (función (argumento) {
		argumento = + argumento;
		return markFunction (función (semilla, coincidencias) {
			var j,
				matchIndexes = fn ([], seed.length, argumento),
				i = matchIndexes.length;

			// Relacionar elementos encontrados en los índices especificados
			mientras yo-- ) {
				if (seed [(j = matchIndexes [i])]) {
					semilla [j] =! (coincide con [j] = semilla [j]);
				}
			}
		});
	});
}

/ **
 * Comprueba la validez de un nodo como contexto Sizzle
 * @param {Element | Object =} context
 * @return {Element | Object | Boolean} El nodo de entrada si es aceptable, de lo contrario un valor falso
 * /
function testContext (context) {
	return context && typeof context.getElementsByTagName! == "undefined" && context;
}

// Exponer vars de soporte para mayor comodidad
support = Sizzle.support = {};

/ **
 * Detecta nodos XML
 * @param {Element | Object} elem Un elemento o documento
 * @returns {Boolean} True iff elem es un nodo XML no HTML
 * /
isXML = Sizzle.isXML = function (elem) {
	// documentElement se verifica para los casos donde aún no existe
	// (como cargar iframes en IE - # 4833)
	var documentElement = elem && (elem.ownerDocument || elem) .documentElement;
	return documentElement? documentElement.nodeName! == "HTML": falso;
};

/ **
 * Establece las variables relacionadas con el documento una vez sobre la base del documento actual
 * @param {Element | Object} [doc] Un elemento u objeto de documento para usar para configurar el documento
 * @returns {Object} Devuelve el documento actual
 * /
setDocument = Sizzle.setDocument = function (node) {
	var hasCompare, subWindow,
		doc = nodo? node.ownerDocument || nodo: preferredDoc;

	// Regrese temprano si el documento no es válido o ya está seleccionado
	if (doc === document || doc.nodeType! == 9 ||! doc.documentElement) {
		documento de devolución;
	}

	// Actualizar variables globales
	document = doc;
	docElem = document.documentElement;
	documentIsHTML =! isXML (documento);

	// Soporte: IE 9-11, Edge
	// Acceder a los documentos de iframe después de la descarga arroja errores de "permiso denegado" (jQuery # 13936)
	if (preferredDoc! == documento &&
		(subWindow = document.defaultView) && subWindow.top! == subWindow) {

		// Soporte: IE 11, Edge
		if (subWindow.addEventListener) {
			subWindow.addEventListener ("unload", unloadHandler, false);

		// Soporte: IE 9 - 10 solamente
		} else if (subWindow.attachEvent) {
			subWindow.attachEvent ("onunload", unloadHandler);
		}
	}

	/ * Atributos
	-------------------------------------------------- -------------------- * /

	// Soporte: IE <8
	// Verificar que getAttribute realmente devuelva atributos y no propiedades
	// (excepto IE8 booleanos)
	support.attributes = assert (function (el) {
		el.className = "i";
		return! el.getAttribute ("className");
	});

	/ * getElement (s) por *
	-------------------------------------------------- -------------------- * /

	// Compruebe si getElementsByTagName ("*") devuelve solo elementos
	support.getElementsByTagName = assert (function (el) {
		el.appendChild (document.createComment (""));
		return! el.getElementsByTagName ("*"). length;
	});

	// Soporte: IE <9
	support.getElementsByClassName = rnative.test (document.getElementsByClassName);

	// Soporte: IE <10
	// Comprobar si getElementById devuelve elementos por nombre
	// Los métodos getElementById rotos no recogen los nombres programáticamente,
	// entonces usa una prueba rotunda de getElementsByName
	support.getById = assert (function (el) {
		docElem.appendChild (el) .id = expando;
		return! document.getElementsByName || ! document.getElementsByName (expando) .length;
	});

	// ID filtro y encontrar
	if (support.getById) {
		Expr.filter ["ID"] = función (id) {
			var attrId = id.replace (runescape, funescape);
			función de retorno (elem) {
				return elem.getAttribute ("id") === attrId;
			};
		};
		Expr.find ["ID"] = función (id, contexto) {
			if (typeof context.getElementById! == "undefined" && documentIsHTML) {
				var elem = context.getElementById (id);
				devolver elem? [elem]: [];
			}
		};
	} else {
		Expr.filter ["ID"] = función (id) {
			var attrId = id.replace (runescape, funescape);
			función de retorno (elem) {
				var node = typeof elem.getAttributeNode! == "undefined" &&
					elem.getAttributeNode ("id");
				nodo de retorno && node.value === attrId;
			};
		};

		// Soporte: IE 6 - 7 solamente
		// getElementById no es confiable como atajo de búsqueda
		Expr.find ["ID"] = función (id, contexto) {
			if (typeof context.getElementById! == "undefined" && documentIsHTML) {
				nodo var, i, elems,
					elem = context.getElementById (id);

				if (elem) {

					// Verificar el atributo de id
					node = elem.getAttributeNode ("id");
					if (node ​​&& node.value === id) {
						devolver [elem];
					}

					// Volver a caer en getElementsByName
					elems = context.getElementsByName (id);
					i = 0;
					while ((elem = elems [i ++])) {
						node = elem.getAttributeNode ("id");
						if (node ​​&& node.value === id) {
							devolver [elem];
						}
					}
				}

				regreso [];
			}
		};
	}

	// Tag
	Expr.find ["TAG"] = support.getElementsByTagName?
		función (etiqueta, contexto) {
			if (typeof context.getElementsByTagName! == "undefined") {
				return context.getElementsByTagName (tag);

			// Los nodos DocumentFragment no tienen gEBTN
			} else if (support.qsa) {
				return context.querySelectorAll (tag);
			}
		}:

		función (etiqueta, contexto) {
			var elem,
				tmp = [],
				i = 0,
				// Por feliz coincidencia, un gEBTN (roto) aparece en los nodos DocumentFragment también
				results = context.getElementsByTagName (tag);

			// Filtrar posibles comentarios
			if (tag === "*") {
				while ((elem = resultados [i ++])) {
					if (elem.nodeType === 1) {
						tmp.push (elem);
					}
				}

				devolver tmp;
			}
			resultados de devolución;
		};

	// Clase
	Expr.find ["CLASS"] = support.getElementsByClassName && function (className, context) {
		if (typeof context.getElementsByClassName! == "undefined" && documentIsHTML) {
			return context.getElementsByClassName (className);
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// Compatibilidad con QSA y matchesSelector

	// matchesSelector (: active) informa falso cuando es verdadero (IE9 / Opera 11.5)
	rbuggyMatches = [];

	// qSa (: focus) informa falso cuando es verdadero (Chrome 21)
	// Permitimos esto debido a un error en IE8 / 9 que arroja un error
	// siempre que se acceda a `document.activeElement` en un iframe
	// Entonces, permitimos que: focus pase a través de QSA todo el tiempo para evitar el error de IE
	// Ver https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ((support.qsa = rnative.test (document.querySelectorAll))) {
		// Crear QSA regex
		// Estrategia Regex adoptada por Diego Perini
		assert (function (el) {
			// Seleccionar se establece en cadena vacía a propósito
			// Esto es para probar el tratamiento de IE de forma no explícita
			// establecer un atributo de contenido booleano,
			// ya que su presencia debería ser suficiente
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild (el) .innerHTML = "<a id='" + expando +"'> </a> "+
				"<select id = '" + expando + "- \ r \\' msallowcapture = ''>" +
				"<opción seleccionada = ''> </ option> </ select>";

			// Soporte: IE8, Opera 11-12.16
			// No se debe seleccionar nada cuando las cadenas vacías sigan ^ = o $ = o * =
			// El atributo de prueba debe ser desconocido en Opera pero "seguro" para WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if (el.querySelectorAll ("[msallowcapture ^ = '']"). length) {
				rbuggyQSA.push ("[* ^ $] =" + espacio en blanco + "* (?: '' | \" \ ")");
			}

			// Soporte: IE8
			// Los atributos booleanos y el "valor" no se tratan correctamente
			if (! el.querySelectorAll ("[selected]"). length) {
				rbuggyQSA.push ("\\ [" + espacio en blanco + "* (?: valor |" + booleanos + ")");
			}

			// Soporte: Chrome <29, Android <4.4, Safari <7.0+, iOS <7.0+, PhantomJS <1.9.8+
			if (! el.querySelectorAll ("[id ~ =" + expando + "-]") .length) {
				rbuggyQSA.push ("~ =");
			}

			// Webkit / Opera -: checked debería devolver los elementos de opción seleccionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 arroja un error aquí y no verá las pruebas posteriores
			if (! el.querySelectorAll (": checked"). length) {
				rbuggyQSA.push (": comprobado");
			}

			// Soporte: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// El selector `selector de hermanos` id-selector 'in-page' falla
			if (! el.querySelectorAll ("a #" + expando + "+ *") .length) {
				rbuggyQSA.push (". #. + [+ ~]");
			}
		});

		assert (function (el) {
			el.innerHTML = "<a href='' disabled='disabled'> </a>" +
				"<select disabled = 'disabled'> <option /> </ select>";

			// Soporte: Windows 8 Native Apps
			// Los atributos de tipo y nombre están restringidos durante la asignación .innerHTML
			var input = document.createElement ("entrada");
			input.setAttribute ("tipo", "oculto");
			el.appendChild (input) .setAttribute ("nombre", "D");

			// Soporte: IE8
			// Aplicar el atributo de sensibilidad de mayúsculas y minúsculas
			if (el.querySelectorAll ("[name = d]") longitud) {
				rbuggyQSA.push ("nombre" + espacio en blanco + "* [* ^ $ |! ~]? =");
			}

			// FF 3.5 -: elementos habilitados /: deshabilitados y ocultos (los elementos ocultos aún están habilitados)
			// IE8 arroja un error aquí y no verá las pruebas posteriores
			if (el.querySelectorAll (": enabled"). length! == 2) {
				rbuggyQSA.push (": habilitado", ": deshabilitado");
			}

			// Soporte: IE9-11 +
			// IE's: el selector deshabilitado no recoge los hijos de conjuntos de campo deshabilitados
			docElem.appendChild (el) .disabled = true;
			if (el.querySelectorAll (": disabled"). length! == 2) {
				rbuggyQSA.push (": habilitado", ": deshabilitado");
			}

			// Opera 10-11 no arroja pseudos inválidos post-coma
			el.querySelectorAll ("* ,: x");
			rbuggyQSA.push (",. *:");
		});
	}

	if ((support.matchesSelector = rnative.test ((matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector)))) {

		assert (function (el) {
			// Verifica si es posible hacer coincidenciasSelector
			// en un nodo desconectado (IE 9)
			support.disconnectedMatch = matches.call (el, "*");

			// Esto debería fallar con una excepción
			// Gecko no produce error, devuelve falso en su lugar
			matches.call (el, "[s! = '']: x");
			rbuggyMatches.push ("! =", pseudos);
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp (rbuggyQSA.join ("|"));
	rbuggyMatches = rbuggyMatches.length && new RegExp (rbuggyMatches.join ("|"));

	/ * Contiene
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test (docElem.compareDocumentPosition);

	// Element contiene otro
	// Propósito auto-exclusivo
	// Como en, un elemento no se contiene
	contains = hasCompare || rnative.test (docElem.contains)?
		función (a, b) {
			var adown = a.nodeType === 9? a.documentElement: a,
				bup = b && b.parentNode;
			devolver a === bup || !! (bup && bup.nodeType === 1 && (
				adown.contains?
					adown.contains (bup):
					a.compareDocumentPosition && a.compareDocumentPosition (bup) & 16
			));
		}:
		función (a, b) {
			si (b) {
				while ((b = b.parentNode)) {
					if (b === a) {
						devolver verdadero;
					}
				}
			}
			falso retorno;
		};

	/ * Clasificación
	-------------------------------------------------- -------------------- * /

	// Clasificación de orden de documentos
	sortOrder = hasCompare?
	función (a, b) {

		// Marcar para eliminar duplicados
		if (a === b) {
			hasDuplicate = verdadero;
			return 0;
		}

		// Ordenar en el método de existencia si solo una entrada tiene compararDocumentPosition
		var compare =! a.compareDocumentPosition -! b.compareDocumentPosition;
		si (comparar) {
			comparar de vuelta;
		}

		// Calcular posición si ambas entradas pertenecen al mismo documento
		compare = (a.ownerDocument || a) === (b.ownerDocument || b)?
			a.compareDocumentPosition (b):

			// De lo contrario, sabemos que están desconectados
			1;

		// nodos desconectados
		if (comparar y 1 ||
			(! support.sortDetached && b.compareDocumentPosition (a) === compare)) {

			// Elige el primer elemento relacionado con nuestro documento preferido
			if (a === document || a.ownerDocument === preferredDoc && contains (preferredDoc, a)) {
				return -1;
			}
			if (b === document || b.ownerDocument === preferredDoc && contains (preferredDoc, b)) {
				return 1;
			}

			// Mantener orden original
			return sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;
		}

		volver comparar y 4? -1: 1;
	}:
	función (a, b) {
		// Salir temprano si los nodos son idénticos
		if (a === b) {
			hasDuplicate = verdadero;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [a],
			bp = [b];

		// Los nodos sin padres son documentos o están desconectados
		if (! aup ||! bup) {
			devolver un === documento? -1:
				b === documento? 1:
				aup? -1:
				bup? 1:
				sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;

		// Si los nodos son hermanos, podemos hacer una comprobación rápida
		} else if (aup === bup) {
			return siblingCheck (a, b);
		}

		// De lo contrario, necesitamos listas completas de sus antepasados ​​para comparar
		cur = a;
		while ((cur = cur.parentNode)) {
			ap.unshift (cur);
		}
		cur = b;
		while ((cur = cur.parentNode)) {
			bp.unshift (cur);
		}

		// Camina por el árbol buscando una discrepancia
		while (ap [i] === bp [i]) {
			i ++;
		}

		volver yo?
			// Haz una comprobación de hermanos si los nodos tienen un ancestro común
			siblingCheck (ap [i], bp [i]):

			// De lo contrario, los nodos en nuestro documento ordenan primero
			ap [i] === preferredDoc? -1:
			bp [i] === preferredDoc? 1:
			0;
	};

	documento de devolución;
};

Sizzle.matches = function (expr, elements) {
	return Sizzle (expr, null, null, elementos);
};

Sizzle.matchesSelector = function (elem, expr) {
	// Establecer valores de documento si es necesario
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	// Asegúrate de que los selectores de atributos estén citados
	expr = expr.replace (rattributeQuotes, "= '$ 1')");

	if (support.matchesSelector && documentIsHTML &&
		! compilerCache [expr + ""] &&
		(! rbuggyMatches ||! rbuggyMatches.test (expr)) &&
		(! rbuggyQSA ||! rbuggyQSA.test (expr))) {

		tratar {
			var ret = matches.call (elem, expr);

			// MatchSelector de IE 9 devuelve falso en nodos desconectados
			if (ret || support.disconnectedMatch ||
					// Además, se dice que los nodos desconectados están en un documento
					// fragmento en IE 9
					elem.document && elem.document.nodeType! == 11) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle (expr, documento, null, [elem]) .length> 0;
};

Sizzle.contains = function (context, elem) {
	// Establecer valores de documento si es necesario
	if ((context.ownerDocument || context)! == document) {
		setDocument (contexto);
	}
	return contiene (contexto, elem);
};

Sizzle.attr = function (elem, name) {
	// Establecer valores de documento si es necesario
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	var fn = Expr.attrHandle [name.toLowerCase ()],
		// No te dejes engañar por las propiedades Object.prototype (jQuery # 13807)
		val = fn && hasOwn.call (Expr.attrHandle, name.toLowerCase ())?
			fn (elem, name,! documentIsHTML):
			indefinido;

	return val! == undefined?
		Val:
		support.attributes || ! documentIsHTML?
			elem.getAttribute (nombre):
			(val = elem.getAttributeNode (name)) && val.specified?
				val.value:
				nulo;
};

Sizzle.escape = function (sel) {
	return (sel + "") .replace (rcssescape, fcssescape);
};

Sizzle.error = function (msg) {
	throw new Error ("Error de sintaxis, expresión no reconocida:" + msg);
};

/ **
 * Clasificación de documentos y eliminación de duplicados
 * @param {ArrayLike} resultados
 * /
Sizzle.uniqueSort = function (results) {
	var elem,
		duplicados = [],
		j = 0,
		i = 0;

	// A menos que * sepamos * podemos detectar duplicados, asumir su presencia
	hasDuplicate =! support.detectDuplicates;
	sortInput =! support.sortStable && results.slice (0);
	results.sort (sortOrder);

	if (hasDuplicate) {
		while ((elem = resultados [i ++])) {
			if (elem === resultados [i]) {
				j = duplicates.push (i);
			}
		}
		while (j--) {
			results.splice (duplicados [j], 1);
		}
	}

	// Entrada clara después de la clasificación para liberar objetos
	// Ver https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	resultados de devolución;
};

/ **
 * Función de utilidad para recuperar el valor de texto de una matriz de nodos DOM
 * @param {Array | Element} elem
 * /
getText = Sizzle.getText = function (elem) {
	nodo var,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if (! nodeType) {
		// Si no hay nodeType, se espera que esto sea una matriz
		while ((node ​​= elem [i ++])) {
			// No atravesar nodos de comentarios
			ret + = getText (nodo);
		}
	} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
		// Usa el contenido de texto para los elementos
		// Se eliminó el uso de innerText por la consistencia de las nuevas líneas (jQuery # 11153)
		if (typeof elem.textContent === "string") {
			devolver elem.textContent;
		} else {
			// Atraviesa sus hijos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				ret + = getText (elem);
			}
		}
	} else if (nodeType === 3 || nodeType === 4) {
		return elem.nodeValue;
	}
	// No incluyen comentarios o nodos de instrucciones de procesamiento

	return ret;
};

Expr = Sizzle.selectors = {

	// Puede ser ajustado por el usuario
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	encontrar: {},

	relativo: {
		">": {dir: "parentNode", primero: true},
		"": {dir: "parentNode"},
		"+": {dir: "previousSibling", primero: true},
		"~": {dir: "previousSibling"}
	},

	Prefiltro: {
		"ATTR": función (coincidencia) {
			match [1] = match [1] .replace (runescape, funescape);

			// Mueve el valor dado para que coincida con [3] si está entre comillas o no.
			match [3] = (match [3] || match [4] || match [5] || "") .replace (runescape, funescape);

			if (match [2] === "~ =") {
				match [3] = "" + match [3] + "";
			}

			return match.slice (0, 4);
		},

		"NIÑO": función (coincidencia) {
			/ * coincide con matchExpr ["CHILD"]
				1 tipo (solo | nth | ...)
				2 qué (niño | de-tipo)
				3 argumento (incluso | impar | \ d * | \ d * n ([+ -] \ d +)? | ...)
				Componente de 4 xn del argumento xn + y ([+ -]? \ D * n |)
				5 signo de xn-componente
				6 x de componente xn
				7 signo de componente y
				8 y de componente y
			* /
			match [1] = match [1] .toLowerCase ();

			if (match [1] .slice (0, 3) === "nth") {
				// nth- * requiere argumento
				if (! match [3]) {
					Sizzle.error (coincidencia [0]);
				}

				// parámetros numéricos xey para Expr.filter.CHILD
				// recuerda ese lanzamiento falso / verdadero respectivamente a 0/1
				match [4] = + (match [4]? match [5] + (match [6] || 1): 2 * (match [3] === "even" || match [3] === " impar" ) );
				coincidencia [5] = + ((coincidencia [7] + coincidencia [8]) || coincidencia [3] === "impar");

			// otros tipos prohíben argumentos
			} else if (match [3]) {
				Sizzle.error (coincidencia [0]);
			}

			partido de vuelta;
		},

		"PSEUDO": función (coincidencia) {
			var exceso,
				unquoted =! match [6] && match [2];

			if (matchExpr ["CHILD"]. test (coincidencia [0])) {
				devolver nulo;
			}

			// Aceptar los argumentos citados como están
			if (match [3]) {
				match [2] = match [4] || partido [5] || "";

			// Elimina el exceso de caracteres de los argumentos no incluidos
			} else if (sin comillas && rpseudo.test (sin comillas) &&
				// Obtener exceso de tokenize (recursivamente)
				(excess = tokenize (sin comillas, verdadero)) &&
				// avanzar al siguiente paréntesis de cierre
				(excess = unquoted.indexOf (")", unquarted.length - excess) - unquoted.length)) {

				// el exceso es un índice negativo
				match [0] = match [0] .slice (0, exceso);
				match [2] = unquoted.slice (0, exceso);
			}

			// Devuelve solo las capturas necesarias por el método de pseudo filtro (tipo y argumento)
			return match.slice (0, 3);
		}
	},

	filtro: {

		"TAG": function (nodeNameSelector) {
			var nodeName = nodeNameSelector.replace (runescape, funescape) .toLowerCase ();
			return nodeNameSelector === "*"?
				function () {return true; }:
				función (elem) {
					return elem.nodeName && elem.nodeName.toLowerCase () === nodeName;
				};
		},

		"CLASS": function (className) {
			var pattern = classCache [className + ""];

			patrón de retorno ||
				(patrón = nuevo RegExp ("(^ |" + espacio en blanco + ")" + nombre de clase + "(" + espacio en blanco + "| $)")) &&
				classCache (className, function (elem) {
					return pattern.test (typeof elem.className === "string" && elem.className || typeof elem.getAttribute! == "undefined" && elem.getAttribute ("class") || "");
				});
		},

		"ATTR": función (nombre, operador, control) {
			función de retorno (elem) {
				var result = Sizzle.attr (elem, nombre);

				if (resultado == nulo) {
					operador de retorno === "! =";
				}
				if (! operator) {
					devolver verdadero;
				}

				resultado + = "";

				operador de devolución === "="? resultado === verificación:
					operador === "! ="? resultado! == verificación:
					operador === "^ ="? compruebe && result.indexOf (check) === 0:
					operador === "* ="? verificar && result.indexOf (verificar)> -1:
					operador === "$ ="? verificar && result.slice (-check.length) === verificar:
					operador === "~ ="? ("" + result.replace (rwhitespace, "") + "") .indexOf (check)> -1:
					operador === "| ="? resultado === control || result.slice (0, check.length + 1) === check + "-":
					falso;
			};
		},

		"NIÑO": función (tipo, qué, argumento, primero, último) {
			var simple = type.slice (0, 3)! == "nth",
				forward = type.slice (-4)! == "last",
				ofType = what === "of-type";

			devolver primero === 1 && last === 0?

				// Acceso directo para: nth - * (n)
				función (elem) {
					¡vuelve! elem.parentNode;
				}:

				función (elem, context, xml) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple! == adelante? "nextSibling": "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase (),
						useCache =! xml &&! ofType,
						diff = falso;

					if (padre) {

						//: (first | last | only) - (child | of-type)
						if (simple) {
							while (dir) {
								nodo = elem;
								while ((node ​​= node [dir])) {
									if (ofType?
										node.nodeName.toLowerCase () === nombre:
										node.nodeType === 1) {

										falso retorno;
									}
								}
								// Dirección inversa para: only- * (si aún no lo hemos hecho)
								start = dir = type === "only" &&! start && "nextSibling";
							}
							devolver verdadero;
						}

						start = [forward? parent.firstChild: parent.lastChild];

						// non-xml: nth-child (...) almacena datos de caché en `parent`
						if (forward && useCache) {

							// Busca `elem` de un índice previamente almacenado en caché

							// ... de una manera amigable gzip
							nodo = padre;
							outerCache = node [expando] || (nodo [expando] = {});

							// Soporte: IE <9 solamente
							// Defiende contra attroperties clonadas (jQuery gh-1709)
							uniqueCache = outerCache [node.uniqueID] ||
								(outerCache [node.uniqueID] = {});

							cache = uniqueCache [tipo] || [];
							nodeIndex = caché [0] === dirruns && cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while ((node ​​= ++ nodeIndex && node && node [dir] ||

								// Regreso a la búsqueda de `elem` desde el comienzo
								(diff = nodeIndex = 0) || start.pop ())) {

								// Cuando se encuentra, los índices de caché en `parent` y break
								if (node.nodeType === 1 && ++ diff && node === elem) {
									uniqueCache [tipo] = [dirruns, nodeIndex, diff];
									descanso;
								}
							}

						} else {
							// Usa el índice del elemento previamente almacenado en caché si está disponible
							if (useCache) {
								// ... de una manera amigable gzip
								nodo = elem;
								outerCache = node [expando] || (nodo [expando] = {});

								// Soporte: IE <9 solamente
								// Defiende contra attroperties clonadas (jQuery gh-1709)
								uniqueCache = outerCache [node.uniqueID] ||
									(outerCache [node.uniqueID] = {});

								cache = uniqueCache [tipo] || [];
								nodeIndex = caché [0] === dirruns && cache [1];
								diff = nodeIndex;
							}

							// xml: nth-child (...)
							// o: nth-last-child (...) o: nth (-last)? - of-type (...)
							if (diff === falso) {
								// Usa el mismo loop como arriba para buscar `elem` desde el comienzo
								while ((node ​​= ++ nodeIndex && node && node [dir] ||
									(diff = nodeIndex = 0) || start.pop ())) {

									if ((ofType?
										node.nodeName.toLowerCase () === nombre:
										node.nodeType === 1) &&
										++ diff) {

										// Guarda en caché el índice de cada elemento encontrado
										if (useCache) {
											outerCache = node [expando] || (nodo [expando] = {});

											// Soporte: IE <9 solamente
											// Defiende contra attroperties clonadas (jQuery gh-1709)
											uniqueCache = outerCache [node.uniqueID] ||
												(outerCache [node.uniqueID] = {});

											uniqueCache [tipo] = [dirruns, diff];
										}

										if (node ​​=== elem) {
											descanso;
										}
									}
								}
							}
						}

						// Incorpore el desplazamiento, luego verifique el tamaño del ciclo
						diff - = último;
						return diff === first || (diff% primero === 0 && diff / first> = 0);
					}
				};
		},

		"PSEUDO": función (pseudo, argumento) {
			// los nombres de las pseudoclases no distinguen entre mayúsculas y minúsculas
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Priorizar por mayúsculas y minúsculas en caso de que se agreguen pseudos personalizados con letras mayúsculas
			// Recuerda que setFilters hereda de pseudos
			var args,
				fn = Expr.pseudos [pseudo] || Expr.setFilters [pseudo.toLowerCase ()] ||
					Sizzle.error ("pseudo no compatible:" + pseudo);

			// El usuario puede usar createPseudo para indicar que
			// se necesitan argumentos para crear la función de filtro
			// al igual que Sizzle
			if (fn [expando]) {
				return fn (argumento);
			}

			// Pero mantenemos el soporte para viejas firmas
			if (fn.length> 1) {
				args = [pseudo, pseudo, "", argumento];
				devuelve Expr.setFilters.hasOwnProperty (pseudo.toLowerCase ())?
					markFunction (función (semilla, coincidencias) {
						var idx,
							emparejado = fn (semilla, argumento),
							i = coincidente.length;
						mientras yo-- ) {
							idx = indexOf (semilla, emparejado [i]);
							seed [idx] =! (coincide con [idx] = emparejado [i]);
						}
					}):
					función (elem) {
						return fn (elem, 0, args);
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Pseudos potencialmente complejos
		"no": markFunction (función (selector) {
			// Recortar el selector pasado a compilar
			// para evitar el tratamiento de los principales y finales
			// espacios como combinators
			entrada var = [],
				resultados = [],
				matcher = compilar (selector.replace (rtrim, "$ 1"));

			return matcher [expando]?
				markFunction (función (semilla, coincidencias, contexto, xml) {
					var elem,
						incomparable = matcher (semilla, nulo, xml, []),
						i = seed.length;

					// Coincide con los elementos que no coinciden con `matcher`
					mientras yo-- ) {
						if ((elem = no coincidente [i])) {
							seed [i] =! (coincide con [i] = elem);
						}
					}
				}):
				función (elem, context, xml) {
					entrada [0] = elem;
					matcher (entrada, nulo, xml, resultados);
					// No guardes el elemento (problema n. ° 299)
					entrada [0] = nulo;
					return! results.pop ();
				};
		}),

		"tiene": markFunction (function (selector) {
			función de retorno (elem) {
				return Sizzle (selector, elem) .length> 0;
			};
		}),

		"contiene": markFunction (función (texto) {
			text = text.replace (runescape, funescape);
			función de retorno (elem) {
				return (elem.textContent || elem.innerText || getText (elem)) .indexOf (text)> -1;
			};
		}),

		// "Si un elemento está representado por un selector: lang ()
		// se basa únicamente en el valor de idioma del elemento
		// siendo igual al identificador C,
		// o comenzando con el identificador C inmediatamente seguido de "-".
		// La coincidencia de C con el valor de idioma del elemento se realiza sin distinción de mayúsculas y minúsculas.
		// El identificador C no tiene que ser un nombre de idioma válido. "
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction (function (lang) {
			// el valor lang debe ser un identificador válido
			if (! ridentifier.test (lang || ")) {
				Sizzle.error ("lang no compatible:" + lang);
			}
			lang = lang.replace (runescape, funescape) .toLowerCase ();
			función de retorno (elem) {
				var elemLang;
				hacer {
					if ((elemLang = documentIsHTML?
						elem.lang:
						elem.getAttribute ("xml: lang") || elem.getAttribute ("lang"))) {

						elemLang = elemLang.toLowerCase ();
						return elemLang === lang || elemLang.indexOf (lang + "-") === 0;
					}
				} while ((elem = elem.parentNode) && elem.nodeType === 1);
				falso retorno;
			};
		}),

		// Varios
		"objetivo": función (elem) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice (1) === elem.id;
		},

		"raíz": función (elem) {
			return elem === docElem;
		},

		"foco": función (elem) {
			return elem === document.activeElement && (! document.hasFocus || document.hasFocus ()) && !! (elem.type || elem.href || ~ elem.tabIndex);
		},

		// propiedades booleanas
		"enabled": createDisabledPseudo (false),
		"disabled": createDisabledPseudo (true),

		"checked": function (elem) {
			// En CSS3,: checked debe devolver los elementos seleccionados y seleccionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase ();
			return (nodeName === "input" && !! elem.checked) || (nodeName === "option" && !! elem.selected);
		},

		"seleccionado": función (elem) {
			// Acceder a esta propiedad hace que se seleccione por defecto
			// las opciones en Safari funcionan correctamente
			if (elem.parentNode) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === verdadero;
		},

		// Contenido
		"vacío": función (elem) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//: empty es negado por el elemento (1) o los nodos de contenido (texto: 3; cdata: 4; entidad ref: 5),
			// pero no por otros (comentario: 8; instrucción de procesamiento: 7; etc.)
			// nodeType <6 funciona porque los atributos (2) no aparecen como niños
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				if (elem.nodeType <6) {
					falso retorno;
				}
			}
			devolver verdadero;
		},

		"padre": función (elem) {
			return! Expr.pseudos ["empty"] (elem);
		},

		// Elemento / tipos de entrada
		"encabezado": función (elem) {
			return rheader.test (elem.nodeName);
		},

		"entrada": función (elem) {
			devuelve rinputs.test (elem.nodeName);
		},

		"botón": función (elem) {
			var name = elem.nodeName.toLowerCase ();
			return name === "input" && elem.type === "button" || nombre === "botón";
		},

		"texto": función (elem) {
			var attr;
			return elem.nodeName.toLowerCase () === "input" &&
				elem.type === "text" &&

				// Soporte: IE <8
				// Aparecen nuevos valores de atributo HTML5 (por ejemplo, "búsqueda") con elem.type === "text"
				((attr = elem.getAttribute ("type")) == null || attr.toLowerCase () === "text");
		},

		// Position-in-collection
		"first": createPositionalPseudo (function () {
			devolver [0];
		}),

		"last": createPositionalPseudo (function (matchIndexes, length) {
			return [longitud - 1];
		}),

		"eq": createPositionalPseudo (function (matchIndexes, length, argument) {
			return [argumento <0? argumento + longitud: argumento];
		}),

		"incluso": createPositionalPseudo (function (matchIndexes, length) {
			var i = 0;
			para (; i <longitud; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"impar": createPositionalPseudo (function (matchIndexes, length) {
			var i = 1;
			para (; i <longitud; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argumento <0? argumento + longitud: argumento;
			para (; --i> = 0;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argumento <0? argumento + longitud: argumento;
			for (; ++ i <length;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos ["nth"] = Expr.pseudos ["eq"];

// Añadir botón / tipo de entrada pseudos
para (i en {radio: verdadero, casilla de verificación: verdadero, archivo: verdadero, contraseña: verdadero, imagen: verdadero}) {
	Expr.pseudos [i] = createInputPseudo (i);
}
for (i en {submit: true, reset: true}) {
	Expr.pseudos [i] = createButtonPseudo (i);
}

// API fácil para crear nuevos setFilters
function setFilters () {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters ();

tokenize = Sizzle.tokenize = function (selector, parseOnly) {
	var emparejado, partido, tokens, tipo,
		soFar, grupos, preFiltros,
		cached = tokenCache [selector + ""];

	if (en caché) {
		return parseOnly? 0: cached.slice (0);
	}

	soFar = selector;
	grupos = [];
	preFilters = Expr.preFilter;

	while (soFar) {

		// Coma y primera ejecución
		if (! matching || (match = rcomma.exec (soFar))) {
			if (coincidencia) {
				// No consuma comillas finales como válidas
				soFar = soFar.slice (coincide con [0] .length) || hasta aquí;
			}
			groups.push ((tokens = []));
		}

		emparejado = falso;

		// Combinators
		if ((match = rcombinators.exec (soFar))) {
			emparejado = match.shift ();
			tokens.push ({
				valor: emparejado,
				// Conecta los combinadores descendientes al espacio
				type: match [0] .replace (rtrim, "")
			});
			soFar = soFar.slice (matching.length);
		}

		// Filtros
		para (escriba en Expr.filter) {
			if ((match = matchExpr [tipo] .exec (soFar)) && (! preFilters [tipo] ||
				(match = preFilters [type] (match)))) {
				emparejado = match.shift ();
				tokens.push ({
					valor: emparejado,
					tipo: tipo,
					partidos: partido
				});
				soFar = soFar.slice (matching.length);
			}
		}

		if (! emparejado) {
			descanso;
		}
	}

	// Devuelve la longitud del exceso no válido
	// si solo estamos analizando
	// De lo contrario, lanzar un error o devolver tokens
	return parseOnly?
		soFar.length:
		hasta aquí ?
			Sizzle.error (selector):
			// Guarda en caché los tokens
			tokenCache (selector, grupos) .slice (0);
};

function toSelector (tokens) {
	var i = 0,
		len = tokens.length,
		selector = "";
	para (; i <len; i ++) {
		selector + = tokens [i] .value;
	}
	selector de devolución;
}

función addCombinator (matcher, combinator, base) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && clave === "parentNode",
		doneName = done ++;

	volver combinator.first?
		// Verificar contra el ancestro más cercano / elemento precedente
		función (elem, context, xml) {
			while ((elem = elem [dir])) {
				if (elem.nodeType === 1 || checkNonElements) {
					return matcher (elem, context, xml);
				}
			}
			falso retorno;
		}:

		// Verificar contra todos los ancestros / elementos precedentes
		función (elem, context, xml) {
			var oldCache, uniqueCache, outerCache,
				newCache = [dirruns, doneName];

			// No podemos establecer datos arbitrarios en nodos XML, por lo que no se benefician del almacenamiento en caché del combinador
			if (xml) {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						if (matcher (elem, context, xml)) {
							devolver verdadero;
						}
					}
				}
			} else {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						outerCache = elem [expando] || (elem [expando] = {});

						// Soporte: IE <9 solamente
						// Defiende contra attroperties clonadas (jQuery gh-1709)
						uniqueCache = outerCache [elem.uniqueID] || (outerCache [elem.uniqueID] = {});

						if (omitir && skip === elem.nodeName.toLowerCase ()) {
							elem = elem [dir] || elem;
						} else if ((oldCache = uniqueCache [clave]) &&
							oldCache [0] === dirruns && oldCache [1] === doneName) {

							// Asignar a newCache para que los resultados retrocedan a elementos anteriores
							return (newCache [2] = oldCache [2]);
						} else {
							// Reutilizar newcache para que los resultados se propaguen hacia atrás a los elementos anteriores
							uniqueCache [key] = newCache;

							// Un partido significa que hemos terminado; un error significa que tenemos que seguir comprobando
							if ((newCache [2] = matcher (elem, context, xml))) {
								devolver verdadero;
							}
						}
					}
				}
			}
			falso retorno;
		};
}

function elementMatcher (matchers) {
	devolver matchers.length> 1?
		función (elem, context, xml) {
			var i = matchers.length;
			mientras yo-- ) {
				if (! matchers [i] (elem, context, xml)) {
					falso retorno;
				}
			}
			devolver verdadero;
		}:
		matchers [0];
}

function multipleContexts (selector, contextos, resultados) {
	var i = 0,
		len = contexts.length;
	para (; i <len; i ++) {
		Sizzle (selector, contextos [i], resultados);
	}
	resultados de devolución;
}

función condensada (no coincidente, mapa, filtro, contexto, xml) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map! = null;

	para (; i <len; i ++) {
		if ((elem = no coincidente [i])) {
			if (! filter || filter (elem, context, xml)) {
				newUnmatched.push (elem);
				if (mapeado) {
					map.push (i);
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher (preFilter, selector, matcher, postFilter, postFinder, postSelector) {
	if (postFilter &&! postFilter [expando]) {
		postFilter = setMatcher (postFilter);
	}
	if (postFinder &&! postFinder [expando]) {
		postFinder = setMatcher (postFinder, postSelector);
	}
	return markFunction (función (semilla, resultados, contexto, xml) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexistente = results.length,

			// Obtener elementos iniciales de semilla o contexto
			elems = semilla || multipleContexts (selector || "*", context.nodeType? [context]: context, []),

			// Prefilter para obtener la entrada de matcher, preservando un mapa para la sincronización de resultados de inicialización
			matcherIn = preFilter && (seed || selector)?
				condense (elems, preMap, preFilter, context, xml):
				Elems,

			matcherOut = matcher?
				// Si tenemos un postFinder, o seed filtrado, o postFilter no semilla o resultados preexistentes,
				postFinder || (seed? preFilter: preexisting || postFilter)?

					// ... es necesario un procesamiento intermedio
					[]:

					// ... de lo contrario, usa los resultados directamente
					resultados:
				matcherIn;

		// Encuentra coincidencias principales
		if (matcher) {
			matcher (matcherIn, matcherOut, context, xml);
		}

		// Aplicar postFilter
		if (postFilter) {
			temp = condense (matcherOut, postMap);
			postFilter (temp, [], context, xml);

			// Ignorar elementos que fallan volviendo a moverlos a matcherIn
			i = temp.length;
			mientras yo-- ) {
				if ((elem = temp [i])) {
					matcherOut [postMap [i]] =! (matcherIn [postMap [i]] = elem);
				}
			}
		}

		si (semilla) {
			if (postFinder || preFilter) {
				if (postFinder) {
					// Obtenga el matcherOut final al condensar este intermedio en contextos postFinder
					temp = [];
					i = matcherOut.length;
					mientras yo-- ) {
						if ((elem = matcherOut [i])) {
							// Restaurar matcherIn ya que elem aún no es una coincidencia final
							temp.push ((matcherIn [i] = elem));
						}
					}
					postFinder (null, (matcherOut = []), temp, xml);
				}

				// Mueva los elementos coincidentes de la semilla a los resultados para mantenerlos sincronizados
				i = matcherOut.length;
				mientras yo-- ) {
					if ((elem = matcherOut [i]) &&
						(temp = postFinder? indexOf (semilla, elem): preMap [i])> -1) {

						seed [temp] =! (results [temp] = elem);
					}
				}
			}

		// Agregar elementos a los resultados, a través de postFinder si está definido
		} else {
			matcherOut = condensado (
				matcherOut === resultados?
					matcherOut.splice (preexistente, matcherOut.length):
					matcherOut
			);
			if (postFinder) {
				postFinder (null, resultados, matcherOut, xml);
			} else {
				push.apply (resultados, matcherOut);
			}
		}
	});
}

function matcherFromTokens (tokens) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative [tokens [0] .type],
		implicitRelative = leadingRelative || Expr.relative [""],
		i = leadingRelative? 1: 0,

		// El matcher fundacional asegura que los elementos son alcanzables desde el (los) contexto (s) de nivel superior
		matchContext = addCombinator (función (elem) {
			return elem === checkContext;
		}, implicitRelative, true),
		matchAnyContext = addCombinator (function (elem) {
			return indexOf (checkContext, elem)> -1;
		}, implicitRelative, true),
		matchers = [function (elem, context, xml) {
			var ret = (! leadingRelative && (xml || context! == outermostContext)) || (
				(checkContext = context) .nodeType?
					matchContext (elem, context, xml):
					matchAnyContext (elem, context, xml));
			// Evita colgar en el elemento (problema n. ° 299)
			checkContext = null;
			return ret;
		}];

	para (; i <len; i ++) {
		if ((matcher = Expr.relative [tokens [i] .type])) {
			matchers = [addCombinator (elementMatcher (matchers), matcher)];
		} else {
			matcher = Expr.filter [tokens [i] .type] .apply (null, tokens [i] .matches);

			// Retorno especial al ver un matcher posicional
			if (matcher [expando]) {
				// Encuentra el siguiente operador relativo (si lo hay) para un manejo adecuado
				j = ++ i;
				para (; j <len; j ++) {
					if (Expr.relative [tokens [j] .type]) {
						descanso;
					}
				}
				devuelve setMatcher (
					i> 1 && elementMatcher (matchers),
					i> 1 && toSelector (
						// Si el token anterior era un combinador descendiente, inserte un elemento any implícito `*`
						tokens.slice (0, i - 1) .concat ({value: tokens [i - 2] .type === ""? "" * ":" "})
					) .replace (rtrim, "$ 1"),
					matcher,
					i <j && matcherFromTokens (tokens.slice (i, j)),
					j <len && matcherFromTokens ((tokens = tokens.slice (j))),
					j <len && toSelector (tokens)
				);
			}
			matchers.push (matcher);
		}
	}

	return elementMatcher (matchers);
}

function matcherFromGroupMatchers (elementMatchers, setMatchers) {
	var bySet = setMatchers.length> 0,
		byElement = elementMatchers.length> 0,
		superMatcher = function (semilla, contexto, xml, resultados, más externo) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				inigualable = semilla && [],
				setMatched = [],
				contextBackup = outermostContext,
				// Siempre debemos tener elementos semilla o el contexto más externo
				elems = semilla || byElement && Expr.find ["TAG"] ("*", más externo),
				// Usa dirruns enteros iff este es el matcher más externo
				dirrunsUnique = (dirruns + = contextBackup == null? 1: Math.random () || 0.1),
				len = elems.length;

			if (outermost) {
				outermostContext = context === documento || contexto || más exterior;
			}

			// Agregar elementos que pasen elementMatchers directamente a los resultados
			// Soporte: IE <9, Safari
			// Tolerar las propiedades de NodeList (IE: "length"; Safari: <number>) haciendo coincidir elementos por id
			para (; i! == len && (elem = elems [i])! = null; i ++) {
				if (byElement && elem) {
					j = 0;
					if (! context && elem.ownerDocument! == document) {
						setDocument (elem);
						xml =! documentIsHTML;
					}
					while ((matcher = elementMatchers [j ++])) {
						if (matcher (elem, context || document, xml)) {
							results.push (elem);
							descanso;
						}
					}
					if (outermost) {
						dirruns = dirrunsUnique;
					}
				}

				// Seguimiento de elementos no coincidentes para establecer filtros
				if (bySet) {
					// Habrán pasado por todas las parejas posibles
					if ((elem =! matcher && elem)) {
						matchingCount--;
					}

					// Alarga la matriz para cada elemento, coincide o no
					si (semilla) {
						unmatched.push (elem);
					}
				}
			}

			// `i` ahora es el recuento de los elementos visitados anteriormente, y agregarlo a` matchedCount`
			// hace que este último sea no negativo.
			matchingCount + = i;

			// Aplicar filtros de conjunto a elementos no coincidentes
			// NOTA: Esto se puede omitir si no hay elementos no coincidentes (es decir, `matchedCount`
			// es igual a `i`), a menos que no hayamos visitado _any_ elementos en el ciclo anterior porque tenemos
			// sin elementos que coincidan y sin semilla.
			// Incrementando una cadena inicial "0" `i` permite que` i` permanezca como una cadena solo en ese
			// case, que dará como resultado un "00" `matchedCount` que difiere de` i` pero también es
			// numéricamente cero.
			if (bySet && i! == matchedCount) {
				j = 0;
				while ((matcher = setMatchers [j ++])) {
					matcher (sin igual, setMatched, context, xml);
				}

				si (semilla) {
					// Reintegrar las coincidencias de elementos para eliminar la necesidad de clasificar
					if (matchingCount> 0) {
						mientras yo-- ) {
							if (! (inigualable [i] || setMatched [i])) {
								setMatched [i] = pop.call (resultados);
							}
						}
					}

					// Descartar valores de marcador de posición de índice para obtener solo coincidencias reales
					setMatched = condense (setMatched);
				}

				// Añadir coincidencias a los resultados
				push.apply (results, setMatched);

				// Las combinaciones de conjuntos sin semillas que suceden con éxito en varias combinaciones exitosas estipulan la clasificación
				if (outermost &&! seed && setMatched.length> 0 &&
					(matchedCount + setMatchers.length)> 1) {

					Sizzle.uniqueSort (resultados);
				}
			}

			// Anula la manipulación de globales por parte de los marcadores anidados
			if (outermost) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			regreso sin igual;
		};

	volver por Set?
		markFunction (superMatcher):
		superMatcher;
}

compile = Sizzle.compile = function (selector, coincidencia / * Solo uso interno * /) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache [selector + ""];

	if (! cached) {
		// Genera una función de funciones recursivas que se puede usar para verificar cada elemento
		if (! match) {
			match = tokenize (selector);
		}
		i = match.length;
		mientras yo-- ) {
			cached = matcherFromTokens (coincidencia [i]);
			if (en caché [expando]) {
				setMatchers.push (en caché);
			} else {
				elementMatchers.push (en caché);
			}
		}

		// Guarda en caché la función compilada
		cached = compilerCache (selector, matcherFromGroupMatchers (elementMatchers, setMatchers));

		// Guardar selector y tokenización
		cached.selector = selector;
	}
	devolver en caché;
};

/ **
 * Una función de selección de bajo nivel que funciona con compilado de Sizzle
 * funciones de selector
 * Selector @param {String | Function} Selector o precompilado
 * Función de selector construida con Sizzle.compile
 * contexto @param {Element}
 * @param {Array} [resultados]
 * @param {Array} [seed] Un conjunto de elementos para hacer coincidir
 * /
select = Sizzle.select = function (selector, contexto, resultados, semilla) {
	var i, tokens, token, tipo, buscar,
		compiled = typeof selector === "function" && selector,
		match =! seed && tokenize ((selector = compiled.selector || selector));

	resultados = resultados || [];

	// Intenta minimizar las operaciones si solo hay un selector en la lista y no hay semillas
	// (el último de los cuales nos garantiza el contexto)
	if (match.length === 1) {

		// Reduce el contexto si el selector compuesto líder es una ID
		tokens = match [0] = match [0] .slice (0);
		if (tokens.length> 2 && (token = tokens [0]). tipo === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]) {

			context = (Expr.find ["ID"] (token.matches [0] .replace (runescape, funescape), context) || []) [0];
			if (! context) {
				resultados de devolución;

			// Los emparejamientos precompilados aún verificarán ancestros, así que sube un nivel
			} else if (compilado) {
				context = context.parentNode;
			}

			selector = selector.slice (tokens.shift (). value.length);
		}

		// Obtener un conjunto de semillas para la correspondencia de derecha a izquierda
		i = matchExpr ["needsContext"]. test (selector)? 0: tokens.length;
		mientras yo-- ) {
			token = tokens [i];

			// abortar si golpeamos un combinador
			if (Expr.relative [(type = token.type)]) {
				descanso;
			}
			if ((find = Expr.find [type])) {
				// Buscar, expandir el contexto para los principales combinadores de hermanos
				if ((semilla = encontrar (
					token.matches [0] .replace (runescape, funescape),
					rsibling.test (tokens [0] .type) && testContext (context.parentNode) || contexto
				))) {

					// Si seed está vacío o no quedan tokens, podemos regresar temprano
					tokens.splice (i, 1);
					selector = seed.length && toSelector (tokens);
					if (! selector) {
						push.apply (resultados, semilla);
						resultados de devolución;
					}

					descanso;
				}
			}
		}
	}

	// Compila y ejecuta una función de filtrado si no se proporciona una
	// Proporcionar `match` para evitar la retoqueización si modificamos el selector anterior
	(compilado || compilar (selector, partido)) (
		semilla,
		contexto,
		! documentIsHTML,
		resultados,
		! contexto || rsibling.test (selector) && testContext (context.parentNode) || contexto
	);
	resultados de devolución;
};

// asignaciones de una sola vez

// Clasificar estabilidad
support.sortStable = expando.split (""). sort (sortOrder) .join ("") === expando;

// Soporte: Chrome 14-35 +
// Siempre asume duplicados si no se pasan a la función de comparación
support.detectDuplicates = !! hasDuplicate;

// Initialize contra el documento predeterminado
setDocument ();

// Soporte: Webkit <537.32 - Safari 6.0.3 / Chrome 25 (arreglado en Chrome 27)
// Los nodos independientes se suceden de manera confusa * el uno al otro *
support.sortDetached = assert (function (el) {
	// Debería devolver 1, pero devuelve 4 (siguiente)
	return el.compareDocumentPosition (document.createElement ("fieldset")) & 1;
});

// Soporte: IE <8
// Prevenir la "interpolación" de atributo / propiedad
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if (! assert (function (el) {
	el.innerHTML = "<a href='#'> </a>";
	devuelve el.firstChild.getAttribute ("href") === "#";
})) {
	addHandle ("tipo | href | alto | ancho", función (elem, nombre, isXML) {
		if (! isXML) {
			return elem.getAttribute (name, name.toLowerCase () === "type"? 1: 2);
		}
	});
}

// Soporte: IE <9
// Usa defaultValue en lugar de getAttribute ("value")
if (! support.attributes ||! assert (function (el) {
	el.innerHTML = "<input />";
	el.firstChild.setAttribute ("valor", "");
	devuelve el.firstChild.getAttribute ("valor") === "";
})) {
	addHandle ("valor", función (elem, nombre, isXML) {
		if (! isXML && elem.nodeName.toLowerCase () === "input") {
			return elem.defaultValue;
		}
	});
}

// Soporte: IE <9
// Usa getAttributeNode para buscar booleanos cuando getAttribute mentiras
if (! assert (function (el) {
	return el.getAttribute ("deshabilitado") == nulo;
})) {
	addHandle (booleanos, función (elem, nombre, isXML) {
		var val;
		if (! isXML) {
			return elem [nombre] === ¿verdad? name.toLowerCase ():
					(val = elem.getAttributeNode (name)) && val.specified?
					val.value:
				nulo;
		}
	});
}

devolver Sizzle;

})( ventana );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Obsoleto
jQuery.expr [":"] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function (elem, dir, until) {
	var emparejado = [],
		truncado = hasta! == indefinido;

	while ((elem = elem [dir]) && elem.nodeType! == 9) {
		if (elem.nodeType === 1) {
			if (truncar && jQuery (elem) .is (hasta)) {
				descanso;
			}
			emparejado.push (elem);
		}
	}
	regreso emparejado;
};


var hermanos = función (n, elem) {
	var emparejado = [];

	para (; n; n = n.nextSibling) {
		if (n.nodeType === 1 && n! == elem) {
			emparejado.push (n);
		}
	}

	regreso emparejado;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName (elem, nombre) {

  return elem.nodeName && elem.nodeName.toLowerCase () === name.toLowerCase ();

};
var rsingleTag = (/ ^ <([az] [^ \ / \ 0>: \ x20 \ t \ r \ n \ f] *) [\ x20 \ t \ r \ n \ f] * \ /?> ( ?: <\ / \ 1> |) $ / i);



// Implementa la funcionalidad idéntica para filtro y no
función winnow (elementos, calificador, no) {
	if (isFunction (calificador)) {
		return jQuery.grep (elementos, función (elem, i) {
			¡regreso! calificador.call (elem, i, elem)! == no;
		});
	}

	// Elemento individual
	if (qualifier.nodeType) {
		return jQuery.grep (elementos, función (elem) {
			return (elem === calificador)! == no;
		});
	}

	// Arraylike de elementos (jQuery, argumentos, Array)
	if (typeof calificador! == "cadena") {
		return jQuery.grep (elementos, función (elem) {
			return (indexOf.call (calificador, elem)> -1)! == no;
		});
	}

	// Filtrado directamente para selectores simples y complejos
	return jQuery.filter (calificador, elementos, no);
}

jQuery.filter = function (expr, elems, not) {
	var elem = elems [0];

	si no ) {
		expr = ": not (" + expr + ")";
	}

	if (elems.length === 1 && elem.nodeType === 1) {
		return jQuery.find.matchesSelector (elem, expr)? [elem]: [];
	}

	return jQuery.find.matches (expr, jQuery.grep (elems, function (elem) {
		return elem.nodeType === 1;
	}));
};

jQuery.fn.extend ({
	find: function (selector) {
		var i, ret,
			len = this.length,
			self = esto;

		if (typeof selector! == "cadena") {
			return this.pushStack (jQuery (selector) .filter (function () {
				para (i = 0; i <len; i ++) {
					if (jQuery.contains (self [i], this)) {
						devolver verdadero;
					}
				}
			}));
		}

		ret = this.pushStack ([]);

		para (i = 0; i <len; i ++) {
			jQuery.find (selector, self [i], ret);
		}

		devolver len> 1? jQuery.uniqueSort (ret): ret;
	},
	filter: function (selector) {
		devuelve this.pushStack (winnow (this, selector || [], false));
	},
	no: función (selector) {
		devuelve this.pushStack (winnow (this, selector || [], true));
	},
	es: function (selector) {
		¡regreso!
			esta,

			// Si este es un selector posicional / relativo, verifique la membresía en el conjunto devuelto
			// tan $ ("p: first"). is ("p: last") no devolverá true para un documento con dos "p".
			typeof selector === "cadena" && rneedsContext.test (selector)?
				jQuery (selector):
				selector || [],
			falso
		).longitud;
	}
});


// Inicializar un objeto jQuery


// Una referencia central a la raíz jQuery (documento)
var rootjQuery,

	// Una forma simple de verificar cadenas de HTML
	// Prioriza a #id sobre <etiqueta> para evitar XSS a través de location.hash (# 9521)
	// Estricto reconocimiento HTML (# 11290: debe comenzar con <)
	// Acceso directo simple #id caso de velocidad
	rquickExpr = / ^ (?: \ s * (<[\ w \ W] +>) [^>] * | # ([\ w -] +)) $ /,

	init = jQuery.fn.init = function (selector, contexto, raíz) {
		var match, elem;

		// MANEJO: $ (""), $ (nulo), $ (indefinido), $ (falso)
		if (! selector) {
			devuelve esto;
		}

		// Método init () acepta un rootjQuery alternativo
		// para migrar puede admitir jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Manejar cadenas de HTML
		if (typeof selector === "cadena") {
			if (selector [0] === "<" &&
				selector [selector.length - 1] === ">" &&
				selector.length> = 3) {

				// Supongamos que las cadenas que comienzan y terminan con <> son HTML y omiten la comprobación de expresiones regulares
				match = [null, selector, null];

			} else {
				match = rquickExpr.exec (selector);
			}

			// Haga coincidir html o asegúrese de que no se especifique ningún contexto para #id
			if (match && (match [1] ||! context)) {

				// HANDLE: $ (html) -> $ (array)
				if (match [1]) {
					contexto = instancia de contexto de jQuery? contexto [0]: contexto;

					// La opción para ejecutar scripts es verdadera para back-compat
					// Permitir intencionalmente que se produzca el error si parseHTML no está presente
					jQuery.merge (this, jQuery.parseHTML (
						partido [1],
						context && context.nodeType? context.ownerDocument || contexto: documento,
						cierto
					));

					// HANDLE: $ (html, props)
					if (rsingleTag.test (match [1]) && jQuery.isPlainObject (context)) {
						para (partido en contexto) {

							// Las propiedades del contexto se llaman como métodos si es posible
							if (isFunction (this [match])) {
								este [partido] (contexto [partido]);

							// ... y configurados como atributos
							} else {
								this.attr (coincidencia, contexto [coincidencia]);
							}
						}
					}

					devuelve esto;

				// HANDLE: $ (# id)
				} else {
					elem = document.getElementById (coincidencia [2]);

					if (elem) {

						// Inyectar el elemento directamente en el objeto jQuery
						esto [0] = elem;
						this.length = 1;
					}
					devuelve esto;
				}

			// HANDLE: $ (expr, $ (...))
			} else if (! context || context.jquery) {
				return (context || root) .find (selector);

			// HANDLE: $ (expr, context)
			// (que es solo equivalente a: $ (context) .find (expr)
			} else {
				return this.constructor (context) .find (selector);
			}

		// HANDLE: $ (DOMElement)
		} else if (selector.nodeType) {
			este [0] = selector;
			this.length = 1;
			devuelve esto;

		// HANDLE: $ (función)
		// Acceso directo para documentos listos
		} else if (isFunction (selector)) {
			return root.ready! == undefined?
				root.ready (selector):

				// Ejecutar inmediatamente si ready no está presente
				selector (jQuery);
		}

		return jQuery.makeArray (selector, esto);
	};

// Dale a la función init el prototipo de jQuery para una instanciación posterior
init.prototype = jQuery.fn;

// Inicializar referencia central
rootjQuery = jQuery (documento);


var rparentsprev = / ^ (?: parents | prev (?: Until | All)) /,

	// Métodos garantizados para producir un conjunto único cuando se comienza desde un conjunto único
	guaranteedUnique = {
		niños: cierto,
		contenido: verdadero,
		siguiente: cierto,
		prev: cierto
	};

jQuery.fn.extend ({
	tiene: función (destino) {
		var targets = jQuery (target, this),
			l = targets.length;

		return this.filter (function () {
			var i = 0;
			para (; i <l; i ++) {
				if (jQuery.contains (this, targets [i])) {
					devolver verdadero;
				}
			}
		});
	},

	más cercano: función (selectores, contexto) {
		var cur,
			i = 0,
			l = this.length,
			emparejado = [],
			targets = typeof selectores! == "string" && jQuery (selectores);

		// Los selectores de posición nunca coinciden, ya que no hay _selection_ context
		if (! rneedsContext.test (selectores)) {
			para (; i <l; i ++) {
				para (cur = this [i]; cur && cur! == context; cur = cur.parentNode) {

					// Siempre salte fragmentos de documentos
					if (cur.nodeType <11 && (targets?
						targets.index (cur)> -1:

						// No pases elementos que no sean a Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector (cur, selectores))) {

						emparejado.push (cur);
						descanso;
					}
				}
			}
		}

		return this.pushStack (coincidente.length> 1? jQuery.uniqueSort (coincidente): coincidente);
	},

	// Determinar la posición de un elemento dentro del conjunto
	índice: función (elem) {

		// Sin argumento, índice de devolución en el padre
		if (! elem) {
			return (this [0] && this [0] .parentNode)? this.first (). prevAll (). length: -1;
		}

		// Índice en el selector
		if (typeof elem === "cadena") {
			return indexOf.call (jQuery (elem), esto [0]);
		}

		// Ubica la posición del elemento deseado
		return indexOf.call (esto,

			// Si recibe un objeto jQuery, se usa el primer elemento
			elem.jquery? elem [0]: elem
		);
	},

	agregar: función (selector, contexto) {
		devuelve this.pushStack (
			jQuery.uniqueSort (
				jQuery.merge (this.get (), jQuery (selector, contexto))
			)
		);
	},

	addBack: function (selector) {
		devuelve this.add (selector == null?
			this.prevObject: this.prevObject.filter (selector)
		);
	}
});

hermano de función (cur, dir) {
	while ((cur = cur [dir]) && cur.nodeType! == 1) {}
	devolver cur;
}

jQuery.each ({
	padre: función (elem) {
		var parent = elem.parentNode;
		return parent && parent.nodeType! == 11? padre: nulo;
	},
	padres: función (elem) {
		return dir (elem, "parentNode");
	},
	parentsUntil: function (elem, i, until) {
		devolver dir (elem, "parentNode", hasta);
	},
	siguiente: función (elem) {
		hermano de regreso (elem, "nextSibling");
	},
	prev: function (elem) {
		hermano de regreso (elem, "hermano anterior");
	},
	nextAll: function (elem) {
		return dir (elem, "nextSibling");
	},
	prevAll: function (elem) {
		return dir (elem, "previousSibling");
	},
	nextUntil: function (elem, i, until) {
		devolver dir (elem, "nextSibling", hasta);
	},
	prevUntil: function (elem, i, until) {
		devolver dir (elem, "previousSibling", hasta);
	},
	hermanos: función (elem) {
		hermanos de regreso ((elem.parentNode || {}) .firstChild, elem);
	},
	hijos: función (elem) {
		hermanos de regreso (elem.firstChild);
	},
	contenido: función (elem) {
        if (nodeName (elem, "iframe")) {
            return elem.contentDocument;
        }

        // Soporte: IE 9 - 11 solamente, iOS 7 solamente, navegador Android <= 4.3 solamente
        // Tratar el elemento de plantilla como uno normal en buscadores que
        // no lo soporto.
        if (nodeName (elem, "plantilla")) {
            elem = elem.content || elem;
        }

        return jQuery.merge ([], elem.childNodes);
	}
}, función (nombre, fn) {
	jQuery.fn [name] = function (until, selector) {
		var emparejado = jQuery.map (esto, fn, hasta);

		if (name.slice (-5)! == "Until") {
			selector = hasta;
		}

		if (selector && typeof selector === "cadena") {
			emparejado = jQuery.filter (selector, emparejado);
		}

		if (this.length> 1) {

			// Eliminar duplicados
			if (! guaranteedUnique [nombre]) {
				jQuery.uniqueSort (coincidente);
			}

			// orden inverso para los padres * y derivados previos
			if (rparentsprev.test (name)) {
				matching.reverse ();
			}
		}

		devuelve this.pushStack (emparejado);
	};
});
var rnothtmlwhite = (/ [^ \ x20 \ t \ r \ n \ f] + / g);



// Convertir las opciones formateadas en String en formateadas por Object
function createOptions (opciones) {
	var object = {};
	jQuery.each (options.match (rnothtmlwhite) || [], function (_, flag) {
		objeto [flag] = verdadero;
	});
	objeto de retorno;
}

/ *
 * Crea una lista de devolución de llamada utilizando los siguientes parámetros:
 *
 * opciones: una lista opcional de opciones separadas por espacios que cambiarán la forma
 * la lista de devolución de llamada se comporta o un objeto de opción más tradicional
 *
 * Por defecto, una lista de devolución de llamada actuará como una lista de devolución de eventos y puede ser
 * "disparado" varias veces.
 *
 * Posibles opciones:
 *
 * una vez: se asegurará de que la lista de devolución de llamada solo se active una vez (como un aplazado)
 *
 * memoria: hará un seguimiento de los valores anteriores y llamará a cualquier devolución de llamada agregada
 * después de que la lista ha sido disparada de inmediato con la última "memorización"
 * valores (como un aplazado)
 *
 * unique: asegurará que una devolución de llamada solo se pueda agregar una vez (no hay duplicados en la lista)
 *
 * stopOnFalse: interrumpe las llamadas cuando una devolución de llamada devuelve falso
 *
 * /
jQuery.Callbacks = function (opciones) {

	// Convierte las opciones de formato de cadena a formato de objeto si es necesario
	// (registramos la caché primero)
	opciones = tipo de opciones === "cadena"?
		createOptions (opciones):
		jQuery.extend ({}, opciones);

	var // Flag para saber si la lista está actualmente activa
		disparo,

		// Último valor de fuego para listas no olvidables
		memoria,

		// Marca para saber si la lista ya se activó
		despedido,

		// Bandera para evitar disparar
		bloqueado,

		// Lista de devolución real
		list = [],

		// Cola de datos de ejecución para listas repetibles
		queue = [],

		// Índice de devolución de llamada activa (modificada por agregar / eliminar según sea necesario)
		disparandoIndex = -1,

		// devolución de llamada de fuego
		fire = function () {

			// Aplicar una sola vez
			locked = locked || options.once;

			// Ejecutar callbacks para todas las ejecuciones pendientes,
			// respetando las anulaciones de disparosIndex y los cambios de tiempo de ejecución
			disparado = disparar = verdadero;
			for (; queue.length; firingIndex = -1) {
				memory = queue.shift ();
				while (++ fuegoIndex <list.length) {

					// Ejecute la devolución de llamada y verifique la finalización anticipada
					if (lista [igningIndex] .aplicar (memoria [0], memoria [1]) === false &&
						options.stopOnFalse) {

						// Salta al final y olvida los datos, así que .add no vuelve a disparar
						igningIndex = list.length;
						memoria = falso;
					}
				}
			}

			// Olvida los datos si hemos terminado con esto
			if (! options.memory) {
				memoria = falso;
			}

			disparando = falso;

			// Limpiar si hemos terminado de disparar para siempre
			if (bloqueado) {

				// Mantenga una lista vacía si tenemos datos para futuras llamadas
				if (memoria) {
					list = [];

				// De lo contrario, este objeto se gasta
				} else {
					list = "";
				}
			}
		},

		// objeto de devolución de llamada real
		self = {

			// Agregar una devolución de llamada o una colección de devoluciones de llamada a la lista
			agregar: función () {
				if (lista) {

					// Si tenemos memoria de una pasada, debemos disparar después de agregar
					if (memoria &&! disparo) {
						igningIndex = list.length - 1;
						queue.push (memoria);
					}

					(función add (args) {
						jQuery.each (args, function (_, arg) {
							if (isFunction (arg)) {
								if (! options.unique ||! self.has (arg)) {
									list.push (arg);
								}
							} else if (arg && arg.length && toType (arg)! == "cadena") {

								// Inspeccionar recursivamente
								agregar (arg);
							}
						});
					}) (argumentos);

					if (memoria &&! disparo) {
						fuego();
					}
				}
				devuelve esto;
			},

			// Eliminar una devolución de llamada de la lista
			remove: function () {
				jQuery.each (argumentos, función (_, arg) {
					índice de var;
					while ((index = jQuery.inArray (arg, list, index))> -1) {
						list.splice (índice, 1);

						// Manejar índices de tiro
						if (index <= fuegoIndex) {
							disparandoIndex--;
						}
					}
				});
				devuelve esto;
			},

			// Compruebe si una devolución de llamada dada está en la lista.
			// Si no se da ningún argumento, regrese si la lista tiene callbacks adjuntos o no.
			tiene: function (fn) {
				volver fn?
					jQuery.inArray (fn, list)> -1:
					list.length> 0;
			},

			// Eliminar todas las devoluciones de llamada de la lista
			empty: function () {
				if (lista) {
					list = [];
				}
				devuelve esto;
			},

			// Deshabilita .fire y .add
			// Abortar cualquier ejecución actual / pendiente
			// Borrar todas las devoluciones de llamada y valores
			disable: function () {
				locked = queue = [];
				list = memory = "";
				devuelve esto;
			},
			disabled: function () {
				lista de regreso!
			},

			// Deshabilitar .fire
			// También deshabilitamos .add a menos que tengamos memoria (ya que no tendría ningún efecto)
			// Abortar cualquier ejecución pendiente
			lock: function () {
				locked = queue = [];
				if (! memory &&! disparando) {
					list = memory = "";
				}
				devuelve esto;
			},
			locked: function () {
				volver !! bloqueado;
			},

			// Llamar a todas las devoluciones de llamada con el contexto y los argumentos dados
			fireWith: function (context, args) {
				if (! locked) {
					args = args || [];
					args = [context, args.slice? args.slice (): args];
					queue.push (args);
					if (! disparo) {
						fuego();
					}
				}
				devuelve esto;
			},

			// Llamar a todas las devoluciones de llamada con los argumentos dados
			fuego: función () {
				self.fireWith (esto, argumentos);
				devuelve esto;
			},

			// Para saber si las devoluciones de llamada ya se han llamado al menos una vez
			disparado: function () {
				¡vuelve! despedido;
			}
		};

	volverse a sí mismo;
};


Identidad de la función (v) {
	devolver v;
}
función Thrower (ex) {
	lanzar ex;
}

function adoptValue (valor, resolver, rechazar, noValue) {
	método var;

	tratar {

		// Verifica primero el aspecto de promesa para privilegiar el comportamiento sincrónico
		if (value && isFunction ((method = value.promise))) {
			method.call (value) .one (resolver) .fail (reject);

		// Otros tebeos
		} else if (value && isFunction ((method = value.then))) {
			method.call (value, resolve, reject);

		// Otros no tetables
		} else {

			// Controle los argumentos `resolve` dejando array # slice cast boolean` noValue` al entero:
			// * falso: [valor] .slice (0) => resolver (valor)
			// * true: [value] .slice (1) => resolve ()
			resolve.apply (undefined, [value] .slice (noValue));
		}

	// Para Promises / A +, convierta las excepciones en rechazos
	// Debido a que jQuery.when no desenvuelve los elementos inaceptables, podemos omitir los controles adicionales que aparecen en
	// Deferido # luego para suprimir condicionalmente el rechazo.
	} catch (valor) {

		// Soporte: solo Android 4.0
		// Funciones de modo estrictas invocadas sin .call / .apply get global-object context
		reject.apply (undefined, [value]);
	}
}

jQuery.extend ({

	Deferido: función (func) {
		var tuples = [

				// acción, agregar oyente, devoluciones de llamada,
				// ... .then handlers, argumento index, [estado final]
				["notificar", "progreso", jQuery.Callbacks ("memoria"),
					jQuery.Callbacks ("memoria"), 2],
				["resolver", "hecho", jQuery.Callbacks ("memoria de una vez"),
					jQuery.Callbacks ("una vez memoria"), 0, "resuelto"],
				["rechazar", "fallar", jQuery.Callbacks ("una vez memoria"),
					jQuery.Callbacks ("una vez memoria"), 1, "rechazado"]
			],
			estado = "pendiente",
			promesa = {
				función estatal() {
					estado de devolución;
				},
				siempre: función () {
					deferred.done (argumentos) .fail (argumentos);
					devuelve esto;
				},
				"catch": function (fn) {
					return promise.then (null, fn);
				},

				// Keep pipe para back-compat
				pipe: function (/ * fnDone, fnFail, fnProgress * /) {
					var fns = argumentos;

					return jQuery.Deferred (function (newDefer) {
						jQuery.each (tuplas, función (i, tupla) {

							// Asigna tuplas (progreso, hecho, falla) a argumentos (hecho, falla, progreso)
							var fn = isFunction (fns [tuple [4]]) && fns [tuple [4]];

							// deferred.progress (function () {bind to newDefer o newDefer.notify})
							// deferred.done (function () {bind to newDefer o newDefer.resolve})
							// deferred.fail (function () {bind to newDefer o newDefer.reject})
							diferido [tupla [1]] (función () {
								var returned = fn && fn.apply (esto, argumentos);
								if (returned && isFunction (returned.promise)) {
									returned.promise ()
										.progress (newDefer.notify)
										.done (newDefer.resolve)
										.fail (newDefer.reject);
								} else {
									newDefer [tuple [0] + "Con"] (
										esta,
										fn? [devuelto]: argumentos
									);
								}
							});
						});
						fns = null;
					}) .promise ();
				},
				then: function (onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					resolución de la función (profundidad, diferido, controlador, especial) {
						función de retorno () {
							var that = this,
								args = argumentos,
								mightThrow = function () {
									var devuelto, entonces;

									// Soporte: Promises / A + sección 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignora los intentos de doble resolución
									if (profundidad <maxDepth) {
										regreso;
									}

									returned = handler.apply (eso, args);

									// Soporte: Promises / A + sección 2.3.1
									// https://promisesaplus.com/#point-48
									if (returned === deferred.promise ()) {
										lanzar nuevo TypeError ("auto-resolución de Thenable");
									}

									// Soporte: Promises / A + secciones 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Recuperar `luego` solo una vez
									then = devuelto &&

										// Soporte: Promesas / A + sección 2.3.4
										// https://promisesaplus.com/#point-64
										// Solo verifica objetos y funciones para la capacidad
										(typeof devuelto === "objeto" ||
											typeof devuelto === "función") &&
										devuelto.then;

									// Manejar un recuperable heredable
									if (isFunction (then)) {

										// Procesadores especiales (notificar) solo esperan la resolución
										if (especial) {
											luego llame(
												devuelto,
												resolver (maxDepth, diferido, identidad, especial),
												resolver (maxDepth, diferido, Thrower, especial)
											);

										// Los procesadores normales (resolver) también se enganchan en el progreso
										} else {

											// ... e ignorar los valores de resolución anteriores
											maxDepth ++;

											luego llame(
												devuelto,
												resolver (maxDepth, diferido, identidad, especial),
												resolver (maxDepth, diferido, Thrower, especial),
												resolver (maxDepth, diferido, identidad,
													deferred.notifyWith)
											);
										}

									// Manejar todos los demás valores devueltos
									} else {

										// Solo los controladores alternativos pasan el contexto
										// y valores múltiples (comportamiento no específico)
										if (handler! == Identidad) {
											eso = indefinido;
											args = [returned];
										}

										// Procesar el valor (es)
										// El proceso predeterminado es resolver
										(special || deferred.resolveWith) (eso, args);
									}
								},

								// Solo los procesadores normales (resolver) capturan y rechazan las excepciones
								proceso = especial?
									mightThrow:
									function () {
										tratar {
											mightThrow ();
										} catch (e) {

											if (jQuery.Deferred.exceptionHook) {
												jQuery.Deferred.exceptionHook (e,
													process.stackTrace);
											}

											// Soporte: Promises / A + sección 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignorar excepciones posteriores a la resolución
											if (profundidad + 1> = maxDepth) {

												// Solo los controladores alternativos pasan el contexto
												// y valores múltiples (comportamiento no específico)
												if (handler! == Thrower) {
													eso = indefinido;
													args = [e];
												}

												deferred.rejectWith (that, args);
											}
										}
									};

							// Soporte: Promises / A + sección 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resuelve las promesas inmediatamente para esquivar el rechazo falso de
							// errores subsiguientes
							if (profundidad) {
								proceso();
							} else {

								// Llamar a un gancho opcional para registrar la pila, en caso de excepción
								// ya que de lo contrario se pierde cuando la ejecución se vuelve asincrónica
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook ();
								}
								window.setTimeout (proceso);
							}
						};
					}

					return jQuery.Deferred (function (newDefer) {

						// progress_handlers.add (...)
						tuplas [0] [3] .add (
							resolver(
								0,
								nuevoDefer,
								isFunction (onProgress)?
									en progreso :
									Identidad,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add (...)
						tuplas [1] [3] .add (
							resolver(
								0,
								nuevoDefer,
								isFunction (onFulfilled)?
									onFulfilled:
									Identidad
							)
						);

						// rejected_handlers.add (...)
						tuplas [2] [3] .add (
							resolver(
								0,
								nuevoDefer,
								isFunction (onRejected)?
									onRejected:
									Lanzador
							)
						);
					}) .promise ();
				},

				// Obtenga una promesa para este diferido
				// Si se proporciona obj, el aspecto de promesa se agrega al objeto
				promesa: función (obj) {
					return obj! = null? jQuery.extend (obj, promesa): promesa;
				}
			},
			diferido = {};

		// Añadir métodos específicos de la lista
		jQuery.each (tuplas, función (i, tupla) {
			var list = tuple [2],
				stateString = tuple [5];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promesa [tuple [1]] = list.add;

			// Manejar el estado
			if (stateString) {
				list.add (
					function () {

						// estado = "resuelto" (es decir, cumplido)
						// estado = "rechazado"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuplas [3 - i] [2] .disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuplas [3 - i] [3] .disable,

					// progress_callbacks.lock
					tuplas [0] [2] .lock,

					// progress_handlers.lock
					tuplas [0] [3] .lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add (tuple [3] .fire);

			// deferred.notify = function () {deferred.notifyWith (...)}
			// deferred.resolve = function () {deferred.resolveWith (...)}
			// deferred.reject = function () {deferred.rejectWith (...)}
			diferido [tuple [0]] = function () {
				diferido [tupla [0] + "Con"] (esto === diferido? indefinido: esto, argumentos);
				devuelve esto;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			diferido [tuple [0] + "Con"] = list.fireWith;
		});

		// Hacer que el diferido sea una promesa
		promesa.promiso (diferido);

		// Llamar func dado si hay alguno
		if (func) {
			func.call (diferido, diferido);
		}

		// ¡Todo listo!
		devolución diferida;
	},

	// Ayudante diferido
	cuando: function (singleValue) {
		var

			// recuento de subordinados incompletos
			remaining = arguments.length,

			// conteo de argumentos no procesados
			i = restante,

			// datos de cumplimiento subordinados
			resolveContexts = Array (i),
			resolveValues ​​= slice.call (argumentos),

			// el maestro diferido
			master = jQuery.Deferred (),

			// fábrica de devolución de llamada subordinada
			updateFunc = function (i) {
				función de retorno (valor) {
					resolveContexts [i] = this;
					resolveValues ​​[i] = arguments.length> 1? slice.call (argumentos): valor;
					if (! (--remaining)) {
						master.resolveWith (resolveContexts, resolveValues);
					}
				};
			};

		// Los argumentos simples y vacíos se adoptan como Promise.resolve
		if (restante <= 1) {
			adoptValue (singleValue, master.done (updateFunc (i)) .resolve, master.reject,
				!restante );

			// Use .then () para desplegar objetos secundarios secundarios (consulte gh-3000)
			if (master.state () === "pending" ||
				isFunction (resolveValues ​​[i] && resolveValues ​​[i] .then)) {

				return master.then ();
			}
		}

		// Se agregan varios argumentos como Promise.all array elements
		mientras yo-- ) {
			adoptValue (resolveValues ​​[i], updateFunc (i), master.reject);
		}

		return master.promise ();
	}
});


// Estos generalmente indican un error del programador durante el desarrollo,
// advertir sobre ellos lo antes posible en lugar de tragarlos por defecto.
var rerrorNames = / ^ (Eval | Internal | Range | Reference | Syntax | Type | URI) Error $ /;

jQuery.Deferred.exceptionHook = function (error, stack) {

	// Soporte: IE 8 - 9 solamente
	// La consola existe cuando las herramientas de desarrollo están abiertas, lo que puede suceder en cualquier momento
	if (window.console && window.console.warn && error && rerrorNames.test (error.name)) {
		window.console.warn ("excepción jQuery.Deferred:" + error.message, error.stack, stack);
	}
};




jQuery.readyException = function (error) {
	window.setTimeout (function () {
		lanzar error;
	});
};




// El diferido utilizado en DOM listo
var readyList = jQuery.Deferred ();

jQuery.fn.ready = function (fn) {

	ReadyList
		.then (fn)

		// Ajustar jQuery.readyException en una función para que la búsqueda
		// ocurre en el momento del manejo del error en lugar de la devolución de llamada
		// registro.
		.catch (función (error) {
			jQuery.readyException (error);
		});

	devuelve esto;
};

jQuery.extend ({

	// ¿El DOM está listo para ser utilizado? Establezca en verdadero una vez que ocurre.
	isReady: falso,

	// Un contador para rastrear cuántos artículos esperar antes
	// el evento listo se dispara. Ver # 6781
	ReadyWait: 1,

	// Manejar cuando el DOM está listo
	listo: función (espera) {

		// Abortar si hay retenciones pendientes o ya estamos listas
		if (wait === true? --jQuery.readyWait: jQuery.isReady) {
			regreso;
		}

		// Recuerda que el DOM está listo
		jQuery.isReady = verdadero;

		// Si un evento DOM Ready normal se dispara, disminuye y espera si es necesario
		if (wait! == true && --jQuery.readyWait> 0) {
			regreso;
		}

		// Si hay funciones enlazadas, ejecutar
		readyList.resolveWith (document, [jQuery]);
	}
});

jQuery.ready.then = readyList.then;

// El controlador de eventos listos y el método de auto limpieza
función completada () {
	document.removeEventListener ("DOMContentLoaded", completado);
	window.removeEventListener ("carga", completado);
	jQuery.ready ();
}

// Casos de captura donde se llama $ (document) .ready ()
// después de que el evento del navegador ya haya ocurrido.
// Soporte: IE <= 9 - 10 solamente
// El IE más antiguo a veces señala "interactivo" demasiado pronto
if (document.readyState === "complete" ||
	(document.readyState! == "cargando" &&! document.documentElement.doScroll)) {

	// Manejarlo de forma asíncrona para permitir que las secuencias de comandos tengan la oportunidad de retrasar listas
	window.setTimeout (jQuery.ready);

} else {

	// Usa la práctica devolución de llamada del evento
	document.addEventListener ("DOMContentLoaded", completado);

	// Una alternativa a window.onload, que siempre funcionará
	window.addEventListener ("carga", completado);
}




// Método multifuncional para obtener y establecer valores de una colección
// Los valores / s se pueden ejecutar opcionalmente si se trata de una función
var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
	var i = 0,
		len = elems.length,
		bulk = clave == nulo;

	// Establece muchos valores
	if (toType (key) === "object") {
		chainable = verdadero;
		para (yo en clave) {
			acceso (elems, fn, i, clave [i], true, emptyGet, raw);
		}

	// Establece un valor
	} else if (value! == undefined) {
		chainable = verdadero;

		if (! isFunction (value)) {
			raw = verdadero;
		}

		if (bulk) {

			// Las operaciones masivas se ejecutan contra todo el conjunto
			if (raw) {
				fn.call (elems, valor);
				fn = nulo;

			// ... excepto cuando se ejecutan valores de funciones
			} else {
				bulk = fn;
				fn = función (elem, clave, valor) {
					return bulk.call (jQuery (elem), valor);
				};
			}
		}

		if (fn) {
			para (; i <len; i ++) {
				fn (
					elems [i], clave, sin procesar?
					valor:
					value.call (elems [i], i, fn (elems [i], clave))
				);
			}
		}
	}

	if (encadenable) {
		devolver los elems;
	}

	// Obtiene
	if (bulk) {
		devolver fn.call (elems);
	}

	devolver len? fn (elems [0], tecla): emptyGet;
};


// Coincide con la cadena punteada para camelizar
var rmsPrefix = / ^ - ms- /,
	rdashAlpha = / - ([az]) / g;

// Utilizado por camelCase como devolución de llamada para reemplazar ()
función fcamelCase (todo, letra) {
	return letter.toUpperCase ();
}

// Convertir guiones a camelCase; utilizado por el css y los módulos de datos
// Soporte: IE <= 9 - 11, Edge 12 - 15
// Microsoft olvidó aumentar su prefijo de proveedor (# 9572)
function camelCase (cadena) {
	return string.replace (rmsPrefix, "ms-") .replace (rdashAlpha, fcamelCase);
}
var acceptData = function (owner) {

	// Solo acepta:
	// - Nodo
	// - Node.ELEMENT_NODE
	// - Node.DOCUMENT_NODE
	// - Objeto
	// - Alguna
	return owner.nodeType === 1 || owner.nodeType === 9 || ! (+ owner.nodeType);
};




Datos de la función () {
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	caché: función (propietario) {

		// Verifica si el objeto propietario ya tiene un caché
		var value = owner [this.expando];

		// Si no, crea uno
		if (! value) {
			value = {};

			// Podemos aceptar datos para nodos sin elementos en los navegadores modernos,
			// pero no deberíamos, ver # 8335.
			// Siempre devuelve un objeto vacío.
			if (acceptData (owner)) {

				// Si es un nodo poco probable que se escriba o se buclee
				// usar asignación simple
				if (owner.nodeType) {
					owner [this.expando] = valor;

				// De lo contrario, asegúrelo en una propiedad no enumerable
				// configurable debe ser verdadero para permitir que la propiedad sea
				// eliminado cuando se eliminan los datos
				} else {
					Object.defineProperty (owner, this.expando, {
						valor: valor,
						configurable: verdadero
					});
				}
			}
		}

		valor de retorno;
	},
	conjunto: función (propietario, datos, valor) {
		var prop,
			cache = this.cache (propietario);

		// Handle: [owner, key, value] args
		// Siempre use la clave camelCase (gh-2257)
		if (tipo de datos === "cadena") {
			caché [camelCase (data)] = value;

		// Handle: [owner, {properties}] args
		} else {

			// Copie las propiedades una por una en el objeto de caché
			para (prop en data) {
				caché [camelCase (prop)] = data [prop];
			}
		}
		caché de retorno;
	},
	get: function (propietario, clave) {
		tecla de retorno === indefinido?
			this.cache (propietario):

			// Siempre use la clave camelCase (gh-2257)
			owner [this.expando] && owner [this.expando] [camelCase (clave)];
	},
	acceso: función (propietario, clave, valor) {

		// En casos donde:
		//
		// 1. No se especificó ninguna clave
		// 2. Se especificó una clave de cadena, pero no se proporcionó ningún valor
		//
		// Toma la ruta de "lectura" y permite que el método get determine
		// qué valor devolver, respectivamente:
		//
		// 1. Todo el objeto de caché
		// 2. Los datos almacenados en la clave
		//
		if (clave === indefinido ||
				((tecla && typeof key === "cadena") && value === undefined)) {

			devuelve this.get (propietario, clave);
		}

		// Cuando la clave no es una cadena, o ambas son claves y valores
		// se especifican, establecen o extienden (objetos existentes) con:
		//
		// 1. Un objeto de propiedades
		// 2. Una clave y valor
		//
		this.set (propietario, clave, valor);

		// Dado que la ruta "set" puede tener dos posibles puntos de entrada
		// devuelve los datos esperados en función de la ruta que se tomó [*]
		valor de retorno! == indefinido? valor: clave;
	},
	remove: function (propietario, clave) {
		var i,
			cache = owner [this.expando];

		if (cache === undefined) {
			regreso;
		}

		if (key! == undefined) {

			// Soporte de matriz separada por espacio o cadena de claves
			if (Array.isArray (clave)) {

				// Si la clave es una matriz de teclas ...
				// Siempre configuramos las claves camelCase, así que quítelo.
				key = key.map (camelCase);
			} else {
				key = camelCase (clave);

				// Si existe una clave con espacios, úselo.
				// De lo contrario, cree una matriz haciendo coincidir espacios que no sean en blanco
				clave = clave en la memoria caché?
					[ llave ] :
					(key.match (rnothtmlwhite) || []);
			}

			i = key.length;

			mientras yo-- ) {
				eliminar caché [tecla [i]];
			}
		}

		// Eliminar el expando si no hay más datos
		if (clave === undefined || jQuery.isEmptyObject (cache)) {

			// Soporte: Chrome <= 35 - 45
			// El rendimiento de Webkit y Blink sufre al eliminar propiedades
			// desde los nodos DOM, por lo que se establece en indefinido en su lugar
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (error restringido)
			if (owner.nodeType) {
				owner [this.expando] = undefined;
			} else {
				eliminar propietario [this.expando];
			}
		}
	},
	hasData: function (owner) {
		var cache = owner [this.expando];
		return cache! == undefined &&! jQuery.isEmptyObject (cache);
	}
};
var dataPriv = new Data ();

var dataUser = new Data ();



// Resumen de implementación
//
// 1. Aplicar compatibilidad de superficie y semántica API con la rama 1.9.x.
// 2. Mejorar la capacidad de mantenimiento del módulo reduciendo el almacenamiento
// rutas a un solo mecanismo.
// 3. Utilice el mismo mecanismo único para admitir datos "privados" y de "usuario".
// 4. _Nunca_ exponer datos "privados" al código de usuario (TODO: Drop _data, _removeData)
// 5. Evite exponer detalles de implementación en objetos de usuario (por ejemplo, propiedades de expansión)
// 6. Proporcionar una ruta clara para la actualización de implementación a WeakMap en 2014

var rbrace = / ^ (?: \ {[\ w \ W] * \} | \ [[\ w \ W] * \]) $ /,
	rmultiDash = / [AZ] / g;

función getData (datos) {
	if (data === "true") {
		devolver verdadero;
	}

	if (data === "false") {
		falso retorno;
	}

	if (data === "null") {
		devolver nulo;
	}

	// Solo convierte a un número si no cambia la cadena
	if (data === + data + "") {
		retorno + datos;
	}

	if (rbrace.test (data)) {
		devuelve JSON.parse (datos);
	}

	datos de retorno;
}

function dataAttr (elem, key, data) {
	var nombre;

	// Si no se encontró nada internamente, intente buscar cualquier
	// datos del atributo data- * HTML5
	if (data === undefined && elem.nodeType === 1) {
		name = "data-" + key.replace (rmultiDash, "- $ &") .toLowerCase ();
		data = elem.getAttribute (nombre);

		if (tipo de datos === "cadena") {
			tratar {
				data = getData (datos);
			} catch (e) {}

			// Asegúrate de configurar los datos para que no se modifiquen más tarde
			dataUser.set (elem, clave, datos);
		} else {
			datos = indefinido;
		}
	}
	datos de retorno;
}

jQuery.extend ({
	hasData: function (elem) {
		return dataUser.hasData (elem) || dataPriv.hasData (elem);
	},

	datos: función (elem, nombre, datos) {
		return dataUser.access (elem, name, data);
	},

	removeData: function (elem, name) {
		dataUser.remove (elem, nombre);
	},

	// TODO: Ahora que todas las llamadas a _data y _removeData han sido reemplazadas
	// con llamadas directas a los métodos de dataPriv, estos pueden ser obsoletos.
	_data: function (elem, name, data) {
		return dataPriv.access (elem, name, data);
	},

	_removeData: function (elem, name) {
		dataPriv.remove (elem, nombre);
	}
});

jQuery.fn.extend ({
	datos: función (clave, valor) {
		var i, name, data,
			elem = this [0],
			attrs = elem && elem.attributes;

		// Obtiene todos los valores
		if (clave === undefined) {
			if (this.length) {
				data = dataUser.get (elem);

				if (elem.nodeType === 1 &&! dataPriv.get (elem, "hasDataAttrs")) {
					i = attrs.length;
					mientras yo-- ) {

						// Soporte: solo IE 11
						// Los elementos attrs pueden ser nulos (# 14894)
						if (attrs [i]) {
							name = attrs [i] .name;
							if (name.indexOf ("data-") === 0) {
								name = camelCase (name.slice (5));
								dataAttr (elem, nombre, datos [nombre]);
							}
						}
					}
					dataPriv.set (elem, "hasDataAttrs", verdadero);
				}
			}

			datos de retorno;
		}

		// Establece valores múltiples
		if (tipo de clave === "objeto") {
			return this.each (function () {
				dataUser.set (this, key);
			});
		}

		acceso de retorno (esto, función (valor) {
			var datos;

			// El objeto jQuery llamante (elemento coincide) no está vacío
			// (y por lo tanto tiene un elemento aparece en este [0]) y el
			// el parámetro `valor` no estaba indefinido. Un objeto jQuery vacío
			// dará como resultado `undefined` para elem = this [0] que lo hará
			// lanza una excepción si se hace un intento de leer un caché de datos.
			if (elem && value === undefined) {

				// Intenta obtener datos del caché
				// La clave siempre estará camelCased en Data
				data = dataUser.get (elem, key);
				if (data! == undefined) {
					datos de retorno;
				}

				// Intento de "descubrir" los datos en
				// datos personalizados HTML5- * attrs
				data = dataAttr (elem, key);
				if (data! == undefined) {
					datos de retorno;
				}

				// Intentamos muy duro, pero los datos no existen.
				regreso;
			}

			// Establecer los datos ...
			this.each (function () {

				// Siempre almacenamos la clave camelCased
				dataUser.set (this, key, value);
			});
		}, null, value, arguments.length> 1, null, true);
	},

	removeData: function (clave) {
		return this.each (function () {
			dataUser.remove (this, key);
		});
	}
});


jQuery.extend ({
	queue: function (elem, type, data) {
		var queue;

		if (elem) {
			tipo = (tipo || "fx") + "cola";
			queue = dataPriv.get (elem, type);

			// Aumenta la velocidad de dequeue saliendo rápidamente si esto es solo una búsqueda
			if (datos) {
				if (! queue || Array.isArray (data)) {
					queue = dataPriv.access (elem, type, jQuery.makeArray (data));
				} else {
					queue.push (datos);
				}
			}
			cola de retorno || [];
		}
	},

	dequeue: function (elem, type) {
		tipo = tipo || "fx";

		var queue = jQuery.queue (elem, type),
			startLength = queue.length,
			fn = queue.shift (),
			hooks = jQuery._queueHooks (elem, type),
			siguiente = función () {
				jQuery.dequeue (elem, tipo);
			};

		// Si la cola fx está eliminada, siempre elimine el progreso sentinel
		if (fn === "en progreso") {
			fn = queue.shift ();
			startLength--;
		}

		if (fn) {

			// Agregar un control de progreso para evitar que la cola fx sea
			// dequeued automáticamente
			if (tipo === "fx") {
				queue.unshift ("en progreso");
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );