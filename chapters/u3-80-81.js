registerChapter({ chapter: "u3-80-81", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Valența. Stabilirea valenței unui element");
jade_mixins["subtitle"]("Paginile 80 - 81");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p80-at-msd-chim7-stii',
          top: 9.4002,
          left: 26.7273,
          width: 67.2727,
          height: 9.2031,
          type: 'text'
        },
        {
          atom: 'p80-at-msd-chim7-inveti-1',
          top: 19.0831,
          left: 3.0909,
          width: 91.0303,
          height: 35.1671,
          type: 'text'
        },
        {
          atom: 'p80-at-msd-chim7-inveti-2',
          top: 54.5587,
          left: 26.2424,
          width: 68.1212,
          height: 42.0223,
          type: 'text'
        },
        {
          atom: 'p80-at-msd-chim7-inveti-1',
          top: 9.7429,
          left: 3.2121,
          width: 21.9394,
          height: 63.0163,
          type: 'text'
        }
      ],
      image: 'p080.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p80-at-msd-chim7-inveti-2',
          top: 8.0291,
          left: 5.5152,
          width: 68,
          height: 29.94,
          type: 'text'
        },
        {
          atom: 'p81-at-msd-chim7-retine-1',
          top: 38.3633,
          left: 5.5152,
          width: 68.3636,
          height: 16.144,
          type: 'text'
        },
        {
          atom: 'p81-at-msd-chim7-inveti',
          top: 54.9871,
          left: 5.3939,
          width: 68.6061,
          height: 6.5467,
          type: 'text'
        },
        {
          atom: 'p81-at-msd-chim7-retine-2',
          top: 61.928,
          left: 5.5152,
          width: 68.6061,
          height: 16.401,
          type: 'text'
        },
        {
          atom: 'p81-at-msd-chim7-aplica',
          top: 79.6658,
          left: 5.5152,
          width: 68.7273,
          height: 16.5724,
          type: 'text'
        },
        {
          atom: 'p81-at-msd-chim7-verifica',
          top: 8.4576,
          left: 74.3636,
          width: 25.2121,
          height: 57.7035,
          type: 'text'
        }
      ],
      image: 'p081.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U3', '7', 'Valența.<br> Stabilirea valenței unui element', '80', 'blue', 'left', 'big');
}
}, {id: 'p80-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>Cele mai multe dintre substanțele care alcătuiesc lumea înconjurătoare se formează prin asocierea atomilor de același fel sau a atomilor diferiți.</li><li>Asocierea atomilor se realizează prin intermediul învelișului lor de electroni.</li></ul></div>");
}
}, 'stii pb0', 'Știi deja','');
}
}, {id: 'p80-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să lucrăm (1)</div><p> <strong>Activitate în echipă</strong> – formează o echipă cu colega/colegul de bancă.</p><ul class=\"numbers\"> <li>Reprezentați configurațiile electronice pentru Mg (<em>Z</em> = 12) și Cl (<em>Z</em> = 17). Modelați formarea compusului ionic alcătuit din Mg și Cl.</li><li>Modelați punerea în comun de electroni pentru formarea moleculelor alcătuite din:<ul class=\"letters d-md-flex gap\">  <li>H (<em>Z</em> = 1) și F (<em>Z</em> = 9); </li><li>H (<em>Z</em> = 1) și S (<em>Z</em> = 16).</li></ul></li><li>Copiați pe caiete și completați tabelul de mai jos.</li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"msd-table-overflow\"><table class=\"msd-table text-center orange-table vertical-borders\"><thead><tr><td>Elementul chimic</td><td>Numărul de electroni de pe ultimul strat</td><td>Numărul de electroni cedați</td><td>Numărul de electroni primiți</td><td>Numărul de electroni puși în comun</td></tr></thead><tr> <td>Mg </td><td>...</td><td>...</td><td>...</td><td>...</td></tr><tr> <td>Cl</td><td>...</td><td>...</td><td>...</td><td>...</td></tr><tr> <td>H </td><td>...</td><td>...</td><td>...</td><td>...</td></tr><tr> <td>F </td><td>...</td><td>...</td><td>...</td><td>...</td></tr><tr> <td>S </td><td>...</td><td>...</td><td>...</td><td>...</td></tr></table></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-md-6 col-xs-12\"> ");
jade_mixins["img4"]('img/chimie7/p80-coloana-1.png', '', '', 'Structura atomului de magneziu');
buf.push("</div><div class=\"col-xs-12 col-md-6\"> ");
jade_mixins["img4"]('img/chimie7/p80-coloana-2.png', '', '', 'Structura atomului de clor');
buf.push("</div></div><div class=\"row\"><div class=\"col-md-6 col-xs-12\"> ");
jade_mixins["img4"]('img/chimie7/p80-coloana-3.png', '', '', 'Structura atomului de neon');
buf.push("</div><div class=\"col-md-6 col-xs-12\"> ");
jade_mixins["img4"]('img/chimie7/p80-coloana-4.png', '', '', 'Structura atomului de argon');
buf.push("</div></div></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p80-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"numbers\"><li>Atomul de magneziu cedează cei 2<em>e</em><sup>–</sup> de pe ultimul strat către doi atomi de clor. Fiecare atom de clor, având 7<em>e</em><sup>–</sup> pe ultimul lui strat, acceptă câte un electron de la atomul de magneziu, din cei 2<em>e</em><sup>–</sup> cedați de acesta. Astfel, se formează ionul pozitiv de magneziu, cu structura electronică a gazului rar neon și ionii negativi de clor cu configurația gazului rar <em> argon</em>.<div class=\"row\"> <div class=\"col-xs-12\">");
jade_mixins["img"]('img/chimie7/p80-inveti.jpg');
buf.push("</div></div></li><li><ul class=\"letters\"><li>Atomul de fluor are 7<em>e</em><sup>–</sup> pe stratul <em> L</em> și pune în comun 1<em>e</em><sup>–</sup> cu atomul de hidrogen, <em> K</em> – 1<em>e</em><sup>–</sup>. Fluorul realizează configurația de octet a gazului rar <em> neon</em>, iar hidrogenul configurația de dublet a gazului rar <em> heliu</em>.");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <div class=\"col-xs-12\">");
jade_mixins["img"]('img/chimie7/p81-inveti-1.jpg');
buf.push("</div></div><div class=\"row\"> <div class=\"col-md-3\"></div><div class=\"col-xs-6 element-xs-center\"> ");
jade_mixins["img"]('img/chimie7/p81-inveti-1-2.png');
buf.push("</div></div></li><li>Atomul de sulf are 6<em>e</em><sup>–</sup> pe stratul <em> M</em> și pune în comun 2<em>e</em><sup>–</sup> cu doi atomi de hidrogen, <em> K</em> – 1<em>e</em><sup>–</sup>. Sulful ajunge la configurația gazului rar <em> argon</em> și, implicit, la configurație stabilă de octet pe ultimul strat. Hidrogenul își realizează configurația stabilă de dublet, care este configurația<em> heliului</em>.</li></ul></li><div class=\"text-indent1-5\">Numărul electronilor de pe ultimul strat al unui atom determină capacitatea acestuia de a se combina cu atomii altor elemente, fie prin cedare/acceptare, fie prin punere în comun de electroni.</div></ul></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p80-at-msd-chim7-inveti-2'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U3', '', 'Valența. Stabilirea valenței unui element', '81', 'blue', 'right', 'small');
}
}, {id: 'p81-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"> <li>Capacitatea atomilor unui element de a se combina cu atomii altui element se numește <strong> valență</strong>.</li><li>La nivel atomic, valența este egală cu numărul de electroni cedați/primiți sau puși în comun de fiecare atom în timpul reacțiilor chimice.</li><li>Stratul de electroni pe care se găsesc electronii cedați/primiți sau puși în comun de către un atom se numește <strong> strat de valență</strong>.</li><li>Electronii care se găsesc în stratul de valență se numesc <strong> electroni de valență</strong>.</li></ul></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p81-at-msd-chim7-retine-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să lucrăm (2)</div><div class=\"text-indent1-5\">Notează pe caiet care este stratul de valență și câți electroni de valență au elementele: Mg, Cl, H, F, S. Folosește informațiile din tabelul completat anterior.</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p81-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>Elementele din grupele 1 și 2 au valența egală cu numărul grupei, iar elementele din grupa 13 au valența egală cu 3.</li><li>Elementele din grupele 14, 15, 16 și 17 au valențe variabile. În compușii cu hidrogenul sau cu metalele, au valența egală cu<strong> 18 – numărul grupei</strong>. În compușii cu oxigenul, pot manifesta mai multe valențe. Cea maximă este egală cu<strong> numărul grupei – 10</strong> și apoi pot fi valențe cu câte două unități mai mici.</li><li>Excepție fac fluorul, care este constant monovalent, și oxigenul, constant divalent.</li></ul></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p81-at-msd-chim7-retine-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Copiază și completează pe caiet tabelul de mai jos, după modelul dat.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"msd-table-overflow\"><table class=\"msd-table text-center purple-table vertical-borders\"><thead><tr><td>Numărul grupei </td><td>1</td><td>2</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td></tr></thead><tr><td>Numărul electronilor de valență </td><td>...</td><td>...</td><td>...</td><td>4</td><td>...</td><td>...</td><td>7</td><td>...</td></tr><tr><td>Valența în compușii cu oxigenul</td><td>...</td><td>...</td><td>...</td><td>4 și 2</td><td>...</td><td>...</td><td>...</td><td>...</td></tr><tr><td>Valența în compușii cu hidrogenul  </td><td>...</td><td>...</td><td>...</td><td>4</td><td>...</td><td>...</td><td>1</td><td>...</td></tr></table></div></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p81-at-msd-chim7-aplica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><em>Copiază în caiet și încercuiește litera corespunzătoare răspunsului corect.</em>");
jade_mixins["space1"]();
buf.push("<ul class=\"numbers\"><li>Formează ioni pozitivi:<ul class=\"letters\"> <li>Na, Mg, O;</li><li>Na, K, Mg;</li><li>Na, Ne, F.</li></ul></li><li>Sunt nemetale:<ul class=\"letters\"> <li>Ca, C, Cl;</li><li>N, Cu, Cl;</li><li>Ar, C, F.</li></ul></li><li>Compușii ionici sunt:<ul class=\"letters\"> <li>substanțe solide;</li><li>substanțe solide și gazoase;</li><li>substanțe lichide.</li></ul></li><li>Compușii moleculari se formează prin:<ul class=\"letters\"> <li>acceptare/cedare de electroni;</li><li>cedare de electroni;</li><li>punere în comun de electroni.</li></ul></li><li>Formează molecule diatomice:<ul class=\"letters\"> <li>hidrogenul, azotul, iodul;</li><li>neonul, clorul, iodul;</li><li>carbonul, bromul, fluorul</li></ul></li><li>Valența sulfului față de oxigen este egală cu:<ul class=\"letters\"> <li>II și IV;</li><li>II și III;</li><li>IV și VI.</li></ul></li></ul>");
jade_mixins["space1"]();
buf.push("<em>Acordă-ți 1,5 puncte pentru fiecare răspuns corect și un punct din oficiu.<strong>Total: 10 puncte.</strong></em>");
jade_mixins["space1"]();
buf.push("<div class=\"flip\"><em>Răspunsuri:<br/>1. b.; 2. c.; 3. a.; 4. c.; 5. a.; 6. c.</em></div></div>");
}
}, 'verifica', 'Verifică-te singur!','');
}
}, {id: 'p81-at-msd-chim7-verifica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});