registerChapter({ chapter: "u5-114", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Copertă final");
jade_mixins["subtitle"]("Pagina 114");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p114-at-msd-chim7-cover-final',
          top: 0.2314,
          left: 0.1818,
          width: 99.3939,
          height: 99.4344,
          type: 'blank'
        }
      ],
      image: 'c4.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"_full-width\">");
jade_mixins["img"]('img/pages/c4.jpg');
buf.push("</div>");
}
}, {id: 'p114-at-msd-chim7-cover-final'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});