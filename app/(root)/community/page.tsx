
import { getAllUsers } from "@/lib/actions/user.action";
import Link from "next/link";
import UserCard from "@/components/cards/userCard";
import { UserFilters } from "@/constants/filters";
import LocalSearch from "@/components/shared/search/localSearchBar";
import Filter from "@/components/shared/filter";

const Page = async () => {
    const result = await getAllUsers({});
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Users</h1>
      </div>
      <div className="mt-11 flex justify-between  gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for amazing minds"
          otherClasses="flex-1"
        />
        <Filter
          filters={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses=""
        />
      </div>
      <section className="mt-12 flex flex-wrap gap-4">
    {
        result.users.length>0 ?(
            result.users.map((user)=>{
                return <UserCard key={user._id} user={user}/> 
            })
        ):(
            <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
                <p>No users yet!</p>
                <Link href="/sign-up" className="mt-2 font-bold text-accent-blue ">
                Join to be first! 
                </Link>
            </div>
        )
    }
      </section>
    </>
  );
};

export default Page;
