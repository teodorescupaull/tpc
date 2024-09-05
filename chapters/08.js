registerChapter({ chapter: "08", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Introducere în studiul chimiei");
jade_mixins["subtitle"]("Pagina 8");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p08-at-msd-chim7-introducere',
          top: 8.886,
          left: 24.7879,
          width: 72.4848,
          height: 72.9563,
          type: 'text'
        },
        {
          atom: 'p08-at-msd-chim7-vrei',
          top: 9.6572,
          left: -0.303,
          width: 24.6061,
          height: 71.928
        }
      ],
      image: 'p008.jpg'
    }
  ]);
buf.push("</div>\n");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-h1 msd-blue\">Introducere în studiul chimiei</div><div class=\"text-indent1-5\"><em>Chimia </em>este știința care studiază compoziția, structura, însușirile și transformările substanțelor din care sunt alcătuite corpurile cu viață sau fără viață din lumea înconjurătoare. Obiectivul principal al chimiei îl reprezintă înțelegerea și explicarea acestor transformări și utilizarea lor în practică.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\">Originea cuvântului <em>chimie </em>nu este foarte clar stabilită. Este posibil ca acest cuvânt să fie legat de denumirea vechiului Egipt –<em>Chemeia</em>–, care înseamnă <em>negru</em>, după culoarea mâlului din Valea Nilului. De altfel, vechii egipteni erau foarte preocupați de latura empirică a utilizării diverselor substanțe; era însă o preocupare rezervată, în special, preoților din temple, ceea ce a contribuit la percepția chimiei ca o știință învăluită în mister, chiar mistică.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\"><em>Chimia </em>s-a constituit ca ramură a științei la sfârșitul secolului al XVIII-lea și începutul secolului al XIX-lea, pe de o parte ca urmare a volumului mare de descoperiri din domeniul substanțelor naturale și al substanțelor sintetizate în laborator, iar, pe de altă parte, ca urmare a enunțării principiilor și legilor fundamentale din domeniul transformărilor de substanțe.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\"> Ca urmare a volumului extrem de mare de cunoștințe acumulate, în secolul al XIX-lea se conturează deja două ramuri ale chimiei: <em>chimia anorganică, </em>chimia substanțelor existente preponderent în regnul mineral, și <em>chimia organică</em>, chimia substanțelor sintetizate, cu precădere, în organismele vii.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\">În secolul al XX-lea, se dezvoltă rapid o întreagă industrie chimică, ale cărei produse își găsesc o largă aplicabilitate, contribuind la apariția altor ramuri industriale: metalurgie, energetică, construcții de mașini, aeronautică, construcții, textilă și pielărie, arme și muniții, îngrășăminte chimice și alte produse destinate agriculturii, medicamente, cosmetice, detergenți, lacuri și vopsele.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\">În prezent, chimia este o știință complexă extinsă spre multe alte discipline. Saltul tehnologic și cercetările în domeniu au determinat apariția unor ramuri noi: biochimia, chimia-fizică, chimia farmaceutică, chimia medicală, geochimia, agrochimia, chimia nucleară, radiochimia.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\">Pentru viitor, chimia, împreună cu celelalte ramuri ale științei, este chemată să contribuie la găsirea unor soluții optime pentru marile provocări ale lumii moderne:<ul class=\"disc\"><li>resurse de hrană pentru populația Terrei;</li><li>resurse de apă potabilă și tehnici viabile de desalinizare a apei de mare;</li><li>combustibili mai puțin poluanți sau total nepoluanți;</li><li>îngrășăminte chimice, pesticide, fungicide, mai puțin agresive cu organismul uman și cu mediul înconjurător;</li><li>tehnici optime de reciclare a deșeurilor;</li><li>diminuarea efectului de seră și a încălzirii globale;</li><li>medicamente și produse farmaceutice revoluționare;</li><li>materiale pentru construirea de spații locuibile pe alte planete, în subteran sau în mediul acvatic.</li></ul></div></div>");
}
}, 'intro no-title', 'Înveți lucruri noi','');
}
}, {id: 'p08-at-msd-chim7-introducere'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"><div class=\"col-xs-12 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p8-1.jpg');
buf.push("<div class=\"fs08 text-right\">Pietro Longhi, <em>Alchimistul</em>, cca. 1757</div></div><div class=\"col-xs-12 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p8-2.jpg');
buf.push("<div class=\"fs08 text-right\">Laborator de chimie</div></div><div class=\"col-xs-12 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p8-3.jpg');
buf.push("<div class=\"fs08 text-right\">Restaurant subacvatic</div></div></div></div>");
}
}, 'vrei no-title', 'Dacă vrei să știi mai mult...','');
}
}, {id: 'p08-at-msd-chim7-vrei'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});