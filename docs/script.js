const sessionPlans = {
  prudent: {
    30: {
      kicker: "30 min · Entraînement sans perte",
      title: "Patrouille d'échauffement",
      copy: "Travaillez votre set principal sans transformer la session en préparation interminable.",
      steps: [
        "Équipez votre set T4 habituel et vérifiez vos compétences.",
        "Entrez en zone jaune ou dans une Brume non létale.",
        "Faites deux camps ou dix minutes de combat en monde ouvert.",
        "Rentrez, réparez et identifiez le sort que vous avez le moins bien utilisé.",
      ],
      returnRule: "Retour: dès que les 20 minutes de terrain sont terminées.",
      guide: "soldier-doctrine",
    },
    60: {
      kicker: "60 min · Banque de guerre",
      title: "Financer les prochaines batailles",
      copy: "Une heure calme sert à acheter davantage de liberté pour les sorties risquées.",
      steps: [
        "Choisissez une ressource ou une boucle de monde ouvert familière.",
        "Récoltez, ouvrez les coffres accessibles et vendez ce que vous n'utilisez pas.",
        "Comparez le coût exact de votre paquetage principal au marché.",
        "Achetez un remplacement supplémentaire si votre réserve est insuffisante.",
      ],
      returnRule: "Retour: lorsque votre inventaire vaut au moins le prix d'un set.",
      guide: "silver",
    },
    90: {
      kicker: "90+ min · Formation complète",
      title: "Répéter avant de risquer",
      copy: "Enchaînez économie, entraînement et rangement avec une intention unique: rendre votre prochain départ plus fluide.",
      steps: [
        "Gagnez l'équivalent d'un set avec votre boucle économique.",
        "Jouez quelques combats non létaux en faction, Arène ou Brume.",
        "Préparez trois paquetages identiques dans votre banque.",
        "Notez votre compétence la plus fiable et celle qui mérite encore du travail.",
      ],
      returnRule: "Retour: une fois trois départs prêts dans la banque.",
      guide: "daily-plan",
    },
  },
  progression: {
    30: {
      kicker: "30 min · Front royal",
      title: "Escarmouche de faction",
      copy: "Apprenez à suivre un mouvement collectif sans risquer votre économie.",
      steps: [
        "Activez votre faction et rejoignez un front en zone jaune.",
        "Restez avec un groupe et observez qui engage, qui recule et pourquoi.",
        "Conservez une compétence de fuite au lieu de tout utiliser pour poursuivre.",
        "Rentrez après quelques objectifs, même si le groupe continue.",
      ],
      returnRule: "Retour: après trois objectifs ou votre première mise à terre.",
      guide: "faction-warfare",
    },
    60: {
      kicker: "60 min · Autonomie",
      title: "Reconnaissance dans les Brumes",
      copy: "Les Brumes non létales offrent un bon terrain pour décider seul quand combattre et quand rompre.",
      steps: [
        "Partez avec votre set principal et cherchez une Brume non létale.",
        "Faites les camps simples en observant les noms qui approchent.",
        "Inspectez les joueurs croisés avant d'accepter un combat.",
        "Rentrez vendre, puis ajustez une seule pièce si une faiblesse est évidente.",
      ],
      returnRule: "Retour: après deux camps et au moins une décision de repli.",
      guide: "mists-roads",
    },
    90: {
      kicker: "90+ min · Première opération",
      title: "Faction, économie, débrief",
      copy: "Une sortie longue reste lisible quand elle est divisée en trois blocs simples.",
      steps: [
        "Jouez 45 minutes de faction en zone jaune avec votre paquetage habituel.",
        "Utilisez 25 minutes pour refaire votre réserve d'argent.",
        "Achetez ou préparez un remplacement.",
        "Gardez 10 minutes pour ranger et retenir une seule erreur de combat.",
      ],
      returnRule: "Retour: avant que le dernier remplacement entame votre réserve.",
      guide: "daily-plan",
    },
  },
  lethal: {
    30: {
      kicker: "30 min · Baptême du risque",
      title: "Sortie létale courte",
      copy: "Entrez léger. Votre victoire consiste à apprendre un trajet et à rentrer avant la gourmandise.",
      steps: [
        "Équipez un set que vous pouvez racheter immédiatement.",
        "Choisissez une entrée rouge ou noire et repérez votre voie de retour.",
        "Restez en mouvement, observez les bords d'écran et faites un objectif modeste.",
        "Revenez déposer votre butin sans négocier cinq minutes de plus.",
      ],
      returnRule: "Retour: après 15 minutes dehors ou dès qu'un set est remboursé.",
      guide: "survivre-lethal",
    },
    60: {
      kicker: "60 min · Frontière ouverte",
      title: "Reconnaissance létale disciplinée",
      copy: "Cette mission travaille le calme: préparer la perte, lire le terrain et ne pas surestimer une bonne série.",
      steps: [
        "Partez avec un paquetage économique et un second prêt en banque.",
        "Explorez une Brume létale ou une route noire proche d'une sortie connue.",
        "N'acceptez que les combats dont vous comprenez l'objectif.",
        "Déposez votre butin dès qu'il rembourse votre équipement.",
      ],
      returnRule: "Retour: à un set remboursé, ou immédiatement si votre attention baisse.",
      guide: "survivre-lethal",
    },
    90: {
      kicker: "90+ min · Expédition",
      title: "Deux sorties, jamais une fuite en avant",
      copy: "Divisez l'aventure en deux opérations indépendantes. Une mort ne doit pas dicter la suivante.",
      steps: [
        "Préparez deux sets identiques et fixez une limite de perte avant de partir.",
        "Faites une première sortie létale de 30 à 40 minutes maximum.",
        "Déposez tout, puis prenez cinq minutes pour décider calmement si vous repartez.",
        "Arrêtez après la seconde sortie, que son résultat soit excellent ou mauvais.",
      ],
      returnRule: "Retour: deux sorties maximum et aucune tentative de revanche.",
      guide: "survivre-lethal",
    },
  },
};

const articles = [
  {
    id: "premiers-pas",
    icon: "I",
    category: "fondations",
    rank: "Éclaireur",
    time: "5 min",
    title: "Vos deux premières heures",
    summary: "Une route simple du tutoriel au premier set T4, sans diluer votre progression.",
    body: `
      <h3>Votre objectif réel</h3>
      <p>Le début d'Albion n'est pas une course au meilleur objet. Il sert à comprendre la boucle: porter un équipement, l'utiliser pour gagner de la renommée, débloquer son palier suivant dans le Tableau du destin, puis choisir une direction.</p>
      <ol>
        <li>Terminez le tutoriel et suivez les missions de progression du Journal d'Albion.</li>
        <li>Essayez plusieurs familles d'armes et les trois matières d'armure: tissu, cuir et plaque.</li>
        <li>Débloquez un équipement complet T4. À partir de là, les familles commencent à exprimer leur identité.</li>
        <li>Restez en zone bleue ou jaune le temps de comprendre vos sorts, votre monture et votre capacité de charge.</li>
      </ol>
      <div class="modal-callout">Un set simple que vous comprenez vaut davantage qu'un objet cher équipé trop tôt.</div>
      <h3>Ne vous dispersez pas</h3>
      <p>Albion récompense la spécialisation. Vous pouvez tout essayer, mais choisissez ensuite une arme principale, un casque, une armure et des bottes pour accumuler vos premières spécialisations de combat.</p>
    `,
  },
  {
    id: "destiny-board",
    icon: "✦",
    category: "fondations",
    rank: "Tous rangs",
    time: "6 min",
    title: "Le Tableau du destin",
    summary: "Comprendre renommée, maîtrise, spécialisation et points d'apprentissage.",
    body: `
      <h3>La carte de votre progression</h3>
      <p>Le Tableau du destin couvre vos activités: combat, récolte, raffinage, fabrication, élevage et bien d'autres. Une action donne de la renommée au nœud correspondant. Combattre avec une épée développe les épées; récolter du minerai développe votre pioche.</p>
      <h3>Maîtrise et spécialisation</h3>
      <p>Débloquer une famille vous permet d'équiper un meilleur palier. Monter la spécialisation améliore votre puissance d'objet avec cette branche précise. Pour devenir efficace, investissez d'abord dans ce que vous jouez réellement.</p>
      <h3>Depuis Radiant Wilds</h3>
      <p>La mise à jour du 13 avril 2026 a clarifié l'affichage du Tableau du destin: les nœuds encore inaccessibles sont masqués par défaut et la ligne Faucheur a été supprimée. Certaines anciennes informations en ligne sont donc dépassées.</p>
      <div class="modal-callout">Gardez vos points d'apprentissage pour les progressions les plus lentes ou les plus utiles à votre projet. La récolte est souvent un très bon candidat.</div>
      <a class="modal-source" href="https://steamdb.info/patchnotes/22761388/" target="_blank" rel="noreferrer">Source: Radiant Wilds · 13 avril 2026 ↗</a>
    `,
  },
  {
    id: "build",
    icon: "⚔",
    category: "combat",
    rank: "Éclaireur",
    time: "7 min",
    title: "Construire un build",
    summary: "Votre arme définit l'intention; vos pièces d'armure règlent la manière de l'exécuter.",
    body: `
      <h3>Vous êtes ce que vous portez</h3>
      <p>Albion ne vous enferme pas dans une classe. L'arme fournit vos compétences centrales, tandis que casque, armure, bottes, cape, nourriture et potion ajoutent défense, mobilité, énergie ou pression offensive.</p>
      <h3>Posez quatre questions</h3>
      <ul>
        <li>Quel est mon plan pour gagner: pression, burst, kite, soin, contrôle ou soutien?</li>
        <li>Quelle compétence adverse me fait perdre si je n'ai pas de réponse?</li>
        <li>Ai-je de quoi poursuivre ou quitter un combat?</li>
        <li>Le prix total reste-t-il adapté au risque de mon activité?</li>
      </ul>
      <h3>L'Armurerie en jeu</h3>
      <p>Depuis Radiant Wilds, l'Armurerie recommande des équipements à partir de données réelles de jeu et peut être ouverte depuis le menu joueur ou les détails d'objet. Utilisez-la comme point de départ, puis adaptez selon votre budget et votre activité.</p>
      <div class="modal-callout">Copier un build répond à « quoi porter ». Comprendre son plan répond à « quand le porter ».</div>
      <a class="modal-source" href="https://steamdb.info/patchnotes/22761388/" target="_blank" rel="noreferrer">Source: Radiant Wilds · Armurerie ↗</a>
    `,
  },
  {
    id: "survivre-lethal",
    icon: "▲",
    category: "survie",
    rank: "Aventurier",
    time: "8 min",
    title: "Survivre en zone létale",
    summary: "Préparer vos pertes, repérer les signaux faibles et rentrer avant la mauvaise décision.",
    body: `
      <h3>Acceptez la perte avant le départ</h3>
      <p>En zone rouge et noire, mourir signifie perdre ce que vous portez et transportez. Considérez chaque set comme une dépense opérationnelle. Si sa perte vous empêche de repartir, votre équipement est trop cher.</p>
      <h3>Les réflexes utiles</h3>
      <ul>
        <li>Inspectez les joueurs croisés et retenez les armes capables de vous rattraper.</li>
        <li>Évitez les angles morts autour des sorties, goulets, objectifs et ressources enchantées.</li>
        <li>Gardez votre monture proche et ne la faites pas disparaître sans raison.</li>
        <li>En zone rouge, surveillez le compteur de joueurs hostiles. En zone noire, ce compteur n'existe pas.</li>
        <li>Déposez régulièrement vos gains. La cupidité transforme une bonne session en perte sèche.</li>
      </ul>
      <h3>Votre banque de guerre</h3>
      <p>Préparez plusieurs copies du même set économique. Vous apprendrez plus vite avec dix sorties modestes qu'avec une unique sortie luxueuse jouée dans la peur.</p>
      <div class="modal-callout">Le meilleur moment pour rentrer est souvent celui où vous commencez à négocier avec vous-même pour rester cinq minutes de plus.</div>
    `,
  },
  {
    id: "silver",
    icon: "◈",
    category: "economie",
    rank: "Éclaireur",
    time: "6 min",
    title: "Gagner vos premiers silver",
    summary: "Des revenus sobres, compréhensibles et reproductibles pour financer vos essais.",
    body: `
      <h3>La stabilité avant l'optimisation</h3>
      <p>Vos premières pièces servent à acheter des expériences: équipements de remplacement, outils, monture, nourriture et réparations. Cherchez une boucle que vous êtes capable de refaire, pas un jackpot.</p>
      <ul>
        <li>Récoltez une ressource principale dans le biome approprié et vendez-la sur le marché.</li>
        <li>Tuez les créatures du monde ouvert et ouvrez les coffres accessibles à votre niveau de risque.</li>
        <li>Testez les Brumes non létales pour apprendre les camps et la lecture de carte.</li>
        <li>Comparez les marchés locaux avant de vendre les objets plus précieux.</li>
      </ul>
      <h3>Le bon indicateur</h3>
      <p>Suivez votre revenu net sur une session, après réparations et pertes. Un profit spectaculaire mais rare est moins utile qu'une routine qui finance plusieurs sets.</p>
      <div class="modal-callout">L'argent n'est pas un score. C'est le nombre d'erreurs, d'essais et d'opportunités que votre banque vous autorise.</div>
    `,
  },
  {
    id: "gathering",
    icon: "♧",
    category: "economie",
    rank: "Éclaireur",
    time: "7 min",
    title: "Récolter intelligemment",
    summary: "Choisir une ressource, monter l'outil et comprendre la géographie des biomes.",
    body: `
      <h3>Cinq matières premières</h3>
      <p>Albion repose sur le bois, la pierre, le minerai, la fibre et la peau. Chaque biome favorise trois ressources, avec une ressource dominante. La Forêt favorise le bois; les Hautes-terres la pierre; la Montagne le minerai; la Steppe la peau; le Marais la fibre.</p>
      <h3>Montez une ressource d'abord</h3>
      <p>Vous pouvez transporter plusieurs outils, mais développer une spécialité rend plus vite votre temps rentable. Récoltez surtout au palier de votre outil, profitez des ressources enchantées et ne surchargez pas votre monture.</p>
      <h3>Préparez les zones risquées</h3>
      <p>En zone létale, adaptez votre équipement à la fuite: mobilité, invisibilité si utile, monture remplaçable et trajet de sortie. Une ressource rare ne mérite pas toujours un mauvais engagement.</p>
      <div class="modal-callout">Les points d'apprentissage accélèrent fortement le passage des paliers de récolte, qui demande autrement beaucoup de renommée.</div>
      <a class="modal-source" href="https://www.albiondatabase.com/harvestables" target="_blank" rel="noreferrer">Voir les ressources dans Albion Database ↗</a>
    `,
  },
  {
    id: "craft-focus",
    icon: "◇",
    category: "economie",
    rank: "Aventurier",
    time: "8 min",
    title: "Raffinage, craft et focus",
    summary: "Créer de la marge en utilisant les bonnes villes, les bons coûts et votre spécialisation.",
    body: `
      <h3>Les marchés sont locaux</h3>
      <p>Chaque ville royale possède sa banque, son marché et ses bonus. Les matières raffinées ont une ville privilégiée: bois à Fort Sterling, fibre à Lymhurst, pierre à Bridgewatch, peau à Martlock et minerai à Thetford.</p>
      <h3>Le focus</h3>
      <p>Avec Premium, le focus se régénère avec le temps et améliore le retour de ressources pour le raffinage, la fabrication ou certaines activités d'île. Sa valeur augmente avec votre spécialisation. Évitez de le dépenser automatiquement sans comparer les marges.</p>
      <h3>Avant une production</h3>
      <ul>
        <li>Comparez coût des matières, frais de station et prix de vente réaliste.</li>
        <li>Vérifiez le bonus de la ville directement sur la carte en jeu.</li>
        <li>Regardez le volume vendu, pas uniquement le prix affiché.</li>
        <li>Calculez séparément profit total et profit par point de focus.</li>
      </ul>
      <div class="modal-callout">Raffiner et fabriquer sont deux métiers différents. La meilleure ville pour la matière n'est pas toujours la meilleure ville pour l'objet final.</div>
      <a class="modal-source" href="https://www.albioncodex.com/craft/refining" target="_blank" rel="noreferrer">Calculateur de raffinage Albion Codex ↗</a>
    `,
  },
  {
    id: "mists-roads",
    icon: "◎",
    category: "monde",
    rank: "Aventurier",
    time: "8 min",
    title: "Brumes et Routes d'Avalon",
    summary: "Deux mondes parallèles pour apprendre l'exploration, l'autonomie et le petit groupe.",
    body: `
      <h3>Les Brumes</h3>
      <p>Les Brumes sont accessibles via des feux follets. Elles existent en versions non létales et létales. Les Brumes ordinaires sont pensées pour le solo; les Brumes supérieures accueillent les duos. Camps, créatures, ressources et objectifs y créent des décisions rapides.</p>
      <h3>Brecilien</h3>
      <p>En développant votre faveur dans les Brumes, vous pouvez découvrir Brecilien, la cité cachée liée à ces espaces instables.</p>
      <h3>Les Routes d'Avalon</h3>
      <p>Les portails avaloniens mènent vers un réseau changeant de cartes en zone noire. Le nombre de passages est limité par portail: l'information, l'orientation et la discipline du groupe y comptent énormément.</p>
      <div class="modal-callout">Les Brumes enseignent l'autonomie. Les Routes enseignent l'importance d'une sortie connue avant que le combat commence.</div>
    `,
  },
  {
    id: "pvp-instancie",
    icon: "✕",
    category: "combat",
    rank: "Aventurier",
    time: "8 min",
    title: "Apprendre le PvP sans brûler sa banque",
    summary: "Arènes, Donjons corrompus et Hellgates: choisir un entraînement adapté à votre risque.",
    body: `
      <h3>Arènes</h3>
      <p>L'Arène et l'Arène Cristal permettent de pratiquer sans perdre votre équipement. Depuis Radiant Wilds, une Arène classée 1v1 propose aussi des duels structurés en solo. C'est un bon laboratoire pour observer vos temps de recharge et apprendre à ne pas lancer vos défenses trop tôt.</p>
      <h3>Donjons corrompus</h3>
      <p>Ces donjons solo mêlent PvE et possible duel 1v1. Le niveau Chasseur est non létal; les niveaux supérieurs deviennent létaux. Vous pouvez combattre l'envahisseur ou briser les éclats démoniaques pour tenter de le bannir.</p>
      <h3>Hellgates</h3>
      <p>Les Hellgates combinent PvE et affrontements de groupe. Elles existent dans plusieurs formats et niveaux de risque. Entrez avec un plan commun: cible prioritaire, défensifs à surveiller et condition de repli.</p>
      <div class="modal-callout">Une défaite utile répond à une question précise: quel sort fallait-il conserver, quel espace fallait-il protéger, quel combat fallait-il refuser?</div>
      <a class="modal-source" href="https://www.albiondatabase.com/dungeons" target="_blank" rel="noreferrer">Comparer les donjons dans Albion Database ↗</a>
    `,
  },
  {
    id: "faction-warfare",
    icon: "⚑",
    category: "monde",
    rank: "Aventurier",
    time: "9 min",
    title: "Guerre de factions en 2026",
    summary: "Provinces, forteresses, camps et étendards: une porte d'entrée vers le PvP collectif.",
    body: `
      <h3>Le continent royal en mouvement</h3>
      <p>Realm Divided a restructuré la Guerre de factions autour de Provinces. Quand une Province est contestée, attaquants et défenseurs génèrent du ravitaillement en contrôlant des avant-postes, en ouvrant des coffres de faction et en terminant des camps.</p>
      <h3>Le siège</h3>
      <p>Une victoire des attaquants sur le ravitaillement déclenche le siège d'une Forteresse de faction. Les attaquants brisent portes et murs, tandis que les défenseurs gagnent du temps et peuvent réparer. Les caches d'armes influencent l'affrontement.</p>
      <h3>Depuis Realm Divided Part II</h3>
      <p>Les Étendards de bataille ajoutent des objectifs mobiles de type capture de drapeau. Leur prestige augmente grâce aux combats et prises d'avant-postes avant livraison. L'Assaut de bandits a aussi été remanié en événement en deux phases, avec Caerleon parmi les factions participantes.</p>
      <div class="modal-callout">La Guerre de factions peut se pratiquer dans des Provinces non létales ou létales. Vérifiez la couleur avant de rejoindre le front.</div>
      <a class="modal-source" href="https://steamdb.info/patchnotes/20917209/" target="_blank" rel="noreferrer">Realm Divided · 24 novembre 2025 ↗</a><br />
      <a class="modal-source" href="https://steamdb.info/patchnotes/22052271/" target="_blank" rel="noreferrer">Realm Divided Part II · 23 février 2026 ↗</a>
    `,
  },
  {
    id: "caerleon",
    icon: "☗",
    category: "economie",
    rank: "Vétéran",
    time: "7 min",
    title: "Caerleon et le Marché noir",
    summary: "Comprendre la ville centrale, ses routes rouges et le rôle du Marché noir dans l'économie.",
    body: `
      <h3>Une ville particulière</h3>
      <p>Caerleon se trouve au cœur des zones rouges. Contrairement aux cinq villes royales extérieures, elle est reliée à un environnement létal et n'ouvre pas directement sur un portail classique vers les Outlands.</p>
      <h3>Le Marché noir</h3>
      <p>Le Marché noir achète aux joueurs des équipements qui alimentent ensuite les butins du monde. Il crée une demande pour de nombreux objets fabriqués et constitue une voie commerciale importante.</p>
      <h3>Le transport fait partie du prix</h3>
      <p>Un objet qui semble rentable à vendre à Caerleon doit encore y arriver. Comptez le risque, le temps, votre monture et votre capacité à fractionner les cargaisons. Une marge sur tableur peut disparaître dans une embuscade.</p>
      <div class="modal-callout">Ne transportez jamais l'intégralité de votre capital sur une seule monture simplement parce que le trajet est court.</div>
    `,
  },
  {
    id: "premium-island",
    icon: "⌂",
    category: "economie",
    rank: "Aventurier",
    time: "6 min",
    title: "Premium, île et agriculture",
    summary: "Savoir quand ces outils soutiennent votre projet au lieu de devenir une corvée.",
    body: `
      <h3>Premium est un accélérateur</h3>
      <p>Premium améliore votre progression économique et permet notamment de générer du focus. Il n'est pas nécessaire pour comprendre le jeu ou commencer à participer à ses activités.</p>
      <h3>L'île personnelle</h3>
      <p>Une île peut accueillir des fermes, animaux, bâtiments et ouvriers. Ce n'est pas un revenu automatique: elle demande du capital, du temps et parfois du focus. Construisez-la parce qu'elle sert votre boucle économique.</p>
      <h3>La bonne question</h3>
      <p>Avant d'arroser une culture ou de nourrir un animal, comparez ce que rapporte votre focus avec ce qu'il pourrait rapporter dans votre spécialité de raffinage ou de fabrication.</p>
      <div class="modal-callout">Une routine quotidienne n'est intéressante que si elle reste rentable pour votre argent et agréable pour votre temps.</div>
    `,
  },
  {
    id: "guild",
    icon: "♜",
    category: "fondations",
    rank: "Éclaireur",
    time: "5 min",
    title: "Choisir une guilde",
    summary: "Trouver des compagnons qui ouvrent du contenu sans transformer votre temps de jeu en obligation.",
    body: `
      <h3>Une bonne guilde accélère tout</h3>
      <p>Une guilde active vous donne des partenaires, des explications, des routes, du contenu organisé et parfois un remplacement d'équipement. Elle ne devrait pas vous demander une confiance aveugle.</p>
      <h3>Les bonnes questions</h3>
      <ul>
        <li>Quelles activités sont réellement organisées chaque semaine?</li>
        <li>Quel serveur vocal est utilisé et la présence est-elle obligatoire?</li>
        <li>Existe-t-il des taxes, dons attendus ou systèmes de remplacement?</li>
        <li>Les horaires correspondent-ils à votre vie?</li>
        <li>Les débutants peuvent-ils poser des questions sans se faire rabaisser?</li>
      </ul>
      <div class="modal-callout">Quitter une guilde qui ne vous convient pas n'est pas un échec. Albion est assez vaste pour trouver un groupe à votre mesure.</div>
    `,
  },
  {
    id: "small-scale",
    icon: "△",
    category: "combat",
    rank: "Vétéran",
    time: "8 min",
    title: "Petit groupe et discipline",
    summary: "Passer de plusieurs builds individuels à une composition qui sait ce qu'elle veut accomplir.",
    body: `
      <h3>Donnez une intention au groupe</h3>
      <p>Un petit groupe n'est pas seulement une collection de joueurs équipés. Définissez votre condition de victoire: attraper une cible isolée, tenir une zone, temporiser une pression ou engager sur un contrôle précis.</p>
      <h3>Trois informations avant de partir</h3>
      <ul>
        <li>Qui appelle la cible et qui décide la retraite?</li>
        <li>Quels défensifs majeurs ne doivent pas être superposés?</li>
        <li>Qui dispose de mobilité pour poursuivre, et qui ne l'a pas?</li>
      </ul>
      <h3>Après le combat</h3>
      <p>Analysez une seule cause importante à la fois: mauvais angle, engagement sans information, défensif trop tôt ou cible impossible à finir. Une correction claire vaut mieux qu'une longue liste de reproches.</p>
      <div class="modal-callout">Une composition moyenne bien comprise bat souvent une composition brillante jouée comme cinq solos.</div>
    `,
  },
  {
    id: "guilde-zvz",
    icon: "⚐",
    category: "combat",
    rank: "Vétéran",
    time: "9 min",
    title: "Guilde, Outlands et ZvZ",
    summary: "Découvrir le jeu territorial, les rôles de bataille et la préparation qui précède un combat de masse.",
    body: `
      <h3>Les Outlands</h3>
      <p>Le continent extérieur est constitué de zones noires. Guildes et alliances y contestent territoires, châteaux, ressources et routes. Les villes-portails servent de portes d'entrée, tandis que repaires, refuges et tanières de contrebandiers structurent la logistique.</p>
      <h3>ZvZ: le groupe avant l'ego</h3>
      <p>Dans un combat de masse, votre rôle est plus important que votre compteur personnel. Tank d'engagement, soutien défensif, soin, purge, DPS à distance, battlemount ou scout: chacun protège un tempo collectif.</p>
      <h3>La préparation gagne des batailles</h3>
      <ul>
        <li>Utilisez le build demandé et gardez un remplacement prêt.</li>
        <li>Arrivez avant l'heure avec monture, nourriture, potion et cape correctes.</li>
        <li>Écoutez le shotcaller et limitez les informations inutiles en vocal.</li>
        <li>Après une mort, suivez le plan de regroupement au lieu de repartir seul.</li>
      </ul>
      <div class="modal-callout">Une bataille de masse paraît chaotique jusqu'au jour où vous apprenez à reconnaître ses rythmes: approche, engagement, défensifs, recul, nouveau cycle.</div>
    `,
  },
  {
    id: "smugglers",
    icon: "☒",
    category: "monde",
    rank: "Vétéran",
    time: "6 min",
    title: "Réseau des contrebandiers",
    summary: "Les appuis apparus dans les Outlands avec Rogue Frontier pour les aventuriers autonomes.",
    body: `
      <h3>Rogue Frontier</h3>
      <p>La mise à jour Rogue Frontier du 3 février 2025 a développé les Outlands avec les Tanières de contrebandiers, le Réseau des contrebandiers et leur marché. Ces refuges fournissent des points d'appui supplémentaires, particulièrement utiles aux joueurs solo et petits groupes.</p>
      <h3>Pourquoi cela compte</h3>
      <p>Les Outlands ne se lisent plus uniquement depuis les grandes villes-portails et les infrastructures de guilde. Le réseau ajoute des options de déplacement, de commerce et d'activité qui récompensent une bonne lecture de carte.</p>
      <div class="modal-callout">Un point d'appui n'est pas seulement un lieu sûr. C'est une nouvelle manière de décider où vendre, où repartir et quand changer de région.</div>
      <a class="modal-source" href="https://albiononline.com/update/rogue-frontier" target="_blank" rel="noreferrer">Page officielle Rogue Frontier ↗</a>
    `,
  },
  {
    id: "depths",
    icon: "▼",
    category: "combat",
    rank: "Vétéran",
    time: "6 min",
    title: "Les Profondeurs",
    summary: "Un mode PvPvE d'extraction rapide pour duos et trios, introduit avec Abyssal Depths.",
    body: `
      <h3>Un format d'extraction</h3>
      <p>Les Profondeurs ont été ajoutées le 30 juin 2025 avec Abyssal Depths. Leurs entrées se trouvent dans les Antres des antiquaires des villes du continent royal. Ce contenu combine adversaires, créatures, pression temporelle et décisions d'extraction pour des groupes réduits de deux ou trois joueurs.</p>
      <h3>La règle orange</h3>
      <p>Une mort fait perdre le contenu de l'inventaire, mais pas l'équipement porté. Celui-ci subit des dégâts de durabilité comparables à une mise à terre en zone jaune. Plus vous descendez profondément, plus la récompense et le risque augmentent.</p>
      <h3>Ce que le mode travaille</h3>
      <p>Le format valorise l'évaluation rapide: faut-il continuer à accumuler des récompenses, prendre un combat ou sécuriser une extraction? Préparez une composition capable de se battre sans tout miser sur un unique enchaînement.</p>
      <div class="modal-callout">Dans un mode d'extraction, sortir au bon moment est une victoire. Rester jusqu'au dernier combat n'est pas toujours du courage.</div>
      <a class="modal-source" href="https://albiononline.com/update/abyssal-depths" target="_blank" rel="noreferrer">Page officielle Abyssal Depths ↗</a>
    `,
  },
  {
    id: "mastery",
    icon: "✧",
    category: "fondations",
    rank: "Maître",
    time: "7 min",
    title: "Penser comme un maître",
    summary: "Faire de l'information, du coût et de la transmission vos vrais multiplicateurs de puissance.",
    body: `
      <h3>La maîtrise ne se résume pas à l'IP</h3>
      <p>La puissance d'objet aide, mais elle ne remplace pas l'information. Un joueur expérimenté sait pourquoi il entre, ce qu'il cherche, combien il engage et à quelle condition il se retire.</p>
      <h3>Construisez des options</h3>
      <ul>
        <li>Conservez des sets prêts à jouer dans les villes qui servent vos activités.</li>
        <li>Suivez les mises à jour avant d'investir lourdement dans un marché ou une arme.</li>
        <li>Apprenez un rôle secondaire qui complète votre groupe.</li>
        <li>Enseignez avec des consignes simples et observables.</li>
      </ul>
      <h3>Gardez le jeu vivant</h3>
      <p>Albion est un sandbox. L'optimisation devient stérile si elle efface votre curiosité. Alternez entre projet rentable, terrain d'apprentissage et aventure imprévue.</p>
      <div class="modal-callout">Le sommet n'est pas une destination. C'est le moment où vous savez créer une route pour vous-même et pour les autres.</div>
    `,
  },
  {
    id: "soldier-doctrine",
    icon: "⚔",
    category: "combat",
    rank: "Éclaireur",
    time: "9 min",
    title: "Doctrine du soldat autonome",
    summary: "Construire un premier paquetage de mêlée, le répéter et savoir quand l'adapter.",
    body: `
      <h3>Votre rôle avant votre équipement</h3>
      <p>Dans Albion, soldat n'est pas une classe verrouillée. Pour commencer, votre rôle est celui d'un combattant autonome: vous devez pouvoir terminer un combat simple, survivre à une erreur et quitter une situation défavorable. Choisissez une arme de mêlée dont vous comprenez naturellement le rythme, puis gardez-la assez longtemps pour apprendre ses limites.</p>
      <h3>Un paquetage de départ lisible</h3>
      <p>Pour vos premiers essais, utilisez une arme abordable des familles épée, hache ou masse selon le style qui vous plaît. Ajoutez une défense ou un soin personnel, une option de mobilité et une monture remplaçable. Une cape simple, un sac et une nourriture peu coûteuse suffisent tant que vous apprenez.</p>
      <div class="modal-callout">La fantaisie du soldat ne vous oblige pas à porter quatre pièces de plaque. En solo, une armure plus offensive ou dotée de sustain peut être plus utile. Gardez la plaque pour les rôles de contrôle et de première ligne qui en ont réellement besoin.</div>
      <h3>Trois questions avant chaque départ</h3>
      <ul>
        <li>Quel sort me permet de tenir lorsque l'adversaire engage?</li>
        <li>Quel sort dois-je conserver pour poursuivre ou rompre le combat?</li>
        <li>Puis-je racheter ce set plusieurs fois sans toucher à toute ma banque?</li>
      </ul>
      <h3>Votre évolution naturelle</h3>
      <ol>
        <li>Apprenez un seul set T4 en zone jaune et dans les Brumes non létales.</li>
        <li>Préparez dix remplacements avant de multiplier les sorties létales.</li>
        <li>Utilisez l'Armurerie en jeu pour observer les équipements joués dans votre activité.</li>
        <li>Ajoutez ensuite un second paquetage de groupe: dégâts de mêlée, contrôle de première ligne ou défense selon les besoins de votre guilde.</li>
      </ol>
      <div class="modal-callout">Ne changez pas tout après une défaite. Ajustez une pièce seulement lorsque vous pouvez expliquer le problème qu'elle résout.</div>
    `,
  },
  {
    id: "daily-plan",
    icon: "☷",
    category: "fondations",
    rank: "Tous rangs",
    time: "4 min",
    title: "Planifier une session",
    summary: "Une structure légère pour sortir de ville avec un objectif clair et rentrer satisfait.",
    body: `
      <h3>Avant de vous connecter</h3>
      <p>Décidez de l'intention de la session: gagner de l'argent, monter une spécialisation, pratiquer un matchup, participer à une activité sociale ou explorer. Une seule priorité suffit.</p>
      <h3>Le format 10 / 40 / 10</h3>
      <ul>
        <li>10 minutes pour équiper, comparer rapidement les prix et préparer le retour.</li>
        <li>40 minutes au moins consacrées à la même activité.</li>
        <li>10 minutes pour vendre, déposer et noter ce qui a réellement progressé.</li>
      </ul>
      <h3>Évitez le faux travail</h3>
      <p>Réorganiser votre banque pendant une heure peut être reposant, mais ne le confondez pas avec votre objectif. Le meilleur plan est assez simple pour vous faire quitter la ville.</p>
      <div class="modal-callout">Une session réussie n'a pas besoin d'être spectaculaire. Elle doit rendre la suivante plus intéressante.</div>
    `,
  },
  {
    id: "gear-tiers",
    icon: "T",
    category: "fondations",
    rank: "Éclaireur",
    time: "6 min",
    title: "Lire un objet sans se tromper",
    summary: "Palier, enchantement, qualité et puissance d'objet: comprendre ce que vous achetez vraiment.",
    body: `
      <h3>Le palier n'est qu'une partie de l'histoire</h3>
      <p>Les objets d'Albion possèdent un palier, souvent noté T4 à T8, et peuvent recevoir un niveau d'enchantement affiché après un point: .1, .2, .3 ou .4. Deux armes du même nom peuvent donc avoir une puissance et un prix très différents.</p>
      <h3>Une notation utile</h3>
      <p>Un objet T4.1 est un objet de palier 4 avec un enchantement. Pour comparer deux options, regardez leur puissance d'objet réelle, votre spécialisation, leur prix et le risque de votre activité. Le plus haut chiffre n'est pas automatiquement le meilleur achat.</p>
      <h3>La qualité</h3>
      <p>La qualité apporte aussi de la puissance d'objet. Elle peut rendre un achat intéressant, mais ne laissez pas une petite amélioration statistique multiplier inutilement le prix de votre set de sortie.</p>
      <div class="modal-callout">En zone létale, comparez toujours le gain de puissance avec le nombre de remplacements que le même budget pourrait financer.</div>
    `,
  },
  {
    id: "journal-openworld",
    icon: "J",
    category: "monde",
    rank: "Éclaireur",
    time: "6 min",
    title: "Journal et monde ouvert",
    summary: "Utiliser le Journal d'Albion et les objectifs dynamiques comme une invitation à explorer.",
    body: `
      <h3>Un guide intégré au jeu</h3>
      <p>Introduit avec Paths to Glory en juillet 2024, le Journal d'Albion propose des missions progressivement plus exigeantes dans de nombreuses activités du sandbox. Il sert à découvrir le jeu, suivre vos accomplissements et obtenir des récompenses.</p>
      <h3>Le monde ouvert comme routine</h3>
      <p>Depuis Horizons, le monde ouvert propose davantage d'objectifs dynamiques: camps, repaires de boss et coffres créent des arrêts courts pendant vos déplacements. Utilisez-les pour travailler votre lecture de carte sans transformer chaque sortie en longue expédition.</p>
      <div class="modal-callout">Le Journal est une boussole, pas une liste d'obligations. Choisissez les objectifs qui vous font découvrir une activité qui vous intrigue.</div>
      <a class="modal-source" href="https://albiononline.com/update/paths-to-glory" target="_blank" rel="noreferrer">Page officielle Paths to Glory ↗</a><br />
      <a class="modal-source" href="https://albiononline.com/update/horizons" target="_blank" rel="noreferrer">Page officielle Horizons ↗</a>
    `,
  },
  {
    id: "tracking",
    icon: "⌖",
    category: "monde",
    rank: "Aventurier",
    time: "6 min",
    title: "Pistage et créatures rares",
    summary: "Suivre des traces dans le monde ouvert et garder la tête froide pendant la chasse.",
    body: `
      <h3>La chasse commence par une piste</h3>
      <p>Le Pistage a été introduit avec Wild Blood. Vous cherchez puis suivez les traces de créatures particulières à travers plusieurs régions avant l'affrontement final. Cette activité existe pour joueurs solo et groupes réduits.</p>
      <h3>Une activité de monde ouvert</h3>
      <p>Vous n'êtes pas isolé dans une instance: votre trajet vous expose à d'autres aventuriers et peut modifier votre plan. Gardez un équipement adapté à la chasse, mais aussi une réponse simple si la situation devient défavorable.</p>
      <h3>Pourquoi le pratiquer</h3>
      <p>Le Pistage casse les routes trop prévisibles, entraîne votre vigilance et permet d'obtenir des composants liés à des recettes particulières.</p>
      <div class="modal-callout">Une bonne chasse n'est pas seulement un boss vaincu. C'est une piste suivie sans oublier que le monde continue de bouger autour de vous.</div>
      <a class="modal-source" href="https://albiononline.com/update/wild-blood" target="_blank" rel="noreferrer">Page officielle Wild Blood ↗</a>
    `,
  },
  {
    id: "servers",
    icon: "◎",
    category: "fondations",
    rank: "Éclaireur",
    time: "4 min",
    title: "Choisir son serveur",
    summary: "Europe, Americas ou Asia: commencer dans le monde adapté à votre région et à vos compagnons.",
    body: `
      <h3>Trois mondes séparés</h3>
      <p>Albion Online propose trois serveurs régionaux: Europe, Americas et Asia. Ils possèdent leurs propres économies et progressions. Pour un joueur basé en France, Europe est généralement le choix naturel grâce à sa latence et à ses horaires adaptés.</p>
      <h3>Choisissez aussi vos compagnons</h3>
      <p>Si vous rejoignez des amis déjà installés, demandez leur serveur avant de créer votre personnage principal. Une progression avancée ne se transfère pas simplement d'un monde à l'autre.</p>
      <div class="modal-callout">Le bon serveur est celui où votre connexion est stable et où les personnes avec qui vous voulez jouer peuvent réellement vous rejoindre.</div>
      <a class="modal-source" href="https://albiononline.com/europe" target="_blank" rel="noreferrer">Informations officielles Albion Europe ↗</a>
    `,
  },
  {
    id: "transport",
    icon: "⇄",
    category: "economie",
    rank: "Aventurier",
    time: "7 min",
    title: "Transport et logistique",
    summary: "Déplacer de la valeur sans confondre capacité de charge, marge théorique et risque réel.",
    body: `
      <h3>Le déplacement crée la marge</h3>
      <p>Les marchés et banques étant locaux, un objet peut valoir davantage ailleurs. Cette différence n'est pas un cadeau: elle rémunère votre temps, votre préparation et parfois votre exposition au danger.</p>
      <h3>Adaptez la monture au trajet</h3>
      <ul>
        <li>Pour un trajet sûr, privilégiez la capacité utile et le coût total de l'opération.</li>
        <li>Pour un trajet létal, considérez accélération, résistance, itinéraire et valeur transportée.</li>
        <li>Fractionnez une cargaison qui représente une part trop importante de votre capital.</li>
        <li>Vérifiez le marché d'arrivée avant de partir: une annonce n'est pas nécessairement une vente.</li>
      </ul>
      <h3>Apprenez à renoncer</h3>
      <p>Une marge devient mauvaise lorsque le trajet vous force à risquer votre économie entière. Le transport rentable est reproductible même après une perte occasionnelle.</p>
      <div class="modal-callout">Une cargaison plus petite qui arrive vaut davantage qu'une fortune théorique posée sur une monture trop lente.</div>
    `,
  },
  {
    id: "market-orders",
    icon: "↕",
    category: "economie",
    rank: "Éclaireur",
    time: "7 min",
    title: "Ordres d'achat et de vente",
    summary: "Lire le marché local, éviter les faux prix et distinguer urgence, marge et volume.",
    body: `
      <h3>Deux manières de commercer</h3>
      <p>Une vente immédiate accepte le meilleur ordre d'achat disponible. Un ordre de vente attend qu'un acheteur accepte votre prix. Pour acheter, le raisonnement est symétrique: achat immédiat pour gagner du temps, ordre d'achat pour chercher une meilleure marge.</p>
      <h3>Le piège du premier chiffre</h3>
      <p>Regardez plusieurs lignes du carnet et le volume réellement échangé. Un objet affiché très cher mais presque jamais vendu n'est pas une source de revenu fiable. Les taxes, frais d'installation et trajets doivent rester dans le calcul.</p>
      <ul>
        <li>Vendez immédiatement lorsque la différence est faible et que votre temps vaut davantage.</li>
        <li>Posez un ordre lorsque le volume existe et que la marge justifie l'attente.</li>
        <li>Fractionnez les grosses quantités pour éviter d'immobiliser toute votre trésorerie.</li>
      </ul>
      <div class="modal-callout">Le meilleur prix n'est pas celui que vous voyez. C'est celui auquel une transaction réaliste peut encore se produire.</div>
    `,
  },
  {
    id: "mounts-weight",
    icon: "M",
    category: "survie",
    rank: "Éclaireur",
    time: "6 min",
    title: "Montures, charge et désarçonnement",
    summary: "Choisir une monture selon le trajet et éviter qu'un inventaire trop lourd décide votre défaite.",
    body: `
      <h3>Une monture est un outil</h3>
      <p>Vitesse, accélération, résistance, capacité de charge et prix ne servent pas le même projet. Une monture de collecte, un transport royal et une reconnaissance en Outlands ne demandent pas le même compromis.</p>
      <h3>Votre poids après le désarçonnement</h3>
      <p>Une partie de votre capacité peut dépendre de la proximité ou du type de monture. En zone risquée, vérifiez ce qu'il reste lorsque vous êtes forcé de combattre à pied. Une surcharge transforme une erreur légère en immobilité.</p>
      <ul>
        <li>Gardez la monture proche lorsque vous combattez des créatures.</li>
        <li>Ne transportez pas une fortune uniquement parce que la capacité existe.</li>
        <li>Adaptez le coût de la monture à la valeur et au danger du trajet.</li>
      </ul>
      <div class="modal-callout">Une monture plus chère n'est pas une permission de risquer davantage. C'est parfois seulement un autre outil pour le même trajet.</div>
    `,
  },
  {
    id: "consumables",
    icon: "+",
    category: "combat",
    rank: "Éclaireur",
    time: "6 min",
    title: "Nourriture, potions et capes",
    summary: "Donner une fonction claire aux consommables au lieu de les ajouter machinalement au set.",
    body: `
      <h3>Une pièce du plan de jeu</h3>
      <p>La nourriture fournit un effet durable, la potion répond à un moment précis et la cape ajoute un effet passif ou déclenché. Ces éléments peuvent modifier le rythme d'un combat autant qu'une pièce d'armure.</p>
      <h3>Commencez lisible</h3>
      <p>Pour apprendre, choisissez des consommables abordables dont vous savez expliquer l'utilité. Ajoutez ensuite les options plus coûteuses lorsqu'elles résolvent un problème observé dans votre activité.</p>
      <ul>
        <li>Survie: cherchez de quoi tenir un échange ou corriger une erreur.</li>
        <li>Pression: améliorez les dégâts uniquement si vous savez déjà créer une fenêtre d'attaque.</li>
        <li>Économie: comptez toujours les consommables dans le vrai prix du set.</li>
      </ul>
      <div class="modal-callout">Un consommable oublié dans la barre d'action est un coût. Un consommable utilisé avec une intention est une compétence supplémentaire.</div>
    `,
  },
  {
    id: "fame-credits",
    icon: "✺",
    category: "fondations",
    rank: "Vétéran",
    time: "7 min",
    title: "Crédits de renommée et spécialisation",
    summary: "Réinvestir la progression de combat une fois vos premières branches maîtrisées.",
    body: `
      <h3>Quand une branche est maîtrisée</h3>
      <p>Les activités de combat continuent à nourrir votre progression après les premiers maximums. Les crédits de renommée de combat permettent de réinvestir une partie de cette expérience dans d'autres nœuds de combat du Tableau du destin.</p>
      <h3>Auto-respécialisation</h3>
      <p>L'auto-respécialisation accélère cette conversion au prix d'une dépense d'argent. Activez-la avec un objectif précis et surveillez son coût: elle est puissante, mais elle peut vider une banque si vous la laissez fonctionner sans y penser.</p>
      <div class="modal-callout">Une spécialisation élevée vous donne de la puissance. Un portefeuille de rôles compris vous donne des options.</div>
    `,
  },
  {
    id: "reputation-flags",
    icon: "⚑",
    category: "monde",
    rank: "Aventurier",
    time: "7 min",
    title: "Réputation, drapeaux et hostilité",
    summary: "Comprendre pourquoi le même joueur n'est pas lisible de la même manière en zone jaune, rouge ou noire.",
    body: `
      <h3>Le continent royal a ses règles</h3>
      <p>Sur le continent royal, l'hostilité ouverte et la réputation structurent une partie des rencontres. Une zone rouge signale le nombre de joueurs hostiles présents, ce qui donne une information utile sans raconter toute l'histoire.</p>
      <h3>Les Outlands changent la lecture</h3>
      <p>En zone noire, le compteur d'hostiles disparaît et la réputation ne protège plus votre trajet. La carte, les sorties, les objectifs proches et les comportements deviennent vos principaux indices.</p>
      <div class="modal-callout">Un compteur à zéro réduit une inconnue. Il ne remplace jamais l'observation du terrain.</div>
    `,
  },
  {
    id: "hideouts-territories",
    icon: "⌂",
    category: "monde",
    rank: "Vétéran",
    time: "8 min",
    title: "Territoires, repaires et logistique",
    summary: "Lire les Outlands comme un espace organisé par les routes, les points d'appui et les intérêts de guilde.",
    body: `
      <h3>La carte politique existe</h3>
      <p>Les Outlands ne sont pas seulement une collection de zones noires. Les territoires, châteaux, repaires de guilde et points d'appui influencent les trajets, les regroupements et la présence probable de groupes organisés.</p>
      <h3>Ce que voit un éclaireur</h3>
      <ul>
        <li>Une sortie très fréquentée annonce souvent une route logistique.</li>
        <li>Un objectif proche attire des joueurs même lorsque la zone paraissait calme.</li>
        <li>Un trajet simple à l'aller peut devenir dangereux au retour si l'horaire change.</li>
      </ul>
      <div class="modal-callout">Dans les Outlands, apprendre une région vaut souvent davantage que traverser dix cartes sans comprendre qui y circule.</div>
    `,
  },
  {
    id: "resource-biomes",
    icon: "♧",
    category: "economie",
    rank: "Éclaireur",
    time: "6 min",
    title: "Biomes et ressources",
    summary: "Retenir la géographie économique du continent royal sans apprendre une carte par cœur.",
    body: `
      <h3>Cinq biomes, cinq dominantes</h3>
      <p>Forêt pour le bois, Montagne pour le minerai, Hautes-terres pour la pierre, Steppe pour la peau et Marais pour la fibre: cette logique vous aide à choisir une ville de départ et une boucle de collecte.</p>
      <h3>Trois ressources par biome</h3>
      <p>Chaque biome ne contient pas uniquement sa dominante. Il propose plusieurs ressources avec des abondances différentes. Observez votre trajet réel avant d'acheter trois outils et de ralentir votre progression principale.</p>
      <div class="modal-callout">Une spécialité n'interdit pas la curiosité. Elle vous donne simplement une boucle économique que vous savez relancer quand votre banque en a besoin.</div>
    `,
  },
  {
    id: "brecilien",
    icon: "◎",
    category: "monde",
    rank: "Aventurier",
    time: "6 min",
    title: "Brecilien, la ville cachée",
    summary: "Comprendre la place singulière de la cité liée aux Brumes et à l'exploration instable.",
    body: `
      <h3>Une ville que l'on découvre</h3>
      <p>Brecilien est liée aux Brumes. Contrairement aux villes royales que vous rejoignez directement par la carte classique, elle s'inscrit dans une progression d'exploration et devient un point d'appui particulier pour les aventuriers qui fréquentent ces espaces.</p>
      <h3>Une logique différente</h3>
      <p>Sa valeur vient moins d'un trajet fixe que de son rapport aux Brumes et aux Routes d'Avalon. Avant d'y déplacer de la valeur, comprenez bien vos sorties possibles et le caractère local des banques et marchés.</p>
      <div class="modal-callout">Une nouvelle ville n'est jamais seulement un décor. Dans Albion, elle modifie votre manière de stocker, vendre et préparer le prochain départ.</div>
    `,
  },
  {
    id: "avalon-portals",
    icon: "◉",
    category: "survie",
    rank: "Aventurier",
    time: "7 min",
    title: "Portails avaloniens et orientation",
    summary: "Préparer une traversée des Routes sans confondre curiosité, capacité de passage et voie de retour.",
    body: `
      <h3>Un réseau mouvant</h3>
      <p>Les Routes d'Avalon relient temporairement des cartes variées à travers des portails dont la capacité est limitée. Un itinéraire valable maintenant ne devient pas une autoroute permanente.</p>
      <h3>Avant d'entrer</h3>
      <ul>
        <li>Notez votre portail d'origine et l'état de sa capacité.</li>
        <li>Gardez assez de temps pour trouver une alternative.</li>
        <li>Évitez de disperser le groupe de part et d'autre d'un passage sans plan.</li>
        <li>Considérez toute route comme une exploration, pas comme une promesse de retour identique.</li>
      </ul>
      <div class="modal-callout">Dans les Routes, l'orientation n'est pas du confort. C'est une partie de votre équipement.</div>
    `,
  },
  {
    id: "death-review",
    icon: "×",
    category: "combat",
    rank: "Tous rangs",
    time: "5 min",
    title: "Débriefer une défaite",
    summary: "Transformer une mort en correction concrète au lieu de changer tout le build sous le coup de l'agacement.",
    body: `
      <h3>Posez une seule question</h3>
      <p>Commencez par l'erreur la plus tôt dans la chaîne: mauvais trajet, information ignorée, combat accepté sans raison, sort défensif trop vite dépensé ou poursuite trop longue. La dernière seconde n'est pas toujours la cause réelle.</p>
      <h3>Conservez un changement observable</h3>
      <ul>
        <li>Je garde ma mobilité tant que la sortie adverse n'est pas connue.</li>
        <li>Je dépose mon butin dès que mon set est remboursé.</li>
        <li>Je refuse les combats près d'une sortie sans vision suffisante.</li>
        <li>Je demande qui appelle la retraite avant le départ du groupe.</li>
      </ul>
      <div class="modal-callout">Une mort coûte un set. Une mort non analysée coûte aussi la prochaine.</div>
    `,
  },
  {
    id: "party-roles",
    icon: "△",
    category: "combat",
    rank: "Aventurier",
    time: "7 min",
    title: "Les rôles d'un groupe",
    summary: "Identifier dégâts, soin, contrôle, soutien et appel de cible avant que le premier combat commence.",
    body: `
      <h3>Un rôle est une promesse</h3>
      <p>Un groupe solide sait qui engage, qui protège, qui soigne, qui purge, qui apporte les dégâts et qui décide de rompre. Le build n'est utile que si les autres comprennent ce qu'ils peuvent attendre de vous.</p>
      <h3>La communication minimale</h3>
      <ul>
        <li>Annoncez vos temps de recharge importants plutôt que chaque détail.</li>
        <li>Ne superposez pas toutes les défenses sur la première pression.</li>
        <li>Suivez une cible commune lorsque le groupe cherche à finir un adversaire.</li>
        <li>Décidez avant la sortie qui tranche lorsque le repli devient nécessaire.</li>
      </ul>
      <div class="modal-callout">Jouer ensemble ne signifie pas parler davantage. Cela signifie partager les quelques informations qui changent vraiment la décision.</div>
    `,
  },
  {
    id: "account-security",
    icon: "!",
    category: "fondations",
    rank: "Tous rangs",
    time: "5 min",
    title: "Sécurité et arnaques",
    summary: "Protéger votre compte et garder une distance saine face aux offres trop belles pour être vraies.",
    body: `
      <h3>Ne donnez jamais vos identifiants</h3>
      <p>Un outil communautaire sérieux n'a pas besoin de votre mot de passe Albion. Utilisez les canaux officiels pour votre compte et méfiez-vous des liens reçus en message privé, cadeaux miraculeux et demandes urgentes.</p>
      <h3>Dans le jeu aussi</h3>
      <ul>
        <li>Relisez chaque échange avant de confirmer.</li>
        <li>Vérifiez quantité, qualité, enchantement et prix total.</li>
        <li>Ne transportez pas la banque d'une autre personne sur une simple promesse.</li>
        <li>Demandez les règles d'une guilde avant de contribuer à un fonds commun.</li>
      </ul>
      <div class="modal-callout">La précipitation est souvent le vrai produit vendu par une arnaque.</div>
    `,
  },
  {
    id: "overcharge",
    icon: "⚡",
    category: "combat",
    rank: "Vétéran",
    time: "6 min",
    title: "Surcharger son équipement",
    summary: "Utiliser la surcharge comme décision tactique, pas comme bouton réflexe à chaque rencontre.",
    body: `
      <h3>Gagner de la puissance temporaire</h3>
      <p>La surcharge consomme de l'énergie siphonnée pour augmenter temporairement la puissance de votre équipement. Elle peut modifier un combat important, mais elle expose aussi les pièces concernées à un risque de casse lorsque l'effet se termine.</p>
      <h3>Une décision économique</h3>
      <p>Demandez-vous si l'objectif, l'équipement adverse et votre possibilité réelle de gagner justifient ce coût potentiel. Surcharger pour éviter une perte déjà probable peut être rationnel; le faire automatiquement détruit votre marge.</p>
      <div class="modal-callout">Une ressource tactique devient chère lorsqu'elle remplace la réflexion au lieu de soutenir une vraie fenêtre d'action.</div>
    `,
  },
  {
    id: "albion-journal",
    icon: "J",
    category: "fondations",
    rank: "Tous rangs",
    time: "6 min",
    title: "Utiliser le Journal sans subir une checklist",
    summary: "Profiter du guide intégré au jeu comme invitation à essayer, puis choisir vos propres projets.",
    body: `
      <h3>Une carte de visite du sandbox</h3>
      <p>Le Journal d'Albion rassemble des objectifs dans de nombreuses activités. Il montre ce qui existe, fournit des récompenses et donne une première structure lorsque le monde paraît trop ouvert.</p>
      <h3>Gardez votre liberté</h3>
      <p>Ne terminez pas une activité que vous détestez uniquement pour cocher une case. Utilisez le Journal pour repérer une possibilité, essayez-la avec curiosité, puis décidez si elle mérite une place dans votre semaine.</p>
      <div class="modal-callout">Le sandbox commence vraiment lorsque la liste du jeu devient une source d'idées et cesse d'être votre maître d'agenda.</div>
    `,
  },
  {
    id: "radiant-wilds",
    icon: "✦",
    category: "monde",
    rank: "Tous rangs",
    time: "7 min",
    title: "Radiant Wilds : ce qu'il faut retenir",
    summary: "Les changements visibles et pratiques de la mise à jour majeure du 13 avril 2026.",
    body: `
      <h3>Une refonte visible</h3>
      <p>Radiant Wilds a retravaillé l'apparence des biomes, amélioré les performances et apporté plusieurs évolutions d'interface. Pour un joueur qui revient après une pause, le monde paraît familier mais sensiblement plus lisible et détaillé.</p>
      <h3>Des outils pour mieux décider</h3>
      <p>L'Armurerie s'appuie sur des données d'utilisation réelles pour recommander des équipements. Le Tableau du destin masque par défaut les nœuds encore inaccessibles afin de clarifier la progression. Une Arène classée 1v1 ajoute aussi un terrain d'entraînement structuré.</p>
      <div class="modal-callout">Une recommandation de build est un point de départ. Le bon équipement reste celui dont vous comprenez le rôle, le prix et le terrain d'emploi.</div>
      <a class="modal-source" href="https://steamdb.info/patchnotes/22761388/" target="_blank" rel="noreferrer">Notes Radiant Wilds · 13 avril 2026 ↗</a>
    `,
  },
];

const anecdotes = [
  {
    category: "economie",
    tag: "Économie vivante",
    title: "Le butin passe aussi par le Marché noir",
    copy: "À Caerleon, le Marché noir achète des objets fabriqués par les joueurs afin d'alimenter une partie des récompenses du monde. Le loot et l'artisanat ne vivent donc pas dans deux économies séparées.",
    article: "caerleon",
  },
  {
    category: "economie",
    tag: "Marchés locaux",
    title: "Changer de ville crée déjà une profession",
    copy: "Les banques et marchés ne sont pas partagés. Un simple trajet peut devenir une activité économique, car la marge rémunère le temps, l'information et parfois le danger.",
    article: "transport",
  },
  {
    category: "combat",
    tag: "Identité du personnage",
    title: "Albion n'a pas de classe verrouillée",
    copy: "Votre arme fournit le cœur du plan de jeu et vos pièces d'armure ajoutent leurs propres sorts. Changer de rôle consiste d'abord à changer ce que vous portez.",
    article: "build",
  },
  {
    category: "monde",
    tag: "Lecture du danger",
    title: "Le compteur d'hostiles disparaît en zone noire",
    copy: "La zone rouge donne encore un nombre de joueurs hostiles. Dans les Outlands, cette information disparaît : l'observation de la carte et des comportements prend le relais.",
    article: "reputation-flags",
  },
  {
    category: "monde",
    tag: "Brumes",
    title: "Solo et duo ne traversent pas les mêmes Brumes",
    copy: "Les Brumes ordinaires structurent les aventures solo. Les Brumes supérieures ouvrent une version pensée pour les duos, avec une dynamique de rencontre différente.",
    article: "mists-roads",
  },
  {
    category: "monde",
    tag: "Routes d'Avalon",
    title: "Un portail n'est pas un passage infini",
    copy: "Les portails avaloniens possèdent une capacité limitée. L'orientation et le regroupement comptent, car une partie du groupe peut se retrouver séparée au mauvais moment.",
    article: "avalon-portals",
  },
  {
    category: "histoire",
    tag: "16 octobre 2023",
    title: "Wild Blood a transformé la chasse",
    copy: "L'arrivée du Pistage a ajouté une activité de monde ouvert centrée sur la recherche de créatures et des composants particuliers, aux côtés des armes métamorphes.",
    article: "tracking",
  },
  {
    category: "histoire",
    tag: "22 juillet 2024",
    title: "Le Journal est un ajout relativement récent",
    copy: "Paths to Glory a introduit le Journal d'Albion comme système d'objectifs et de récompenses. Il sert autant à guider les nouveaux venus qu'à suggérer des détours aux vétérans.",
    article: "journal-openworld",
  },
  {
    category: "histoire",
    tag: "3 février 2025",
    title: "Les Outlands ont gagné un réseau clandestin",
    copy: "Rogue Frontier a ajouté les Tanières et le Réseau des contrebandiers, donnant aux joueurs autonomes davantage de points d'appui dans les zones noires.",
    article: "smugglers",
  },
  {
    category: "combat",
    tag: "30 juin 2025",
    title: "Les Profondeurs ont inventé une règle orange",
    copy: "Dans les Profondeurs, une mort fait perdre l'inventaire mais conserve l'équipement porté, qui subit des dégâts de durabilité. Cette règle se place entre jaune et rouge.",
    article: "depths",
  },
  {
    category: "histoire",
    tag: "13 avril 2026",
    title: "Radiant Wilds ne change pas que le décor",
    copy: "La refonte visuelle des biomes est accompagnée d'améliorations de performance, d'une Armurerie nourrie par les usages réels et d'une Arène classée 1v1.",
    article: "radiant-wilds",
  },
  {
    category: "combat",
    tag: "Équipement",
    title: "La qualité n'est qu'une partie du prix",
    copy: "Palier, enchantement, qualité, spécialisation et contexte déterminent ensemble l'intérêt d'un objet. Un chiffre supérieur n'est pas automatiquement une meilleure décision.",
    article: "gear-tiers",
  },
  {
    category: "economie",
    tag: "Raffinage",
    title: "Chaque ville royale a sa matière favorite",
    copy: "Fort Sterling pour le bois, Lymhurst pour la fibre, Bridgewatch pour la pierre, Martlock pour la peau et Thetford pour le minerai : la géographie influence directement les routes marchandes.",
    article: "craft-focus",
  },
  {
    category: "combat",
    tag: "Progression",
    title: "Une branche maîtrisée continue à servir",
    copy: "Les crédits de renommée de combat permettent de réinvestir une partie de votre progression dans d'autres nœuds. Votre premier rôle solide peut donc aider à construire le suivant.",
    article: "fame-credits",
  },
  {
    category: "monde",
    tag: "Caerleon",
    title: "La ville centrale ne ressemble pas aux cinq autres",
    copy: "Caerleon se trouve au cœur des zones rouges et héberge le Marché noir. Sa position en fait une destination commerciale autant qu'une décision de transport.",
    article: "caerleon",
  },
  {
    category: "combat",
    tag: "Surcharge",
    title: "Plus de puissance peut casser de l'équipement",
    copy: "La surcharge consomme de l'énergie siphonnée et augmente temporairement la puissance d'objet, avec un risque de casse à la fin. Même un bonus tactique garde un coût économique.",
    article: "overcharge",
  },
  {
    category: "monde",
    tag: "Brecilien",
    title: "Toutes les villes ne s'atteignent pas par une route classique",
    copy: "Brecilien est liée aux Brumes et se découvre dans cette logique d'exploration instable. Elle rappelle que la géographie d'Albion est aussi un système de jeu.",
    article: "brecilien",
  },
  {
    category: "economie",
    tag: "Psychologie",
    title: "Rentrer est une compétence économique",
    copy: "Déposer régulièrement le butin transforme une bonne occasion en progression réelle. Le dernier coffre et les cinq minutes de trop coûtent souvent davantage que prévu.",
    article: "survivre-lethal",
  },
];

const checklistItems = [
  ["tutorial", "Terminer le tutoriel", "Suivre l'introduction et ouvrir le Journal d'Albion."],
  ["tier4", "Débloquer votre set T4", "Choisir une arme de mêlée et un paquetage simple à répéter."],
  ["market", "Chiffrer votre paquetage", "Connaître son prix total au marché avant de le risquer."],
  ["yellow", "Patrouiller en zone jaune", "Tester tenue, poursuite et fuite sans perdre votre équipement."],
  ["mist", "Explorer une Brume", "Finir deux camps non létaux et refuser au moins un mauvais combat."],
  ["faction", "Rejoindre un front de faction", "Suivre un groupe en zone jaune et observer ses mouvements."],
  ["replacement", "Préparer trois sets", "Pouvoir repartir rapidement après une défaite."],
  ["warbank", "Financer dix sets", "Construire votre banque de guerre avant le luxe."],
  ["lethal", "Faire une sortie létale", "Entrer léger, fixer votre retour et accepter la perte."],
  ["guild", "Parler à une guilde", "Poser des questions sur ses activités et ses attentes."],
  ["orders", "Tester un ordre de marché", "Comparer vente immédiate, ordre de vente, frais et volume."],
  ["mount", "Vérifier votre charge à pied", "Connaître votre mobilité réelle après un désarçonnement."],
  ["food", "Équiper des consommables utiles", "Choisir une nourriture et une potion dont vous savez expliquer le rôle."],
  ["return", "Fixer une règle de retour", "Décider avant la sortie quand déposer le butin ou arrêter la session."],
  ["review", "Débriefer une défaite", "Noter une décision précise à modifier lors de la prochaine sortie."],
  ["bookmark", "Créer votre carnet Atlas", "Marquer quelques fiches utiles à votre activité préférée."],
];

const glossary = [
  ["Fame", "Renommée gagnée en jouant. Elle alimente les nœuds du Tableau du destin."],
  ["IP", "Item Power, ou puissance d'objet. Un résumé de la force statistique de votre équipement."],
  ["Spec", "Spécialisation dans une branche précise. Elle augmente notamment votre IP avec cet objet."],
  ["Full loot", "À la mort, équipement et inventaire peuvent être récupérés par les autres joueurs."],
  ["BZ", "Black Zone, zone noire létale des Outlands ou espaces assimilés."],
  ["RZ / YZ", "Red Zone et Yellow Zone: zone rouge létale, zone jaune non létale."],
  ["ZvZ", "Zerg versus Zerg. Combat de masse entre groupes organisés."],
  ["Kite", "Maintenir la distance pour infliger des dégâts tout en évitant la réponse adverse."],
  ["Gank", "Embuscade visant à attraper rapidement une cible, souvent pendant un déplacement."],
  ["Focus", "Ressource liée à Premium utilisée pour améliorer certains rendements économiques."],
  ["Reroll", "Changer ou relancer la qualité d'un objet, ou parfois changer de rôle selon le contexte."],
  ["CTA", "Call to Arms. Rassemblement demandé par une guilde ou alliance pour une opération."],
  ["AOE", "Area of Effect. Sort ou effet qui touche une zone et potentiellement plusieurs cibles."],
  ["CC", "Crowd Control. Contrôle qui gêne le mouvement ou l'action: ralentissement, silence, étourdissement, etc."],
  ["DPS", "Damage Per Second. Désigne les dégâts infligés ou, par extension, un rôle offensif."],
  ["Sustain", "Capacité à tenir dans la durée grâce aux soins, boucliers, résistances ou ressources."],
  ["Burst", "Fenêtre courte pendant laquelle un build cherche à infliger beaucoup de dégâts."],
  ["Peel", "Action de protéger un allié en contrôlant ou repoussant l'adversaire qui le menace."],
  ["Purge", "Effet qui retire certains bonus actifs d'une cible adverse."],
  ["Dispel", "Effet qui retire certains contrôles ou altérations appliqués à un allié."],
  ["Clap", "Dégâts de zone synchronisés pour frapper fortement un groupe compact."],
  ["Shotcaller", "Joueur qui donne les décisions principales d'un groupe pendant une opération."],
  ["HO", "Hideout, ou repaire. Point d'appui construit par une guilde dans les Outlands."],
  ["RMT", "Real Money Trading. Échange interdit de monnaie ou services en jeu contre de l'argent réel."],
  ["Trash rate", "Part des objets détruits lors d'une mort au lieu d'être récupérables comme butin."],
  ["Softcap", "Réduction progressive de la puissance au-delà d'un seuil fixé par un contenu."],
  ["OC", "Overcharge, ou surcharge. Bonus temporaire de puissance obtenu contre de l'énergie siphonnée."],
  ["Rat", "Terme communautaire pour un style opportuniste qui évite souvent le combat direct afin de récupérer une récompense."],
];

const ui = {
  articleGrid: document.querySelector("#article-grid"),
  search: document.querySelector("#article-search"),
  filters: document.querySelector("#article-filters"),
  empty: document.querySelector("#empty-state"),
  modal: document.querySelector("#article-modal"),
  modalContent: document.querySelector("#modal-content"),
  modalClose: document.querySelector("#modal-close"),
  bookmarkCount: document.querySelector("#bookmark-count"),
  openBookmarks: document.querySelector("#open-bookmarks"),
  checklist: document.querySelector("#starter-checklist"),
  checklistPercent: document.querySelector("#checklist-percent"),
  checklistMessage: document.querySelector("#checklist-message"),
  scoreRing: document.querySelector("#score-ring"),
  glossary: document.querySelector("#glossary-grid"),
  readingProgress: document.querySelector("#reading-progress"),
  sidebarProgress: document.querySelector("#sidebar-progress"),
  sidebarProgressText: document.querySelector("#sidebar-progress-text"),
  menuToggle: document.querySelector("#menu-toggle"),
  sidebar: document.querySelector("#sidebar"),
  installApp: document.querySelector("#install-app"),
  missionKicker: document.querySelector("#mission-kicker"),
  missionTitle: document.querySelector("#mission-title"),
  missionCopy: document.querySelector("#mission-copy"),
  missionSteps: document.querySelector("#mission-steps"),
  missionReturn: document.querySelector("#mission-return"),
  missionGuide: document.querySelector("#mission-guide"),
  anecdoteGrid: document.querySelector("#anecdote-grid"),
  anecdoteFilters: document.querySelector("#anecdote-filters"),
  articleCount: document.querySelector("#article-count"),
  anecdoteCount: document.querySelector("#anecdote-count"),
};

let activeCategory = "all";
let activeAnecdoteCategory = "all";
let bookmarkOnly = false;
let deferredInstallPrompt = null;
let sessionTime = localStorage.getItem("albion-session-time") || "30";
let sessionRisk = localStorage.getItem("albion-session-risk") || "prudent";
const bookmarks = new Set(JSON.parse(localStorage.getItem("albion-bookmarks") || "[]"));
const completedTasks = new Set(JSON.parse(localStorage.getItem("albion-checklist") || "[]"));

function renderMission() {
  const mission = sessionPlans[sessionRisk][sessionTime];
  ui.missionKicker.textContent = mission.kicker;
  ui.missionTitle.textContent = mission.title;
  ui.missionCopy.textContent = mission.copy;
  ui.missionSteps.innerHTML = mission.steps.map((step) => `<li>${step}</li>`).join("");
  ui.missionReturn.textContent = mission.returnRule;
  ui.missionGuide.dataset.article = mission.guide;
  document.querySelectorAll("[data-session-time]").forEach((button) => {
    button.classList.toggle("active", button.dataset.sessionTime === sessionTime);
  });
  document.querySelectorAll("[data-session-risk]").forEach((button) => {
    button.classList.toggle("active", button.dataset.sessionRisk === sessionRisk);
  });
}

function getFilteredArticles() {
  const query = ui.search.value.trim().toLocaleLowerCase("fr");
  return articles.filter((article) => {
    const categoryMatches = activeCategory === "all" || article.category === activeCategory;
    const queryMatches = `${article.title} ${article.summary} ${article.rank} ${article.category} ${article.body}`
      .toLocaleLowerCase("fr")
      .includes(query);
    const bookmarkMatches = !bookmarkOnly || bookmarks.has(article.id);
    return categoryMatches && queryMatches && bookmarkMatches;
  });
}

function renderArticles() {
  const filteredArticles = getFilteredArticles();
  ui.articleGrid.innerHTML = filteredArticles
    .map(
      (article) => `
        <article class="article-card open-article" data-article="${article.id}">
          <div class="article-top">
            <span class="article-icon">${article.icon}</span>
            <button class="bookmark-button ${bookmarks.has(article.id) ? "saved" : ""}" data-bookmark="${article.id}" type="button" aria-label="Ajouter ${article.title} au carnet">◆</button>
          </div>
          <small>${article.category} · ${article.rank}</small>
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
          <div class="article-footer"><span>${article.time} de lecture</span><b>→</b></div>
        </article>
      `,
    )
    .join("");
  ui.empty.hidden = filteredArticles.length !== 0;
  ui.bookmarkCount.textContent = bookmarks.size;
  ui.articleCount.textContent = articles.length;
}

function renderAnecdotes() {
  const filteredAnecdotes = anecdotes.filter(
    ({ category }) => activeAnecdoteCategory === "all" || activeAnecdoteCategory === category,
  );
  ui.anecdoteGrid.innerHTML = filteredAnecdotes
    .map(
      (anecdote, index) => `
        <article class="anecdote-card">
          <div><small>${anecdote.tag}</small><b>${String(index + 1).padStart(2, "0")}</b></div>
          <h3>${anecdote.title}</h3>
          <p>${anecdote.copy}</p>
          <button class="text-link open-article" data-article="${anecdote.article}" type="button">Approfondir <b>→</b></button>
        </article>
      `,
    )
    .join("");
  ui.anecdoteCount.textContent = anecdotes.length;
}

function openArticle(articleId) {
  const article = articles.find(({ id }) => id === articleId);
  if (!article) return;
  ui.modalContent.innerHTML = `
    <div class="modal-hero">
      <small>${article.category} · ${article.rank} · ${article.time} de lecture</small>
      <h2>${article.title}</h2>
      <p>${article.summary}</p>
    </div>
    <div class="modal-body">${article.body}</div>
  `;
  ui.modal.showModal();
  document.body.classList.add("modal-open");
}

function closeModal() {
  ui.modal.close();
  document.body.classList.remove("modal-open");
}

function toggleBookmark(articleId) {
  if (bookmarks.has(articleId)) bookmarks.delete(articleId);
  else bookmarks.add(articleId);
  localStorage.setItem("albion-bookmarks", JSON.stringify([...bookmarks]));
  renderArticles();
}

function renderChecklist() {
  ui.checklist.innerHTML = checklistItems
    .map(
      ([id, title, copy]) => `
      <label class="check-item ${completedTasks.has(id) ? "done" : ""}">
        <input type="checkbox" data-check="${id}" ${completedTasks.has(id) ? "checked" : ""} />
        <span><strong>${title}</strong><span>${copy}</span></span>
      </label>
    `,
    )
    .join("");
  const percent = Math.round((completedTasks.size / checklistItems.length) * 100);
  ui.checklistPercent.textContent = `${percent}%`;
  ui.scoreRing.style.setProperty("--score", `${percent}%`);
  ui.checklistMessage.textContent =
    percent === 100
      ? "Votre paquetage est prêt. La route vous appartient."
      : percent >= 50
        ? "Vos fondations tiennent. Continuez à élargir votre terrain de jeu."
        : "Posez les fondations de votre aventure.";
}

function renderGlossary() {
  ui.glossary.innerHTML = glossary
    .map(([term, definition]) => `<article><h3>${term}</h3><p>${definition}</p></article>`)
    .join("");
}

function updateReadingProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? Math.min(100, Math.round((window.scrollY / maxScroll) * 100)) : 0;
  ui.readingProgress.style.width = `${progress}%`;
  ui.sidebarProgress.style.width = `${progress}%`;
  ui.sidebarProgressText.textContent = `${progress}% exploré`;
}

function updateActiveSection() {
  const sections = [...document.querySelectorAll("main section[id], main[id]")];
  const navLinks = [...document.querySelectorAll(".side-nav a")];
  let currentId = "top";
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 140) currentId = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });
}

document.querySelectorAll("[data-session-time]").forEach((button) => {
  button.addEventListener("click", () => {
    sessionTime = button.dataset.sessionTime;
    localStorage.setItem("albion-session-time", sessionTime);
    renderMission();
  });
});

document.querySelectorAll("[data-session-risk]").forEach((button) => {
  button.addEventListener("click", () => {
    sessionRisk = button.dataset.sessionRisk;
    localStorage.setItem("albion-session-risk", sessionRisk);
    renderMission();
  });
});

ui.search.addEventListener("input", renderArticles);

ui.filters.addEventListener("click", (event) => {
  const filter = event.target.closest(".filter");
  if (!filter) return;
  activeCategory = filter.dataset.category;
  bookmarkOnly = false;
  document.querySelector(".filter.active").classList.remove("active");
  filter.classList.add("active");
  renderArticles();
});

ui.anecdoteFilters.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-anecdote-category]");
  if (!filter) return;
  activeAnecdoteCategory = filter.dataset.anecdoteCategory;
  ui.anecdoteFilters.querySelector(".active").classList.remove("active");
  filter.classList.add("active");
  renderAnecdotes();
});

document.addEventListener("click", (event) => {
  const bookmarkButton = event.target.closest("[data-bookmark]");
  if (bookmarkButton) {
    event.stopPropagation();
    toggleBookmark(bookmarkButton.dataset.bookmark);
    return;
  }
  const articleLink = event.target.closest(".open-article");
  if (articleLink) openArticle(articleLink.dataset.article);
});

ui.modalClose.addEventListener("click", closeModal);
ui.modal.addEventListener("click", (event) => {
  if (event.target === ui.modal) closeModal();
});

ui.openBookmarks.addEventListener("click", () => {
  bookmarkOnly = !bookmarkOnly;
  activeCategory = "all";
  document.querySelector(".filter.active").classList.remove("active");
  document.querySelector('[data-category="all"]').classList.add("active");
  ui.openBookmarks.classList.toggle("active", bookmarkOnly);
  document.querySelector("#codex").scrollIntoView({ behavior: "smooth" });
  renderArticles();
});

ui.checklist.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-check]");
  if (!checkbox) return;
  if (checkbox.checked) completedTasks.add(checkbox.dataset.check);
  else completedTasks.delete(checkbox.dataset.check);
  localStorage.setItem("albion-checklist", JSON.stringify([...completedTasks]));
  renderChecklist();
});

document.querySelector("#reset-checklist").addEventListener("click", () => {
  completedTasks.clear();
  localStorage.setItem("albion-checklist", "[]");
  renderChecklist();
});

ui.menuToggle.addEventListener("click", () => {
  const isOpen = ui.sidebar.classList.toggle("open");
  ui.menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  ui.installApp.hidden = false;
});

ui.installApp.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  ui.installApp.hidden = true;
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  ui.installApp.hidden = true;
});

document.querySelectorAll(".side-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    ui.sidebar.classList.remove("open");
    ui.menuToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  updateReadingProgress();
  updateActiveSection();
});

renderMission();
renderArticles();
renderAnecdotes();
renderChecklist();
renderGlossary();
updateReadingProgress();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

const requestedArticle = new URLSearchParams(window.location.search).get("article");
if (requestedArticle) openArticle(requestedArticle);
