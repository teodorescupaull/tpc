registerChapter({ chapter: "u5-113", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Copertă final");
jade_mixins["subtitle"]("Pagina 113");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'atom_name',
          top: 0.6598,
          left: 0.6667,
          width: 98.5455,
          height: 98.9203,
          type: 'blank'
        }
      ],
      image: 'c3.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"_full-width\">");
jade_mixins["img"]('img/pages/c3.jpg');
buf.push("</div>");
}
}, {id: 'p113-at-msd-chim7-cover-final'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});