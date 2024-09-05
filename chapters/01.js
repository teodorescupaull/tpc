registerChapter({ chapter: "01", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Copertă");
jade_mixins["subtitle"]("Pagina 1");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p01-at-msd-chim7-cop2',
          top: 8.4576,
          left: 5.6364,
          width: 89.3333,
          height: 20,
          type: 'text'
        }
      ],
      image: 'c2.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p01-at-msd-chim7-p1',
          top: 2.4593,
          left: 1.7576,
          width: 95.5152,
          height: 95.6641,
          type: 'blank'
        }
      ],
      image: 'p001.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"neg7-box tehnic\"><div>Acest manual școlar este proprietatea Ministerului Educației.</div><br/><div>Acest manual școlar este realizat în conformitate cu Programa școlară aprobată prin Ordinul ministrului educației naționale nr. 3393/28.02.2017.</div><br/><div>119 – număr unic de telefon la nivel național pentru cazurile de abuz împotriva copiilor</div><br/><div>116.111 – numărul de telefon de asistență pentru copii</div></div><br/>");
}
}, {id: 'p01-at-msd-chim7-cop2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["img"]('img/pages/p001.jpg');
}
}, {id: 'p01-at-msd-chim7-p1'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});