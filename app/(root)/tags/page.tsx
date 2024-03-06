import LocalSearchbar from "@/components/shared/search/localSearch";
import Filter from "@/components/shared/filters";

import TagCard from "@/components/cards/tagCard";
import { GetAllTags } from "@/lib/actions/tag.action";
import NoResult from "@/components/shared/noResult";
import { TagFilters } from "@/constants/filters";

const Page = async () => {
  const result = await GetAllTags({});
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Tags</h1>
      </div>
      <div className="mt-11 flex justify-between  gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for amazing tags"
          otherClasses="flex-1"
        />
        <Filter
          filters={TagFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses=" "
        />
      </div>
      <section className="mt-12 flex flex-wrap gap-4">
        {result.tags.length ? (
          result.tags.map((tag) => {
            return <TagCard key={tag._id} tag={tag} />;
          })
        ) : (
          <NoResult
            title="No Tags Found"
            description="No tags found, please try again with different filters"
            link="/ask-question"
          />
        )}
      </section>
    </>
  );
};

export default Page;
