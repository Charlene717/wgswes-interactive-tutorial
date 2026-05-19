# WGS / WES Interactive Tutorial

雙語（繁體中文 / English）互動式教學，涵蓋從 FASTQ 到臨床變異報告的完整 WGS / WES 流程。

A bilingual (zh-Hant / English) interactive tutorial covering the complete WGS / WES pipeline — from FASTQ to clinical variant report.


---

## 內容架構 · Structure

**16 章**，分為四大區塊（16 chapters, four sections）：

### A. 原始資料處理與比對 · Reads Preprocessing & Alignment
1. `intro.html` — WGS / WES 概論（WGS vs WES vs Panel 比較）
2. `qc.html` — 原始定序 QC（FastQC / MultiQC / fastp）
3. `trimming.html` — Adapter Trimming（fastp / Trimmomatic / BBDuk）
4. `alignment.html` — 序列比對（BWA-MEM2 / minimap2 / GRCh38 / T2T-CHM13）
5. `markdup-bqsr.html` — MarkDup 與 BQSR（GATK 4.x / DRAGEN-GATK）
6. `coverage.html` — 覆蓋率與 QC 指標（mosdepth / Picard / Gini）

### B. 生殖系變異呼叫與過濾 · Germline Variant Calling & Filtering
7. `germline-calling.html` — HaplotypeCaller / DeepVariant / Strelka2
8. `joint-genotyping.html` — gVCF + GenomicsDBImport + GenotypeGVCFs
9. `filtering.html` — VQSR / Hard Filter / CNNScoreVariants / DRAGEN-ML
10. `annotation.html` — VEP / SnpEff / dbNSFP / SpliceAI / AlphaMissense / MANE Select

### C. 結構變異與體細胞分析 · Structural & Somatic Variants
11. `cnv-sv.html` — Manta / DELLY / CNVkit / GATK gCNV / Sniffles2
12. `somatic.html` — Mutect2 / Strelka2 / PoN / FFPE artefact / ctDNA + UMI
13. `long-read.html` — PacBio HiFi / ONT R10.4.1 / Clair3 / DeepVariant / PMDV

### D. 臨床應用與大規模分析 · Clinical & Population Analysis
14. `acmg.html` — ACMG / AMP 2015 + 2025 ClinGen 點數系統
15. `clinical-report.html` — ClinVar / gnomAD v4 / ACMG SF v3.2 / HGVS / CAP/CLIA
16. `cohort.html` — Trio / De novo / PED / UKBB / All of Us / Hail / REGENIE / SKAT / PRS

### 延伸 · Further
- `references/index.html` — ~120 條學術文獻 / 官方文件 / 標準（含 DOI 連結與 6 條 errata 注記）
- `wgswes-quiz/` — 160 題互動考題（每章 10 題，6 單選 + 2 多選 + 2 是非）

---

## 互動功能 · Interactive Features

- **每章皆有 Chart.js 互動模擬**（覆蓋深度 → 偵測率、Phred Q → 錯誤率、VQSR TP/FP、ACMG 點數計算等）
- **中英文一鍵切換**（右上角 `中文` / `EN` 按鈕，狀態存於 localStorage）
- **平滑捲動進度條**、語法高亮的 Bash / GATK / Python 程式碼分頁
- **比較表格、決策樹、callout 警示框**
- **每章末 3 題小測驗**，即時對錯回饋

## Quiz 進階功能 · Quiz Advanced Features

- 練習模式（每題即時對錯）vs 考試模式（一次性交卷）
- 錯題複習、標記複習、隨機抽考
- 多使用者 profile（同一台電腦多人獨立進度）
- 匯入 / 匯出 JSON 備份
- 鍵盤快捷鍵（←/→ 切題、A-D 選項、空白切換多選、Enter 送出）

---

## 配色方案 · Color Palette

- **主色 Primary**：emerald-700 `#047857` / emerald-900 `#064e3b`
- **強調色 Accent**：amber-600 `#d97706`
- **互補色**：emerald-100 `#d1fae5` / amber-100 `#fef3c7`
- 設計意圖：基因組醫學的沉穩專業 × 臨床診斷的警示提醒

---

## 技術棧 · Tech Stack

- 純 HTML + CSS + Vanilla JS（無 build step、無 framework）
- Chart.js 4.x（CDN）— 所有互動圖表
- 字體：Crimson Pro（標題）+ DM Sans（內文）+ JetBrains Mono（程式碼）
- 全部 i18n 透過 `data-zh` / `data-en` / `data-lang` 屬性 + 一個 ~30 行的 `i18n.js`
- localStorage 鍵：`wgswes_lang`、`wgswesquiz_progress_v1`、`wgswesquiz_profiles_v1` 等

---

## 使用方式 · Getting Started

直接以瀏覽器開啟 `index.html` 即可。無須伺服器（雖然部分瀏覽器在 `file://` 下對 fetch / module 有限制，建議使用 `python -m http.server` 起一個本地 server，或直接部署到 GitHub Pages）。

```bash
# 本地預覽 / Local preview
cd wgswes-interactive-tutorial
python -m http.server 8000
# 然後開啟 http://localhost:8000
```

---

## 學術佐證 · Academic References

`references/index.html` 收錄超過 120 條文獻，涵蓋：

- **核心框架**：Van der Auwera GATK Best Practices 2013、McKenna GATK 2010、DePristo 2011
- **主流工具原始論文**：Poplin DeepVariant 2018、Vasimuddin BWA-MEM2 2019、Li minimap2 2018、Kim Strelka2 2018、Nurk T2T-CHM13 2022
- **變異註釋**：McLaren VEP 2016、Morales MANE Select 2022、Jaganathan SpliceAI 2019、Cheng AlphaMissense 2023
- **臨床指引**：Richards ACMG 2015、Abou Tayoun PVS1 2018、Miller ACMG SF v3.2 2023
- **大規模佇列**：Karczewski gnomAD v4 2024、Mbatchou REGENIE 2021、Wu SKAT 2011
- **6 條 errata** — 標註常見誤解與工具版本變遷

---

© Charlene — WGS / WES Interactive Tutorial
