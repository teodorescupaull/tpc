registerChapter({ chapter: "u3-65", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Compuși chimici");
jade_mixins["subtitle"]("Pagina 65");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p65-at-msd-chim7-header',
          top: 2.3736,
          left: 5.0303,
          width: 93.3333,
          height: 94.2931,
          type: 'text'
        }
      ],
      image: 'p065.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"_full-width\"><div class=\"unit-opening\"> <div class=\"unit-opening-left unit\"></div><div class=\"unit-opening-right\"><div class=\"quote\"><div class=\"text-left\"> \nImportant este să nu te oprești niciodată din a-ți pune întrebări.</div><div class=\"text-right\"> <em>Albert Einstein</em></div></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left unit\"><span>U3</span></div><div class=\"unit-opening-right unit-title\"> <span>Compuși</span><br/><span>chimici</span></div></div>");
jade_mixins["img"]('img/chimie7/p65.jpg');
buf.push("<div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"content-table-wrapper\"><div class=\"left\">      </div><div class=\"right\"></div></div></div><div class=\"unit-opening-right content-right\">");
jade_mixins["space3"]();
buf.push("<h3 class=\"ml-2\">TEMA 1. IONI. METALE ȘI NEMETALE</h3></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 1</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span class=\"items-center\">66-67</span><span>Formarea ionilor pozitivi. Caracterul metalic</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 2</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span class=\"items-center\">68‑69 </span><span>Formarea ionilor negativi. Caracterul nemetalic</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 3</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span class=\"items-center\">70‑71</span><span>Metale și nemetale. Proprietăți fizice. Aliaje</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 4</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span class=\"items-center\">72‑74</span><span>Formarea compușilor ionici. Proprietăți fizice</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong> </strong></div></div><div class=\"unit-opening-right content-right\"><h3 class=\"ml-2\">TEMA\t2.\tMOLECULE</h3></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 5</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span class=\"items-center\">75‑77</span><span>Formarea unor molecule</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 6</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span class=\"items-center\">78‑79</span><span>Proprietăți fizice ale unor compuși moleculari</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong> </strong></div></div><div class=\"unit-opening-right content-right\"><h3 class=\"ml-2\">TEMA\t3.\tVALENȚA</h3></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 7</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span class=\"items-center\">80‑81</span><span>Valența. Stabilirea valenței unui element</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 8</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span class=\"items-center\">82‑83</span><span>Formula chimică a unei substanțe</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong> </strong></div></div><div class=\"unit-opening-right content-right\"><h3 class=\"ml-2\">TEMA\t4.\tSUBSTANȚE CHIMICE</h3></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 9</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span class=\"items-center\">84‑85</span><span>Substanțe simple. Substanțe compuse</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 10</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span class=\"items-center\">86‑91</span><span>Substanțe compuse. Oxizi, baze, acizi, săruri</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong> </strong></div></div><div class=\"unit-opening-right content-right\"><div class=\"items-gap\"><h3 class=\"ml-2\">TEMA\t5.\tSCALA DE<strong><em> p</em></strong>H</h3></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"left\"> <strong>Lecția 11</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"items-gap\"><span class=\"items-center\">92‑93</span><span><strong><em>p</em></strong>H-ul soluțiilor</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _green\"><div class=\"left\"> <strong>Proiect</strong></div></div><div class=\"unit-opening-right content-right4\"><div class=\"items-gap\"><span class=\"items-center\"><i>94‑95</i></span><span>Prepararea și folosirea unui indicator acido-bazic la determinarea<strong> <em> p</em></strong>H‑ului unor soluții</span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _lavender\"><div class=\"left\"> <strong>Evaluare</strong></div></div><div class=\"unit-opening-right content-right3\"><div class=\"items-gap\"><span>96-<i>96</i></span></div></div></div><div class=\"unit-opening\"> <div class=\"unit-opening-left content-left _blue\"><div class=\"content-table-wrapper\">       </div></div><div class=\"unit-opening-right content-right\">");
jade_mixins["space3"]();
buf.push("</div></div></div>");
}
}, {id: 'p65-at-msd-chim7-header'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});