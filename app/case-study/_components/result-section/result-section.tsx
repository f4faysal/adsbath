export default function ResultsSection() {
  return (
    <section className=" py-12 px-6 md:px-16 lg:px-32">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        RESULTS:
      </h2>

      {/* Metrics */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-12">
        <div className="text-center">
          <h3 className="text-5xl font-bold">12x</h3>
          <p className="text-gray-500">Average 12X ROAS</p>
        </div>
        <div className="text-center">
          <h3 className="text-5xl font-bold">300%</h3>
          <p className="text-gray-500">Scaled Budget</p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="">
            <tr>
              <th className="border border-gray-300 p-2">Campaign</th>
              <th className="border border-gray-300 p-2">Results</th>
              <th className="border border-gray-300 p-2">Cost per Results</th>
              <th className="border border-gray-300 p-2">Amount Spent</th>
              <th className="border border-gray-300 p-2">
                ROAS (return on ad spend)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 text-blue-600 underline">
                tm_conversion rtg
              </td>
              <td className="border border-gray-300 p-2">
                217 Website purchases
              </td>
              <td className="border border-gray-300 p-2">
                $11.18 Per Purchase
              </td>
              <td className="border border-gray-300 p-2">$2,426.72</td>
              <td className="border border-gray-300 p-2">$7.77</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-blue-600 underline">
                tm_conversion
              </td>
              <td className="border border-gray-300 p-2">
                892 Website purchases
              </td>
              <td className="border border-gray-300 p-2">
                $10.47 Per Purchase
              </td>
              <td className="border border-gray-300 p-2">$9,336.08</td>
              <td className="border border-gray-300 p-2">$10.31</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-300 p-2">
                Results from 2 campaigns
              </td>
              <td className="border border-gray-300 p-2">
                1109 Website purchases
              </td>
              <td className="border border-gray-300 p-2">
                $10.61 Per Purchase
              </td>
              <td className="border border-gray-300 p-2">$11,762.80</td>
              <td className="border border-gray-300 p-2">$9.79</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
