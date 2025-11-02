# Instructions Copilot — Conventions recommandées pour Docusaurus

Ce document décrit les meilleures pratiques et conventions recommandées pour travailler sur un site Docusaurus. Il est destiné aux contributeurs et aux assistants automatiques (Copilot, scripts) pour garantir une consistance, une qualité et une bonne maintenabilité.

## Objectif

Fournir des conventions claires pour la structure du projet, la rédaction des docs et des blogs, la gestion des assets, l'internationalisation, les composants React, les tests et le déploiement.

## Règles générales

- Langue du dépôt : Français
- Respecter les conventions d'indentation et formatage utilisées par le projet (préférer Prettier/ESLint si présents).
- Préserver l'historique Git : petits commits atomiques et messages clairs.
- Utiliser le français clair et un style neutre.
- Paragraphes courts (<= 4 lignes) et phrases simples.
- Utiliser des titres hiérarchiques cohérents (H1, H2, H3).
- Préférer des listes à puces pour étapes/éléments.
- Ajouter des exemples de code dans des blocs de code délimités et marqués (p. ex. languages: `bash`, `js`).
- Utiliser la syntaxe MDX pour inclure des composants React si nécessaire.
- Ajouter des références internes/externes pertinentes.

## Structure recommandée

- `blog/` : billets de blog (front matter YAML). Inclure `title`, `slug`, `tags`, `authors`, `date`, `description`, `image` si disponible.
- `docs/` : pages de documentation (Markdown ou MDX). Nom de fichier en kebab-case.
- `src/` : composants React personnalisés.
- `static/` : images et assets statiques (URL relatives `/img/...`).
- `docusaurus.config.js` : configuration centrale. Pour toute modification, documenter la raison dans le message de commit.
- `sidebars.js` : ordre et structure des docs. Préférer des sidebars explicites plutôt que auto-generated si besoin de contrôle.

## Front matter (docs et blog)

- Toujours commencer les fichiers de blog/docs par un front matter YAML valide.
- Exemples pour blog/posts :
  - `title`: Titre lisible
  - `slug`: `/mon-article` (optionnel si dérivé du chemin)
  - `date`: `YYYY-MM-DD` (ISO)
  - `tags`: liste
  - `authors`: clé(s) définies dans `blog/authors.yml`
  - `description`: courte description pour les aperçus
  - `image`: chemin relatif depuis `static/` (ex: `/img/mon-image.png`)
- Pour `docs/` :
  - `id`: identifiant unique si nécessaire
  - `title`: titre affiché
  - `sidebar_position`: nombre pour ordonner
  - `sidebar_label`: label custom pour la sidebar
  - `authors`: liste d'auteurs 
  - `description`: brève description pour SEO
  - `last_updated`: date de dernière mise à jour (YYYY-MM-DD) en format string

- Utiliser le `title` du front matter dans le contenu pour cohérence.
- Sous le titre H1, Inclure une ligne avec `last_updated` : 
  ```mdx
  <p>Mise à jour : {frontMatter.last_updated}</p>
  ```

## Images et assets

- Placer les images dans `static/img/` puis référencer par `/img/nom.png`.
- Optimiser les images (taille raisonnable, WebP si possible).
- Nommer les fichiers en kebab-case et explicites (`screenshot-login.png`).

## Composants React (dans `src/`)

- Nom des fichiers en PascalCase pour composants (ex: `MyComponent.js` ou `.jsx`).
- Favoriser des composants petits et réutilisables.
- PropTypes ou TypeScript pour typer les props.
- Styles : utiliser CSS modules (`.module.css`) si le projet l'utilise.
- Tests unitaires : écrire au moins un test basique pour chaque composant critique.

## Internationalisation (i18n)

- Utiliser la configuration i18n de Docusaurus si nécessaire.
- Conserver la langue principale (fr) dans `docs/` et dupliquer les fichiers pour d'autres locales dans `i18n/<locale>/...`.
- Les slugs et titres devraient être localisés.

## Blog

- Structure : utiliser `blog/` avec fichiers markdown.
- Tags : définir dans `blog/tags.yml` (clé -> meta). Utiliser des tags courts, en minuscules.
- Authors : centraliser dans `blog/authors.yml`.
- Meta SEO : remplir `description` et `image` pour partager correctement.

## Pull Requests et commits

- Messages de commit : impératif, court, et descriptif (ex: "doc: mettre à jour la page d'installation").
- PR : inclure un résumé, liste de changements, capture d'écran si UI touchée, notes de test.
- Relectures : minimum une approbation par une autre personne.

## Déploiement

- Documenter la procédure de build et déploiement pour GitHub Pages
- Indiquer comment générer la build (`npm run build`) et où placer les fichiers de sortie.

## Meilleures pratiques Copilot / assistants

- Quand Copilot génère du contenu :
  - Préférer suggestions qui respectent la structure `docs/`, front matter et noms de fichiers.
  - Pour les composants React, suivre la convention des props et utiliser CSS modules.
  - Générer des messages de commit clairs quand une action modifie la config.

- Exemples de prompts utiles :
  - "Créer une page de doc `docs/ma-fonctionnalite.md` avec front matter et un exemple d'utilisation en JavaScript"
  - "Ajouter un billet de blog `blog/2025-11-02-mon-article.md` avec front matter complet et image"

## Contrat minimal pour nouveaux contenus

- Input attendu : titre, slug (optionnel), date (blog), tags (le cas échéant), auteurs (si blog), contenu en markdown.
- Output : fichier markdown/MDX placé au bon endroit avec front matter valide et images référencées dans `static/`.
- Erreurs/échecs : s'assurer que le front matter est valide YAML et que les chemins d'images existent.

## Exemples rapides

- Ex. front matter blog :

```yaml
---
title: "Mon article"
slug: /mon-article
date: 2025-11-02
authors: [jdupont]
tags: [tutoriel, docusaurus]
description: "Courte description de l'article"
image: /img/mon-article.png
---
```

- Ex. front matter doc :

```yaml
---
id: introduction
title: "Introduction"
sidebar_position: 1
---
```

## Checklist avant merge

- [ ] Le contenu est écrit en français clair et neutre
- [ ] Structure du projet respectée (emplacement des fichiers)
- [ ] Front matter complet et valide
- [ ] Images optimisées et placées dans `static/`
- [ ] Lint/format passés localement

---

Merci d'utiliser ces conventions. Si vous voulez, je peux :

- Générer des templates MD/MDX pour pages et blogs.
- Créer une action GitHub CI baseline qui vérifie le front matter et exécute le linter.
