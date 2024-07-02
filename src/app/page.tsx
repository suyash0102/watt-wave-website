import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8 sm:p-24 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Watt Wave Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Watt Wave</h1>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">You Park We Charge | Wireless Charging for EVs.</p>
        <div className="bg-gray-200 dark:bg-zinc-800/30 w-72 h-72 rounded-lg mx-auto overflow-hidden shadow-lg">
          {/* Placeholder Image */}
          <Image
            src="/watt-wave-logo.jpeg" // Replace with your actual image path
            alt="Watt Wave Logo"
            width={400} // Specify the width
            height={300} // Specify the height
            layout="responsive"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
