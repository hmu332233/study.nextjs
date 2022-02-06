import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

type Props = {
  params: string[],
};

function MovieDetail({
  params,
}: Props) {
  const router = useRouter();
  // const { query: { params } } = router;
  const [id, title] = params;
  return (
    <div>
      <Seo title={title} />
      <h4>{title ?? 'Loading...'}</h4>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      params: params?.params,
    }
  };
};

export default MovieDetail;