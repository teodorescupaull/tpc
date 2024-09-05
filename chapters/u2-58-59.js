registerChapter({ chapter: "u2-58-59", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Masa atomică. Mol de atomi");
jade_mixins["subtitle"]("Paginile 58 - 59");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p58-at-msd-chim7-stii',
          top: 8,
          left: 26,
          width: 68,
          height: 13
        },
        {
          atom: 'p58-at-msd-chim7-inveti',
          top: 21.5,
          left: 26,
          width: 68,
          height: 30.8
        },
        {
          atom: 'p58-at-msd-chim7-retine',
          top: 53,
          left: 26,
          width: 68,
          height: 8.5
        },
        {
          atom: 'p58-at-msd-chim7-masa-atomica',
          top: 62,
          left: 26,
          width: 68,
          height: 34.5
        },
        {
          atom: 'p58-at-msd-chim7-mase-relative',
          top: 8,
          left: 0,
          width: 25,
          height: 80
        }
      ],
      image: 'p058.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p59-at-msd-chim7-retine-1',
          top: 8,
          left: 6,
          width: 68,
          height: 11.5
        },
        {
          atom: 'p59-at-msd-chim7-notiune-atom',
          top: 19.9,
          left: 6,
          width: 68,
          height: 3.6
        },
        {
          atom: 'p59-at-msd-chim7-retine-2',
          top: 24,
          left: 6,
          width: 68,
          height: 10
        },
        {
          atom: 'p59-at-msd-chim7-AMII',
          top: 34.3,
          left: 6,
          width: 15,
          height: 4.5,
          type: 'audio'
        },
        {
          atom: 'p59-at-msd-chim7-relatie-mol-Avogadro',
          top: 39,
          left: 6,
          width: 68,
          height: 34
        },
        {
          atom: 'p59-at-msd-chim7-aplica',
          top: 73.5,
          left: 6,
          width: 68,
          height: 23
        },
        {
          atom: 'p59-at-msd-chim7-stiai',
          top: 8,
          left: 75,
          width: 25,
          height: 55
        }
      ],
      image: 'p059.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U2', '5', 'Masa atomică. Mol de atomi', '58', 'blue', 'left', 'big mb0 pb2');
}
}, {id: 'p58-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"> <li>Atomii au mase și dimensiuni foarte reduse.</li><li>Suma numărului de protoni ");
jade_mixins["parantezaZ"]();
buf.push("și a numărului de neutroni ");
jade_mixins["paranteza_n"].call({
block: function(){
buf.push(" ");
}
});
buf.push("din nucleul atomic se numește număr de masă și se notează cu <em>A</em>.</li><li>Toată masa atomului este concentrată în nucleu, învelișul de electroni având masă neglijabilă.</li></ul></div>");
}
}, 'stii pb0', 'Știi deja','');
}
}, {id: 'p58-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><div class=\"block-subtitle msd-orange\">Să observăm</div><div class=\"row\"> <div class=\"col-sm-6 col-xs-12\"><div class=\"text-indent1-5\"> \nObservă cu atenție imaginea alăturată. O singură picătură de apă conține mai mult de un milion de milioane de miliarde de atomi <div class=\"wrap inline-block notab\">(");
jade_mixins["numar_putere"]("","10","21","");
buf.push("). </div>&nbsp;Cum crezi că s-­ar putea calcula masa unui singur atom?</div><div class=\"text-indent1-5 pb1\"> \nUn număr foarte mare de experimente ingenioase au avut ca scop determinarea mărimii și masei atomu­lui. Cel mai ușor atom, cel de hidro­gen, are un diametru de");
jade_mixins["numar_putere"].call({
block: function(){
buf.push(" ");
}
}, "1","10","-8","cm");
buf.push("&nbsp; și o masă de ");
jade_mixins["numar_putere"]("1,66","10","-24","g");
buf.push(".</div></div><div class=\"col-sm-6 col-xs-12 pb1\">");
jade_mixins["img"]('img/chimie7/p58-inveti.jpg');
buf.push("</div></div><div class=\"row\"><div class=\"col-sm-12\"><div class=\"text-indent1-5\">Masele extrem de reduse ale atomilor, de ordinul ");
jade_mixins["numar_putere"]("","10","-27","kg");
buf.push(", i-­au determinat pe oamenii de știință să introducă, prin convenție internațională, ca unitate de măsură pentru acestea, <div class=\"wrap inline-block notab\">a 12-­a &nbsp;</div>parte din masa izotopului de carbon ");
jade_mixins["atom_AZ"]("C,","12","&nbsp;&nbsp;6");
buf.push("numită <em>unitate atomică de masă </em>și notată pre­scurtat <em>u.a.m.</em></div></div></div></div>");
}
}, 'inveti', 'Înveți lucruri noi','pb1');
}
}, {id: 'p58-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><div class=\"text-indent1-5\">Masa atomică relativă este numărul care arată de câte ori masa unui atom este mai mare decât a 12-­a parte din masa atomului ");
jade_mixins["atom_AZ"]("C.","12","&nbsp;&nbsp;6");
buf.push("</div></div>");
}
}, 'retine', 'Reține','pb1');
}
}, {id: 'p58-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"><div class=\"block-content\"><ul class=\"arrows marker-orange\"><li>Masa atomică relativă a unui element chimic depinde de numerele de masă ale izotopilor <div class=\"wrap inline-block\">(<em> ");
jade_mixins["word_sub"]("A","1");
buf.push(", ");
jade_mixins["word_sub"]("A","2");
buf.push(", ...");
jade_mixins["word_sub"]("A","n");
buf.push("</em>) </div>&nbsp;și de abundența acestora în compoziția elementului în natură. Aceste valori pentru masele atomice relative ale elementelor chimice se găsesc în anexa de la sfârșitul manualului.</li></ul><div class=\"text-indent1-5\">Masele atomice relative se notează cu ");
jade_mixins["word_sub"]("A","r");
buf.push("&nbsp; și sunt, în general, numere zecimale (vezi fig. de mai jos). Pentru simplificare se lucrează cu mase atomice relative rotunjite (vezi anexa de la sfârșitul manualului).</div><div class=\"text-indent1-5 pb1\"> Prin determinări precise, s-­a calculat că în 12 g C, 24 g Mg, 1 g H – mase de substanțe egale numeric cu masele atomice relative, dar exprimate în grame – se găsește același număr de atomi.</div><div class=\"text-indent1-5 pb1\"> <em>Pentru exemplificare:</em></div><ul class=\"disc pb1 marker-orange\"><li>Masa atomică relativă a hidrogenului este 1.<br/>S-­a determinat că într-­un gram de H se găsesc ");
jade_mixins["numar_Avogadro"].call({
block: function(){
buf.push(" ");
}
});
buf.push("&nbsp;atomi de H.</li><li>Masa atomică relativă a sodiului este 23.<br/>S-­a determinat că în 23 g Na se găsesc ");
jade_mixins["numar_Avogadro"].call({
block: function(){
buf.push(" ");
}
});
buf.push("&nbsp;atomi de Na.</li><li>Masa atomică relativă a cuprului este 64.<br/>S-­a determinat că în 64 g Cu se găsesc ");
jade_mixins["numar_Avogadro"].call({
block: function(){
buf.push(" ");
}
});
buf.push("&nbsp;atomi de Cu.</li></ul><ul class=\"arrows marker-orange\"><li> <strong>Numărul ");
jade_mixins["numar_Avogadro"]();
buf.push("</strong>&nbsp;a fost numit <strong>numărul lui Avogadro (");
jade_mixins["word_sub"]("N", "A");
buf.push("), &nbsp;</strong>ca o recunoaștere a contribuției deosebite a omului de știință italian Amedeo Avogadro la dezvoltarea teoriilor cu privire la structura substanțelor și la comportarea gazelor.</li></ul></div></div>");
}
}, {id: 'p58-at-msd-chim7-masa-atomica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"> <div class=\"col-sm-12\"> <div class=\"block-subtitle msd-red\">Mase atomice relative</div></div></div><div class=\"row\"><div class=\"col-sm-5 col-xs-6\">");
jade_mixins["img"]('img/chimie7/p58-coloana-1.png');
buf.push("</div><div class=\"col-sm-2 col-xs-1\"> </div><div class=\"col-sm-2 col-xs-3\">");
jade_mixins["img"]('img/chimie7/p58-coloana-2.png');
buf.push("</div></div></div>");
}
}, 'vrei no-title', '','mb0');
}
}, {id: 'p58-at-msd-chim7-mase-relative'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U2', '', 'Masa atomică. Mol de atomi', '59', 'blue', 'right', 'small');
}
}, {id: 'p59-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><ul class=\"disc\"> <li> <strong>Molul de atomi </strong>reprezintă cantitatea dintr-­un element egală numeric cu masa atomică relativă, exprimată în grame, și care conține numărul lui Avogadro de atomi.</li><li> \nMolul este unitatea de măsură pentru <strong>cantitatea de substanță, </strong>în Sistemul internațional de unități.</li></ul></div>");
}
}, 'retine', 'Reține','pb0');
}
}, {id: 'p59-at-msd-chim7-retine-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block pb1\"><div class=\"block-content\"><div class=\"text-indent1-5\">Introducerea noțiunii de mol de atomi impune o reconsiderare a semnificației simbolului chimic.</div></div></div>");
}
}, {id: 'p59-at-msd-chim7-notiune-atom'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><div class=\"row\"> <div class=\"col-sm-7 col-xs-12 pb2\"> \nAmedeo Avogadro, fizician și chimist italian, a avut contribuții deosebite în dezvoltarea chimiei ca știință. Avogadro s-­a dedicat studiilor juridice până la vârsta de 30 de ani, când a început să-­și manifeste interesul pentru lumea științifică. În perioada 1809 – 1819 a fost profesor de fizică și de matematică la Colegiul Regal din Vercelli. În anul 1811, Avogadro a pus bazele „ipotezei moleculare”. El susținea că două volume egale din orice gaz, aflate la aceeași presiune și temperatură, conțin același număr de molecule. Principiul lui Avogadro a oferit un punct de pornire pentru măsurarea mai exactă a dimensiunilor și greutății atomilor.</div><div class=\"col-sm-5 col-xs-8\">");
jade_mixins["img"]('img/chimie7/p59-avogadro.jpg');
buf.push("<div class=\"pb1\"></div><div class=\"fs09 text-right\"> \nAmedeo Avogadro <br/>(1776-­1856)   </div></div></div></div>");
}
}, 'stiai', 'Știai că?','');
}
}, {id: 'p59-at-msd-chim7-stiai'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><ul class=\"disc\"> <li>La scară atomică, simbolul chimic reprezintă un atom din acel element.</li><li>La nivel macroscopic, simbolul chimic are semnificația unui mol de atomi din acel element chimic.</li></ul></div>");
}
}, 'retine', 'Reține','pb2');
}
}, {id: 'p59-at-msd-chim7-retine-2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block pb0\"><div class=\"block-content\"><div class=\"row sm-center-row\"><div class=\"col-sm-4 col-xs-6\">");
jade_mixins["img"]('img/chimie7/p59-inveti-1.jpg');
buf.push("<div class=\"pb1\"></div><div class=\"fs09 text-center\"> <div class=\"pb1\">Pilitură de magneziu</div>Un mol de atomi de  <div class=\"wrap inline-block\">magneziu – 24 g</div>");
jade_mixins["space1"]();
buf.push("</div></div><div class=\"col-sm-4 col-xs-6\">");
jade_mixins["img"]('img/chimie7/p59-inveti-2.jpg');
buf.push("<div class=\"pb1\"></div><div class=\"fs09 text-center\"> <div class=\"pb1\">Pilitură de fier</div>Un mol de atomi de    <div class=\"wrap inline-block\">fier – 56 g</div>");
jade_mixins["space1"]();
buf.push("</div></div><div class=\"col-sm-4 col-xs-6\">");
jade_mixins["img"]('img/chimie7/p59-inveti-3.jpg');
buf.push("<div class=\"pb1\"></div><div class=\"fs09 text-center\"> <div class=\"pb1\">Pulbere de sulf</div>Un mol de atomi de   <div class=\"wrap inline-block\">sulf – 32 g  </div>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("</div></div></div>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<div class=\"row\"> <div class=\"col-md-12\">");
jade_mixins["img"]('img/chimie7/p59-inveti-4.jpg');
buf.push("<div class=\"pb1\"></div><div class=\"fs09 text-right\">Relația dintre mol de atomi și numărul lui Avogadro</div></div></div></div></div>");
}
}, {id: 'p59-at-msd-chim7-relatie-mol-Avogadro'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block pb1\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"static-padding\"><div class=\"msd-amii-static\"></div></div>");
jade_mixins["img"]("img/chimie7/p59-amii_static.jpg");
jade_mixins["space1"]();
}
}, "p59-AMII_static");
buf.push("</div>");
}
}, {id: 'p59-at-msd-chim7-AMII'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"numbers\"> <li>Determină numărul de moli care se găsesc în 72 g de magneziu.</li><li>Calculează numărul atomilor de argint dintr-­o brățară care cântărește 2,16 g.</li><li>Copiază pe caiet diagrama de mai jos și completează spațiile punctate (folosește datele din anexa de la sfârșitul manualului).</li></ul>");
jade_mixins["space1"]();
buf.push("<div style=\"justify-content: center;\" class=\"row d-flex\"><div class=\"col-sm-7 col-xs-12\">");
jade_mixins["img"]('img/chimie7/p59-aplica.jpg');
buf.push("</div></div></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p59-at-msd-chim7-aplica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});