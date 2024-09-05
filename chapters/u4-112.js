registerChapter({ chapter: "u4-112", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Tabelul periodic al elementelor");
jade_mixins["subtitle"]("Pagina 112");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p112-tabelul-chimic-al-elementelor',
          top: 2.0308,
          left: 4.7879,
          width: 89.697,
          height: 94.036
          //transform: rotate(90deg);
        }
      ],
      image: 'p112.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">");
jade_mixins["img3"]('img/chimie7/p112.png', '');
buf.push("</div>");
}
}, 'evaluare no-title', '','');
}
}, {id: 'p112-tabelul-chimic-al-elementelor'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});