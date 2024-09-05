registerChapter({ chapter: "00", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Chimie");
jade_mixins["subtitle"]("Clasa a VII-a");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p00-at-msd-chim7-cover',
          top: 1.1175,
          left: 1.6364,
          width: 96.9697,
          height: 97.7459,
          type: 'text'
        }
      ],
      image: 'c1.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["img"]('img/pages/c1.jpg');
}
}, {id: 'p00-at-msd-chim7-cover'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});