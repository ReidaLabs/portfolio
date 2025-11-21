import { Cloud, Database, Code, Brain, BookOpen, Layers, Calculator } from 'lucide-react';
import { Stat, SkillCategory, Experience, Certification } from './types';

export const STATS: Stat[] = [
  { id: 'exp', value: '19年', label: '実務経験', description: '経理・エンジニア・PM' },
  { id: 'users', value: '20,000+', label: 'ユーザー数', description: '全社システム利用者' },
  { id: 'data', value: '80億+', label: 'レコード数', description: 'DWH処理規模' },
  { id: 'release', value: '100+', label: 'プロジェクト', description: 'PM/PL遂行実績' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'クラウド & インフラ',
    icon: Cloud,
    skills: [
      { name: 'AWS (ECS/Fargate)', highlight: true },
      { name: 'Terraform', highlight: true },
      { name: 'Docker / Container' },
      { name: 'AWS (Lambda/S3)' },
    ],
  },
  {
    title: 'データベース & 分析基盤',
    icon: Database,
    skills: [
      { name: 'Snowflake', highlight: true },
      { name: 'Amazon Redshift' },
      { name: 'PostgreSQL' },
      { name: 'Oracle Database' },
      { name: 'SQL Server' },
    ],
  },
  {
    title: 'AI & 先端技術',
    icon: Brain,
    skills: [
      { name: 'Claude Code', highlight: true },
      { name: 'MCP (Model Context Protocol)', highlight: true },
      { name: 'RAG Development', highlight: true },
      { name: 'Dify Implementation', highlight: true },
      { name: 'Generative AI / LLM' },
    ],
  },
  {
    title: 'アプリケーション & BI',
    icon: Code,
    skills: [
      { name: 'Streamlit', highlight: true },
      { name: 'Tableau / QuickSight' },
      { name: 'Matillion (ETL)' },
      { name: 'React / TypeScript' },
    ],
  },
];

// Featured Project (Current Role)
export const FEATURED_EXPERIENCE = {
  period: '2018.10 - 現在',
  company: '大手事業会社',
  title: '全社規模DWH構築・生成AI活用基盤開発',
  role: 'Project Manager / Lead Architect',
  description: '約2万人の従業員が利用する全社情報基盤の刷新プロジェクトにおいて、30名規模のチームを率いるPMとして従事。アジャイル開発体制の構築から、PLとしての詳細なタスク管理・品質担保までを兼務。80億レコード規模のDWH構築と、非エンジニアでも高度な分析が可能となるセルフBI環境の整備、さらには社内規定や技術文書を学習させたマルチモーダルRAGシステムの開発までを一貫して完遂。',
  details: [
    {
      title: '30名規模のチームマネジメント (PM/PL)',
      desc: 'ベンダー及び社内メンバー混合の30名体制をリード。アジャイル開発プロセス（Scrum）を導入し、変動する要件に対して柔軟に対応しつつ、品質と納期を厳守。WBS作成から日次の進捗管理まで徹底したプロジェクト管理を実行。'
    },
    {
      title: '次世代データ活用基盤 (Snowflake)',
      desc: 'RedshiftからSnowflakeへの移行を指揮。コンピュートとストレージの分離により、同時接続数の課題を解決し、クエリパフォーマンスを平均300%向上。'
    },
    {
      title: 'エンタープライズAIチャットボット (Dify + RAG)',
      desc: 'Difyを活用し、社内ドキュメント（テキスト・画像・音声）を横断的に検索・回答する高精度RAGシステムを構築。セキュリティを担保しつつ、業務効率化を実現。'
    }
  ],
  techStack: ['Snowflake', 'AWS', 'Dify', 'Python', 'Streamlit', 'Project Management', 'Agile/Scrum']
};

export const EXPERIENCES: Experience[] = [
  {
    period: '2015.04 - 2018.09',
    title: '社内情報活用プラットフォーム開発',
    role: 'PM / フルスタックエンジニア',
    description: '基幹システムのみではカバーしきれない168の業務テーマに対し、現場主導で活用可能なデータマートおよびWebレポートシステムを構築。',
    achievements: [
      '4億レコード規模の販売実績データの統合・可視化',
      '複数基幹システムのマスターデータ統合（MDM）',
      'ユーザーヒアリングから要件定義・実装・保守までを完遂'
    ],
    tech: ['Oracle', 'PL/SQL', 'Java', 'JavaScript']
  },
  {
    period: '2012.04 - 2015.03',
    title: '基幹連携RPAソリューション',
    role: 'PG / SE',
    description: 'AS400上のレガシーシステムとWeb基幹システムの隙間を埋める、自動売上計上・帳票出力オートメーションツールの開発。月間1万件以上の処理を自動化。',
    achievements: [
      '月間1万件以上の売上計上処理を完全自動化',
      '全国拠点の事務作業工数を月間約200時間削減',
      '人的ミスゼロ化の達成'
    ],
    tech: ['VBA', 'AS400', 'Access', 'Windows API']
  },
  {
    period: '2005.07 - 2012.03',
    title: '経理・財務部門',
    role: '経理・財務担当',
    description: 'エンジニア転身前は、事業会社の経理財務部門にて、月次決算業務および債権債務管理を担当。毎月数十億円規模の支払業務を管理し、数字に対する厳密な正確性と責任感を培う。',
    achievements: [
      '数十億円規模の月次支払管理・資金繰り管理',
      '債権債務の消込業務および監査対応',
      '経理実務の経験が、現在のデータ設計における「会計的整合性」の担保に活きている'
    ],
    tech: ['Excel', '会計システム', '簿記']
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: 'AWS Certified Solutions Architect - Associate', badge: 'AWS SAA', icon: Cloud },
  { title: 'AWS Certified Cloud Practitioner', badge: 'AWS CCP', icon: Cloud },
  { title: '日商簿記検定 2級', badge: 'Finance', icon: Calculator },
  { title: 'kintone アソシエイト', badge: 'SaaS', icon: Layers },
];