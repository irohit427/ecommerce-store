import { Billboard, Store } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}`

const getStore = async () => {
  const res = await fetch(`${URL}`);
  return res.json();
};

export default getStore;