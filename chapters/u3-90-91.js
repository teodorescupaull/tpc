registerChapter({ chapter: "u3-90-91", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Substanțe compuse. Oxizi, baze, acizi și săruri");
jade_mixins["subtitle"]("Paginile 90 - 91");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p90-at-msd-chim7-inveti-1',
          top: 8.2005,
          left: 26.7273,
          width: 66.7879,
          height: 26.5124,
          type: 'text'
        },
        {
          atom: 'p90-at-msd-chim7-inveti-2',
          top: 35.1071,
          left: 26.8485,
          width: 66.7879,
          height: 12.545,
          type: 'text'
        },
        {
          atom: 'p90-at-msd-chim7-vrei',
          top: 8.9717,
          left: 3.4545,
          width: 21.4545,
          height: 61.0454,
          type: 'text'
        },
        {
          atom: 'p90-at-msd-chim7-aplica',
          top: 51.8167,
          left: 26.8485,
          width: 66.9091,
          height: 11.431,
          type: 'text'
        },
        {
          atom: 'p90-at-msd-chim7-inveti-3',
          top: 69.7258,
          left: 25.7576,
          width: 68.2424,
          height: 26.4267,
          type: 'text'
        },
        {
          atom: 'p90-at-msd-chim7-interactiv',
          top: 48.132,
          left: 26.9697,
          width: 66.7879,
          height: 3.3762,
          type: 'exercise'
        }
      ],
      image: 'p090.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p90-at-msd-chim7-inveti-3',
          top: 8.0291,
          left: 6.1212,
          width: 66.1818,
          height: 2.862,
          type: 'text'
        },
        {
          atom: 'p91-at-msd-chim7-retine',
          top: 11.6281,
          left: 5.8788,
          width: 67.1515,
          height: 14.6015,
          type: 'text'
        },
        {
          atom: 'p91-at-msd-chim7-inveti',
          top: 26.5381,
          left: 6,
          width: 67.1515,
          height: 56.5039,
          type: 'text'
        },
        {
          atom: 'p91-at-msd-chim7-vrei',
          top: 13.9417,
          left: 74.2424,
          width: 22.4242,
          height: 53.5904,
          type: 'text'
        },
        {
          atom: 'p91-at-msd-chim7-aplica',
          top: 83.6075,
          left: 6.1212,
          width: 91.2727,
          height: 12.7164,
          type: 'text'
        },
        {
          atom: 'p91-at-msd-chim7-vrei-video',
          top: 7.6007,
          left: 73.8788,
          width: 22.7879,
          height: 6.1183,
          type: 'video'
        }
      ],
      image: 'p091.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U3', '', 'Substanțe compuse. Oxizi, baze, acizi și săruri', '90', 'blue', 'left', 'small');
}
}, {id: 'p90-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"p90-grid\"> <div class=\"p90-grid-left\">Denumire: <strong> acid</strong> +<strong> numele nemetalului</strong> +");
jade_mixins["space1"]();
buf.push("</div><div class=\"p90-grid-center\"></div><div class=\"p90-grid-right-top\"> <strong>sufixul</strong><span class=\"msd-orange fb\"> ‑ic</span><br/> nemetalul din acid are valență superioară");
jade_mixins["space1"].call({
block: function(){
buf.push("      ");
}
});
buf.push("</div><div class=\"p90-grid-right-bottom\"> <strong>sufixul</strong><span class=\"msd-orange fb\"> -os</span><br/> nemetalul din acid are valență inferioară</div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"msd-table-overflow\"> <table class=\"msd-table orange-table vertical-borders text-center\"><thead><tr><td>Formula acidului</td><td>Denumirea acidului</td><td>Formula radicalului</td><td>Denumirea radicalului</td></tr></thead><tr><td>HNO<sub>2</sub></td><td>acid azot<span class=\"msd-orange7 fb\">os</span></td><td>– NO<sub>2 </sub></td><td>azot<span class=\"msd-orange7 fb\">it</span></td></tr><tr><td>HNO<sub>3 </sub></td><td>acid azot<span class=\"msd-orange7 fb\">ic </span></td><td>– NO<sub>3 </sub></td><td>azot<span class=\"msd-orange7 fb\">at</span></td></tr><tr><td>H<sub>2</sub>SO<sub>3 </sub></td><td>acid sulfur<span class=\"msd-orange7 fb\">os </span></td><td>– SO<sub>3</sub></td><td>sulf<span class=\"msd-orange7 fb\">it</span></td></tr><tr><td>H<sub>2</sub>SO<sub>4 </sub></td><td>acid sulfur<span class=\"msd-orange7 fb\">ic </span></td><td>– SO<sub>4 </sub></td><td>sulf<span class=\"msd-orange7 fb\">at</span></td></tr><tr><td>H<sub>2</sub>CO<sub>3 </sub></td><td>acid carbon<span class=\"msd-orange7 fb\">ic </span></td><td>– CO<sub>3 </sub></td><td>carbon<span class=\"msd-orange7 fb\">at</span></td></tr><tr><td>H<sub>3</sub>PO<sub>4</sub></td><td>acid fosfor<span class=\"msd-orange7 fb\">ic</span></td><td>– PO<sub>4</sub></td><td>fosf<span class=\"msd-orange7 fb\">at</span></td></tr></table></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p90-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"numbers n2\"> <li>După numărul atomilor de hidrogen din moleculă, acizii pot fi:<ul class=\"letters\"><li> <strong>Monoprotici</strong> – conțin un singur atom de hidrogen.<br/>Exemple: HCl (acid clorhidric); HNO<sub>3</sub> (acid azotic).</li><li> <strong>Diprotici</strong> – conțin doi atomi de hidrogen.<br/>Exemple: H<sub>2</sub>S (acid sulfhidric); H<sub>2</sub>SO<sub>4</sub> (acid sulfuric); H<sub>2</sub>CO<sub>3</sub> (acid carbonic).</li><li> <strong>Poliprotici</strong> – conțin mai mult de doi atomi de hidrogen.<br/>Exemplu: H<sub>3</sub>PO<sub>4</sub> (acid fosforic).</li></ul></li></ul></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p90-at-msd-chim7-inveti-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><p>Acizii pot fi găsiți în toate cele trei stări de agregare: acizi gazoși (HCl, HBr, H<sub>2</sub>S); acizi lichizi (HNO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub>); acizi solizi (H<sub>3</sub>PO<sub>4</sub>).</p><p>Acizii sunt solubili în apă.</p><ul class=\"disc\"> <li><strong><em>Acidul clorhidric</em></strong>, HCl, în condiții normale de temperatură și presiune, este un gaz incolor, cu miros înțepător, mai greu decât aerul. Acidul clorhidric este foarte solubil în apă.</li><li> <strong> <em>Acidul sulfuric</em></strong>, H<sub>2</sub>SO<sub>4</sub>, este un lichid uleios, incolor și inodor, mai greu decât apa.</li><li> <strong> <em>Acidul carbonic</em></strong>, H<sub>2</sub>CO<sub>3</sub>, este un acid slab care se comercializează sub formă de soluție apoasă numită sifon.</li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <div class=\"col-md-1\"></div><div class=\"col-xs-6 col-md-5\"> ");
jade_mixins["img4"]('img/chimie7/p90-daca_vrei.png', 'Molecula de acid carbonic, H<sub>2</sub>CO<sub>3</sub>', '', '');
buf.push("</div><div class=\"col-xs-6 col-md-5\"> ");
jade_mixins["img4"]('img/chimie7/p90-c-2-diprotici.png', 'Molecula de acid sulfhidric, H<sub>2</sub>S', '', '');
buf.push("</div></div></div>");
}
}, 'stiai', 'Dacă vrei să știi mai mult…','');
}
}, {id: 'p90-at-msd-chim7-vrei'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<span>Alege varianta corectă:</span>");
jade_mixins["space1"]();
}
}, "p90");
jade_mixins["exercise"].call({
block: function(){
jade_mixins["validator"].call({
block: function(){
buf.push(" <p><strong class=\"msd-purple\"> A. </strong> Acidul fosforos are formula chimică:</p>");
jade_mixins["pickone"](2, ['a. HF', 'b. H<sub>3</sub>PO<sub>3</sub>;', 'c. H<sub>3</sub>PO<sub>4</sub>.'], {
              name: '90-91-1',
              className: 'md-pickone-block',
              popup: false,
              showResults: false
            });
jade_mixins["space1"]();
buf.push("<p><strong class=\"msd-purple\"> B. </strong> Acidul clorhidric este:</p>");
jade_mixins["pickone"](3, ['a. un oxiacid;', 'b. un acid diprotic;', 'c. un acid monoprotic.'], {
              name: '90-91-2',
              className: 'md-pickone-block',
              popup: false,
              showResults: false
            });
jade_mixins["space1"]();
buf.push("<p><strong class=\"msd-purple\"> C. </strong>Hidracidul halogenului din perioada a 2-a este:</p>");
jade_mixins["pickone"](1, ['a. HF;', 'b. HCl;', 'c. HI.'], {
              name: '90-91-3',
              className: 'md-pickone-block',
              popup: false,
              showResults: false
            });
}
});
}
}, {name:'p90-choices'});
buf.push("</div>");
}
}, 'aplica no-title', 'Aplică','');
}
}, {id: 'p90-at-msd-chim7-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\"><span class=\"msd-purple\">Joc și chimie.</span> Documentează-te pe internet și află care sunt domeniile în care este folosit acidul sulfuric. Copiază pe caiet diagrama de mai jos și completează spațiile punctate cu utilizările identificate de tine pentru acidul sulfuric.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <div class=\"col-md-2\"> </div><div class=\"col-xs-12 col-md-8\">");
jade_mixins["img"]('img/chimie7/p90-aplica.png');
buf.push("</div></div></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p90-at-msd-chim7-aplica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-subtitle"]('D.', 'Săruri');
}
}, {id: 'p90-at-msd-chim7-subtitle'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să observăm</div><ul class=\"disc\"> <li>În figurile de mai jos sunt prezentate patru substanțe compuse, cu formulele lor chimice.</li><li>Notează pe caiet ce au în comun aceste substanțe.</li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <div class=\"col-xs-6 col-md-3\">");
jade_mixins["img4"]('img/chimie7/p90-d-inveti-1.jpg','Clorură de mangan – MnCl<sub>2</sub>','','');
buf.push("</div><div class=\"col-xs-6 col-md-3\">");
jade_mixins["img4"]('img/chimie7/p90-d-inveti-2.jpg','Clorură de nichel – NiCl<sub>2</sub>','','');
buf.push("</div><div class=\"col-xs-6 col-md-3\">");
jade_mixins["img4"]('img/chimie7/p90-d-inveti-3.jpg','Azotat de cobalt – Co(NO<sub>3</sub>)<sub>2</sub>','','');
buf.push("</div><div class=\"col-xs-6 col-md-3\">");
jade_mixins["img4"]('img/chimie7/p90-d-inveti-4.jpg','Sulfat de litiu – Li<sub>2</sub>SO<sub>4</sub>','','');
buf.push("</div></div>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<ul class=\"arrows\"> <li>Toate aceste substanțe compuse conțin un metal și un radical acid.</li></ul></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p90-at-msd-chim7-inveti-3'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U3', '', 'Substanțe compuse. Oxizi, baze, acizi și săruri', '91', 'blue', 'right', 'small');
}
}, {id: 'p91-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Sărurile sunt substanțe compuse formate din metale și radicali acizi. Teoretic, sărurile se obțin din acizi prin înlocuirea hidrogenului cu un metal. Au formula generală:</div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-md-1\"></div><div class=\"col-xs-10 element-xs-center col-md-10 red-container\"><div class=\"d-flex align-center gap10 justify-center pb2\"><span class=\"fs09\">metal cu valența<em> m</em></span><div class=\"imgp91\">");
jade_mixins["img"]('img/chimie7/p91_retine_formula1.png');
buf.push("</div><span class=\"fs09\">radical cu valența<em> n</em></span></div></div></div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p91-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Sărurile se clasifică în săruri provenite de la hidracizi și săruri provenite de la oxiacizi.</div><ul class=\"numbers\"> <li> <p><strong>Sărurile provenite de la hidracizi</strong> – conțin atomi de metal și atomi de nemetal (radicalul A este reprezentat de un nemetal).</p><p>Denumire:<strong> numele nemetalului + sufixul<span class=\"msd-orange\"> -ură</span> + de + numele metalului M</strong>.</p><p>În cazul în care metalul are valență variabilă, valența acestuia se specifică la sfârșitul denumirii sau se adaugă sufixul<span class=\"msd-orange fb\"> -oasă</span>, pentru sarea în care metalul are valența inferioară și sufixul<span class=\"msd-orange fb\"> -ică</span>, pentru sarea în care metalul are valența superioară.</p>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<div class=\"row\"> <div class=\"col-md-1\"></div><div class=\"col-xs-12 col-md-10\"> <table class=\"msd-table orange-table vertical-borders\"><thead class=\"text-center\"><tr><td colspan=\"4\">Săruri provenite de la hidracizi</td></tr></thead><tr><td class=\"text-center\">NaF<sub>2</sub></td><td class=\"no-borders\">fluor<span class=\"msd-orange7 fb\">ură</span> de sodiu</td><td class=\"no-borders\"></td><td class=\"no-borders\"></td></tr><tr><td class=\"text-center\">NaCl</td><td class=\"no-borders\">clor<span class=\"msd-orange7 fb\">ură</span> de sodiu</td><td class=\"no-borders\"></td><td class=\"no-borders\"> </td></tr><tr><td class=\"text-center\">K<sub>2</sub>S</td><td class=\"no-borders\">sulf<span class=\"msd-orange7 fb\">ură</span> de potasiu</td><td class=\"no-borders\"></td><td class=\"no-borders\"></td></tr><tr><td class=\"text-center\">FeCl <sub>3</sub></td><td class=\"no-borders\">clor<span class=\"msd-orange7 fb\">ură</span> de fier (III) </td><td class=\"no-borders\"><em>sau &nbsp;&nbsp;</em></td><td class=\"no-borders\">clorură fer<span class=\"msd-orange7 fb\">ică</span></td></tr><tr><td class=\"text-center\">FeCl<sub>2 </sub></td><td class=\"no-borders\">clor<span class=\"msd-orange7 fb\">ură</span> de fier (II)</td><td class=\"no-borders\"><em>sau &nbsp;&nbsp;</em></td><td class=\"no-borders\">clorură fer<span class=\"msd-orange7 fb\">oasă</span></td></tr></table></div></div>");
jade_mixins["space1"]();
buf.push("</li><li><p> <strong>Sărurile provenite de la oxiacizi</strong> – conțin pe lângă atomi de metal și de nemetal, și atomi de oxigen (radicalul A este o grupare de atomi care conține oxigen).</p><p>Denumire:<strong> numele radicalului + de + numele metalului M</strong>.</p><p>În cazul în care metalul are valență variabilă, valența acestuia se specifică la sfârșitul denumirii sau se adaugă sufixul<span class=\"msd-orange fb\"> -os</span>, pentru sarea în care metalul are valența inferioară și sufixul<span class=\"msd-orange fb\"> -ic</span>, pentru sarea în care metalul are valența superioară.</p>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<div class=\"row\"> <div class=\"col-md-1\"></div><div class=\"col-xs-12 col-md-10\"> <table class=\"msd-table orange-table vertical-borders\"><thead class=\"text-center\"><tr><td colspan=\"4\">Săruri provenite de la oxiacizi</td></tr></thead><tr><td class=\"text-center\">Mg(NO<sub>2</sub>)<sub>2</sub></td><td class=\"no-borders\">azot<span class=\"msd-orange7 fb\">it</span> de magneziu</td><td class=\"no-borders\"></td><td class=\"no-borders\"></td></tr><tr><td class=\"text-center\">Ca(NO<sub>3</sub>)<sub>2</sub></td><td class=\"no-borders\">azot<span class=\"msd-orange7 fb\">at</span> de calciu</td><td class=\"no-borders\"></td><td class=\"no-borders\"> </td></tr><tr><td class=\"text-center\">CaSO<sub>3 </sub></td><td class=\"no-borders\">sulf<span class=\"msd-orange7 fb\">it</span> de calciu</td><td class=\"no-borders\"></td><td class=\"no-borders\"></td></tr><tr><td class=\"text-center\">Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub></td><td class=\"no-borders\">sulf<span class=\"msd-orange7 fb\">at</span> de aluminiu </td><td class=\"no-borders\"></td><td class=\"no-borders\"></td></tr><tr><td class=\"text-center\">CaCO<sub>3</sub></td><td class=\"no-borders\">carbon<span class=\"msd-orange7 fb\">at </span> de calciu</td><td class=\"no-borders\"></td><td class=\"no-borders\"></td></tr><tr><td class=\"text-center\">FeSO<sub>4</sub></td><td class=\"no-borders\">sulf<span class=\"msd-orange7 fb\">at </span> de fier (II)</td><td class=\"no-borders\"><em>sau &nbsp;&nbsp;</em></td><td class=\"no-borders\">sulfat fer<span class=\"msd-orange7 fb\">os</span></td></tr><tr><td class=\"text-center\">Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub></td><td class=\"no-borders\">sulf<span class=\"msd-orange7 fb\">at </span> de fier (III)</td><td class=\"no-borders\"><em>sau &nbsp;&nbsp;</em></td><td class=\"no-borders\">sulfat fer<span class=\"msd-orange7 fb\">ic</span></td></tr></table></div></div>");
jade_mixins["space1"]();
buf.push("</li></ul></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p91-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Cele mai multe săruri, la separarea din soluțiile lor prin cristalizare, rețin în cristalele pe care le formează un anumit număr de molecule de apă, numită<strong><em> apă de cristalizare</em></strong>. Substanțele care conțin apă de cristalizare sunt cunoscute sub numele de<strong> <em> hidrați</em></strong> sau<strong> <em> cristalohidrați</em></strong>. Prin încălzire, hidrații pierd apa de cristalizare, formând<strong><em> săruri anhidre</em></strong>. Procesul de deshidratare este însoțit, în general, de modificarea culorii.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <div class=\"col-md-1\"></div><div class=\"col-xs-6 col-md-5\">");
jade_mixins["img4"]('img/chimie7/p91-daca_vrei-1.jpg', 'CuSO<sub>4</sub> · 5H<sub>2</sub>O (cristalohidrat)', '', '');
buf.push("</div><div class=\"col-xs-6 col-md-5\">");
jade_mixins["img4"]('img/chimie7/p91-daca_vrei-2.jpg', 'CuSO<sub>4</sub> (sare anhidră)', '', '');
buf.push("</div></div></div>");
}
}, 'stiai mb0', 'Dacă vrei să știi mai mult…','');
}
}, {id: 'p91-at-msd-chim7-vrei'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">");
jade_mixins["video"]('p91');
buf.push("</div>");
}
}, 'stiai no-title', 'Dacă vrei să știi mai mult…','');
}
}, {id: 'p91-at-msd-chim7-vrei-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"> <div class=\"col-xs-12 col-md-8\"><div class=\"text-indent1-5\">Se consideră formulele următoarelor substanțe chimice:</div><div class=\"p-pl items-04-between\"><span><span class=\"msd-purple\">•</span> NaOH</span><span><span class=\"msd-purple\">•</span><span> CuCl<sub>2</sub></span></span><span><span class=\"msd-purple\">•</span> CaO</span><span><span class=\"msd-purple\">•</span><span> H<sub>2</sub>SO<sub>3</sub></span></span><span><span class=\"msd-purple\">•</span><span> Ca(OH)<sub>2</sub></span></span><span> <span class=\"msd-purple\">•</span><span> SO<sub>2</sub></span></span><span><span class=\"msd-purple\">•</span><span> Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub></span></span><span><span class=\"msd-purple\">•</span> HBr</span><span><span class=\"msd-purple\">•</span> KOH</span><span><span class=\"msd-purple\">•</span><span> H<sub>3</sub>PO<sub>4</sub></span></span><span><span class=\"msd-purple\">•</span> CO</span><span><span class=\"msd-purple\">•</span><span> MgSO<sub>4</sub></span></span><span><span class=\"msd-purple\">•</span><span> Al(OH)<sub>3</sub></span></span><span><span class=\"msd-purple\">•</span><span> K<sub>2</sub>SO<sub>3</sub></span></span><span> <span class=\"msd-purple\">•</span> HCl</span><span><span class=\"msd-purple\">•</span> FeO</span><span><span class=\"msd-purple\">•</span><span> Cu(OH)<sub>2</sub></span></span><span> <span class=\"msd-purple\">•</span><span> HNO<sub>3</sub></span></span><span><span class=\"msd-purple\">•</span> FeS</span><span><span class=\"msd-purple\">•</span> NiO.</span></div><div class=\"text-indent1-5\">Precizează care dintre aceste substanțe sunt săruri și scrie-le în caiet, într-un tabel asemănător cu cel <span class=\"hidden-xs\">alăturat.</span><span class=\"hidden-md\">de mai jos.</span></div>");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-xs-6 element-xs-center col-md-4\"><table class=\"msd-table purple-table vertical-borders text-center\"><thead><tr><td colspan=\"2\">Săruri</td></tr></thead><tr><td>Formula chimică </td><td>Denumirea</td></tr><tr><td>... </td><td>...</td></tr><tr><td>... </td><td>...</td></tr></table></div></div></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p91-at-msd-chim7-aplica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});