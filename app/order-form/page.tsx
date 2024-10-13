"use client";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema for validation
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  website: z.string().url("Enter a valid website URL").optional(),
  adSpend: z.enum(["< $1,000", "$1,000 - $5,000", "> $5,000"], {
    required_error: "Please select your monthly ad spend",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function OrderForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      adSpend: undefined,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-900 text-white py-[200px]">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 p-8 justify-around">
        {/* Left Side Text */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extralight leading-snug">
            Get immediate boost in your Google Ads performance
          </h1>
          <p className="text-gray-400">
            Tell us a little bit about you and well be in touch
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-neutral-800 p-8 rounded-lg shadow-lg space-y-6 w-[75%] ml-auto"
        >
          {/* Name Input */}
          <div>
            <label className="block text-sm mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full p-3 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name here"
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  className="w-full p-3 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter email here"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Website Input */}
          <div>
            <label className="block text-sm mb-2">Website URL</label>
            <Controller
              name="website"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="url"
                  className="w-full p-3 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your website here"
                />
              )}
            />
            {errors.website && (
              <p className="text-red-500 text-sm mt-1">
                {errors.website.message}
              </p>
            )}
          </div>

          {/* Ad Spend Select */}
          <div>
            <label className="block text-sm mb-2">
              Current Monthly Ad Spend
            </label>
            <Controller
              name="adSpend"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full p-3 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select one...</option>
                  <option value="< $1,000">&lt; $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="> $5,000">&gt; $5,000</option>
                </select>
              )}
            />
            {errors.adSpend && (
              <p className="text-red-500 text-sm mt-1">
                {errors.adSpend.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>

          <p className="text-sm text-gray-400 text-center">
            We respect your privacy.
          </p>
        </form>
      </div>
    </section>
  );
}
