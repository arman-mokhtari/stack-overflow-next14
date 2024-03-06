"use client";
import { useEffect, useState } from "react";
import { getTopInteracttedTags } from "@/lib/actions/tag.action";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import RenderTags from "../shared/RenderTags";

interface Props {
  user: {
    _id: string;
    clerkId: string;
    picture: string;
    name: string;
    username: string;
  };
}

const UserCard = ({ user }: Props) => {
  const [interactedTags, setInteractedTags] = useState([
    {
      _id: "",
      name: "",
    },
  ]);

  useEffect(() => {
    const fetchTags = async () => {
      const tags = await getTopInteracttedTags({ userId: user._id });
      setInteractedTags(tags);
    };

    fetchTags();
  }, [user._id]);

  return (
    <Link
      href={`/profile/${user.clerkId}`}
      className="shadow-light100_darknone w-full max-xs:min-w-full xs:w-[260px]"
    >
      <article className="background-light900_dark200 light-border flex w-full flex-col items-center justify-center rounded-2xl border p-8">
        <Image
          src={user.picture}
          alt="user profile picture"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="mt-4 text-center">
          <h3 className="h3-bold text-dark200_light900 line-clamp-1">
            {user.name}
          </h3>
          <p className="text-dark500_light500 body-regular mt-2">
            @{user.username}
          </p>
        </div>
        <div className="mt-5">
          {interactedTags.length > 0 ? (
            <div className="flex items-center gap-2">
              {interactedTags.map((tag) => (
                <RenderTags key={tag._id} _id={tag._id} name={tag.name} />
              ))}
            </div>
          ) : (
            <Badge>No tags yet</Badge>
          )}
        </div>
      </article>
    </Link>
  );
};

export default UserCard;
