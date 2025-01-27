---

---

# Fontes de Dados

Nesta Seção, descreveremos as fontes de dados utilizadas nos dashboards do projeto.

## Banco de Dados do GDS

| Nome da fonte                         | Tipo       | Query                                                          |
| ------------------------------------- | ---------- | -------------------------------------------------------------- |
| vbe_eventos_usuarios                  | Postgresql | select * from myapp_production.public.vw_vbe_eventos_usuarios; |
| vbe_signals                           | Postgresql | select * from vw_vbe_eventos_usuarios;                         |
| average_time_to_complete_actions_view | Postgresql | average_time_to_complete_actions_view                          |
| vbe_leaders                           | Postgresql | select * from vw_vbe_users;                                    |
| daily_engagement_summary_view         | Postgresql | select * from daily_engagement_summary;                        |
| leaders_full_data                     | Postgresql | select * from leaders_full_data;                               |
| daily_engagement_percentage_view      | Postgresql | select * from daily_engagement_percentage;                     |


## Banco de Dados do ETL

| Nome da fonte             | Tipo       | Query                     |
| ------------------------- | ---------- | ------------------------- |
| alertas_delay_view        | Postgresql | alertas_delay_view        |
| gds_ephem_integracao_view | Postgresql | gds_ephem_integracao_view |
| alertas_positivos_view    | Postgresql | alertas_positivos_view    |
| total_acoes_por_tipo_view | Postgresql | total_acoes_por_tipo_view |
| alertas_confirmados_view  | Postgresql | alertas_confirmados_view  |


## Fontes Cache (baseadas em outras fontes)

| Nome da fonte                          | Fonte de Dados Original          | Tipo          |
| -------------------------------------- | -------------------------------- | ------------- |
| vbe_signals_cache                      | vbe_signals                      | Extrair dados |
| daily_engagement_percentage_view_cache | daily_engagement_percentage_view | Extrair dados |
| gds_ephem_integracao_view_cache        | gds_ephem_integracao_view        | Extrair dados |
| leaders_full_data_cache                | leaders_full_data                | Extrair dados |
| daily_engagement_summary_view_cache    | daily_engagement_summary_view    | Extrair dados |
| vbe_eventos_usuarios_cache             | vbe_eventos_usuarios             | Extrair dados |
| total_acoes_por_tipo_view_cache        | total_acoes_por_tipo_view        | Extrair dados |

## Google Sheets

| Nome da fonte                                | Fonte de Dados                         | Tipo             |
| -------------------------------------------- | -------------------------------------- | ---------------- |
| dashboard-vbe-producao-controle-acesso-cache | dashboard-vbe-producao-controle-acesso | Planilhas Google |


## Tabelas Mescladas

A mesclagem de tabelas é uma técnica utilizada para combinar dados de diferentes fontes. No Google Data Studio, a mesclagem de tabelas é feita através de uma operação de junção.

As seguintes tabelas são mescladas:

| Nome da fonte                        | Left                                   | Right                           | left field | right field    | Métricas          | Campo Período        |
| ------------------------------------ | -------------------------------------- | ------------------------------- | ---------- | -------------- | ----------------- | -------------------- |
| gds_ephem_integracao_view_cache_join | dashboard-vbe-producao-controle-acesso | gds_ephem_integracao_view_cache | state      | estado         | Contagem (gds_id) | ephem_create_date    |
| vbe_signals_cache_join               | dashboard-vbe-producao-controle-acesso | vbe_signals_cache               | state      | usuario_estado | Record Count      | evento_data_registro |