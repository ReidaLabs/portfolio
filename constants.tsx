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
      { name: 'AWS Bedrock / Lambda' },
    ],
  },
  {
    title: 'データベース & 分析基盤',
    icon: Database,
    skills: [
      { name: 'Snowflake', highlight: true },
      { name: 'DynamoDB' },
      { name: 'Amazon Redshift' },
      { name: 'PostgreSQL' },
    ],
  },
  {
    title: 'AI & 先端技術',
    icon: Brain,
    skills: [
      { name: 'Snowflake Cortex', highlight: true },
      { name: 'Dify Implementation', highlight: true },
      { name: 'RAG Architecture', highlight: true },
      { name: 'Generative AI / LLM' },
    ],
  },
  {
    title: 'アプリケーション & BI',
    icon: Code,
    skills: [
      { name: 'Streamlit', highlight: true },
      { name: 'React / TypeScript' },
      { name: 'Python' },
      { name: 'Tableau' },
    ],
  },
];

// Featured Project (Consolidated)
export const FEATURED_EXPERIENCE = {
  // Date removed as requested
  company: 'Integrated Project',
  title: 'AI × 情報基盤 × 経理 / 統合データ戦略',
  role: 'PM / PL / Tech Advisor',
  description: '現在、大手ゼネコンおよび大手ホビーメーカーにて、生成AIと大規模データ基盤を統合する最先端プロジェクトを牽引。経理・財務の実務知識（ドメイン知識）と、Snowflake/AWS等のモダンな技術力を融合させ、経営判断に資する高付加価値な情報基盤を構築している。',
  metrics: [
    { value: '20,000+', label: '全社ユーザー数' },
    { value: '30+', label: 'チームマネジメント数' },
    { value: '80億+', label: '処理レコード数' }
  ],
  details: [
    {
      title: 'AI Driven Accounting (経理AI)',
      desc: 'Snowflake Cortex Agentを活用し、自然言語による複雑な経理分析を実現。予実管理や変動要因分析を自動化し、経営の意思決定速度を向上。'
    },
    {
      title: 'Enterprise AI Platform (全社AI)',
      desc: 'Difyを用いたセキュアな社内AI基盤を構築。RAGによる社内ナレッジ活用を推進し、組織横断的な業務効率化とDXを加速。'
    },
    {
      title: 'Data Governance (情報基盤)',
      desc: '80億レコード規模のDWHにおけるガバナンス設計と、経理的整合性を担保したデータモデルの構築。'
    }
  ],
  techStack: ['Snowflake', 'Cortex Agent', 'Dify', 'Python', 'AWS', 'LLM', 'Agile']
};

export const EXPERIENCES: Experience[] = [
  {
    period: '2025.12 - 現在',
    title: '経理特化型AIエージェント構築 (大手ゼネコン)',
    role: 'PL / Tech Advisor',
    description: 'Snowflake Cortex Agentを活用した次世代経理分析システムの構築プロジェクト。PLとしてプロジェクト推進を行うと同時に、技術アドバイザーとしてアーキテクチャ設計および経理ドメイン知識の実装をリード。',
    achievements: [
      'Cortex Agentによる自然言語データ分析の実現',
      '経理データモデルの最適化と整合性担保',
      '意思決定支援型AIのプロトタイプ構築'
    ],
    tech: ['Snowflake', 'Cortex', 'Python', 'SQL']
  },
  {
    period: '2025.12 - 現在',
    title: '全社AI活用基盤構築 (大手ホビーメーカー)',
    role: 'PM / PL',
    description: 'Difyを用いた全社共通AIプラットフォームの構築プロジェクト。PMとしてロードマップ策定・要件定義を行い、PLとしてセキュアな環境構築と社内データ連携(RAG)の実装を指揮。',
    achievements: [
      'Difyを活用した社内AIチャットボットの全社展開',
      '機密情報を考慮したセキュリティ/ガバナンス設計',
      'マルチモーダルAI活用の推進'
    ],
    tech: ['Dify', 'AWS', 'RAG', 'LLM']
  },
  {
    period: '2025.04 - 2025.09',
    title: 'ECサイト刷新・AWS EDI基盤刷新',
    role: 'Team Leader',
    description: '事業会社にてECサイト刷新プロジェクトのAI/分析領域をリード。並行してAWSマネージドサービスを駆使したEDI（電子データ交換）システムの刷新を担当。',
    achievements: [
      'Bedrock, DynamoDB, Step Functionsを用いたサーバーレスワークフロー構築',
      'レガシーEDIからの脱却と運用コストの大幅削減',
      'ECデータ分析基盤の設計とチームマネジメント'
    ],
    tech: ['AWS Bedrock', 'DynamoDB', 'Step Functions', 'Python']
  },
  {
    period: '2018.10 - 2025.03',
    title: '全社規模DWH構築・生成AI活用基盤開発',
    role: 'PM / Lead Architect',
    description: '30名規模のチームを率い、全社DWH刷新(Snowflake)及び生成AI基盤構築を指揮。詳細な設計と実装も兼務し、データ駆動型経営への変革を推進。',
    achievements: [
      '80億レコード超の大規模データ移行とSnowflake基盤構築',
      '社内RAGシステム(Dify)の全社展開とセキュリティ設計',
      'データスチュワードシップの確立とデータガバナンス強化'
    ],
    tech: ['Snowflake', 'AWS', 'Dify', 'Python']
  },
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