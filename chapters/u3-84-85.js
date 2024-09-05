registerChapter({ chapter: "u3-84-85", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Substanțe simple. Substanțe compuse");
jade_mixins["subtitle"]("Paginile 84 - 85");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p84-at-msd-chim7-stii',
          top: 9.0574,
          left: 26.1212,
          width: 67.1515,
          height: 12.545,
          type: 'text'
        },
        {
          atom: 'p84-at-msd-chim7-inveti',
          top: 21.9109,
          left: 25.8788,
          width: 67.5152,
          height: 50.8483,
          type: 'text'
        },
        {
          atom: 'p84-at-msd-chim7-retine-1',
          top: 73.2391,
          left: 25.8788,
          width: 67.7576,
          height: 13.5733,
          type: 'text'
        },
        {
          atom: 'p84-at-msd-chim7-subs-simple',
          top: 9.0574,
          left: 2.4848,
          width: 22.6667,
          height: 58.5604,
          type: 'text'
        },
        {
          atom: 'p84-at-msd-chim7-retine-2',
          top: 87.2065,
          left: 26.1212,
          width: 67.7576,
          height: 8.5176,
          type: 'text'
        }
      ],
      image: 'p084.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p84-at-msd-chim7-retine-2',
          top: 7.9434,
          left: 6.2424,
          width: 66.7879,
          height: 4.4901,
          type: 'text'
        },
        {
          atom: 'p85-at-msd-chim7-inveti-1',
          top: 12.7421,
          left: 6,
          width: 67.2727,
          height: 28.3119,
          type: 'text'
        },
        {
          atom: 'p85-at-msd-chim7-retine',
          top: 41.6195,
          left: 6,
          width: 67.1515,
          height: 29.94,
          type: 'text'
        },
        {
          atom: 'p85-at-msd-chim7-inveti-2',
          top: 72.2108,
          left: 6.2424,
          width: 66.9091,
          height: 12.4593,
          type: 'text'
        },
        {
          atom: 'p85-at-msd-chim7-mol-dia-poli',
          top: 7.6864,
          left: 74.8485,
          width: 23.3939,
          height: 83.5818,
          type: 'text'
        },
        {
          atom: 'p85-at-msd-chim7-aplica',
          top: 85.3213,
          left: 6.1212,
          width: 67.1515,
          height: 11.6024,
          type: 'text'
        }
      ],
      image: 'p085.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U3', '9', 'Substanțe simple. Substanțe compuse', '84', 'blue', 'left', 'big');
}
}, {id: 'p84-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>Formele omogene de materie, având compoziție constantă, se numesc substanțe.</li><li>O bară de aur, un cui de fier, creta sunt corpuri formate din substanțe.</li><li>Substanțele participă la fenomene chimice, formând alte substanțe, cu proprietăți noi.</li><li>Compoziția unei substanțe este reprezentată prin formula chimică scrisă cu ajutorul simbolurilor chimice și al indicilor.</li></ul></div>");
}
}, 'stii pb0', 'Știi deja','');
}
}, {id: 'p84-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să observăm (1)</div><div class=\"text-indent1-5\">Privește cu atenție imaginile de mai jos, în care sunt reprezentate mai multe corpuri și structura substanțelor din care provin sau pe care le conțin acestea. Indică prin ce se aseamănă, din punct de vedere al compoziției, substanțele din imaginile <strong> a</strong> și<strong> c</strong>, respectiv<strong> b</strong> și<strong> d</strong>.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <div class=\"col-xs-6 col-md-3\"> <div class=\"row\"> <div class=\"col-xs-12\"> ");
jade_mixins["img2"]('img/chimie7/p84-inveti-sa_obs1-a.jpg', 'a', 'gray');
buf.push("</div></div><div class=\"row\"> <div class=\"col-xs-12 fl fs1-0 text-center\"><p>Monede din cupru</p><p>Cu</p></div></div><div class=\"row\"> <div class=\"col-xs-12\"> ");
jade_mixins["img"]('img/chimie7/p84-inveti-sa_obs1-a-1.jpg');
buf.push("</div></div></div><div class=\"col-xs-6 col-md-3\"> <div class=\"row\"> <div class=\"col-xs-12\"> ");
jade_mixins["img2"]('img/chimie7/p84-inveti-sa_obs1-b.jpg', 'b', 'gray');
buf.push("</div></div><div class=\"row\"> <div class=\"col-xs-12 fl fs1-0 text-center\"><p>Pahar cu apă</p><p>H<sub>2</sub>O</p></div></div><div class=\"row\"> <div class=\"col-xs-12\"> ");
jade_mixins["img"]('img/chimie7/p84-inveti-sa_obs1-b-1.jpg');
buf.push("</div></div></div><div class=\"col-xs-6 col-md-3\"> <div class=\"row\"> <div class=\"col-xs-12\"> ");
jade_mixins["img2"]('img/chimie7/p84-inveti-sa_obs1-c.jpg', 'c', 'gray');
buf.push("</div></div><div class=\"row\"> <div class=\"col-xs-12 fl fs1-0 text-center\"><p>Folie de aluminiu</p><p>Al</p></div></div><div class=\"row\"> <div class=\"col-xs-12\"> ");
jade_mixins["img"]('img/chimie7/p84-inveti-sa_obs1-c-1.jpg');
buf.push("</div></div></div><div class=\"col-xs-6 col-md-3\"> <div class=\"row\"> <div class=\"col-xs-12\"> ");
jade_mixins["img2"]('img/chimie7/p84-inveti-sa_obs1-d.jpg', 'd', 'gray');
buf.push("</div></div><div class=\"row\"> <div class=\"col-xs-12 fl fs1-0 text-center\"><p>Sare de bucătărie</p><p>NaCl</p></div></div><div class=\"row\"> <div class=\"col-xs-12\"> ");
jade_mixins["img"]('img/chimie7/p84-inveti-sa_obs1-d-1.jpg');
buf.push("</div></div></div></div>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<div class=\"text-indent1-5\">Unele substanțe chimice sunt alcătuite dintr-un singur tip de atomi, așa cum sunt cele din figurile<strong> a</strong> și<strong> c</strong>. În figura<strong> a</strong>, monedele sunt alcătuite din atomi de cupru, iar în figura<strong> c</strong> folia de aluminiu conține atomi de aluminiu. Substanțele reprezentate în figurile<strong> b</strong> și<strong> d</strong> sunt formate din două tipuri de atomi. În figura<strong> b</strong>, apa este formată din atomi de hidrogen și de oxigen, iar în figura<strong> d</strong> sarea de bucătărie conține ioni de sodiu și ioni de clor.</div><ul class=\"arrows\"> <li>În alcătuirea corpurilor din mediul înconjurător, există substanțe formate dintr-un singur tip de atomi, aparținând unui singur element, și substanțe alcătuite din atomii a două sau mai multe elemente.</li></ul></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p84-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\"><strong>Substanța simplă</strong> este formată din atomi de același fel, aparținând aceluiași element.</div></div>");
}
}, 'retine', 'Reține','');
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\">Exemple de substanțe simple: oxigen, azot, clor, hidrogen, zinc, argint, platină.</div><div class=\"text-indent1-5\">În mediul înconjurător, numărul de substanțe este mult mai mare decât numărul cunoscut de elemente chimice, datorită posibilității nelimitate de combinare a acestora.</div></div>");
}
}, 'no-title','','');
}
}, {id: 'p84-at-msd-chim7-retine-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-red\">Corpuri formate din substanțe simple – metale</div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <div class=\"col-xs-6 col-md-3\">");
jade_mixins["img4"]('img/chimie7/p84-coloana-1.jpg', 'Bare din fier, Fe', '', '');
buf.push("</div><div class=\"col-xs-6 col-md-3\">");
jade_mixins["img4"]('img/chimie7/p84-coloana-2.jpg', 'Lingouri din cupru, Cu', '', '');
buf.push("</div><div class=\"col-xs-6 col-md-3\">");
jade_mixins["img4"]('img/chimie7/p84-coloana-3.jpg', 'Panglică de magneziu, Mg', '', '');
buf.push("</div><div class=\"col-xs-6 col-md-3\">");
jade_mixins["img4"]('img/chimie7/p84-coloana-4.jpg', 'Doze din aluminiu, Al', '', '');
buf.push("</div></div></div>");
}
}, 'stiai no-title', '','');
}
}, {id: 'p84-at-msd-chim7-subs-simple'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\"><strong>Substanța compusă</strong> este alcătuită din atomi proveniți de la două sau mai multe elemente chimice.</div></div>");
}
}, 'retine', 'Reține','');
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\">Exemple de substanțe compuse: H<sub>2</sub>O (apă), CaO (var nestins), Ca(OH)<sub>2</sub> (var stins), NaHCO<sub>3</sub> (praf de copt).</div></div>");
}
}, 'no-title','','');
}
}, {id: 'p84-at-msd-chim7-retine-2'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U3', '', 'Substanțe simple. Substanțe compuse', '85', 'blue', 'right', 'small');
}
}, {id: 'p85-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să observăm (2)</div><div class=\"text-indent1-5\">În tabelul de mai jos sunt prezentate câteva proprietăți ale unor substanțe chimice. Precizează care dintre aceste substanțe sunt substanțe compuse și care sunt substanțe simple. Din ce elemente sunt formate substanțele compuse prezentate în tabel?</div>");
jade_mixins["space1"]();
buf.push("<table class=\"msd-table orange-table vertical-borders text-center\"><thead><tr><td>Substanța chimică</td><td>Formula chimică</td><td>Starea de agregare</td><td>Culoarea</td></tr></thead><tr><td>Oxid de cupru (II) </td><td>CuO </td><td>solid</td><td>negru</td></tr><tr><td>Cupru </td><td>Cu</td><td>solid</td><td>roșiatic</td></tr><tr><td>Oxigen</td><td>O<sub>2</sub></td><td>gaz</td><td>incolor</td></tr><tr><td>Acid clorhidric</td><td>HCl</td><td>gaz</td><td>incolor</td></tr><tr><td>Hidrogen </td><td>H<sub>2</sub></td><td>gaz</td><td>incolor</td></tr><tr> <td>Clor</td><td>Cl<sub>2</sub></td><td>gaz</td><td>galben-verzui</td></tr></table>");
jade_mixins["space1"]();
buf.push("<ul class=\"arrows\"> <li>Oxidul de cupru este o substanță compusă, alcătuită din cupru și oxigen.</li></ul><div class=\"text-indent1-5\">Acidul clorhidric este o substanță compusă, alcătuită din hidrogen și clor.</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p85-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Substanțele compuse prezintă proprietăți diferite de cele ale elementelor din care sunt formate.</div></div>");
}
}, 'retine', 'Reține','');
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"row\"> <div class=\"col-xs-2 col-md-2\"></div><div class=\"col-xs-8 col-md-4\"> ");
jade_mixins["img4"]('img/chimie7/p85-sa-observam-2-a.jpg', '', '', 'Substanțe simple <br> cupru și oxigen');
buf.push("</div><div class=\"col-xs-8 element-xs-center col-md-4\">");
jade_mixins["img4"]('img/chimie7/p85-sa-observam-2-b.jpg', '', '', 'Substanță compusă <br> oxid de cupru (II)');
buf.push("</div></div></div>");
}
}, 'no-title', '', '');
}
}, {id: 'p85-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Există peste 100 de elemente chimice cunoscute, care formează substanțe simple. Acestea se pot clasifica în:</div><ul class=\"numbers\"><li>Metale – Al, Fe, Cu, Mg, Na</li></ul><div class=\"p85-list\"><div class=\"p85-list-left and-list\">Nemetale</div><div class=\"p85-list-center\"></div><div class=\"p85-list-right\"><span>– monoatomice – He, Ne, Ar, Kr, Xe, Rn<br/>– diatomice – H<sub>2</sub>, O<sub>2</sub>, N<sub>2</sub><br/>– poliatomice – P<sub>4</sub>, S<sub>8</sub></span></div></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p85-at-msd-chim7-inveti-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-red\">Molecule diatomice și poliatomice</div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <div class=\"col-xs-8 element-xs-center col-md-4\"> ");
jade_mixins["img4"]('img/chimie7/p85-coloana-1.png', '', '', 'Molecula de hidrogen, H<sub>2</sub>');
buf.push("</div><div class=\"col-xs-8 element-xs-center col-md-4\"> ");
jade_mixins["img4"]('img/chimie7/p85-coloana-2.png', '', '', 'Molecula de oxigen, O<sub>2</sub>');
buf.push("</div><div class=\"col-xs-8 element-xs-center col-md-4\"> ");
jade_mixins["img4"]('img/chimie7/p85-coloana-3.png', '', '', 'Molecula de azot, N<sub>2</sub>');
buf.push("</div></div><div class=\"row\"><div class=\"col-xs-8 element-xs-center col-md-6\"> ");
jade_mixins["img4"]('img/chimie7/p85-coloana-4.png', '', '', 'Molecula de fosfor, P<sub>4</sub>');
buf.push("</div><div class=\"col-xs-8 element-xs-center col-md-6\"> ");
jade_mixins["img4"]('img/chimie7/p85-coloana-5.png', '', '', 'Molecula de sulf, S<sub>8</sub>');
buf.push("</div></div></div>");
}
}, 'stiai no-title', '','');
}
}, {id: 'p85-at-msd-chim7-mol-dia-poli'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Copiază pe caiet formulele chimice de mai jos. Subliniază, cu o linie verde, formulele corespunzătoare substanțelor simple și cu o linie albastră, formulele corespunzătoare substanțelor compuse.</div><div class=\"items-04-between\"><span> <span class=\"msd-purple\">•</span><span> HCl</span></span><span> <span class=\"msd-purple\">•</span><span> P<sub>4</sub></span></span><span> <span class=\"msd-purple\">•</span><span> MgO</span></span><span> <span class=\"msd-purple\">•</span><span> Ca</span></span><span> <span class=\"msd-purple\">•</span><span> CaCl<sub>2</sub></span></span><span> <span class=\"msd-purple\">•</span><span> O<sub>2</sub></span></span><span> <span class=\"msd-purple\">•</span><span> MgBr<sub>2</sub></span></span><span> <span class=\"msd-purple\">•</span><span> H<sub>2</sub>SO<sub>4</sub></span></span><span> <span class=\"msd-purple\">•</span><span> C</span></span><span> <span class=\"msd-purple\">•</span><span> Al(OH)<sub>3</sub></span></span><span> <span class=\"msd-purple\">•</span><span> S<sub>8</sub></span></span><span> <span class=\"msd-purple\">•</span><span> H<sub>2</sub>O</span></span><span> <span class=\"msd-purple\">•</span><span> FeCl<sub>3</sub></span></span><span> <span class=\"msd-purple\">•</span><span> Ne</span></span><span> <span class=\"msd-purple\">•</span><span> N<sub>2</sub></span></span></div></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p85-at-msd-chim7-aplica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});