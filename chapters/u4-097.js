registerChapter({ chapter: "u4-097", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Unitatea 4");
jade_mixins["subtitle"]("Calcule pe baza formulei chimice");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p97-cuprins',
          top: -0.0257,
          left: -0.0606,
          width: 100.2424,
          height: 100.12
        }
      ],
      image: 'p097.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"_full-width\"><div class=\"unit-opening\"><div class=\"unit-opening-left unit\"><span>U4</span></div><div class=\"unit-opening-right unit-title\"><strong> Calcule pe baza formulei chimice</strong></div></div><div class=\"quote-holder\">");
jade_mixins["img"]('img/chimie7/p97.jpg');
buf.push("<div class=\"quote\"><div class=\"text-left\">Chimia este o știință care va avea asupra vieții o influență imensă și o amplă aplicare.</div><div class=\"text-right\"><em>Johann Wolfgang von Goethe</em></div></div></div><div class=\"unit-opening\"><div class=\"unit-opening-left content-left _blue\"><div class=\"content-table-wrapper\"><div class=\"left\"></div><div class=\"right\"></div></div></div></div><div class=\"unit-opening\"><div class=\"unit-opening-left content-left _blue\"><div class=\"left\"><strong></strong></div></div><div class=\"unit-opening-right content-right\"><h3 class=\"ml-2 py3\">CALCULE PE BAZA FORMULEI CHIMICE</h3></div></div><div class=\"unit-opening\"><div class=\"unit-opening-left content-left _blue\"><div class=\"left\"><strong>Lecția 1</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"flex\"><span class=\"col-xs-12 col-sm-4 col-md-2 text-right\">98‐99</span><span class=\"col-xs-12 col-sm-8 col-md-10 pl1\">Mol. Masă molară</span></div></div></div><div class=\"unit-opening\"><div class=\"unit-opening-left content-left _blue\"><div class=\"left\"><strong>Lecția 2</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"flex\"><span class=\"col-xs-12 col-sm-4 col-md-2 text-right\">100‐101</span><span class=\"col-xs-12 col-sm-8 col-md-10 pl1\">Raport atomic. Raport de masă</span></div></div></div><div class=\"unit-opening\"><div class=\"unit-opening-left content-left _blue\"><div class=\"left\"><strong>Lecția 3</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"flex\"><span class=\"col-xs-12 col-sm-4 col-md-2 text-right\">102‐103</span><span class=\"col-xs-12 col-sm-8 col-md-10 pl1\">Compoziția procentuală elementală a unei substanțe compuse</span></div></div></div><div class=\"unit-opening\"><div class=\"unit-opening-left content-left _blue\"><div class=\"left\"><strong>Lecția 4</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"flex\"><span class=\"col-xs-12 col-sm-4 col-md-2 text-right\">104‐105</span><span class=\"col-xs-12 col-sm-8 col-md-10 pl1\">Determinarea formulei chimice a unei substanțe compuse</span></div></div></div><div class=\"unit-opening\"><div class=\"unit-opening-left content-left _blue\"><div class=\"left\"><strong>Lecția 5</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"flex\"><span class=\"col-xs-12 col-sm-4 col-md-2 text-right\">106</span><span class=\"col-xs-12 col-sm-8 col-md-10 pl1\">Determinarea masei unui element dintr-o cantitate dată de substanță compusă</span></div></div></div><div class=\"unit-opening\"><div class=\"unit-opening-left content-left _blue\"><div class=\"left\"><strong>Lecția 6</strong></div></div><div class=\"unit-opening-right content-right2\"><div class=\"flex\"><span class=\"col-xs-12 col-sm-4 col-md-2 text-right\">107</span><span class=\"col-xs-12 col-sm-8 col-md-10 pl1\">Determinarea masei de substanță compusă care conține o cantitate dată dintr-un element</span></div></div></div><div class=\"unit-opening\"><div class=\"unit-opening-left content-left _lavender\"><div class=\"left\"><strong>Evaluare</strong></div></div><div class=\"unit-opening-right content-right3\"><div class=\"flex\"><span class=\"col-xs-12 col-sm-4 col-md-2 text-right\"><i>108</i></span><span class=\"col-xs-12 col-sm-8 col-md-10 pl1\"></span></div></div></div></div>");
}
}, {id: 'p97-cuprins'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});