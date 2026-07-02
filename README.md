# SoD Platform — OCI Setup Manual

Interactive setup guide and reference manual for the Segregation of Duties (SoD) Platform deployment on Oracle Cloud Infrastructure (OCI).

## Overview
This directory contains the complete multi-page HTML configuration manual and reference guides. It explains step-by-step how to provision networking virtual cloud networks (VCN), credentials, storage vaults, enqueuer messaging systems, serverless execution workers (OCI Functions), PL/SQL load engines, and analytical reporting views.

## File Structure
- `index.html`: Main landing page with OCI architecture diagrams and data workflows.
- `networking.html` - `events_alarms.html`: Chronological steps for setting up OCI resources (VCNs, Internet Gateways, NAT, Vault, OCI Queue, API Gateway).
- `compute_functions.html`: Interactive index catalog of OCI Serverless Functions.
- `db_ddl.html`, `db_packages.html`, `db_procedures.html`: Relational database schema designs, PL/SQL compilation units, and orchestration SQL procedures.
- `db_bootstrap.html` & `db_seed_data.html`: Database schema configuration and bootstrap triggers.
- `style.css` & `script.js`: Styling guidelines, glassmorphic themes, code selector tabs, copy buttons, and raw file downloaders.

## Getting Started
To view the guide, simply open the root [index.html](file:///Users/bibek/pipeline/architecture/infrastructure_manual/index.html) page in any modern web browser.
