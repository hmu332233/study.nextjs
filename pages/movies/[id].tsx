import { useRouter } from "next/router";

function MovieDetail() {
  const router = useRouter();
  const { query: { id, title } } = router;
  return (
    <div>
      <h4>{title ?? 'Loading...'}</h4>
    </div>
  );
}

export default MovieDetail;