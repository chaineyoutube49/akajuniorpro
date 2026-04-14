# AKA Junior - Portfolio Site

Site portfolio professionnel pour AKA Junior - Expert en IA, Design et Développement Web.

## Déploiement sur Render via GitHub

### Prérequis
- Compte GitHub avec le code source
- Compte Render (https://render.com)

### Étapes de déploiement

1. **Pousser le code sur GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <votre-repo-github>
   git push -u origin main
   ```

2. **Configurer Render**
   - Connectez-vous à Render
   - Cliquez sur "New +" puis "Static Site"
   - Connectez votre compte GitHub
   - Sélectionnez votre repository `akajuniorpro`
   - Render détectera automatiquement le `render.yaml`

3. **Configuration automatique**
   - Build Command: `npm run build`
   - Publish Directory: `dist`
   - Node Version: 18

4. **Déployer**
   - Cliquez sur "Create Static Site"
   - Le déploiement commencera automatiquement

### Fichiers de configuration

- `render.yaml` : Configuration pour Render
- `vite.config.ts` : Configuration Vite optimisée pour la production
- `package.json` : Scripts de build et dépendances

### Fonctionnalités

- Portfolio avec filtres (Vidéos/Images)
- Services avec modals détaillés
- Formations avec liens externes
- Formulaire de contact vers WhatsApp
- Design responsive avec animations
- SEO optimisé

### En local

```bash
npm install
npm run dev
```

Le site sera disponible sur http://localhost:3000
