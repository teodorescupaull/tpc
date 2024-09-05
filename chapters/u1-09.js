registerChapter({ chapter: "u1-09", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Chimia și viața. Substanțele în natură");
jade_mixins["subtitle"]("Pagina 9");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p24-at-msd-chim7-header',
          top: 0.1457,
          left: 0.1818,
          width: 99.8788,
          height: 99.7772,
          type: 'text'
        }
      ],
      image: 'p009.jpg'
    }
  ]);
buf.push("</div>\n");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"_full-width\"><div class=\"unit-opening\"> <div class=\"unit-opening-left unit\"></div><div class=\"unit-opening-right\"><div class=\"quote\"><div class=\"text-left\"> \nUn savant în laboratorul său nu este doar un tehnician; este și un copil pus în fața unor fenomene naturale, care îl impresionează ca o poveste cu zâne. </div><div class=\"text-right\"> <em>Marie Curie</em></div></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left unit\"><span>U1</span></div><div class=\"unit-opening-right unit-title\"> <span>Chimia și viața.</span><br/><span>Substanțele în natură</span></div></div>");
jade_mixins["img"]('img/chimie7/p9-lac.jpg');
buf.push("<div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"content-table-wrapper\"><div class=\"left\"> </div><div class=\"right\"></div></div></div><div class=\"unit-opening-right content-right\">");
jade_mixins["space3"]();
buf.push("<h3 class=\"ml-2\">TEMA\t1.\tLABORATORUL\tDE\tCHIMIE</h3></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 1</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span>10-11</span><span>Aparatură și ustensile utilizate în laboratorul de chimie</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 2</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span>12-13</span><span>Norme de protecție a muncii în laborator</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong> </strong></div></div><div class=\"unit-opening-right content-right\"><h3 class=\"ml-2\">TEMA\t2.\tCHIMIA,\tȘTIINȚĂ\tA\tNATURII</h3></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 3</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span>14-15</span><span>Materie. Substanță</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 4</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span>16-17</span><span>Fenomene fizice. Fenomene chimice</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 5</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span>18-20</span><span>Proprietăți fizice. Proprietăți chimice</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 6</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span>21-23</span><span>Substanță pură. Amestecuri de substanțe. Puritate</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 7</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span>24-25</span><span>Metode de separare a componentelor din amestecuri omogene</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 8</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span>26-27</span><span>Metode de separare a componentelor din amestecuri eterogene</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _lavender\"><div class=\"left\"> <strong>Evaluare</strong></div></div><div class=\"unit-opening-right content-right3\"><div class=\"items-gap\"><span>28-<i>28</i></span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong> </strong></div></div><div class=\"unit-opening-right content-right\"><div class=\"items-gap\"><h3 class=\"ml-2\">TEMA\t3.\tSUBSTANȚE\tȘI\tAMESTECURI\tÎN\tNATURĂ</h3></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 9</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span>29-32</span><span>Apa în natură</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 10</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span>33-36</span><span>Soluții apoase. Solubilitatea substanțelor</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 11</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span>37-39</span><span>Concentrația procentuală masică a soluțiilor</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 12</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span>40-41</span><span>Aerul</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 13</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span class=\"single\">42-<i>42</i></span><span>Solul – amestec eterogen</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 14</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span>43-44</span><span>Poluarea aerului, a apei și a solului</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _green\"><div class=\"left\"> <strong>Proiect</strong></div></div><div class=\"unit-opening-right content-right4\"><div class=\"items-gap\"><span>45-<i>45</i></span><span>Poluarea mediului înconjurător</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _lavender\"><div class=\"left\"> <strong>Evaluare</strong></div></div><div class=\"unit-opening-right content-right3\"><div class=\"items-gap\"><span>46-<i>46</i></span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"content-table-wrapper\">       </div></div><div class=\"unit-opening-right content-right\">");
jade_mixins["space3"]();
buf.push("</div></div></div>");
}
}, {id: 'p24-at-msd-chim7-header'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});