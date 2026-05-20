import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Axios } from "../utils/api";
import type { Product } from "../utils/type";

type Comment = {
  id: number;
  author: string;
  text: string;
  createdAt: string;
};

export default function ProductsDetails() {
  const { id } = useParams();
  const [data, setData] = useState<Product | undefined>();
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Jane",
      text: "Love this product — great value!",
      createdAt: "2026-05-01",
    },
    {
      id: 2,
      author: "Tom",
      text: "Fast shipping and well packed.",
      createdAt: "2026-05-10",
    },
  ]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(4);

  useEffect(() => {
    if (!id) return;
    Axios.get<Product>(`/products/${id}`).then((res) => setData(res.data));
  }, [id]);

  function handleCommentSubmit(e: any) {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;
    const next: Comment = {
      id: Date.now(),
      author: author.trim(),
      text: text.trim(),
      createdAt: new Date().toISOString().split("T")[0],
    };
    setComments((s) => [next, ...s]);
    setAuthor("");
    setText("");
  }

  return (
    <main className="mx-auto w-full max-w-7xl">
      {data ? (
        <div className="grid gap-8 lg:grid-cols-12">
          <aside className="col-span-12 lg:col-span-5">
            <div className="overflow-hidden rounded-3xl bg-slate-100 shadow-lg">
              <img
                src={data.photo}
                alt={data.name}
                className="h-80 w-full object-cover sm:h-[420px] lg:h-full"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {data.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Product ID: {data.id}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="text-2xl font-bold text-slate-900">
                    ${data.price?.toFixed(2)}
                  </div>
                  <button className="ml-auto rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
              <h4 className="mb-3 text-sm font-semibold text-slate-900">
                Comments
              </h4>

              <form onSubmit={handleCommentSubmit} className="mb-4 space-y-2">
                <div className="grid gap-2 sm:grid-cols-2">
                  <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                  />
                  <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write a comment"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-violet-700"
                  >
                    Post comment
                  </button>
                </div>
              </form>

              <div className="space-y-3">
                {comments.map((c) => (
                  <div
                    key={c.id}
                    className="rounded-lg border border-slate-100 p-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-slate-900">
                        {c.author}
                      </div>
                      <div className="text-xs text-slate-400">
                        {c.createdAt}
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-slate-700">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
          <section className="col-span-12 lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 shadow-md">
              <h1 className="text-3xl font-bold text-slate-900">{data.name}</h1>
              <div className="mt-4 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-900">
                    <span>{rating}.0</span>
                    <span className="text-slate-500">/ 5</span>
                  </div>
                  <span className="text-sm text-slate-500">1.4k reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => {
                    const starValue = i + 1;
                    const active = starValue <= rating;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() =>
                          setRating((prev) =>
                            prev === starValue ? 0 : starValue,
                          )
                        }
                        className={`rounded-full p-1 transition ${
                          active
                            ? "text-amber-400 hover:text-amber-500"
                            : "text-slate-300 hover:text-slate-400"
                        }`}
                        aria-label={`${starValue} star rating`}
                      >
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-slate-500">
                  Click a star to set rating, click again to clear.
                </p>
              </div>
              <p className="mt-4 text-lg text-slate-700">
                Price:{" "}
                <span className="font-semibold text-slate-900">
                  ${data.price?.toFixed(2)}
                </span>
              </p>
              <p className="mt-6 text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio, perspiciatis. Detailed product description goes here
                — features, specifications, and care instructions.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button className="rounded-2xl bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow hover:bg-violet-700">
                  Buy now
                </button>
                <button className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">
                  Add to wishlist
                </button>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-100 p-4">
                  <h5 className="text-sm font-semibold text-slate-900">
                    Specifications
                  </h5>
                  <ul className="mt-2 text-sm text-slate-600 list-inside list-disc">
                    <li>High-quality materials</li>
                    <li>2-year warranty</li>
                    <li>Free shipping</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-slate-100 p-4">
                  <h5 className="text-sm font-semibold text-slate-900">
                    Shipping & returns
                  </h5>
                  <p className="mt-2 text-sm text-slate-600">
                    Free 3-5 day shipping. 30-day returns on unused items.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-200 p-12 text-center">
          Loading product...
        </div>
      )}
    </main>
  );
}
