const rankData = {
  debutant: {
    label: "Éclaireur",
    subtitle: "Les fondations avant la performance",
    intro:
      "Votre première victoire consiste à ne pas vous disperser. Terminez l'introduction, essayez plusieurs armes jusqu'au palier T4 et choisissez une activité principale pour votre première semaine.",
    objectives: [
      "Finir le tutoriel et suivre le Journal",
      "Débloquer un équipement complet T4",
      "Comprendre bleu, jaune, rouge et noir",
      "Garder une réserve d'argent liquide",
    ],
    route: [
      "Testez vos sorts en zone bleue, puis jaune.",
      "Choisissez une arme principale avant d'investir lourdement.",
      "Vendez ce que vous ne comprenez pas encore.",
      "Rejoignez une guilde accueillante, sans donner vos ressources.",
    ],
    warning: "Ne dépensez pas vos points d'apprentissage au hasard. Ils ont bien plus de valeur sur une progression lente, souvent la récolte.",
  },
  intermediaire: {
    label: "Aventurier",
    subtitle: "Transformer une routine en progression",
    intro:
      "Vous savez vous équiper et générer un peu d'argent. Il est temps de choisir un axe rentable, d'apprendre le coût réel d'un set et de faire vos premières sorties létales préparées.",
    objectives: [
      "Acheter plusieurs exemplaires d'un set",
      "Spécialiser une ligne de combat",
      "Comparer les marchés de deux villes",
      "Explorer Mists, faction ou zone noire",
    ],
    route: [
      "Calculez le prix exact de votre set de sortie.",
      "Pratiquez les matchups en Arène ou Donjon corrompu.",
      "Faites des sessions courtes en zone létale.",
      "Tenez un carnet simple de gains et pertes.",
    ],
    warning: "Une bonne sortie n'est pas celle où vous restez jusqu'à mourir. Fixez un seuil de retour avant de partir.",
  },
  veteran: {
    label: "Vétéran",
    subtitle: "La spécialisation devient un avantage",
    intro:
      "Vous ne cherchez plus seulement à survivre. Vous choisissez un terrain, un rôle et une économie. Votre prochaine étape consiste à améliorer l'efficacité de chaque session.",
    objectives: [
      "Maîtriser deux variantes de build",
      "Optimiser focus et villes bonus",
      "Lire une composition de groupe",
      "Construire une économie résiliente",
    ],
    route: [
      "Conservez du matériel prêt à repartir dans plusieurs villes.",
      "Apprenez quand refuser un combat pourtant gagnable.",
      "Mesurez le profit par heure et le profit par focus.",
      "Participez à du contenu de groupe régulier.",
    ],
    warning: "La valeur de votre banque ne sert à rien si elle dort en vrac. Transformez votre richesse en options prêtes à jouer.",
  },
  maitre: {
    label: "Maître",
    subtitle: "Créer les conditions de la victoire",
    intro:
      "À ce rang, la mécanique seule ne suffit plus. Vous gagnez par préparation, information, logistique et capacité à rendre un groupe meilleur que la somme de ses joueurs.",
    objectives: [
      "Lire la carte comme une ressource",
      "Adapter un groupe à son objectif",
      "Exploiter les cycles économiques",
      "Transmettre des décisions simples",
    ],
    route: [
      "Préparez les remplacements avant l'opération.",
      "Déléguez le scout, la logistique et l'appel des cibles.",
      "Gardez une doctrine courte que chacun comprend.",
      "Analysez les défaites sans accuser l'exécution seule.",
    ],
    warning: "La maîtrise n'est pas de porter le set le plus cher. C'est de savoir exactement pourquoi vous le portez ici, maintenant.",
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
      <p>Les Profondeurs ont été ajoutées le 30 juin 2025 avec Abyssal Depths. Ce contenu sous Caerleon combine adversaires, créatures, pression temporelle et décisions d'extraction pour des groupes réduits.</p>
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
];

const checklistItems = [
  ["tutorial", "Terminer le tutoriel", "Suivre l'introduction et ouvrir le Journal d'Albion."],
  ["tier4", "Débloquer un set T4", "Choisir une arme et essayer les trois matières d'armure."],
  ["market", "Utiliser le marché", "Passer une vente puis comparer un prix dans une autre ville."],
  ["yellow", "Explorer une zone jaune", "Tester vos sorts et observer la perte de durabilité."],
  ["activity", "Choisir une activité", "Récolte, combat, économie ou faction pour votre première routine."],
  ["replacement", "Préparer trois sets", "Pouvoir repartir rapidement après une défaite."],
  ["lethal", "Faire une sortie létale", "Entrer avec un équipement que vous acceptez de perdre."],
  ["guild", "Parler à une guilde", "Poser des questions sur ses activités et ses attentes."],
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
];

const ui = {
  rankPanel: document.querySelector("#rank-panel"),
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
};

let activeCategory = "all";
let bookmarkOnly = false;
let deferredInstallPrompt = null;
const bookmarks = new Set(JSON.parse(localStorage.getItem("albion-bookmarks") || "[]"));
const completedTasks = new Set(JSON.parse(localStorage.getItem("albion-checklist") || "[]"));

function renderRank(rankId) {
  const rank = rankData[rankId];
  ui.rankPanel.innerHTML = `
    <div class="rank-panel-main">
      <p class="eyebrow"><span></span> ${rank.subtitle}</p>
      <h3>${rank.label}</h3>
      <p>${rank.intro}</p>
      <div class="rank-objectives">
        ${rank.objectives.map((objective) => `<div><span>◆</span>${objective}</div>`).join("")}
      </div>
    </div>
    <aside class="rank-panel-side">
      <h4>Votre route maintenant</h4>
      <ul>${rank.route.map((step) => `<li><span>→</span>${step}</li>`).join("")}</ul>
      <p class="rank-warning">${rank.warning}</p>
    </aside>
  `;
}

function getFilteredArticles() {
  const query = ui.search.value.trim().toLocaleLowerCase("fr");
  return articles.filter((article) => {
    const categoryMatches = activeCategory === "all" || article.category === activeCategory;
    const queryMatches = `${article.title} ${article.summary} ${article.rank} ${article.category}`
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

document.querySelectorAll(".rank-tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".rank-tab.active").classList.remove("active");
    button.classList.add("active");
    renderRank(button.dataset.rank);
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

renderRank("debutant");
renderArticles();
renderChecklist();
renderGlossary();
updateReadingProgress();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}
