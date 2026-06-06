const wave = document.querySelector(".wave");

if (wave) {
  wave.addEventListener("mouseenter", () => {
    wave.animate(
      [
        { transform: "rotate(0deg)" },
        { transform: "rotate(14deg)" },
        { transform: "rotate(-8deg)" },
        { transform: "rotate(12deg)" },
        { transform: "rotate(0deg)" },
      ],
      {
        duration: 720,
        easing: "ease-in-out",
      }
    );
  });
}

const caseSections = document.querySelectorAll(".case-section[id]");
const caseLinks = document.querySelectorAll(".case-sidebar a[href^='#']");

if (caseSections.length && caseLinks.length) {
  const linksById = new Map(
    [...caseLinks].map((link) => [link.getAttribute("href").slice(1), link])
  );

  const setActiveLink = (id) => {
    caseLinks.forEach((link) => {
      link.classList.toggle("active", link === linksById.get(id));
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible[0]) {
        setActiveLink(visible[0].target.id);
      }
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: [0.1, 0.25, 0.5, 0.75],
    }
  );

  caseSections.forEach((section) => observer.observe(section));
  setActiveLink(caseSections[0].id);
}

const normalizeText = (value) => value.replace(/\s+/g, " ").trim();

const translations = {
  "Hi, I'm Kaki Mao, a UX/UI designer.": {
    html: "こんにちは、Kaki Maoです。<br />UX/UIデザイナーです。",
  },
  "I design clear and practical user experiences for B2B SaaS and AI products through structured thinking and fast prototyping.":
    "構造的な思考と素早いプロトタイピングを通じて、B2B SaaSやAIプロダクトに向けた明快で実用的なユーザー体験を設計しています。",
  "Creating a seamless event experience through digital check-in and engagement design.":
    "デジタルチェックインと参加促進の設計を通じて、スムーズなイベント体験をつくる。",
  "Designed an end-to-end digital wallet experience for SAP DCOM Shanghai 2023, enabling agenda browsing, QR check-ins, badge collection, and lottery eligibility tracking for over 2,600 participants.":
    "SAP DCOM Shanghai 2023に向けて、アジェンダ閲覧、QRチェックイン、バッジ収集、抽選資格の確認を一体化したデジタルウォレット体験を設計しました。",
  "Empowering creators to manage content, track performance, and grow through a unified analytics platform":
    "クリエイターがコンテンツ管理、成果確認、改善行動を一つの分析プラットフォーム上で進められるよう支援する。",
  "Designing a web workspace for AI character creators to build, manage, preview, and improve their creations.":
    "AIキャラクターの制作、管理、プレビュー、改善を支えるWebワークスペースを設計する。",
  "Designed a responsive creator dashboard from 0 to 1, integrating performance analytics, content management, fan insights, and creation workflows into one scalable platform experience.":
    "パフォーマンス分析、コンテンツ管理、ファンインサイト、制作フローを統合したレスポンシブなクリエイターダッシュボードを0から設計しました。",
  "Bridging older adults and local helpers through a more accessible daily mobility support experience":
    "高齢者と身近な支援者をつなぎ、日常の移動をより安心して行える支援体験を設計する。",
  "Researching and designing mobility support for older adults in a digitally transformed urban environment.":
    "DXが進む都市環境における高齢者の移動支援をリサーチし、設計する。",
  "Conducted qualitative and quantitative research to understand older adults' mobility challenges, and designed a WeChat mini program that connects seniors with nearby helpers for safer, more confident everyday travel.":
    "高齢者の移動課題を理解するために定性・定量調査を行い、近くの支援者とつながることで安心して外出できる体験を提案しました。",
  "Designing a rescue service system for pets left unattended during COVID-19 lockdowns.":
    "COVID-19による隔離期間中、家に取り残されたペットを救助するためのサービスシステムを設計する。",
  "Designed a public service system that connects pet owners, volunteers, communities, and rescue organizations to make emergency pet rescue safer, more transparent, and easier to coordinate.":
    "ペットの飼い主、ボランティア、地域コミュニティ、保護団体をつなぎ、緊急時のペット救助をより安全で透明性が高く、調整しやすいものにする公共サービスシステムを設計しました。",
  "Designing a pet rescue service system for owners and volunteers during COVID-19 isolation.":
    "COVID-19による隔離期間中の飼い主とボランティアを支えるペット救助サービスシステムを設計する。",
  "I'm an AI-native UX designer. I adopt system thinking to create enjoyable solutions that scale.":
    "AIネイティブなUXデザイナーとして、システム思考を用いて、楽しくスケールするソリューションを設計しています。",
  Back: "戻る",
  "View Case Study": "ケーススタディを見る",
  "View More": "もっと見る",
  Home: "Home",
  "Creator Center": "Creator Center",
  GraceGo: "GraceGo",
  Overview: "概要",
  "Project Info": "プロジェクト情報",
  Category: "種別",
  Role: "担当",
  Team: "制作人数",
  Timeline: "制作期間",
  Tools: "ツール",
  "Corporate Project": "企業プロジェクト（実案件）",
  "Course Project": "授業プロジェクト",
  "Graduate Research Project": "研究プロジェクト（大学院課題）",
  "UX/UI Design": "UX/UIデザイン",
  "UI Design": "UIデザイン",
  "UX Research": "UXリサーチ",
  "UX Research / Service Design / UI Design":
    "UXリサーチ / サービスデザイン / UIデザイン",
  "Group project, team leader": "グループプロジェクト、リーダー",
  "Research, Interview, Wireframe, Prototype":
    "リサーチ、インタビュー、ワイヤーフレーム、プロトタイプ",
  "4 members": "4名",
  "6 members": "6名",
  Highlights: "ハイライト",
  Challenge: "課題",
  "Final Solution": "最終提案",
  Outcome: "成果",
  Discovery: "調査",
  Opportunity: "機会",
  Ideate: "アイデア展開",
  Takeaways: "学び",
  "During my long-term internship at SAP, I designed a web-based check-in experience for SAP d-com Shanghai, a large-scale corporate event with around 3,000 participants.":
    "SAPでの長期インターンシップ期間中、約3,000名規模の企業向けイベント「SAP d-com Shanghai」における会場チェックイン用Web体験の設計を担当しました。",
  "How might we turn event participation into a clear, verifiable, and motivating check-in experience?":
    "参加行動を、わかりやすく証明でき、参加意欲にもつながるチェックイン体験へ変えるにはどうすればよいか。",
  "The event team wanted employees to join sessions actively and become eligible for a lottery based on their participation. However, there was no reliable way to record and prove each participant's activity.":
    "運営側は社員の参加を促し、行動に応じて抽選資格を付与したいと考えていました。しかし、参加行動を正確に記録し、証明する仕組みがありませんでした。",
  "For organizers, manual checking increased operational cost and made eligibility hard to judge in real time. For participants, the rules were difficult to understand, and repeated identity confirmation could become a barrier to joining.":
    "運営側にとって手作業での確認は負荷が高く、抽選対象を即時に判定することも困難でした。参加者にとっても、本人確認や抽選条件の理解がハードルになっていました。",
  "A mobile-first wallet that connects login, agenda browsing, session check-in, proof collection, and lottery eligibility into one continuous experience.":
    "ログイン、アジェンダ確認、セッションチェックイン、参加証明の取得、抽選資格確認を一つの流れにつなぐモバイルファーストのウォレット体験。",
  "Participants log in once with their employee ID, browse the event agenda, scan QR codes at sessions, collect participation proofs, and see whether they have reached the lottery requirement.":
    "参加者は社員番号で一度ログインし、アジェンダを確認し、セッション会場でQRコードを読み取り、参加証明を集めながら抽選条件の達成状況を確認できます。",
  "The product supported the event operation and helped make participation data visible to both organizers and employees.":
    "本プロダクトはイベント運営を支援し、参加状況を運営側と社員の双方にとって可視化しました。",
  "The system reached 2,677 registered users, 1,407 lottery-eligible participants, 19,407 total check-ins, and a 96.4% check-in success rate.":
    "登録者2,677名、抽選資格者1,407名、チェックイン総数19,407件、チェックイン成功率96.4%を達成しました。",
  "Mapping the journey from event preparation to session attendance and lottery participation.":
    "イベント準備からセッション参加、抽選参加までの一連の体験を整理しました。",
  "I worked with PMs and organizers to define the core problem: recording and proving participation. From the user flow, we identified the objects and capabilities required across login, agenda, sessions, QR codes, proofs, and eligibility.":
    "PMと運営側とのキックオフを通じて、「参加をどう記録し、証明するか」を中核課題として定義しました。ユーザーフローから、ログイン、アジェンダ、セッション、QRコード、参加証明、抽選資格に必要な対象と機能を洗い出しました。",
  "Turning operational check-in requirements into an experience that encourages participation.":
    "運営上のチェックイン要件を、参加を促す体験へ転換しました。",
  "Instead of asking participants to repeatedly verify themselves, the wallet links one employee account to the event journey. Badge collection became a metaphor for participation, making progress easier to understand and more rewarding.":
    "ページごとに認証を繰り返すのではなく、社員番号とアカウントを紐づけ、イベント全体の行動を一つの体験として扱いました。バッジ収集を参加証明のメタファーにすることで、進捗を理解しやすく、達成感のある体験にしました。",
  "Designing around account binding, participation proof, and instant eligibility feedback.":
    "アカウント連携、参加証明、抽選資格の即時フィードバックを中心に設計しました。",
  "I translated lottery rules, participation records, identity confirmation, and session information into a low-fidelity prototype. The flow was reviewed with the team to ensure it was clear, feasible, and suitable for a five-week development timeline.":
    "抽選条件、参加記録、本人確認、セッション情報を整理し、低忠実度プロトタイプに落とし込みました。約5週間という短い開発期間を踏まえ、明快で実装可能なフローになるようチームでレビューしました。",
  "Creating an event-friendly interface that visualizes attendance and progress.":
    "参加状況と進捗を可視化する、イベント向けのUIを設計しました。",
  "I redesigned the check-in experience around badge collection, iterating through prototypes and reviews to make participation status visible. I also supported implementation by clarifying edge cases and UI states with engineers.":
    "バッジ収集を軸にチェックイン体験を再設計し、試作とレビューを重ねながら参加状況を見える化するUIへ改善しました。実装時には状態変化やエッジケースを整理し、エンジニアと連携しました。",
  "This project helped me practice designing for operational clarity under real event constraints, balancing participant motivation with organizer-side tracking needs.":
    "このプロジェクトでは、実際のイベント運営制約の中で、参加者のモチベーションと運営側の管理ニーズを両立する設計を経験しました。",
  "I designed a web-based creator center for users who create and operate AI characters. The focus was a dashboard that helps creators understand character performance and decide what to improve next.":
    "AIキャラクターを作成・運用するユーザー向けに、Web版クリエイターセンターを設計しました。特に、キャラクターの状況を把握し、次の改善行動につなげやすいダッシュボード設計に注力しました。",
  "How might we extend an app-centered creation flow into a web workspace that supports deeper editing and continuous improvement?":
    "アプリ中心の制作フローを、より深い編集と継続的な改善を支えるWebワークスペースへ拡張するにはどうすればよいか。",
  "As the AI chat product grew, more users wanted to create and operate AI characters themselves. The existing app flow supported basic creation, but it was limited for advanced settings, repeated editing, previewing effects, and tracking performance after publishing.":
    "AIチャットプロダクトの成長に伴い、AIキャラクターを自ら作成・運用したいユーザーが増えていました。一方で既存のアプリ版では、高度な設定、再編集、効果確認、公開後の成果把握に限界がありました。",
  "A creator center that combines dashboard visibility, advanced settings, preview, and reusable UI patterns.":
    "ダッシュボード、高度な設定、プレビュー、再利用可能なUIパターンを統合したクリエイターセンター。",
  "The solution gives creators a clearer workspace: they can review character status, understand key data, edit advanced settings, and preview changes before publishing. It also reorganizes app and web UI patterns into a more consistent component system.":
    "クリエイターがキャラクターの状況を確認し、重要なデータを理解し、高度な設定を編集し、公開前に変更をプレビューできるワークスペースを設計しました。また、アプリとWebのUIを整理し、一貫性のあるコンポーネント体系に拡張しました。",
  "The proposal clarified the web workspace direction and provided a more scalable design foundation for creator-facing features.":
    "本提案はWebワークスペースの方向性を明確にし、クリエイター向け機能を拡張しやすいデザイン基盤を提供しました。",
  "By simplifying data presentation and expanding reusable components, the design helped the team align product goals, creator needs, and implementation details.":
    "データ表示をシンプルにし、再利用可能なコンポーネントを拡張することで、プロダクト目標、クリエイターのニーズ、実装要件の認識合わせを支援しました。",
  "Understanding what creators need after a character is created.":
    "キャラクター作成後にクリエイターが何を必要とするかを理解する。",
  "I studied competitor dashboards and similar creator products. A key insight was that UGC creators do not need complex analytics at first glance; they need a small set of meaningful signals that make progress and next actions easy to understand.":
    "競合サービスや類似するクリエイター向けプロダクトを調査しました。UGCクリエイターにとって重要なのは複雑な分析ではなく、進捗と次の行動を直感的に理解できる少数の意味ある指標だと捉えました。",
  "Supporting creators from one-time publishing to iterative creation.":
    "単発の公開から、継続的な創作・改善へ移行できるよう支援する。",
  "Advanced settings support deeper creative control, preview helps creators adjust while testing, and the dashboard gives beginners a reason to continue improving.":
    "高度な設定はより深い創作を支え、プレビューは試しながら調整することを可能にし、ダッシュボードは初心者にも改善を続ける動機を与えます。",
  "Prioritizing clarity over information density.":
    "情報量よりも、理解しやすさを優先する。",
  "Rather than filling the dashboard with every possible metric, I focused each area around one purpose. The design highlights the current state, small improvements, and actionable next steps.":
    "ダッシュボードにすべての指標を詰め込むのではなく、各エリアを一つの目的に集中させました。現在の状況、小さな変化、次に取るべき行動が見える設計にしました。",
  "Keeping consistency with the existing app while optimizing for web.":
    "既存アプリとの一貫性を保ちながら、Webに最適化する。",
  "I adapted the existing app visual language to a responsive web layout, reorganized UI patterns, and expanded components for advanced settings, preview states, data cards, and creation flows.":
    "既存アプリのビジュアル言語をベースに、Web向けのレイアウト・操作性・情報量へ最適化しました。高度な設定、プレビュー状態、データカード、制作フローに対応するコンポーネントを拡張しました。",
  "This project helped me practice designing a creator-facing product where data, editing, and motivation must work together. It also strengthened my ability to turn an existing app experience into a more extensible web workspace.":
    "このプロジェクトでは、データ、編集、モチベーションが連動するクリエイター向けプロダクトの設計を経験しました。また、既存アプリ体験を拡張性のあるWebワークスペースへ展開する力を高めました。",
  "GraceGo focuses on the anxiety and burden older adults face during everyday travel. Through research, we explored not only older adults' needs, but also the relationship with family members and supporters who help them move with confidence.":
    "GraceGoは、高齢者が日常の移動や外出時に抱える不安や負担に着目したサービスです。リサーチを通じて、本人だけでなく、支援する家族や周囲の人との関係性も含めて検討しました。",
  "How might we support older adults when digital mobility services create moments of uncertainty or breakdown?":
    "デジタル化した移動環境の中で、高齢者がつまずく瞬間をどのように支援できるか。",
  "As urban services become more digital, older adults may face barriers in information access, operation, and cognition. Mobility is especially important because it directly affects daily life, independence, hospital visits, banking, and social activities.":
    "都市サービスのDX化により、高齢者には情報アクセス、操作、認知の面で複数の利用障壁が生じています。特に移動は、日常生活、自立、通院、銀行手続き、社会参加に直結する重要な領域です。",
  "A travel support concept that connects preparation, journey guidance, and timely help from supporters.":
    "外出前の準備、移動中の案内、支援者によるタイムリーなサポートをつなぐ移動支援コンセプト。",
  "GraceGo proposes a digital support flow that helps older adults plan before going out, understand routes during travel, reduce repeated operations, and share key status with supporters when help is needed.":
    "GraceGoは、外出前の計画、移動中の経路理解、操作負担の軽減、必要なタイミングでの支援者との状況共有を支えるデジタルサポートフローを提案します。",
  "The research identified major barriers, user groups, and mobility support needs for older adults in digital urban life.":
    "本研究では、都市DX環境における高齢者の利用障壁、ユーザー分類、主要な移動支援ニーズを特定しました。",
  "The findings were referenced in the Blue Book on digital product aging-friendly research, published through a collaboration between Alibaba Cloud, Dataway, and Shanghai Jiao Tong University School of Design.":
    "調査知見は、Alibaba Cloud・零点有数・上海交通大学デザイン学院の共同研究として発表された「銀髪族デジタル製品適老化研究ブルーブック」に引用されました。",
  "Studying both older adults and supporters as an interconnected travel experience.":
    "高齢者と支援者の双方を、相互に関わる移動体験として捉える。",
  "We conducted semi-structured interviews with six older adults and four supporters. The research focused on travel processes, difficulties, coping methods, and expected support functions.":
    "高齢者6名・支援者4名に半構造化インタビューを実施し、移動プロセス、困難点、対処方法、期待される支援機能を軸に調査しました。",
  "Support is not needed all the time; it appears at specific moments of judgment, operation, and confirmation.":
    "支援は常に必要なのではなく、判断・操作・確認の特定の瞬間に集中して発生する。",
  "Journey mapping showed that difficulties concentrate around route understanding, transfer decisions, remembering stops, presenting digital codes, confirming location, and asking for help when something goes wrong.":
    "ジャーニー分析により、経路理解、乗換判断、下車地点の記憶、デジタルコード提示、現在地確認、トラブル時の支援依頼などに課題が集中することが分かりました。",
  "Reducing cognitive load while preserving older adults' sense of independence.":
    "高齢者の自立感を保ちながら、認知負荷を下げる。",
  "We translated research needs into design directions: intuitive route information, fewer operation steps, clear boarding and alighting cues, location sharing, progress visibility, and low-burden supporter intervention.":
    "調査から、直感的な経路情報、少ない操作ステップ、明確な乗降タイミング、位置共有、進捗の可視化、支援者の負担を抑えた介入といった設計方針を導きました。",
  "Connecting pre-trip planning with in-trip and post-trip support.":
    "外出前の準備と、移動中・外出後の支援をつなぐ。",
  "The proposed interface organizes support around before-travel, during-travel, and after-travel moments. The goal is to make route choices more understandable for older adults while helping supporters know when and how to intervene.":
    "提案UIは、外出前・移動中・外出後の場面を軸に支援を整理しました。高齢者が経路選択を理解しやすくし、支援者がいつ・どのように関わるべきか把握できることを目指しました。",
  "This project trained me to see accessibility as a relationship between people, context, and timing. It also helped me structure research insights into service concepts that support autonomy rather than replacing it.":
    "このプロジェクトでは、アクセシビリティを人・文脈・タイミングの関係として捉える視点を学びました。また、自立を置き換えるのではなく支えるサービスコンセプトへ調査知見を構造化する経験になりました。",
  "Pet's Voice is a service design project created during the COVID-19 lockdown. It focuses on pet owners who were temporarily isolated or unable to return home, and on volunteers who tried to rescue and care for pets left alone.":
    "Pet's Voiceは、COVID-19によるロックダウン期に制作したサービスデザインプロジェクトです。一時的な隔離や帰宅困難によりペットを世話できなくなった飼い主と、取り残されたペットを救助・ケアしようとするボランティアに着目しました。",
  "How might we help pet owners and volunteers coordinate emergency pet rescue while protecting privacy, safety, trust, and rescue efficiency?":
    "プライバシー、安全性、信頼、救助効率を守りながら、飼い主とボランティアが緊急時のペット救助を円滑に進めるにはどうすればよいか。",
  "During the lockdown, many pets were left at home without food or water. Pet owners could not return home and could only wait anxiously for updates. At the same time, volunteers faced unclear task information, privacy concerns, route limitations, property access issues, and risks during rescue actions.":
    "ロックダウン中、多くのペットが水や食料のない状態で家に取り残されました。飼い主は帰宅できず、救助状況の連絡を不安なまま待つしかありませんでした。一方でボランティアは、不明確なタスク情報、プライバシーへの懸念、移動制限、住宅への立ち入り、救助時の安全リスクに直面していました。",
  "A public service system that matches pet owners with nearby volunteers and professional rescue organizations.":
    "飼い主、近隣ボランティア、専門保護団体をマッチングする公共サービスシステム。",
  "Pet owners can submit rescue requests, provide pet and home information, authorize entry, track progress, and complete payment. Volunteers can view task details, receive rescue guidance, communicate safely through the platform, report special situations, and get insurance support.":
    "飼い主は救助依頼を提出し、ペットや住居情報の入力、入室許可、進捗確認、支払いを行えます。ボランティアはタスク詳細を確認し、救助ガイドを受け取り、プラットフォーム上で安全に連絡し、特殊状況を報告し、保険によるサポートを受けられます。",
  "The project won the National Third Prize in the 2020 UXDA User Experience Design Competition.":
    "本プロジェクトは、2020 UXDAユーザー体験デザインコンテストで全国三等賞を受賞しました。",
  'It was also selected for the International Youth Art Festival "Design out Isolation," the DESIS Lab / COVID-19 online exhibition, and Collaborative City @ Lille 2020, World Design Capital.':
    "また、「湖畔国際青年芸術祭 - Design out Isolation」、DESIS Lab / COVID-19オンライン展、Collaborative City @ Lille 2020 World Design Capitalにも選出されました。",
  "Understanding the rescue journey from both pet owners' and volunteers' perspectives.":
    "飼い主とボランティア双方の視点から救助ジャーニーを理解する。",
  "We interviewed pet owners, individual volunteers, and animal rescue association volunteers. Pet owners worried about whether their pets were still alive, whether volunteers were trustworthy, whether property would be damaged, and whether rescue costs would become unclear.":
    "ペットの飼い主、個人ボランティア、動物保護団体のボランティアにインタビューを行いました。飼い主は、ペットが無事か、ボランティアを信頼できるか、家財が損傷しないか、救助費用が不透明にならないかを不安に感じていました。",
  "Turning an informal mutual-aid process into a structured, trustworthy, and protected rescue system.":
    "非公式な相互扶助を、構造化された信頼性と保護のある救助システムへ転換する。",
  "By matching users by location, clarifying rescue tasks, protecting private information, offering action guides, and connecting professional partners such as shelters, pet hospitals, locksmiths, insurance companies, and disposal services, the platform could reduce uncertainty for both sides.":
    "位置情報によるマッチング、救助タスクの明確化、個人情報の保護、行動ガイドの提供、保護施設・動物病院・鍵業者・保険会社・無害化処理サービスなど専門パートナーとの連携により、双方の不確実性を下げることを目指しました。",
  "Mapping stakeholders, user journeys, service flows, and backstage support systems.":
    "ステークホルダー、ユーザージャーニー、サービスフロー、バックエンドの支援体制を整理する。",
  "The service was divided into different task types. Simple tasks within the same community could be handled by local volunteers, while complex, risky, or cross-community tasks would be transferred to professional association volunteers.":
    "サービスではタスクを種類ごとに分類しました。同じコミュニティ内の簡単なタスクは地域ボランティアが担当し、複雑・高リスク・広範囲のタスクは専門保護団体のボランティアへ引き継ぐ設計にしました。",
  "Designing an app platform for mutual aid, publishing rescue requests, safe messaging, and task tracking.":
    "相互扶助、救助依頼の投稿、安全なメッセージ、タスク進捗確認のためのアプリプラットフォームを設計する。",
  "The app includes five main areas: Mutual Aid, Discover, Publish, Messages, and Profile. Pet owners can publish rescue requests and track progress, while volunteers can accept tasks, review pet information, follow rescue guidance, and report special cases.":
    "アプリは「互助」「発見」「投稿」「メッセージ」「マイページ」の5つの主要領域で構成されています。飼い主は救助依頼を投稿し進捗を確認でき、ボランティアはタスクの受注、ペット情報の確認、救助ガイドの参照、特殊状況の報告を行えます。",
  "This project helped me understand service design as a coordination system between people, resources, risks, and trust. Instead of designing only an app interface, I learned to design the relationships behind the interface.":
    "このプロジェクトを通じて、サービスデザインを人、資源、リスク、信頼を調整するシステムとして捉えることを学びました。単にアプリ画面を設計するのではなく、その背後にある関係性を設計する経験になりました。",
};

const translatableSelectors = [
  ".hero h1",
  ".hero p",
  ".project-summary",
  ".project-content h4",
  ".project-content p",
  ".text-link",
  ".about-copy h2",
  ".about-copy p",
  ".back-link",
  ".case-hero p",
  ".case-overview-copy h2",
  ".case-overview-copy h3",
  ".case-overview-copy p",
  ".case-facts dt",
  ".case-facts dd",
  ".case-sidebar a",
  ".case-section h2",
  ".case-section p",
  ".case-pager-link",
];

const translatableNodes = [
  ...document.querySelectorAll(translatableSelectors.join(",")),
].filter((node) => {
  if (node.matches(".site-nav a, .site-footer a, .site-footer strong, .site-footer p")) {
    return false;
  }
  return Boolean(translations[normalizeText(node.textContent)]);
});

translatableNodes.forEach((node) => {
  node.dataset.enText = node.innerHTML;
});

const languageButtons = document.querySelectorAll("[data-lang-switch]");

const setNodeContent = (node, value) => {
  if (typeof value === "object") {
    node.innerHTML = value.html;
    return;
  }

  if (node.querySelector("svg")) {
    const textNode = [...node.childNodes].find(
      (child) => child.nodeType === Node.TEXT_NODE && child.textContent.trim()
    );
    if (textNode) {
      textNode.textContent = ` ${value} `;
    }
    return;
  }

  node.textContent = value;
};

const setLanguage = (language) => {
  document.documentElement.lang = language === "jp" ? "ja" : "en";
  translatableNodes.forEach((node) => {
    if (language === "en") {
      node.innerHTML = node.dataset.enText;
      return;
    }

    const key = normalizeText(node.textContent);
    const translated = translations[key];
    if (!translated) return;
    setNodeContent(node, translated);
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.langSwitch === language);
  });
  localStorage.setItem("portfolio-language", language);
};

if (languageButtons.length) {
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.langSwitch));
  });
  setLanguage(localStorage.getItem("portfolio-language") || "en");
}
