import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import authorsMap from '@site/src/data/authors';

export default function MDXContentWrapper(props) {
  const {frontMatter} = useDoc();

  // Récupération de l'auteur depuis last_update 
  const authorId = frontMatter.last_update?.author; // ex: "lacrif"

  // On récupère l'auteur complet depuis authors.yml 
  const author = authorsMap[authorId] || {};

  return (
    <>
      {/* Bloc auteur */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0 0 1rem 0', borderBottom: '1px solid var(--ifm-color-emphasis-200)' }}>
        {(
          <img src={author?.image_url ?? '/img/logo.png'} alt={author?.name ?? 'Auteur inconnu'} style={{ width: 76, height: 76, border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '50%', objectFit: 'cover' }} />
        )}

        <div>
          <div style={{fontWeight: 600}}>
            {author?.name ?? 'Auteur inconnu'}
          </div>
          <div style={{fontSize: '0.9rem', opacity: 0.7, fontStyle: 'italic'}}>
            {author?.title ?? 'Titre inconnu'}
          </div>

          {frontMatter.last_update && (
            <div style={{fontSize: '0.9rem', opacity: 0.7}}>
              Dernière modification :{' '}
              {new Date(frontMatter.last_update.date).toLocaleDateString('fr-FR')}
            </div>
          )}
        </div>
      </div>

      <MDXContent {...props} />
    </>
  );
}
