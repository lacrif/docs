---
applyTo: "refs/cobit/processus/**/*.mdx"
---

Instructions Copilot — Mise en forme MDX des processus CobIT

But
----
Fournir à Copilot (ou à tout autre assistant automatisé) un jeu d'instructions concis et reproductible pour mettre en forme les fichiers MDX CobIT du répertoire `refs/cobit/**` selon le style utilisé dans les fichiers `apo01.mdx`…`apo13.mdx`.

Usage attendu
--------------
- Copier-coller ces instructions dans la zone d'invite du modèle (ou référencer ce fichier) avant de demander une mise en forme automatique d'un fichier MDX.
- Fournir en entrée le contenu original du fichier MDX et demander : « Reformate ce fichier MDX selon les règles ci‑dessous, sans modifier le contenu sémantique. »

Règles de mise en forme (prioritaires)
------------------------------------
1. Frontmatter
   - Conserver les clés existantes : `id`, `title`, `sidebar_label`, `sidebar_position`, `tags`, `description`, `last_updated`.
   - Si `title` est trop court (p.ex. "EDM02"), étendre avec un libellé descriptif entre tirets (p.ex. `EDM02 - Optimiser la valeur`).
   - Toujours préserver la clé `last_updated` si elle est présente. Ne pas la remplacer par une date automatique.

2. Bloc « Mise à jour »
   - Conserver ou ajouter la ligne suivante immédiatement après le frontmatter :
     <p>Mise à jour : {frontMatter.last_updated.date} par {frontMatter.last_updated.author}</p>
   - Ne pas évaluer ou remplacer ces placeholders ; ils sont rendus à la build.

3. Sections obligatoires et ordre
   - Garder (dans cet ordre) : `Description`, `But`, `Objectifs IT principaux`, `Objectifs du processus`, `RACI`, `Pratiques, données d'entrée et de sortie, activités`.
   - Si une section manque, ne pas l'ajouter automatiquement sauf si le contenu sémantique correspondant est évident.

4. Tableaux et listes dans cellules
   - Pour les cellules de tableau contenant des listes, convertir les listes Markdown en HTML : `<ul><li>...</li></ul>`.
   - Utiliser la syntaxe de tableau standard Markdown pour les en-têtes et colonnes (comme dans `apo01.mdx`).
   - S'assurer qu'il n'y ait pas de listes Markdown imbriquées `*` à l'intérieur d'une cellule sans balises HTML.

5. Orthographe et typographie (corrections minimales)
   - Corriger les fautes évidentes et les coquilles : ex. `Optimier` → `Optimiser`, `planifé` → `planifié`, `sertitude` → `certitude`, `succint` → `succinct`, `ergonomie`/`convivialité` selon contexte.
   - Ne pas reformuler les phrases au-delà de corrections mineures — l'objectif est la mise en forme, pas la réécriture.

6. Formatage des titres et libellés
   - Les titres de sections utilisent `##` (niveau 2).
   - Les pratiques internes (codes comme `EDM02.01`) peuvent apparaître en tête de sous-sections ou tables.

7. RACI
   - Garder la structure tabulaire existante. S'assurer que les colonnes et lignes sont alignées et que la table commence et se termine proprement.

8. Balises et caractères superflus
   - Enlever uniquement les caractères de fin de fichier non désirés (p.ex. un `^` isolé).
   - Ne pas supprimer volontairement les sections commentées ou placeholders frontmatter.

Exemple de gabarit (squelette) à produire
-----------------------------------------
---
id: cobit-XXX
title: "XXX - Titre descriptif"
sidebar_label: "XXX"
sidebar_position: N
tags: [cobit]
description: "XXX - description courte"
last_updated:
  date: "YYYY-MM-DD"
  author: "nom"
---

<p>Mise à jour : {frontMatter.last_updated.date} par {frontMatter.last_updated.author}</p>

## Description

Texte de la description...

## But

Texte du but...

## Objectifs IT principaux

| Objectifs IT | Métriques associées |
| --- | --- |
| Exemple d'objectif | <ul><li>Métrique 1</li><li>Métrique 2</li></ul> |

## Objectifs du processus

| Objectifs du processus | Métriques associées |
| --- | --- |
| Exemple | <ul><li>Mesure A</li></ul> |

## Pratiques

### Nom de la pratique

Description de la pratique...

**Entrées/Sorties**

| **Description** | **Venant de** | **Description** | **Vers** |
| :-- | :--- | :-- | :--- |
| Description | Venant de | Description | Vers |

**Activités**

| N° | Description |
| :--- | :--- |
| 1 | Activité 1 |

## RACI

|  | CODE.01 | CODE.02 |
| --- | --- | --- |
| Rôle Exemple | R | A |

Exemples concrets
------------------
- Transformation d'une liste Markdown dans une cellule de tableau en HTML :

Avant :

| Objectifs IT | Métriques |
| --- | --- |
| Exemple | * Item A
* Item B |

Après :

| Objectifs IT | Métriques |
| --- | --- |
| Exemple | <ul><li>Item A</li><li>Item B</li></ul> |
