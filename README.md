# SuiteCRM Automated Tests

## 🌟 Objectif

Automatiser les tests de **SuiteCRM** dans le cadre de mon PFA en utilisant **Playwright**, avec génération automatique de **rapports HTML**.

## 📦 Fonctionnement

* Tests écrits en **Playwright (TypeScript)**
* Pipeline GitHub Actions qui :

  * installe les dépendances
  * exécute les tests
  * génère un rapport HTML
  * upload automatiquement le rapport dans **Artifacts** de GitHub Actions

## 🚀 Exécution locale

```bash
git clone <repo-url>
cd pfa-suitecrm-tests
npm install
npx playwright test
npx playwright show-report
```

## 💐 Pipeline CI

* Se déclenche **à chaque push sur main**
* Les rapports sont consultables dans **Actions > Workflow Run > Artifacts > playwright-report.zip**

## 📊 Rapport Playwright

Permet de visualiser :

* les étapes de chaque test
* les captures d’écran en cas d’échec
* les performances des tests

## 🔎 Pourquoi utiliser le pipeline même si GitHub ne peut pas accéder à localhost ?

* Automatisation cohérente du projet
* Détection immédiate des erreurs
* Archivage et suivis des résultats
* Pratique des pipelines CI/CD demandée en entreprise

---

**Auteur : Mohammed Yassin**
Projet de Fin d’Année - PFA SuiteCRM Automation
