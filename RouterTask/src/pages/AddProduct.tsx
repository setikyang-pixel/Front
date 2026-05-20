import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import type { Product } from "../utils/type";
import { Axios } from "../utils/api";

type AddProductForm = {
  name: string;
  price: string;
  category: string;
  quantity: string;
  description: string;
  photo: string;
};

export default function AddProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState<AddProductForm>({
    name: "",
    price: "",
    category: "Electronics",
    quantity: "1",
    description: "",
    photo: "",
  });

  useEffect(() => {
    Axios.get<Product[]>("/products").then((res) => setProducts(res.data));
  }, []);

  function handleChange(field: keyof AddProductForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!form.name.trim() || !form.photo.trim() || !form.price.trim()) {
      setErrorMessage("Please provide a name, image URL and price.");
      return;
    }

    const payload = {
      name: form.name.trim(),
      photo: form.photo.trim(),
      price: Number(form.price) || 0,
      category: form.category,
      quantity: Number(form.quantity) || 0,
      description: form.description.trim(),
    };

    try {
      setSubmitting(true);
      const response = await Axios.post<Product>("/products", payload);
      setProducts((prev) => [...prev, response.data]);
      setSuccessMessage("Product added successfully and saved to data.json.");
      setForm({
        name: "",
        price: "",
        category: "Electronics",
        quantity: "1",
        description: "",
        photo: "",
      });
    } catch (error) {
      setErrorMessage(
        "Unable to save product. Make sure json-server is running with npm run server.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="mx-auto max-w-4xl rounded-[32px] border border-slate-200/10 bg-slate-50/90 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:p-10">
      <div className="mb-8 flex flex-col gap-3 text-slate-900">
        <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-700">
          New product entry
        </span>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Add product to inventory
        </h1>
        <p className="max-w-2xl text-sm text-slate-500 sm:text-base">
          Fill in the fields below to register a new product. Your product will
          be saved to <code>data.json</code> and appear immediately in the
          product list below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="group">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Product name
            </span>
            <input
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              type="text"
              placeholder="e.g. Wireless headphones"
              className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-200/40"
            />
          </label>

          <label className="group">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Price
            </span>
            <input
              value={form.price}
              onChange={(e) => handleChange("price", e.target.value)}
              type="number"
              step="0.01"
              placeholder="0.00"
              className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-200/40"
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="group">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Category
            </span>
            <select
              value={form.category}
              onChange={(e) => handleChange("category", e.target.value)}
              className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-200/40"
            >
              <option>Electronics</option>
              <option>Home</option>
              <option>Office</option>
              <option>Outdoor</option>
            </select>
          </label>

          <label className="group">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Inventory quantity
            </span>
            <input
              value={form.quantity}
              onChange={(e) => handleChange("quantity", e.target.value)}
              type="number"
              min="1"
              placeholder="12"
              className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-200/40"
            />
          </label>
        </div>

        <label className="group">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Description
          </span>
          <textarea
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
            rows={5}
            placeholder="Enter a short description of the product"
            className="w-full rounded-[28px] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-200/40"
          />
        </label>

        <label className="group">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Product image URL
          </span>
          <input
            value={form.photo}
            onChange={(e) => handleChange("photo", e.target.value)}
            type="url"
            placeholder="https://example.com/image.jpg"
            className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-200/40"
          />
        </label>

        {errorMessage && (
          <div className="rounded-3xl bg-rose-50 px-4 py-3 text-sm text-rose-700 shadow-sm">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="rounded-3xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700 shadow-sm">
            {successMessage}
          </div>
        )}

        <div className="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-gradient-to-r from-cyan-500/10 via-slate-50 to-violet-500/10 p-5 shadow-inner shadow-slate-900/5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Ready to submit?
            </p>
            <p className="text-sm text-slate-500">
              Review your product details before sending.
            </p>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Saving..." : "Create product"}
          </button>
        </div>
      </form>

      <div className="mt-10 rounded-[32px] border border-slate-200/10 bg-white/90 p-6 shadow-2xl shadow-slate-900/5">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">
          Current products
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-3xl border border-slate-200/80 bg-slate-50 p-4 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <img
                  src={product.photo}
                  alt={product.name}
                  className="h-14 w-14 rounded-2xl object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900">{product.name}</p>
                  <p className="text-sm text-slate-500">
                    ${product.price?.toFixed(2)}
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 line-clamp-2">
                {"description" in product
                  ? (product as any).description
                  : "No description available."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
