### My portfolio site

Production: https://kurati.dev/

#### Local Setup Guide

**Prerequisite**: `Node Js` and `Vite` with latest version should be installed.

1. Clone this repository.
2. Run `npm install`
3. Run `npm install -g netlify-cli`
4. Check version: `ntl-version`
5. create `.env` file in the root directory of project with following variables.

Keep variable names starting with **VITE**

```
VITE_ACCESS_TOKEN=contentful_access_token
VITE_SPACE_ID=contentful_space_id
VITE_CT_PORTFOLIO=content_type_for_portfolio
VITE_CT_PROJECTS=content_type_for_projects
VITE_CT_SOCIAL_LINKS=content_type_for_social_links
VITE_RESUME_LINK=resume_link
VITE_CURRENT_COMPANY_NAME=current_company_name
VITE_CURRENT_COMPANY_WEBSITE=current_company_website
VITE_CURRENT_COMPANY_EMP_TITLE=current_company_employee_title
VITE_CT_BLOGS=content_type_for_blogs
VITE_CT_TILS=content_type_for_tils
VITE_CT_BOOKSHELF=content_type_for_bookshelf
VITE_GITHUB_TIL_RAW_BASE_URL=github_raw_content_url_for_tils
VITE_GITHUB_BLG_RAW_BASE_URL=github_raw_content_url_for_blogs
```

4. npm run netlify-dev

> This site fetched data from contenfull API using Netlify Serverless functions. This is done to ensure that Contentfull API key is not exponsed in network calls.
