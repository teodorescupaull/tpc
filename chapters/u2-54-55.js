registerChapter({ chapter: "u2-54-55", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Învelișul de electroni");
jade_mixins["subtitle"]("Paginile 54 - 55");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p54-at-msd-chim7-stii',
          top: 8,
          left: 26,
          width: 68,
          height: 8
        },
        {
          atom: 'p54-at-msd-chim7-inveti',
          top: 16.5,
          left: 26,
          width: 68,
          height: 18.5
        },
        {
          atom: 'p54-at-msd-chim7-retine-1',
          top: 35.5,
          left: 26,
          width: 68,
          height: 13
        },
        {
          atom: 'p54-at-msd-chim7-observam',
          top: 49,
          left: 26,
          width: 68,
          height: 12.5
        },
        {
          atom: 'p54-at-msd-chim7-retine-2',
          top: 62,
          left: 26,
          width: 68,
          height: 12
        },
        {
          atom: 'p54-at-msd-chim7-structura-invelis',
          top: 74.5,
          left: 26,
          width: 68,
          height: 14.5
        },
        {
          atom: 'p54-at-msd-chim7-retine-3',
          top: 89.5,
          left: 26,
          width: 68,
          height: 7
        },
        {
          atom: 'p54-at-msd-chim7-observam',
          top: 6.6,
          left: 0,
          width: 25,
          height: 65
        },
        {
          atom: 'p54-at-msd-chim7-structura-invelis',
          top: 75,
          left: 0,
          width: 25,
          height: 20
        }
      ],
      image: 'p054.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p55-at-msd-chim7-structura-invelis',
          top: 7.5,
          left: 6,
          width: 68,
          height: 19
        },
        {
          atom: 'p55-at-msd-chim7-retine-1',
          top: 27,
          left: 6,
          width: 68,
          height: 13
        },
        {
          atom: 'p55-at-msd-chim7-exemplu-repartizare-electroni',
          top: 40.5,
          left: 6,
          width: 68,
          height: 12.5
        },
        {
          atom: 'p55-at-msd-chim7-retine-2',
          top: 53.5,
          left: 6,
          width: 68,
          height: 11
        },
        {
          atom: 'p55-at-msd-chim7-structura',
          top: 65,
          left: 6,
          width: 68,
          height: 4
        },
        {
          atom: 'p55-at-msd-chim7-aplica',
          top: 69.5,
          left: 6,
          width: 68,
          height: 27
        },
        {
          atom: 'p55-at-msd-chim7-repartitie-electroni',
          top: 44,
          left: 75,
          width: 25,
          height: 52
        }
      ],
      image: 'p055.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U2', '3', 'Învelișul de electroni', '54', 'blue', 'left', 'big mb0 pb2');
}
}, {id: 'p54-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Nucleul, partea centrală a atomului, este înconjurat spre exterior de învelișul de electroni care ocupă cea mai mare parte din volumul atomului.</div></div>");
}
}, 'stii pb0', 'Știi deja','');
}
}, {id: 'p54-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content pb0\"><div class=\"text-indent1-5\">În jurul nucleului, într-­un spațiu mult mai mare decât cel ocupat de acesta, gravitează, cu viteze extrem de mari, particulele numite <strong>electroni.</strong></div></div><div class=\"block-content d-flex\"><div style=\"max-height: 140px;\" class=\"msd-orange-bg-4 vertical-text xs-100w\">Caracteristicile electronului</div><div class=\"grup-acolada grup-acolada-orange text-left\"><ul class=\"disc\"><li>sarcină electrică relativă <div class=\"wrap inline-block\">–1, &nbsp;</div>egală și de semn contrar cu sarcina protonului; sarcină electrică reală: ");
jade_mixins["numar_putere"]("–1,602", "10", "–19", "C");
buf.push(";</li><li>masă reală foarte mică (");
jade_mixins["numar_putere"]("9,109", "10", "–31", "kg");
buf.push("), neglijabilă, ≈ 0; dimensiuni foarte reduse (diametrul său este de ");
jade_mixins["numar_putere"]("1,4", "10", "–13", "cm");
buf.push(");</li><li>se rotește cu viteză foarte mare în jurul nucleului, dar, în același timp, și în jurul axei sale, creând o zonă numită <em>nor electronic.</em></li></ul></div></div>");
}
}, 'inveti', 'Înveți lucruri noi','pb1');
}
}, {id: 'p54-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><ul class=\"disc\"><li>Învelișul de electroni al atomului este format din totalitatea electronilor care gravitează în jurul nucleului atomic.</li><li>Între electronii încărcați electric negativ, din învelișul electronic al atomului, și protonii încărcați electric pozitiv, din nucleu, se manifestă forțe de atracție electrostatică.</li><li>Electronul se notează cu ");
jade_mixins["electron_complicated"]();
buf.push("sau, frecvent, cu &nbsp;");
jade_mixins["electron_simple"]();
buf.push(".</li></ul></div>");
}
}, 'retine', 'Reține','pb1');
}
}, {id: 'p54-at-msd-chim7-retine-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să observăm</div><div class=\"text-indent1-5 pb1\">Privește cu atenție structurile atomilor reprezentați în figurile <strong>a-d.</strong></div><div class=\"div msd-blue-bg-3\">");
jade_mixins["space1"]();
buf.push("<div class=\"row pb2\"><div class=\"col-sm-1 col-xs-1\"></div><div class=\"col-sm-4 col-xs-10\"><div class=\"block-subtitle msd-red\">Structuri atomice</div></div></div><div class=\"row\"><div class=\"col-sm-1 col-xs-1\"></div><div class=\"col-sm-4 col-xs-5\">");
jade_mixins["img2"]('img/chimie7/p54-structuri-a.png', 'a', 'grey sm-span');
buf.push("</div><div class=\"col-sm-2 col-xs-0\"></div><div class=\"col-sm-4 col-xs-5\">");
jade_mixins["img2"]('img/chimie7/p54-structuri-b.png', 'b', 'grey sm-span');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row pb1\"><div class=\"col-sm-1 col-xs-1\"></div><div class=\"col-sm-4 col-xs-5\">");
jade_mixins["img2"]('img/chimie7/p54-structuri-c.png', 'c', 'grey sm-span');
buf.push("</div><div class=\"col-sm-2 col-xs-0\"></div><div class=\"col-sm-4 col-xs-5\">");
jade_mixins["img2"]('img/chimie7/p54-structuri-d.png', 'd', 'grey sm-span');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("</div>");
jade_mixins["space1"]();
buf.push("<ul class=\"disc pb1\"><li>Identifică numărul de protoni, neutroni și electroni pentru fiecare atom în parte.</li><li>Compară numărul de protoni cu numărul de electroni. Ce observi?</li></ul><ul class=\"arrows\"><li>Numărul de electroni din învelișul de electroni este diferit de la un tip de atomi la altul, dar este egal cu numărul de protoni pentru același tip de atomi.</li></ul></div>");
}
}, 'inveti no-title', '','pb1');
}
}, {id: 'p54-at-msd-chim7-observam'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><div class=\"text-indent1-5 pb1\">Într-­un atom, numărul electronilor din învelișul de electroni al atomului, particulele nega­tive din atom, este egal cu numărul protonilor din nucleu, particulele pozitive din atom; ca urmare, atomul este neutru din punct de vedere electric.</div><div class=\"text-center\"><strong>nr. ");
jade_mixins["proton_simple"]();
buf.push("&nbsp;= nr. ");
jade_mixins["electron_simple"]();
buf.push("&nbsp;= <em>Z</em></strong></div></div>");
}
}, 'retine', 'Reține','pb1');
}
}, {id: 'p54-at-msd-chim7-retine-2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block pb1\"><div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Structura învelișului de electroni</div><div class=\"text-indent1-5\">Electronii din învelișul de electroni al atomului sunt repartizați pe <em>straturi. </em>Aceste straturi sunt concentrice nucleului, cel mai apropiat de nucleu fiind numit <em>primul strat</em>, iar cel mai depărtat de nucleu – <em>strat exterior.</em></div><div class=\"text-indent1-5 pb1\">Pentru cele 118 elemente cunoscute, numărul maxim de straturi care intră în alcătuirea atomului unui element este șapte.</div><div class=\"text-indent1-5 pb2\">Straturile se notează, începând de la nucleu spre exterior, cu literele <em>K, L, M, N, O, P, Q </em>sau cu cifrele 1, 2, 3, 4, 5, 6, 7, ca în figura de mai jos.</div><div class=\"div msd-blue-bg-3\">");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-12\"><div class=\"block-subtitle msd-red text-right pr2\">Structura învelișului de electroni</div></div></div><div class=\"row\"><div class=\"col-sm-5 col-xs-4\"></div><div class=\"col-sm-7 col-xs-8 pr3\">");
jade_mixins["img"]('img/chimie7/p54-structura-invelis.png');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("</div></div></div>");
}
}, {id: 'p54-at-msd-chim7-structura-invelis'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><div class=\"text-indent1-5\">Învelișul de electroni al atomului are o structură stratificată.</div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p54-at-msd-chim7-retine-3'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U2', '', 'Învelișul de electroni', '55', 'blue', 'right', 'small');
}
}, {id: 'p55-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"><div class=\"block-content\"><div class=\"text-indent1-5 pb1\">Straturile de electroni care intră în alcătuirea oricărui tip de atomi se deosebesc prin:</div><ul class=\"disc marker-orange\"><li class=\"pb1\"><strong>distanța față de nucleu; </strong>aceasta reprezintă distanța de la nucleu până la stratul respectiv. Cu cât crește numărul stratului, cu atât crește și distanța de la nucleu la acesta. Distanța față de nucleu crește de la stratul  ");
jade_mixins["strat_atomic"].call({
block: function(){
buf.push(" ");
}
}, "1");
buf.push("&nbsp;la stratul ");
jade_mixins["strat_atomic"].call({
block: function(){
buf.push(" ");
}
}, "7");
buf.push(".</li><li class=\"pb1\"><strong>nivelul de energie pe care îl au electronii; </strong>acesta crește de la stratul ");
jade_mixins["strat_atomic"].call({
block: function(){
buf.push(" ");
}
}, "1");
buf.push("&nbsp;la stratul ");
jade_mixins["strat_atomic"].call({
block: function(){
buf.push(" ");
}
}, "7");
buf.push(".</li><li><strong>numărul maxim de electroni dintr-un strat; </strong>acesta reprezintă numărul maxim de electroni care pot gravita pe stratul respectiv. Astfel, pe stratul ");
jade_mixins["strat_atomic"].call({
block: function(){
buf.push(" ");
}
}, "1");
buf.push("&nbsp;pot exista maximum ");
jade_mixins["numar_electroni"]("2");
buf.push(".\nPe stratul ");
jade_mixins["strat_atomic"].call({
block: function(){
buf.push(" ");
}
}, "2");
buf.push("&nbsp;maximum ");
jade_mixins["numar_electroni"]("8");
buf.push(". Până la stratul 4, numărul maxim de electroni dintr-­un strat este dat de relația:</li>");
jade_mixins["space1"]();
buf.push("<div class=\"text-center\">Nr. max de ");
jade_mixins["electron_simple"]();
buf.push("&nbsp; = <div class=\"wrap inline-block\">2 • ");
jade_mixins["numar_putere"]("","<em>n</em>","2","");
buf.push("</div>, <em>n </em>fiind numărul stratului.</div></ul></div></div>");
}
}, {id: 'p55-at-msd-chim7-structura-invelis'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><ul class=\"disc\"><li>Straturile de electroni ale unui atom sunt ocupate cu electroni, în ordinea creșterii energiei, începând cu stratul care are cea mai joasă energie – stratul <em>K</em>–, și respectând numărul maxim de electroni de pe fiecare strat.</li><li>Învelișul de electroni al unui atom se deosebește de cel al atomului anterior, în ordinea creșterii numărului atomic <em>Z</em>, printr­-un singur electron, numit <em>electron distinctiv.</em></li></ul></div>");
}
}, 'retine', 'Reține','pb1');
}
}, {id: 'p55-at-msd-chim7-retine-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block pb1\"><div class=\"block-content\"><div class=\"text-indent1-5 pb1\">Astfel, pentru elementele F și Ne, cu numerele atomice <em>Z </em>= 9, respectiv <em>Z </em>= 10, repartizarea electronilor pe straturi va fi:</div><div class=\"row sm-center-row pb1\"><div class=\"col-md-6 col-sm-12 pb1\"><div class=\"d-flex align-items-center\"><div class=\"pr1\">F</div><div class=\"grup-acolada text-left\"><div>");
jade_mixins["strat_atomic"]("1");
buf.push("&nbsp;– <div class=\"wrap inline-block\"></div>");
jade_mixins["numar_electroni"]("<em>2</em>");
buf.push("– strat complet ocupat</div><div>");
jade_mixins["strat_atomic"]("2");
buf.push("&nbsp;– <div class=\"wrap inline-block\"></div>");
jade_mixins["numar_electroni"]("<em>7</em>");
buf.push("– strat în curs de completare</div></div></div></div><div class=\"col-md-6 col-sm-12\"><div class=\"d-flex align-items-center\"><div class=\"pr1\">Ne</div><div class=\"grup-acolada text-left\"><div>");
jade_mixins["strat_atomic"]("1");
buf.push("&nbsp;– <div class=\"wrap inline-block\"></div>");
jade_mixins["numar_electroni"]("<em>2</em>");
buf.push("– strat complet ocupat</div><div>");
jade_mixins["strat_atomic"]("2");
buf.push("&nbsp;– <div class=\"wrap inline-block\">");
jade_mixins["numar_electroni"]("<em>8</em>");
buf.push("</div>– strat complet ocupat</div></div></div></div></div><div class=\"text-indent1-5 pb1\">Cel de-­al 8-­lea electron de pe stratul <em>L </em>al atomului de neon este electron distinctiv prin raportare la atomul de fluor.</div></div></div>");
}
}, {id: 'p55-at-msd-chim7-exemplu-repartizare-electroni'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><ul class=\"disc\"><li>Structura cu ");
jade_mixins["numar_electroni"]("2");
buf.push("&nbsp;pe stratul ");
jade_mixins["strat_atomic"]("1");
buf.push(", în cazul în care stratul <em>K </em>este ultimul strat, se numește <strong>structură stabilă de dublet.</strong></li><li>Structura cu ");
jade_mixins["numar_electroni"]("8");
buf.push("&nbsp;pe ultimul strat, indiferent care este acela, se numește <strong>structură stabilă de octet.</strong></li></ul></div>");
}
}, 'retine', 'Reține','pb1');
}
}, {id: 'p55-at-msd-chim7-retine-2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block pb1\"><div class=\"block-content\"><ul class=\"arrows marker-orange\"><li>Structura învelișului de electroni și numărul de electroni de pe ultimul strat determină multe dintre proprietățile elementelor, inclusiv capacitatea de combinare a atomilor&nbsp;<div class=\"wrap inline-block\">între ei.</div></li></ul></div></div>");
}
}, {id: 'p55-at-msd-chim7-structura'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><ul class=\"numbers\"><li class=\"pb1\">În imaginile <strong>a-d </strong>(pag. 54) sunt reprezentate structurile atomilor de B, C, N și O. Determină pentru fiecare element numărul atomic Z.</li><li class=\"pb2\">Stabilește asemănările și deosebirile care pot fi identificate între structurile atomice prezentate în coloana alăturată (fig. <strong>e-f</strong>).</li><div class=\"div msd-blue-bg-3\">");
jade_mixins["space1"]();
buf.push("<div class=\"row pb1\"><div class=\"col-sm-1 col-xs-1\"></div><div class=\"col-sm-4 col-xs-10\"><div class=\"block-subtitle msd-red\">Structuri atomice</div></div></div><div class=\"row\"><div class=\"col-sm-1 col-xs-1\"></div><div class=\"col-sm-4 col-xs-5\">");
jade_mixins["img2"]('img/chimie7/p55-structuri-e.png', 'e', 'grey sm-span');
buf.push("</div><div class=\"col-sm-2 col-xs-0\"></div><div class=\"col-sm-4 col-xs-5\">");
jade_mixins["img2"]('img/chimie7/p55-structuri-f.png', 'f', 'grey sm-span');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("</div>");
jade_mixins["space1"]();
buf.push("<li class=\"pb1\">Studiază tabelul de mai jos. Identifică și scrie pe caiet denumirile elementelor:<ul class=\"letters\"><li>care prezintă, pe ultimul strat de electroni, structură stabilă de dublet;</li><li>care au pe ultimul strat, structură stabilă de octet;</li><li> care au stratul al doilea ");
jade_mixins["paranteza_strat"]("L");
buf.push("&nbsp;complet ocupat cu electroni;</li><li>care au 3 straturi de electroni;</li><li>care au stratul al patrulea ");
jade_mixins["paranteza_strat"]("N");
buf.push("&nbsp;în curs de completare.</li></ul></li><li class=\"pb1\">Pentru elementul chimic cu <em>Z </em>= 15, stabilește:<ul class=\"letters\"><li>numărul de straturi ocupate cu electroni;</li><li>numărul de electroni de pe penultimul strat.</li></ul></li></ul></div>");
}
}, 'aplica', 'Aplică','pb1');
}
}, {id: 'p55-at-msd-chim7-aplica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><table class=\"msd-table purple-table responsive-table-sm\"><thead><tr><td rowspan=\"2\" style=\"max-width: 60px;\" class=\"fb text-center table-vertical-middle\">Element chimic</td><td rowspan=\"2\" style=\"max-width: 60px;\" class=\"fb text-center table-vertical-middle\">Număr atomic <i>Z</i></td><td colspan=\"4\" class=\"fb text-center table-vertical-middle\">Repartizarea <b>");
jade_mixins["electron_simple"]();
buf.push("</b>&nbsp;pe straturi</td></tr><tr><td class=\"fb text-center\"> <i> <b>");
jade_mixins["strat_atomic"]("1");
buf.push("</b></i></td><td class=\"fb text-center\"> <i> <b>");
jade_mixins["strat_atomic"]("2");
buf.push("</b></i></td><td class=\"fb text-center\"> <i> <b>");
jade_mixins["strat_atomic"]("3");
buf.push("</b></i></td><td class=\"fb text-center\"> <i> <b>");
jade_mixins["strat_atomic"]("4");
buf.push("</b></i></td></tr></thead><tbody><tr><td class=\"text-center table-vertical-middle\">H</td><td class=\"text-center table-vertical-middle\">1</td><td class=\"text-center table-vertical-middle\">1</td><td class=\"text-center table-vertical-middle\">–</td><td class=\"text-center table-vertical-middle\">–</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">He</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">–</td><td class=\"text-center table-vertical-middle\">–</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">Li</td><td class=\"text-center table-vertical-middle\">3</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">1</td><td class=\"text-center table-vertical-middle\">–</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">Be</td><td class=\"text-center table-vertical-middle\">4</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">–</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">B</td><td class=\"text-center table-vertical-middle\">5</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">3</td><td class=\"text-center table-vertical-middle\">–</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">C</td><td class=\"text-center table-vertical-middle\">6</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">4</td><td class=\"text-center table-vertical-middle\">–</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">N</td><td class=\"text-center table-vertical-middle\">7</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">5</td><td class=\"text-center table-vertical-middle\">–</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">O</td><td class=\"text-center table-vertical-middle\">8</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">6</td><td class=\"text-center table-vertical-middle\">–</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">F</td><td class=\"text-center table-vertical-middle\">9</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">7</td><td class=\"text-center table-vertical-middle\">–</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">Ne</td><td class=\"text-center table-vertical-middle\">10</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">8</td><td class=\"text-center table-vertical-middle\">–</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">Na</td><td class=\"text-center table-vertical-middle\">11</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">8</td><td class=\"text-center table-vertical-middle\">1</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">Mg</td><td class=\"text-center table-vertical-middle\">12</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">8</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">Al</td><td class=\"text-center table-vertical-middle\">13</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">8</td><td class=\"text-center table-vertical-middle\">3</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">Si</td><td class=\"text-center table-vertical-middle\">14</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">8</td><td class=\"text-center table-vertical-middle\">4</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">P</td><td class=\"text-center table-vertical-middle\">15</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">8</td><td class=\"text-center table-vertical-middle\">5</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">S</td><td class=\"text-center table-vertical-middle\">16</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">8</td><td class=\"text-center table-vertical-middle\">6</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">Cl</td><td class=\"text-center table-vertical-middle\">17</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">8</td><td class=\"text-center table-vertical-middle\">7</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">Ar</td><td class=\"text-center table-vertical-middle\">18</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">8</td><td class=\"text-center table-vertical-middle\">8</td><td class=\"text-center table-vertical-middle\">–</td></tr><tr><td class=\"text-center table-vertical-middle\">K</td><td class=\"text-center table-vertical-middle\">19</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">8</td><td class=\"text-center table-vertical-middle\">8</td><td class=\"text-center table-vertical-middle\">1</td></tr><tr><td class=\"text-center table-vertical-middle\">Ca</td><td class=\"text-center table-vertical-middle\">20</td><td class=\"text-center table-vertical-middle\">2</td><td class=\"text-center table-vertical-middle\">8</td><td class=\"text-center table-vertical-middle\">8</td><td class=\"text-center table-vertical-middle\">2</td></tr></tbody></table><div class=\"fs09 text-right\">Repartiția electronilor pe straturi pentru elementele cu numărul atomic, <div class=\"wrap inline-block\"> <em>Z </em>cuprins între 1 și 20      </div></div></div>");
}
}, 'stiai no-title', '','mb0');
}
}, {id: 'p55-at-msd-chim7-repartitie-electroni'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});