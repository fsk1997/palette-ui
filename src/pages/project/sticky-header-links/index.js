import { Link } from "gatsby";
import React from "react";
import * as styles from "./index.module.css";

// Non essential imports
import ProjectLayout from "../../../components/Layouts/ProjectLayout";
import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../../../hooks/useSiteMetadata";
import slugify from "react-slugify";
import Seo from "../../../components/Seo";

const StickyHeaderLinks = () => {
  const siteMetadata = useSiteMetadata();
  
  const data = useStaticQuery(graphql`
    {
      projectJson(slug: { eq: "sticky-header-links" }) {
        ...ProjectFragment
      }
    }
  `);

  const project = data.projectJson

  return (
    <ProjectLayout
      projectTitle={project.title}
      projectStatus={project.status}
      projectVersion={project.version}
      projectCoverImage={project.cover_image.childImageSharp.gatsbyImageData}
      projectDescription={project.description}
      projectDependencies={project.dependencies}
      projectGithubUrl={project.github_url}
    >
      <Seo 
        customTitle={`${project.title} | ${siteMetadata.title}`}
        customDescription={project.description}
        customURL={`${siteMetadata.url}/${slugify(project.title)}`}
      />
      <div className={styles.page}>
        <header className={styles.header}>
          <img
            src="https://voguegirl.jp/wp-content/uploads/2022/05/adidas-7-1.jpg"
            width="1200"
            height="800"
          />
          <div className={styles.headerContent}>
            <h1 className={styles.container}>
              サステナブルとスタイリッシュを体現。「adidas Originals by
              Parley」で、山本奈衣瑠とベーシックをアップデート。
            </h1>
            <div>
              <ul className={styles.container}>
                <li>
                  <Link to="/ios-header">Link</Link>
                </li>
                <li>
                  <Link to="/bottom-tab-navigator">Link</Link>
                </li>
                <li>
                  <Link to="/loaded-image">Link</Link>
                </li>
                <li>
                  <Link to="/fading-backdrop-blur">Link</Link>
                </li>
                <li>
                  <Link to="/sticky-background-image">Link</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className={styles.container}>
          <p>
            近年ますます加速するファッション界のサステナブルな流れは、一時的ではなく普遍的な取り組みへと進化し続けている。その中でアディダスが打ち出すのは、海洋環境保護に取り組む「Parley
            for the Oceans」とのコラボレーションから誕生した「adidas Originals
            by
            Parley」コレクション。海岸や海沿いのコミュニティで回収されたプラスチックゴミをアップサイクルして生まれた素材「Parley
            Ocean Plastic」を50％以上含んだ糸を使用し、アディダス
            オリジナルスの定番モデルをアップデートした。
          </p>
          <p>
            「あたりまえを、あたらしく。」──。そこには、普遍的価値をあたらしくつくり変えていくという想いが込められている。現在女優やモデルとして活躍する山本奈衣瑠が、サステナブルとファッションが融合する個性あふれるスタイリングを披露する。
          </p>
          <h3>ボリューミーな足もとを引き立てる、あえてのワントーン。</h3>
          <p>
            ストリート感たっぷりな、ミッドカットが特徴の「FORUM（フォーラム）」。シグネチャーであるアンクルストラップやXデザインを残しながらも、生産工程で不要になったBOOSTを粉砕した素材を20%、アッパーには「Parley
            Ocean
            Plastic」糸を含むリサイクル素材を50％以上、シューレースには100％使用しアップデートさせた。足もと以外を鮮やかなブルーの異素材ワントーンでまとめ、ボリューミーなモノトーンの足もとを主役にスタイリング。ブラをリメイクしたビスチェをレイヤードして、遊びとメリハリも加えた。さらに、今回着用したトラックパンツも、100％リサイクル素材を使用した環境に優しい一品だ。
          </p>
          <h3>
            「スニーカーもパンツも一見リサイクル素材って分からない、いい意味での“普通さ”がすごくいい」
          </h3>
          <p>
            <b>Ｑ1. いつから環境問題を意識するようになった？</b>
          </p>
          <p>
            Ａ.
            25歳くらいだったかな。「もし地球がこのままいくと四季がなくなって、大好きな季節を楽しめなくなったり、それぞれの季節特有の匂いがなくなってしまうのかも⁉」って思ったことがあって。そこから、まずは地球の現状を知ることや、知識を身につけることを大事にするようになりました。実際にアクションを起こせないとしても、知ることをきっかけに自分の中の意識が変わっていけばいいと思うので。
          </p>

          <p>
            <b>Ｑ2. ファッションとサステナビリティの関係についてどう思う？</b>
          </p>
          <p>
            Ａ.
            今では友達同士でサステナビリティ関連の話をするのは普通のことだし、選択肢があってより環境にいいものがあるのなら、そっちのほうがいいでしょ！ってなりますよね。でも、ファッションに関してはあからさまだと日常で身につけにくくなっちゃうから、あくまで“普通”に見えるものがいいんです。そう考えると、今回のコレクションは本当に普段のスタイリングにしっくりなじんでくれるので、「環境にいいから選んでる」っていうのを超えた、ファッションとしての選択ができるものだと思います。
          </p>
          <p>
            <b>Ｑ3. 実際に実践しているサステナブルなことは？</b>
          </p>
          <p>
            Ａ.
            使い捨てのラップじゃなくシリコン製のリユースできるものにしたり、水筒を持ち歩いたり、エコバッグで買い物をしたり。あと、必要がなければお箸やストローをもらわないようにしています。古着が好きなんですけど、正直毎日同じ服でもいいタイプなのであまり服をたくさん買ったりしないんですよね。穴が空いたら縫って着るし、鞄も糸がほつれたらあえて色糸で手縫いしてアレンジしたり。ちなみにプライベートでも「スーパースター」を愛用してるんですけど、ガシガシ洗って長年履いてます。
          </p>
        </div>
      </div>
    </ProjectLayout>
  );
};

export default StickyHeaderLinks;
