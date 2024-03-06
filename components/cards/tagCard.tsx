import Link from "next/link";

const TagCard = ({ tag }: any) => {
  return (
    <Link
      href={`/tags/${tag._id}`}
      className="shadow-light100_darknone w-full max-xs:min-w-full sm:w-[260px]"
    >
      <article className="background-light900_dark200 light-border flex w-full flex-col items-start justify-center rounded-2xl border p-8">
        <div className="background-light800_dark400 w-fit rounded-sm p-1.5">
          <p className="paragraph-semibold text-dark300_light900">{tag.name}</p>
        </div>
        <p className="small-medium text-dark400_light500 mt-3.5 ">
          <span className="body-semibold primary-text-gradient mr-2.5">
            {" "}
            {tag.questions.length}+{" "}
          </span>
          Questions
        </p>
      </article>
    </Link>
  );
};

export default TagCard;
