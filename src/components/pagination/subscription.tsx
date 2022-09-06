export function Subscription({
  currentPage,
  maxPage,
}: {
  maxPage: number;
  currentPage: number;
}) {
  return (
    <p>
      {currentPage * 4 - 3}-{currentPage * 4} of {maxPage * 4} Results
    </p>
  );
}
